package handler

import (
	"encoding/json"
	"errors"
	"net/http"

	"github.com/go-playground/validator/v10"

	"github.com/SatuSattr/server-minecraft.id/backend/internal/middleware"
	"github.com/SatuSattr/server-minecraft.id/backend/internal/respond"
	"github.com/SatuSattr/server-minecraft.id/backend/internal/service"
)

// AuthHandler handles HTTP requests for authentication endpoints.
type AuthHandler struct {
	svc      *service.AuthService
	validate *validator.Validate
	isProd   bool
}

// NewAuthHandler creates an AuthHandler.
func NewAuthHandler(svc *service.AuthService, v *validator.Validate, isProd bool) *AuthHandler {
	return &AuthHandler{svc: svc, validate: v, isProd: isProd}
}

// Register handles POST /api/auth/register
func (h *AuthHandler) Register(w http.ResponseWriter, r *http.Request) {
	var req service.RegisterRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		respond.Error(w, http.StatusBadRequest, "BAD_REQUEST", "invalid JSON body")
		return
	}

	if err := h.validate.Struct(req); err != nil {
		respond.Error(w, http.StatusUnprocessableEntity, "VALIDATION_ERROR", formatValidationErrors(err))
		return
	}

	user, err := h.svc.Register(r.Context(), req)
	if err != nil {
		switch {
		case errors.Is(err, service.ErrEmailTaken):
			respond.Error(w, http.StatusConflict, "EMAIL_TAKEN", "email already registered")
		case errors.Is(err, service.ErrUsernameTaken):
			respond.Error(w, http.StatusConflict, "USERNAME_TAKEN", "username already taken")
		default:
			respond.Error(w, http.StatusInternalServerError, "INTERNAL_ERROR", "registration failed")
		}
		return
	}

	respond.JSON(w, http.StatusCreated, map[string]any{
		"id":         user.ID,
		"username":   user.Username,
		"email":      user.Email,
		"role":       user.Role,
		"created_at": user.CreatedAt,
	})
}

// Login handles POST /api/auth/login
func (h *AuthHandler) Login(w http.ResponseWriter, r *http.Request) {
	var req service.LoginRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		respond.Error(w, http.StatusBadRequest, "BAD_REQUEST", "invalid JSON body")
		return
	}

	if err := h.validate.Struct(req); err != nil {
		respond.Error(w, http.StatusUnprocessableEntity, "VALIDATION_ERROR", formatValidationErrors(err))
		return
	}

	accessToken, refreshToken, err := h.svc.Login(r.Context(), req)
	if err != nil {
		switch {
		case errors.Is(err, service.ErrInvalidCredentials):
			respond.Error(w, http.StatusUnauthorized, "INVALID_CREDENTIALS", "invalid email or password")
		case errors.Is(err, service.ErrAccountLocked):
			respond.Error(w, http.StatusTooManyRequests, "ACCOUNT_LOCKED", "account locked due to too many failed attempts")
		default:
			respond.Error(w, http.StatusInternalServerError, "INTERNAL_ERROR", "login failed")
		}
		return
	}

	h.setAccessCookie(w, accessToken)
	h.setRefreshCookie(w, refreshToken)

	// Fetch user info for response — we need to get user from the token claims.
	claims, _ := h.svc.ParseAccessToken(accessToken)
	respond.JSON(w, http.StatusOK, map[string]any{
		"id":   claims.UserID,
		"role": claims.Role,
	})
}

// Refresh handles POST /api/auth/refresh
func (h *AuthHandler) Refresh(w http.ResponseWriter, r *http.Request) {
	cookie, err := r.Cookie("refresh_token")
	if err != nil {
		respond.Error(w, http.StatusUnauthorized, "UNAUTHORIZED", "missing refresh token")
		return
	}

	accessToken, refreshToken, err := h.svc.Refresh(r.Context(), cookie.Value)
	if err != nil {
		switch {
		case errors.Is(err, service.ErrTokenExpired):
			h.clearCookies(w)
			respond.Error(w, http.StatusUnauthorized, "TOKEN_EXPIRED", "refresh token expired")
		default:
			h.clearCookies(w)
			respond.Error(w, http.StatusUnauthorized, "INVALID_REFRESH_TOKEN", "invalid refresh token")
		}
		return
	}

	h.setAccessCookie(w, accessToken)
	h.setRefreshCookie(w, refreshToken)

	respond.JSON(w, http.StatusOK, map[string]string{"message": "token refreshed"})
}

// Logout handles POST /api/auth/logout
func (h *AuthHandler) Logout(w http.ResponseWriter, r *http.Request) {
	cookie, err := r.Cookie("refresh_token")
	if err == nil {
		// Best-effort: ignore DB errors on logout.
		_ = h.svc.Logout(r.Context(), cookie.Value)
	}
	h.clearCookies(w)
	respond.JSON(w, http.StatusOK, map[string]string{"message": "logged out"})
}

// Me handles GET /api/me — returns the current authenticated user's ID and role.
func (h *AuthHandler) Me(w http.ResponseWriter, r *http.Request) {
	userID, _ := middleware.GetUserID(r.Context())
	role, _ := middleware.GetRole(r.Context())
	respond.JSON(w, http.StatusOK, map[string]string{
		"id":   userID,
		"role": role,
	})
}

// setAccessCookie sets the httpOnly access_token cookie.
func (h *AuthHandler) setAccessCookie(w http.ResponseWriter, token string) {
	http.SetCookie(w, &http.Cookie{
		Name:     "access_token",
		Value:    token,
		Path:     "/",
		MaxAge:   900, // 15 minutes
		HttpOnly: true,
		Secure:   h.isProd,
		SameSite: http.SameSiteStrictMode,
	})
}

// setRefreshCookie sets the httpOnly refresh_token cookie scoped to the refresh endpoint.
func (h *AuthHandler) setRefreshCookie(w http.ResponseWriter, token string) {
	http.SetCookie(w, &http.Cookie{
		Name:     "refresh_token",
		Value:    token,
		Path:     "/api/auth/refresh",
		MaxAge:   604800, // 7 days
		HttpOnly: true,
		Secure:   h.isProd,
		SameSite: http.SameSiteStrictMode,
	})
}

// clearCookies expires both auth cookies.
func (h *AuthHandler) clearCookies(w http.ResponseWriter) {
	http.SetCookie(w, &http.Cookie{
		Name:     "access_token",
		Value:    "",
		Path:     "/",
		MaxAge:   -1,
		HttpOnly: true,
		Secure:   h.isProd,
		SameSite: http.SameSiteStrictMode,
	})
	http.SetCookie(w, &http.Cookie{
		Name:     "refresh_token",
		Value:    "",
		Path:     "/api/auth/refresh",
		MaxAge:   -1,
		HttpOnly: true,
		Secure:   h.isProd,
		SameSite: http.SameSiteStrictMode,
	})
}

// formatValidationErrors converts validator.ValidationErrors to a human-readable string.
func formatValidationErrors(err error) string {
	var ve validator.ValidationErrors
	if errors.As(err, &ve) {
		msg := ""
		for i, fe := range ve {
			if i > 0 {
				msg += "; "
			}
			msg += fe.Field() + ": " + fe.Tag()
		}
		return msg
	}
	return "validation failed"
}
