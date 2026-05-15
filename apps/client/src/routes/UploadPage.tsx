import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassPanel from '@reviewsense/ui/src/components/GlassPanel';
import Button from '@reviewsense/ui/src/components/Button';

const UploadPage = () => {
  const [fileName, setFileName] = useState('');

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
      <div className="mb-10 space-y-3">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Review ingestion</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Import customer feedback in seconds.</h1>
        <p className="max-w-2xl text-slate-300">Upload CSV files, paste raw review streams, or add individual entries with AI validation built for local businesses.</p>
      </div>

      <GlassPanel className="p-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div whileHover={{ y: -6 }} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 transition">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Bulk upload</p>
            <div className="mt-8 rounded-[1.5rem] border border-dashed border-slate-700/80 bg-slate-900/80 px-6 py-16 text-center text-slate-400">
              <p className="text-lg font-semibold text-white">Drag & drop CSV or select a file</p>
              <p className="mt-3 text-sm text-slate-500">Use our sample template to onboard review data quickly.</p>
              <label htmlFor="review-upload" className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500 hover:text-white">
                Browse file
              </label>
              <input
                id="review-upload"
                type="file"
                accept=".csv"
                className="mt-6 hidden"
                onChange={(event) => setFileName(event.target.files?.[0]?.name ?? '')}
              />
            </div>
            {fileName ? <p className="mt-4 text-sm text-slate-300">Selected file: {fileName}</p> : null}
          </motion.div>

          <div className="space-y-6">
            <GlassPanel className="space-y-5 p-6">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Review preview</p>
              <p className="text-2xl font-semibold text-white">Instant AI validation & duplicate filtering.</p>
              <p className="text-slate-400">Our engine checks each review for duplicates, sentiment health, and source metadata before ingestion.</p>
            </GlassPanel>
            <Button className="w-full">Start upload</Button>
          </div>
        </div>
      </GlassPanel>
    </div>
  );
};

export default UploadPage;
