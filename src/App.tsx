import { AnnouncementBar } from './components/AnnouncementBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrustIndicators } from './components/TrustIndicators'
import { ConsultationFinder } from './components/ConsultationFinder'
import { TreatmentsSection } from './components/TreatmentsSection'
import { About } from './components/About'
import { PractitionerProfile } from './components/PractitionerProfile'
import { WhyChooseUs } from './components/WhyChooseUs'
import { ConsultationProcess } from './components/ConsultationProcess'
import { Pricing } from './components/Pricing'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { FAQAccordion } from './components/FAQAccordion'
import { ContactSection } from './components/ContactSection'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'
import { WhatsAppCTA } from './components/WhatsAppCTA'
import { ThemeSwitcher } from './components/ThemeSwitcher'

export default function App() {
  return (
    <div className="w-full min-h-screen relative font-sans overflow-x-hidden">
      {/* Decorative Background Gradients */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-sage-500/10 blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none -z-10" />

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <AnnouncementBar />
      <Navbar />

      <main id="main-content">
        <Hero />
        <TrustIndicators />
        <ConsultationFinder />
        <TreatmentsSection />
        <About />
        <PractitionerProfile />
        <WhyChooseUs />
        <ConsultationProcess />
        <Pricing />
        <Gallery />
        <Testimonials />
        <FAQAccordion />
        <ContactSection />
        <Newsletter />
      </main>

      <Footer />
      <WhatsAppCTA />
      <ThemeSwitcher />
    </div>
  )
}
