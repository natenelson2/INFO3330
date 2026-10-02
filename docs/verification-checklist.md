# PREIshare Investor Dashboard Shell — Verification Checklist

**Sprint:** 3 (TanStack Start UI shell)  
**Verifier:** Nate Nelson  
**Date:** 2026-10-02  
**App URL tested:** http://127.0.0.1:43123 (README / `npm run dev` port; not 3000)  
**Sources of truth:** `docs/investor-dashboard-brief.md`, `docs/dashboard-ia.md`, `docs/component-plan.md`

## How to use this checklist

- **Pass** — requirement met; evidence describes what you saw.
- **Fail** — in-scope shell issue; fix before handoff or note the fix commit.
- **Deferred** — intentionally out of scope for this sprint; reason required.

**Hard rule for this verification:** Real authentication, live Supabase/PostgreSQL data, payments, and other new product features are **Deferred**, not Fail, unless the brief required them for this mock shell (it does not).

---

## Raw walkthrough notes (browser)

| Item | Notes |
|------|--------|
| Routes tried | `/dashboard`, `/dashboard/portfolio`, `/dashboard/deals`, `/dashboard/profile`, unknown `/nope-missing` |
| Viewports | Wide ~1280px desktop; narrow ~375px phone (device tools / resize) |
| Shell | AppShell present on all four investor routes: sidebar + header + main |
| Active nav | Home / Portfolio / Deals / Profile each highlighted only on matching route (`aria-current="page"`) |
| Header titles | Dashboard overview → Your portfolio → Open deals → Your profile |
| Responsive | `dashboard.css` loaded; Menu toggle with `aria-expanded` / `aria-controls="dash-sidebar"`; `nav-open` opens sidebar on narrow; `dash-card-grid` / `dash-table-wrap` used |
| Mock content | Stats cards, portfolio summary + holdings table, deals list, profile card — labeled placeholders, sample banner |
| What broke | None in-scope for this shell walkthrough |
| Out of scope seen | No login gate; no live DB; mock-only banners on pages |

---

## 1. Routing and information architecture

| ID | Check | Status | Evidence |
|----|--------|--------|----------|
| R1 | `/dashboard` (or agreed home) loads dashboard home inside AppShell | Pass | Opened `/dashboard` — `dash-shell`, header title "Dashboard overview", stats row + summary/activity visible |
| R2 | `/dashboard/portfolio` loads portfolio page shell | Pass | Opened `/dashboard/portfolio` — header "Your portfolio", `PortfolioTable` with mock holdings |
| R3 | `/dashboard/deals` loads deals page shell | Pass | Opened `/dashboard/deals` — header "Open deals", `DealsList` mock cards |
| R4 | `/dashboard/profile` loads profile page shell | Pass | Opened `/dashboard/profile` — header "Your profile", `ProfileCard` mock fields |
| R5 | Unknown paths do not break the whole app (sensible fallback or framework 404) | Pass | `/nope-missing` returned HTTP 404; app did not crash |

**IA notes:** URL map and nav labels match `docs/dashboard-ia.md` (Home, Portfolio, Deals, Profile under `/dashboard`). Brand in sidebar is PREIshare; no separate logo control beyond brand text / Home nav.

---

## 2. Navigation labels and active states

| ID | Check | Status | Evidence |
|----|--------|--------|----------|
| N1 | Sidebar/nav labels match brief/IA (Home/Dashboard, Portfolio, Deals, Profile) | Pass | Labels from `navConfig`: Home, Portfolio, Deals, Profile |
| N2 | Active nav item highlights the current route | Pass | Exact match for Home (`/dashboard`); path match for Portfolio/Deals/Profile; `nav-link-active` + `aria-current="page"` |
| N3 | Header page title updates when changing routes | Pass | Titles: Dashboard overview, Your portfolio, Open deals, Your profile |
| N4 | Nav links use client routing (no full page reload flash if applicable) | Pass | TanStack Router `Link` in `NavItems`; SPA navigation between dashboard children |

---

## 3. Layout shell and responsiveness

| ID | Check | Status | Evidence |
|----|--------|--------|----------|
| L1 | AppShell shows sidebar + header + main content on desktop | Pass | Wide view: PREIshare sidebar, header, main content column (`dash-shell` / `dash-sidebar` / `dash-header` / `dash-content`) |
| L2 | Narrow viewport: nav remains usable (collapse, drawer, or stacked pattern) | Pass | At ~375px Menu button visible; toggle sets `nav-open` / `aria-expanded`; sidebar usable |
| L3 | No permanent horizontal scroll on home/portfolio/deals/profile at ~375px width | Pass | Core pages usable; portfolio uses `dash-table-wrap` for intentional table scroll, not whole-page overflow |
| L4 | Main content remains readable; cards/tables stack or scroll intentionally | Pass | `dash-card-grid` stacks stats/panels; deals/profile stack on narrow CSS |
| L5 | Basic accessibility: buttons/links are keyboard-focusable; interactive controls have accessible names | Pass | Menu has `aria-label`, `aria-expanded`, `aria-controls`; decorative icon `aria-hidden`; nav links labeled with visible text; `:focus-visible` rules in `dashboard.css` |

---

## 4. Mock content clarity (demo readiness)

| ID | Check | Status | Evidence |
|----|--------|--------|----------|
| M1 | Dashboard home: stats cards show labeled mock investor metrics | Pass | Total portfolio value $300,000; Open deals 3; Contributions YTD $24,000; sample-data banner |
| M2 | Portfolio summary / table shows clear placeholder holdings | Pass | Home `PortfolioSummary` snapshot; Portfolio page table (e.g. Riverfront Lofts, Cedar Business Park) with invested/current/status |
| M3 | Deals list shows open-deal style placeholders | Pass | Mock deals with location, min investment, status (Open / Closing soon / Waitlist) |
| M4 | Profile card shows member-style placeholder fields | Pass | Name, email, membership, preferred contact, notes (sample profile banner) |
| M5 | No raw "TODO" / empty broken panels on primary views | Pass | No TODO panels on primary views; empty states defined but mock data populates defaults |

---

## 5. Out-of-scope boundaries (must stay deferred)

| ID | Check | Status | Evidence / reason |
|----|--------|--------|-------------------|
| O1 | No real authentication / login gate required for shell demo | Deferred | Brief: mock shell only; auth next sprint |
| O2 | No live Supabase/PostgreSQL data — mock data only | Deferred | Inline/mock constants; sample-data banners; no DB calls |
| O3 | No production deploy required for this verification | Deferred | Local `npm run dev` on port 43123 is enough |
| O4 | No payment, document vault, or admin tools added beyond brief | Pass | Only four IA investor pages + shell; nothing extra shipped |

---

## 6. Defects found and resolution

None — all in-scope checks passed on first walkthrough (desktop + ~375px). Prior PAUL wire-up for `dashboard.css` / Menu aria / `dash-*` classes was already on the shell before this checklist pass.

| Defect | Severity (blocker / polish) | Resolution | Re-check |
|--------|----------------------------|------------|----------|
| — | — | — | — |

---

## 7. Sign-off for handoff

- [x] All **blocker** fails fixed or explicitly accepted with reason
- [x] Deferred items only cover agreed out-of-scope work
- [x] Shell is demoable against the PREIshare client story for Sprint 3

**Overall result:** Ready for stakeholder handoff

**Verifier signature:** Nate Nelson
