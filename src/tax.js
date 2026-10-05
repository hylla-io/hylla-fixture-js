import { roundHalfUp } from "./money.js";

/**
 * Adds tax at `ratePercent` to an amount in cents, rounding half up.
 * A negative amount (a refund) stays negative.
 *
 * @param {number} cents
 * @param {number} ratePercent
 */
export function applyTax(cents, ratePercent) {
  return roundHalfUp((cents * (100 + ratePercent)) / 100);
}
