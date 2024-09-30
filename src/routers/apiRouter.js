import { Router } from 'express';
import { eventsRouter } from './eventsRouter.js';

export const apiRouter = Router();

apiRouter.use('/events', eventsRouter);
