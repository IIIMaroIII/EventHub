import { eventsModel } from '../db/models/eventsModel.js';
import { HttpError } from '../helpers/HttpError.js';

export const retrieveMongooseKeysArr = async () => {
  try {
    const res = await eventsModel.find().lean().exec();
    return Object.keys(res[0]);
  } catch (error) {
    throw HttpError(500, error.message);
  }
};
