const SERVER = {
  PORT: 'PORT',
};

const PINO_HTTP_OPTIONS = {
  transport: {
    target: 'pino-pretty',
  },
};

const DB = {
  CONNECTION_STRING: 'DB_CONNECT_STRING',
};

const regex = {
  fullName: /^[A-Z][a-z]+\s[A-Z][a-z]+$/,
  email: /^\S+@\S+\.\S+$/,
  birthDate: /^\d{4}-\d{2}-\d{2}$/,
  password:
    /^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#$%^&*<>?/\|[\]{}"`;:]).{8,}$/,
};

const MESSAGES = {
  ERRORS: {
    FULL_NAME: 'is not a valid full name! For example: John Doe',
    EMAIL: 'is not a valid email! For example: example@mail.com',
    BIRTH_DATE:
      'is not a valid birth date! For example: 2024-09-29 (YYYY-MM-DD)',
    PASSWORD:
      'is not a valid password! Password has contain: at least one uppercase letter, one lowercase letter, one digit, one special character from: !#$%^&*<>?/\\|[]{}`";:, and must be at least 8 character long. For example: Password1!',
  },
};

export const CONSTANTS = {
  SERVER,
  PINO_HTTP_OPTIONS,
  DB,
  regex,
  MESSAGES,
};
