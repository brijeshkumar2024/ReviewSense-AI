import { Router } from 'express';
import { authenticate } from '../middleware/auth.middleware';
import Billing from '../models/billing.model';
import User from '../models/user.model';

const router = Router();

router.post('/subscribe', authenticate, async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const { plan, transactionId, invoiceUrl } = req.body;
    if (!userId) {
      return res.status(401).json({ success: false, message: 'Authentication required' });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    await Billing.create({ userId, plan, paymentStatus: 'active', transactionId, invoiceUrl });
    user.plan = plan;
    user.usageLimit = plan === 'premium' ? 999999 : 20;
    await user.save();
    res.json({ success: true, data: { plan: user.plan, usageLimit: user.usageLimit } });
  } catch (error) {
    next(error);
  }
});

router.get('/status', authenticate, async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const billing = await Billing.findOne({ userId }).sort({ createdAt: -1 });
    res.json({ success: true, data: billing });
  } catch (error) {
    next(error);
  }
});

export default router;
