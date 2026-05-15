import { motion } from 'framer-motion';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import GlassPanel from '@reviewsense/ui/src/components/GlassPanel';
import StatCard from '@reviewsense/ui/src/components/StatCard';
import ReviewCard from '@reviewsense/ui/src/components/ReviewCard';

const trendData = [
  { label: 'Mon', value: 38 },
  { label: 'Tue', value: 46 },
  { label: 'Wed', value: 54 },
  { label: 'Thu', value: 65 },
  { label: 'Fri', value: 59 },
  { label: 'Sat', value: 72 },
  { label: 'Sun', value: 80 }
];

const topReviews = [
  {
    reviewer: 'Priya R.',
    source: 'Google Reviews',
    rating: 4.8,
    text: 'Outstanding service, prompt responses and the team fixed my issue quickly.',
    sentiment: 'positive' as const,
    topics: ['service', 'speed']
  },
  {
    reviewer: 'Marco L.',
    source: 'Yelp',
    rating: 2.9,
    text: 'Food was okay but delivery was late and the price felt high for what I received.',
    sentiment: 'negative' as const,
    topics: ['delivery', 'pricing']
  }
];

const DashboardPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Command center</p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Review intelligence primer</h1>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800/90">
          Refresh insights
        </button>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <GlassPanel className="p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <StatCard label="Quarterly reviews" value="4.8K" helpText="Consolidated across review platforms." accent="sky" />
            <StatCard label="Customer sentiment" value="82%" helpText="Positive momentum over the last 7 days." accent="emerald" />
          </div>
          <div className="mt-8 h-[320px] rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-inner shadow-slate-950/20">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Sentiment trend</p>
                <p className="text-xl font-semibold text-white">AI score pulse</p>
              </div>
              <div className="rounded-full bg-slate-900/80 px-4 py-2 text-sm text-slate-300">Live insights</div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 0, right: 0, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="sentimentGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <Tooltip contentStyle={{ background: '#0b1120', border: '1px solid rgba(148,163,184,0.16)', borderRadius: '16px', color: '#fff' }} labelFormatter={() => ''} />
                <Area type="monotone" dataKey="value" stroke="#22c55e" fill="url(#sentimentGradient)" strokeWidth={3} activeDot={{ r: 5 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassPanel>

        <GlassPanel className="space-y-6 p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Health score</p>
              <p className="mt-2 text-4xl font-semibold text-white">91</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 px-4 py-3 text-sm font-semibold text-slate-200">Premium plan</div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-slate-300">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Average reply time</p>
              <p className="mt-3 text-2xl font-semibold text-white">2m 18s</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-slate-300">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Top overall topic</p>
              <p className="mt-3 text-2xl font-semibold text-white">Service quality</p>
            </div>
          </div>
        </GlassPanel>
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        {topReviews.map((review) => (
          <ReviewCard key={review.text} {...review} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
