import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Leaf, Menu } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import { BookingCTA } from './BookingCTA'
import { MobileMenu, type NavLink } from './MobileMenu'
import { useFadeUp } from '../hooks/useMotionPreset'

const NAV_LINKS: NavLink[] = [
  { href: '#treatments', label: 'Treatments' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'Process' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

const MOBILE_MENU_ID = 'mobile-nav-menu'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { variants, transition } = useFadeUp(0)
  const menuToggleRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => {
    setIsMenuOpen(false)
    menuToggleRef.current?.focus()
  }

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={transition}
        className="sticky top-0 z-50 glass"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <Leaf className="text-sage-500" size={24} aria-hidden="true" />
            <span className="font-serif font-semibold text-xl tracking-wide text-sage-900">
              {siteConfig.businessName}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-sage-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <BookingCTA
              label="Book Online"
              className="bg-sage-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-sage-500 transition-colors shadow-md flex items-center gap-2"
            />
          </div>

          <button
            ref={menuToggleRef}
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-expanded={isMenuOpen}
            aria-controls={MOBILE_MENU_ID}
            aria-label="Open menu"
            className="md:hidden p-2 rounded-full hover:bg-sage-100 transition-colors"
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </motion.nav>

      <MobileMenu id={MOBILE_MENU_ID} isOpen={isMenuOpen} onClose={closeMenu} links={NAV_LINKS} />
    </>
  )
}
