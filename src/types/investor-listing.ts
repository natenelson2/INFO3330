/**
 * Core PREIshare investor listing — scalars plus status/property-type unions.
 * Nested types (address, financials, contacts, ownership) are added in later steps.
 */
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

  /**
   * Asking price in whole US dollars (no currency symbol).
   * Example: 450000 means $450,000.
   */
  askingPrice: number;

  /** ISO-8601 datetime string when the listing was first created. */
  createdAt: string;

  /** ISO-8601 datetime string when the listing was last updated. */
  updatedAt: string;
}
