import { siteConfig } from '../config/siteConfig'

export function TrustIndicators() {
  return (
    <section aria-label="Trust indicators" className="border-y border-sage-900/10 bg-white/50 backdrop-blur-sm py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {siteConfig.trustIndicators.map((indicator) => (
          <div key={indicator.label}>
            <h3 className="text-3xl font-serif font-bold text-sage-900 mb-1">{indicator.value}</h3>
            <p className="text-sm font-medium text-sage-900/60 uppercase tracking-wider mb-1">{indicator.label}</p>
            {indicator.isDemo && (
              <span className="demo-badge" title="This figure is placeholder demo content — replace with your real business stats">
                Demo content
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
