# 🛒 ApKart — Modern E-Commerce Web Application

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-2563eb?style=for-the-badge&logo=github)](https://OFFICAL-ADITYA.github.io/WD_Week6_AdityaPal/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📌 Project Overview

**ApKart** is a premier, fully-responsive, and interactive e-commerce homepage application structured according to modern online shopping architecture. Built using pure vanilla **HTML5**, **CSS3**, and **JavaScript (ES6+)**, it implements an intuitive 8-section layout, dynamic DOM manipulation, real-time search & category filtering, state persistence via `localStorage`, and full **CRUD** (Create, Read, Update, Delete) product management.

---

## 📐 8-Section E-Commerce Homepage Architecture

| # | Section | Implementation Details |
| :-: | :--- | :--- |
| **1** | **Header** | Brand Logo (`ApKart`), centralized search input with submit button, Account trigger, Wishlist counter, Cart badge counter, and Theme toggle. |
| **2** | **Navigation** | Sub-category bar with `All Categories ⌄` dropdown trigger and direct filter links (`Electronics`, `Fashion`, `Home & Living`, `Beauty`, `Sports`, `Toys`, `Deals`). |
| **3** | **Hero Section** | Card banner featuring headline *"Upgrade Your Everyday"*, *"Top brands. Great prices. Better you."*, blue *"Shop Now"* CTA, tech/gadget showcase visual, and *"New Arrivals"* badge. |
| **4** | **Category Section** | Horizontal row of circular avatar category buttons with icons (`Electronics`, `Fashion`, `Home & Living`, `Beauty`, `Sports`, `Toys`, `More`). |
| **5** | **Product Section** | *"Featured Products"* catalog with *"View All →"* link, price range slider up to ₹50,000, multi-criteria sorting, heart wishlist toggle, ratings, and solid blue *"Add to Cart"* buttons. |
| **6** | **Promotions** | Dual seasonal promo banners: Mint Green *"Summer Sale - Up to 50% OFF"* and Warm Apricot *"Top Brands - Best Deals"* with coupon activation. |
| **7** | **Newsletter** | *"Stay Updated"* email subscription card with RFC-compliant regex validation and toast notification feedback. |
| **8** | **Footer** | Dark Navy background with brand tagline *"Shop Smarter, Live Better."*, social links (Facebook, Instagram, YouTube, LinkedIn), and 3 navigation columns (*Shop*, *Help*, *About*). |

---

## ✨ Key Features & JavaScript Interactivity

### 🛍️ Cart & Wishlist Drawers
- **Off-Canvas Slide-Over Cart:** Real-time quantity adjustment, coupon engine (`NOVAPRO20` for 20% off, `WELCOME10` for ₹500 off, `FREESHIP`), itemized GST (18%), and subtotal calculations.
- **Wishlist Management:** Save favorite items with animated heart toggles; view and transfer items directly with a single *"Move to Bag"* click.
- **Persistent Storage:** Preserves cart, wishlist, and theme preferences across reloads using the `localStorage` API.

### 🛠️ Complete Product CRUD Operations
- **Create (Add):** Interactive modal form with validation allowing sellers to add new items.
- **Read (Browse & Quick View):** Dynamic JavaScript object rendering, plus full-screen *"Quick View"* specifications modal.
- **Update (Edit):** Pre-populates product data in modal for live editing.
- **Delete (Remove):** Confirmation dialogs that safely synchronize deletions across the catalog, cart, and wishlist.
- **Reset Store Data:** A *"Reset"* button that restores default sample items at any time.

### 📝 Multi-Step Checkout & Form Validation
- Contact & shipping address validation (Full Name, RFC email regex, 10-digit phone number, PIN/ZIP code).
- Payment option switcher (Credit/Debit Card with 16-digit space formatting, MM/YY expiry, and CVV checks vs. Cash on Delivery).
- Order confirmation modal with randomized reference ID (e.g. `ORD-849201`).

---

## 📂 Project Structure

```text
WD_Week6_AdityaPal/
│
├── assets/                     # Media & vector graphics
│   └── logo.svg                # Vector brand logo asset
│
├── index.html                  # Semantic HTML5 8-section layout
├── style.css                   # Responsive CSS3 stylesheet & design tokens
├── script.js                   # JavaScript (ES6+) application logic & state
└── README.md                   # Comprehensive project documentation
```

---

## 🚀 How to Run the Project Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/OFFICAL-ADITYA/WD_Week6_AdityaPal.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd WD_Week6_AdityaPal
   ```

3. **Open the project in your browser:**
   - Double click `index.html` directly, or
   - Use VS Code Live Server extension, or run a lightweight local server:
     ```bash
     python -m http.server 5500
     ```

---

## 🌐 GitHub Pages Deployment Guide

To deploy this project on GitHub Pages:
1. Ensure your latest changes are pushed to your remote GitHub repository:
   ```bash
   git add .
   git commit -m "Deploy: ApKart 8-section homepage layout"
   git push -u origin main
   ```
2. Navigate to your repository on GitHub: `https://github.com/OFFICAL-ADITYA/WD_Week6_AdityaPal`
3. Click on the **Settings** tab.
4. In the left sidebar, click on **Pages** (under the "Code and automation" section).
5. Under **Build and deployment** > **Branch**:
   - Select `main` as the branch.
   - Leave the folder as `/ (root)`.
   - Click **Save**.
6. Wait 1&ndash;2 minutes. Your live website URL will be displayed:  
   👉 `https://OFFICAL-ADITYA.github.io/WD_Week6_AdityaPal/`

---

## 👨‍💻 Author

- **Aditya Pal**
- **GitHub:** [@OFFICAL-ADITYA](https://github.com/OFFICAL-ADITYA)
- **Internship:** Web Development Internship &mdash; Week 6 Final Project Submission
