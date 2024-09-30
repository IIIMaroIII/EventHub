import { CONSTANTS } from '../constants/constants.js';
import CreateResponseObj from '../helpers/CreateResponseObj.js';
import { EventsService } from '../services/eventsService.js';

const getAllEvents = async (req, res, next) => {
  const data = await EventsService.getAllEvents();

  res.json({
    status: 200,
    message: `${CONSTANTS.MESSAGES.SUCCESS.FETCHED} data `,
    data,
  });
};

const addEvent = async (req, res, next) => {
  const data = req.body;
  const result = await EventsService.addEvent(data);

  res
    .status(201)
    .json(
      CreateResponseObj(
        201,
        `${CONSTANTS.MESSAGES.SUCCESS.CREATED} event`,
        result,
      ),
    );
};

const findEventById = async (req, res, next) => {};

const deleteEventById = async (req, res, next) => {};

const updateEvent = async (req, res, next) => {};

export const EventsController = {
  getAllEvents,
  addEvent,
  findEventById,
  deleteEventById,
  updateEvent,
};
