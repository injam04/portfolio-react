import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [IsLight, setIsLight] = useState(true);

  useEffect(() => {
    if (IsLight) {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
  }, [IsLight]);

  const value = {
    IsLight,
    setIsLight,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
