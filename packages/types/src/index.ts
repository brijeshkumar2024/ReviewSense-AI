export type Role = 'user' | 'admin';

export type SubscriptionPlan = 'free' | 'premium';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: Role;
  plan: SubscriptionPlan;
  usageLimit: number;
  createdAt: string;
}

export interface ReviewRecord {
  id: string;
  userId: string;
  businessName: string;
  source: string;
  rating: number;
  reviewText: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  topics: string[];
  painPoints: string[];
  praises: string[];
  urgencyScore: number;
  aiReply?: string;
  createdAt: string;
}

export interface CompetitorBenchmark {
  id: string;
  userId: string;
  competitorName: string;
  reviews: ReviewRecord[];
  strengths: string[];
  weaknesses: string[];
  comparisonScore: number;
  createdAt: string;
}

export interface BillingRecord {
  id: string;
  userId: string;
  plan: SubscriptionPlan;
  paymentStatus: 'active' | 'past_due' | 'canceled';
  transactionId: string;
  invoiceUrl?: string;
  createdAt: string;
}
