'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionReveal from '@/components/ui/SectionReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const stats = [
  {
    value: 11,
    suffix: 'M+',
    unit: 'Metric Tonnes',
    label: 'of maize produced annually in Nigeria. This makes Nigeria one of Sub-Saharan Africa\'s largest maize producers.',
    icon: '🌽',
    color: 'text-brand-green',
    bg: 'bg-brand-green-light',
    border: 'border-brand-green/20',
  },
  {
    value: 80,
    suffix: '%+',
    unit: 'of Nigerian Farmers',
    label: 'are smallholders. They form the backbone of national food production and are the farmers AgriLens AI is built to serve.',
    icon: '👨‍🌾',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
  {
    value: 3,
    suffix: '+',
    unit: 'Major Diseases',
    label: 'threaten maize yields across Nigeria every season. MSD, NCLB, and Common Rust cause significant losses when not detected early.',
    icon: '🔬',
    color: 'text-red-500',
    bg: 'bg-red-50',
    border: 'border-red-200',
  },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${stat.bg} border ${stat.border} rounded-2xl p-8 overflow-hidden group hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300`}
    >
      {/* Watermark icon */}
      <div className="absolute -right-2 -bottom-2 text-8xl opacity-[0.07] pointer-events-none select-none">
        {stat.icon}
      </div>
      <div className="relative z-10">
        <div className="text-3xl mb-5">{stat.icon}</div>
        <div className={`font-display font-black text-5xl lg:text-6xl ${stat.color} leading-none mb-1`}>
          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
        </div>
        <div className={`font-bold text-sm ${stat.color} mb-3 uppercase tracking-widest`}>
          {stat.unit}
        </div>
        <p className="text-brand-text-muted text-sm leading-relaxed">
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
}

export default function MaizeMattersSection() {
  return (
    <section id="maize-matters" className="section-pad bg-brand-bg relative overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #2E7D32 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
          <SectionReveal>
            <div className="text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
              Market Context
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-text leading-tight">
              Why Protecting Maize{' '}
              <span className="text-brand-green">Matters</span>
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <p className="text-brand-text-muted text-base leading-relaxed border-l-4 border-brand-green-mid pl-6">
              Maize is one of Africa&apos;s most important food crops and a primary source of income for millions of smallholder farmers. Diseases such as Maize Streak Disease, Northern Corn Leaf Blight, and Common Rust continue to threaten yields and food security when not detected early. This is why early detection tools are not optional. They are essential.
            </p>
          </SectionReveal>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {stats.map((stat, i) => (
            <StatCard key={stat.unit} stat={stat} index={i} />
          ))}
        </div>

        {/* Bottom callout */}
        <SectionReveal>
          <div className="bg-brand-deep-green rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="text-3xl flex-shrink-0">🌍</div>
            <p className="text-white/75 text-sm leading-relaxed">
              <span className="text-white font-semibold">Smallholder farmers produce most of the food consumed across Nigeria.</span>{' '}
              Early disease detection is critical for farmer livelihoods, national food security, and the long-term health of Africa&apos;s agricultural sector.
            </p>
            <a
              href="#product"
              className="flex-shrink-0 bg-brand-gold text-[#111] font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-brand-gold-dark transition-colors whitespace-nowrap"
            >
              See the Solution →
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
