import mongoose from 'mongoose';
import { CONSTANTS } from '../constants/constants.js';
import { env } from '../utils/env.js';

export const initMongoDB = async () => {
  try {
    const mongoDbConnectionString = env(CONSTANTS.DB.CONNECTION_STRING);

    await mongoose.connect(mongoDbConnectionString);

    console.log('Mongo DB is successfully connected');
  } catch (error) {
    console.log('The connection with mongo DB was failed with:', error.message);
    process.exit(1);
  }
};
