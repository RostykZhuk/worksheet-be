import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import { initDatabase } from "./config/database";
import { routes } from './routes';
import { specs } from './config/swagger';

// Import models in correct order
import './models/WorksheetTask';
import './models/TaskOption';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Enable CORS for all origins
app.use(cors({ origin: '*' }));

app.use(express.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// API Routes
app.use('/api/v1', routes);

// Health check route
app.get("/", (req: Request, res: Response) => {
  res.send("Worksheet BE server!");
});

const startServer = async () => {
  try {
    await initDatabase();
    
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
      console.log(`📚 Swagger documentation available at http://localhost:${port}/api-docs`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
