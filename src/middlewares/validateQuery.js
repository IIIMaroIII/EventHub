import { parsedNumber } from '../utils/parsedNumber.js';
import { parseSortBy } from '../utils/parseSortBy.js';
import { parseSortOrder } from '../utils/parseSortOrder.js';

export const validateQuery = async (req, res, next) => {
  const { page, perPage, sortBy, sortOrder } = req.query;

  const parsedPage = parsedNumber(page, 1);
  const parsedPerPage = parsedNumber(perPage, 10);

  const parsedSortBy = await parseSortBy(sortBy);
  const parsedSortOrder = await parseSortOrder(sortOrder);

  req.query.page = parsedPage;
  req.query.perPage = parsedPerPage;
  req.query.sortBy = parsedSortBy;
  req.query.sortOrder = parsedSortOrder;

  next();
};
