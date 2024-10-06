import { HttpError } from '../helpers/HttpError.js';

const ctrlWrapper = (controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
  } catch (error) {
    next(error);
  }
};

const validateBody = (schema) => async (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return next(HttpError(400, error.message));
  }
  next();
};

export default {
  ctrlWrapper,
  validateBody,
};
