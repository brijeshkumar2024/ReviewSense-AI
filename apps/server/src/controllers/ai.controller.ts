import { Router } from 'express';
import { authenticate } from '../middleware/auth.middleware';
import { config } from '../config';
import { OpenAIApi, Configuration } from 'openai';
import Review from '../models/review.model';

const router = Router();
const client = new OpenAIApi(new Configuration({ apiKey: config.openAiApiKey }));

const analyzeReview = async (reviewText: string) => {
  const prompt = `Classify sentiment and extract the top topics, praises, pain points, and urgency score from this review. Return JSON with sentiment, topics, painPoints, praises, urgencyScore.`;
  const completion = await client.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a business intelligence assistant.' },
      { role: 'user', content: `${prompt}\n\nReview:${reviewText}` }
    ],
    temperature: 0.2,
    max_tokens: 300
  });

  const text = completion.data.choices?.[0]?.message?.content ?? '';
  try {
    const parsed = JSON.parse(text);
    return parsed;
  } catch {
    return {
      sentiment: 'neutral',
      topics: [],
      painPoints: [],
      praises: [],
      urgencyScore: 0
    };
  }
};

router.post('/analyze', authenticate, async (req, res, next) => {
  try {
    const { reviewId } = req.body;
    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).json({ success: false, message: 'Review not found' });
    }
    const result = await analyzeReview(review.reviewText);
    review.sentiment = result.sentiment ?? 'neutral';
    review.topics = result.topics ?? [];
    review.painPoints = result.painPoints ?? [];
    review.praises = result.praises ?? [];
    review.urgencyScore = result.urgencyScore ?? 0;
    await review.save();
    res.json({ success: true, data: review });
  } catch (error) {
    next(error);
  }
});

router.post('/generate-reply', authenticate, async (req, res, next) => {
  try {
    const { reviewText, tone } = req.body;
    const prompt = `Create a customer response for the following review in a ${tone} tone. Keep it concise, empathetic, and professional.`;
    const completion = await client.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You generate owner replies for business reviews.' },
        { role: 'user', content: `${prompt}\n\nReview:${reviewText}` }
      ],
      temperature: 0.3,
      max_tokens: 180
    });

    const reply = completion.data.choices?.[0]?.message?.content ?? '';
    res.json({ success: true, data: { reply: reply.trim() } });
  } catch (error) {
    next(error);
  }
});

export default router;
