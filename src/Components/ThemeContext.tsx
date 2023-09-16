import React, { createContext, useContext, useState } from 'react';
import { ReactNode } from 'react';

type Theme = {
  backgroundColor: string;
  color: string;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const darkTheme: Theme = {
    backgroundColor: 'black',
    color: 'white',
  };

  const lightTheme: Theme = {
    backgroundColor: 'white',
    color: 'black',
  };

  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === darkTheme ? lightTheme : darkTheme));
  };
  

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme: toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
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
