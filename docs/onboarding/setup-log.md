===== START =====

PREIshare setup log
Learner: Nate Nelson Date: 2026-09-07 OS: macOS (MacBookPro) Team repo (upstream): https://github.com/EdTechForLearning/PREIShare-org-repo My fork (origin): https://github.com/natenelson2/PREIShare-org-repo Orientation notes used: docs/onboarding/team-orientation-notes.md

1. Accounts and fork
Check	Result	Notes
GitHub sign-in works
PASS
Account username: natenelson2
Can view team repo https://github.com/EdTechForLearning/PREIShare-org-repo
PASS
Page loads; name reads EdTechForLearning/PREIShare-org-repo
Fork created in my account
PASS
My fork URL: https://github.com/natenelson2/PREIShare-org-repo
2. Git install and identity
Output of git --version:

git version 2.51.0
Output of git config --global user.name:

natenelson2
Output of git config --global user.email:

10958188@uvu.edu
Identity configured: PASS

3. Clone (of MY fork)
Parent directory used: ~/projects
Clone command used: git clone https://github.com/natenelson2/PREIShare-org-repo.git
Cloned my fork (not the team repo): PASS
Clone completed without error: PASS
Local project path: ~/projects/PREIShare-org-repo
Clone output:

Cloning into 'PREIShare-org-repo'...
remote: Enumerating objects: 46, done.
remote: Counting objects: 100% (7/7), done.
remote: Compressing objects: 100% (7/7), done.
remote: Total 46 (delta 4), reused 0 (delta 0), pack-reused 39 (from 1)
Receiving objects: 100% (46/46), 52.43 KiB | 542.00 KiB/s, done.
Resolving deltas: 100% (7/7), done.
4. Remotes (run inside the repo)
git remote add upstream https://github.com/EdTechForLearning/PREIShare-org-repo.git run: PASS
git remote -v
origin	https://github.com/natenelson2/PREIShare-org-repo.git (fetch)
origin	https://github.com/natenelson2/PREIShare-org-repo.git (push)
upstream	https://github.com/EdTechForLearning/PREIShare-org-repo.git (fetch)
upstream	https://github.com/EdTechForLearning/PREIShare-org-repo.git (push)
What this means: origin is my fork (natenelson2) — I push here. upstream is the team repo (EdTechForLearning) — I fetch from here and do not push to it.

origin points at MY fork: PASS

upstream points at the team repo: PASS

5. Post-clone verification
git status
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
Default branch
Output of git branch --show-current:

main
Default branch name: main

Working tree clean after clone: PASS

6. Auth notes (no secrets)
Clone method: HTTPS
Auth method used (if prompted): none (clone completed without an auth prompt)
Auth succeeded: PASS
Do not paste tokens or private keys here
7. Issues and fixes
Issue	What I tried	Outcome
none
8. Ready for next step
I have a fork I own, a local clone of it with origin and upstream set, and a setup log another teammate could audit: YES

===== END =====
