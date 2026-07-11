import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { siteConfig, type ThemeName } from '../config/siteConfig'
import { ThemeContext, type ThemeContextValue } from './themeContextInstance'

const THEME_STORAGE_KEY = 'vitality-wellness-theme'

function readStoredTheme(): ThemeName | null {
  if (typeof window === 'undefined') return null
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (stored && stored in siteConfig.themes) {
    return stored as ThemeName
  }
  return null
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(() => readStoredTheme() ?? siteConfig.activeTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // localStorage may be unavailable (private browsing) — theming still works for the session.
    }
  }, [theme])

  const setTheme = (next: ThemeName) => setThemeState(next)

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, themeNames: Object.keys(siteConfig.themes) as ThemeName[] }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
