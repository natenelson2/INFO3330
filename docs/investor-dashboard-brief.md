# PREIshare Investor Dashboard Brief

## Purpose
Define what the investor-facing dashboard shell must show so later UI work
matches PREIshare goals: help investors make better real-estate decisions with
clear, trustworthy listing and portfolio intelligence.

This sprint builds a mock-data shell only. No auth, no live Supabase, no
payments.

## Investor goals
- See portfolio value and recent activity quickly (home).
- Review holdings in one place (portfolio).
- Browse open or featured deals tied to investor listings (deals).
- View basic member profile details (profile).

## Main areas (required)
1. Home — quick scan: stats, portfolio snapshot, recent activity.
2. Portfolio — table of mock holdings.
3. Deals — list of mock open/featured deals (align later with listing types).
4. Profile — mock member card (name, contact, simple preferences).

## Success criteria for this shell
- Nested URLs under /dashboard with short nav labels.
- Shared AppShell chrome (sidebar + header) on every investor page.
- Clear component jobs with no overlapping responsibilities.
- Placeholder/mock content only; real data and auth come in later sprints.

## Out of scope
- Sign-in / sign-up
- Live API or database calls
- Admin or sponsor tools
- Document vaults, messaging, or checkout
