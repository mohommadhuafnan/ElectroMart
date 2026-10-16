import mongoose from 'mongoose';

/**
 * Connect to MongoDB database
 * Handles connection lifecycle and errors gracefully
 */
export const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.warn('⚠️  MONGO_URI is not defined in environment variables. Running in offline/disconnected database mode.');
    return;
  }

  try {
    const conn = await mongoose.connect(mongoUri);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    console.warn('⚠️  Backend will continue running, but database features will be unavailable until MongoDB is connected.');
  }
};

/**
 * Helper to get current database connection state
 * @returns {'connected' | 'connecting' | 'disconnecting' | 'disconnected' | 'uninitialized'}
 */
export const getDatabaseStatus = () => {
  const states = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  };
  return states[mongoose.connection.readyState] || 'uninitialized';
};
