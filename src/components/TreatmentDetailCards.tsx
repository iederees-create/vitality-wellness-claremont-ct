import { ChevronDown } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'

/**
 * Expandable per-treatment cards grouped by category. Uses native
 * <details>/<summary> so expand/collapse behavior and keyboard
 * accessibility come for free.
 */
export function TreatmentDetailCards() {
  return (
    <div className="space-y-14">
      {siteConfig.treatmentCategories.map((category, categoryIndex) => (
        <div key={category} id={`treatments-${categoryIndex}`}>
          <h3 className="text-2xl font-serif font-semibold text-sage-900 mb-6">{category}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {siteConfig.treatments
              .filter((treatment) => treatment.category === category)
              .map((treatment) => (
                <details key={treatment.id} className="group glass rounded-2xl p-6 open:shadow-lg transition-shadow">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-sage-900">
                    <span className="flex-1">{treatment.name}</span>
                    <span className="text-sm font-medium text-sage-500 whitespace-nowrap">
                      From {treatment.currency}
                      {treatment.priceFrom}
                    </span>
                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className="shrink-0 transition-transform group-open:rotate-180 text-sage-900/50"
                    />
                  </summary>
                  <p className="text-sm text-sage-900/70 mt-3 leading-relaxed">{treatment.description}</p>
                  {treatment.durationMins && (
                    <p className="text-xs text-sage-900/50 mt-3 uppercase tracking-wider">
                      Approx. {treatment.durationMins} minutes
                    </p>
                  )}
                </details>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}
