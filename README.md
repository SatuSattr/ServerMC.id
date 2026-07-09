# servermc.id

Platform pencarian server Minecraft Indonesia. Monorepo with Next.js frontend + Go API backend + Minecraft plugin.

## Struktur Monorepo

```
servermc.id/
├── frontend/                    # Next.js 16 (App Router) + React 19
│   ├── app/                     # Pages (SSR/SSG)
│   │   ├── [slug]/              # Server detail (wildcard)
│   │   ├── admin/               # Admin panel
│   │   ├── category/[tag]/      # Category pages
│   │   ├── dashboard/           # User dashboard
│   │   ├── login/               # Login page
│   │   ├── register/            # Register page
│   │   ├── search/              # Search results
│   │   ├── top/                 # Top voted
│   │   ├── layout.tsx           # Root layout (Navbar + Footer)
│   │   └── page.tsx             # Landing page
│   ├── components/
│   │   ├── ui/                  # Minecraft-themed UI components
│   │   ├── layout/              # Navbar, Footer
│   │   ├── server/              # Server detail components
│   │   └── filter/              # Search & filter
│   ├── lib/                     # Utilities, API client, types
│   └── styles/
├── backend/                     # Go API (Chi router + sqlc)
│   ├── cmd/server/              # Entry point
│   ├── internal/
│   │   ├── handler/             # HTTP handlers
│   │   ├── middleware/          # Auth, rate limit, CORS
│   │   ├── service/             # Business logic
│   │   └── repository/          # sqlc-generated code
│   ├── migrations/              # PostgreSQL migrations
│   └── sqlc/                    # Annotated SQL queries
├── plugin/                      # Minecraft Paper plugin (Java)
│   └── src/main/java/com/servermc/plugin/
├── assets/                      # Reference assets (original Vite project)
├── docs/superpowers/
│   ├── specs/                   # Design documents
│   └── plans/                   # Implementation plans
├── index.html                   # REFERENCE: Original landing page (JANGAN DIHAPUS)
├── main.js                      # REFERENCE: Original Alpine.js code
└── styles.css                   # REFERENCE: Original Tailwind v4 theme
```

## Tech Stack

| Layer | Teknologi | Versi |
|---|---|---|
| Frontend | Next.js (App Router) | ^16.2.9 |
| UI Library | React | ^19.2.7 |
| Styling | Tailwind CSS v4 | ^4.3.2 |
| Icons | Lucide React | ^0.547.0 |
| Backend | Go + Chi | 1.22+ |
| Database | PostgreSQL + sqlc | 16 |
| Storage | S3-compatible (Coolify MinIO) | - |
| Deployment | Coolify (self-hosted PaaS) | - |
| CDN/Security | Cloudflare Free | - |

## Status

Saat ini project masih dalam tahap **implementasi awal**. Design spec dan implementation plan untuk setiap halaman sudah siap di `docs/superpowers/`.

## Development

### Prerequisites

- Node.js 20.9+ (Next.js 16 requirement)
- Go 1.22+
- PostgreSQL 16

### Start Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev    # → http://localhost:3000
```

### Start Backend (Go API)

```bash
cd backend
go run ./cmd/server    # → http://localhost:8080
```

## Implementation Order

1. **000** — Project scaffold (Next.js + Go init)
2. **001** — Landing page rewrite (HTML → React)
3. **002** — Server detail page (banner, markdown, gallery, comments)
4. **003** — Authentication (login, register, JWT)
5. **004** — User dashboard (my servers)
6. **005** — Server submission (add/edit server form)
7. **006** — Admin panel (manage servers, users, tags)
8. **007** — Voting system (Turnstile + IGN)
9. **008** — Search, filter & category pages
10. **009** — Go API backend (full CRUD, migrations, sqlc)
11. **010** — Minecraft plugin (stats sync, vote validation)
12. **011** — UI component library (Dropdown, Modal, Toast, Tabs, Pagination, Skeleton, etc.)
