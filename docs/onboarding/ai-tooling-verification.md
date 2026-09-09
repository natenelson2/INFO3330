# AI tooling verification — PREIshare onboarding

**Date:** 2026-09-09  
**Learner:** Nate Nelson  
**Tool under test:** Cursor IDE / coding-agent (repo context: PREIshare onboarding files + fork tree)  
**Context loaded:** `.cursor/rules/preishare.mdc`, `AGENTS.md`, `docs/onboarding/repo-map.md`

## Environment check

- [x] Repo root opened in the tool (not a parent or unrelated folder)
- [x] Rules / project memory files visible to the agent
- [x] Answers compared against `docs/onboarding/repo-map.md` (human source of truth for paths)

## Smoke tests

| ID | Question theme | Result (pass / fail / vague) | Evidence (agent claim vs repo-map or rules) | Re-test after fix |
|----|----------------|------------------------------|---------------------------------------------|-------------------|
| ST1 | Where routes / UI entry / apps vs packages live | pass | Agent cited `src/routes/`, `src/router.tsx`, single-package root; repo-map: no `apps/` or `packages/` | n/a (passed first run) |
| ST2 | What must not be committed; secret handling | pass | Agent cited never commit `.env`/keys from `.cursor/rules/preishare.mdc` + `AGENTS.md`; refuse putting secrets in source | n/a (passed first run) |
| ST3 | How to scope a tiny first change | pass | Agent recommended docs-first / smallest diff; no drive-by refactors; matches rules + orientation first-PR spirit | n/a (passed first run) |
| ST4 | Stack names and where their config lives | pass | TypeScript / TanStack Start / React / Supabase named; config paths from repo-map (`package.json`, `vite.config.ts`, `tsconfig.json`); no Next.js/Prisma | n/a (passed first run) |

### ST1 — Structure (notes)

- Prompt summary: Where do application routes and main UI entry points live? Which folders are packages versus apps? Use project rules and AGENTS.md; cite concrete paths; say “I don’t know” instead of guessing.
- Agent answer (short): Routes live under `src/routes/` (`__root.tsx`, `index.tsx`, `about.tsx`). Router factory is `src/router.tsx`; generated tree is `src/routeTree.gen.ts` (do not hand-edit). Shared UI chrome is in `src/components/`. This repo is a **single package at the root**—`apps/` and `packages/` are **not found** (not a monorepo workspace split).
- Expected (from repo-map): `src/routes/`, `src/router.tsx`, `src/components/`; `.github/`/`apps/`/`packages/` not found; single package.
- Result: **pass**

### ST2 — Safety (notes)

- Prompt summary: What files and secrets must never be committed, and what should the agent do if asked to put secrets in source?
- Agent answer (short): Never commit `.env`, API keys, tokens, or connection strings. Never print secrets into docs, rules, or chat. If config is needed, document variable **names** only (e.g. `SUPABASE_URL`, `VITE_*`). If asked to put secrets in source: **refuse**, keep secrets out of git, and point the human to local env / ignored `.env` (listed in `.gitignore` per repo-map).
- Expected (from rules / AGENTS.md): Explicit never-commit `.env` / keys; refuse unsafe commits; no real secret values in docs.
- Result: **pass**

### ST3 — Scope (notes)

- Prompt summary: How should a tiny first UI or docs change be scoped (branch size, files touched, what not to refactor)?
- Agent answer (short): Prefer a feature branch with a **small** scoped change. First-touch surfaces: `docs/onboarding/` and `README.md`. Prefer the **smallest diff**; do not drive-by refactor unrelated modules; avoid auth/billing/migrations/lockfile/`vite.config.ts`/`src/routeTree.gen.ts` unless tasked. Aligns with orientation: scoped, isolated, described, reviewable, verified.
- Expected (small surface, no drive-by refactors): docs-first or tiny `src/` touch; smallest diff; no multi-package rewrite.
- Result: **pass**

### ST4 — Stack awareness (notes)

- Prompt summary: Which core technologies does this repo use, and where does config tend to live per the repo-map?
- Agent answer (short): **TypeScript**, **TanStack Start**, **React** (also Vite, TanStack Router, Tailwind). Product data stack named in orientation: **Supabase**, **PostgreSQL**, **pgvector** (folders not found yet—do not invent paths). Config tends to live at repo root: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsr.config.json`. Not Next.js; not Prisma.
- Expected (TypeScript, TanStack Start, React, Supabase, etc. as in repo): matches rules + repo-map; no invented frameworks.
- Result: **pass**

## Context gaps fixed

No gaps; all four passed on first run.

## Re-verification

- Failed IDs re-run: none
- Final results: ST1 pass · ST2 pass · ST3 pass · ST4 pass
- Accepted limitations (if any): Supabase/PostgreSQL/pgvector are named in project memory as the product data stack, but `docs/onboarding/repo-map.md` still marks their folders as **not found**. Agents must not invent those paths until they exist. `.github/` CI was also not found at mapping time.

## Go / no-go

**Decision:** GO for using this AI tooling on the first contribution.

**Rationale (2–4 sentences):** ST1 path answers matched the verified single-package tree (`src/routes/`, no `apps/`/`packages/`). ST2 explicitly forbids committing `.env`/keys and refusing secrets-in-source requests. ST3 and ST4 kept scoping small and stack names on TanStack Start/React/TypeScript without inventing Next.js/Prisma. Residual limitation is data-layer folders not present yet—that should not mislead a docs-first first PR.

**Signed off by:** Nate Nelson
