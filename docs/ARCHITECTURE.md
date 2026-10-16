# ElectroMart - Project Architecture & Team Workflow

## 1. Overview
ElectroMart is an academic e-commerce web platform specialized for electrical and electronic components and devices in Sri Lanka. It follows the MERN (MongoDB, Express.js, React.js, Node.js) architecture.

## 2. Directory Structure

```
ElectroMart/
├── frontend/             # Client-side React application (Vite)
│   ├── public/           # Static public assets (favicons, manifest, etc.)
│   ├── src/              # Application source code
│   │   ├── assets/       # Media assets (images, icons, svgs)
│   │   ├── components/   # Reusable UI components
│   │   │   ├── common/   # Generic components (Buttons, Inputs, Modals, Loaders)
│   │   │   ├── layout/   # Layout elements (Navbar, Footer, Sidebar)
│   │   │   └── products/ # Product-specific cards, grids, filters
│   │   ├── pages/        # Route page views
│   │   │   ├── home/     # Homepage
│   │   │   ├── products/ # Product catalog & product details
│   │   │   ├── auth/     # Login, Register, Forgot Password
│   │   │   ├── cart/     # Shopping cart
│   │   │   ├── checkout/ # Multi-step checkout & payment
│   │   │   ├── orders/   # User order history & tracking
│   │   │   ├── wishlist/ # Saved favorite items
│   │   │   └── admin/    # Admin dashboards & management
│   │   ├── layouts/      # Page container wrappers
│   │   ├── routes/       # Centralized routing definitions
│   │   ├── services/     # Axios client & API integration modules
│   │   ├── context/      # Global React Contexts (Auth, Cart, Wishlist)
│   │   ├── hooks/        # Custom React hooks
│   │   ├── utils/        # Formatting, storage & calculation helpers
│   │   ├── styles/       # Global CSS design system and tokens
│   │   ├── App.jsx       # Root React component
│   │   └── main.jsx      # React DOM bootstrap entry
│   ├── .env.example      # Frontend environment variable template
│   └── package.json
│
├── backend/              # Server-side REST API (Node.js & Express)
│   ├── src/              # Backend source code
│   │   ├── config/       # Database & environment configurations
│   │   ├── controllers/  # Business logic & request handlers
│   │   ├── models/       # Mongoose schemas & data models
│   │   ├── routes/       # Express route handlers
│   │   ├── middleware/   # Authentication, validation, and error middlewares
│   │   ├── services/     # External integrations & auxiliary services
│   │   ├── validators/   # Request payload validation rules (express-validator)
│   │   ├── utils/        # Common utilities (token generators, responders)
│   │   ├── app.js        # Express application configuration & middleware stack
│   │   └── server.js     # Server entrypoint & DB lifecycle manager
│   ├── tests/            # Automated test suites
│   ├── .env.example      # Backend environment variable template
│   └── package.json
│
├── docs/                 # Project documentation & team guidelines
├── .gitignore            # Git exclusion rules
└── README.md             # Project readme and getting started guide
```

## 3. Git Branching & Collaboration Guidelines
For collaborative group work:
- `main`: Production-ready, stable codebase.
- `develop`: Integration branch for testing joined features.
- `feature/<feature-name>`: Feature branches worked on by group members (e.g., `feature/auth`, `feature/product-catalog`, `feature/cart-checkout`).
- Always open a Pull Request (PR) to merge features into `develop`.
