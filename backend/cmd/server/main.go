package main

import (
	"context"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"

	"github.com/SatuSattr/server-minecraft.id/backend/internal/config"
	"github.com/SatuSattr/server-minecraft.id/backend/internal/db"
	"github.com/SatuSattr/server-minecraft.id/backend/internal/respond"
)

func main() {
	cfg, err := config.Load()
	if err != nil {
		log.Fatalf("config: %v", err)
	}

	ctx := context.Background()
	pool, err := db.NewPool(ctx, cfg.DatabaseURL)
	if err != nil {
		log.Fatalf("db: %v", err)
	}
	defer pool.Close()

	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	r.Get("/health", func(w http.ResponseWriter, r *http.Request) {
		if err := pool.Ping(r.Context()); err != nil {
			respond.Error(w, http.StatusServiceUnavailable, "DB_UNAVAILABLE", "database unavailable")
			return
		}
		respond.JSON(w, http.StatusOK, map[string]string{"status": "ok"})
	})

	log.Printf("API server listening on :%s", cfg.Port)
	log.Fatal(http.ListenAndServe(":"+cfg.Port, r))
}
