// Nội dung website: một chỗ duy nhất cho tính năng, gói giá, link — trang nào cũng đọc từ đây.
// Free / PRO khớp với app (AutoPotFeatures + GatedFeatures trong MainWindow.Bridge.cs).
import type { LucideIcon } from 'lucide-react';
import {
  FlaskConical, Radar, Tag, Sparkles, HeartPulse, Layers, ShieldPlus, Zap, Map, Palette, MousePointerClick,
  Boxes, Coins, Volume2, Search, PanelBottomClose, Keyboard, Users, Gamepad2, Languages, RefreshCw,
} from 'lucide-react';

export const DISCORD = 'https://discord.gg/YZMMf79gqS';
export const RELEASE_REPO = 'l4mbh/autopot2-release-public';

/** Đường dẫn file trong /public, đúng cả khi site chạy ở /autopot2-release-public/. */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export type Tier = 'free' | 'pro';
export type FeatureItem = { icon: LucideIcon; title: string; desc: string; tier: Tier };
export type FeatureGroup = {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  summary: string;
  shot: string;
  games: string;
  items: FeatureItem[];
};

export const featureGroups: FeatureGroup[] = [
  {
    id: 'auto-pot',
    icon: FlaskConical,
    title: 'Auto Pot',
    tagline: 'Never forget a flask again',
    summary: 'AutoPot reads your Life, Mana and Energy Shield and presses the right flask key the moment you drop below your trigger — no macros, no guessing.',
    shot: 'screenshots/app-autopot.png',
    games: 'Path of Exile 1 & 2',
    items: [
      { icon: HeartPulse, tier: 'free', title: 'Life, Mana & ES recovery', desc: 'Drag the handle on each bar to set when a flask is used. Choose Life, ES or Life + ES and a cooldown per flask type.' },
      { icon: Layers, tier: 'free', title: 'Reads your flask belt', desc: 'Detects which slot holds a Life, Mana or Hybrid flask and assigns keys automatically. Several flasks of one type are used in turns.' },
      { icon: Zap, tier: 'pro', title: 'Keep utility flasks up', desc: 'Re-uses Quicksilver, Granite and other utility flasks as soon as they run out — paused in town and hideout.' },
      { icon: ShieldPlus, tier: 'pro', title: 'Cure ailments', desc: 'Uses the flask whose mod cures what hit you: bleeding, corrupted blood, poison, freeze, ignite, shock or curses — with a stack threshold per ailment.' },
    ],
  },
  {
    id: 'radar',
    icon: Radar,
    title: 'Radar',
    tagline: 'See the whole map at a glance',
    summary: 'Open the large map (Tab) and AutoPot draws monsters, chests and NPCs on top of it, plus the walls of the area so you know where to go.',
    shot: 'screenshots/app-radar.png',
    games: 'Path of Exile 1',
    items: [
      { icon: Map, tier: 'pro', title: 'Monsters, chests & NPCs', desc: 'Normal, magic, rare and unique monsters each get their own icon. Turn any group on or off.' },
      { icon: Palette, tier: 'pro', title: 'Your colors', desc: 'Pick a color for every icon type so the map reads the way you like.' },
      { icon: Sparkles, tier: 'pro', title: 'Campaign guide', desc: 'Draws a path from your character to exits, bosses and quest targets in campaign areas.' },
    ],
  },
  {
    id: 'prices',
    icon: Tag,
    title: 'Prices',
    tagline: 'Know what your loot is worth',
    summary: 'Live prices from poe.ninja, drawn right in the game. Point at an item, open your stash or walk past a drop — the price is already there.',
    shot: 'screenshots/app-prices.png',
    games: 'Path of Exile 1',
    items: [
      { icon: MousePointerClick, tier: 'pro', title: 'Price on hover', desc: 'A small price box under the item you point at — with links, gem level, corrupted and stack total.' },
      { icon: Boxes, tier: 'pro', title: 'Tags on every item', desc: 'Prices on each item in your inventory and stash, colored by value. Works in scrolling and special stash tabs.' },
      { icon: Coins, tier: 'pro', title: 'Inventory & stash totals', desc: 'Total value of your inventory and the open stash tab, with the most valuable items listed.' },
      { icon: Volume2, tier: 'pro', title: 'Drops on the ground', desc: 'Price inside the name label of dropped items and a sound when something valuable drops. Text size and colors are yours to set.' },
      { icon: Search, tier: 'pro', title: 'In-game price check', desc: 'Press F7 (or your own key) to search any item by name on screen. Your keys never reach the game while typing.' },
    ],
  },
  {
    id: 'comfort',
    icon: Sparkles,
    title: 'Everyday comfort',
    tagline: 'Small things that add up',
    summary: 'A clean app that stays out of your way while you play.',
    shot: 'screenshots/app-settings.png',
    games: 'Path of Exile 1 & 2',
    items: [
      { icon: PanelBottomClose, tier: 'free', title: 'System tray', desc: 'Close to tray and keep playing. Show or exit from the tray icon.' },
      { icon: Keyboard, tier: 'free', title: 'Show / hide key', desc: 'Toggle the AutoPot window from anywhere — F12 by default, change it any time.' },
      { icon: Languages, tier: 'free', title: 'Your language', desc: 'English, Tiếng Việt, 中文 and Русский.' },
      { icon: RefreshCw, tier: 'free', title: 'Automatic updates', desc: 'New versions install with one click, so offsets stay current after game patches.' },
      { icon: Users, tier: 'pro', title: 'Profiles', desc: 'Save a setup per character or build and switch in one click.' },
      { icon: Gamepad2, tier: 'pro', title: 'Gamepad support', desc: 'Flasks through a virtual Xbox controller, with passthrough for your real controller.' },
    ],
  },
];

export type Plan = { name: string; price: number; days: number; note?: string; popular?: boolean };
export const plans: Plan[] = [
  { name: '30 days', price: 7, days: 30 },
  { name: '60 days', price: 10, days: 60, popular: true, note: 'Best value' },
  { name: '90 days', price: 20, days: 90 },
];
