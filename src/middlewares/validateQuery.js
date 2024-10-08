import { parsedNumber } from '../utils/parsedNumber.js';
import { parseSortBy } from '../utils/parsedSortBy.js';
import { parseSortOrder } from '../utils/parsedSortOrder.js';

export const validateQuery = (model) => (req, res, next) => {
  const { page, perPage, sortBy = '_id', sortOrder = 'asc' } = req.query;

  const parsedPage = parsedNumber(page, 1);
  const parsedPerPage = parsedNumber(perPage, 10);

  const parsedSortBy = parseSortBy(sortBy, model);
  const parsedSortOrder = parseSortOrder(sortOrder);

  req.query.page = parsedPage;
  req.query.perPage = parsedPerPage;

  next();
};
