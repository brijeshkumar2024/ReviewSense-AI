import React from 'react';

interface GlassPanelProps {
  className?: string;
  children: React.ReactNode;
}

const GlassPanel: React.FC<GlassPanelProps> = ({ className = '', children }) => {
  return (
    <div className={`rounded-[2rem] border border-white/10 bg-slate-950/70 backdrop-blur-[20px] shadow-[0_40px_120px_-70px_rgba(15,23,42,0.7)] ${className}`}>
      {children}
    </div>
  );
};

export default GlassPanel;
