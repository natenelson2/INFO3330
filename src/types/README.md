# PREIshare investor listing types

This folder holds **shared TypeScript types** for PREIshare investor listings.

## Why this exists

PREIshare helps people make better real-estate decisions; an investor listing is
one structured offering investors can trust when they browse. Loose objects and
ad-hoc JSON let bad data reach production (missing price, status spelled three
ways, nested address fields that vanish on one screen). These types catch those
mistakes at **compile time**—before users see them.

## What belongs here

- Domain type modules only (listing, address, status, contacts, ownership, etc.)
- No UI components, no API route handlers, no database clients

Public entrypoint: import from src/types (see index.ts barrel).

## Typecheck

From the project root after npm install, run:

    npm run typecheck

What success looks like: the command finishes with no type errors (exit code 0).
That is the team's repeatable pre-review gate.

Notes for beginners:

- tsc --noEmit means check types only; do not write compiled JavaScript.
- Valid sources include src/types/** and src/fixtures/sample-investor-listings.ts.
- Intentional bad examples live in src/fixtures/invalid-listings.errors.ts and are
  documented in docs/type-safety/expected-type-errors.md. They are for learning
  and review, not for the clean gate.
- tsconfig.json excludes **/*.errors.ts from the default compile set so those
  deliberate failures do not break npm run typecheck.

## Strict mode (plain language)

strict: true in tsconfig.json turns on the checker's safest rules. Combined
with flags like noUncheckedIndexedAccess, it refuses incomplete or loosely
typed data so the team can trust shared listing models.

## Source of truth

Business vocabulary and field rules come from:
docs/domain/investor-listing-domain-brief.md
(and the field inventory from Step 1).
