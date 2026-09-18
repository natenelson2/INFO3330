/**
 * Closed set of property categories from the field inventory.
 * Only these exact strings are allowed—no free text.
 */
export type PropertyType =
  | "multifamily"
  | "office"
  | "retail"
  | "industrial"
  | "mixed_use"
  | "land";
