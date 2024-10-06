import { Router } from 'express';
import Decorators from '../decorators/Decorators.js';
import JoiSchemas from '../validation/JoiSchemas.js';
import isMongooseIdValid from '../middlewares/isMongooseIdValid.js';
import { EventsController } from '../controllers/EventsController.js';

export const eventsRouter = Router();

eventsRouter.get('/', EventsController.getAllEvents);

eventsRouter.get(
  '/:id',
  isMongooseIdValid,
  Decorators.ctrlWrapper(EventsController.findEventById),
);

eventsRouter.post(
  '/',
  // Decorators.validateBody(JoiSchemas.EventsSchemas.addEvent),
  Decorators.ctrlWrapper(EventsController.addEvent),
);

eventsRouter.put(
  '/:id',
  isMongooseIdValid,
  Decorators.ctrlWrapper(EventsController.upsertEvent),
);

eventsRouter.patch(
  '/:id',
  isMongooseIdValid,
  Decorators.ctrlWrapper(EventsController.updateEvent),
);

eventsRouter.delete(
  '/:id',
  isMongooseIdValid,
  Decorators.ctrlWrapper(EventsController.deleteEvent),
);
