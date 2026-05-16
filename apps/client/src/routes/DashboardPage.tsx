import { motion } from 'framer-motion';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import GlassPanel from '@reviewsense/ui/src/components/GlassPanel';
import StatCard from '../components/StatCard';
import ReviewCard from '../components/ReviewCard';

const trendData = [
  { label: 'Mon', value: 38 },
  { label: 'Tue', value: 46 },
  { label: 'Wed', value: 54 },
  { label: 'Thu', value: 65 },
  { label: 'Fri', value: 59 },
  { label: 'Sat', value: 72 },
  { label: 'Sun', value: 80 }
];

const complaintCategories = [
  { label: 'Delivery delays', share: '31%', impact: 'High' },
  { label: 'Pricing confusion', share: '24%', impact: 'Medium' },
  { label: 'Order accuracy', share: '18%', impact: 'Medium' }
];

const recommendations = [
  'Reply to all 1-2 star reviews within 2 hours during peak dinner time.',
  'Pin a pricing clarity note on top delivery menu items to reduce confusion complaints.',
  'Escalate repeat delivery issues from the same location to operations daily.'
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div className="mx-auto max-w-7xl px-6 py-10 sm:px-8" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div variants={itemVariants} className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Command center</p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Revora performance overview</h1>
        </div>
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800/90">
          Refresh insights
        </motion.button>
      </motion.div>

      <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <motion.div variants={itemVariants}>
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
                <div className="rounded-full bg-slate-900/80 px-4 py-2 text-sm text-slate-300">Updated 5m ago</div>
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
        </motion.div>

        <motion.div variants={itemVariants}>
          <GlassPanel className="space-y-6 p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Business health score</p>
                <p className="mt-2 text-4xl font-semibold text-white">91</p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} className="rounded-3xl bg-gradient-to-r from-teal-500/20 to-violet-500/20 px-4 py-3 text-sm font-semibold text-slate-200 ring-1 ring-teal-500/30">Premium plan</motion.div>
            </div>
            <div className="grid gap-4">
              <motion.div whileHover={{ y: -4, borderColor: 'rgba(88, 169, 244, 0.3)' }} className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-slate-300 transition">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Average reply time</p>
                <p className="mt-3 text-2xl font-semibold text-white">2m 18s</p>
              </motion.div>
              <motion.div whileHover={{ y: -4, borderColor: 'rgba(88, 169, 244, 0.3)' }} className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-slate-300 transition">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Top overall topic</p>
                <p className="mt-3 text-2xl font-semibold text-white">Service quality</p>
              </motion.div>
            </div>
          </GlassPanel>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="mt-10 grid gap-6 xl:grid-cols-2">
        {topReviews.map((review, idx) => (
          <motion.div key={review.text} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.15 }}>
            <ReviewCard {...review} />
          </motion.div>
        ))}
      </motion.div>

      <motion.section variants={itemVariants} className="mt-10 grid gap-6 xl:grid-cols-2">
        <GlassPanel className="p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Top complaint categories</p>
          <div className="mt-5 space-y-4">
            {complaintCategories.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-white">{item.label}</p>
                  <p className="text-sm text-slate-300">{item.share}</p>
                </div>
                <p className="mt-2 text-sm text-slate-400">Operational impact: {item.impact}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
        <GlassPanel className="p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">AI recommendations</p>
          <div className="mt-5 space-y-3">
            {recommendations.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </GlassPanel>
      </motion.section>
    </motion.div>
  );
};

export default DashboardPage;
