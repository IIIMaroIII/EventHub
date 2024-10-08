import { CONSTANTS } from '../constants/constants.js';
import CreateResponseObj from '../helpers/CreateResponseObj.js';
import { HttpError } from '../helpers/HttpError.js';
import { EventsService } from '../services/eventsService.js';

const getAllEvents = async (req, res, next) => {
  const { page, perPage } = req.query;

  const data = await EventsService.getAllEvents({ page, perPage });

  res.json({
    status: 200,
    message: `${CONSTANTS.MESSAGES.SUCCESS.FETCHED} data `,
    data,
  });
};

const findEventById = async (req, res, next) => {
  const { id } = req.params;

  const data = await EventsService.findEventById(id);

  res.json(
    CreateResponseObj(
      200,
      `${CONSTANTS.MESSAGES.SUCCESS.FETCHED} event by ID`,
      data,
    ),
  );
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

const upsertEvent = async (req, res, next) => {
  const { id } = req.params;

  const result = await EventsService.upsertEvent({ _id: id }, req.body, {
    upsert: true,
  });

  console.log(result);

  if (!result) throw HttpError(500);

  const status = result.isNew ? 201 : 200;
  const message = result.isNew
    ? `${CONSTANTS.MESSAGES.SUCCESS.CREATED} event with id ${id}`
    : `${CONSTANTS.MESSAGES.SUCCESS.UPDATE} event by id ${id}`;

  res.status(status).json(CreateResponseObj(status, message, result.data));
};

const updateEvent = async (req, res, next) => {
  const { id } = req.params;

  const result = await EventsService.upsertEvent({ _id: id }, req.body);

  if (!result)
    throw HttpError(
      404,
      `The event ${CONSTANTS.MESSAGES.ERRORS.NOT_FOUND_BY_ID} ${id}`,
    );

  res.json(
    CreateResponseObj(
      200,
      `${CONSTANTS.MESSAGES.SUCCESS.UPDATE} event with id ${id}`,
      result.data,
    ),
  );
};

const deleteEvent = async (req, res, next) => {
  const { id } = req.params;

  const result = await EventsService.deleteEvent(id);

  if (!result)
    throw HttpError(
      404,
      `The event ${CONSTANTS.MESSAGES.ERRORS.NOT_FOUND_BY_ID} ${id}`,
    );

  res.json(
    CreateResponseObj(
      200,
      `${CONSTANTS.MESSAGES.SUCCESS.DELETE} event with id ${id}`,
      result,
    ),
  );
};

export const EventsController = {
  getAllEvents,
  addEvent,
  findEventById,
  deleteEvent,
  updateEvent,
  upsertEvent,
};
