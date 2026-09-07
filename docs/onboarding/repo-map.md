# PREIshare repository map

> Onboarding map for first contribution planning. Built with AI-assisted
> inventory + human path verification. Do not treat this as architecture law
> if the real tree disagrees—update this file when you learn more.

## Meta

- Clone path (from setup-log): `~/projects/PREIShare-org-repo`
- Date mapped: `2026-09-07`
- Agent tool used: `coding-agent` (read real tree from fork `natenelson2/PREIShare-org-repo`)
- Mapper: `Nate Nelson` / `natenelson2`
- Source for clone/toolchain facts: `docs/onboarding/setup-log.md`

## 1. Overview (5–8 sentences)

PREIshare appears to be organized as: **single package** at the repository root (not a monorepo of `apps/` + `packages/`).
In plain language, the product code seems to live mainly in `src/` (routes, components, styles, router).
Shared libraries or packages appear in **none found** as separate workspace packages; only root `package.json` exists.
Docs and onboarding notes live in `docs/` (including this file under `docs/onboarding/`).
Stack clues in `package.json`, `vite.config.ts`, `README.md`, `AGENTS.md`, and `.cursorrules` show **TypeScript**, **React 19**, **TanStack Start**, **TanStack Router**, **Vite**, and **Tailwind CSS**.
**Supabase**, **PostgreSQL**, and **pgvector** are named in course/orientation language and mentioned in `.cursorrules`, but no Supabase client file, SQL migrations, or database config folders were found in this tree yet.
**GitHub Actions** under `.github/` were **not found**.
I am intentionally not editing application code while building this map.

## 2. Top-level inventory

| Path | Kind (app / package / config / docs / other) | One-sentence purpose | Verified by me? (yes/no) |
|------|-----------------------------------------------|----------------------|---------------------------|
| `src/` | app | Main application source: routes, components, styles, router | yes |
| `docs/` | docs | Project and onboarding documentation | yes |
| `.vscode/` | config | Editor settings (marks generated route tree read-only) | yes |
| `package.json` | config | Root package manifest and npm scripts | yes |
| `package-lock.json` | config | npm lockfile pinning dependency versions | yes |
| `README.md` | docs | Getting started for the TanStack Start scaffold | yes |
| `AGENTS.md` | docs / config | Agent/project context and TanStack Intent skill notes | yes |
| `.cursorrules` | config | Cursor/agent coding rules for this repo | yes |
| `.cta.json` | config | Create-TanStack-App / scaffold metadata | yes |
| `.gitignore` | config | Ignore rules including `.env`, `dist`, `node_modules` | yes |
| `tsconfig.json` | config | TypeScript compiler options | yes |
| `tsr.config.json` | config | TanStack Router CLI target (`react`) | yes |
| `vite.config.ts` | config | Vite + TanStack Start + React + Tailwind plugins | yes |
| `.github/` | other | **not found** | yes |
| `apps/` | other | **not found** | yes |
| `packages/` | other | **not found** | yes |
| `supabase/` | other | **not found** | yes |

## 3. Frontend concerns (TypeScript, React, TanStack Start)

- Likely app root(s): repository root + `src/`
- Clues I used:
  - `package.json` dependencies: `@tanstack/react-start`, `@tanstack/react-router`, `react`, `react-dom`
  - `vite.config.ts` plugins: `tanstackStart()`, `viteReact()`, `tailwindcss()`
  - `README.md` title: “Welcome to your new TanStack Start app!”
  - `.cta.json` framework `react`, mode `file-router`
  - `.cursorrules` header names TanStack Start / React 19 / Vite 8 / TypeScript / Tailwind
- Entry / routes / UI areas worth knowing:
  - `src/router.tsx` — creates the TanStack Router
  - `src/routeTree.gen.ts` — generated route tree (**do not edit by hand**; also marked read-only in `.vscode/settings.json`)
  - `src/routes/__root.tsx` — root layout / document shell
  - `src/routes/index.tsx` — home route `/`
  - `src/routes/about.tsx` — about route `/about`
  - `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/components/ThemeToggle.tsx` — shared UI chrome
  - `src/styles.css` — global styles / design tokens
  - `src/lib/user.ts` — tiny placeholder user helper (returns `null`)
- How this area relates to user-facing screens: file-based routes under `src/routes/` become the pages users see; layout chrome comes from `__root.tsx` plus `src/components/`.

## 4. Backend / data concerns (Supabase, PostgreSQL, pgvector, APIs)

- Supabase or data config paths: **not found yet**
  - `.cursorrules` says “Use the Supabase client from `lib/supabase.ts`”, but `src/lib/supabase.ts` is **not found**
  - No `@supabase` dependency in `package.json`
- Migrations / SQL / schema-related paths: **not found yet** (no `supabase/`, no `*.sql` files found)
- Env examples (NOT secret values): **not found** (no `.env.example`); `.gitignore` lists `.env` so real secrets should stay local/untracked
- PostgreSQL / pgvector markers in code: **not found yet** (mentioned in onboarding narrative, not present as folders/deps in this tree)
- Notes on what a beginner should not touch in production data: do not invent database changes; do not commit real `.env` secrets; wait for a real Supabase/migration task and mentor guidance before touching data systems when they appear

## 5. Tooling and CI

- TypeScript / lint / format config:
  - Found: `tsconfig.json` (strict TypeScript)
  - ESLint config: **not found**
  - Prettier/Biome config: **not found**
- CI workflows (e.g. GitHub Actions): `.github/` **not found**
- Editor or agent config already present:
  - `.cursorrules`
  - `AGENTS.md`
  - `.vscode/settings.json`
  - `.cta.json`
- Scripts from package manifests that look like dev/build/test (names only):
  - `dev`
  - `generate-routes`
  - `build`
  - `preview`
  - No `test` script found in `package.json`

## 6. Safe first-touch vs do-not-edit-yet

### Safe first-touch (good candidates for a tiny onboarding PR)

| Path or area | Why it is relatively safe | Risk if handled carelessly |
|--------------|---------------------------|----------------------------|
| `docs/onboarding/` | Docs-only; matches course onboarding path | Misleading docs |
| `README.md` | Documentation; no runtime code | Outdated install steps |
| `docs/onboarding/team-orientation-notes.md` | Already used for orientation; low runtime impact | Wrong process guidance |
| `docs/onboarding/setup-log.md` | Machine setup evidence; docs-only when present | Incomplete or secret-leaking notes if done wrong |

### Do not edit yet (wait until you have tests, review, and a real task)

| Path or area | Why wait | What could break |
|--------------|----------|------------------|
| `package-lock.json` | Shared dependency lock | Install failures for everyone |
| `package.json` dependency versions | Core toolchain | Build/runtime breakage |
| `vite.config.ts` | App build pipeline | Dev server / production build failures |
| `src/routeTree.gen.ts` | Generated file | Router generation conflicts; hand edits get overwritten |
| `tsconfig.json` / `tsr.config.json` | Shared compiler/router tooling | Typecheck and route generation issues |
| Future Supabase / migrations / real `.env` | Data and secrets | Data loss or leaked secrets |
| Auth / payments / vector search core (when added) | High complexity | Security or product bugs |

## 7. Open questions for the team

- When will Supabase / PostgreSQL / pgvector land, and where should beginners look first?
- `.cursorrules` references `lib/supabase.ts`, but that path is **not found**—is the rule ahead of the code, or is the path wrong?
- Is GitHub Actions planned under `.github/`, or is CI elsewhere / not set up yet?
- Is the blank TanStack Start scaffold (`src/routes/index.tsx` starter copy) the intentional product UI for now, or will PREIshare screens replace it soon?
- Should first contributors add a `test` script, or is testing tooling intentionally deferred?

## 8. How I will use this map next

- Configure AI project rules/memory using the verified paths above (next tooling steps).
- Pick a first contribution only from **Safe first-touch** unless a mentor expands scope.
- Revisit and edit this file when a path claim is proven wrong.
- Treat missing Supabase/CI paths as **not found**, not as permission to invent folders.
