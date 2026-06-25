import { useState, useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SidebarLeft from './components/SidebarLeft';
import GalleryTab from './components/GalleryTab';
import CommissionsTab from './components/CommissionsTab';
import SocialTab from './components/SocialTab';
import FullGalleryTab from './components/FullGalleryTab';
import IndiedevTab    from './components/IndiedevTab';
// ── IMÁGENES ─────────────────────────────────────────────
// WebP full  → se usa solo en el Lightbox (carga al abrir)


// WebP thumb → se usa en las cards del grid (muy pequeñas, cargan rápido)


// ─── DATOS EXTERNOS ─────────────────────────────────────
import { commissions } from './data/commissions';
import { socials } from './data/socials';
import { artworks } from './data/artworks';
import { gallery2 } from './data/gallery2';


// ─── DATOS ──────────────────────────────────────────────
const TABS = ['gallery', 'fullgallery', 'commissions', 'indiedev', 'social'];


// ─── APP ─────────────────────────────────────────────────
export default function App() {
  const { isDark } = useTheme();
  const [tab, setTab] = useState('gallery');
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const time = new Date().toLocaleTimeString('en-US', { hour12: false });

  return (
    <div data-theme={isDark ? 'dark' : 'light'}>
      <TopBar />
      <Header time={time} />
      <Nav tab={tab} setTab={setTab} tabs={TABS} />
      
      {/* Layout principal con clase condicional */}
<div className={`main-layout ${tab !== 'gallery' ? 'hide-sidebars' : ''}`}>
  <SidebarLeft tick={tick} />
        
        <div className="content">
          {tab === 'gallery' && <GalleryTab artworks={artworks} />}
          {tab === 'commissions' && <CommissionsTab commissions={commissions} />}
          {tab === 'social' && <SocialTab socials={socials} />}
          {tab === 'fullgallery'  && <FullGalleryTab gallery2={gallery2} />}
          {tab === 'indiedev'     && <IndiedevTab />}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}