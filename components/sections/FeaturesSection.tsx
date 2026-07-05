'use client';
import SectionReveal from '@/components/ui/SectionReveal';

const features = [
  {
    icon: '🌍',
    title: 'Local Language Support',
    desc: 'Farmers receive full recommendations in Hausa, Yoruba, Igbo, or English. Language should never be a barrier to getting the right advice.',
    tags: ['Hausa', 'Yoruba', 'Igbo', 'English'],
  },
  {
    icon: '🎙️',
    title: 'Text-to-Speech Voice Guidance',
    desc: 'Text-based disease guidance is available in English, Hausa, Yoruba, Igbo, and Pidgin English. Voice playback (text-to-speech) is currently available for English and Pidgin English, with additional voice languages rolling out in upcoming releases.',
    tags: ['Hands-free', 'Expanding languages', 'Clear instructions'],
  },
  {
    icon: '📈',
    title: 'Disease Tracking Over Time',
    desc: "Scan the same plant repeatedly over days and weeks. AgriLens AI shows whether your treatment is working, symptoms are worsening, or the crop is recovering.",
    tags: ['Progress graphs', 'Treatment effectiveness', 'Historical scans'],
  },
  {
    icon: '💊',
    title: 'Advanced Treatment Plans',
    desc: 'No vague "apply fungicide" advice. Every plan includes the product name available locally, exact dosage, mixing instructions, application schedule, and safety precautions.',
    tags: ['Local product names', 'Exact dosages', 'Safety guidance'],
  },
  {
    icon: '🎯',
    title: 'Personalised Farm Recommendations',
    desc: 'Recommendations adapt based on the disease detected, severity level, location, crop stage, and past treatment history. The more you use it, the more relevant it becomes.',
    tags: ['Location-aware', 'Crop-stage adaptive', 'History-driven'],
  },
  {
    icon: '📡',
    title: 'Network Resilience — In Development',
    desc: 'The current version requires an internet connection for disease diagnosis. Offline capability is on our near-term roadmap, essential for the millions of African farmers in rural areas with limited connectivity.',
    tags: ['Rural-ready', 'On roadmap', 'Pilot farmers first'],
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section-pad bg-brand-deep-green relative overflow-hidden">
      {/* Decorative leaf */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[500px] opacity-[0.035] pointer-events-none">
        <svg viewBox="0 0 300 400" fill="white" className="w-full h-full">
          <path d="M150 380 Q20 280 30 140 Q40 20 150 10 Q260 20 270 140 Q280 280 150 380Z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
            Key Features
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            Technology Farmers{' '}
            <span className="text-brand-gold">Can Actually Use</span>
          </h2>
          <p className="text-white/60 leading-relaxed">
            Designed for farmers who may have low literacy, intermittent data, and limited experience with technology. Every feature is built around real farmer needs, not assumptions.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <SectionReveal key={f.title} delay={i * 0.08}>
              <div className="h-full bg-white/[0.05] border border-white/[0.09] rounded-2xl p-7 hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 group">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:bg-white/15 transition-colors">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-white text-base mb-2.5">{f.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5">{f.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {f.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold text-white/50 bg-white/[0.07] border border-white/[0.08] px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
