import { useState } from 'react'
import { X } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'

export function AnnouncementBar() {
  const [isDismissed, setIsDismissed] = useState(false)

  if (isDismissed || !siteConfig.announcementText.trim()) return null

  return (
    <div className="relative z-[60] bg-sage-900 text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-center gap-4 text-center">
        <p className="pr-6">{siteConfig.announcementText}</p>
        <button
          type="button"
          onClick={() => setIsDismissed(true)}
          aria-label="Dismiss announcement"
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 transition-colors"
        >
          <X size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
