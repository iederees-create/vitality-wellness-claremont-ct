import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { BookingCTA } from './BookingCTA'

export interface NavLink {
  href: string
  label: string
}

interface MobileMenuProps {
  id: string
  isOpen: boolean
  onClose: () => void
  links: NavLink[]
}

/**
 * Accessible mobile navigation panel: closable via Escape or an outside
 * click, and moves focus into the panel when it opens. Pair with a toggle
 * button that sets `aria-expanded` and `aria-controls={id}` (see Navbar.tsx).
 */
export function MobileMenu({ id, isOpen, onClose, links }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!isOpen) return

    firstLinkRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      <div className="absolute inset-0 bg-sage-900/30 backdrop-blur-sm" aria-hidden="true" />
      <div
        ref={panelRef}
        id={id}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-cream-50 shadow-2xl p-6 flex flex-col gap-6"
      >
        <div className="flex items-center justify-between">
          <span className="font-serif font-semibold text-lg text-sage-900">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded-full hover:bg-sage-100 transition-colors"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {links.map((link, index) => (
            <a
              key={link.href}
              ref={index === 0 ? firstLinkRef : undefined}
              href={link.href}
              onClick={onClose}
              className="px-3 py-3 rounded-lg text-base font-medium text-sage-900 hover:bg-sage-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <BookingCTA
          className="mt-auto bg-sage-900 text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-sage-500 transition-colors shadow-md flex items-center justify-center gap-2"
        />
      </div>
    </div>
  )
}
