/** Anything with a price in whole cents. Subclasses override `priceCents`. */
export class Priced {
  /** @returns {number} */
  priceCents() {
    throw new Error("Priced.priceCents must be overridden");
  }
}

export class Book extends Priced {
  /**
   * @param {string} title
   * @param {number} unitCents
   * @param {number} quantity
   */
  constructor(title, unitCents, quantity) {
    super();
    this.title = title;
    this.unitCents = unitCents;
    this.quantity = quantity;
  }

  /** @returns {number} */
  priceCents() {
    return this.unitCents * this.quantity;
  }
}
