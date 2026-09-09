# Vercel Hobby setup — PREIshare

**Author:** Nate Nelson / `natenelson2`  
**Date:** 2026-09-09  
**Plan:** Vercel **Hobby** (free) — one project for the whole course  

## Repository

- **GitHub fork (import this):** https://github.com/natenelson2/PREIShare-org-repo  
- **Upstream (do not deploy from / do not push to):** https://github.com/EdTechForLearning/PREIShare-org-repo  
- **Production branch:** `main`  
- **Collaborator for instructor:** `thortek` — invited under GitHub → Settings → Collaborators (mark accepted when they accept)

## Vercel project

- **Plan confirmed:** Hobby (no Pro trial required for this course)  
- **One project only:** do not click “Add New Project” again in later sprints  
- **Production URL:** https://prei-share-org-repo-nine.vercel.app  
  - This is the **Production** URL (no `*-git-*` / hash-style Preview host)  
- **Preview URLs:** do not submit Preview links to Canvas  

## App hosting notes (TanStack Start)

- `vite.config.ts` includes the official Nitro Vite plugin so Vercel keeps server rendering / server functions:  
  `tanstackStart()` → `nitro()` → `viteReact()`  
- Do **not** set a static-only workaround such as `"outputDirectory": "dist"` for this app  
- Avoid Pro-only features (cron, Fluid Compute billing assumptions, long function timeouts) for course work  

## Verification checklist

- [x] GitHub collaborator `thortek` invited  
- [x] Single Vercel Hobby project imported from **my fork**  
- [x] Production branch = `main`  
- [x] First Production deployment status = **Ready**  
- [x] Opened Production URL in a private/incognito window and saw the PREIshare / TanStack Start app (not the Vercel dashboard)  
- [x] This file committed on `main` so the next Production deploy includes it  

## If the first build fails

Paste the Vercel build log into a coding-agent with the repo open. Ask it to keep TanStack Start SSR working on Vercel Hobby via the official Vite/Nitro adapter. Do **not** create a second Vercel project, and do **not** “fix” it with a static `dist` export unless the app has no server functions.
