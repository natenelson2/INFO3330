/**
 * Core PREIshare investor listing — scalars, unions, and nested address/financials.
 * Contacts and ownership nested types are added in later steps.
 */
import type { Address } from "./address";
import type { FinancialSummary } from "./financial-summary";
import type { ListingStatus } from "./listing-status";
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

  /** ISO-8601 datetime string when the listing was first created. */
  createdAt: string;

  /** ISO-8601 datetime string when the listing was last updated. */
  updatedAt: string;
}
