# Investor Listing Domain Brief (PREIshare)

## Purpose
Define what an investor listing is in PREIshare business language so TypeScript types in later steps match real workflows—not invented fields. PREIshare turns property and market data into clear intelligence for better real-estate decisions; an investor listing is one structured offering investors can trust when they browse.

## Actors
- **Listing editor (internal ops)** — creates and updates listings before investors see them.
- **Investor (end user)** — browses published listings and relies on complete, consistent data.
- **Reviewer / compliance** — checks that status, price, and contact info are trustworthy before publish.
- **Future systems** — website UI, API, and database will all read the same listing shape.

## Business goals
- One shared definition of a listing across screens and teammates.
- Catch missing or invalid data before production (at compile time once types exist).
- Support nested real-world data: address, financial summary, investor contacts, ownership.
- Keep status and property type as closed lists so “almost published” free-text labels never reach investors.

## Listing lifecycle statuses (allowed values only)
- `draft` — internal only; not visible to investors.
- `published` — visible to investors; must meet full validity rules.
- `under_offer` — active interest; still structured like a published listing.
- `sold` — closed deal; retained for history.
- `archived` — removed from active browse; not deleted.

No other status strings are allowed (no free-text variants such as “live”, “pending”, or “coming soon”).

## Property types (allowed values only)
- `multifamily`
- `office`
- `retail`
- `industrial`
- `mixed_use`
- `land`

## Nested data groups
- **Address** — street line(s), city, region/state, postal code, country (nested object, not a single free-text blob).
- **Financial summary** — asking price, currency, optional projected return metrics the team agrees to track (nested object).
- **Investor contacts** — one or more people tied to the listing (name, role, email or phone). For investor-visible statuses (`published`, `under_offer`, `sold`), this list must include at least one contact.
- **Ownership** — how contacts relate to the asset (e.g., primary owner, co-owner, broker) and optional ownership share (list of nested objects).

## Core identity fields (high level)
- Stable listing id
- Human-readable title
- Property type (from the fixed set above)
- Status (from the lifecycle list above)
- Short description for investors
- Created/updated timestamps (as business concepts; format decided later)

## Success criteria — “a valid investor listing”
1. Has a non-empty id and title.
2. Status is exactly one of: `draft`, `published`, `under_offer`, `sold`, `archived` (no free-text variants).
3. Property type is exactly one of: `multifamily`, `office`, `retail`, `industrial`, `mixed_use`, `land`.
4. Address is a nested object with street (`line1`), city, region/state, postal code, and country filled in.
5. Financial summary is a nested object with a numeric asking price and a currency code.
6. Contacts is a list; for `published`, `under_offer`, or `sold`, there is at least one contact with a name and a reachable channel (email or phone).
7. Ownership relationship for each ownership row is from an agreed fixed set (not free text).
8. Optional fields may be absent; required fields above must never be missing for `published`, `under_offer`, or `sold`.
9. A listing that is missing price, status, or a usable address is unsafe to show investors and must stay `draft` (or be fixed) until criteria 1–6 hold.

## Out of scope for this topic
- Building UI forms, API routes, or database tables.
- Authentication, payments, or document uploads.
- Exact TypeScript syntax (comes in later steps).

## Handoff note
Later steps must implement types that honor this brief and the companion field inventory at `docs/domain/listing-field-inventory.md`. If a type allows a status, property type, or field not listed here, the type is wrong.
