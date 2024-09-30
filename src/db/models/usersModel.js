import { model, Schema } from 'mongoose';
import { CONSTANTS } from '../../constants/constants.js';

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      validate: {
        validator: (v) => CONSTANTS.regex.fullName.test(v),
        message: ({ value }) =>
          `"${value}" ${CONSTANTS.MESSAGES.ERRORS.FULL_NAME}`,
      },
    },
    email: {
      type: String,
      trim: true,
      required: true,
      validate: {
        validator: (v) => CONSTANTS.regex.email.test(v),
        message: ({ value }) => `"${value}" ${CONSTANTS.MESSAGES.ERRORS.EMAIL}`,
      },
    },
    birthDate: {
      type: String,
      validate: {
        validator: (v) => CONSTANTS.regex.birthDate.test(v),
        message: ({ value }) =>
          `"${value}" ${CONSTANTS.MESSAGES.ERRORS.BIRTH_DATE}`,
      },
    },
    survey: {
      type: String,
      enum: ['Social media', 'Friends', 'Found myself'],
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: (v) => CONSTANTS.regex.password.test(v),
        message: ({ value }) =>
          `${value} ${CONSTANTS.MESSAGES.ERRORS.PASSWORD}`,
      },
    },
  },
  { timestamps: true, versionKey: false },
);

export const usersModel = model('users', userSchema);
