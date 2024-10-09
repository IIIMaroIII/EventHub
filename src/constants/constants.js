export const SERVER = {
  PORT: 'PORT',
};

export const PINO_HTTP_OPTIONS = {
  transport: {
    target: 'pino-pretty',
  },
};

export const LISTS = {
  SORT_ORDER_LIST: ['asc', 'desc'],
};

export const DB = {
  CONNECTION_STRING: 'DB_CONNECT_STRING',
};

export const LIMITS = {
  EVENTS: {
    STRING_MIN: 3,
    STRING_MAX: 100,
  },
};
