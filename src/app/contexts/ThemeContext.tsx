'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

export enum Theme {
  SERENE = 'theme-serene',
  PROFESSIONAL = 'theme-professional',
  MODERN = 'theme-modern',
  CALM = 'theme-calm',
  BALANCED = 'theme-balanced',
}

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.SERENE,
  setTheme: () => null,
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(Theme.SERENE)
  console.log('theme', theme)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  )
}
