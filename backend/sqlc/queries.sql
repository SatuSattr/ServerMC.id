-- name: GetUserByEmail :one
SELECT id, username, email, password_hash, role, failed_attempts, locked_until, created_at, updated_at
FROM users
WHERE email = $1;

-- name: GetUserByID :one
SELECT id, username, email, password_hash, role, failed_attempts, locked_until, created_at, updated_at
FROM users
WHERE id = $1;

-- name: CreateUser :one
INSERT INTO users (username, email, password_hash)
VALUES ($1, $2, $3)
RETURNING id, username, email, password_hash, role, failed_attempts, locked_until, created_at, updated_at;

-- name: EmailExists :one
SELECT EXISTS(SELECT 1 FROM users WHERE email = $1);

-- name: UsernameExists :one
SELECT EXISTS(SELECT 1 FROM users WHERE username = $1);

-- name: UpdateLoginSuccess :exec
UPDATE users
SET failed_attempts = 0, locked_until = NULL, updated_at = now()
WHERE id = $1;

-- name: IncrementFailedAttempts :exec
UPDATE users
SET
    failed_attempts = failed_attempts + 1,
    locked_until = CASE
        WHEN failed_attempts + 1 >= 5 THEN now() + INTERVAL '15 minutes'
        ELSE locked_until
    END,
    updated_at = now()
WHERE id = $1;

-- name: SaveRefreshToken :exec
INSERT INTO refresh_tokens (user_id, token_hash, expires_at)
VALUES ($1, $2, $3);

-- name: GetRefreshTokenByHash :one
SELECT id, user_id, token_hash, expires_at, created_at
FROM refresh_tokens
WHERE token_hash = $1;

-- name: DeleteRefreshToken :exec
DELETE FROM refresh_tokens WHERE token_hash = $1;

-- name: DeleteAllRefreshTokens :exec
DELETE FROM refresh_tokens WHERE user_id = $1;
