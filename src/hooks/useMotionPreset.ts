import { useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'

/**
 * Shared fade/slide-up motion variants that shrink to a plain fade
 * (near-zero distance and duration) when the visitor's OS has
 * "prefers-reduced-motion" enabled, per WCAG 2.2 guidance.
 */
export function useFadeUp(distance = 20, duration = 0.8): { variants: Variants; transition: { duration: number } } {
  const shouldReduceMotion = useReducedMotion()
  const y = shouldReduceMotion ? 0 : distance
  const finalDuration = shouldReduceMotion ? 0.01 : duration

  return {
    variants: {
      hidden: { opacity: 0, y },
      visible: { opacity: 1, y: 0 },
    },
    transition: { duration: finalDuration },
  }
}
