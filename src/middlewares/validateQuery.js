import { parsedNumber } from '../utils/parsedNumber.js';

export const validateQuery = (req, res, next) => {
  const { page, perPage } = req.query;

  const parsedPage = parsedNumber(page, 1);
  const parsedPerPage = parsedNumber(perPage, 10);

  req.query.page = parsedPage;
  req.query.perPage = parsedPerPage;

  next();
};
