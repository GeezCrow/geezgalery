// src/components/ThemeToggle.jsx
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation(); // Evita que el evento burbujee
    toggleTheme();
  };

  return (
    <button
      onClick={handleClick}
      onTouchStart={handleClick} // Para móviles
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered ? 'var(--border-light)' : 'none',
        border: '1px solid var(--border-light)',
        color: isHovered ? 'var(--bg-secondary)' : 'var(--text-primary)',
        padding: '4px 12px',
        cursor: 'pointer',
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: '10px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        WebkitTapHighlightColor: 'transparent', // Quita el highlight en móviles
        touchAction: 'manipulation', // Mejora el rendimiento táctil
      }}
    >
      <span>{isDark ? '🌙' : '☀️'}</span>
      <span>{isDark ? 'DARK' : 'LIGHT'}</span>
    </button>
  );
}