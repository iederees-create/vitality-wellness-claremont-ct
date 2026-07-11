import { useState, type FormEvent } from 'react'
import { Mail } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'

/**
 * Same honesty rule as ContactForm: there is no real newsletter backend
 * here, so this opens a mailto: signup request instead of claiming to
 * subscribe the visitor to anything.
 */
export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email.trim()) return
    const subject = 'Newsletter signup request'
    const body = `Please add ${email} to the wellness tips newsletter.`
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="newsletter" className="py-16 px-6 max-w-2xl mx-auto text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sage-100 mb-4">
        <Mail className="text-sage-500" size={20} aria-hidden="true" />
      </div>
      <h2 className="text-2xl md:text-3xl font-serif font-semibold text-sage-900 mb-2">{siteConfig.newsletter.heading}</h2>
      <p className="text-sage-900/70 mb-6">{siteConfig.newsletter.subheading}</p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="flex-1 px-4 py-3 rounded-xl border border-sage-200 bg-white/50 focus-visible:ring-2 focus-visible:ring-sage-500"
        />
        <button
          type="submit"
          className="bg-sage-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-sage-500 transition-colors shadow-md"
        >
          Sign Up
        </button>
      </form>
      <p className="text-xs text-sage-900/50 mt-4">
        This demo signup opens an email request — add your own newsletter provider (Mailchimp, ConvertKit, etc.) after
        purchase for real subscriber management.
      </p>
    </section>
  )
}
