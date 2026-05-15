import { PropsWithChildren } from 'react';
import clsx from 'clsx';

type GlassPanelProps = PropsWithChildren<{
  className?: string;
}>;

const GlassPanel = ({ children, className }: GlassPanelProps) => {
  return (
    <div className={clsx('rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.7)] backdrop-blur-xl', className)}>
      {children}
    </div>
  );
};

export default GlassPanel;
