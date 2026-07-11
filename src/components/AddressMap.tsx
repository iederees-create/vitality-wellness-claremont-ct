import { MapPin } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'

export function AddressMap() {
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="flex items-center gap-2 font-serif font-semibold text-lg text-sage-900 mb-4">
        <MapPin size={18} className="text-sage-500" aria-hidden="true" /> Find Us
      </h3>
      <address className="not-italic text-sm text-sage-900/70 mb-4">
        {siteConfig.address.line1}
        <br />
        {siteConfig.address.line2}
        <br />
        {siteConfig.address.country}
      </address>
      <div
        role="img"
        aria-label="Map placeholder — replace with your Google Maps embed"
        className="aspect-video rounded-xl bg-sage-100 flex items-center justify-center text-center px-4"
      >
        <span className="text-xs font-medium text-sage-900/50 uppercase tracking-wider">
          Map placeholder — replace with your Google Maps embed
        </span>
      </div>
    </div>
  )
}
