/** A person the team can reach about an investor listing. */
export interface InvestorContact {
  /** Stable id within the listing's contact list. */
  id: string;

  /** Person or firm name shown on the listing. */
  fullName: string;

  /** Role relative to the deal (for example broker, owner_rep, sponsor). */
  role: string;

  /** Reachable email for this contact. */
  email: string;

  /** Optional phone when email alone is not the preferred channel. */
  phone?: string;
}
