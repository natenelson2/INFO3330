# Listing Field Inventory (PREIshare)

Use this table as the source of truth when defining TypeScript types. Field names are suggestions the types may adopt; meanings and shapes are mandatory.

Companion brief: `docs/domain/investor-listing-domain-brief.md`.

## Identity and classification
| Field | Meaning | Shape | Required? | Example / allowed values |
| --- | --- | --- | --- | --- |
| id | Stable unique id for the listing | text | yes | `lst_river_1001` |
| title | Short name shown to investors | text | yes | `Riverfront Multifamily Offering` |
| description | Longer investor-facing summary | text | yes for `published`, `under_offer`, `sold` | `Value-add asset near transit...` |
| status | Lifecycle state | fixed choice | yes | `draft`, `published`, `under_offer`, `sold`, `archived` only |
| propertyType | Asset class | fixed choice | yes | `multifamily`, `office`, `retail`, `industrial`, `mixed_use`, `land` only |
| createdAt | When the listing record was created | datetime | yes | `2026-03-01T10:00:00Z` |
| updatedAt | Last meaningful edit | datetime | yes | `2026-03-15T16:30:00Z` |

## Address (nested object: `address`)
| Field | Meaning | Shape | Required? | Example |
| --- | --- | --- | --- | --- |
| address.line1 | Street number and name | text | yes | `500 River Rd` |
| address.line2 | Unit/suite (if any) | text | no | `Suite 200` |
| address.city | City | text | yes | `Austin` |
| address.region | State/province/region | text | yes | `TX` |
| address.postalCode | Postal code | text | yes | `78701` |
| address.country | Country code or name | text | yes | `US` |

## Financial summary (nested object: `financials`)
| Field | Meaning | Shape | Required? | Example |
| --- | --- | --- | --- | --- |
| financials.askingPrice | Listed price amount | number | yes | `12500000` |
| financials.currency | Currency code | fixed choice | yes | `USD` (extend only by updating the domain brief) |
| financials.projectedIrrPercent | Optional projected IRR | number | no | `12.5` |
| financials.capRatePercent | Optional cap rate | number | no | `5.8` |

## Investor contacts (list of nested objects: `contacts[]`)
| Field | Meaning | Shape | Required? | Example |
| --- | --- | --- | --- | --- |
| contacts | People tied to the listing | list of nested objects | yes — at least one entry for `published`, `under_offer`, `sold` | see rows below |
| contacts[].name | Person or firm name | text | yes (each contact) | `Jordan Lee` |
| contacts[].role | Why they appear on the listing | fixed choice | yes | `broker`, `owner_rep`, `sponsor` |
| contacts[].email | Email if used | text | one of email/phone required per contact | `jordan@example.com` |
| contacts[].phone | Phone if used | text | one of email/phone required per contact | `+1-512-555-0142` |

## Ownership (list of nested objects: `ownership[]`)
| Field | Meaning | Shape | Required? | Example |
| --- | --- | --- | --- | --- |
| ownership[].contactNameOrId | Which contact the row refers to | text | yes | `Jordan Lee` or contact id |
| ownership[].relationship | Relationship to the asset | fixed choice | yes | `primary_owner`, `co_owner`, `broker`, `property_manager` |
| ownership[].sharePercent | Optional ownership share | number | no | `60` |

## Inventory rules (must hold)
1. Do not invent extra top-level groups beyond identity, `address`, `financials`, `contacts`, and `ownership` without updating the domain brief.
2. `status` and `propertyType` must remain closed lists (union candidates)—never free text.
3. `address` and `financials` are nested objects, not flat optional strings only.
4. `contacts` is a list (array); a valid investor-visible listing (`published`, `under_offer`, `sold`) needs at least one contact with a name and email or phone.
5. Every required field above must appear in later TypeScript interfaces unless the decision record deliberately relaxes it.
6. A listing missing asking price, allowed status, or a complete address is unsafe for investors and must not be treated as published-ready.
