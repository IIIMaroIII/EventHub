import express from 'express';
import cors from 'cors';

import { env } from './utils/env.js';
import { pinoHttp } from 'pino-http';
import { CONSTANTS } from './constants/constants.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFound } from './middlewares/notFound.js';

const PORT = env(CONSTANTS.SERVER.PORT);

export const startServer = () => {
  const app = express();

  app.use(pinoHttp(CONSTANTS.PINO_HTTP_OPTIONS));
  app.use(express.json());
  app.use(cors());

  app.get('/', async (req, res, next) => {
    res.json({
      message: 'Hello World',
    });
  });

  app.use('*', notFound);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is on port ${PORT}`);
  });
};
