import { motion } from 'framer-motion';
import GlassPanel from '@reviewsense/ui/src/components/GlassPanel';

const topicCoverage = [
  { topic: 'Service', coverage: '84%' },
  { topic: 'Delivery', coverage: '69%' },
  { topic: 'Pricing', coverage: '73%' },
  { topic: 'Ambience', coverage: '78%' }
];

const AnalyticsPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
      <div className="mb-10 space-y-4">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Performance insights</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Understand why customers feel the way they do.</h1>
        <p className="max-w-3xl text-slate-300">Watch sentiment shifts, unmask recurring complaints, and surface AI recommendations that let your team act faster.</p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_0.7fr]">
        <GlassPanel className="p-8">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Trending topics</p>
              <p className="mt-2 text-3xl font-semibold text-white">Food quality up 18%</p>
            </div>
            <div className="rounded-full bg-slate-900/80 px-4 py-2 text-sm text-slate-300">Updated daily</div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {topicCoverage.map((item) => (
              <motion.div whileHover={{ scale: 1.01 }} key={item.topic} className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5">
                <p className="text-sm uppercase tracking-[0.32em] text-slate-500">{item.topic}</p>
                <p className="mt-4 text-3xl font-semibold text-white">{item.coverage}</p>
                <p className="mt-3 text-sm text-slate-400">Share of reviews mentioning this topic.</p>
              </motion.div>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel className="p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">AI recommendation</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Prioritize recovery opportunities.</h2>
          <p className="mt-4 text-slate-300">Focus on the highest-impact complaints over the next 7 days to improve ratings and reduce churn.</p>
          <div className="mt-8 space-y-4">
            {['Flag price concerns in delivery reviews', 'Respond to negative dining experience quickly', 'Promote positive staff recognition'].
              map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-4 text-slate-300 shadow-sm shadow-slate-950/10">
                  {item}
                </div>
              ))}
          </div>
        </GlassPanel>
      </div>
    </div>
  );
};

export default AnalyticsPage;
