import { Router } from 'express';
import { EventsController } from '../controllers/eventsController.js';
import Decorators from '../decorators/Decorators.js';
import JoiSchemas from '../validation/JoiSchemas.js';

export const eventsRouter = Router();

eventsRouter.get('/', EventsController.getAllEvents);

eventsRouter.post(
  '/',
  Decorators.validateBody(JoiSchemas.EventsSchemas.addEvent),
  Decorators.ctrlWrapper(EventsController.addEvent),
);
