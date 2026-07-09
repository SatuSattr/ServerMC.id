package config

import (
	"fmt"
	"os"
)

type Config struct {
	Port             string
	DatabaseURL      string
	JWTAccessSecret  string // min 32 bytes
	JWTRefreshSecret string // min 32 bytes, DIFFERENT from access
	Env              string // "development" | "production"
}

func Load() (*Config, error) {
	dbURL, err := requireEnv("DATABASE_URL")
	if err != nil {
		return nil, err
	}
	accessSecret, err := requireEnv("JWT_ACCESS_SECRET")
	if err != nil {
		return nil, err
	}
	refreshSecret, err := requireEnv("JWT_REFRESH_SECRET")
	if err != nil {
		return nil, err
	}
	if len(accessSecret) < 32 {
		return nil, fmt.Errorf("JWT_ACCESS_SECRET must be at least 32 characters")
	}
	if len(refreshSecret) < 32 {
		return nil, fmt.Errorf("JWT_REFRESH_SECRET must be at least 32 characters")
	}
	if accessSecret == refreshSecret {
		return nil, fmt.Errorf("JWT_ACCESS_SECRET and JWT_REFRESH_SECRET must be different")
	}
	return &Config{
		Port:             getEnv("PORT", "8080"),
		DatabaseURL:      dbURL,
		JWTAccessSecret:  accessSecret,
		JWTRefreshSecret: refreshSecret,
		Env:              getEnv("ENV", "development"),
	}, nil
}

func requireEnv(key string) (string, error) {
	v := os.Getenv(key)
	if v == "" {
		return "", fmt.Errorf("required env var %s is not set", key)
	}
	return v, nil
}

func getEnv(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}
