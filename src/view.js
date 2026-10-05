import { isEven, renderBadge, tax } from "./index.js";

/** @param {{ text: string }} props */
function Label({ text }) {
  return text;
}

// Best practice: keep JSX in a .jsx file, so every tool knows to parse it as JSX.
/** @param {number} cents */
export function BadgeView(cents) {
  const parity = isEven(cents) ? "even" : "odd";
  return <Label text={`${renderBadge(cents, 10)} / net ${tax.applyTax(cents, 0)} (${parity})`} />;
}
