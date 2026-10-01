# PREIshare Investor Dashboard — Component Inventory

## Scope
Reusable UI pieces for a responsive shell with mock data only.
Components present structure and placeholder content; they do not call real APIs.

Aligned with docs/dashboard-ia.md and docs/investor-dashboard-brief.md.

## Layout components (shared chrome)

| Component | Responsibility | Used on | Must NOT do |
|-----------|----------------|---------|-------------|
| AppShell | Page frame: combines Sidebar, Header, and main content outlet | All /dashboard/* pages | Own page-specific widgets or fetch data |
| Sidebar | Branding + primary nav region on larger screens | AppShell | Define nav label/path data (reads navConfig); hardcode deal or portfolio rows |
| Header | Top bar: current page title and simple user/placeholder area | AppShell | Define the full nav list; render stats or tables |
| navConfig | Single source of nav labels + paths (Home, Portfolio, Deals, Profile) | Sidebar (and mobile nav if added later) | Render UI; hold stats, deals, or profile fields |

## Dashboard home widgets

| Component | Responsibility | Used on | Must NOT do |
|-----------|----------------|---------|-------------|
| StatsCard | Show one metric label + value (+ optional hint) | Dashboard home (reusable) | Fetch data; own page layout; duplicate portfolio table |
| PortfolioSummary | Short snapshot of portfolio value / allocation for home | Dashboard home only | Replace the full Portfolio page or PortfolioTable |
| RecentActivity | Simple list of recent mock events | Dashboard home only | Own global navigation; fetch live activity |

## Page-level shells

| Component | Responsibility | Used on | Must NOT do |
|-----------|----------------|---------|-------------|
| PortfolioTable | Tabular mock holdings | Portfolio page | Live market data; appear as the home summary |
| DealsList | List/cards of mock open deals | Deals page | Checkout, subscribe, or auth flows |
| ProfileCard | Mock member name, contact, preferences | Profile page | Password change, sign-out, or auth |

## Composition rules
1. One job per component. If two rows describe the same job, merge or delete one.
2. Layout components wrap pages; page widgets never re-implement the shell.
3. Mock data may be inline constants for this sprint; real Supabase comes later.
4. Names above are locked for later agent prompts. Do not rename without updating both docs.

## Mapping check (IA ↔ components)

| Page | URL | Components inside AppShell |
|------|-----|------------------------------|
| Home | /dashboard | StatsCard, PortfolioSummary, RecentActivity |
| Portfolio | /dashboard/portfolio | PortfolioTable |
| Deals | /dashboard/deals | DealsList |
| Profile | /dashboard/profile | ProfileCard |

Shared on every page via AppShell: Sidebar + Header + navConfig.

## Critique pass (applied)

| Issue found | Fix applied |
|-------------|-------------|
| Overlap risk: Sidebar and Header both owning nav | Nav paths/labels only in navConfig; Sidebar renders; Header shows title only |
| Overlap risk: PortfolioSummary vs PortfolioTable | Summary = home snapshot only; table = portfolio page only |
| Every IA page has a page-level widget | Yes (see mapping table) |
| Every listed component is used by a page or AppShell | Yes; no orphan components |
| Extra pages / auth / API hooks | None; left out of scope |
