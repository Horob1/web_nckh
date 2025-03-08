import express, { Express } from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import env from '../helpers/env';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { limiter } from './limiter';
import errorHandler from '../mvc/middlewares/errorHandler';
export default (app: Express) => {
  app.use(logger(env.MORGAN_FORMAT));
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginResourcePolicy: { policy: 'same-origin' },
      referrerPolicy: { policy: 'no-referrer' },
    }),
  );
  app.use(rateLimit(limiter));
  app.use(errorHandler);
};
