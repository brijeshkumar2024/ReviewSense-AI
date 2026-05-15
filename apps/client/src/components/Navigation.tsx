import { Link } from 'react-router-dom';
import Button from '@reviewsense/ui/src/components/Button';

const links = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Analytics', href: '/analytics' },
  { label: 'Reviews', href: '/upload' },
  { label: 'Competitors', href: '/competitor' },
  { label: 'Billing', href: '/billing' }
];

const Navigation = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-white">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-violet-500 text-sm shadow-lg shadow-sky-500/20">RS</span>
          ReviewSense AI
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} to={link.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="secondary" className="hidden md:inline-flex">Sign in</Button>
          <Button>Start free</Button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
