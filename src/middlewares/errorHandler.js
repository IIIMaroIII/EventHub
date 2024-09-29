export const errorHandler = (err, req, res, next) => {
  const { status, message } = err;

  res.status(status).json({
    status,
    message,
  });
};
