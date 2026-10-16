import express from 'express';
import { getHealthStatus } from '../controllers/healthController.js';

const router = express.Router();

// GET /api/health
router.get('/', getHealthStatus);

export default router;
