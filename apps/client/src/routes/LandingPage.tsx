import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '@reviewsense/ui/src/components/Button';
import GlassPanel from '@reviewsense/ui/src/components/GlassPanel';
import StatCard from '../components/StatCard';

const features = [
  {
    title: 'Adaptive sentiment intelligence',
    description: 'Detect hidden emotions, urgency, and emerging issues across review streams in real time.',
    accent: 'sky'
  },
  {
    title: 'Reply composer',
    description: 'Generate polished owner responses with tone presets, editable drafts, and copy-ready replies.',
    accent: 'emerald'
  },
  {
    title: 'Competitor radar',
    description: 'Benchmark your service, pricing, and sentiment against rivals to stay competitive.',
    accent: 'violet'
  }
];

const liveReviews = [
  { text: 'Amazing service experience...', sentiment: 'positive', platform: 'Google' },
  { text: 'Waited 45 mins for food', sentiment: 'negative', platform: 'Yelp' },
  { text: 'Staff was incredibly helpful!', sentiment: 'positive', platform: 'Facebook' }
];

const LandingPage = () => {
  return (
    <main className="relative overflow-hidden px-6 pb-20 pt-10 sm:px-10 lg:px-14">
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-slate-900/80 via-slate-950/30 to-transparent blur-3xl" />
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <section className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-700/70 bg-slate-950/70 px-4 py-2 text-sm text-slate-200 shadow-lg shadow-slate-950/20">
              <span className="h-2.5 w-2.5 rounded-full bg-teal-400" /> Trusted by growing consumer brands
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Your reviews already contain business intelligence.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Revora AI turns every customer review into a growth signal with sentiment insights, complaint trends, smart replies, and competitor benchmarking in one command center.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/auth"><Button>Start your free tier</Button></Link>
              <a href="#features" className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Explore features</a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <StatCard label="Review volume" value="12K+" helpText="Processed from 6 major platforms." accent="sky" />
              <StatCard label="Sentiment accuracy" value="91%" helpText="AI-trained classification and confidence scoring." accent="emerald" />
              <StatCard label="Response speed" value="< 2 min" helpText="AI reply suggestions save teams time." accent="violet" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative flex items-center justify-center">
            <div className="pointer-events-none absolute inset-x-0 top-20 mx-auto h-72 w-72 rounded-full bg-gradient-to-br from-cyan-400/20 via-violet-500/10 to-transparent blur-3xl" />
            <GlassPanel className="relative w-full overflow-hidden p-8 sm:p-10">
              <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">AI workflow</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Sentiment command center</p>
                </div>
                <div className="rounded-full bg-teal-500/20 px-4 py-2 text-xs uppercase tracking-[0.32em] text-teal-300 ring-1 ring-teal-500/30">● Live</div>
              </div>
              <div className="max-h-64 overflow-hidden rounded-[1.5rem]">
                <div className="space-y-3">
                  {liveReviews.map((review, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.2 }} className="rounded-3xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur">
                      <p className="text-sm text-slate-300">{review.text}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <div className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${review.sentiment === 'positive' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'}`}>
                          {review.sentiment === 'positive' ? '😊 Positive' : '😞 Negative'}
                        </div>
                        <span className="text-xs text-slate-500">{review.platform}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </section>

        <section id="features" className="grid gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <motion.article key={feature.title} whileHover={{ y: -8 }} className="group rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/30 transition duration-300 hover:border-teal-400/30">
              <div className="mb-4 h-12 w-12 rounded-3xl bg-gradient-to-br from-sky-500 to-violet-500 p-3 text-white shadow-lg shadow-sky-500/20"></div>
              <h2 className="text-xl font-semibold text-white">{feature.title}</h2>
              <p className="mt-4 text-slate-400">{feature.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                Learn more ↗
              </div>
            </motion.article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default LandingPage;
