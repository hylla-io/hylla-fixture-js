import { applyDiscount } from "./discount.js";
import { Priced } from "./pricing.js";
import { applyTax } from "./tax.js";

export class Catalog {
  constructor() {
    /** @type {Priced[]} */
    this.items = [];
  }

  /** @param {Priced} item */
  add(item) {
    this.items.push(item);
  }

  count() {
    return this.items.length;
  }

  subtotal() {
    return this.items.reduce((sum, item) => sum + item.priceCents(), 0);
  }

  /** @param {number} ratePercent */
  total(ratePercent) {
    const bulk = this.count() >= 3 ? 10 : 0;
    return applyTax(applyDiscount(this.subtotal(), bulk), ratePercent);
  }
}
