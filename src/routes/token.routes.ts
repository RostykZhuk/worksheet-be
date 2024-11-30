import { Router } from 'express';
import tokenController from '../controllers/token.controller';

export const tokenRoutes = Router();

/**
 * @swagger
 * /tokens:
 *   get:
 *     summary: Generate a new session token
 *     tags: [Auth]
 *     responses:
 *       201:
 *         description: Token generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sessionToken:
 *                   type: string
 *                   description: JWT token
 *       500:
 *         description: Internal server error
 */
tokenRoutes.get('/tokens', tokenController.createToken);

export default tokenRoutes;