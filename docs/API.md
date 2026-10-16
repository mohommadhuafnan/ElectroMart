# ElectroMart API Documentation

## Base URL
- Development: `http://localhost:5000/api`

## Health Check
- **Endpoint**: `GET /api/health`
- **Description**: Verifies backend server health and database connection state.
- **Sample Response**:
  ```json
  {
    "status": "success",
    "message": "ElectroMart API is running smoothly",
    "timestamp": "2026-10-17T00:15:00.000Z",
    "uptime": "12.45s",
    "environment": "development",
    "database": {
      "status": "disconnected",
      "host": null
    }
  }
  ```

## Upcoming Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login & JWT issue
- `GET /api/products` - Product listing and filters
- `GET /api/products/:id` - Single product details
- `GET /api/cart` - User cart
- `POST /api/orders` - Place order
