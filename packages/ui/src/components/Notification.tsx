import { motion, AnimatePresence } from 'framer-motion';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

type Notification = {
  id: string;
  message: string;
  type: NotificationType;
  duration?: number;
};

type NotificationProps = {
  notifications: Notification[];
  onRemove: (id: string) => void;
};

const Notification = ({ notifications, onRemove }: NotificationProps) => {
  const typeStyles: Record<NotificationType, string> = {
    success: 'bg-emerald-500/20 border-emerald-500/30 text-emerald-200',
    error: 'bg-rose-500/20 border-rose-500/30 text-rose-200',
    info: 'bg-sky-500/20 border-sky-500/30 text-sky-200',
    warning: 'bg-amber-500/20 border-amber-500/30 text-amber-200'
  };

  const typeIcons: Record<NotificationType, string> = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
    warning: '⚠'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {notifications.map((notif) => (
          <motion.div
            key={notif.id}
            initial={{ opacity: 0, y: 20, x: 100 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -20, x: 100 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`rounded-2xl border px-5 py-4 flex items-center gap-3 pointer-events-auto ${typeStyles[notif.type]} backdrop-blur-xl shadow-lg`}
          >
            <span className="font-bold text-lg">{typeIcons[notif.type]}</span>
            <p className="text-sm font-medium">{notif.message}</p>
            <button onClick={() => onRemove(notif.id)} className="ml-2 text-lg opacity-60 hover:opacity-100">
              ✕
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Notification;
