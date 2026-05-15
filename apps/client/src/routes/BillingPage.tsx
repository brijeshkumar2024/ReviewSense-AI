import GlassPanel from '@reviewsense/ui/src/components/GlassPanel';
import Button from '@reviewsense/ui/src/components/Button';

const BillingPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
      <div className="mb-10 space-y-4">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Plans & billing</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Upgrade to a growth-ready subscription.</h1>
        <p className="max-w-3xl text-slate-300">Unlock competitor benchmarking, unlimited ingestion, PDF exports, and priority email alerts for high-impact review intelligence.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <GlassPanel className="space-y-6 p-8">
          <div className="text-sm uppercase tracking-[0.35em] text-slate-500">Starter</div>
          <div className="text-4xl font-semibold text-white">Free</div>
          <p className="text-slate-400">Essential review analytics, AI reply drafts, and support for up to 20 reviews per month.</p>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>20 review uploads / month</li>
            <li>Core sentiment insights</li>
            <li>Email notifications</li>
          </ul>
          <Button className="w-full">Current plan</Button>
        </GlassPanel>

        <GlassPanel className="space-y-6 p-8 border border-teal-400/20 bg-slate-900/90">
          <div className="inline-flex items-center rounded-full bg-teal-500/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-teal-300">Best for growth</div>
          <div className="text-sm uppercase tracking-[0.35em] text-slate-500">Premium</div>
          <div className="text-4xl font-semibold text-white">$49</div>
          <div className="text-sm text-slate-400">per month billed annually</div>
          <p className="text-slate-300">Unlimited review ingestion, competitor analysis, PDF reporting, and premium alerts.</p>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>Unlimited review uploads</li>
            <li>Competitor benchmarking</li>
            <li>PDF exports + email summaries</li>
          </ul>
          <Button className="w-full">Upgrade now</Button>
        </GlassPanel>

        <GlassPanel className="space-y-6 p-8">
          <div className="text-sm uppercase tracking-[0.35em] text-slate-500">Enterprise</div>
          <div className="text-4xl font-semibold text-white">Custom</div>
          <p className="text-slate-300">For teams who need custom onboarding, premium support, and white-glove setup.</p>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>Advanced usage analytics</li>
            <li>Dedicated account support</li>
            <li>Custom integration help</li>
          </ul>
          <Button className="w-full">Talk to sales</Button>
        </GlassPanel>
      </div>
    </div>
  );
};

export default BillingPage;
