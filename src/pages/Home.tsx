import { Link } from 'react-router-dom';
import { ArrowRight, Check, Download, MessageCircle } from 'lucide-react';
import { DISCORD, asset, featureGroups } from '../site';
import { InGamePreview, Screenshot, SectionHead, TierBadge } from '../components/ui';
import { useLatestRelease } from '../release';

const steps = [
  { title: 'Download & extract', desc: 'Get the zip from the Download page and extract it to any folder.' },
  { title: 'Run AutoPot', desc: 'Start AutoPot.exe as administrator, pick your game and language. Keep using it free or enter a PRO key.' },
  { title: 'Play', desc: 'Set your flask triggers once. AutoPot finds the game by itself and works while you play.' },
];

export function Home() {
  const release = useLatestRelease();
  const pillars = featureGroups.filter(g => g.id !== 'comfort');

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(74,222,128,0.10),transparent_60%)]" aria-hidden />
        <div className="relative mx-auto grid max-w-page items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:py-24">
          <div>
            <p className="eyebrow mb-4">For Path of Exile 1 & 2</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Flasks, map and loot prices — <span className="text-accent">handled.</span>
            </h1>
            <p className="mt-5 text-lg text-ink2">
              AutoPot uses your flasks at the right moment, shows monsters on the large map and puts poe.ninja prices on your items — all from a small app running next to the game.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/download" className="btn-primary px-6 py-3 text-base"><Download className="h-5 w-5" aria-hidden />Download free</Link>
              <Link to="/features" className="btn-ghost px-6 py-3 text-base">See features<ArrowRight className="h-4 w-4" aria-hidden /></Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink3">
              {['Free to start', 'Windows 10 / 11', 'Updates itself', release ? `Latest ${release.tag_name}` : null].filter(Boolean).map(t => (
                <li key={t} className="flex items-center gap-1.5"><Check className="h-4 w-4 text-accent" aria-hidden />{t}</li>
              ))}
            </ul>
          </div>
          <Screenshot src={asset('screenshots/app-autopot.png')} alt="AutoPot app: Life, Mana and ES recovery with drag-to-set triggers, flask belt and cure ailments" />
        </div>
      </section>

      {/* Ba trụ tính năng */}
      <section className="mx-auto max-w-page px-4 py-20 sm:px-6">
        <SectionHead eyebrow="What it does" title="Three tools, one app" desc="Turn on only what you need. Each one has its own page in the app with clear settings." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pillars.map(g => (
            <Link key={g.id} to={`/features#${g.id}`} className="card group flex flex-col p-6 transition-colors hover:border-accent/40">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent"><g.icon className="h-6 w-6" aria-hidden /></span>
                <span className="text-xs text-ink3">{g.games}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{g.title}</h3>
              <p className="mt-1 text-sm text-ink2">{g.tagline}</p>
              <ul className="mt-4 flex-1 space-y-2.5">
                {g.items.slice(0, 3).map(i => (
                  <li key={i.title} className="flex items-start justify-between gap-3 text-sm">
                    <span className="text-ink2">{i.title}</span><TierBadge tier={i.tier} />
                  </li>
                ))}
              </ul>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Giá trong game */}
      <section className="border-y border-line bg-raised">
        <div className="mx-auto grid max-w-page items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHead eyebrow="New in 0.9" title="Prices right where you look"
              desc="No more alt-tabbing to a trade site. Hover an item, open your stash or walk past a drop and the price is already on screen — colored by value so the good stuff stands out." />
            <ul className="mt-6 space-y-3 text-sm text-ink2">
              {['Uniques matched by name and 5L / 6L links', 'Gems by level, quality and corrupted', 'Stacks priced as a total', 'Press F7 to look up any item by name'].map(t => (
                <li key={t} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 flex-none text-accent" aria-hidden />{t}</li>
              ))}
            </ul>
            <Link to="/features#prices" className="btn-ghost mt-8">All price features<ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </div>
          <InGamePreview />
        </div>
      </section>

      {/* Bắt đầu */}
      <section className="mx-auto max-w-page px-4 py-20 sm:px-6">
        <SectionHead eyebrow="Get started" title="Up and running in a minute" />
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="card p-6">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-surface2 text-sm font-semibold text-accent tabular">{i + 1}</span>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-ink2">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Kêu gọi */}
      <section className="mx-auto max-w-page px-4 pb-24 sm:px-6">
        <div className="card flex flex-col items-start gap-6 p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Start free, upgrade when you want more</h2>
            <p className="mt-2 text-ink2">Auto Pot is free. Radar, Prices and the advanced flask tools come with PRO.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/pricing" className="btn-primary">Compare plans</Link>
            <a href={DISCORD} target="_blank" rel="noopener noreferrer" className="btn-ghost"><MessageCircle className="h-4 w-4" aria-hidden />Join Discord</a>
          </div>
        </div>
      </section>
    </>
  );
}
