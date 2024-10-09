import mongoose from 'mongoose';
import { env } from '../utils/env.js';
import CONSTANTS from '../constants/index.js';

const { CONNECTION_STRING } = CONSTANTS.DB;

export const initMongoDB = async () => {
  try {
    const mongoDbConnectionString = env(CONNECTION_STRING);

    await mongoose.connect(mongoDbConnectionString);

    console.log('Mongo DB is successfully connected');
  } catch (error) {
    console.log('The connection with mongo DB was failed with:', error.message);
    process.exit(1);
  }
};
