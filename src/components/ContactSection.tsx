import { ContactForm } from './ContactForm'
import { BusinessHours } from './BusinessHours'
import { AddressMap } from './AddressMap'

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">
          Get In <span className="italic text-sage-500">Touch</span>
        </h2>
        <p className="text-sage-900/70">Send us a message, or find our hours and location below.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <ContactForm />
        <div className="space-y-6">
          <BusinessHours />
          <AddressMap />
        </div>
      </div>
    </section>
  )
}
