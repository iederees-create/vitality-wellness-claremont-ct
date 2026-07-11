import { Phone } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'

interface TelephoneCTAProps {
  className?: string
  showIcon?: boolean
}

/** Config-driven `tel:` link built from `siteConfig.phone`. */
export function TelephoneCTA({ className = '', showIcon = true }: TelephoneCTAProps) {
  const digitsOnly = siteConfig.phone.replace(/[^\d+]/g, '')

  return (
    <a href={`tel:${digitsOnly}`} className={className}>
      {showIcon && <Phone size={16} aria-hidden="true" />}
      <span>{siteConfig.phone}</span>
    </a>
  )
}
