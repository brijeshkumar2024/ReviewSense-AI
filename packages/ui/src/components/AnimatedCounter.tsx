import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type AnimatedCounterProps = {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
};

const AnimatedCounter = ({ value, duration = 2, suffix = '', prefix = '' }: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      setDisplayValue(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return (
    <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      {prefix}
      {displayValue}
      {suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
