// src/components/ThemeToggle.jsx
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: 'none',
        border: '1px solid var(--border-light)',
        color: 'var(--text-primary)',
        padding: '4px 12px',
        cursor: 'pointer',
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: '10px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }}
      onMouseEnter={(e) => {
        e.target.style.background = 'var(--border-light)';
        e.target.style.color = 'var(--bg-secondary)';
      }}
      onMouseLeave={(e) => {
        e.target.style.background = 'none';
        e.target.style.color = 'var(--text-primary)';
      }}
    >
      <span>{isDark ? '🌙' : '☀️'}</span>
      <span>{isDark ? 'DARK' : 'LIGHT'}</span>
    </button>
  );
}