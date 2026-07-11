import { siteConfig } from '../config/siteConfig'
import { PlaceholderImage } from './PlaceholderImage'

export function PractitionerProfile() {
  return (
    <section aria-label="Our team" className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="sr-only">Meet the Team</h2>
      <div className="grid gap-8">
        {siteConfig.practitioners.map((practitioner) => (
          <div key={practitioner.name} className="glass rounded-3xl p-8 md:p-10 grid md:grid-cols-[auto_1fr] gap-8 items-center">
            <PlaceholderImage
              alt="Demo team photo placeholder — replace with your practitioner's real headshot"
              gradientFrom="#e5ede5"
              gradientTo="#8ba78b"
              className="w-28 h-28 rounded-full mx-auto md:mx-0"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-serif font-semibold text-sage-900">{practitioner.name}</h3>
              <p className="text-sm font-semibold text-gold-600 uppercase tracking-wider mb-3">{practitioner.role}</p>
              <p className="text-sage-900/70 leading-relaxed">{practitioner.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
