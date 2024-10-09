import CONSTANTS from '../constants/index.js';

const { SORT_ORDER_LIST } = CONSTANTS.LISTS;

export const parseSortOrder = async (sortOrder) => {
  if (SORT_ORDER_LIST.includes(sortOrder)) return sortOrder;
  return 'asc';
};
