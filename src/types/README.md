# PREIshare investor listing types
This folder holds shared TypeScript types for PREIshare investor listings.
## Why this exists
PREIshare helps people make better real-estate decisions; an investor listing is
one structured offering investors can trust when they browse. Loose objects and
ad-hoc JSON let bad data reach production. These types catch those mistakes at
compile time—before users see them.
## What belongs here
- Domain type modules only (listing, address, status, contacts, etc.)
- No UI components, no API route handlers, no database clients
Domain type modules are not in this folder yet. Later steps own files such as
investor-listing.ts. This scaffold only reserves the folder and wires the checker.
## How to check types
From the project root after npm install, run: npm run typecheck
That runs tsc --noEmit: TypeScript checks every file under src/ and reports
errors without writing JavaScript output files.
## Strict mode (plain language)
strict: true in tsconfig.json turns on the checker’s safest rules. Combined
with flags like noUncheckedIndexedAccess, it refuses incomplete or loosely
typed data so the team can trust shared listing models.
## Source of truth
Business vocabulary and field rules come from:
docs/domain/investor-listing-domain-brief.md
(and the field inventory from Step 1).
