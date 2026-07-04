'use client';
import SectionReveal from '@/components/ui/SectionReveal';

const partners = [
  {
    icon: '🌱',
    title: 'Agrochemical & Seed Companies',
    desc: 'Explore opportunities to improve disease management and farmer recommendations through collaborative field testing.',
  },
  {
    icon: '🤝',
    title: 'NGOs & Farmer Cooperatives',
    desc: 'Support farmers with accessible disease detection tools and contribute to real-world validation efforts.',
  },
  {
    icon: '🏛️',
    title: 'Government & Extension Services',
    desc: 'Evaluate how AI-powered crop health tools can strengthen disease monitoring and farmer support programs.',
  },
  {
    icon: '📊',
    title: 'Agricultural Finance & Insurance',
    desc: 'Explore future applications of crop health data for risk assessment and farmer support initiatives.',
  },
];

export default function PartnershipsSection() {
  return (
    <section id="partnerships" className="section-pad bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
            Partnerships
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-text leading-tight mb-4">
            Partner With <span className="text-brand-green">AgriLens AI</span>
          </h2>
          <p className="text-brand-text-muted leading-relaxed">
            AgriLens AI is designed to work alongside organizations that support farmers. We welcome partnerships with agricultural companies, NGOs, cooperatives, researchers, and government institutions working to improve crop health and food security.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {partners.map((p, i) => (
            <SectionReveal key={p.title} delay={i * 0.08}>
              <div className="h-full bg-white border border-brand-border rounded-2xl p-7 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-brand-green-light rounded-2xl flex items-center justify-center text-2xl mb-5 border border-brand-green-mid">
                  {p.icon}
                </div>
                <h3 className="font-semibold text-brand-text text-base mb-2.5">{p.title}</h3>
                <p className="text-brand-text-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
