import express, { type Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorHandler';
import businessPlanRouter from './routes/businessPlan';
import webHooksRouters from './routes/webhooks';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT ?? 8080;

// Middleware
app.use(helmet());


app.use('/api/webhooks', express.raw({ type: 'application/json' }), webHooksRouters);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN ? (process.env.CORS_ORIGIN as string).split(',') : [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:3002',
    ],
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

console.log('Accepting origins - ', process.env.CORS_ORIGIN?.split(','))

// Health check
app.get('/health', (_req, res) => {
  res.json({
    success: true,
    message: 'API is healthy!',
    timestamp: new Date().toISOString(),
  });
});

// Routes
app.use('/api/business-plans', businessPlanRouter);

// 404 handler
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Error handling
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🚀 Environment: ${process.env.NODE_ENV ?? 'development'}`);
  console.log(`📡 Accepting requests from UI1, UI2, and UI3`);
});

export default app;
