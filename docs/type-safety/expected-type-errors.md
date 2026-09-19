# Expected type errors for invalid investor listings

This note maps each intentional bad fixture in
`src/fixtures/invalid-listings.errors.ts` to the PREIshare business problem it
represents and the TypeScript rule that should catch it.

**Happy-path samples** live in `src/fixtures/sample-investor-listings.ts` and
must stay valid under `npm run typecheck`.

**Invalid fixtures** are supposed to fail typechecking. They are excluded from
the default `tsconfig.json` include via `**/*.errors.ts` so the green path
stays green. Open the file in the editor (or temporarily remove that exclude)
to see the red errors—do not "fix" them with `any`, `@ts-ignore`, or
`as InvestorListing`.

## Cases

| id | business problem | rule that should catch it | expected TS kind |
| --- | --- | --- | --- |
| `invalidStatusSpelling` | A status typo (for example `availble`) would break filters and lifecycle rules | `ListingStatus` string union on the listing discriminant | invalid string literal / not assignable to `InvestorListing` |
| `missingAddressCity` | City is required for maps, cards, and a usable investor address | `Address.city: string` (required) | missing property `city` |
| `priceAsString` | Asking price must be numeric for sorting and math | `FinancialSummary.askingPrice: number` | type `string` not assignable to `number` |
| `invalidContactRole` | Free-text roles (for example `listing_agent`) break contact workflows | `ContactRole` closed union (`broker` \| `owner_rep` \| `sponsor`) | invalid string literal on `role` |
| `ownershipAsArray` | Ownership is one structured object on this model; an array loses the shape | `ownership: Ownership` (object, not array) | array not assignable to `Ownership` |
| `soldWithoutClosedAt` | Sold/closed deals need a close timestamp for history | `SoldInvestorListing` requires `closedAt` | missing property `closedAt` on sold branch |

## Hole hunt notes (reviewed against domain rules)

| possible bad data | still accepted today? | action this step |
| --- | --- | --- |
| Contact `role` as any free-text string | Was a hole (`role: string`) | **Tightened** to `ContactRole` union from the field inventory |
| `ownershipPercent` over 100 or negative | Yes (`number` only) | Left as-is — inventory does not encode a numeric range type |
| Empty `contacts` on `published` / `under_offer` / `sold` | Yes (array may be empty) | Left as-is — enforcing non-empty by status needs a larger discriminant redesign beyond this step |
| Email format / phone format | Yes (`string`) | Left as-is — brief requires a reachable channel, not a regex type |

## Sync rule

When you add or remove an invalid export, update this table in the same change.
When you tighten a type, add a fixture that would have slipped through before.
