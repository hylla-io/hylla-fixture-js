import { isEven } from "./even.js";

/**
 * @param {number} n
 * @returns {boolean}
 */
export function isOdd(n) {
  return n === 0 ? false : isEven(n - 1);
}
