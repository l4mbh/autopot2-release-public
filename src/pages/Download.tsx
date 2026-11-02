import { AlertCircle, Download as DownloadIcon, ExternalLink, Loader2, MonitorCheck, ShieldCheck, RefreshCw } from 'lucide-react';
import { DISCORD } from '../site';
import { useLatestRelease } from '../release';

const requirements = [
  { icon: MonitorCheck, title: 'Windows 10 / 11, 64-bit', desc: 'Microsoft Edge WebView2 is required — it is already installed on almost every PC; AutoPot opens the download page if not.' },
  { icon: ShieldCheck, title: 'Run as administrator', desc: 'AutoPot needs admin rights to read the game window and press keys for you.' },
  { icon: RefreshCw, title: 'Always up to date', desc: 'When a new version is out, AutoPot asks you to update and installs it in one click.' },
];

const steps = [
  'Download the zip file above.',
  'Extract it to a folder you like, for example C:\\Games\\AutoPot. Do not run it from inside the zip.',
  'Right-click AutoPot.exe → Run as administrator.',
  'Activate a PRO key or choose Continue with Free.',
  'Pick your game (Path of Exile 1 or 2) in Settings, then start the game. AutoPot connects by itself.',
];

const faq = [
  { q: 'Does AutoPot change game files?', a: 'No. It reads values from the running game and presses your flask keys, the same keys you would press. Nothing is installed into the game.' },
  { q: 'Why does it need administrator rights?', a: 'Path of Exile runs with protections that block normal apps from reading its window and sending keys. Admin rights are the standard way around that.' },
  { q: 'Which game does each feature support?', a: 'Auto Pot works in Path of Exile 1 and 2. Radar, Prices and Cure ailments currently support Path of Exile 1.' },
  { q: 'My antivirus warns about AutoPot. Is it safe?', a: 'Tools that read another program’s memory are often flagged by heuristics. Download only from this page or our GitHub releases, and ask on Discord if you are unsure.' },
  { q: 'The game updated and something stopped working.', a: 'Game patches can move the data AutoPot reads. We publish an update quickly — AutoPot will prompt you to install it. Report problems on Discord.' },
];

const formatSize = (bytes: number) => `${(bytes / 1024 / 1024).toFixed(0)} MB`;
const formatDate = (iso: string) => new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

/** Changelog của release (markdown đơn giản: tiêu đề ##/###, gạch đầu dòng) → React, không dùng innerHTML. */
function Changelog({ body }: { body: string }) {
  const lines = body.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  return (
    <div className="space-y-1.5 text-sm">
      {lines.map((line, i) => {
        if (/^##\s/.test(line)) return null; // "## Version x" — đã hiện ở tiêu đề thẻ
        if (/^###\s/.test(line)) return <h4 key={i} className="pt-3 text-xs font-semibold uppercase tracking-wider text-accent">{line.replace(/^###\s*/, '')}</h4>;
        if (/^[-*]\s/.test(line)) return <p key={i} className="flex gap-2 text-ink2"><span className="text-ink3" aria-hidden>•</span>{line.replace(/^[-*]\s*/, '')}</p>;
        return <p key={i} className="text-ink2">{line}</p>;
      })}
    </div>
  );
}

export function Download() {
  const { release, error } = useLatestRelease(true);
  const zip = release?.assets.find(a => a.name.endsWith('.zip')) ?? release?.assets[0];

  return (
    <>
      <section className="mx-auto max-w-page px-4 pb-12 pt-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">Download</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Get AutoPot</h1>
          <p className="mt-3 text-ink2">Free to download. One zip, no installer.</p>
        </div>

        <div className="card mx-auto mt-10 max-w-2xl p-6 sm:p-8">
          {!release && !error && (
            <div className="flex items-center justify-center gap-3 py-8 text-ink2"><Loader2 className="h-5 w-5 animate-spin" aria-hidden />Loading the latest version…</div>
          )}
          {error && (
            <div className="flex items-start gap-3 rounded-xl bg-life/10 p-4 text-sm">
              <AlertCircle className="mt-0.5 h-5 w-5 flex-none text-life" aria-hidden />
              <div>
                <p className="font-semibold">Couldn’t load the latest version</p>
                <p className="mt-1 text-ink2">GitHub didn’t answer ({error}). Try again in a minute, or download straight from the releases page.</p>
                <a href="https://github.com/l4mbh/autopot2-release-public/releases/latest" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 font-medium text-accent">
                  Open GitHub releases <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>
          )}
          {release && (
            <>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-2xl font-bold">AutoPot {release.tag_name}</p>
                  <p className="mt-1 text-sm text-ink3">Released {formatDate(release.published_at)}{zip ? ` · ${formatSize(zip.size)}` : ''}</p>
                </div>
                {zip && (
                  <a href={zip.browser_download_url} className="btn-primary px-6 py-3 text-base">
                    <DownloadIcon className="h-5 w-5" aria-hidden />Download
                  </a>
                )}
              </div>
              <details className="group mt-6 border-t border-line pt-5">
                <summary className="cursor-pointer list-none text-sm font-semibold text-ink2 hover:text-ink">
                  <span className="group-open:hidden">Show what’s new ▸</span><span className="hidden group-open:inline">Hide what’s new ▾</span>
                </summary>
                <div className="mt-3"><Changelog body={release.body} /></div>
              </details>
            </>
          )}
        </div>
      </section>

      <section className="border-y border-line bg-raised">
        <div className="mx-auto grid max-w-page gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold">Before you start</h2>
            <ul className="mt-6 space-y-5">
              {requirements.map(r => (
                <li key={r.title} className="flex gap-4">
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-accent/10 text-accent"><r.icon className="h-5 w-5" aria-hidden /></span>
                  <div><p className="font-semibold">{r.title}</p><p className="mt-0.5 text-sm text-ink2">{r.desc}</p></div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold">Install in 5 steps</h2>
            <ol className="mt-6 space-y-4">
              {steps.map((s, i) => (
                <li key={s} className="flex gap-4">
                  <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-surface2 text-sm font-semibold text-accent tabular">{i + 1}</span>
                  <p className="pt-0.5 text-sm text-ink2">{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-4 py-16 sm:px-6">
        <h2 className="text-xl font-bold">Common questions</h2>
        <div className="mt-6 divide-y divide-line rounded-2xl border border-line bg-surface">
          {faq.map(f => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {f.q}<span className="text-ink3 transition-transform group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="mt-3 text-sm text-ink2">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink3">
          Still stuck? Ask on <a href={DISCORD} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">Discord</a>.
        </p>
      </section>
    </>
  );
}
