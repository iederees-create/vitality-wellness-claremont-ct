import { Calendar } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'

interface BookingCTAProps {
  label?: string
  className?: string
  showIcon?: boolean
}

/**
 * Config-driven booking button. Links to `siteConfig.bookingUrl` (an
 * external booking platform like Calendly/Fresha/Booksy) when set,
 * otherwise falls back to a mailto: enquiry — never a fake "submit".
 */
export function BookingCTA({ label = 'Book a Consultation', className = '', showIcon = true }: BookingCTAProps) {
  const hasExternalBooking = siteConfig.bookingUrl.trim().length > 0
  const href = hasExternalBooking
    ? siteConfig.bookingUrl
    : `mailto:${siteConfig.email}?subject=${encodeURIComponent('Consultation Request')}&body=${encodeURIComponent(
        `Hi ${siteConfig.businessName}, I'd like to book a consultation.`,
      )}`

  return (
    <a
      href={href}
      target={hasExternalBooking ? '_blank' : undefined}
      rel={hasExternalBooking ? 'noopener noreferrer' : undefined}
      className={className}
    >
      {showIcon && <Calendar size={16} aria-hidden="true" />}
      <span>{label}</span>
    </a>
  )
}
