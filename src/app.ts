import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import '@src/config/passport.config';

import api from '@src/api';

import { errorHandlerMiddleware } from '@src/middlewares';

// application is defined here and configured

dotenv.config();

const app: express.Application = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false,
  })
);
app.use(cors());
app.use('/api/v1', api);
app.use(passport.initialize());
app.use(errorHandlerMiddleware);

export default app;
