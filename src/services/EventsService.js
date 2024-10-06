import { CONSTANTS } from '../constants/constants.js';
import { eventsModel } from '../db/models/eventsModel.js';
import { HttpError } from '../helpers/HttpError.js';

const getAllEvents = async () => {
  const result = await eventsModel.find();

  return result;
};

const addEvent = async (data) => {
  const result = await eventsModel.create(data);

  return result;
};

const findEventById = async (eventId) => {
  const result = await eventsModel.findById(eventId);

  if (!result)
    throw HttpError(
      404,
      `The event ${CONSTANTS.MESSAGES.ERRORS.NOT_FOUND_BY_ID} ${eventId}`,
    );

  return result;
};

const upsertEvent = async (filter, data, options = {}) => {
  const result = await eventsModel.findOneAndUpdate(filter, data, {
    new: true,
    includeResultMetadata: true,
    ...options,
  });

  if (!result || !result.value) return null;

  console.log(result);

  return {
    data: result.value,
    isNew: !result?.lastErrorObject?.updatedExisting,
  };
};

const deleteEvent = async (id) => eventsModel.findOneAndDelete(id);

export const EventsService = {
  getAllEvents,
  addEvent,
  findEventById,
  deleteEvent,
  upsertEvent,
};
