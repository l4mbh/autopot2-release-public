import { Link } from 'react-router-dom';
import { ArrowRight, Gamepad2 } from 'lucide-react';
import { asset, featureGroups } from '../site';
import { InGamePreview, Screenshot, TierBadge } from '../components/ui';

export function Features() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-page px-4 pb-10 pt-16 sm:px-6">
          <p className="eyebrow mb-3">Features</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything AutoPot does</h1>
          <p className="mt-3 max-w-2xl text-ink2">
            Every feature lives on its own page in the app and can be switched on or off on its own.
            Items marked <TierBadge tier="free" /> work without a key; <TierBadge tier="pro" /> needs a PRO license.
          </p>
        </div>
        {/* Mục lục — dính đầu trang khi cuộn */}
        <nav className="sticky top-16 z-40 border-t border-line bg-bg/90 backdrop-blur" aria-label="Feature sections">
          <div className="mx-auto flex max-w-page gap-2 overflow-x-auto px-4 py-3 sm:px-6">
            {featureGroups.map(g => (
              <a key={g.id} href={`#${g.id}`} className="flex flex-none items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-ink2 hover:text-ink">
                <g.icon className="h-4 w-4 text-accent" aria-hidden />{g.title}
              </a>
            ))}
          </div>
        </nav>
      </section>

      {featureGroups.map((g, idx) => (
        <section key={g.id} id={g.id} className={`scroll-mt-32 border-b border-line ${idx % 2 ? 'bg-raised' : ''}`}>
          <div className="mx-auto max-w-page px-4 py-16 sm:px-6">
            <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent"><g.icon className="h-6 w-6" aria-hidden /></span>
                  <div>
                    <h2 className="text-2xl font-bold">{g.title}</h2>
                    <p className="flex items-center gap-1.5 text-xs text-ink3"><Gamepad2 className="h-3.5 w-3.5" aria-hidden />{g.games}</p>
                  </div>
                </div>
                <p className="mt-5 text-ink2">{g.summary}</p>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {g.items.map(i => (
                    <li key={i.title} className="card p-4">
                      <div className="flex items-start justify-between gap-3">
                        <span className="flex items-center gap-2 font-semibold"><i.icon className="h-4 w-4 flex-none text-ink3" aria-hidden />{i.title}</span>
                        <TierBadge tier={i.tier} />
                      </div>
                      <p className="mt-2 text-sm text-ink2">{i.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6 lg:sticky lg:top-36">
                {g.id === 'prices' && <InGamePreview />}
                <Screenshot src={asset(g.shot)} alt={`AutoPot ${g.title} page`} />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-page px-4 py-16 sm:px-6">
        <div className="card flex flex-col items-start gap-5 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold">Ready to try it?</h2>
            <p className="mt-1 text-ink2">Download AutoPot for free. Unlock the PRO features whenever you like.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/download" className="btn-primary">Download</Link>
            <Link to="/pricing" className="btn-ghost">Pricing<ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
