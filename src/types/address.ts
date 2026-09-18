/**
 * Physical location for a PREIshare investor listing.
 * Field names and required/optional marks follow the field inventory.
 */
export interface Address {
  /** Street number and name. */
  line1: string;

  /** Unit or suite, when the property has one. */
  line2?: string;

  /** City. */
  city: string;

  /** State, province, or region. */
  region: string;

  /** Postal / ZIP code. */
  postalCode: string;

  /** Country code or name. */
  country: string;
}
