package main

import (
	"context"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	chiMiddleware "github.com/go-chi/chi/v5/middleware"
	"github.com/go-playground/validator/v10"
	"github.com/golang-migrate/migrate/v4"
	_ "github.com/golang-migrate/migrate/v4/database/pgx/v5"
	_ "github.com/golang-migrate/migrate/v4/source/file"

	"github.com/SatuSattr/server-minecraft.id/backend/internal/config"
	"github.com/SatuSattr/server-minecraft.id/backend/internal/db"
	"github.com/SatuSattr/server-minecraft.id/backend/internal/handler"
	appMiddleware "github.com/SatuSattr/server-minecraft.id/backend/internal/middleware"
	"github.com/SatuSattr/server-minecraft.id/backend/internal/repository"
	"github.com/SatuSattr/server-minecraft.id/backend/internal/respond"
	"github.com/SatuSattr/server-minecraft.id/backend/internal/service"
)

func runMigrations(databaseURL string) error {
	m, err := migrate.New("file://migrations", databaseURL)
	if err != nil {
		return err
	}
	defer m.Close()
	if err := m.Up(); err != nil && err != migrate.ErrNoChange {
		return err
	}
	return nil
}

func main() {
	cfg, err := config.Load()
	if err != nil {
		log.Fatalf("config: %v", err)
	}

	if err := runMigrations(cfg.DatabaseURL); err != nil {
		log.Fatalf("migrations: %v", err)
	}
	log.Println("migrations: up to date")

	ctx := context.Background()
	pool, err := db.NewPool(ctx, cfg.DatabaseURL)
	if err != nil {
		log.Fatalf("db: %v", err)
	}
	defer pool.Close()

	// Wire dependencies.
	userRepo := repository.NewUserRepo(pool)
	authSvc := service.NewAuthService(userRepo, cfg.JWTAccessSecret, cfg.JWTRefreshSecret)
	validate := validator.New(validator.WithRequiredStructEnabled())
	isProd := cfg.Env == "production"
	authHandler := handler.NewAuthHandler(authSvc, validate, isProd)

	r := chi.NewRouter()

	// Global middleware.
	r.Use(appMiddleware.RequestID)
	r.Use(appMiddleware.SecurityHeaders)
	r.Use(chiMiddleware.Logger)
	r.Use(chiMiddleware.Recoverer)

	// Health check.
	r.Get("/health", func(w http.ResponseWriter, r *http.Request) {
		if err := pool.Ping(r.Context()); err != nil {
			respond.Error(w, http.StatusServiceUnavailable, "DB_UNAVAILABLE", "database unavailable")
			return
		}
		respond.JSON(w, http.StatusOK, map[string]string{"status": "ok"})
	})

	// Auth endpoints (public).
	r.Route("/api/auth", func(r chi.Router) {
		r.Post("/register", authHandler.Register)
		r.Post("/login", authHandler.Login)
		r.Post("/logout", authHandler.Logout)
		r.Post("/refresh", authHandler.Refresh)
	})

	// Protected endpoints.
	r.Group(func(r chi.Router) {
		r.Use(appMiddleware.RequireAuth(authSvc))
		r.Get("/api/me", authHandler.Me)
	})

	log.Printf("API server listening on :%s", cfg.Port)
	log.Fatal(http.ListenAndServe(":"+cfg.Port, r))
}
