import { Router } from 'express';
import answerController from '../controllers/answer.controller';
import { authMiddleware } from '../middleware/auth.middleware';

export const answerRoutes = Router();

/**
 * @swagger
 * /answers/{taskId}:
 *   post:
 *     summary: Submit an answer for a task
 *     tags: [Answers]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID of the task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - optionId
 *             properties:
 *               optionId:
 *                 type: string
 *                 format: uuid
 *     responses:
 *       200:
 *         description: Answer submitted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 correct:
 *                   type: boolean
 *       400:
 *         description: Missing required fields
 *       401:
 *         description: Unauthorized - Invalid or expired token
 *       500:
 *         description: Internal server error
 */
answerRoutes.post('/answers/:taskId', authMiddleware, answerController.submitAnswer);

export default answerRoutes; 