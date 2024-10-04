import { HttpError } from '../helpers/HttpError.js';

export const errorHandler = (err, req, res, next) => {
  if (err instanceof Error) {
    const { status, message } = err;
    res.status(status).json({ status, message });
    return;
  }

  res.status(500).json({ status: 500, message: 'Server error', data: err });
};
