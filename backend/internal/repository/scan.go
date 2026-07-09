package repository

import (
	"errors"

	"github.com/jackc/pgx/v5"

	"github.com/SatuSattr/server-minecraft.id/backend/internal/model"
)

// pgxRow is the common interface satisfied by pgx.Row and pgx.Rows.
type pgxRow interface {
	Scan(dest ...any) error
}

// scanUser scans a single row into a model.User. Returns nil, nil if no row found.
func scanUser(row pgxRow) (*model.User, error) {
	var u model.User
	err := row.Scan(
		&u.ID,
		&u.Username,
		&u.Email,
		&u.PasswordHash,
		&u.Role,
		&u.FailedAttempts,
		&u.LockedUntil,
		&u.CreatedAt,
		&u.UpdatedAt,
	)
	if err != nil {
		if isNotFound(err) {
			return nil, nil
		}
		return nil, err
	}
	return &u, nil
}

// isNotFound returns true when pgx signals no rows were returned.
func isNotFound(err error) bool {
	return errors.Is(err, pgx.ErrNoRows)
}
