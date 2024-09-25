import dotenv from 'dotenv';

dotenv.config();

export const env = (name, defaultValue = '') => {
  if (!process.env[name]) throw new Error(`Missing: process.env[${name}]`);
  return process.env[name] || defaultValue;
};
