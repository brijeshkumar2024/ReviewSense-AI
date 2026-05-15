import { Schema, model, Types } from 'mongoose';

export interface ICompetitor {
  userId: Types.ObjectId;
  competitorName: string;
  reviews: Types.ObjectId[];
  strengths: string[];
  weaknesses: string[];
  comparisonScore: number;
  createdAt: Date;
}

const competitorSchema = new Schema<ICompetitor>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    competitorName: { type: String, required: true },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    strengths: { type: [String], default: [] },
    weaknesses: { type: [String], default: [] },
    comparisonScore: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default model<ICompetitor>('Competitor', competitorSchema);
