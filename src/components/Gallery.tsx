import { siteConfig } from '../config/siteConfig'
import { PlaceholderImage } from './PlaceholderImage'

export function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">
          Studio <span className="italic text-sage-500">Gallery</span>
        </h2>
        <p className="text-sage-900/70 max-w-2xl mx-auto">
          Demo placeholder images — replace this gallery with your own studio and treatment photography.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {siteConfig.galleryItems.map((item) => (
          <PlaceholderImage
            key={item.alt}
            alt={item.alt}
            gradientFrom={item.gradientFrom}
            gradientTo={item.gradientTo}
            loading="lazy"
            className="aspect-square rounded-2xl"
          />
        ))}
      </div>
    </section>
  )
}
