import { MESSAGES } from './messages.js';
import { regex } from './regex.js';

const SERVER = {
  PORT: 'PORT',
};

const PINO_HTTP_OPTIONS = {
  transport: {
    target: 'pino-pretty',
  },
};

export const SORT_ORDER_LIST = ['asc', 'desc'];

const DB = {
  CONNECTION_STRING: 'DB_CONNECT_STRING',
};

const LIMITS = {
  EVENTS: {
    STRING_MIN: 3,
    STRING_MAX: 100,
  },
};

export const CONSTANTS = {
  SERVER,
  PINO_HTTP_OPTIONS,
  DB,
  regex,
  MESSAGES,
  LIMITS,
  SORT_ORDER_LIST,
};
