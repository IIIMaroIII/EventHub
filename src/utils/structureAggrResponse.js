export const structureAggrResponse = (res) => {
  const { data, page, perPage, quantityOfDocuments, ...args } = res[0];

  const totalPages = Math.round(quantityOfDocuments / perPage) || 1;

  const isNextPage = totalPages > page;
  const isPrevPage = page !== 1;

  console.log('isNextPage', isNextPage);
  console.log('isPrevPage', isPrevPage);

  return {
    data,
    page,
    perPage,
    quantityOfDocuments,
    isNextPage,
    isPrevPage,
    totalPages,
    ...args,
  };
};
