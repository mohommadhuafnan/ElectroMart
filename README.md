# ⚡ ElectroMart – Sri Lanka Electrical & Electronics E-Commerce Store

> **Academic Project** &bull; Course: **CIS 22032 E-Commerce**  
> **Faculty of Technology**, South Eastern University of Sri Lanka (SEUSL)  
> **Technology Stack**: MERN (MongoDB, Express.js, React, Node.js)  
> **UI Theme Reference**: Exact UI/UX & Color Theme from [MetaBuy.lk](https://metabuy.lk/) (`#FB7C00` Vibrant Signature Orange, Radios WooCommerce Design System)

---

## 📖 Project Overview
**ElectroMart** is an online electrical and electronic retail e-commerce storefront for customers in Sri Lanka. It allows customers to browse verified products, compare specifications, add items to a persistent shopping cart and wishlist, order with **Cash on Delivery (COD)** across all 25 districts of Sri Lanka, and track orders in real-time.

### 🎨 Design System & Theme (Exact Match to MetaBuy.lk)
- **Signature Brand Color**: `#FB7C00` (Vibrant Orange), `#E06D00` (Hover), `#F53B00` (Sale Red-Orange)
- **Dark Neutrals**: `#1A1F36` (Slate Navy), `#111827` (Heading Charcoal), `#11141e` (Footer Dark)
- **Badges & Accents**: `#29B68E` (In-stock Green), `#FFF7ED` (Soft Orange Tint)
- **Typography**: `Outfit` (Headings, Prices, Brand) & `Inter` (Body, UI, Categories)
- **Custom Brand Logo**: Vector SVG hex-shield emblem with electric lightning bolt and typography *"ElectroMart – Elevating Your Everyday"*.

---

## 🏷️ Core Categories (Same as MetaBuy.lk & Proposal)
1. 🔌 **Electricals**: Insulation wiring tapes, sockets, switches, extension units, circuit accessories.
2. 🌀 **Fan**: Stand fans, ceiling fans, wall fans (Delmege, Wicks, Standard Stellar).
3. 🍳 **Kitchen Appliance**: Electric ovens, double-burner gas stoves, infrared cookers, electric kettles.
4. 💡 **LED**: Dual-direction architectural wall lamps, garden facade lamps, emergency LED bulbs.
5. 🍚 **Rice Cooker**: Automatic 1.8L, 2.2L, and 2.8L rice cookers with steamer trays.
6. ☀️ **Solar**: Monocrystalline solar ceiling lights, 50W–200W solar street lamps, solar fence lights.
7. 📺 **TV**: Android & Google Smart TVs from 32" to 55" 4K UHD (Konka, OREL, FLiCo).

---

## 🚀 Implemented Frontend Modules & Pages

| Page / Route | Features |
| :--- | :--- |
| **`HomePage` (`/`)** | Hero split section, 7-category animated slider with hover effects, 4 promotional banners, featured product tabs, live countdown flash deal, Sri Lanka trust badges, testimonials. |
| **`ShopPage` (`/shop`)** | Category filter sidebar, keyword search, price slider (LKR 1,000–200,000), sale-only filter, sorting options, product cards with instant Add-to-Cart and Wishlist toggles. |
| **`ProductDetailPage` (`/product/:id`)** | Multi-image thumbnail gallery, stock status, official warranty badge, quantity selector, "Add to Cart" and "Buy Now", specifications table, warranty details, and related products carousel. |
| **`CartPage` (`/cart`)** | Quantity controls, remove item, coupon promo voucher code (`ELECTRO10`, `WELCOME10`, `FREESHIP`), real-time Sri Lanka delivery fee computation, order summary. |
| **`CheckoutPage` (`/checkout`)** | Customer information form, Sri Lanka 25-district selector, Cash on Delivery (COD) / Card / Bank transfer selector, order confirmation modal with generated Order Reference ID. |
| **`TrackOrderPage` (`/track-order`)** | Interactive 5-step visual tracking timeline (*Order Placed* &rarr; *Packed* &rarr; *Dispatched with Courier* &rarr; *Out for Delivery* &rarr; *Delivered*), courier code, and WhatsApp helpline. |
| **`WishlistPage` (`/wishlist`)** | Saved favorite items list, in-stock badges, quick "Move to Cart", and "Add All to Cart". |
| **`AuthPage` (`/login`, `/register`)** | Tabbed Sign In & Register forms with validation and one-click Customer & Admin Demo credential fill shortcuts. |
| **`OrdersPage` (`/orders`, `/account`)** | Customer order history with order reference IDs, delivery status badges, and direct tracking links. |
| **`AboutPage` (`/about`)** | Company story, core guarantees, and South Eastern University of Sri Lanka (SEUSL) CIS 22032 coursework accreditation. |
| **`ContactPage` (`/contact`)** | Vavuniya store location, phone / WhatsApp direct hotline (`+94 77 766 6961`), support email, customer service hours, and interactive inquiry form with toast feedback. |
| **`AdminDashboardPage` (`/admin`)** | Administration preview portal fulfilling Proposal `FR11`–`FR14` with total revenue, order metrics, product inventory management table, and order status updater. |

---

## 💻 How to Run the Frontend

### 1. Navigate to the frontend directory
```bash
cd frontend
```

### 2. Install dependencies (if not already installed)
```bash
npm install
```

### 3. Start the Vite React development server
```bash
npm run dev
```
Open **`http://localhost:5173`** in your browser.

### 4. Build for production
```bash
npm run build
```

---

## 👥 Project Team (Group 01)
- **Abdul Basith** (`SEU/IS/22/ICT/024`) – Project Coordination & MERN Architecture
- **Mohommadhu Afnan** (`SEU/IS/22/ICT/085`) – Frontend Development & UI/UX
- **CIS 22032 E-Commerce** &bull; South Eastern University of Sri Lanka
