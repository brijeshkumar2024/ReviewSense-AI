import React from 'react';
import { motion } from 'framer-motion';

interface SentimentBadgeProps {
  sentiment: 'positive' | 'neutral' | 'negative';
}

const sentimentMap = {
  positive: { label: 'Positive', color: 'from-emerald-400 to-teal-500', ring: 'ring-emerald-500/30' },
  neutral: { label: 'Neutral', color: 'from-slate-500 to-slate-400', ring: 'ring-slate-500/20' },
  negative: { label: 'Negative', color: 'from-rose-500 to-pink-500', ring: 'ring-rose-500/25' }
};

const SentimentBadge: React.FC<SentimentBadgeProps> = ({ sentiment }) => {
  const config = sentimentMap[sentiment];

  return (
    <motion.span
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${config.color} px-3 py-1 text-xs font-semibold text-slate-950 shadow-lg shadow-slate-950/20 ${config.ring}`}
    >
      {config.label}
    </motion.span>
  );
};

export default SentimentBadge;
