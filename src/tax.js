/** @param {number} x */
export function roundHalfUp(x) {
  return Math.max(0, Math.floor(x + 0.5));
}

/**
 * Adds tax at `ratePercent` to an amount in cents, rounding half up.
 * A negative amount (a refund) becomes zero.
 *
 * @param {number} cents
 * @param {number} ratePercent
 */
export function applyTax(cents, ratePercent) {
  return roundHalfUp((cents * (100 + ratePercent)) / 100);
}
