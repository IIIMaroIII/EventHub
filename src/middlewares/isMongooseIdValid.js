import { isValidObjectId } from 'mongoose';
import { HttpError } from '../helpers/HttpError.js';
import CONSTANTS from '../constants/index.js';

const { MONGOOSE_ID } = CONSTANTS.MESSAGES.ERRORS;

const isMongooseIdValid = (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return next(HttpError(400, `${id} ${MONGOOSE_ID}`));
  }
  next();
};

export default isMongooseIdValid;
