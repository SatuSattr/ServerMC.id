package repository

import (
	"context"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"

	"github.com/SatuSattr/server-minecraft.id/backend/internal/model"
)

type UserRepo struct {
	pool *pgxpool.Pool
}

func NewUserRepo(pool *pgxpool.Pool) *UserRepo {
	return &UserRepo{pool: pool}
}

// GetByEmail returns a user by email. Returns nil, nil if not found.
func (r *UserRepo) GetByEmail(ctx context.Context, email string) (*model.User, error) {
	row := r.pool.QueryRow(ctx, `
		SELECT id, username, email, password_hash, role, failed_attempts, locked_until, created_at, updated_at
		FROM users WHERE email = $1
	`, email)
	return scanUser(row)
}

// GetByID returns a user by ID. Returns nil, nil if not found.
func (r *UserRepo) GetByID(ctx context.Context, id string) (*model.User, error) {
	row := r.pool.QueryRow(ctx, `
		SELECT id, username, email, password_hash, role, failed_attempts, locked_until, created_at, updated_at
		FROM users WHERE id = $1
	`, id)
	return scanUser(row)
}

// Create inserts a new user and returns the created record.
func (r *UserRepo) Create(ctx context.Context, username, email, passwordHash string) (*model.User, error) {
	row := r.pool.QueryRow(ctx, `
		INSERT INTO users (username, email, password_hash)
		VALUES ($1, $2, $3)
		RETURNING id, username, email, password_hash, role, failed_attempts, locked_until, created_at, updated_at
	`, username, email, passwordHash)
	return scanUser(row)
}

// UpdateLoginSuccess resets failed_attempts and locked_until on successful login.
func (r *UserRepo) UpdateLoginSuccess(ctx context.Context, userID string) error {
	_, err := r.pool.Exec(ctx, `
		UPDATE users SET failed_attempts = 0, locked_until = NULL, updated_at = now()
		WHERE id = $1
	`, userID)
	return err
}

// IncrementFailedAttempts increments failed_attempts.
// If the count reaches 5, locked_until is set to now + 15 minutes.
func (r *UserRepo) IncrementFailedAttempts(ctx context.Context, userID string) error {
	_, err := r.pool.Exec(ctx, `
		UPDATE users
		SET
			failed_attempts = failed_attempts + 1,
			locked_until = CASE
				WHEN failed_attempts + 1 >= 5 THEN now() + INTERVAL '15 minutes'
				ELSE locked_until
			END,
			updated_at = now()
		WHERE id = $1
	`, userID)
	return err
}

// EmailExists returns true if the email is already registered.
func (r *UserRepo) EmailExists(ctx context.Context, email string) (bool, error) {
	var exists bool
	err := r.pool.QueryRow(ctx, `SELECT EXISTS(SELECT 1 FROM users WHERE email = $1)`, email).Scan(&exists)
	return exists, err
}

// UsernameExists returns true if the username is already taken.
func (r *UserRepo) UsernameExists(ctx context.Context, username string) (bool, error) {
	var exists bool
	err := r.pool.QueryRow(ctx, `SELECT EXISTS(SELECT 1 FROM users WHERE username = $1)`, username).Scan(&exists)
	return exists, err
}

// SaveRefreshToken stores a hashed refresh token for a user.
func (r *UserRepo) SaveRefreshToken(ctx context.Context, userID, tokenHash string, expiresAt time.Time) error {
	_, err := r.pool.Exec(ctx, `
		INSERT INTO refresh_tokens (user_id, token_hash, expires_at)
		VALUES ($1, $2, $3)
	`, userID, tokenHash, expiresAt)
	return err
}

// GetRefreshToken returns a refresh token record by its hash. Returns nil, nil if not found.
func (r *UserRepo) GetRefreshToken(ctx context.Context, tokenHash string) (*model.RefreshToken, error) {
	var rt model.RefreshToken
	err := r.pool.QueryRow(ctx, `
		SELECT id, user_id, token_hash, expires_at, created_at
		FROM refresh_tokens WHERE token_hash = $1
	`, tokenHash).Scan(&rt.ID, &rt.UserID, &rt.TokenHash, &rt.ExpiresAt, &rt.CreatedAt)
	if err != nil {
		if isNotFound(err) {
			return nil, nil
		}
		return nil, err
	}
	return &rt, nil
}

// DeleteRefreshToken deletes a refresh token by hash (used on logout / rotation).
func (r *UserRepo) DeleteRefreshToken(ctx context.Context, tokenHash string) error {
	_, err := r.pool.Exec(ctx, `DELETE FROM refresh_tokens WHERE token_hash = $1`, tokenHash)
	return err
}

// DeleteAllRefreshTokens removes all refresh tokens for a user (logout all devices).
func (r *UserRepo) DeleteAllRefreshTokens(ctx context.Context, userID string) error {
	_, err := r.pool.Exec(ctx, `DELETE FROM refresh_tokens WHERE user_id = $1`, userID)
	return err
}
