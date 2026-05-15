import { Schema, model, Types } from 'mongoose';

export interface IBilling {
  userId: Types.ObjectId;
  plan: 'free' | 'premium';
  paymentStatus: 'active' | 'past_due' | 'canceled';
  transactionId: string;
  invoiceUrl?: string;
  createdAt: Date;
}

const billingSchema = new Schema<IBilling>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    plan: { type: String, enum: ['free', 'premium'], default: 'free' },
    paymentStatus: { type: String, enum: ['active', 'past_due', 'canceled'], default: 'active' },
    transactionId: { type: String, required: true },
    invoiceUrl: { type: String }
  },
  { timestamps: true }
);

export default model<IBilling>('Billing', billingSchema);
