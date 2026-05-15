import { motion } from 'framer-motion';

type LoadingSkeletonProps = {
  height?: string;
  width?: string;
  className?: string;
  animated?: boolean;
};

const LoadingSkeleton = ({ height = 'h-4', width = 'w-full', className = '', animated = true }: LoadingSkeletonProps) => {
  return (
    <motion.div
      className={`rounded-lg bg-slate-800/50 ${height} ${width} ${className}`}
      animate={animated ? { opacity: [0.5, 0.8, 0.5] } : {}}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  );
};

export default LoadingSkeleton;
