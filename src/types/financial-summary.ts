/**
 * Financial metrics for a PREIshare investor listing.
 * Amounts and rates are numbers; only inventory-optional metrics are optional.
 */
export interface FinancialSummary {
  /** Listed asking price amount (no currency symbol). */
  askingPrice: number;

  /** Currency code; inventory currently allows USD only. */
  currency: "USD";

  /** Optional projected IRR as a percent (for example 12.5). */
  projectedIrrPercent?: number;

  /** Optional cap rate as a percent (for example 5.8). */
  capRatePercent?: number;
}
