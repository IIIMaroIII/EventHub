import { HttpError } from './HttpError.js';

export const notFound = (req, res, next) => {
  next(HttpError(404));
};
