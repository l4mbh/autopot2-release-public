import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { Features } from './pages/Features';
import { Download } from './pages/Download';

const basename = import.meta.env.BASE_URL || '/';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={basename}>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/features" element={<Features />} />
            <Route path="/download" element={<Download />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
