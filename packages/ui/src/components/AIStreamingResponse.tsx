import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type AIStreamingResponseProps = {
  content: string;
  isComplete?: boolean;
  showThinking?: boolean;
};

const AIStreamingResponse = ({ content, isComplete = false, showThinking = false }: AIStreamingResponseProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < content.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + content[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, content]);

  return (
    <div className="space-y-3">
      {showThinking && (
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }} className="h-2 w-2 rounded-full bg-teal-500" />
          AI is analyzing...
        </div>
      )}
      <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 text-slate-200">
        <p className="leading-7">{displayedText}</p>
        {!isComplete && <motion.span animate={{ opacity: [0.5, 1] }} transition={{ duration: 0.7, repeat: Infinity }} className="ml-1 inline-block h-4 w-0.5 bg-teal-400" />}
      </div>
    </div>
  );
};

export default AIStreamingResponse;
