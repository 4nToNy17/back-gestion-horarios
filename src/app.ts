import express, { Application } from 'express';
import logger from 'morgan';
import cors from 'cors';
import reservaRoute from './routes/reservaRoute';

const app: Application = express();

app.use(express.json());
app.use(logger('dev'));
app.use(cors());

app.use('/api/v1/alumnos',reservaRoute);

export default app;