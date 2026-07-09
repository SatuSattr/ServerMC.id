package middleware

import (
	"context"
	"net/http"

	"github.com/google/uuid"

	"github.com/SatuSattr/server-minecraft.id/backend/internal/respond"
	"github.com/SatuSattr/server-minecraft.id/backend/internal/service"
)

type contextKey string

const (
	ContextKeyRequestID contextKey = "request_id"
	ContextKeyUserID    contextKey = "user_id"
	ContextKeyRole      contextKey = "role"
)

// RequestID injects a unique X-Request-ID into every request context and response header.
func RequestID(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		id := r.Header.Get("X-Request-ID")
		if id == "" {
			id = uuid.New().String()
		}
		ctx := context.WithValue(r.Context(), ContextKeyRequestID, id)
		w.Header().Set("X-Request-ID", id)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

// SecurityHeaders sets hardening headers on every response.
func SecurityHeaders(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("X-Content-Type-Options", "nosniff")
		w.Header().Set("X-Frame-Options", "DENY")
		w.Header().Set("Strict-Transport-Security", "max-age=31536000; includeSubDomains")
		w.Header().Set("Content-Security-Policy", "default-src 'self'")
		w.Header().Set("Referrer-Policy", "strict-origin-when-cross-origin")
		next.ServeHTTP(w, r)
	})
}

// RequireAuth validates the access_token httpOnly cookie and injects user ID + role into context.
// Returns 401 if the cookie is missing, expired, or invalid.
func RequireAuth(svc *service.AuthService) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			cookie, err := r.Cookie("access_token")
			if err != nil {
				respond.Error(w, http.StatusUnauthorized, "UNAUTHORIZED", "missing access token")
				return
			}
			claims, err := svc.ParseAccessToken(cookie.Value)
			if err != nil {
				respond.Error(w, http.StatusUnauthorized, "UNAUTHORIZED", "invalid or expired token")
				return
			}
			ctx := context.WithValue(r.Context(), ContextKeyUserID, claims.UserID)
			ctx = context.WithValue(ctx, ContextKeyRole, claims.Role)
			next.ServeHTTP(w, r.WithContext(ctx))
		})
	}
}

// RequireAdmin wraps RequireAuth and additionally enforces role == "admin".
// Returns 403 if the authenticated user is not an admin.
func RequireAdmin(svc *service.AuthService) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return RequireAuth(svc)(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			role, _ := GetRole(r.Context())
			if role != "admin" {
				respond.Error(w, http.StatusForbidden, "FORBIDDEN", "admin access required")
				return
			}
			next.ServeHTTP(w, r)
		}))
	}
}

// GetUserID extracts the authenticated user ID from the request context.
func GetUserID(ctx context.Context) (string, bool) {
	v, ok := ctx.Value(ContextKeyUserID).(string)
	return v, ok
}

// GetRole extracts the authenticated user role from the request context.
func GetRole(ctx context.Context) (string, bool) {
	v, ok := ctx.Value(ContextKeyRole).(string)
	return v, ok
}
