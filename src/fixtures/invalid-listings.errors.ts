/**
 * INTENTIONAL TYPE ERRORS — this file should NOT typecheck cleanly.
 * Each export demonstrates a failure mode documented in
 * docs/type-safety/expected-type-errors.md
 *
 * Do not silence these with `any`, `unknown` escapes, `@ts-ignore`,
 * `@ts-expect-error`, or `as InvestorListing` assertions.
 */
import type { InvestorListing } from "../types";

/** Case: status spelled in a way the ListingStatus union does not allow. */
export const invalidStatusSpelling: InvestorListing = {
  id: "listing-bad-status",
  title: "Downtown duplex offering",
  summary: "Would break status filters if free-text labels slipped through.",
  status: "availble",
  propertyType: "multifamily",
  address: {
    line1: "100 Main St",
    city: "Austin",
    region: "TX",
    postalCode: "78701",
    country: "US",
  },
  financialSummary: {
    askingPrice: 450000,
    currency: "USD",
  },
  contacts: [
    {
      id: "contact-bad-status",
      fullName: "Alex Rivera",
      role: "broker",
      email: "alex@example.com",
    },
  ],
  primaryContactId: "contact-bad-status",
  ownership: {
    ownerName: "Rivera Holdings",
    ownershipPercent: 100,
  },
  createdAt: "2026-03-01T10:00:00Z",
  updatedAt: "2026-03-01T10:00:00Z",
};

/** Case: required nested address.city is missing. */
export const missingAddressCity: InvestorListing = {
  id: "listing-missing-city",
  title: "Lakeview fourplex",
  summary: "Maps and cards cannot render without a city.",
  status: "draft",
  propertyType: "multifamily",
  address: {
    line1: "22 Lake Rd",
    region: "TX",
    postalCode: "78702",
    country: "US",
  },
  contacts: [
    {
      id: "contact-missing-city",
      fullName: "Sam Lee",
      role: "broker",
      email: "sam@example.com",
    },
  ],
  primaryContactId: "contact-missing-city",
  ownership: {
    ownerName: "Lee Capital",
    ownershipPercent: 100,
  },
  createdAt: "2026-03-01T10:00:00Z",
  updatedAt: "2026-03-01T10:00:00Z",
};

/** Case: numeric money field given as a string. */
export const priceAsString: InvestorListing = {
  id: "listing-price-string",
  title: "Cedar Street portfolio slice",
  summary: "Asking price must be numeric for sorting and math.",
  status: "published",
  propertyType: "mixed_use",
  address: {
    line1: "9 Cedar St",
    city: "Dallas",
    region: "TX",
    postalCode: "75201",
    country: "US",
  },
  financialSummary: {
    askingPrice: "610000",
    currency: "USD",
  },
  contacts: [
    {
      id: "contact-price-string",
      fullName: "Jordan Kim",
      role: "sponsor",
      email: "jordan@example.com",
    },
  ],
  primaryContactId: "contact-price-string",
  ownership: {
    ownerName: "Kim Investors",
    ownershipPercent: 100,
  },
  createdAt: "2026-03-01T10:00:00Z",
  updatedAt: "2026-03-01T10:00:00Z",
};

/** Case: contact role not in the inventory closed set. */
export const invalidContactRole: InvestorListing = {
  id: "listing-bad-role",
  title: "Northside office condo",
  summary: "Free-text roles would break contact filters and workflows.",
  status: "published",
  propertyType: "office",
  address: {
    line1: "400 Commerce St",
    city: "Austin",
    region: "TX",
    postalCode: "78701",
    country: "US",
  },
  financialSummary: {
    askingPrice: 890000,
    currency: "USD",
  },
  contacts: [
    {
      id: "contact-bad-role",
      fullName: "Casey Nguyen",
      role: "listing_agent",
      email: "casey@example.com",
    },
  ],
  primaryContactId: "contact-bad-role",
  ownership: {
    ownerName: "Nguyen Holdings",
    ownershipPercent: 100,
  },
  createdAt: "2026-03-01T10:00:00Z",
  updatedAt: "2026-03-01T10:00:00Z",
};

/**
 * Case: ownership must be a single Ownership object, not an array of rows.
 * Inventory may describe ownership lists later; this model uses one object.
 */
export const ownershipAsArray: InvestorListing = {
  id: "listing-ownership-array",
  title: "Westside industrial bay",
  summary: "Flattening ownership into the wrong shape loses required fields.",
  status: "under_offer",
  propertyType: "industrial",
  address: {
    line1: "77 Warehouse Way",
    city: "Houston",
    region: "TX",
    postalCode: "77002",
    country: "US",
  },
  financialSummary: {
    askingPrice: 2100000,
    currency: "USD",
  },
  contacts: [
    {
      id: "contact-ownership-array",
      fullName: "Riley Gomez",
      role: "owner_rep",
      email: "riley@example.com",
    },
  ],
  primaryContactId: "contact-ownership-array",
  ownership: [{ ownerName: "Gomez Capital", ownershipPercent: 100 }],
  createdAt: "2026-03-01T10:00:00Z",
  updatedAt: "2026-03-01T10:00:00Z",
};

/** Case: sold branch requires closedAt; omitting it must fail. */
export const soldWithoutClosedAt: InvestorListing = {
  id: "listing-sold-no-closed-at",
  title: "Summit Office — Sold",
  summary: "Closed deals need a closedAt timestamp for history and reporting.",
  status: "sold",
  propertyType: "office",
  address: {
    line1: "1 Summit Plaza",
    city: "San Antonio",
    region: "TX",
    postalCode: "78205",
    country: "US",
  },
  financialSummary: {
    askingPrice: 2750000,
    currency: "USD",
  },
  contacts: [
    {
      id: "contact-sold-no-closed",
      fullName: "Alex Chen",
      role: "broker",
      email: "alex@example.com",
    },
  ],
  primaryContactId: "contact-sold-no-closed",
  ownership: {
    ownerName: "PREI Summit LLC",
    ownershipPercent: 100,
  },
  createdAt: "2025-08-01T08:00:00Z",
  updatedAt: "2026-01-12T17:45:00Z",
};
