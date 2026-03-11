# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server (Express + Vite HMR)
npm run build     # Production build → dist/
npm run preview   # Preview production build
npm run lint      # TypeScript type-check (tsc --noEmit)
npm run clean     # Remove dist/
```

## Environment Variables

Copy `.env.example` and set:
- `GEMINI_API_KEY` — required for AI blog/image generation
- `DATABASE_URL` — optional PostgreSQL connection string
- `DISABLE_HMR=true` — set when running in Google AI Studio

## Architecture

**Full-stack app**: React 19 + TypeScript frontend (Vite) served by an Express backend (`server.ts`).

### Server (`server.ts`)
- In dev: acts as middleware host for Vite HMR
- In prod: serves `dist/` as a SPA
- Exposes REST API: `GET/POST /api/services`, `GET/POST /api/posts`, `GET /api/db-status`

### Frontend (`src/`)
- `App.tsx` — root router (React Router v7), global state (theme, admin mode, services, posts), fetches from `/api/*` on mount
- `types.ts` — shared `Service` and `BlogPost` interfaces
- `constants.ts` — hardcoded default services data (9 services)
- `firebase.ts` — Firebase client init
- `services/geminiService.ts` — Gemini API wrappers (`generateBlogContent`, `generateBlogImage`)
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

### Database fallback chain (server-side)
1. **Firebase/Firestore** — primary (collections: `/services`, `/posts`)
2. **PostgreSQL** — if `DATABASE_URL` is set
3. **In-memory** — always available as last resort

### Admin features
Enabled via a hidden toggle in `App.tsx`. Unlocks `AdminDashboard` (manage services/posts) and `BlogGenerator` (AI-powered post creation using Gemini).

### Gemini models in use
- `gemini-3-flash-preview` — blog text generation
- `gemini-2.5-flash-image` — blog image generation (returns base64, 16:9)
