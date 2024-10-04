import { isValidObjectId } from 'mongoose';
import { HttpError } from '../helpers/HttpError.js';

const isMongooseIdValid = (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return next(HttpError(400, `${id} is not valid id`));
  }
  next();
};

export default isMongooseIdValid;
