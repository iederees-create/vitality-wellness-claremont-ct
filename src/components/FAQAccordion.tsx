import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'

/**
 * Keyboard-accessible accordion: each trigger is a real <button> with
 * aria-expanded and a unique id, and its panel is linked back via
 * aria-controls / aria-labelledby.
 */
export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">
          Frequently Asked <span className="italic text-sage-500">Questions</span>
        </h2>
      </div>

      <div className="space-y-3">
        {siteConfig.faqs.map((faq, index) => {
          const isOpen = openIndex === index
          const buttonId = `faq-button-${index}`
          const panelId = `faq-panel-${index}`

          return (
            <div key={faq.question} className="glass rounded-2xl overflow-hidden">
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 font-semibold text-sage-900"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className={`shrink-0 transition-transform text-sage-900/50 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="px-6 pb-5 text-sm text-sage-900/70 leading-relaxed"
              >
                {faq.answer}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
