import { NextFunction, Response } from 'express';
import { AuthRequest } from './auth.middleware';

export const requirePremium = (req: AuthRequest, res: Response, next: NextFunction): void => {
  if (!req.user) {
    res.status(401).json({ success: false, message: 'Authentication required' });
    return;
  }

  if (req.user.role !== 'admin' && req.user.plan !== 'premium') {
    res.status(402).json({ success: false, message: 'Upgrade to premium to access this feature' });
    return;
  }

  next();
};
