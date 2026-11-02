import { Link } from 'react-router-dom';
import { Check, KeyRound, MessageCircle, Minus } from 'lucide-react';
import { DISCORD, featureGroups, plans } from '../site';
import { SectionHead, TierBadge } from '../components/ui';

const proPerks = ['Everything in Free', 'Radar with campaign guide', 'In-game Prices from poe.ninja', 'Utility flasks & cure ailments', 'Profiles & gamepad support'];

export function Pricing() {
  return (
    <>
      <section className="mx-auto max-w-page px-4 pb-12 pt-16 sm:px-6">
        <SectionHead center eyebrow="Pricing" title="Free to start. PRO when you want more."
          desc="Auto Pot is free for everyone. A PRO key unlocks Radar, Prices and the advanced flask tools — same app, nothing extra to install." />

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {/* Free */}
          <div className="card flex flex-col p-6">
            <h3 className="text-lg font-semibold">Free</h3>
            <p className="mt-1 text-sm text-ink3">Forever</p>
            <p className="mt-5 text-4xl font-bold tabular">$0</p>
            <ul className="mt-6 flex-1 space-y-2.5 text-sm text-ink2">
              {['Life, Mana & ES auto pot', 'Reads your flask belt', 'System tray & show/hide key', 'Automatic updates'].map(t => (
                <li key={t} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 flex-none text-accent" aria-hidden />{t}</li>
              ))}
            </ul>
            <Link to="/download" className="btn-ghost mt-8 w-full">Download</Link>
          </div>

          {/* Gói PRO */}
          {plans.map(p => (
            <div key={p.name} className={`card relative flex flex-col p-6 ${p.popular ? 'border-pro/60 ring-1 ring-pro/40' : ''}`}>
              {p.note && <span className="absolute -top-3 left-6 rounded-full bg-pro px-3 py-0.5 text-xs font-semibold text-[#1e0b2e]">{p.note}</span>}
              <h3 className="flex items-center gap-2 text-lg font-semibold">PRO <span className="text-sm font-normal text-ink3">· {p.name}</span></h3>
              <p className="mt-1 text-sm text-ink3">${(p.price / p.days * 30).toFixed(2)} per 30 days</p>
              <p className="mt-5 text-4xl font-bold tabular">${p.price}</p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm text-ink2">
                {proPerks.map(t => <li key={t} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 flex-none text-pro" aria-hidden />{t}</li>)}
              </ul>
              <a href={DISCORD} target="_blank" rel="noopener noreferrer" className={`${p.popular ? 'btn bg-pro text-[#1e0b2e] hover:bg-pro/90' : 'btn-ghost'} mt-8 w-full`}>
                Get {p.name}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Cách mua + kích hoạt */}
      <section className="mx-auto max-w-page px-4 pb-16 sm:px-6">
        <div className="card grid gap-6 p-6 sm:p-8 md:grid-cols-3">
          {[
            { icon: MessageCircle, title: '1. Get a key on Discord', desc: 'Join our Discord and open a ticket for the plan you want. You receive a license key.' },
            { icon: KeyRound, title: '2. Enter it in the app', desc: 'In AutoPot go to Settings → License → Enter license key. PRO pages unlock at once.' },
            { icon: Check, title: '3. Keep playing', desc: 'The key is bound to your PC. AutoPot reminds you a few days before it expires.' },
          ].map(s => (
            <div key={s.title}>
              <s.icon className="h-5 w-5 text-accent" aria-hidden />
              <h3 className="mt-3 font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-ink2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bảng so sánh — sinh từ danh sách tính năng, luôn khớp trang Features */}
      <section className="border-t border-line bg-raised">
        <div className="mx-auto max-w-page px-4 py-16 sm:px-6">
          <SectionHead title="Free vs PRO" desc="Exactly what each option includes." />
          <div className="mt-8 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="bg-surface text-ink2">
                <tr>
                  <th className="px-5 py-3 font-semibold">Feature</th>
                  <th className="w-28 px-5 py-3 text-center font-semibold">Free</th>
                  <th className="w-28 px-5 py-3 text-center font-semibold text-pro">PRO</th>
                </tr>
              </thead>
              {featureGroups.map(g => (
                <tbody key={g.id} className="border-t border-line">
                  <tr><th colSpan={3} className="bg-surface/60 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-ink3">{g.title}</th></tr>
                  {g.items.map(i => (
                    <tr key={i.title} className="border-t border-line/60">
                      <td className="px-5 py-3"><span className="font-medium">{i.title}</span><span className="ml-2 align-middle sm:hidden"><TierBadge tier={i.tier} /></span></td>
                      <td className="px-5 py-3 text-center">{i.tier === 'free' ? <Check className="mx-auto h-4 w-4 text-accent" aria-label="Included" /> : <Minus className="mx-auto h-4 w-4 text-ink3" aria-label="Not included" />}</td>
                      <td className="px-5 py-3 text-center"><Check className="mx-auto h-4 w-4 text-pro" aria-label="Included" /></td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
