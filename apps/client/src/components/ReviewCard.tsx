import { motion } from 'framer-motion';
import SentimentBadge from './SentimentBadge';

interface ReviewCardProps {
  reviewer: string;
  source: string;
  rating: number;
  text: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  topics: string[];
}

const ReviewCard: React.FC<ReviewCardProps> = ({ reviewer, source, rating, text, sentiment, topics }) => {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 240, damping: 18 }}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.8)]"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{source}</p>
          <p className="mt-2 text-lg font-semibold text-white">{reviewer}</p>
        </div>
        <div className="space-y-2 text-right">
          <SentimentBadge sentiment={sentiment} />
          <div className="rounded-full bg-slate-900/80 px-3 py-1 text-sm font-semibold text-slate-200 shadow-inner shadow-slate-950/30">{rating.toFixed(1)} ★</div>
        </div>
      </div>
      <p className="min-h-[84px] text-slate-300">“{text}”</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {topics.map((topic) => (
          <span key={topic} className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300">
            {topic}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default ReviewCard;
