// src/components/Header.jsx
import ThemeToggle from './ThemeToggle';
import bannerImage from '../assets/banner.webp'; // Importa la imagen

export default function Header({ time }) {
  return (
    <div 
      className="header"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="header-dots" />
      <div className="site-title">GEEZ<span>*</span>2002</div>
      <div className="site-tagline">&gt;&gt; digital artist // illustrator // oc maker</div>
      <div className="status-bar">
        <div className="status-dot" />
        <span>ONLINE</span>
        <span style={{ color: '#2a3a5a' }}>|</span>
        <span>SYS TIME: {time}</span>
        <span style={{ color: '#2a3a5a' }}>|</span>
        <span style={{ color: '#ff6644' }}>★ COMMS: OPEN</span>
        <span style={{ color: '#2a3a5a' }}>|</span>
        <ThemeToggle />
      </div>
    </div>
  );
}