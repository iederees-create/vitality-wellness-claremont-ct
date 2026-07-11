import { MessageCircle } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'

/**
 * Floating WhatsApp CTA. Builds a `https://wa.me/<digitsOnly>` link from
 * `siteConfig.whatsappNumber` so buyers only ever need to edit the config.
 */
export function WhatsAppCTA() {
  const digitsOnly = siteConfig.whatsappNumber.replace(/\D/g, '')
  if (!digitsOnly) return null

  const prefilledMessage = `Hi ${siteConfig.businessName}, I'd like to know more about your services.`
  const href = `https://wa.me/${digitsOnly}?text=${encodeURIComponent(prefilledMessage)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${siteConfig.businessName} on WhatsApp (opens in a new tab)`}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  )
}
