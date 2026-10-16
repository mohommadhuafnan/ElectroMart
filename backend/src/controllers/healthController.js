import mongoose from 'mongoose';
import { getDatabaseStatus } from '../config/db.js';

/**
 * @desc   Check API health and status
 * @route  GET /api/health
 * @access Public
 */
export const getHealthStatus = (req, res) => {
  const uptimeSeconds = process.uptime();
  const memoryUsage = process.memoryUsage();

  res.status(200).json({
    status: 'success',
    message: 'ElectroMart API is running smoothly',
    timestamp: new Date().toISOString(),
    uptime: `${uptimeSeconds.toFixed(2)}s`,
    environment: process.env.NODE_ENV || 'development',
    database: {
      status: getDatabaseStatus(),
      name: mongoose.connection.name || null,
    },
    system: {
      nodeVersion: process.version,
      memoryHeapUsed: `${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`,
    },
  });
};
