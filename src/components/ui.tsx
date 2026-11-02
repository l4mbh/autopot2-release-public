import type { ReactNode } from 'react';
import { Lock } from 'lucide-react';
import type { Tier } from '../site';

export function TierBadge({ tier }: { tier: Tier }) {
  return tier === 'pro' ? (
    <span className="inline-flex items-center gap-1 rounded-full bg-pro/15 px-2 py-0.5 text-[11px] font-semibold text-pro">
      <Lock className="h-3 w-3" aria-hidden /> PRO
    </span>
  ) : (
    <span className="inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-semibold text-accent">FREE</span>
  );
}

export function SectionHead({ eyebrow, title, desc, center = false }: { eyebrow?: string; title: ReactNode; desc?: ReactNode; center?: boolean }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {desc && <p className="mt-3 text-ink2">{desc}</p>}
    </div>
  );
}

/** Ảnh chụp app trong khung cửa sổ. */
export function Screenshot({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <figure className={`overflow-hidden rounded-xl border border-line bg-raised shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-surface2" />
        <span className="h-2.5 w-2.5 rounded-full bg-surface2" />
        <span className="h-2.5 w-2.5 rounded-full bg-surface2" />
      </div>
      <img src={src} alt={alt} loading="lazy" className="block w-full" />
    </figure>
  );
}

/**
 * Mô phỏng overlay Giá trong game (CSS thuần, không phải ảnh): nhãn item rơi có giá ở góc trên-trái,
 * hộp giá khi trỏ chuột và nhãn giá trên ô túi đồ — để người xem hiểu ngay tính năng trông thế nào.
 */
export function InGamePreview() {
  const cells: [string, string | null, string][] = [
    ['Divine Orb', '182c', 'text-[#ffa600]'], ['Chaos Orb', null, ''], ['Orb of Alchemy ×20', '6c', 'text-[#d8d8d8]'],
    ['Mortal Hope', '12.3c', 'text-[#d8d8d8]'], ['Sacrifice at Dawn ×11', '26.4c', 'text-[#d8d8d8]'], ['Exalted Orb ×3', '54c', 'text-[#ee8291]'],
  ];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-[radial-gradient(ellipse_at_30%_20%,#2a2219_0%,#14110e_55%,#0b0a09_100%)] p-5 sm:p-7"
      role="img" aria-label="Preview of in-game prices: a dropped unique with its price, a price box on hover and price tags on inventory items">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-5">
          <p className="text-[11px] uppercase tracking-[0.14em] text-ink3">On the ground</p>
          <div className="relative inline-block rounded-sm border border-[#af6025] bg-[#c06a24]/90 px-6 pb-1.5 pt-4 text-center text-[15px] font-semibold leading-snug text-white shadow-lg">
            <span className="absolute left-1 top-0.5 rounded-sm bg-black/80 px-1.5 text-[12px] font-semibold text-[#ffa600] tabular">809.6c</span>
            The Queen's Hunger<br />Vaal Regalia
          </div>
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-[0.14em] text-ink3">On hover</p>
            <div className="inline-block min-w-[220px] rounded-md border border-white/20 bg-[#101418]/95 p-3 text-sm shadow-xl">
              <p className="font-semibold text-[#e08a3c]">Shavronne's Wrappings</p>
              <p className="text-xs text-ink3">Occultist's Vestment · 6L</p>
              <p className="mt-1.5 text-base font-semibold text-[#ee8291] tabular">321.0c</p>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-2 text-[11px] uppercase tracking-[0.14em] text-ink3">Inventory & stash</p>
          <div className="grid grid-cols-3 gap-1.5">
            {cells.map(([name, price, color]) => (
              <div key={name} title={name} className="relative aspect-square rounded-sm border border-[#3a3326] bg-[#1b1812]">
                <span className="absolute inset-2 rounded-sm bg-gradient-to-br from-[#4a4231] to-[#26211a]" aria-hidden />
                {price && <span className={`absolute bottom-1 right-1 bg-black/80 px-1 text-[11px] font-semibold ${color} tabular`}>{price}</span>}
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between rounded-md border border-white/15 bg-[#101418]/95 px-3 py-2 text-sm">
            <span className="font-semibold">Inventory</span>
            <span className="font-semibold text-[#ee8291] tabular">280.7c</span>
          </div>
        </div>
      </div>
    </div>
  );
}
