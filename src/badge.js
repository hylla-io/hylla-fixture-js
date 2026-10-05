import { formatMoney } from "./money.js";
import { applyTax } from "./tax.js";

/**
 * Best practice: a named export; a default export takes whatever name each importer gives it.
 *
 * @param {number} cents
 * @param {number} ratePercent
 */
export default function renderBadge(cents, ratePercent) {
  return `${renderBadge.kind}: ${formatMoney(applyTax(cents, ratePercent))}`;
}

// Best practice: export a separate constant; a property set on a function merges into it as a namespace.
renderBadge.kind = "badge";

export const BADGE_KIND = renderBadge.kind;
