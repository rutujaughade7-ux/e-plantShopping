# e-plantShopping

**Project name:** e-plantShopping
**Company:** Paradise Nursery (online plant shop)
**Author:** Rutuja Ughade (GitHub: rutujaughade7-ux)

e-plantShopping is the shopping cart application for Paradise Nursery, an online plant shop
built with React and Redux Toolkit. Customers can browse houseplants grouped by category, add
them to a shopping cart, adjust quantities, remove items, and see the running total.

## Features

- Landing page with the heading "Welcome To Paradise Nursery", a background image and a
  **Get Started** button that opens the product list
- About Us section describing the company
- Product listing with 18 houseplants in 3 categories, each with a thumbnail, name and price
- **Add to Cart** buttons that disable once a plant is added and update the cart icon count
- Navbar with Home, Plants and Cart links on the product listing and cart pages
- Shopping cart with per-plant totals, a total cart amount, quantity +/- buttons, delete
  buttons, a **Checkout** button ("Coming Soon") and a **Continue Shopping** button

## Project files

| File | Purpose |
|---|---|
| `src/App.jsx` / `src/App.css` | Landing page (company name, Get Started button, background image) |
| `src/AboutUs.jsx` | Details about the company |
| `src/CartSlice.jsx` | Redux slice with the `addItem`, `removeItem` and `updateQuantity` reducers |
| `src/ProductList.jsx` | Navbar and product listing with Add to Cart buttons |
| `src/CartItem.jsx` | Shopping cart page |

## Run locally

```bash
npm install
npm run dev
```

## Tech stack

React 18, Redux Toolkit, React-Redux, Vite
