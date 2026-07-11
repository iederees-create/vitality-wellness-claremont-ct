import { createContext } from 'react'
import type { ThemeName } from '../config/siteConfig'

export interface ThemeContextValue {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
  themeNames: ThemeName[]
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)
