/**
 * Core PREIshare investor listing — composed domain types for PREIshare.
 */
import type { Address } from "./address";
import type { FinancialSummary } from "./financial-summary";
import type { InvestorContact } from "./investor-contact";
import type { ListingStatus } from "./listing-status";
import type { Ownership } from "./ownership";
import type { PropertyType } from "./property-type";

export interface InvestorListing {
  /** Stable unique id for this listing (assigned by the system). */
  id: string;

  /** Short public headline shown in search results and cards. */
  title: string;

  /** Longer plain-text description of the investment opportunity. */
  summary: string;

  /** Lifecycle state from the closed ListingStatus set. */
  status: ListingStatus;

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
  createdAt: string;

  /** ISO-8601 datetime string when the listing was last updated. */
  updatedAt: string;
}
