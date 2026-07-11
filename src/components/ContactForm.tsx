import { useState, type ChangeEvent, type FormEvent } from 'react'
import { siteConfig } from '../config/siteConfig'

interface FormValues {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.message.trim()) errors.message = 'Please enter a message.'
  return errors
}

/**
 * Honest contact form: there is no backend, so submitting builds a
 * mailto: link pre-filled with the form contents and opens the
 * visitor's email client — it never pretends to submit to a server.
 */
export function ContactForm() {
  const [values, setValues] = useState<FormValues>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [wasSent, setWasSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      setWasSent(false)
      return
    }

    const subject = `Website enquiry from ${values.name}`
    const body = `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setWasSent(true)
  }

  const handleChange = (field: keyof FormValues) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((previous) => ({ ...previous, [field]: event.target.value }))
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate className="glass rounded-2xl p-8 space-y-5">
        <p className="text-xs text-sage-900/60 bg-sage-50 border border-sage-100 rounded-lg px-4 py-3">
          This demo form opens your email client with your message pre-filled — connect your own backend or form
          service (e.g. Formspree, Netlify Forms) after purchase for direct server-side submission.
        </p>

        <div role="alert" aria-live="polite">
          {Object.keys(errors).length > 0 && (
            <p className="text-sm font-medium text-red-600">Please fix the highlighted fields below.</p>
          )}
          {wasSent && Object.keys(errors).length === 0 && (
            <p className="text-sm font-medium text-sage-500">Your email client should now be open with your message ready to send.</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-sage-900 mb-1.5">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            value={values.name}
            onChange={handleChange('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-white/50 focus-visible:ring-2 focus-visible:ring-sage-500"
          />
          {errors.name && (
            <p id="contact-name-error" role="alert" className="text-sm text-red-600 mt-1">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-sage-900 mb-1.5">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            value={values.email}
            onChange={handleChange('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-white/50 focus-visible:ring-2 focus-visible:ring-sage-500"
          />
          {errors.email && (
            <p id="contact-email-error" role="alert" className="text-sm text-red-600 mt-1">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-sage-900 mb-1.5">
            Message
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={values.message}
            onChange={handleChange('message')}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-white/50 focus-visible:ring-2 focus-visible:ring-sage-500"
          />
          {errors.message && (
            <p id="contact-message-error" role="alert" className="text-sm text-red-600 mt-1">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-sage-900 text-white px-5 py-3.5 rounded-xl font-semibold hover:bg-sage-500 transition-colors shadow-md"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
