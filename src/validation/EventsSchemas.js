import Joi from 'joi';
import { CONSTANTS } from '../constants/constants.js';

const addEvent = Joi.object({
  title: Joi.string()
    .min(CONSTANTS.LIMITS.EVENTS.STRING_MIN)
    .max(CONSTANTS.LIMITS.EVENTS.STRING_MAX)
    .trim()
    .required()
    .messages({
      'any.required': `Title ${CONSTANTS.MESSAGES.ERRORS.REQUIRED}`,
      'string.base': `Title ${CONSTANTS.MESSAGES.ERRORS.BASE} string`,
      'string.empty': `Title ${CONSTANTS.MESSAGES.ERRORS.EMPTY}`,
      'string.min': `Title ${CONSTANTS.MESSAGES.ERRORS.MIN} {#limit}`,
      'string.max': `Title ${CONSTANTS.MESSAGES.ERRORS.MAX} {#limit}`,
    }),
  description: Joi.string()
    .min(CONSTANTS.LIMITS.EVENTS.STRING_MIN)
    .required()
    .messages({
      'any.required': `Description ${CONSTANTS.MESSAGES.ERRORS.REQUIRED}`,
      'string.base': `Description ${CONSTANTS.MESSAGES.ERRORS.BASE} string`,
      'string.empty': `Description ${CONSTANTS.MESSAGES.ERRORS.EMPTY}`,
      'string.min': `Description ${CONSTANTS.MESSAGES.ERRORS.MIN} {#limit}`,
    }),
  eventDate: Joi.date()
    .iso()
    .required()
    .messages({
      'date.base': `${CONSTANTS.MESSAGES.ERRORS.EVENT_DATE}`,
      'date.format': `${CONSTANTS.MESSAGES.ERRORS.EVENT_DATE}`,
      'any.required': `Event date ${CONSTANTS.MESSAGES.ERRORS.REQUIRED}`,
    }),
});

const updateEvent = Joi.object({
  title: Joi.string()
    .min(CONSTANTS.LIMITS.EVENTS.STRING_MIN)
    .max(CONSTANTS.LIMITS.EVENTS.STRING_MAX)
    .trim()
    .messages({
      'string.base': `Title ${CONSTANTS.MESSAGES.ERRORS.BASE} string`,
      'string.empty': `Title ${CONSTANTS.MESSAGES.ERRORS.EMPTY}`,
      'string.min': `Title ${CONSTANTS.MESSAGES.ERRORS.MIN} {#limit}`,
      'string.max': `Title ${CONSTANTS.MESSAGES.ERRORS.MAX} {#limit}`,
    }),
  description: Joi.string()
    .min(CONSTANTS.LIMITS.EVENTS.STRING_MIN)
    .messages({
      'string.base': `Description ${CONSTANTS.MESSAGES.ERRORS.BASE}`,
      'string.empty': `Description ${CONSTANTS.MESSAGES.ERRORS.EMPTY}`,
      'string.min': `Description ${CONSTANTS.MESSAGES.ERRORS.MIN} {#limit}`,
    }),
  eventDate: Joi.date()
    .iso()
    .messages({
      'date.base': `${CONSTANTS.MESSAGES.ERRORS.EVENT_DATE}`,
      'date.format': `${CONSTANTS.MESSAGES.ERRORS.EVENT_DATE}`,
    }),
});

export const EventsSchemas = {
  addEvent,
  updateEvent,
};
