# ⚡ ElectroMart - Sri Lanka E-Commerce Platform

> Academic Group Project | MERN Stack E-Commerce Platform for Electrical and Electronic Products in Sri Lanka.

---

## 📖 Project Overview
**ElectroMart** is an e-commerce platform designed to bridge the gap between engineering students, hobbyists, industrial technicians, and authentic electronic component distributors across Sri Lanka. It provides access to microcontrollers (Arduino, ESP32, Raspberry Pi), IoT sensors, lab power supplies, and discrete electrical hardware with localized currency (LKR), shipping options, and inventory management.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite, React Router DOM, Axios, Lucide React, Modern Vanilla CSS Design Tokens |
| **Backend** | Node.js, Express.js (ES Modules), Mongoose, Helmet, Morgan, CORS, Cookie Parser |
| **Database** | MongoDB (NoSQL) |
| **Authentication & Security** | JWT (JSON Web Tokens), bcryptjs, Helmet HTTP headers, CORS validation |
| **Documentation & Collaboration** | GitHub Flow, Markdown Architecture Docs, express-validator |

---

## 📂 Project Architecture

```
ElectroMart/
├── frontend/                     # Client application (React + Vite)
│   ├── public/                   # Public static files (favicon, manifest)
│   ├── src/
│   │   ├── assets/               # Media & brand graphics
│   │   ├── components/
│   │   │   ├── common/           # Generic buttons, inputs, loaders, modals
│   │   │   ├── layout/           # Navbar, Footer, Sidebars
│   │   │   └── products/         # Product cards, grids, rating filters
│   │   ├── pages/
│   │   │   ├── home/             # Homepage with live health check
│   │   │   ├── products/         # Catalog & product detail pages
│   │   │   ├── auth/             # Login, Registration, Password recovery
│   │   │   ├── cart/             # Shopping cart & quantity management
│   │   │   ├── checkout/         # Multi-step checkout & payment
│   │   │   ├── orders/           # Order history & Sri Lanka courier tracking
│   │   │   ├── wishlist/         # Saved favorite products
│   │   │   └── admin/            # Store admin dashboard & management
│   │   ├── layouts/              # Main page layouts
│   │   ├── routes/               # AppRoutes navigation router
│   │   ├── services/             # Axios API client instance & interceptors
│   │   ├── context/              # Global state (Auth, Cart, Wishlist)
│   │   ├── hooks/                # Custom React hooks
│   │   ├── utils/                # Currency formatters, validation helpers
│   │   ├── styles/               # Global design tokens & CSS system
│   │   ├── App.jsx               # Root application component
│   │   └── main.jsx              # Application bootstrap entry point
│   ├── .env.example              # Frontend environment variables template
│   ├── vite.config.js            # Vite build & proxy configuration
│   └── package.json
│
├── backend/                      # Server application (Node.js + Express)
│   ├── src/
│   │   ├── config/               # Database connection & env configurations
│   │   ├── controllers/          # API route controllers (health, auth, products)
│   │   ├── models/               # Mongoose schemas (User, Product, Order)
│   │   ├── routes/               # Express route endpoints
│   │   ├── middleware/           # Auth JWT verification, 404, global error handling
│   │   ├── services/             # Payment, email, business logic services
│   │   ├── validators/           # Request schema validation (express-validator)
│   │   ├── utils/                # Token generators, response formatting
│   │   ├── app.js                # Express app setup & middleware stack
│   │   └── server.js             # Server listener & database lifecycle
│   ├── tests/                    # Backend unit & integration test suites
│   ├── .env.example              # Backend environment variables template
│   └── package.json
│
├── docs/                         # Team guides, API docs & architecture specs
│   ├── ARCHITECTURE.md
│   ├── API.md
│   └── CONTRIBUTING.md
├── .gitignore                    # Root git exclusion file
└── README.md                     # Root project documentation
```

---

## 🚀 Getting Started & Installation

### Prerequisites
- **Node.js**: v18.0.0 or higher (Tested on Node v24+)
- **npm**: v9.0.0 or higher
- **MongoDB**: Local MongoDB community edition or MongoDB Atlas URI (optional for initial run)
- **Git**

---

### 1. Clone the Repository
```bash
git clone https://github.com/mohommadhuafnan/ElectroMart.git
cd ElectroMart
```

---

### 2. Backend Setup
1. Open a terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create your `.env` file from `.env.example`:
   ```bash
   # Windows PowerShell
   Copy-Item .env.example .env

   # Linux/macOS
   cp .env.example .env
   ```
4. Start the backend development server:
   ```bash
   npm run dev
   ```
   *The backend will be live at `http://localhost:5000`.*
   *Test API health check at `http://localhost:5000/api/health`.*

---

### 3. Frontend Setup
1. Open a second terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create your `.env` file from `.env.example`:
   ```bash
   # Windows PowerShell
   Copy-Item .env.example .env

   # Linux/macOS
   cp .env.example .env
   ```
4. Start the Vite React development server:
   ```bash
   npm run dev
   ```
   *The frontend will be live at `http://localhost:5173`.*

---

## 🩺 API Health Check Endpoint

You can test that the backend is responding by visiting:
- **URL**: `http://localhost:5000/api/health`
- **Method**: `GET`
- **Response Format**:
  ```json
  {
    "status": "success",
    "message": "ElectroMart API is running smoothly",
    "timestamp": "2026-10-17T00:15:00.000Z",
    "uptime": "15.22s",
    "environment": "development",
    "database": {
      "status": "disconnected",
      "name": null
    },
    "system": {
      "nodeVersion": "v24.16.0",
      "memoryHeapUsed": "18.45 MB"
    }
  }
  ```

---

## 👥 Group Collaboration Workflow (Git)

1. **Branching Strategy**:
   - `main`: Stable release branch.
   - `develop`: Integration branch.
   - `feature/<feature-name>`: Individual assigned tasks (e.g. `feature/user-auth`, `feature/product-filter`).
2. **Commit Conventions**:
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation change
   - `refactor:` Code restructuring
3. **Pull Requests**:
   - Create a Pull Request (PR) against `main` or `develop`.
   - Never commit sensitive `.env` files or API keys.

---

## 📄 License
This project is developed for academic purposes under the ElectroMart student project team.
