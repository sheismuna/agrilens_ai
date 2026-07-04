'use client';
import SectionReveal from '@/components/ui/SectionReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const insights = [
  {
    value: 100,
    suffix: '%',
    headline: 'Demand Validated',
    label: 'Farmers confirmed they would use a faster, more reliable disease detection tool if it were simple enough to use on their phone.',
    icon: '✅',
  },
  {
    value: 78,
    suffix: '%',
    headline: 'Misdiagnosis Risk Identified',
    label: 'Reported having confused one disease for another, applying the wrong treatment and losing money and yield as a direct result.',
    icon: '⚠️',
  },
  {
    value: 89,
    suffix: '%',
    headline: 'Smartphone Readiness Confirmed',
    label: 'Already own a smartphone capable of running AgriLens AI. The distribution channel exists right now, in farmers\' pockets.',
    icon: '📱',
  },
];

const testimonials = [
  {
    quote: 'I lost half my maize to NCLB last year because I thought it was just dry season stress. If I had known earlier, I could have saved the whole farm.',
    name: 'Aliyu Ibrahim',
    role: 'Smallholder Farmer, Kaduna State',
    initials: 'AI',
  },
  {
    quote: 'The extension officer comes once a month if we\'re lucky. By the time he arrives, the disease has spread to the whole field. I need help when I need it, not when he has time.',
    name: 'Fatima Kwara',
    role: 'Cooperative Farmer, Niger State',
    initials: 'FK',
  },
  {
    quote: 'I bought the wrong chemical twice. The shopkeeper did not know what disease it was either. If I had something that could just tell me the right answer, it would change everything for us.',
    name: 'Emmanuel Okafor',
    role: 'Maize Farmer, Benue State',
    initials: 'EO',
  },
];

export default function TractionSection() {
  return (
    <section id="traction" className="section-pad bg-[#F2F2EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
            Discovery Research
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-text leading-tight mb-4">
            Built From Real{' '}
            <span className="text-brand-green">Farmer Insights</span>
          </h2>
          <p className="text-brand-text-muted leading-relaxed">
            Before building, we listened. Every product decision is grounded in direct field validation research with smallholder farmers across Nigeria.
          </p>
          <div className="mt-4 inline-block bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold px-4 py-2 rounded-full">
            Early Product Discovery Research · AgriLens AI, 2025
          </div>
        </SectionReveal>

        {/* Insight metric cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {insights.map((ins, i) => (
            <SectionReveal key={ins.headline} delay={i * 0.1}>
              <div className="bg-white border border-brand-border rounded-2xl p-7 hover:shadow-card-hover transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{ins.icon}</span>
                  <div className="text-4xl font-display font-black text-brand-green">
                    <AnimatedCounter value={ins.value} suffix={ins.suffix} />
                  </div>
                </div>
                <h3 className="font-bold text-brand-text text-base mb-2">{ins.headline}</h3>
                <p className="text-brand-text-muted text-sm leading-relaxed">{ins.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Testimonials */}
        <SectionReveal className="mb-6">
          <div className="text-center">
            <h3 className="font-display font-bold text-2xl text-brand-text mb-1">What Farmers Told Us</h3>
            <p className="text-brand-text-muted text-sm">Representative quotes from product discovery interviews</p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <SectionReveal key={t.name} delay={i * 0.1}>
              <div className="bg-white border border-brand-border border-l-4 border-l-brand-green rounded-2xl p-6 hover:shadow-card-hover transition-all h-full flex flex-col">
                {/* Quote mark */}
                <div className="text-4xl font-display text-brand-green-mid leading-none mb-3">&ldquo;</div>
                <p className="text-brand-text text-sm leading-relaxed italic flex-1 mb-5">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-green-light flex items-center justify-center flex-shrink-0 font-bold text-brand-green text-xs">
                    {/* Replace with: <Image src="/images/farmers/[name].jpg" fill className="object-cover rounded-full" alt={t.name} /> */}
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brand-text">{t.name}</div>
                    <div className="text-xs text-brand-text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
