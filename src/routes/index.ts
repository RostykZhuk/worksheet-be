import express from 'express';
import { tokenRoutes } from './token.routes';
import { worksheetRoutes } from './worksheet.routes';
import { answerRoutes } from './answer.routes';

export const routes = express.Router();

routes.use(tokenRoutes);
routes.use(worksheetRoutes);
routes.use(answerRoutes); 