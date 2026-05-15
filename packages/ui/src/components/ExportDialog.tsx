import { motion } from 'framer-motion';
import Button from './Button';

type ExportDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onExport: (format: 'pdf' | 'csv') => void;
  title?: string;
};

const ExportDialog = ({ isOpen, onClose, onExport, title = 'Export Report' }: ExportDialogProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="rounded-[2rem] border border-white/10 bg-slate-950/95 p-8 shadow-2xl shadow-slate-950/80 sm:w-full sm:max-w-md"
      >
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-slate-400">Select format to download your review analytics.</p>
        <div className="mt-8 grid gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={() => onExport('pdf')}
            className="rounded-2xl border border-white/10 bg-slate-900/80 px-6 py-4 text-left text-white transition hover:border-teal-400/30 hover:bg-slate-800/80"
          >
            <p className="font-semibold">PDF Report</p>
            <p className="text-sm text-slate-400">Full analytics with charts and insights.</p>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={() => onExport('csv')}
            className="rounded-2xl border border-white/10 bg-slate-900/80 px-6 py-4 text-left text-white transition hover:border-violet-400/30 hover:bg-slate-800/80"
          >
            <p className="font-semibold">CSV Export</p>
            <p className="text-sm text-slate-400">Raw data for spreadsheet analysis.</p>
          </motion.button>
        </div>
        <div className="mt-6 flex gap-3">
          <Button variant="ghost" onClick={onClose} className="flex-1">
            Cancel
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExportDialog;
