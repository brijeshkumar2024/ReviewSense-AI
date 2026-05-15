import { Router } from 'express';
import multer from 'multer';
import Review from '../models/review.model';
import { authenticate } from '../middleware/auth.middleware';
import { parse } from 'csv-parse/sync';

const router = Router();
const upload = multer();

router.post('/upload', authenticate, upload.single('file'), async (req, res, next) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ success: false, message: 'Authentication required' });
    }

    const payload = req.body.reviews ? JSON.parse(req.body.reviews) : [];
    if (req.file) {
      const text = req.file.buffer.toString('utf8');
      const records = parse(text, { columns: true, skip_empty_lines: true });
      for (const entry of records) {
        await Review.create({
          userId,
          businessName: entry.businessName || 'Unknown',
          source: entry.source || 'Uploaded',
          rating: Number(entry.rating) || 0,
          reviewText: entry.reviewText || '',
          reviewerName: entry.reviewerName,
          sentiment: 'neutral',
          topics: [],
          painPoints: [],
          praises: [],
          urgencyScore: 0
        });
      }
      return res.status(201).json({ success: true, message: 'Reviews uploaded successfully' });
    }

    if (payload.length > 0) {
      const created = await Review.insertMany(
        payload.map((review: any) => ({
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
      return res.status(201).json({ success: true, data: created });
    }

    res.status(400).json({ success: false, message: 'No reviews received' });
  } catch (error) {
    next(error);
  }
});

router.get('/', authenticate, async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const reviews = await Review.find({ userId }).sort({ createdAt: -1 }).limit(200);
    res.json({ success: true, data: reviews });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', authenticate, async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id;
    await Review.deleteOne({ _id: id, userId });
    res.json({ success: true, message: 'Review deleted' });
  } catch (error) {
    next(error);
  }
});

export default router;
