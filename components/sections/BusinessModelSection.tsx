'use client';
import SectionReveal from '@/components/ui/SectionReveal';

const tiers = [
  {
    name: 'Farmer Tier',
    price: 'Always Free',
    priceNote: 'No credit card · No data plan required',
    desc: 'Core tools in every farmer\'s pocket, completely free. No subscription, no hidden fees.',
    cta: 'Get Started Free',
    ctaStyle: 'border border-brand-border text-brand-text hover:border-brand-green hover:text-brand-green',
    featured: false,
    badge: null,
    features: [
      'AI disease detection (4 classes)',
      'Severity assessment',
      'Step-by-step treatment guidance',
      'Voice readout in 4 languages',
      'Offline-first mode',
      'Basic farm history',
    ],
  },
  {
    name: 'Institutional Tier',
    price: 'Custom',
    priceNote: 'Cooperatives · NGOs · Government agencies',
    desc: 'Our primary revenue stream. Built for the organizations that serve farmers at scale across Nigeria and beyond.',
    cta: 'Request Partnership',
    ctaStyle: 'bg-brand-gold text-[#111] hover:bg-brand-gold-dark font-bold',
    featured: true,
    badge: 'Primary Revenue',
    features: [
      'Regional disease outbreak mapping',
      'Outbreak monitoring & early alerts',
      'Farmer management dashboard',
      'Field impact reports & analytics',
      'Broadcast advisory system',
      'Data export & API access',
      'Dedicated onboarding & support',
      'Custom language/region config',
    ],
  },
  {
    name: 'Premium Farmer',
    price: '₦1000',
    priceNote: 'per month · Optional upgrade',
    desc: 'For farmers who want deeper insights and tracking.',
    cta: 'Upgrade to Premium',
    ctaStyle: 'border border-brand-border text-brand-text hover:border-brand-green hover:text-brand-green',
    featured: false,
    badge: null,
    features: [
      'Everything in Free tier',
      'Full disease history & tracking',
      'Treatment effectiveness graphs',
      'Advanced treatment plans',
      'Personalised farm recommendations',
      'Farm health summary reports',
    ],
  },
];

export default function BusinessModelSection() {
  return (
    <section id="pricing" className="section-pad bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
            Business Model
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-text leading-tight mb-4">
            Built for <span className="text-brand-green">Scale</span>
          </h2>
          <p className="text-brand-text-muted leading-relaxed">
            A freemium model that puts core tools in every farmer&apos;s pocket while generating sustainable institutional revenue through the organizations that serve them.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
          {tiers.map((tier, i) => (
            <SectionReveal key={tier.name} delay={i * 0.1}>
              <div className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                tier.featured
                  ? 'bg-brand-deep-green text-white ring-2 ring-brand-gold shadow-2xl scale-[1.02] lg:scale-105'
                  : 'bg-white border border-brand-border hover:shadow-card-hover hover:-translate-y-1'
              }`}>
                {tier.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-brand-gold text-[#111] text-[10px] font-black uppercase tracking-wider px-4 py-1.5 rounded-full whitespace-nowrap shadow-glow-gold">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="p-7 pt-8">
                  <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${tier.featured ? 'text-white/50' : 'text-brand-text-muted'}`}>
                    {tier.name}
                  </div>
                  <div className={`font-display font-black text-3xl mb-1 ${tier.featured ? 'text-white' : 'text-brand-text'}`}>
                    {tier.price}
                  </div>
                  <div className={`text-xs mb-4 ${tier.featured ? 'text-white/50' : 'text-brand-text-muted'}`}>
                    {tier.priceNote}
                  </div>
                  <p className={`text-sm leading-relaxed mb-6 ${tier.featured ? 'text-white/70' : 'text-brand-text-muted'}`}>
                    {tier.desc}
                  </p>

                  <div className={`h-px mb-6 ${tier.featured ? 'bg-white/10' : 'bg-brand-border'}`} />

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          tier.featured ? 'bg-brand-gold/20' : 'bg-brand-green-light'
                        }`}>
                          <span className={`text-[9px] font-black ${tier.featured ? 'text-brand-gold' : 'text-brand-green'}`}>✓</span>
                        </div>
                        <span className={`text-sm ${tier.featured ? 'text-white/80' : 'text-brand-text'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#cta"
                    className={`block text-center text-sm font-semibold py-3 px-6 rounded-xl transition-all ${tier.ctaStyle}`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Feature spotlight */}
        <SectionReveal className="mt-12">
          <div className="bg-brand-green-light border border-brand-green-mid rounded-2xl p-7 flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="w-12 h-12 bg-brand-green rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">📊</div>
            <div>
              <h3 className="font-semibold text-brand-deep-green text-base mb-1">Feature Spotlight: Disease Tracking Over Time</h3>
              <p className="text-brand-text-muted text-sm leading-relaxed max-w-2xl">
                Institutions can monitor disease trends across regions and receive early alerts before outbreaks escalate. This gives governments, cooperatives, and NGOs the data they need to respond quickly and protect food security at scale.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
