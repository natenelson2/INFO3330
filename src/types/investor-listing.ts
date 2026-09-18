/**
 * Core PREIshare investor listing — discriminated on ListingStatus.
 * Sold listings require closedAt; open statuses do not.
 */
import type { Address } from "./address";
import type { FinancialSummary } from "./financial-summary";
import type { InvestorContact } from "./investor-contact";
import type {
  ClosedListingStatus,
  OpenListingStatus,
} from "./listing-status";
import type { Ownership } from "./ownership";
import type { PropertyType } from "./property-type";

/**
 * Shared listing fields. Identity timestamps are readonly so callers
 * treat them as system-owned after create.
 */
interface InvestorListingBase {
  /** Stable unique id for this listing (assigned by the system). */
  readonly id: string;

  /** Short public headline shown in search results and cards. */
  title: string;

  /** Longer plain-text description of the investment opportunity. */
  summary: string;

  /** Asset class from the closed PropertyType set. */
  propertyType: PropertyType;

  /** Physical location; required on every listing record. */
  address: Address;

  /**
   * Nested financial metrics. Optional early in the deal when price
   * and related figures are not yet set (draft listings).
   */
  financialSummary?: FinancialSummary;

  /** One or more people associated with this listing. */
  contacts: InvestorContact[];

  /**
   * Must match InvestorContact.id of one entry in `contacts`.
   * TypeScript cannot fully enforce "id exists in array" alone;
   * we still type it as string so callers pass an id, not a loose object.
   */
  primaryContactId: string;

  /** Ownership description for the asset on this listing. */
  ownership: Ownership;

  /** ISO-8601 datetime string when the listing was first created. */
  readonly createdAt: string;

  /** ISO-8601 datetime string when the listing was last updated. */
  readonly updatedAt: string;
}

/** Listing that is still open — no closedAt on this branch. */
export interface OpenInvestorListing extends InvestorListingBase {
  status: OpenListingStatus;
}

/** Sold/closed listing — closedAt is required on this branch only. */
export interface SoldInvestorListing extends InvestorListingBase {
  status: ClosedListingStatus;

  /** ISO-8601 datetime when the listing was marked sold/closed. */
  closedAt: string;
}

/**
 * Discriminated union on `status` (ListingStatus literals).
 * Narrow with `listing.status === "sold"` to access closedAt safely.
 */
export type InvestorListing = OpenInvestorListing | SoldInvestorListing;
