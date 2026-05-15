import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error;
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    console.error('Caught error:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center min-h-screen bg-slate-950">
            <div className="text-center space-y-4">
              <p className="text-slate-400">Something went wrong. Please refresh the page.</p>
              <button onClick={() => window.location.reload()} className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition">
                Reload
              </button>
            </div>
          </motion.div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
