import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, ArrowRight, CheckCircle2, Lock } from 'lucide-react'

type Step = 'start' | 'q1' | 'q2' | 'capture' | 'result'

export function AssessmentFunnel() {
  const [step, setStep] = useState<Step>('start')
  const [email, setEmail] = useState('')

  const handleNext = (nextStep: Step) => setStep(nextStep)

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto w-full">
      <div className="glass rounded-3xl p-8 md:p-12 shadow-xl border-sage-500/20 relative overflow-hidden bg-white/80">
        
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-[80px] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage-500/10 rounded-full blur-[80px] -z-10" />

        <AnimatePresence mode="wait">
          
          {/* STEP: START */}
          {step === 'start' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage-50 text-sage-500 mb-6 border border-sage-100 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-4 text-sage-900">
                Discover Your <span className="italic text-sage-500">Skin Age</span>
              </h2>
              <p className="text-sage-900/70 max-w-lg mx-auto mb-8 text-lg">
                Take our 60-second clinical assessment to uncover what's really aging your skin and get a personalized vitality blueprint.
              </p>
              <button 
                onClick={() => handleNext('q1')}
                className="bg-sage-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-sage-500 transition-colors shadow-lg flex items-center justify-center gap-2 mx-auto w-full sm:w-auto"
              >
                Start Assessment <ArrowRight size={18} />
              </button>
            </motion.div>
          )}

          {/* STEP: Q1 */}
          {step === 'q1' && (
            <motion.div
              key="q1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <span className="text-sm font-semibold text-gold-500 tracking-wider uppercase mb-2 block">Question 1 of 2</span>
              <h3 className="text-2xl font-serif font-semibold mb-6 text-sage-900">What is your primary skin or wellness concern?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {['Fine lines & wrinkles', 'Loss of volume/sagging', 'Dullness & pigmentation', 'Low energy & fatigue'].map((option) => (
                  <button 
                    key={option}
                    onClick={() => handleNext('q2')}
                    className="p-4 border border-sage-200 rounded-xl text-left hover:border-sage-500 hover:bg-sage-50 transition-all font-medium text-sage-900 shadow-sm"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP: Q2 */}
          {step === 'q2' && (
            <motion.div
              key="q2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <span className="text-sm font-semibold text-gold-500 tracking-wider uppercase mb-2 block">Question 2 of 2</span>
              <h3 className="text-2xl font-serif font-semibold mb-6 text-sage-900">How would you describe your daily stress levels?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {['Low (Very relaxed)', 'Moderate (Occasional stress)', 'High (Constantly on the go)', 'Severe (Burnout)'].map((option) => (
                  <button 
                    key={option}
                    onClick={() => handleNext('capture')}
                    className="p-4 border border-sage-200 rounded-xl text-left hover:border-sage-500 hover:bg-sage-50 transition-all font-medium text-sage-900 shadow-sm"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP: CAPTURE (THE FUNNEL) */}
          {step === 'capture' && (
            <motion.div
              key="capture"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-4"
            >
              <div className="w-16 h-16 rounded-full bg-gold-50 mx-auto flex items-center justify-center mb-6">
                <Lock className="text-gold-500" size={24} />
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3 text-sage-900">Your Blueprint is Ready!</h3>
              <p className="text-sage-900/70 mb-8 max-w-md mx-auto">
                We've analyzed your responses. Enter your email to unlock your custom clinical results and claim <strong className="text-sage-900">10% off</strong> your first treatment.
              </p>
              
              <form 
                onSubmit={(e) => { e.preventDefault(); handleNext('result'); }}
                className="max-w-md mx-auto flex flex-col gap-4"
              >
                <input 
                  type="email" 
                  required
                  placeholder="Enter your best email..." 
                  className="w-full px-5 py-4 rounded-xl border border-sage-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all shadow-inner"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                  type="submit"
                  className="w-full bg-gold-500 text-white px-5 py-4 rounded-xl font-bold hover:bg-gold-600 transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  Unlock My Results <ArrowRight size={18} />
                </button>
              </form>
              <p className="text-xs text-sage-900/40 mt-4">100% secure. We never spam.</p>
            </motion.div>
          )}

          {/* STEP: RESULT (THE PITCH) */}
          {step === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sage-500/10 text-sage-500 mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-3xl font-serif font-semibold mb-4 text-sage-900">Analysis Complete</h3>
              <div className="bg-sage-50 border border-sage-100 rounded-2xl p-6 mb-8 text-left max-w-lg mx-auto">
                <p className="text-sage-900/80 mb-4 leading-relaxed">
                  Based on your responses, stress and environmental factors are likely accelerating collagen depletion.
                </p>
                <p className="text-sage-900/80 font-medium leading-relaxed">
                  <strong>Our Recommendation:</strong> A course of <span className="text-sage-900 underline decoration-gold-500 decoration-2 underline-offset-4">Bio-Remodelling</span> combined with targeted IV Vitamin Therapy to restore cellular hydration and volume.
                </p>
              </div>
              <a 
                href="#contact"
                className="bg-sage-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-sage-500 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
              >
                Book Your Consultation Now
              </a>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  )
}
