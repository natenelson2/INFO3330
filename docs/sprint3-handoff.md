# Sprint 3 Handoff — PREIshare Investor Dashboard Shell

## Stakeholder summary

We built a responsive investor dashboard **shell** for PREIshare members.
Investors can move between Dashboard Home, Portfolio, Deals, and Profile
without hunting through cluttered pages. Numbers and lists use **mock data**
so the UI can be demoed before live backend integration.

This sprint does **not** include sign-in, live balances, Supabase, or payments.
What you see in the demo is placeholder content that matches the client brief’s
four investor areas.

## What shipped

- TanStack Start + TypeScript app (`package.json` name: `preishare-investor-dashboard`)
- File-based routes under `src/routes/`:
  - `/dashboard` — home (stats, portfolio summary, recent activity)
  - `/dashboard/portfolio` — holdings table
  - `/dashboard/deals` — open/featured deals list
  - `/dashboard/profile` — member profile card
- Shared layout: `AppShell`, `Sidebar`, `Header`, `navConfig` + active nav states
- Home widgets: `StatsCard`, `PortfolioSummary`, `RecentActivity`
- Area shells: `PortfolioTable`, `DealsList`, `ProfileCard`
- Responsive + basic accessibility polish in `src/styles/dashboard.css`
  (imported from `src/routes/__root.tsx`)
- Verification checklist: `docs/verification-checklist.md` (walkthrough Pass
  on routing, nav, layout, mock content; auth/data Deferred)

## How to run locally (cold start)

Prerequisites: Node.js LTS (this environment used Node 22).

1. From the project root, install with npm (lockfile present):

   ```bash
   npm install
   ```

2. Start the dev server (script from `package.json`):

   ```bash
   npm run dev
   ```

3. Open the URL Vite prints. This project pins port **43123**:
   `http://localhost:43123/dashboard`

Other scripts that exist (do not invent others):

| Script | Command |
|--------|---------|
| Dev server | `npm run dev` |
| Production build | `npm run build` |
| Typecheck | `npm run typecheck` |
| Regenerate route tree | `npm run generate-routes` |
| Preview build | `npm run preview` |

There is **no** `test` or `lint` script in `package.json` yet.

## Short demo script

1. Land on Dashboard Home (`/dashboard`) — point out mock portfolio value,
   open deals count, and contributions YTD, plus the sample-data banner.
2. Use the sidebar to open Portfolio, Deals, and Profile; note the header
   title and active nav item change with each route.
3. Resize to ~phone width — show the Menu toggle and collapsible sidebar
   (`nav-open` / `aria-expanded`).
4. Say clearly: values are mock placeholders for Sprint 3, not live balances.

## Known limitations

These are intentional Sprint 3 boundaries — not bugs:

- **No real authentication or authorization** — anyone with the URL can open
  `/dashboard/*`; there is no login gate.
- **Portfolio, deals, and profile are mock/static** — inline sample numbers
  and names; sample-data banners mark placeholders.
- **No Supabase, PostgreSQL, or pgvector** in this sprint — no live queries.
- **No GitHub Actions CI** yet — no automated install/typecheck/test on PRs.
- **Not production-hardened** — no full error-boundary story for live APIs,
  no empty API states for real backends, no deploy pipeline required for this
  verification.

## Recommended next-sprint work

1. Supabase auth and protected dashboard routes  
2. Replace mock widgets with live portfolio / deals queries  
3. pgvector-powered search for deals or documents  
4. GitHub Actions CI (install, typecheck, and future tests/lint on PRs)  
5. Empty, loading, and error states for each data widget once APIs exist  

## References

- Client brief: `docs/investor-dashboard-brief.md`
- IA: `docs/dashboard-ia.md`
- Components: `docs/component-plan.md`
- Verification: `docs/verification-checklist.md`
- Architecture decisions: `docs/architecture-decisions.md`
