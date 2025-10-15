'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    // Toujours utiliser le thème sombre
    setTheme('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  useEffect(() => {
    // Appliquer le thème sombre au document
    const root = document.documentElement;
    root.classList.add('dark');
    
    // Sauvegarder dans localStorage
    localStorage.setItem('theme', 'dark');
  }, [theme]);

  const toggleTheme = () => {
    // Ne fait rien, reste toujours en mode sombre
    setTheme('dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
