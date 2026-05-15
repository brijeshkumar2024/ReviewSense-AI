import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  return (
    <label className="block text-sm font-medium text-slate-200">
      {label}
      <input className={`mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white shadow-inner shadow-slate-900/20 focus:border-blue-400 focus:ring-blue-400 ${className}`} {...props} />
    </label>
  );
};

export default Input;
