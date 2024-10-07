const saveError = (err, data, next) => {
  err.status = 400;
  next();
};

function updateOptions(next) {
  this.options.new = true;
  this.options.runValidators = true;
  next();
}

export const MongooseHooks = {
  saveError,
  updateOptions,
};
