# Investor listing types — verification checklist

Use this list before review. Check each box only when you have evidence.
This checklist is how a beginner proves the model still matches PREIshare's
business rules before a stakeholder decision record.

## A. Domain coverage

- [x] Every required field from docs/domain/listing-field-inventory.md appears on InvestorListing (or a nested type it uses): id, title/summary, status, propertyType, createdAt, updatedAt, address, financialSummary (askingPrice + currency), contacts, ownership.
- [x] Listing status values match the allowed business statuses (draft | published | under_offer | sold | archived) — no free-form strings (ListingStatus).
- [x] Property type values match the allowed property kinds (multifamily | office | retail | industrial | mixed_use | land) via PropertyType.
- [x] Address nested shape matches the inventory (line1, optional line2, city, region, postalCode, country).
- [x] Financial summary nested shape matches the inventory (askingPrice, currency: USD, optional projectedIrrPercent, capRatePercent); property name on the listing is financialSummary.
- [x] Investor contact fields match the brief/inventory (id, fullName, role, email, optional phone); ContactRole is the closed set broker | owner_rep | sponsor.
- [x] Ownership is modeled as a required Ownership object (ownerName, optional notes, optional ownershipPercent) plus primaryContactId — a simplified single-object shape agreed in earlier type steps (not a free-text blob).

## B. Type safety shape

- [x] Public types are exported from src/types/index.ts (including ContactRole, open/sold listing branches, status helpers).
- [x] Discriminated status modeling (OpenInvestorListing | SoldInvestorListing) still matches docs/type-safety/expected-type-errors.md (sold requires closedAt).
- [x] Readonly intent is on id, createdAt, and updatedAt on the shared listing base.

## C. Fixtures

- [x] src/fixtures/sample-investor-listings.ts typechecks cleanly and includes one realistic listing per major ListingStatus.
- [x] src/fixtures/invalid-listings.errors.ts still demonstrates the intentional failures listed in docs/type-safety/expected-type-errors.md.
- [x] Expected-error notes still match the real compiler messages (status literal, missing city, price as string, bad ContactRole, ownership as array, sold without closedAt).

## D. Typecheck gate

- [x] package.json defines a typecheck script that runs tsc --noEmit.
- [x] Running npm run typecheck from the project root succeeds for valid sources.
- [x] The intentional invalid fixtures file is not required to pass the normal typecheck gate (tsconfig.json excludes **/*.errors.ts).
- [x] src/types/README.md explains how a beginner runs typecheck and what success looks like.

## E. Sign-off

- [x] I re-ran typecheck after any last fixes.
- [x] I would hand this package to a teammate without a verbal walkthrough of secret steps.

## Config change summary (for review)

| file | change |
| --- | --- |
| package.json | typecheck script: tsc --noEmit (pre-review gate) |
| tsconfig.json | excludes **/*.errors.ts so intentional failures stay off the clean gate |
| src/types/README.md | Typecheck section (command, success, invalid fixtures) |
| docs/type-safety/verification-checklist.md | Created (this file) |
