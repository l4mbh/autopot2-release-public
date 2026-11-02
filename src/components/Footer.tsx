import { Link } from 'react-router-dom';
import { DISCORD, asset } from '../site';

export function Footer() {
  return (
    <footer className="border-t border-line bg-raised">
      <div className="mx-auto flex max-w-page flex-col gap-6 px-4 py-10 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 font-bold">
            <img src={asset('icon.png')} alt="" className="h-6 w-6" /> AutoPot
          </div>
          <p className="mt-2 text-sm text-ink3">
            A companion app for Path of Exile. Not affiliated with or endorsed by Grinding Gear Games. Prices from poe.ninja.
          </p>
        </div>
        <nav className="flex gap-10 text-sm" aria-label="Footer">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-ink2">Product</span>
            <Link to="/features" className="text-ink3 hover:text-ink">Features</Link>
            <Link to="/pricing" className="text-ink3 hover:text-ink">Pricing</Link>
            <Link to="/download" className="text-ink3 hover:text-ink">Download</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-ink2">Help</span>
            <Link to="/download#faq" className="text-ink3 hover:text-ink">FAQ</Link>
            <a href={DISCORD} target="_blank" rel="noopener noreferrer" className="text-ink3 hover:text-ink">Discord</a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
