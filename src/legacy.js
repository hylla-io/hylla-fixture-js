import { Priced } from "./pricing.js";

/**
 * The pre-catalog total: sums prices with no tax. Kept for old callers.
 *
 * @param {Priced[]} items
 */
export function legacyTotal(items) {
  let sum = 0;
  for (const item of items) {
    sum += item.priceCents();
  }
  return sum;
}
