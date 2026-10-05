import { roundHalfUp } from "./tax.js";

/**
 * Takes `percent` off an amount in cents, rounding the discount half up.
 *
 * @param {number} cents
 * @param {number} percent
 */
export function applyDiscount(cents, percent) {
  return cents - roundHalfUp((cents * percent) / 100);
}
