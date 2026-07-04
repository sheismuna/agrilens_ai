'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionReveal from '@/components/ui/SectionReveal';

const milestones = [
  {
    year: '2026',
    title: 'Nigeria: Maize',
    status: 'current',
    desc: 'Launch AI disease detection for maize. Pilot with farmer cooperatives across Northern and Middle Belt Nigeria.',
    crops: ['🌽 Maize'],
    details: ['4 disease classes', 'Voice in 4 languages', 'Offline-first', 'Institutional dashboard'],
  },
  {
    year: '2027',
    title: 'Rice + Cassava',
    status: 'upcoming',
    desc: 'Expand crop coverage and deepen language support. Integrate with NGO extension programs across West Africa.',
    crops: ['🌾 Rice', '🥔 Cassava'],
    details: ['New disease models', 'More local languages', 'NGO partnerships', 'Data export tools'],
  },
  {
    year: '2028',
    title: 'Tomato + Pepper',
    status: 'planned',
    desc: 'Add high-value vegetable crops. Launch outbreak monitoring dashboards for governments and cooperatives.',
    crops: ['🍅 Tomato', '🫑 Pepper'],
    details: ['High-value crops', 'Outbreak alerts', 'Government dashboards', 'Regional analytics'],
  },
  {
    year: '2030',
    title: 'Africa-Wide Platform',
    status: 'vision',
    desc: 'Pan-African Crop Intelligence Network serving governments, NGOs, cooperatives, and 10 million+ farmers.',
    crops: ['🌍 All major crops'],
    details: ['10M+ farmers', 'Multi-country', 'Policy intelligence', 'Food security data'],
  },
];

const statusConfig = {
  current: { dot: 'bg-brand-green shadow-glow-green', label: 'Live 2026', labelColor: 'bg-brand-green-light text-brand-green border-brand-green-mid' },
  upcoming: { dot: 'bg-brand-gold', label: 'Roadmap 2027', labelColor: 'bg-amber-50 text-amber-700 border-amber-200' },
  planned:  { dot: 'bg-sky-400',    label: 'Planned 2028', labelColor: 'bg-sky-50 text-sky-700 border-sky-200' },
  vision:   { dot: 'bg-purple-400', label: 'Vision 2030',  labelColor: 'bg-purple-50 text-purple-700 border-purple-200' },
};

function TimelineItem({ milestone, index }: { milestone: typeof milestones[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const cfg = statusConfig[milestone.status as keyof typeof statusConfig];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Connector line */}
      {index < milestones.length - 1 && (
        <div className="hidden lg:block absolute top-7 left-[calc(100%-8px)] w-[calc(100%-16px)] h-0.5 bg-gradient-to-r from-brand-border to-brand-border z-0" />
      )}

      <div className="relative z-10 bg-white border border-brand-border rounded-2xl p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
        {/* Dot */}
        <div className={`w-4 h-4 rounded-full ${cfg.dot} mb-4 ring-4 ring-white`} />

        {/* Year + status */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="font-display font-black text-3xl text-brand-text">{milestone.year}</span>
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${cfg.labelColor}`}>
            {cfg.label}
          </span>
        </div>

        <h3 className="font-semibold text-brand-text text-base mb-2">{milestone.title}</h3>
        <p className="text-brand-text-muted text-sm leading-relaxed mb-4">{milestone.desc}</p>

        {/* Crops */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {milestone.crops.map((c) => (
            <span key={c} className="text-xs font-semibold bg-brand-green-light text-brand-deep-green px-2.5 py-1 rounded-full">
              {c}
            </span>
          ))}
        </div>

        {/* Details */}
        <ul className="space-y-1.5">
          {milestone.details.map((d) => (
            <li key={d} className="flex items-center gap-2 text-xs text-brand-text-muted">
              <span className="w-1 h-1 rounded-full bg-brand-green flex-shrink-0" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="section-pad bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
            Expansion Roadmap
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-text leading-tight mb-4">
            Feeding Africa Starts With{' '}
            <span className="text-brand-green">Protecting Farmers</span>
          </h2>
          <p className="text-brand-text-muted leading-relaxed">
            A deliberate, focused expansion. We are proving deep impact in maize before scaling to the crops that feed a continent.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {milestones.map((m, i) => (
            <TimelineItem key={m.year} milestone={m} index={i} />
          ))}
        </div>

        <SectionReveal className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-brand-border rounded-2xl px-6 py-4 shadow-card">
            <span className="text-2xl">🌍</span>
            <p className="text-sm text-brand-text-muted max-w-sm text-left">
              <span className="font-semibold text-brand-text">Long-term vision:</span> Africa's first continent-wide Crop Health Intelligence Network, connecting 10M+ farmers by 2030.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
