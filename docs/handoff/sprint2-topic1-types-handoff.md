# Sprint 2 Topic 1 — Types Handoff: PREIshare Investor Listings

**Audience:** next sprint topic owners, PREIshare eng, product partners  
**Status:** Topic 1 (TypeScript foundations) complete — implementation topics not started  
**Date:** 2026-09-19  
**Learner:** Nate Nelson (`natenelson2`)

## 1. Client story recap

PREIshare helps people make better real-estate decisions by turning property and
market data into clear intelligence. Investor listings were at risk of traveling
as loose objects and ad-hoc JSON—missing prices, status strings spelled several
ways, nested address fields that vanished on some screens, or sold deals with no
close date.

Sprint 2 Topic 1 modeled investor listings with **strict TypeScript types** so
those mistakes fail at **compile time** (while someone is still building)
instead of in front of investors. Decisions are recorded for stakeholders in
`docs/decisions/ADR-001-investor-listing-types.md`.

## 2. What we shipped this topic

| Deliverable | Path | Why it matters |
| --- | --- | --- |
| Domain brief + field inventory | `docs/domain/investor-listing-domain-brief.md`, `docs/domain/listing-field-inventory.md` | Business rules before code |
| Types package (barrel) | `src/types/index.ts` | Single import surface for `InvestorListing` and related types |
| Core + nested + relationship types | `src/types/*.ts` (`investor-listing`, `listing-status`, `property-type`, `address`, `financial-summary`, `investor-contact`, `ownership`) | Interfaces, unions, nested objects, contacts, ownership |
| Valid fixtures | `src/fixtures/sample-investor-listings.ts` | Prove good listings type-check (one sample per `ListingStatus`) |
| Invalid / error cases + expected errors | `src/fixtures/invalid-listings.errors.ts`, `docs/type-safety/expected-type-errors.md` | Prove bad data is rejected |
| Typecheck script + verification checklist | `package.json` (`npm run typecheck` → `tsc --noEmit`), `docs/type-safety/verification-checklist.md`, `src/types/README.md` | Repeatable safety gate |
| Decision record | `docs/decisions/ADR-001-investor-listing-types.md` | Stakeholder-facing type decisions |

**Exports from `src/types/index.ts` today:** `InvestorListing`,
`OpenInvestorListing`, `SoldInvestorListing`, `InvestorContact`, `ContactRole`,
`Ownership`, `Address`, `FinancialSummary`, `ListingStatus`,
`OpenListingStatus`, `ClosedListingStatus`, `PropertyType`.

**How to verify locally:** follow `docs/type-safety/verification-checklist.md`
and run `npm run typecheck`. Valid fixtures must pass; intentional invalid cases
must remain type errors as documented (`**/*.errors.ts` is excluded from the
clean gate).

## 3. What we must NOT claim is done yet

- No TanStack Start UI or listing forms are built or wired to these types.
- No Supabase / PostgreSQL tables, migrations, or pgvector work from this model.
- No HTTP API routes, request/response validation at the network boundary, or auth rules.
- No runtime schema library (for example Zod) is required by this topic.
- No production deployment of listing create/edit flows.

If a demo only shows green typecheck on fixtures, say: **the data model is
typed and verified; product surfaces are next.**

## 4. Next sprint pickups (use the types — do not reinvent them)

### A. TanStack Start forms (UI)

- Build create/edit listing forms whose field names and option lists match
  `InvestorListing`, `ListingStatus`, and `PropertyType` from
  **`src/types/index.ts`**—do not redefine listing shape in components.
- Prefer importing types from `src/types/index.ts` over copied string literals.
- Use `src/fixtures/sample-investor-listings.ts` as realistic form defaults.
- Acceptance sketch: a form cannot treat a status outside the union as valid
  during development without a type or validation failure.

### B. Supabase / PostgreSQL schema alignment (data)

- Draft table columns that mirror required listing fields, nested
  address/financial concepts, and constrained status/property-type values—align
  names with types from **`src/types/index.ts`**, do not invent a second vocabulary.
- Document any intentional difference between TypeScript optional fields
  (for example `financialSummary?`) and database NULL rules in a follow-up ADR.
- Plan indexes and relationships (contacts, ownership) from `docs/domain/`.
- Acceptance sketch: a row that would fail `InvestorListing` assignment is also
  rejected by DB constraints or insert validation.

### C. API boundaries (server)

- Define request/response shapes that import or compose types from
  **`src/types/index.ts`** instead of anonymous JSON.
- Keep write endpoints aligned with `ListingStatus` and sold `closedAt` rules.
- Add tests using valid fixtures and known-bad cases from
  `docs/type-safety/expected-type-errors.md`.
- Acceptance sketch: API handlers never widen listing status back to plain
  `string` without an explicit, documented escape hatch.

Flow: loose JSON -> domain brief + inventory -> strict TS types + fixtures +
typecheck + ADR-001 (you are here) -> TanStack Start forms / Supabase schema /
API boundaries.

## 5. Prompting and review self-assessment

- **Prompting habit that helped:** Pointing the agent at the field inventory and
  domain brief as source of truth, and requiring exact paths so it did not invent
  scaffold sample statuses like `active` / `under_contract`.
- **Second prompting habit that helped:** Asking for one small change at a time
  (unions first, then nested address/financials, then contacts) instead of a
  full rewrite of the listing model in one prompt.
- **Review habit that caught an agent mistake:** Comparing every union member
  and nested field name to `docs/domain/listing-field-inventory.md` before
  accepting output—and rejecting `as InvestorListing` / `@ts-ignore` that would
  silence intentional invalid fixtures.
- **What I would do differently next topic:** Push each artifact to the grading
  GitHub repo (`INFO3330` `main`) in the same sitting as the Cursor commit, so
  PAUL is not waiting on a second machine copy step.
- **Confidence (1–5) explaining InvestorListing to a teammate:** 4

## 6. Handoff checklist for the next owner

- [ ] Read ADR-001 and this handoff before opening a UI or SQL PR
- [ ] Import listing types from `src/types/index.ts` only
- [ ] Keep `npm run typecheck` green on valid fixtures
- [ ] Do not delete intentional invalid fixture files; they document safety
- [ ] File a new ADR if product changes allowed statuses or required fields
