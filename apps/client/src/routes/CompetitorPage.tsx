import { motion } from 'framer-motion';
import GlassPanel from '@reviewsense/ui/src/components/GlassPanel';
import Button from '@reviewsense/ui/src/components/Button';

const comparisonData = [
  { metric: 'Service', you: 86, competitor: 79 },
  { metric: 'Pricing', you: 71, competitor: 83 },
  { metric: 'Speed', you: 90, competitor: 75 }
];

const CompetitorPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
      <div className="mb-10 space-y-4">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Competitor insights</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Know where you outrank rivals.</h1>
        <p className="max-w-3xl text-slate-300">Upload competitor review streams and get AI-backed strengths, weaknesses, and comparative recommendations.</p>
      </div>

      <GlassPanel className="p-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Scorecard</p>
              <div className="mt-6 space-y-4">
                {comparisonData.map((item) => (
                  <div key={item.metric} className="grid grid-cols-3 items-center gap-4 rounded-3xl bg-slate-900/80 px-4 py-4">
                    <div className="text-sm uppercase tracking-[0.3em] text-slate-500">{item.metric}</div>
                    <div className="text-right text-2xl font-semibold text-white">{item.you}</div>
                    <div className="text-right text-sm text-slate-400">Competitor {item.competitor}</div>
                  </div>
                ))}
              </div>
            </div>
            <Button className="w-full">Upload competitor reviews</Button>
          </div>
          <motion.div whileHover={{ y: -4 }} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-7">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">AI verdict</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">You lead in service, but pricing feels premium.</h2>
            <p className="mt-4 text-slate-300">Use competitor intelligence to optimize menu positioning, promote fast support, and reduce price friction.</p>
            <div className="mt-8 space-y-3">
              <div className="rounded-3xl bg-slate-900/80 p-4 text-slate-200">Strength: faster response times and staff praise.</div>
              <div className="rounded-3xl bg-slate-900/80 p-4 text-slate-200">Weakness: pricing mentions are 15% higher this week.</div>
            </div>
          </motion.div>
        </div>
      </GlassPanel>
    </div>
  );
};

export default CompetitorPage;
