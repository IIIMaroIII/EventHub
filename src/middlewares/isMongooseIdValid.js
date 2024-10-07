import { isValidObjectId } from 'mongoose';
import { HttpError } from '../helpers/HttpError.js';
import { CONSTANTS } from '../constants/constants.js';

const isMongooseIdValid = (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return next(
      HttpError(400, `${id} ${CONSTANTS.MESSAGES.ERRORS.MONGOOSE_ID}`),
    );
  }
  next();
};

export default isMongooseIdValid;
