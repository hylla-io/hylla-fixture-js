import { Catalog } from "./catalog.js";
import { isEven } from "./even.js";
import { formatMoney } from "./money.js";

/**
 * @param {Catalog} catalog
 * @param {number} ratePercent
 */
export function renderReport(catalog, ratePercent) {
  const parity = isEven(catalog.count()) ? "even" : "odd";
  return [
    `items: ${catalog.count()} (${parity})`,
    `subtotal: ${formatMoney(catalog.subtotal())}`,
    `total: ${formatMoney(catalog.total(ratePercent))}`,
  ].join("\n");
}
