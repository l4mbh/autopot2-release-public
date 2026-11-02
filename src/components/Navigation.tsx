import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Download, Menu, MessageCircle, X } from 'lucide-react';
import { DISCORD, asset } from '../site';

const links = [
  { to: '/features', label: 'Features' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/download', label: 'Download' },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]); // đổi trang → đóng menu điện thoại

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive ? 'bg-surface2 text-ink' : 'text-ink2 hover:text-ink'}`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between px-4 sm:px-6" aria-label="Main">
        <Link to="/" className="flex items-center gap-2.5 font-bold" aria-label="AutoPot home">
          <img src={asset('icon.png')} alt="" className="h-8 w-8" />
          <span className="text-lg tracking-tight">AutoPot</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(l => <NavLink key={l.to} to={l.to} className={linkClass}>{l.label}</NavLink>)}
          <a href={DISCORD} target="_blank" rel="noopener noreferrer" className="rounded-md px-3 py-2 text-sm font-medium text-ink2 hover:text-ink">Discord</a>
          <Link to="/download" className="btn-primary ml-2 px-4 py-2"><Download className="h-4 w-4" aria-hidden />Download</Link>
        </div>

        <button type="button" className="rounded-md p-2 text-ink2 hover:bg-surface md:hidden" onClick={() => setOpen(o => !o)}
          aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map(l => <NavLink key={l.to} to={l.to} className={linkClass}>{l.label}</NavLink>)}
            <a href={DISCORD} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-ink2">
              <MessageCircle className="h-4 w-4" aria-hidden /> Discord
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
