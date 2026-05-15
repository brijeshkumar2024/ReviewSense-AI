import { z } from 'zod';

export const emailSchema = z.string().email();

export const passwordSchema = z.string().min(8).max(64);

export const reviewSchema = z.object({
  businessName: z.string().min(2),
  source: z.string().min(2),
  rating: z.number().min(0).max(5),
  reviewText: z.string().min(10),
  reviewerName: z.string().optional(),
  createdAt: z.string().optional(),
});

export const parseRecord = <T>(schema: z.Schema<T>, payload: unknown): T => {
  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    throw new Error(parsed.error.message);
  }
  return parsed.data;
};
