import { Router } from 'express';
import Competitor from '../models/competitor.model';
import Review from '../models/review.model';
import { authenticate } from '../middleware/auth.middleware';
import { requirePremium } from '../middleware/subscription.middleware';

const router = Router();

router.post('/', authenticate, requirePremium, async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const { competitorName, reviews } = req.body;
    const createdReviews = await Review.insertMany(
      reviews.map((review: any) => ({
        userId,
        businessName: review.businessName,
        source: review.source,
        rating: Number(review.rating),
        reviewText: review.reviewText,
        reviewerName: review.reviewerName,
        sentiment: 'neutral',
        topics: [],
        painPoints: [],
        praises: [],
        urgencyScore: 0
      }))
    );

    const competitor = await Competitor.create({
      userId,
      competitorName,
      reviews: createdReviews.map((review) => review._id),
      strengths: ['service excellence'],
      weaknesses: ['pricing concerns'],
      comparisonScore: 72
    });

    res.status(201).json({ success: true, data: competitor });
  } catch (error) {
    next(error);
  }
});

router.get('/', authenticate, async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const competitors = await Competitor.find({ userId }).populate('reviews');
    res.json({ success: true, data: competitors });
  } catch (error) {
    next(error);
  }
});

export default router;
