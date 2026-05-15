import { Router } from 'express';
import { authenticate } from '../middleware/auth.middleware';
import Review from '../models/review.model';

const router = Router();

router.get('/dashboard', authenticate, async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const allReviews = await Review.find({ userId });
    const total = allReviews.length;
    const positiveCount = allReviews.filter((review) => review.sentiment === 'positive').length;
    const neutralCount = allReviews.filter((review) => review.sentiment === 'neutral').length;
    const negativeCount = allReviews.filter((review) => review.sentiment === 'negative').length;
    const averageRating = total ? allReviews.reduce((sum, item) => sum + item.rating, 0) / total : 0;
    const topicFrequency = allReviews.reduce<Record<string, number>>((acc, review) => {
      review.topics.forEach((topic) => {
        acc[topic] = (acc[topic] ?? 0) + 1;
      });
      return acc;
    }, {});

    res.json({
      success: true,
      data: {
        total,
        positiveCount,
        neutralCount,
        negativeCount,
        averageRating,
        topicFrequency
      }
    });
  } catch (error) {
    next(error);
  }
});

export default router;
