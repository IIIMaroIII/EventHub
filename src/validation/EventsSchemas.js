import Joi from 'joi';
import { CONSTANTS } from '../constants/constants.js';
import { validateMongooseIdInJoiSchema } from './validateMongooseIdInJoiSchema.js';

const { ERRORS } = CONSTANTS.MESSAGES;
const { EVENTS } = CONSTANTS.LIMITS;
const { regex } = CONSTANTS;

const addEvent = Joi.object({
  title: Joi.string()
    .min(EVENTS.STRING_MIN)
    .max(EVENTS.STRING_MAX)
    .trim()
    .required()
    .messages({
      'any.required': `Title ${ERRORS.REQUIRED}`,
      'string.base': `Title ${ERRORS.STRING}`,
      'string.empty': `Title ${ERRORS.EMPTY}`,
      'string.min': `Title ${ERRORS.MIN} {#limit}`,
      'string.max': `Title ${ERRORS.MAX} {#limit}`,
    }),
  description: Joi.string()
    .trim()
    .min(EVENTS.STRING_MIN)
    .required()
    .messages({
      'any.required': `Description ${ERRORS.REQUIRED}`,
      'string.base': `Description ${ERRORS.STRING}`,
      'string.empty': `Description ${ERRORS.EMPTY}`,
      'string.min': `Description ${ERRORS.MIN} {#limit}`,
    }),
  eventDate: Joi.string()
    .pattern(regex.eventDate)
    .required()
    .messages({
      'string.base': `${ERRORS.EVENT_DATE}`,
      'string.empty': `Event date ${ERRORS.EMPTY}`,
      'string.pattern.base': `${ERRORS.EVENT_DATE}`,
      'any.required': `Event date ${ERRORS.REQUIRED}`,
    }),
});

const updateEvent = Joi.object({
  title: Joi.string()
    .min(EVENTS.STRING_MIN)
    .max(EVENTS.STRING_MAX)
    .trim()
    .messages({
      'string.base': `Title ${ERRORS.STRING}`,
      'string.empty': `Title ${ERRORS.EMPTY}`,
      'string.min': `Title ${ERRORS.MIN} {#limit}`,
      'string.max': `Title ${ERRORS.MAX} {#limit}`,
    }),
  description: Joi.string()
    .min(EVENTS.STRING_MIN)
    .messages({
      'string.base': `Description ${ERRORS.STRING}`,
      'string.empty': `Description ${ERRORS.EMPTY}`,
      'string.min': `Description ${ERRORS.MIN} {#limit}`,
    }),
  eventDate: Joi.string()
    .pattern(regex.eventDate)
    .messages({
      'string.base': `${ERRORS.EVENT_DATE}`,
      'string.empty': `Event date ${ERRORS.EMPTY}`,
      'string.pattern.base': `${ERRORS.EVENT_DATE}`,
      'any.required': `Event date ${ERRORS.REQUIRED}`,
    }),
  participationsID: Joi.array()
    .items(
      Joi.string()
        .custom(validateMongooseIdInJoiSchema)
        .messages({
          'any.invalid': `${ERRORS.ARRAY_INCLUDES_VALID_MONGO_ID}`,
          'string.base': `The value ${ERRORS.STRING}`,
        }),
    )
    .unique()
    .messages({
      'array.base': `${ERRORS.ARRAY}`,
      'array.includes': `${ERRORS.ARRAY_INCLUDES_VALID_MONGO_ID}`,
      'array.unique': `${ERRORS.UNIQUE}`,
    }),
});

export const EventsSchemas = {
  addEvent,
  updateEvent,
};
