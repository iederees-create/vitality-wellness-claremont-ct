import { motion } from 'framer-motion'
import { Sparkles, Waves, Wind, Gift } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import { useFadeUp } from '../hooks/useMotionPreset'

const CATEGORY_ICONS: Record<string, typeof Sparkles> = {
  'Facials & Skincare': Sparkles,
  'Massage & Body Therapies': Waves,
  'Wellness Rituals': Wind,
  'Special Occasion Packages': Gift,
}

export function TreatmentCategories() {
  const { variants, transition } = useFadeUp()

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {siteConfig.treatmentCategories.map((category, index) => {
        const Icon = CATEGORY_ICONS[category] ?? Sparkles
        const count = siteConfig.treatments.filter((t) => t.category === category).length

        return (
          <motion.a
            key={category}
            href={`#treatments-${index}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition={{ ...transition, delay: index * 0.1 }}
            className="glass p-6 rounded-2xl text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center mb-4 mx-auto">
              <Icon className="text-sage-500" size={22} aria-hidden="true" />
            </div>
            <h3 className="font-serif font-semibold text-sage-900 mb-1">{category}</h3>
            <p className="text-xs text-sage-900/60">{count} treatment{count === 1 ? '' : 's'}</p>
          </motion.a>
        )
      })}
    </div>
  )
}
