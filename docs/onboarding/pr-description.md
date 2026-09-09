# Pull request description — first PREIshare contribution

**PR URL:** pending — open the cross-fork PR, then paste the live URL here (example shape: `https://github.com/EdTechForLearning/PREIShare-org-repo/pull/N`)
**Base repository:** EdTechForLearning/PREIShare-org-repo
**Base branch:** main
**Head repository (my fork):** natenelson2/PREIShare-org-repo
**Compare branch:** docs/first-contribution-natenelson2
**Author:** Nate Nelson / natenelson2
**Date opened:** 2026-09-09

## Proposed commit message

**Subject:** `docs: add CONTRIBUTORS entry for onboarding`

**Body (optional):**

Add Nate Nelson (`natenelson2`) to the contributors roster and a short
README onboarding pointer so the team can review a small docs-only
first contribution.

## Problem
PREIshare had no clear, reviewed onboarding contribution from this engineer yet.
The team needs a small, low-risk change that proves the Git → review → merge path works
for a new teammate without touching product runtime code.

## Approach
- Created `CONTRIBUTORS.md` with one roster row: Nate Nelson / `natenelson2` / Onboarding engineer / 2026-09-09.
- Edited `README.md` only to add a short **Onboarding** section linking to `docs/onboarding/` (and `CONTRIBUTORS.md`)—no other README sections rewritten.
- Kept the change documentation-only (no `src/`, package, lockfile, or config runtime edits).
- Followed `docs/onboarding/first-contribution-plan.md`. Multi-cycle notes live in `docs/onboarding/first-contribution-notes.md` for onboarding portfolio/review context and are **not** required in the team PR diff unless a mentor asks for them.

## What reviewers should look at
- [ ] `CONTRIBUTORS.md` — new entry is accurate, formatted as a Markdown table, and free of secrets
- [ ] `README.md` — only the short Onboarding blurb is added; Getting Started and the rest are unchanged
- [ ] Diff contains **exactly** those two paths (no `.env`, build output, `node_modules`, or editor junk)
- [ ] Commit message explains why this onboarding change exists

## Test plan
1. Open the **Files changed** tab and confirm **only** `CONTRIBUTORS.md` and `README.md` appear.
2. Skim `CONTRIBUTORS.md` in the PR diff: the table row for Nate Nelson / `natenelson2` / Onboarding engineer / 2026-09-09 renders as valid Markdown.
3. Skim the `README.md` hunk: a short Onboarding section links to `docs/onboarding/`; no other unrelated README rewrites.
4. Search the diff for tokens, passwords, private emails, or local absolute paths — expect none.
5. (Optional) Check out the branch locally and open `CONTRIBUTORS.md` in a Markdown preview.

## Risk
Low. Docs-only change. Main residual risk is accidentally staging unrelated local files—mitigated by staging named paths only (`git add CONTRIBUTORS.md README.md`).

## Screenshots / notes
No UI screenshots (docs-only change).  
Implementation decisions and multi-cycle review notes: see `docs/onboarding/first-contribution-notes.md`.

## Checklist before requesting review
- [ ] Feature branch `docs/first-contribution-natenelson2` contains the CONTRIBUTORS/README commits and is pushed to `origin` (my fork)
- [ ] Cross-fork PR base is `EdTechForLearning/PREIShare-org-repo` (`main`), head is `natenelson2/PREIShare-org-repo` (`docs/first-contribution-natenelson2`)
- [ ] **PR URL** field above is filled with the live GitHub link
- [ ] PR title is specific (not “update” or “fixes”), e.g. `docs: add CONTRIBUTORS entry for onboarding`
- [ ] Description states problem, approach, test plan, and risk
- [ ] I can explain every staged line if a reviewer asks
