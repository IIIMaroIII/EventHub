export const errorHandler = (err, req, res, next) => {
  if (err instanceof Error) {
    const { status = 500, message = 'Server error', data = null } = err;
    res.status(status).json({ status, message, errors: data || err.errors });
    return;
  }

  res.status(500).json({ status: 500, message: 'Server error', errors: err });
};
