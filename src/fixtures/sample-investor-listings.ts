/**
 * Valid PREIshare investor listing fixtures.
 * Plain object literals annotated as InvestorListing — no type assertions.
 * One sample per ListingStatus; sold branch includes required closedAt.
 */
import type { InvestorListing } from "../types";

/** Draft retail pad — still being prepared; financials may be omitted. */
export const sampleDraftListing: InvestorListing = {
  id: "listing-001",
  title: "Draft — Oak Street Retail Pad",
  summary:
    "Corner retail pad near DART; package still being assembled for investors.",
  status: "draft",
  propertyType: "retail",
  address: {
    line1: "88 Oak St",
    city: "Dallas",
    region: "TX",
    postalCode: "75201",
    country: "US",
  },
  contacts: [
    {
      id: "contact-001",
      fullName: "Morgan Blake",
      role: "broker",
      email: "morgan.blake@example.com",
    },
  ],
  primaryContactId: "contact-001",
  ownership: {
    ownerName: "PREI Draft Vehicles LLC",
    ownershipPercent: 100,
  },
  createdAt: "2026-03-01T10:00:00Z",
  updatedAt: "2026-03-02T14:20:00Z",
};

/** Published multifamily — full nested shapes for investor browse. */
export const samplePublishedListing: InvestorListing = {
  id: "listing-002",
  title: "Riverfront Multifamily — 24 Units",
  summary:
    "Value-add multifamily near transit with unit renovations underway.",
  status: "published",
  propertyType: "multifamily",
  address: {
    line1: "1200 River Rd",
    line2: "Suite 100",
    city: "Austin",
    region: "TX",
    postalCode: "78701",
    country: "US",
  },
  financialSummary: {
    askingPrice: 4250000,
    currency: "USD",
    projectedIrrPercent: 12.5,
    capRatePercent: 5.8,
  },
  contacts: [
    {
      id: "contact-002",
      fullName: "Jordan Lee",
      role: "broker",
      email: "jordan.lee@example.com",
      phone: "+1-512-555-0142",
    },
  ],
  primaryContactId: "contact-002",
  ownership: {
    ownerName: "PREI Riverfront Holdings LLC",
    notes: "Single-asset SPE",
    ownershipPercent: 100,
  },
  createdAt: "2026-02-10T09:00:00Z",
  updatedAt: "2026-03-15T16:30:00Z",
};

/** Under offer industrial — active buyer interest. */
export const sampleUnderOfferListing: InvestorListing = {
  id: "listing-003",
  title: "Cedar Industrial — Under Offer",
  summary:
    "Warehouse with dock-high doors; LOI in hand, diligence in progress.",
  status: "under_offer",
  propertyType: "industrial",
  address: {
    line1: "4500 Cedar Blvd",
    city: "Houston",
    region: "TX",
    postalCode: "77002",
    country: "US",
  },
  financialSummary: {
    askingPrice: 6100000,
    currency: "USD",
    capRatePercent: 6.2,
  },
  contacts: [
    {
      id: "contact-003",
      fullName: "Sam Rivera",
      role: "owner_rep",
      email: "sam.rivera@example.com",
    },
    {
      id: "contact-004",
      fullName: "Taylor Kim",
      role: "sponsor",
      email: "taylor.kim@example.com",
      phone: "+1-713-555-0199",
    },
  ],
  primaryContactId: "contact-003",
  ownership: {
    ownerName: "PREI Cedar JV",
    notes: "Sponsor retains day-to-day control",
    ownershipPercent: 60,
  },
  createdAt: "2026-01-20T11:00:00Z",
  updatedAt: "2026-03-18T12:00:00Z",
};

/** Sold office — closed branch requires closedAt. */
export const sampleSoldListing: InvestorListing = {
  id: "listing-004",
  title: "Summit Office — Sold",
  summary: "Class B office tower sold to a regional buyer; retained for history.",
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
    projectedIrrPercent: 9.1,
    capRatePercent: 5.5,
  },
  contacts: [
    {
      id: "contact-005",
      fullName: "Alex Chen",
      role: "broker",
      email: "alex.chen@example.com",
    },
  ],
  primaryContactId: "contact-005",
  ownership: {
    ownerName: "PREI Summit LLC",
    ownershipPercent: 100,
  },
  createdAt: "2025-08-01T08:00:00Z",
  updatedAt: "2026-01-12T17:45:00Z",
  closedAt: "2026-01-12T17:45:00Z",
};

/** Archived land — removed from active browse; still an open status branch. */
export const sampleArchivedListing: InvestorListing = {
  id: "listing-005",
  title: "East Parcel Land — Archived",
  summary: "Entitled land parcel withdrawn from marketing; kept for records.",
  status: "archived",
  propertyType: "land",
  address: {
    line1: "900 East Parcel Rd",
    city: "Fort Worth",
    region: "TX",
    postalCode: "76102",
    country: "US",
  },
  financialSummary: {
    askingPrice: 1500000,
    currency: "USD",
  },
  contacts: [
    {
      id: "contact-006",
      fullName: "Riley Gomez",
      role: "sponsor",
      email: "riley.gomez@example.com",
    },
  ],
  primaryContactId: "contact-006",
  ownership: {
    ownerName: "PREI East Land LLC",
    ownershipPercent: 100,
  },
  createdAt: "2025-11-05T10:00:00Z",
  updatedAt: "2026-02-28T09:15:00Z",
};

/** All valid samples — useful for UI mocks and typecheck scripts. */
export const sampleInvestorListings: InvestorListing[] = [
  sampleDraftListing,
  samplePublishedListing,
  sampleUnderOfferListing,
  sampleSoldListing,
  sampleArchivedListing,
];
