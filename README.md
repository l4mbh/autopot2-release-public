# GameTool Pro Website

A modern, responsive website for a gaming automation tool built with React, TypeScript, Tailwind CSS, and Vite.

## Features

- **Dark/Light Theme**: Seamless theme switching with persistent preference
- **Responsive Design**: Mobile-first design that works on all devices
- **Multiple Pages**:
  - Home: Landing page with hero section and feature highlights
  - Pricing: Three pricing tiers (30, 60, 90 days)
  - Features: Detailed feature guides and instructions
  - Download: GitHub release integration for latest downloads
- **GitHub Integration**: Automatically fetches and displays the latest release from your GitHub repository
- **Discord Integration**: Easy access to community Discord server

## Configuration

### GitHub Repository Setup

To connect the download page to your GitHub repository:

1. Open `src/pages/Download.tsx`
2. Update the following constants at the top of the file:

```typescript
const GITHUB_OWNER = 'your-username';  // Your GitHub username
const GITHUB_REPO = 'your-repo';       // Your repository name
```

### Discord Link Setup

To update the Discord server link:

1. Search for `https://discord.gg/yourdiscord` in the following files:
   - `src/components/Navigation.tsx`
   - `src/pages/Home.tsx`
   - `src/pages/Pricing.tsx`
   - `src/pages/Features.tsx`
2. Replace with your actual Discord invite link

### Branding

To customize the branding:

1. Update logo and name in `src/components/Navigation.tsx`
2. Update title and meta tags in `index.html`
3. Replace favicon in `public/vite.svg`

## Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://your-username.github.io/your-repo",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo/',
  plugins: [react()],
  // ... rest of config
});
```

4. Deploy:
```bash
npm run deploy
```

### Netlify/Vercel

1. Connect your GitHub repository to Netlify or Vercel
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

## Tech Stack

- **React 18**: UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Lucide React**: Beautiful icon library

## Project Structure

```
src/
├── components/
│   └── Navigation.tsx        # Header with navigation and theme toggle
├── contexts/
│   └── ThemeContext.tsx      # Theme management
├── pages/
│   ├── Home.tsx              # Landing page
│   ├── Pricing.tsx           # Pricing plans
│   ├── Features.tsx          # Feature guides
│   └── Download.tsx          # GitHub release downloads
├── App.tsx                   # Main app component with routing
├── main.tsx                  # Entry point
└── index.css                 # Global styles
```

## License

MIT
