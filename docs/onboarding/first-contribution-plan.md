# First contribution plan — PREIshare onboarding

## Author
- Name / GitHub handle: Nate Nelson / `natenelson2`
- Feature branch: `docs/first-contribution-natenelson2`
- Date: 2026-09-09

## One-sentence goal
Add myself as a new contributor in `CONTRIBUTORS.md` and make one minimal README onboarding pointer so the team can practice review on a small first PR.

## Why this surface (link to prior artifacts)
- From `docs/onboarding/repo-map.md`: Safe first-touch includes `docs/onboarding/` and `README.md` (docs-only / no runtime code); do-not-edit-yet includes `package-lock.json`, `vite.config.ts`, `src/routeTree.gen.ts`, auth, migrations, and dependency upgrades.
- From `docs/onboarding/team-orientation-notes.md`: First-PR definition of done requires scoped (e.g. onboarding docs or a contributors list), isolated on a feature branch, described, reviewable, verified, and aligned—this plan matches that list.
- From `docs/onboarding/ai-tooling-verification.md`: Decision was **GO** for using AI tooling on the first contribution after ST1–ST4 passed (paths, secrets, scope, stack).

## In scope (only these)
1. Create `CONTRIBUTORS.md` at the repo root with my name, GitHub handle `natenelson2`, and a one-line role: `Onboarding engineer`.
2. Second touch (exactly one): edit `README.md` to add a short **Onboarding** blurb (2–4 lines max) that links to `docs/onboarding/`—docs/copy only, no behavior change.
3. Capture implementation notes later in `docs/onboarding/first-contribution-notes.md` (next step—not done here).

## Out of scope (explicitly not this PR)
- Auth, sessions, or environment secrets
- Database schema, migrations, Supabase policies, or pgvector changes
- Dependency upgrades or lockfile churn unrelated to the contribution
- Multi-package refactors, renames, or formatting the whole repo
- CI/CD workflow edits unless a mentor explicitly assigns them
- Any edits under `src/` (including routes, components, styles, or `src/routeTree.gen.ts`)
- Edits to `package.json`, `package-lock.json`, `vite.config.ts`, `tsconfig.json`, or `tsr.config.json`

## Likely files to change
| File | Action | Why |
|------|--------|-----|
| `CONTRIBUTORS.md` | create | Add my contributor entry (name, handle, one-line role) |
| `README.md` | edit | Add a short Onboarding section pointing at `docs/onboarding/` |
| `docs/onboarding/first-contribution-notes.md` | create (next step) | Record what the agent did and what I verified |

## Acceptance criteria
- [ ] I am on feature branch `docs/first-contribution-natenelson2` (not the default branch).
- [ ] `CONTRIBUTORS.md` lists my name (`Nate Nelson`) and GitHub handle (`natenelson2`) in a consistent Markdown format with a one-line role.
- [ ] The second touch is limited to `README.md` and only adds an Onboarding pointer to `docs/onboarding/` (no app behavior change).
- [ ] No secrets, `.env` files, or generated build artifacts are included.
- [ ] Diff touches only the files in the likely-files table for this PR (notes file is next step).
- [ ] A teammate can review the diff in under 10 minutes without product-context deep dives.

## Verification plan (how I will know it worked)
1. `git status` / `git branch` show I am on `docs/first-contribution-natenelson2` with only expected files modified.
2. Open `CONTRIBUTORS.md` and confirm my row/section renders as plain Markdown (name + `natenelson2` + role).
3. Open `README.md` and confirm the Onboarding blurb links to `docs/onboarding/`; skip running `npm run dev` because this PR has no UI/runtime change.
4. Skim `git diff` and confirm nothing outside `CONTRIBUTORS.md` and `README.md` appears for the implementation PR (plan/notes files only if intentionally included later).

## Risks and mitigations
- Risk: Agent expands scope into app core (`src/`, configs, lockfile). Mitigation: refuse diffs that touch files not listed above; re-prompt with the out-of-scope list.
- Risk: Editing default branch by mistake. Mitigation: check `git branch` before every edit session; stay on `docs/first-contribution-natenelson2`.
- Risk: README edit grows into a rewrite of the TanStack starter docs. Mitigation: acceptance criterion caps the second touch at a short Onboarding blurb only.

## Definition of done for this planning step
- [x] Feature branch name chosen: `docs/first-contribution-natenelson2` (create from updated `main` on the PREIshare clone before implementation).
- [x] This plan file saved at `docs/onboarding/first-contribution-plan.md` with all sections filled (no angle-bracket placeholders left).
- [x] Ready to implement in the next step without re-deciding scope.
