import { motion } from 'framer-motion'
import { siteConfig } from '../config/siteConfig'
import { useFadeUp } from '../hooks/useMotionPreset'

/**
 * Differentiators rendered as alternating asymmetric rows (rather than
 * a generic 3-up icon-card grid) so the section reads as intentionally
 * designed rather than templated.
 */
export function WhyChooseUs() {
  const { variants, transition } = useFadeUp(24)

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">
          Why Choose <span className="italic text-sage-500">{siteConfig.businessName}</span>
        </h2>
      </div>

      <div className="space-y-10">
        {siteConfig.whyChooseUs.map((item, index) => {
          const isEven = index % 2 === 0
          return (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants}
              transition={{ ...transition, delay: index * 0.05 }}
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${isEven ? '' : 'md:flex-row-reverse'}`}
            >
              <span
                aria-hidden="true"
                className="font-serif text-6xl md:text-7xl font-bold text-sage-500/20 shrink-0"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className={`glass rounded-2xl p-6 md:p-8 flex-1 ${isEven ? 'md:text-left' : 'md:text-right'} text-center`}>
                <h3 className="text-xl font-serif font-semibold text-sage-900 mb-2">{item.title}</h3>
                <p className="text-sage-900/70 leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
