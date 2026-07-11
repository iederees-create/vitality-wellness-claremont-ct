import { motion } from 'framer-motion'
import { siteConfig } from '../config/siteConfig'
import { useFadeUp } from '../hooks/useMotionPreset'

export function ConsultationProcess() {
  const { variants, transition } = useFadeUp()

  return (
    <section id="process" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">
          How It <span className="italic text-sage-500">Works</span>
        </h2>
        <p className="text-sage-900/70 max-w-2xl mx-auto">A simple path from first enquiry to an ongoing care plan.</p>
      </div>

      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {siteConfig.processSteps.map((step, index) => (
          <motion.li
            key={step.step}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition={{ ...transition, delay: index * 0.1 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sage-900 text-white font-serif font-semibold mb-4">
              {step.step}
            </span>
            <h3 className="font-serif font-semibold text-sage-900 mb-2">{step.title}</h3>
            <p className="text-sm text-sage-900/70 leading-relaxed">{step.text}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
