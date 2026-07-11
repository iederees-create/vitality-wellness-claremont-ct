interface PlaceholderImageProps {
  alt: string
  gradientFrom: string
  gradientTo: string
  className?: string
  loading?: 'lazy' | 'eager'
}

/**
 * Renders a genuine <img> (an inline SVG gradient data URI) standing in
 * for real photography, so `loading="lazy"` behaves like it would for a
 * real photo. Buyers swap the `src` for their own image once available.
 */
export function PlaceholderImage({
  alt,
  gradientFrom,
  gradientTo,
  className = '',
  loading = 'lazy',
}: PlaceholderImageProps) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><defs><linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='${gradientFrom}'/><stop offset='100%' stop-color='${gradientTo}'/></linearGradient></defs><rect width='400' height='400' fill='url(%23g)'/></svg>`
  const src = `data:image/svg+xml,${encodeURIComponent(svg)}`

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      className={`object-cover w-full h-full ${className}`}
    />
  )
}
