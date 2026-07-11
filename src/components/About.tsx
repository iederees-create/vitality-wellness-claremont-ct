import { motion } from 'framer-motion'
import { Leaf } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import { useFadeUp } from '../hooks/useMotionPreset'

export function About() {
  const { variants, transition } = useFadeUp()

  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        transition={transition}
        className="text-center"
      >
        <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-6">
          <Leaf className="text-sage-500" size={22} aria-hidden="true" />
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">
          Our <span className="italic text-sage-500">Story</span>
        </h2>
        <p className="text-sage-900/70 text-lg leading-relaxed max-w-2xl mx-auto mb-4">{siteConfig.description}</p>
        <p className="text-sage-900/70 leading-relaxed max-w-2xl mx-auto">
          Every treatment at {siteConfig.businessName} is planned around the person receiving it — not a rigid menu.
          We keep our schedule unhurried, our space calm, and our approach honest about what each service can
          reasonably offer.
        </p>
      </motion.div>
    </section>
  )
}
