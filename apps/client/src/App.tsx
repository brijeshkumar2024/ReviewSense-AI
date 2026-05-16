import { Suspense, lazy } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import ProtectedRoute from './routes/ProtectedRoute';

const LandingPage = lazy(() => import('./routes/LandingPage'));
const AuthPage = lazy(() => import('./routes/AuthPage'));
const DashboardPage = lazy(() => import('./routes/DashboardPage'));
const UploadPage = lazy(() => import('./routes/UploadPage'));
const AnalyticsPage = lazy(() => import('./routes/AnalyticsPage'));
const CompetitorPage = lazy(() => import('./routes/CompetitorPage'));
const BillingPage = lazy(() => import('./routes/BillingPage'));

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-bg text-white">
      <Navigation />
      <main className="relative overflow-hidden">
        <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
          <motion.div key={location.pathname} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
            <Suspense fallback={<div className="flex min-h-[calc(100vh-96px)] items-center justify-center text-slate-400">Loading Revora workspace...</div>}>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
                <Route path="/upload" element={<ProtectedRoute><UploadPage /></ProtectedRoute>} />
                <Route path="/analytics" element={<ProtectedRoute><AnalyticsPage /></ProtectedRoute>} />
                <Route path="/competitor" element={<ProtectedRoute><CompetitorPage /></ProtectedRoute>} />
                <Route path="/billing" element={<ProtectedRoute><BillingPage /></ProtectedRoute>} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
