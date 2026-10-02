# Architecture Decisions — PREIshare Dashboard Shell (Sprint 3)

These notes explain **why** the Sprint 3 shell is shaped this way. Future
teammates should treat the decisions below as defaults—not something to rip
out casually when adding auth or live data.

Related Sprint 2 type ADR (listings domain): `docs/decisions/ADR-001-investor-listing-types.md`.

---

## ADR-S3-001: TanStack Start with file-based routes

- **Context:** Need a clear URL per investor area and room to grow into
  full-stack data loading without a framework rewrite.
- **Decision:** Use TanStack Start + TypeScript with file-based routing under
  `src/routes/`. Parent layout: `src/routes/dashboard.tsx`. Children:
  `dashboard/index.tsx` (home), `dashboard/portfolio.tsx`,
  `dashboard/deals.tsx`, `dashboard/profile.tsx`.
- **Consequences:** Navigation matches `docs/dashboard-ia.md`. Later route
  loaders or server functions can attach per path. Route tree generation uses
  `npm run generate-routes` (`tsr generate`).

## ADR-S3-002: Shared AppShell layout

- **Context:** Every investor page needs the same chrome (sidebar, header,
  main content).
- **Decision:** Implement `AppShell`, `Sidebar`, and `Header` under
  `src/components/layout/` and wrap all `/dashboard/*` routes with that layout
  in `src/routes/dashboard.tsx`.
- **Consequences:** Page files stay focused on widgets. Layout, mobile nav,
  and header title behavior change in one place. Do not re-implement chrome
  inside page widgets.

## ADR-S3-003: Central nav config

- **Context:** Labels, paths, page titles, and active states must stay
  consistent across sidebar and header.
- **Decision:** Keep nav items in `src/components/layout/navConfig.ts` and
  render links through `NavItems` / `Sidebar`. Header resolves titles via
  `getPageTitle(pathname)`.
- **Consequences:** Adding a route is a config + route-file change, not a
  scavenger hunt across components. Home uses exact-path active matching so
  `/dashboard/portfolio` does not highlight Home.

## ADR-S3-004: Mock data boundary for the shell

- **Context:** Sprint 3 goal is a trustworthy UI shell, not live finance data
  (`docs/investor-dashboard-brief.md`).
- **Decision:** Widgets use inline mock constants / simple props only
  (`StatsCard`, `PortfolioSummary`, `RecentActivity`, `PortfolioTable`,
  `DealsList`, `ProfileCard`). Sample-data banners label placeholders. No
  hidden “fake API” layer that pretends to be production.
- **Consequences:** Next sprint can replace mocks at clear component or route
  boundaries. Do not invent a premature data client that couples the shell to
  unfinished backend contracts.

## ADR-S3-005: Responsive CSS + accessibility baseline

- **Context:** Investors will use desktop and mobile; clutter and broken nav
  hurt trust.
- **Decision:** Shared rules live in `src/styles/dashboard.css` (imported from
  `src/routes/__root.tsx`). Classes include `dash-shell`, `dash-sidebar`,
  `dash-header`, `dash-content`, `nav-open`, `dash-card-grid`,
  `dash-table-wrap`. Mobile Menu toggle uses `aria-label`, `aria-expanded`,
  and `aria-controls`; decorative icons use `aria-hidden`; `:focus-visible`
  outlines are required.
- **Consequences:** Demo-ready responsive behavior now. Deeper a11y audits
  and design-system polish remain before production.

---

## Next-sprint foundations (do not reverse casually)

| Foundation | Why it builds on this shell |
| --- | --- |
| Supabase auth | Protect `/dashboard/*` and personalize header/profile without redesigning AppShell |
| Live portfolio data | Replace mock stats/table via route loaders or server functions on existing routes |
| pgvector search | Add search UI on deals/docs once listing data lives in Postgres |
| GitHub Actions CI | Gate PRs with install / `npm run typecheck` / future tests on this single-package layout |

## Explicit non-goals for Sprint 3

- Real money movement, trading, or compliance workflows
- Final visual brand system
- Production deployment hardening
- Claiming auth, live balances, pgvector, or CI already work
