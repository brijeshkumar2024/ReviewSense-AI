import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  helpText?: string;
  accent?: 'sky' | 'emerald' | 'violet' | 'amber';
}

const accentMap: Record<NonNullable<StatCardProps['accent']>, string> = {
  sky: 'from-sky-500 to-blue-500',
  emerald: 'from-emerald-400 to-teal-500',
  violet: 'from-violet-500 to-fuchsia-500',
  amber: 'from-amber-400 to-orange-500'
};

const StatCard: React.FC<StatCardProps> = ({ label, value, helpText, accent = 'sky' }) => {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/30 transition duration-300 hover:-translate-y-1 hover:border-sky-400/20">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400/60 to-violet-500/60 opacity-0 transition duration-500 group-hover:opacity-100" />
      <p className="text-sm uppercase tracking-[0.32em] text-slate-500">{label}</p>
      <p className="mt-4 text-4xl font-semibold text-white">{value}</p>
      {helpText ? <p className="mt-3 text-sm leading-6 text-slate-400">{helpText}</p> : null}
    </div>
  );
};

export default StatCard;
