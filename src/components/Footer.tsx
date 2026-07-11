import { Leaf, Instagram, Facebook } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import { TelephoneCTA } from './TelephoneCTA'

const FOOTER_LINKS = [
  { href: '#treatments', label: 'Treatments' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

const LEGAL_LINKS = [
  { href: 'privacy.html', label: 'Privacy Policy' },
  { href: 'terms.html', label: 'Terms of Service' },
  { href: 'disclaimer.html', label: 'Disclaimer' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-sage-900 text-cream-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Leaf className="text-sage-500" size={20} aria-hidden="true" />
            <span className="font-serif font-semibold text-lg">{siteConfig.businessName}</span>
          </div>
          <p className="text-sm text-cream-50/70 mb-4">{siteConfig.description}</p>
          <div className="flex items-center gap-3">
            {siteConfig.socialLinks.instagram && (
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Instagram size={16} aria-hidden="true" />
              </a>
            )}
            {siteConfig.socialLinks.facebook && (
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Facebook size={16} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-cream-50/60">Explore</h3>
          <ul className="space-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-cream-50/80 hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-cream-50/60">Legal</h3>
          <ul className="space-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-cream-50/80 hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-cream-50/60">Contact</h3>
          <ul className="space-y-2 text-sm text-cream-50/80">
            <li>
              <TelephoneCTA className="hover:text-white transition-colors inline-flex items-center gap-2" />
            </li>
            <li>{siteConfig.email}</li>
            {siteConfig.hours.slice(0, 1).map((entry) => (
              <li key={entry.day}>
                {entry.day}: {entry.hours}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm text-cream-50/60">&copy; {year} {siteConfig.businessName}. All rights reserved.</p>
        <p className="text-xs text-cream-50/40 max-w-xl text-center md:text-right">{siteConfig.disclaimerText}</p>
      </div>
    </footer>
  )
}
