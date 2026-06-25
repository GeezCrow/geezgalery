import { useState } from 'react';
import SectionHeader from './UI/SectionHeader';
import ArtCard from './UI/ArtCard';
import Lightbox from './UI/Lightbox';
import IntroBox from './IntroBox';

export default function GalleryTab({ artworks }) {
  const [selectedArt, setSelectedArt] = useState(null);

  const handleOpenLightbox = (art) => {
    setSelectedArt(art);
  };

  const handleCloseLightbox = () => {
    setSelectedArt(null);
  };

  return (
    <>
              <IntroBox />
      <SectionHeader label=">> recent artwork" />
      <div className="gallery-grid">
        {artworks.map(art => (
          <ArtCard 
            key={art.id} 
            art={art} 
            onOpen={handleOpenLightbox}
          />
        ))}
      </div>

<SectionHeader label=">> work in progress" />
<div style={{ 
  border: '1px solid var(--border-color)', 
  background: 'var(--bg-card)', 
  padding: '30px', 
  textAlign: 'center' 
}}>
  <div style={{ 
    fontFamily: "'VT323', monospace", 
    fontSize: '48px', 
    color: 'var(--text-muted)',  /* ← cambiado a text-muted para mejor contraste */
    letterSpacing: '8px' 
  }}>
    WORK IN PROGRESS*
  </div>
</div>

      {/* Lightbox */}
      {selectedArt && (
        <Lightbox art={selectedArt} onClose={handleCloseLightbox} />
      )}
    </>
  );
}