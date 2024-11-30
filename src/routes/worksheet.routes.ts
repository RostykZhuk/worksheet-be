import { Router } from 'express';
import worksheetController from '../controllers/worksheet.controller';

export const worksheetRoutes = Router();

/**
 * @swagger
 * /worksheet-tasks:
 *   get:
 *     summary: Get all worksheet tasks with options
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: List of tasks with their options
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tasks:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         format: uuid
 *                       instruction:
 *                         type: string
 *                       options:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: string
 *                               format: uuid
 *                             text:
 *                               type: string
 *       500:
 *         description: Internal server error
 */
worksheetRoutes.get('/worksheet-tasks', worksheetController.getTasks);

export default worksheetRoutes; 