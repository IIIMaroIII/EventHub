import { HttpError } from '../helpers/HttpError.js';

export const notFound = (req, res, next) => {
  next(HttpError(404));
};
