// src/context/ThemeContext.jsx
import { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Estado inicial: true = modo oscuro
  const [isDark, setIsDark] = useState(true);

  // Cargar preferencia guardada al montar el componente (solo una vez)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
    } else if (savedTheme === 'dark') {
      setIsDark(true);
    } else {
      // Si no hay preferencia guardada, usar modo oscuro
      setIsDark(true);
      localStorage.setItem('theme', 'dark');
    }
  }, []); // ← Array vacío: solo se ejecuta una vez

  // Aplicar tema al DOM cuando cambie isDark
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]); // ← Se ejecuta cada vez que isDark cambia

  // Función para togglear el tema
  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook personalizado para usar el contexto
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}