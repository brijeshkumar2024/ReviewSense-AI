import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '@reviewsense/ui/src/components/Button';
import Input from '@reviewsense/ui/src/components/Input';

const AuthPage = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');

  return (
    <div className="mx-auto flex min-h-screen max-w-4xl items-center px-6 py-14 sm:px-10">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="w-full rounded-[2.5rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_40px_140px_-60px_rgba(15,23,42,0.8)] sm:p-12">
        <div className="mb-10 grid gap-6 sm:grid-cols-[1fr_0.8fr] sm:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Account access</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">{mode === 'login' ? 'Secure sign in' : 'Create your ReviewSense workspace'}</h1>
          </div>
          <button className="self-end text-sm font-semibold text-slate-300 transition hover:text-white" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
            {mode === 'login' ? 'Switch to Register' : 'Switch to Login'}
          </button>
        </div>

        <form className="space-y-6">
          {mode === 'register' && <Input label="Full name" name="name" placeholder="Sofia Alvarez" type="text" />}
          <Input label="Business email" name="email" placeholder="team@reviewsense.ai" type="email" />
          <Input label="Password" name="password" placeholder="Enter a secure password" type="password" />
          <Button type="submit" className="w-full">{mode === 'login' ? 'Continue to dashboard' : 'Create account'}</Button>
        </form>

        <div className="mt-8 rounded-[2rem] bg-slate-900/80 px-6 py-5 text-sm text-slate-300">
          <p className="font-semibold text-white">Why ReviewSense?</p>
          <p className="mt-3 leading-7">AI analysis, competitor benchmarking, and reply automation built for local brands that want to turn feedback into faster business decisions.</p>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Back to <Link to="/" className="text-slate-200 underline decoration-sky-500/30 hover:text-white">landing page</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default AuthPage;
