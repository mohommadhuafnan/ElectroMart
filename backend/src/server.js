import dotenv from 'dotenv';
import http from 'http';
import app from './app.js';
import { connectDB } from './config/db.js';

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

// Start server and initialize database connection
const startServer = async () => {
  // Connect to MongoDB
  await connectDB();

  server.listen(PORT, () => {
    console.log(`🚀 ElectroMart Backend Server listening on port ${PORT}`);
    console.log(`🔗 Health Check URL: http://localhost:${PORT}/api/health`);
    console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
  });
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Rejection Error: ${err.message}`);
  server.close(() => process.exit(1));
});

// Graceful termination handling
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server gracefully');
  server.close(() => {
    console.log('HTTP server closed');
  });
});

startServer();
