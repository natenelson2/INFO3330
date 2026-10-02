# PREIshare Investor Dashboard Shell

TanStack Start + TypeScript **UI shell** for PREIshare investors (Sprint 3).
Members can move between Home, Portfolio, Deals, and Profile with shared
chrome and **mock** placeholder data. This is not a live portfolio backend.

## Prerequisites

- Node.js LTS (18+; Node 22 works)
- npm (lockfile: `package-lock.json`)

## Cold start

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (port **43123**), then visit
`http://localhost:43123/dashboard`.

## Scripts (from `package.json`)

| Command | What it does |
|---------|----------------|
| `npm run dev` | Start the local development server (port 43123) |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build (port 43123) |
| `npm run typecheck` | TypeScript check only (`tsc --noEmit`) |
| `npm run generate-routes` | Regenerate the file-based route tree |

There is no `test` or `lint` script in this package yet.

## Routes

| Path | Purpose |
|------|---------|
| `/dashboard` | Home — stats, portfolio summary, recent activity |
| `/dashboard/portfolio` | Holdings table |
| `/dashboard/deals` | Open/featured deals list |
| `/dashboard/profile` | Member profile card |

## Docs for handoff

- Stakeholder handoff: [`docs/sprint3-handoff.md`](docs/sprint3-handoff.md)
- Architecture decisions: [`docs/architecture-decisions.md`](docs/architecture-decisions.md)
- Verification checklist: [`docs/verification-checklist.md`](docs/verification-checklist.md)
- Client brief / IA / components: `docs/investor-dashboard-brief.md`,
  `docs/dashboard-ia.md`, `docs/component-plan.md`

## Project layout notes

- File-based routes: `src/routes/`
- Layout + nav: `src/components/layout/`
- Dashboard widgets: `src/components/dashboard/`
- Responsive/a11y shell CSS: `src/styles/dashboard.css`
- Sprint 2 listing types: `src/types/`
- `app.config.ts` is the Vite + TanStack Start entry config used by the npm scripts
