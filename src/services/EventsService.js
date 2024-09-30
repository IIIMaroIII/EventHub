import { eventsModel } from '../db/models/eventsModel.js';

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

  return result;
};

const deleteEventById = async () => {};

const updateEvent = async () => {};

export const EventsService = {
  getAllEvents,
  addEvent,
  findEventById,
  deleteEventById,
  updateEvent,
};
