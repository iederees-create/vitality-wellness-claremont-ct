import { siteConfig } from '../config/siteConfig'
import { TreatmentCategories } from './TreatmentCategories'
import { TreatmentDetailCards } from './TreatmentDetailCards'

export function TreatmentsSection() {
  return (
    <section id="treatments" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">
          Our <span className="italic text-sage-500">Treatments</span>
        </h2>
        <p className="text-sage-900/70 max-w-2xl mx-auto">{siteConfig.description}</p>
      </div>

      <TreatmentCategories />
      <TreatmentDetailCards />
    </section>
  )
}
