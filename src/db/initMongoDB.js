import mongoose from 'mongoose';
import { DB } from '../constants/constants.js';
import { env } from '../utils/env.js';

export const initMongoDB = async () => {
  try {
    const mongoDbConnectionString = env(DB.CONNECTION_STRING);

    mongoose.connect(mongoDbConnectionString);

    console.log('Connected to the database');
  } catch (error) {
    console.log(
      'The error has occured while setting up the database connection',
      error,
    );
    throw error;
  }
};
