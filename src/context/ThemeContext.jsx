import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Default to the off-white background
  const [activeBg, setActiveBg] = useState('#f5f0e8');
  
  // Available backgrounds
  const backgrounds = [
    { id: 'white', color: '#f5f0e8' },
    { id: 'red', color: '#8B0000' },
    { id: 'navy', color: '#1a2744' },
    { id: 'black', color: '#0a0a0a' },
    { id: 'yellow', color: '#f5e6a3' },
    { id: 'sage', color: '#c2c9a0' }
  ];

  return (
    <ThemeContext.Provider value={{ activeBg, setActiveBg, backgrounds }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
