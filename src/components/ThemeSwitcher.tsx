import { siteConfig } from '../config/siteConfig'
import { useTheme } from '../hooks/useTheme'

/**
 * Demo-only floating control that lets a visitor preview the template's
 * 3 built-in theme presets live. Buyers ship with one fixed look by
 * setting `activeTheme` in siteConfig.ts — this switcher is a showcase
 * affordance, not something end customers need.
 */
export function ThemeSwitcher() {
  const { theme, setTheme, themeNames } = useTheme()

  return (
    <div
      role="group"
      aria-label="Preview color theme"
      className="fixed bottom-6 left-6 z-40 glass rounded-full p-1.5 flex items-center gap-1.5"
    >
      {themeNames.map((name) => {
        const preset = siteConfig.themes[name]
        const isActive = theme === name

        return (
          <button
            key={name}
            type="button"
            onClick={() => setTheme(name)}
            aria-pressed={isActive}
            aria-label={`Preview ${preset.label} theme`}
            title={preset.label}
            className={`w-7 h-7 rounded-full border-2 transition-transform ${
              isActive ? 'border-sage-900 scale-110' : 'border-white/60 hover:scale-105'
            }`}
            style={{ background: `linear-gradient(135deg, ${preset.colors.primary500}, ${preset.colors.accent500})` }}
          />
        )
      })}
    </div>
  )
}
