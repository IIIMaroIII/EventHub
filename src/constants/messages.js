export const MESSAGES = {
  ERRORS: {
    FULL_NAME: 'is not a valid full name! For example: John Doe',
    EMAIL: 'is not a valid email! For example: example@mail.com',
    BIRTH_DATE:
      'is not a valid birth date! For example: 2024-09-29 (YYYY-MM-DD)',
    PASSWORD:
      'is not a valid password! Password has contain: at least one uppercase letter, one lowercase letter, one digit, one special character from: !#$%^&*<>?/\\|[]{}`";:, and must be at least 8 character long. For example: Password1!',
    MONGOOSE_ID: 'is not a valid mongo ObjectId',
    EVENT_DATE:
      'Event date must be a valid ISO 8601 date format, like 2024-10-05T23:34:22.599Z',
    REQUIRED: 'must be required',
    MIN: 'should have a minimum length of',
    MAX: 'should have a maximum length of',
    BASE: 'should be a type of',
    EMPTY: 'cannot be empty',
    DATE_ISO: 'must be in ISO format (YYYY-MM-DDTHH:mm:ss.sssZ)',
    NOT_FOUND: 'We have not found anything according your request',
    NOT_FOUND_BY_ID: 'is not found by provided id',
    STRING: 'must be the type of string',
    NUMBER: 'must be the type of number',
    ARRAY: 'It must be only the type of Array',
    ARRAY_INCLUDES_VALID_MONGO_ID:
      'The array must include only valid MongoObjectId values!',
    UNIQUE: 'It must be the unique value in the collection',
  },
  SUCCESS: {
    FETCHED: 'You have successfully fetched your',
    CREATED: 'You have successfully created the',
    UPDATE: 'You have successfully updated the',
    DELETE: 'You have successfully deleted the',
  },
};
