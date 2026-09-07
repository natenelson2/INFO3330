# PREIshare — AGENTS.md

Short onboarding memory for humans and AI coding agents.
Skim this in about two minutes, then follow the rules file for day-to-day edits.

## Start here

- **Project rules (always apply):** `.cursor/rules/preishare.mdc`
- **Onboarding docs:** `docs/onboarding/`
  - `docs/onboarding/team-orientation-notes.md` — mission, PR workflow, first-PR definition of done, AI stance
  - `docs/onboarding/setup-log.md` — machine setup, fork URL, clone path, remotes
  - `docs/onboarding/repo-map.md` — verified tree map, safe first-touch vs do-not-edit
- **Other tool configs that may exist in the product repo:** `.cursorrules` (Cursor), `.vscode/settings.json`
  - If your IDE uses a different rules path, still treat `.cursor/rules/preishare.mdc` as the team standard and point other tools at the same content

## What PREIshare is

PREIshare helps people make better real-estate decisions by turning property and market data into clear intelligence.
Engineering ships that product as a modern web app using **TypeScript**, **TanStack Start**, and **React**, with a product data stack of **Supabase**, **PostgreSQL**, and **pgvector** (named in orientation).
This codebase is organized as a **single package at the repo root** (see the repo-map)—not an `apps/` + `packages/` monorepo.
New contributors join the shipping loop safely with small, reviewable changes. They do not rewrite the product on day one.

## Collaboration model

- Team upstream: `https://github.com/EdTechForLearning/PREIShare-org-repo`
- Work happens on a personal fork and a feature branch; open a pull request for review
- Do **not** push directly to the team upstream
- First reviewed PR is done only when it is scoped, isolated, described, reviewable, verified, and aligned (see orientation notes)

## Scripts (only names verified in the repo-map)

From root `package.json`:

- `dev`
- `generate-routes`
- `build`
- `preview`

Do not invent additional scripts. There was **no** `test` script recorded in the repo-map at mapping time.

## Safe first-touch vs do-not-edit-yet

**Prefer for first contributions**

- `docs/onboarding/`
- `README.md`
- Other docs-only clarifications the team already identified

**Do not edit yet unless explicitly tasked**

- `package-lock.json` and casual dependency upgrades in `package.json`
- `vite.config.ts`, `tsconfig.json`, `tsr.config.json`
- `src/routeTree.gen.ts` (generated)
- Auth, billing, database migrations, CI secrets
- Invented Supabase/SQL folders (repo-map: **not found** yet)

## How agents should behave

1. Restate the goal and list files to touch
2. Prefer the **smallest diff** that finishes the request
3. Match neighboring TypeScript / file-layout patterns
4. No drive-by refactors; no new libraries unless the human asks
5. Never commit or print secrets (`.env`, tokens, connection strings)
6. When unsure, read `docs/onboarding/repo-map.md`—say **not found** instead of guessing paths
7. Stop for verification after each logical unit; use understand → plan → prompt → review → refine

## Consistency note

Stack names, safe surfaces, and do-not lists in this file must stay aligned with `.cursor/rules/preishare.mdc` and `docs/onboarding/repo-map.md`.
If the real tree disagrees with this memory, update the onboarding docs and these rules—do not invent a second architecture.
