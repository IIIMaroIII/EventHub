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
  eventDate: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/,
};

const MESSAGES = {
  ERRORS: {
    FULL_NAME: 'is not a valid full name! For example: John Doe',
    EMAIL: 'is not a valid email! For example: example@mail.com',
    BIRTH_DATE:
      'is not a valid birth date! For example: 2024-09-29 (YYYY-MM-DD)',
    PASSWORD:
      'is not a valid password! Password has contain: at least one uppercase letter, one lowercase letter, one digit, one special character from: !#$%^&*<>?/\\|[]{}`";:, and must be at least 8 character long. For example: Password1!',
    MONGOOSE_ID: 'is not a valid mongo ObjectId',
    EVENT_DATE:
      'Event date must be a valid ISO 8601 date format, like 2024-11-18T18:00:00Z',
    REQUIRED: 'must be required',
    MIN: 'should have a minimum length of',
    MAX: 'should have a maximum length of',
    BASE: 'should be a type of',
    EMPTY: 'cannot be empty',
    DATE_ISO: 'must be in ISO format (YYYY-MM-DDTHH:mm:ss.sssZ)',
    NOT_FOUND_BY_ID: 'is not found by provided id',
  },
  SUCCESS: {
    FETCHED: 'You have successfully fetched your',
    CREATED: 'You have successfully created the',
  },
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
};
