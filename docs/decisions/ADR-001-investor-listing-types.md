# ADR-001: Investor listing TypeScript types (PREIshare)

- **Status:** Accepted (Sprint 2, Topic 1)
- **Date:** 2026-09-19
- **Owners:** Nate Nelson (learner) with coach review
- **Related code:** `src/types/index.ts` (barrel export for the types package)

## Context

PREIshare helps people make better real-estate decisions by turning property and
market data into clear intelligence. An **investor listing** is one structured
offering investors can trust when they browse.

Without shared types, listings travel as loose objects and ad-hoc JSON. That
lets bad data reach production: missing prices, status spelled several ways,
nested address fields that vanish on one screen, or sold deals with no close
date. Sprint 2 Topic 1 models the listing domain with strict TypeScript types so
invalid shapes fail at **compile time**—before users see them.

Business and safety inputs that drove the model:

- Domain brief: `docs/domain/investor-listing-domain-brief.md`
- Field inventory: `docs/domain/listing-field-inventory.md`
- Intentional failures: `docs/type-safety/expected-type-errors.md`
- Verification checklist: `docs/type-safety/verification-checklist.md`

Public exports from `src/types/index.ts` today:

`InvestorListing`, `OpenInvestorListing`, `SoldInvestorListing`,
`InvestorContact`, `ContactRole`, `Ownership`, `Address`, `FinancialSummary`,
`ListingStatus`, `OpenListingStatus`, `ClosedListingStatus`, `PropertyType`.

## Decision

We adopt a small, explicit types package centered on `InvestorListing`, with
supporting types for status, property type, address, financial summary, investor
contacts, and ownership. Call sites should import from `src/types/index.ts`
rather than reaching into individual files when possible.

`InvestorListing` is a **discriminated union** on `status`: open statuses share
one branch; `sold` is a separate branch that **requires** `closedAt`.

## Type choices mapped to business rules

| Business rule (plain language) | Type choice | Why this shape |
| --- | --- | --- |
| Every listing has a stable id, title, summary, property type, address, contacts, primary contact id, ownership, and create/update times | Required fields on the shared listing base (`InvestorListingBase`) | Optional core fields reintroduce missing identity / location / contact bugs |
| Asking price and currency live together; early drafts may not have money yet | Nested `FinancialSummary` with required `askingPrice: number` and `currency: "USD"`; optional on the listing as `financialSummary?` | Groups money fields; drafts can omit the whole object; when present, price must be numeric (see `priceAsString` invalid fixture) |
| Optional return metrics may be blank | `projectedIrrPercent?` and `capRatePercent?` on `FinancialSummary` | Matches inventory optional rows without making asking price optional inside the object |
| Listing workflow status may only be a known set of values | `ListingStatus` = `"draft" \| "published" \| "under_offer" \| "sold" \| "archived"` | Free `string` allows typos like `availble` (proven in invalid fixtures) |
| Property category is a closed vocabulary | `PropertyType` = `"multifamily" \| "office" \| "retail" \| "industrial" \| "mixed_use" \| "land"` | Same reason as status: closed set, exact spellings from the inventory |
| Street/city/region/postal/country travel together; suite is optional | Nested `Address` (`line1`, `line2?`, `city`, `region`, `postalCode`, `country`); `address` required on every listing | Prevents half-present locations; missing `city` fails typecheck |
| Who to contact is structured people, not a free-text blob | `contacts: InvestorContact[]` with `id`, `fullName`, `email`, optional `phone`, plus `primaryContactId: string` | Stops anonymous listings; primary contact is an id, not a loose object |
| Contact role is a closed business vocabulary | `ContactRole` = `"broker" \| "owner_rep" \| "sponsor"` | Free-text roles like `listing_agent` are rejected |
| Ownership is first-class structured data on the listing | Required `ownership: Ownership` (`ownerName`, optional `notes`, optional `ownershipPercent`) | Array-shaped ownership fails against this single-object model (see `ownershipAsArray`) |
| Sold deals need a close timestamp; open statuses do not | Discriminated union: `OpenInvestorListing` vs `SoldInvestorListing` (`status: "sold"` + required `closedAt`) | Narrowing on `status === "sold"` unlocks `closedAt`; omitting it on sold fails typecheck |
| System-owned identity fields should not be casually reassigned in app code | `readonly id`, `readonly createdAt`, `readonly updatedAt` | Signals immutability intent at the type level |

## Alternatives considered

1. **Keep listings as `string` / `any` / untyped JSON**  
   Rejected: fastest short term, but pushes every bug to runtime and production.

2. **One giant flat interface with dozens of optional fields**  
   Rejected: optional everything recreates missing-field bugs; flat shapes hide
   address and financial structure.

3. **Enums (`enum`) for every closed vocabulary**  
   Deferred for this beginner package in favor of string union types, which stay
   simple to read in fixtures and error messages. Revisit only if runtime enum
   objects become a clear need.

4. **Runtime schema library (for example Zod) as the source of truth in this topic**  
   Out of scope for Topic 1. Compile-time types and fixtures come first; runtime
   validators can wrap the same decisions later.

## Consequences

**Positive**

- Invalid listings in `src/fixtures/invalid-listings.errors.ts` show the
  compiler rejecting bad data (status typos, missing city, price as string, bad
  contact role, ownership as array, sold without `closedAt`) — see
  `docs/type-safety/expected-type-errors.md`.
- Valid samples in `src/fixtures/sample-investor-listings.ts` prove a realistic
  listing can be built for each `ListingStatus`.
- `npm run typecheck` (`tsc --noEmit`) is the shared pre-review gate; intentional
  `*.errors.ts` files stay off that gate via `tsconfig.json` exclude.

**Tradeoffs**

- Authors must use exact union members; almost-right status or role strings
  fail typecheck by design.
- Nested objects mean fixtures and future API mappers must supply whole
  `Address` / `FinancialSummary` objects, not scattered fields.
- Discriminated/readonly choices add a small learning curve for beginners in
  exchange for stronger guarantees.

## Out of scope for Sprint 2 Topic 1

- Database tables, migrations, or Supabase row types
- HTTP API routes and request/response validation at runtime
- React form components and client-side validation UX
- Authentication, authorization, and multi-tenant rules
- pgvector / search indexing fields beyond the current listing model
- Changing production data or deploying a service
- Enforcing at least one contact when status is published / under_offer / sold
  at the type level (array may still be empty today)
- Numeric range checks such as `ownershipPercent` between 0 and 100
- Inventory-style ownership lists with closed relationship unions — this
  package uses one `Ownership` object instead

## Follow-ups (for the next topic / implementers)

1. Import domain types from `src/types/index.ts` when building UI or API layers.
2. Keep fixtures green under `npm run typecheck` before expanding the model.
3. If product adds a new listing status or property type, extend the union
   and update fixtures + this ADR—do not widen the field back to free `string`.
4. Consider runtime validators that mirror these types once API boundaries land.
5. Use `docs/type-safety/verification-checklist.md` as the acceptance gate when
   types change.
6. If product needs multi-row ownership with inventory relationships
   (`primary_owner`, `co_owner`, `broker`, `property_manager`), replace the
   single `Ownership` object carefully and update fixtures + this ADR.
7. If product requires non-empty contacts for investor-visible statuses, extend
   the status discriminant rather than hoping reviewers catch empty arrays.

## Evidence links

- Domain brief: `docs/domain/investor-listing-domain-brief.md`
- Field inventory: `docs/domain/listing-field-inventory.md`
- Expected compile errors: `docs/type-safety/expected-type-errors.md`
- Verification checklist: `docs/type-safety/verification-checklist.md`
- Types entrypoint: `src/types/index.ts`
- Valid fixtures: `src/fixtures/sample-investor-listings.ts`
- Invalid fixtures: `src/fixtures/invalid-listings.errors.ts`
