import { Clock } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'

export function BusinessHours() {
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="flex items-center gap-2 font-serif font-semibold text-lg text-sage-900 mb-4">
        <Clock size={18} className="text-sage-500" aria-hidden="true" /> Business Hours
      </h3>
      <dl className="space-y-2">
        {siteConfig.hours.map((entry) => (
          <div key={entry.day} className="flex items-center justify-between text-sm">
            <dt className="text-sage-900/70">{entry.day}</dt>
            <dd className="font-medium text-sage-900">{entry.hours}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
