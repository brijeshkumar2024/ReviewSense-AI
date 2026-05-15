import { Schema, model, Types } from 'mongoose';

export interface IReview {
  userId: Types.ObjectId;
  businessName: string;
  source: string;
  rating: number;
  reviewText: string;
  reviewerName?: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  topics: string[];
  painPoints: string[];
  praises: string[];
  urgencyScore: number;
  aiReply?: string;
  createdAt: Date;
}

const reviewSchema = new Schema<IReview>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    businessName: { type: String, required: true },
    source: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    reviewText: { type: String, required: true },
    reviewerName: { type: String },
    sentiment: {
      type: String,
      enum: ['positive', 'neutral', 'negative'],
      default: 'neutral'
    },
    topics: { type: [String], default: [] },
    painPoints: { type: [String], default: [] },
    praises: { type: [String], default: [] },
    urgencyScore: { type: Number, default: 0 },
    aiReply: { type: String }
  },
  { timestamps: true }
);

export default model<IReview>('Review', reviewSchema);
