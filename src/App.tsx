import { motion } from 'framer-motion'
import { Sparkles, Calendar, ArrowRight, Star, ChevronDown, Leaf, Activity, ShieldCheck } from 'lucide-react'

export default function App() {
  return (
    <div className="w-full min-h-screen relative font-sans overflow-x-hidden">
      
      {/* Decorative Background Gradients */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-sage-500/10 blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none -z-10" />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 glass"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="text-sage-500" size={24} />
            <span className="font-serif font-semibold text-xl tracking-wide text-sage-900">Vitality Wellness</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#treatments" className="text-sm font-medium hover:text-sage-500 transition-colors">Treatments</a>
            <a href="#about" className="text-sm font-medium hover:text-sage-500 transition-colors">About</a>
            <a href="#reviews" className="text-sm font-medium hover:text-sage-500 transition-colors">Reviews</a>
            <a href="#contact" className="bg-sage-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-sage-500 transition-colors shadow-md flex items-center gap-2">
              <Calendar size={16} /> Book Online
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold text-sage-900 mb-8"
        >
          <Sparkles size={14} className="text-gold-500" />
          Premium Aesthetic Clinic in Claremont
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-6 max-w-4xl"
        >
          Where Science Meets <span className="italic text-sage-500">Beauty.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-sage-900/70 max-w-2xl mb-10"
        >
          Advanced aesthetic and wellness treatments by certified professionals. 
          Enhance your natural beauty in a serene, luxurious environment.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#contact" className="bg-sage-900 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-sage-500 transition-colors shadow-lg flex items-center justify-center gap-2">
            Book a Consultation <ArrowRight size={18} />
          </a>
          <a href="#treatments" className="glass px-8 py-3.5 rounded-full font-semibold hover:bg-white transition-colors flex items-center justify-center">
            View Treatments
          </a>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-sage-900/10 bg-white/50 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-serif font-bold text-sage-900 mb-1">500+</h3>
            <p className="text-sm font-medium text-sage-900/60 uppercase tracking-wider">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-serif font-bold text-sage-900 mb-1">4.9</h3>
            <p className="text-sm font-medium text-sage-900/60 uppercase tracking-wider">Google Rating</p>
          </div>
          <div>
            <h3 className="text-3xl font-serif font-bold text-sage-900 mb-1">10+</h3>
            <p className="text-sm font-medium text-sage-900/60 uppercase tracking-wider">Years Exp.</p>
          </div>
          <div>
            <h3 className="text-3xl font-serif font-bold text-sage-900 mb-1">100%</h3>
            <p className="text-sm font-medium text-sage-900/60 uppercase tracking-wider">Certified</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="treatments" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">Our <span className="italic text-sage-500">Treatments</span></h2>
          <p className="text-sage-900/70 max-w-2xl mx-auto">Science-backed aesthetic solutions tailored to your unique needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Dermal Fillers", desc: "Restore volume and sculpt facial contours with precision.", icon: Activity },
            { title: "Skin Rejuvenation", desc: "IPL, chemical peels, and microneedling for radiant skin.", icon: Sparkles },
            { title: "Bio-Remodelling", desc: "Next-generation collagen stimulation for lasting results.", icon: Leaf },
            { title: "Holistic Wellness", desc: "IV drips, nutritional coaching, and full-body wellness plans.", icon: ShieldCheck },
            { title: "Laser Therapy", desc: "Medical-grade laser for hair removal and pigmentation.", icon: Activity },
            { title: "Bespoke Facials", desc: "Customized facials targeting your specific skin concerns.", icon: Sparkles }
          ].map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-2xl transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center mb-6">
                <service.icon className="text-sage-500" size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">{service.title}</h3>
              <p className="text-sage-900/70 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-900 text-cream-50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Leaf className="text-sage-500" size={20} />
            <span className="font-serif font-semibold text-lg">Vitality Wellness</span>
          </div>
          <p className="text-sm text-cream-50/70">&copy; 2026 Vitality Wellness Claremont. All rights reserved.</p>
          <div className="text-sm text-cream-50/70">
            Powered by <a href="#" className="text-gold-500 hover:underline">Etsy Templates</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
