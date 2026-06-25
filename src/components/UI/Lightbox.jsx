import { useEffect } from 'react';

export default function Lightbox({ art, onClose }) {
  // Cerrar con la tecla ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Cerrar haciendo clic fuera de la imagen
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!art) return null;

  return (
    <div 
      className="lightbox-overlay"
      onClick={handleBackdropClick}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.92)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        cursor: 'pointer'
      }}
    >
      <div style={{
        position: 'relative',
        maxWidth: '90vw',
        maxHeight: '90vh',
        background: '#0d0d1a',
        border: '2px solid #7a9fc0',
        padding: '12px'
      }}>
        <img 
          src={art.image} 
          alt={art.title}
          style={{
            maxWidth: '100%',
            maxHeight: '80vh',
            objectFit: 'contain',
            display: 'block'
          }}
        />
        
        {/* Info de la imagen */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          background: 'rgba(13,13,26,0.9)',
          padding: '10px 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid #2a3a5a'
        }}>
          <div>
            <span style={{ color: '#c8d8a8', fontSize: '14px', fontWeight: 'bold' }}>
              {art.title}
            </span>
            <span style={{ color: '#7a9fc0', fontSize: '11px', marginLeft: '12px' }}>
              {art.tag}
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: '1px solid #7a9fc0',
              color: '#c8d8a8',
              padding: '4px 16px',
              cursor: 'pointer',
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '12px',
              letterSpacing: '2px',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#7a9fc0';
              e.target.style.color = '#0d0d1a';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'none';
              e.target.style.color = '#c8d8a8';
            }}
          >
            ✕ CERRAR
          </button>
        </div>
      </div>
    </div>
  );
}