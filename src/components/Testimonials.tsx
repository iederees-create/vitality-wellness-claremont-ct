import { Star } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">
          Client <span className="italic text-sage-500">Reviews</span>
        </h2>
        <p className="text-sage-900/70 max-w-2xl mx-auto">
          The quotes below are fictional sample content written to illustrate this layout — not verified reviews.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {siteConfig.testimonials.map((testimonial) => (
          <figure key={testimonial.author} className="glass rounded-2xl p-6 flex flex-col">
            <div className="flex gap-0.5 mb-3" aria-label={`${testimonial.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  aria-hidden="true"
                  className={i < testimonial.rating ? 'fill-gold-500 text-gold-500' : 'text-sage-900/20'}
                />
              ))}
            </div>
            <blockquote className="text-sm text-sage-900/80 leading-relaxed flex-1 mb-4">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="text-sm font-semibold text-sage-900">
              {testimonial.author}
              {testimonial.location && <span className="font-normal text-sage-900/50"> · {testimonial.location}</span>}
            </figcaption>
            {testimonial.isFictional && <span className="demo-badge mt-3 w-fit">Fictional sample content</span>}
          </figure>
        ))}
      </div>
    </section>
  )
}
