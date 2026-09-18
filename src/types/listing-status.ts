/**
 * Closed set of listing lifecycle states from the field inventory.
 * Only these exact strings are allowed—no free text.
 * These literals are the discriminant values for InvestorListing branches.
 */
export type ListingStatus =
  | "draft"
  | "published"
  | "under_offer"
  | "sold"
  | "archived";

/**
 * Statuses that mean the deal is closed.
 * Drawn from ListingStatus so spellings stay single-sourced.
 */
export type ClosedListingStatus = Extract<ListingStatus, "sold">;

/**
 * Statuses that are still open in the lifecycle.
 * Drawn from ListingStatus so spellings stay single-sourced.
 */
export type OpenListingStatus = Exclude<ListingStatus, ClosedListingStatus>;
