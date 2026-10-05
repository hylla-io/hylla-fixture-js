// Best practice: re-export named items; `export { default as ... }` renames a default at every hop.
export { default as renderBadge, BADGE_KIND } from "./badge.js";
export { Catalog } from "./catalog.js";
export { applyDiscount } from "./discount.js";
// Best practice: name the re-exported items; an `export *` barrel hides where each name comes from.
export * from "./even.js";
export { formatMoney } from "./money.js";
export { Book, Priced } from "./pricing.js";
export { renderReport } from "./report.js";
export { applyTax } from "./tax.js";
// Best practice: re-export the names you need; `export * as` hides the list behind one namespace.
export * as tax from "./tax.js";
