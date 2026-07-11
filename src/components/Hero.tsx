import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import { BookingCTA } from './BookingCTA'
import { useFadeUp } from '../hooks/useMotionPreset'

export function Hero() {
  const badge = useFadeUp(20, 0.8)
  const headline = useFadeUp(20, 0.8)
  const subhead = useFadeUp(0, 0.8)
  const ctas = useFadeUp(10, 0.8)

  return (
    <section id="top" className="relative pt-16 pb-32 sm:pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center text-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={badge.variants}
        transition={{ ...badge.transition, delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold text-sage-900 mb-8"
      >
        <Sparkles size={14} className="text-gold-500" aria-hidden="true" />
        Wellness Studio in Claremont
      </motion.div>

      <motion.h1
        initial="hidden"
        animate="visible"
        variants={headline.variants}
        transition={{ ...headline.transition, delay: 0.35 }}
        className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-6 max-w-4xl"
      >
        {siteConfig.tagline}
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={subhead.variants}
        transition={{ ...subhead.transition, delay: 0.5 }}
        className="text-lg md:text-xl text-sage-900/70 max-w-2xl mb-10"
      >
        {siteConfig.description}
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={ctas.variants}
        transition={{ ...ctas.transition, delay: 0.65 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <BookingCTA
          className="bg-sage-900 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-sage-500 transition-colors shadow-lg flex items-center justify-center gap-2"
        />
        <a
          href="#treatments"
          className="glass px-8 py-3.5 rounded-full font-semibold hover:bg-white transition-colors flex items-center justify-center gap-2"
        >
          View Treatments <ArrowRight size={18} aria-hidden="true" />
        </a>
      </motion.div>
    </section>
  )
}
