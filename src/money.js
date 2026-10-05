/** @param {number} x */
export function roundHalfUp(x) {
  return Math.max(0, Math.floor(x + 0.5));
}

/** @param {number} cents */
export function formatMoney(cents) {
  const sign = cents < 0 ? "-" : "";
  const abs = Math.abs(cents);
  const whole = Math.trunc(abs / 100);
  const frac = String(abs % 100).padStart(2, "0");
  return `${sign}$${whole}.${frac}`;
}
