import { motion } from 'framer-motion'
import { siteConfig } from '../config/siteConfig'
import { useFadeUp } from '../hooks/useMotionPreset'

export function Pricing() {
  const { variants, transition } = useFadeUp()

  return (
    <section id="pricing" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-4">
        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">
          Starting <span className="italic text-sage-500">Prices</span>
        </h2>
        <p className="text-sage-900/70 max-w-2xl mx-auto">
          Indicative starting prices — final pricing is confirmed at consultation and may vary by treatment length or
          add-ons.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {siteConfig.treatments.map((treatment, index) => (
          <motion.div
            key={treatment.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition={{ ...transition, delay: index * 0.05 }}
            className="glass rounded-2xl p-6 flex flex-col"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">
              {treatment.category}
            </span>
            <h3 className="font-serif font-semibold text-lg text-sage-900 mb-2">{treatment.name}</h3>
            <p className="text-sm text-sage-900/70 flex-1 mb-4">{treatment.description}</p>
            <p className="text-2xl font-serif font-bold text-sage-900">
              From {treatment.currency}
              {treatment.priceFrom}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
