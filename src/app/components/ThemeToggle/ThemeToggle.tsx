'use client'

import { Theme, useTheme } from '@/app/contexts/ThemeContext'

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value as Theme)}
    >
      {Object.values(Theme).map((themeValue) => (
        <option
          key={themeValue}
          value={themeValue}
        >
          {themeValue.replace('theme-', '').toUpperCase()}
        </option>
      ))}
    </select>
  )
}
