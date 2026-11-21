# Interactive Shopping Cart

Week 12 homework for Web Programming (Gachon University) — WongDengFoong, 202699475.

**Live demo:** https://wongdf2006.github.io/shopping-cart/

A small React shop that practises `useState`: six products with Add buttons, and a cart sidebar
where you can change quantities, remove items or clear the cart. The total is always worked out
from the cart state, so it can never get out of sync.

## Components

| Component | Job |
|---|---|
| `ShoppingCart` | Owns the cart state (`[{ id, quantity }]`) and the functions that change it. Passes data down to both children. |
| `ProductList` | Shows each product's image, name and price with an **Add to cart** button. |
| `Cart` | Sidebar listing items with **−** / **+** quantity buttons, **Remove**, the total and **Clear cart**. |

## How the state is updated

All updates use the functional form `setCart(prev => ...)` and never mutate the array:

- **Add / +** — `map` to raise the quantity if the item is already there, otherwise append `{ id, quantity: 1 }`.
- **−** — `map` to lower the quantity, then `filter` out anything that reached 0.
- **Remove** — `filter` the item out.
- **Total** — `reduce` over the cart on each render (derived, not stored).

## Run it

```bash
npm install
npm run dev      # local development
npm run deploy   # build and publish to the gh-pages branch
```
