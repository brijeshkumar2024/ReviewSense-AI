import React from 'react';

const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => {
  return <div className={`rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-900/5 backdrop-blur-xl ${className}`}>{children}</div>;
};

export default Card;
