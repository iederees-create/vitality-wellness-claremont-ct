import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'

type Step = 'start' | 'q1' | 'q2' | 'summary'

const [firstQuestion, secondQuestion] = siteConfig.consultationQuestions

/**
 * Wellness Consultation Finder — a non-diagnostic preference picker.
 *
 * This intentionally does NOT: diagnose anything, calculate a pseudo-clinical
 * score, claim responses were "analyzed" medically, or recommend specific
 * treatments as a clinical conclusion. It only maps general preferences to
 * one of `siteConfig.treatmentCategories` and hands off a plain-language
 * summary to the business via mailto:/WhatsApp — nothing is ever "submitted"
 * to a server, and no email is stored anywhere.
 */
export function ConsultationFinder() {
  const [step, setStep] = useState<Step>('start')
  const [focusTag, setFocusTag] = useState<string | null>(null)
  const [paceTag, setPaceTag] = useState<string | null>(null)
  const shouldReduceMotion = useReducedMotion()
  const slide = shouldReduceMotion ? 0 : 20

  const resultSummary = focusTag ? siteConfig.consultationResultCategories[focusTag] : ''

  const buildHandoffMessage = () => {
    const paceText = paceTag ? ` I'm hoping for ${paceTag}.` : ''
    return `Hi ${siteConfig.businessName}, I used the Wellness Consultation Finder on your site. I'm interested in: ${focusTag}.${paceText} Could we set up a consultation to talk through suitable options?`
  }

  const digitsOnly = siteConfig.whatsappNumber.replace(/\D/g, '')
  const useWhatsApp = digitsOnly.length > 0
  const handoffHref = useWhatsApp
    ? `https://wa.me/${digitsOnly}?text=${encodeURIComponent(buildHandoffMessage())}`
    : `mailto:${siteConfig.email}?subject=${encodeURIComponent('Consultation Finder enquiry')}&body=${encodeURIComponent(buildHandoffMessage())}`

  return (
    <section aria-label="Wellness Consultation Finder" className="py-24 px-6 max-w-4xl mx-auto w-full">
      <div className="glass rounded-3xl p-8 md:p-12 shadow-xl border-sage-500/20 relative overflow-hidden bg-white/80">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-[80px] -z-10" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage-500/10 rounded-full blur-[80px] -z-10" aria-hidden="true" />

        <AnimatePresence mode="wait">
          {step === 'start' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: slide }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -slide }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage-50 text-sage-500 mb-6 border border-sage-100 shadow-sm">
                <Sparkles size={28} aria-hidden="true" />
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-4 text-sage-900">
                Wellness <span className="italic text-sage-500">Consultation Finder</span>
              </h2>
              <p className="text-sage-900/70 max-w-lg mx-auto mb-4 text-lg">
                Answer two quick questions about your preferences and we'll suggest which of our service categories
                might be worth discussing with our team.
              </p>
              <p className="text-sm text-sage-900/60 max-w-md mx-auto mb-8 flex items-center justify-center gap-2">
                <ShieldCheck size={16} className="text-sage-500 shrink-0" aria-hidden="true" />
                Your preferences are used only to tailor this suggestion — nothing is submitted until you choose to
                send it.
              </p>
              <button
                type="button"
                onClick={() => setStep('q1')}
                className="bg-sage-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-sage-500 transition-colors shadow-lg flex items-center justify-center gap-2 mx-auto w-full sm:w-auto"
              >
                Get Started <ArrowRight size={18} aria-hidden="true" />
              </button>
            </motion.div>
          )}

          {step === 'q1' && (
            <motion.div key="q1" initial={{ opacity: 0, x: slide }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -slide }}>
              <span className="text-sm font-semibold text-gold-500 tracking-wider uppercase mb-2 block">
                Question 1 of 2
              </span>
              <h3 className="text-2xl font-serif font-semibold mb-6 text-sage-900">{firstQuestion.question}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {firstQuestion.options.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => {
                      setFocusTag(option.tag)
                      setStep('q2')
                    }}
                    className="p-4 border border-sage-200 rounded-xl text-left hover:border-sage-500 hover:bg-sage-50 transition-all font-medium text-sage-900 shadow-sm"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'q2' && (
            <motion.div key="q2" initial={{ opacity: 0, x: slide }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -slide }}>
              <span className="text-sm font-semibold text-gold-500 tracking-wider uppercase mb-2 block">
                Question 2 of 2
              </span>
              <h3 className="text-2xl font-serif font-semibold mb-6 text-sage-900">{secondQuestion.question}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {secondQuestion.options.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => {
                      setPaceTag(option.tag)
                      setStep('summary')
                    }}
                    className="p-4 border border-sage-200 rounded-xl text-left hover:border-sage-500 hover:bg-sage-50 transition-all font-medium text-sage-900 shadow-sm"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'summary' && (
            <motion.div key="summary" initial={{ opacity: 0, y: slide }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sage-500/10 text-sage-500 mb-6">
                <CheckCircle2 size={40} aria-hidden="true" />
              </div>
              <h3 className="text-3xl font-serif font-semibold mb-4 text-sage-900">Your Suggestion</h3>
              <div className="bg-sage-50 border border-sage-100 rounded-2xl p-6 mb-6 text-left max-w-lg mx-auto">
                <p className="text-sage-900/80 leading-relaxed">{resultSummary}</p>
              </div>
              <p className="text-xs text-sage-900/50 max-w-md mx-auto mb-8 leading-relaxed">
                This is a general suggestion based on your preferences, not a medical or clinical assessment. Service
                suitability should be confirmed with our team during a consultation. See our{' '}
                <a href="disclaimer.html" className="underline hover:text-sage-900">
                  full disclaimer
                </a>
                .
              </p>
              <a
                href={handoffHref}
                target={useWhatsApp ? '_blank' : undefined}
                rel={useWhatsApp ? 'noopener noreferrer' : undefined}
                className="bg-sage-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-sage-500 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
              >
                {useWhatsApp ? 'Send via WhatsApp' : 'Send via Email'} <ArrowRight size={18} aria-hidden="true" />
              </a>
              <p className="text-xs text-sage-900/40 mt-4">
                This opens {useWhatsApp ? 'WhatsApp' : 'your email client'} with your preferences pre-filled — it is
                not sent anywhere until you choose to.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
