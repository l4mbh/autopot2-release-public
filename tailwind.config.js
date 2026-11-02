/** @type {import('tailwindcss').Config} */
// Bảng màu giống app AutoPot (Web/app.css): nền tối, xanh lá là màu nhấn, tím = PRO.
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0e1014',
        raised: '#13161c',
        surface: '#181b22',
        surface2: '#1f232c',
        line: '#262b35',
        ink: '#e9edf3',
        ink2: '#a4aebd',
        ink3: '#6c7688',
        accent: '#4ade80',
        accentStrong: '#22c55e',
        life: '#ef4444',
        mana: '#3b82f6',
        pro: '#c084fc',
        warn: '#fbbf24',
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Cascadia Mono"', 'Consolas', 'monospace'],
      },
      maxWidth: { page: '1120px' },
    },
  },
  plugins: [],
};
