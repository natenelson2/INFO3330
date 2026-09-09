# PREIshare onboarding handoff

**Author:** Nate Nelson / `natenelson2`  
**Date:** 2026-09-09  
**Branch / PR:** `docs/first-contribution-natenelson2` — ready to open (live PR URL: TODO — remote branch still identical to `main` / no open cross-fork PR as of review-response notes)  
**Audience:** mentor, future self, sprint lead

## My three source-of-truth bullets (before drafting)

1. **Done means:** Sprint 1 proved I can join PREIshare’s workflow safely—fork/clone/remotes, AI rules smoke-tested, and a docs-only first contribution prepared for review—not that I shipped a product feature.
2. **Open risk:** The feature branch on my fork still needs the `CONTRIBUTORS.md` + `README.md` commit pushed and a cross-fork PR opened into the team repo.
3. **Do not re-do next sprint:** Do not re-map the whole repo or re-run AI smoke tests from zero—reuse `repo-map.md` and `ai-tooling-verification.md` (GO).

## 1. Stakeholder summary (plain language)

I completed PREIshare engineering onboarding for Sprint 1 (dev environment and AI tooling). I forked the team repository, cloned my fork, wired up origin and upstream, verified my local Git toolchain, configured Cursor-style project rules and agent memory, mapped the repo well enough to choose a safe first contribution, and prepared a small docs-only pull request path that follows the team’s Git and review habits. PREIshare remains a real-estate intelligence product; this work does not ship a product feature—it proves I can join the team workflow safely.

**Definition of done met:**
- [x] Fork created, local clone of my fork, both remotes and toolchain verified (see setup log)
- [x] AI rules / project memory in place and smoke-tested
- [x] First contribution implemented locally / in portfolio (`CONTRIBUTORS.md`, README Onboarding blurb, notes) on feature branch name `docs/first-contribution-natenelson2`
- [ ] PR opened (or description ready) and review feedback addressed — **description + simulated review done; live cross-fork PR still TODO**

## 2. Deliverables index (what exists and where)

| Artifact | Path | Why it matters |
| --- | --- | --- |
| Team orientation notes | `docs/onboarding/team-orientation-notes.md` | Mission, workflow, first-PR definition of done |
| Setup log | `docs/onboarding/setup-log.md` | Auditable proof of accounts, fork, Git identity, clone, remotes |
| Repo map | `docs/onboarding/repo-map.md` | Safe contribution surfaces (single-package `src/`, docs) |
| AI tooling verification | `docs/onboarding/ai-tooling-verification.md` | Evidence agents respect PREIshare stack/conventions |
| Project rules | `.cursor/rules/preishare.mdc` | Persistent IDE-agent constraints |
| Agent memory entrypoint | `AGENTS.md` | Cross-tool project context for coding-agents |
| First contribution plan | `docs/onboarding/first-contribution-plan.md` | Scoped plan before code |
| Contribution notes | `docs/onboarding/first-contribution-notes.md` | What changed and why |
| Contributors credit | `CONTRIBUTORS.md` | Visible first contribution surface |
| PR description | `docs/onboarding/pr-description.md` | Reviewer-facing summary |
| Review response notes | `docs/onboarding/review-response-notes.md` | How feedback was handled |
| This handoff | `docs/onboarding/onboarding-handoff.md` | Single entry point for mentors |

## 3. Environment and toolchain snapshot

Facts verified in `docs/onboarding/setup-log.md` (nothing invented):

- OS: macOS (MacBookPro)
- Git user.name / user.email configured: **yes** (`natenelson2` / `10958188@uvu.edu`)
- Git version: `git version 2.51.0`
- Node / package manager versions: **TODO** — not recorded in the setup log (scripts named in repo-map: `dev`, `generate-routes`, `build`, `preview`)
- origin (my fork) URL: `https://github.com/natenelson2/PREIShare-org-repo.git`
- upstream (team repo) URL: `https://github.com/EdTechForLearning/PREIShare-org-repo.git`
- Local clone path: `~/projects/PREIShare-org-repo`
- Install/build/test commands run and result: **TODO** — setup log verified clone/remotes/status only; full `npm install` / `npm run build` / test suite not claimed there
- Blockers hit and how resolved: none in setup log

## 4. AI tooling posture

- Rules file purpose (one sentence): `.cursor/rules/preishare.mdc` locks PREIshare’s stack (TypeScript / TanStack Start / React / Supabase stack names), safe edit surfaces, smallest-diff habits, and never-commit-secrets rules for agents.
- AGENTS.md purpose (one sentence): human-and-agent index pointing at the rules file and `docs/onboarding/` so a cold session can find real project context.
- Smoke-test prompt used and whether the agent correctly named stack pieces (TypeScript, TanStack Start, React, Supabase, PostgreSQL, pgvector): four smoke tests in `ai-tooling-verification.md` all **pass** on first run; agent cited real paths (`src/routes/`, no `apps/`/`packages/`) and named the stack without inventing Next.js/Prisma; Supabase folders still **not found** in tree (do not invent paths).
- Context gaps found and fixes applied: none required during smoke tests (“No gaps; all four passed on first run”) — see `docs/onboarding/ai-tooling-verification.md` (Decision: **GO**).

## 5. First contribution and review outcome

- Plan goal (from `first-contribution-plan.md`): Add myself in `CONTRIBUTORS.md` and one minimal `README.md` Onboarding pointer for a small reviewable first PR.
- Files touched (intended shippable): `CONTRIBUTORS.md`, `README.md`; notes in `docs/onboarding/first-contribution-notes.md`
- PR title and link: title planned as `docs: add CONTRIBUTORS entry for onboarding`; live URL: **TODO**
- Review-style feedback received (summary): simulated mentor review — blocking items on missing live PR/push and vague “if included README” test plan; non-blocking roster link polish; declined dumping all onboarding docs into the team PR
- Changes made in response: tightened `pr-description.md` test plan; linked GitHub handle in `CONTRIBUTORS.md`; recorded decisions in `review-response-notes.md`
- Merge readiness: **ready with follow-ups** — content ready; blocked on pushing contribution commits to `docs/first-contribution-natenelson2` and opening the cross-fork PR

## 6. Open risks and environment gaps

1. Live cross-fork PR not opened yet; remote feature branch still needs the CONTRIBUTORS/README commit (see review-response notes: ahead_by 0).
2. Node/npm versions and full install/build/test results not recorded in the setup log (TODO for day-one of feature work).
3. Supabase / PostgreSQL / pgvector named in orientation and rules, but data-layer folders were **not found** in the repo-map—do not invent those paths until they exist.

## 7. Decisions log (for stakeholders)

| Decision | Choice | Rationale |
| --- | --- | --- |
| First contribution surface | `CONTRIBUTORS.md` + short `README.md` Onboarding blurb | Low risk, visible, matches plan and repo-map safe first-touch |
| Branch naming | `docs/first-contribution-natenelson2` | Clear docs-oriented feature branch off `main` |
| AI tool category used most | coding-agent + chat-assistant | Coding-agent for tree/rules/files; chat for mentor simulation and PR prose |
| Team PR scope vs portfolio | Ship CONTRIBUTORS + README to team; keep full `docs/onboarding/*` on INFO3330 unless mentor asks | Avoids dumping the whole onboarding portfolio into the first team review |

## 8. Next-sprint preview (what this unlocks)

The next sprint topic can assume:

1. **Trusted local environment** — clone + Git remotes documented in `setup-log.md`; re-run only if OS or Git identity changes; still record Node/npm on first feature day.
2. **AI alignment** — `.cursor/rules/preishare.mdc` and `AGENTS.md` exist and were smoke-tested GO; extend rules when new packages appear, do not start from zero.
3. **Git habit** — feature branch → small commits → PR → respond to review practiced in simulation; finish the live push/PR once.
4. **First PR path** — docs-only contribution content ready; same PR quality bar for feature work.

**Explicitly out of scope until later:** large product features, production deployments, and database migrations you have not been trained on yet.

## 9. Ask for mentor

- Questions still open:
  - Please confirm the cross-fork PR base/head fields once I open it (`EdTechForLearning/PREIShare-org-repo` ← `natenelson2/PREIShare-org-repo` / `docs/first-contribution-natenelson2`).
  - Should onboarding portfolio docs stay on INFO3330 only, or should any extra `docs/onboarding/*` files be requested in the team PR?
  - When Supabase lands in-tree, where should beginners look first?
- Review of this handoff requested: **yes**
- Preferred follow-up time or channel: TODO (class / mentor channel)

---

*End of handoff. Keep this file updated if merge status or env gaps change before the next sprint starts.*
