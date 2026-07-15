'use client';
import SectionReveal from '@/components/ui/SectionReveal';

const diseases = [
  {
    name: 'Healthy Maize Leaf',
    abbr: 'HEALTHY',
    color: 'bg-emerald-50 border-emerald-200',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    iconBg: 'bg-emerald-100',
    icon: '🌿',
    symptoms: 'Uniform green color, firm texture, no lesions or streaks. Normal growth pattern visible along leaf veins.',
    impact: 'No yield impact. Continue routine monitoring and prevention practices.',
    confidence: '97%',
  },
  {
    name: 'Maize Streak Disease',
    abbr: 'MSD',
    color: 'bg-yellow-50 border-yellow-200',
    badgeColor: 'bg-yellow-100 text-yellow-700',
    iconBg: 'bg-yellow-100',
    icon: '🟡',
    symptoms: 'Narrow, pale yellow to white streaks running parallel to leaf veins. Stunted growth in severe cases.',
    impact: 'Can cause 10–100% yield loss depending on infection stage. Spread by leafhoppers.',
    confidence: '93%',
  },
  {
    name: 'Northern Corn Leaf Blight',
    abbr: 'NCLB',
    color: 'bg-orange-50 border-orange-200',
    badgeColor: 'bg-orange-100 text-orange-700',
    iconBg: 'bg-orange-100',
    icon: '🍂',
    symptoms: 'Long, cigar-shaped grayish-green to tan lesions (5–15 cm). Appears first on lower leaves, spreads upward.',
    impact: '30–50% yield reduction if infection occurs before tasseling. Spreads rapidly in humid conditions.',
    confidence: '94%',
  },
  {
    name: 'Common Rust',
    abbr: 'CR',
    color: 'bg-red-50 border-red-200',
    badgeColor: 'bg-red-100 text-red-700',
    iconBg: 'bg-red-100',
    icon: '🔴',
    symptoms: 'Oval to elongated reddish-brown pustules scattered across both leaf surfaces. Powdery texture when rubbed.',
    impact: 'Moderate severity. Early detection limits losses. Fungicide application highly effective.',
    confidence: '91%',
  },
];

export default function DiseasesSection() {
  return (
    <section id="diseases" className="section-pad bg-[#F2F2EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
            Supported Diseases
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-text leading-tight mb-4">
            Diseases AgriLens AI{' '}
            <span className="text-brand-green">Can Detect</span>
          </h2>
          <p className="text-brand-text-muted leading-relaxed">
            Trained on African disease datasets. More diseases and crops added with every update.
          </p>
          <p className="text-brand-text-muted text-xs mt-3">
            Current version achieves 91–97% accuracy on validation test sets for these classes. Real-world performance with farmer-submitted photos is being tested in our pilot cohort.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {diseases.map((d, i) => (
            <SectionReveal key={d.abbr} delay={i * 0.08}>
              <div className={`border rounded-2xl overflow-hidden bg-white hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ${d.color}`}>
                {/* Placeholder image */}
                <div className={`h-36 ${d.iconBg} flex flex-col items-center justify-center gap-2 relative`}>
                  <span className="text-5xl">{d.icon}</span>
                  {/* Replace with: <Image src="/images/diseases/[name].jpg" fill className="object-cover" alt={d.name} /> */}
                  <div className="absolute top-3 right-3">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${d.badgeColor}`}>
                      {d.abbr}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[10px] font-semibold bg-white/80 backdrop-blur-sm text-brand-green px-2 py-0.5 rounded-full border border-brand-green-mid">
                      AI: {d.confidence}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-brand-text text-sm mb-3 leading-snug">{d.name}</h3>
                  <div className="space-y-2.5">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted mb-1">Symptoms</div>
                      <p className="text-xs text-brand-text-muted leading-relaxed">{d.symptoms}</p>
                    </div>
                    <div className="h-px bg-gray-100" />
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted mb-1">Yield Impact</div>
                      <p className="text-xs text-brand-text-muted leading-relaxed">{d.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-10 text-center">
          <div className="inline-flex items-center gap-2.5 bg-brand-green-light border border-brand-green-mid rounded-full px-5 py-2.5">
            <span className="text-sm">🌾</span>
            <span className="text-sm font-medium text-brand-deep-green">
              Rice, Cassava, Tomato &amp; Pepper detection coming 2027–2028
            </span>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
