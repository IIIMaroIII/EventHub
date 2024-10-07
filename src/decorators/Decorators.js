import { HttpError } from '../helpers/HttpError.js';

const ctrlWrapper = (controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
  } catch (error) {
    next(error);
  }
};

const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, {
      abortEarly: false,
    });

    next();
  } catch (error) {
    next(HttpError(400, error.message, error.details));
  }
};

export default {
  ctrlWrapper,
  validateBody,
};
