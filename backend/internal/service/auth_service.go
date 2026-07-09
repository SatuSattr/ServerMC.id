package service

import (
	"context"
	"errors"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"

	"github.com/SatuSattr/server-minecraft.id/backend/internal/model"
	"github.com/SatuSattr/server-minecraft.id/backend/internal/repository"
)

var (
	ErrInvalidCredentials = errors.New("invalid email or password")
	ErrAccountLocked      = errors.New("account locked due to too many failed attempts")
	ErrEmailTaken         = errors.New("email already registered")
	ErrUsernameTaken      = errors.New("username already taken")
	ErrTokenInvalid       = errors.New("invalid token")
	ErrTokenExpired       = errors.New("token expired")
)

// RegisterRequest holds validated input for user registration.
type RegisterRequest struct {
	Username string `json:"username" validate:"required,min=3,max=30,alphanum"`
	Email    string `json:"email"    validate:"required,email,max=255"`
	// max=72: bcrypt silently truncates passwords longer than 72 bytes.
	Password string `json:"password" validate:"required,min=8,max=72"`
}

// LoginRequest holds validated input for user login.
type LoginRequest struct {
	Email    string `json:"email"    validate:"required,email"`
	Password string `json:"password" validate:"required"`
}

// AccessClaims are the JWT claims embedded in an access token.
type AccessClaims struct {
	UserID string `json:"uid"`
	Role   string `json:"role"`
	jwt.RegisteredClaims
}

const (
	accessTokenTTL  = 15 * time.Minute
	refreshTokenTTL = 7 * 24 * time.Hour
	bcryptCost      = 12
)

// AuthService handles authentication business logic.
type AuthService struct {
	repo          *repository.UserRepo
	accessSecret  []byte
	refreshSecret []byte
}

// NewAuthService creates a new AuthService.
func NewAuthService(repo *repository.UserRepo, jwtAccessSecret, jwtRefreshSecret string) *AuthService {
	return &AuthService{
		repo:          repo,
		accessSecret:  []byte(jwtAccessSecret),
		refreshSecret: []byte(jwtRefreshSecret),
	}
}

// Register validates input, checks uniqueness, hashes password, and creates the user.
func (s *AuthService) Register(ctx context.Context, req RegisterRequest) (*model.User, error) {
	emailTaken, err := s.repo.EmailExists(ctx, req.Email)
	if err != nil {
		return nil, err
	}
	if emailTaken {
		return nil, ErrEmailTaken
	}

	usernameTaken, err := s.repo.UsernameExists(ctx, req.Username)
	if err != nil {
		return nil, err
	}
	if usernameTaken {
		return nil, ErrUsernameTaken
	}

	hash, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcryptCost)
	if err != nil {
		return nil, err
	}

	return s.repo.Create(ctx, req.Username, req.Email, string(hash))
}

// Login validates credentials and returns a signed access token and a raw refresh token.
func (s *AuthService) Login(ctx context.Context, req LoginRequest) (accessToken, refreshToken string, err error) {
	user, err := s.repo.GetByEmail(ctx, req.Email)
	if err != nil {
		return "", "", err
	}
	if user == nil {
		return "", "", ErrInvalidCredentials
	}

	// Check lockout before verifying password to avoid leaking timing information.
	if user.LockedUntil != nil && user.LockedUntil.After(time.Now()) {
		return "", "", ErrAccountLocked
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.PasswordHash), []byte(req.Password)); err != nil {
		// Wrong password — increment failure counter (best-effort; DB error doesn't block response).
		_ = s.repo.IncrementFailedAttempts(ctx, user.ID)
		return "", "", ErrInvalidCredentials
	}

	// Successful login — reset failure counter.
	if err := s.repo.UpdateLoginSuccess(ctx, user.ID); err != nil {
		return "", "", err
	}

	accessToken, err = s.generateAccessToken(user)
	if err != nil {
		return "", "", err
	}

	refreshToken, err = s.issueRefreshToken(ctx, user.ID)
	if err != nil {
		return "", "", err
	}

	return accessToken, refreshToken, nil
}

// Refresh validates the raw refresh token, rotates it, and returns a new token pair.
// Refresh tokens are opaque UUIDs (122-bit entropy) stored directly as the lookup key.
// Security relies on the httpOnly cookie transport — the raw value is never logged or exposed.
func (s *AuthService) Refresh(ctx context.Context, rawRefreshToken string) (accessToken, refreshToken string, err error) {
	if rawRefreshToken == "" {
		return "", "", ErrTokenInvalid
	}

	stored, err := s.repo.GetRefreshToken(ctx, rawRefreshToken)
	if err != nil {
		return "", "", err
	}
	if stored == nil {
		return "", "", ErrTokenInvalid
	}
	if stored.ExpiresAt.Before(time.Now()) {
		_ = s.repo.DeleteRefreshToken(ctx, rawRefreshToken)
		return "", "", ErrTokenExpired
	}

	// Rotate: delete old token before issuing new one.
	if err := s.repo.DeleteRefreshToken(ctx, rawRefreshToken); err != nil {
		return "", "", err
	}

	user, err := s.repo.GetByID(ctx, stored.UserID)
	if err != nil || user == nil {
		return "", "", ErrTokenInvalid
	}

	accessToken, err = s.generateAccessToken(user)
	if err != nil {
		return "", "", err
	}

	refreshToken, err = s.issueRefreshToken(ctx, user.ID)
	if err != nil {
		return "", "", err
	}

	return accessToken, refreshToken, nil
}

// Logout deletes the refresh token from the DB, invalidating this device session.
func (s *AuthService) Logout(ctx context.Context, rawRefreshToken string) error {
	if rawRefreshToken == "" {
		return nil
	}
	return s.repo.DeleteRefreshToken(ctx, rawRefreshToken)
}

// ParseAccessToken validates the token string and returns the claims.
func (s *AuthService) ParseAccessToken(tokenString string) (*AccessClaims, error) {
	claims := &AccessClaims{}
	token, err := jwt.ParseWithClaims(tokenString, claims, func(t *jwt.Token) (any, error) {
		if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, ErrTokenInvalid
		}
		return s.accessSecret, nil
	}, jwt.WithValidMethods([]string{"HS256"}))
	if err != nil {
		if errors.Is(err, jwt.ErrTokenExpired) {
			return nil, ErrTokenExpired
		}
		return nil, ErrTokenInvalid
	}
	if !token.Valid {
		return nil, ErrTokenInvalid
	}
	return claims, nil
}

// generateAccessToken creates a signed JWT access token for the given user.
func (s *AuthService) generateAccessToken(user *model.User) (string, error) {
	now := time.Now()
	claims := AccessClaims{
		UserID: user.ID,
		Role:   user.Role,
		RegisteredClaims: jwt.RegisteredClaims{
			ID:        uuid.New().String(),
			Issuer:    "servermc.id",
			IssuedAt:  jwt.NewNumericDate(now),
			ExpiresAt: jwt.NewNumericDate(now.Add(accessTokenTTL)),
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(s.accessSecret)
}

// issueRefreshToken generates a cryptographically random opaque token,
// stores it in the DB, and returns the raw value for the cookie.
func (s *AuthService) issueRefreshToken(ctx context.Context, userID string) (string, error) {
	raw := uuid.New().String()
	expiresAt := time.Now().Add(refreshTokenTTL)
	if err := s.repo.SaveRefreshToken(ctx, userID, raw, expiresAt); err != nil {
		return "", err
	}
	return raw, nil
}
