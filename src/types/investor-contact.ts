/** A person the team can reach about an investor listing. */

/**
 * Closed contact roles from the field inventory.
 * Only these exact strings are allowed—no free text.
 */
export type ContactRole = "broker" | "owner_rep" | "sponsor";

export interface InvestorContact {
  /** Stable id within the listing's contact list. */
  id: string;

  /** Person or firm name shown on the listing. */
  fullName: string;

  /** Role relative to the deal (inventory closed set). */
  role: ContactRole;

  /** Reachable email for this contact. */
  email: string;

  /** Optional phone when email alone is not the preferred channel. */
  phone?: string;
}
