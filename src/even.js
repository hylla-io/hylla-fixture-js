import { isOdd } from "./odd.js";

/**
 * @param {number} n
 * @returns {boolean}
 */
export function isEven(n) {
  return n === 0 ? true : isOdd(n - 1);
}
