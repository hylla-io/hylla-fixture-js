# hylla-fixture-js

A tiny catalog used as a Hylla ingest fixture. Every file is small and its contents are known
exactly.

## Money

`roundHalfUp` rounds half up. `formatCents` prints cents as dollars. Both live in
[src/money.js](src/money.js).

## Tax

`applyTax` in [src/tax.js](src/tax.js) adds tax and rounds half up. Refunds pass through:
`applyTax(-1000, 10)` is `-1100`.

## Totals

`Catalog.total` taxes the subtotal. `renderReport` prints a report; rounding is described under
[Tax](#tax).
