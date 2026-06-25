// src/components/ThemeToggle.jsx
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div style={{
      display: 'inline-block',
      flexShrink: 0,
    }}>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
          border: '1px solid var(--border-light)',
          padding: '4px 10px',
          cursor: 'pointer',
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: '9px',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: 'var(--text-primary)',
          transition: 'all 0.3s ease',
          WebkitTapHighlightColor: 'transparent',
          touchAction: 'manipulation',
          minHeight: '28px',
          minWidth: '60px',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-light)',
          borderRadius: '3px',
          position: 'relative',
          whiteSpace: 'nowrap',
        }}
      >
        <input
          type="checkbox"
          checked={isDark}
          onChange={toggleTheme}
          style={{ display: 'none' }}
        />
        <span style={{ fontSize: '14px', lineHeight: 1 }}>{isDark ? '🌙' : '☀️'}</span>
        <span style={{ lineHeight: 1 }}>{isDark ? 'DARK' : 'LIGHT'}</span>
      </label>
    </div>
  );
}