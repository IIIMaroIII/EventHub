import { Router } from 'express';
import JoiSchemas from '../validation/JoiSchemas.js';
import Decorators from '../decorators/Decorators.js';
import isMongooseIdValid from '../middlewares/isMongooseIdValid.js';
import { EventsController } from '../controllers/EventsController.js';
import { validateQuery } from '../middlewares/validateQuery.js';

export const eventsRouter = Router();

const { ctrlWrapper, validateBody } = Decorators;
const { EventsSchemas } = JoiSchemas;

eventsRouter.get('/', validateQuery, EventsController.getAllEvents);

eventsRouter.get(
  '/:id',
  isMongooseIdValid,
  ctrlWrapper(EventsController.findEventById),
);

eventsRouter.post(
  '/',
  validateBody(EventsSchemas.addEvent),
  ctrlWrapper(EventsController.addEvent),
);

eventsRouter.put(
  '/:id',
  isMongooseIdValid,
  validateBody(EventsSchemas.addEvent),
  ctrlWrapper(EventsController.upsertEvent),
);

eventsRouter.patch(
  '/:id',
  isMongooseIdValid,
  validateBody(EventsSchemas.updateEvent),
  ctrlWrapper(EventsController.updateEvent),
);

eventsRouter.delete(
  '/:id',
  isMongooseIdValid,
  ctrlWrapper(EventsController.deleteEvent),
);
