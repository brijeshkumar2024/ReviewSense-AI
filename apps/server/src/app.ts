import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { json } from 'express';
import authRoutes from './controllers/auth.controller';
import reviewRoutes from './controllers/review.controller';
import aiRoutes from './controllers/ai.controller';
import analyticsRoutes from './controllers/analytics.controller';
import billingRoutes from './controllers/billing.controller';
import competitorRoutes from './controllers/competitor.controller';
import { errorHandler } from './middleware/error.middleware';

const app = express();

app.use(helmet());
app.use(json({ limit: '10mb' }));
app.use(cors({ origin: process.env.FRONTEND_URL ?? 'http://localhost:5173', credentials: true }));
app.use(morgan('tiny'));
app.use(
  rateLimit({
    windowMs: 60 * 1000,
    max: 120,
    standardHeaders: true,
    legacyHeaders: false
  })
);

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/reviews', reviewRoutes);
app.use('/api/v1/ai', aiRoutes);
app.use('/api/v1/analytics', analyticsRoutes);
app.use('/api/v1/billing', billingRoutes);
app.use('/api/v1/competitors', competitorRoutes);
app.use(errorHandler);

export default app;
