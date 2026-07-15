'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionReveal from '@/components/ui/SectionReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const stats = [
  {
    value: 24,
    suffix: '+',
    label: 'Farmers Interviewed',
    desc: 'Smallholder maize farmers across Kaduna, Niger, Kano, and Benue States',
    icon: '👨‍🌾',
    color: 'from-brand-green/10 to-brand-green/5',
    border: 'border-brand-green/20',
    numColor: 'text-brand-green',
  },
  {
    value: 8,
    suffix: '+',
    label: 'Extension Officers Consulted',
    desc: 'State agricultural development program officers providing field-level validation',
    icon: '🧑‍💼',
    color: 'from-amber-500/10 to-amber-500/5',
    border: 'border-amber-400/25',
    numColor: 'text-amber-600',
  },
  {
    value: 30,
    suffix: '+',
    label: 'Research Papers Reviewed',
    desc: 'Peer-reviewed literature on maize disease detection, AI diagnostics, and African agtech',
    icon: '📄',
    color: 'from-sky-500/10 to-sky-500/5',
    border: 'border-sky-400/25',
    numColor: 'text-sky-600',
  },
  {
    value: 4,
    suffix: '',
    label: 'Diseases Researched',
    desc: 'MSD, NCLB, Common Rust, and Healthy leaf. Broader crop coverage is planned for 2027 and beyond.',
    icon: '🔬',
    color: 'from-purple-500/10 to-purple-500/5',
    border: 'border-purple-400/25',
    numColor: 'text-purple-600',
  },
];

const insights = [
  {
    finding: 'Farmers can\'t differentiate diseases visually',
    impact: 'Drove the need for precise AI classification over simple detection',
  },
  {
    finding: 'Treatment advice arrives too late to act',
    impact: 'Shaped our roadmap toward offline support and instant-response design',
  },
  {
    finding: 'Literacy and language are real barriers',
    impact: 'Led to text guidance in Hausa, Yoruba, Igbo, and English, with voice playback rolling out language by language',
  },
  {
    finding: 'Farmers trust specificity over generality',
    impact: 'Resulted in product-specific, dosage-precise treatment plans',
  },
];

const problemStats = [
  { value: 85, suffix: '%', label: 'Have confused one maize disease for another' },
  { value: 60, suffix: '%', label: 'Applied the wrong chemical due to misidentification' },
  { value: 60, suffix: '%', label: 'Have no access to an extension officer or agronomist' },
  { display: '1\u20133+ days', label: 'Typical wait time for advice while disease spreads' },
];

const opportunityStats = [
  { value: 85, suffix: '%', label: 'Already own a smartphone' },
  { value: 95, suffix: '%', label: 'Use WhatsApp daily' },
  { value: 90, suffix: '%', label: 'Would use a tool that identifies disease from a photo' },
  { value: 95, suffix: '%+', label: 'Said such a tool would be "very helpful"' },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative bg-gradient-to-br ${stat.color} border ${stat.border} rounded-2xl p-7 overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}
    >
      {/* Background watermark */}
      <div className="absolute -right-3 -bottom-3 text-7xl opacity-[0.06] pointer-events-none select-none">
        {stat.icon}
      </div>

      <div className="relative z-10">
        <div className="text-2xl mb-4">{stat.icon}</div>
        <div className={`font-display font-black text-5xl ${stat.numColor} mb-1 leading-none`}>
          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
        </div>
        <div className="font-semibold text-brand-text text-base mb-2">{stat.label}</div>
        <p className="text-brand-text-muted text-sm leading-relaxed">{stat.desc}</p>
      </div>
    </motion.div>
  );
}

export default function BuiltWithFarmersSection() {
  return (
    <section id="built-with-farmers" className="section-pad bg-brand-bg relative overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: 'linear-gradient(#2E7D32 1px, transparent 1px), linear-gradient(90deg, #2E7D32 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          <SectionReveal>
            <div className="text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
              Discovery Research
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-text leading-tight mb-5">
              Built <span className="text-brand-green">With</span> Farmers,<br />
              Not Just <span className="text-brand-green">For</span> Them
            </h2>
            <p className="text-brand-text-muted text-lg leading-relaxed">
              Every feature in AgriLens AI is shaped by real conversations, field research, and direct farmer feedback. Nothing was built on assumptions.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="bg-white border border-brand-border rounded-2xl p-7 shadow-card">
              <div className="text-xs font-bold uppercase tracking-widest text-brand-text-muted mb-4">Research Methodology</div>
              <p className="text-brand-text text-sm leading-relaxed mb-5">
                Before designing AgriLens AI, we conducted product discovery interviews with maize farmers and agricultural stakeholders across Nigeria to understand how diseases are identified, how treatment decisions are made, and the barriers farmers face when accessing timely agricultural advice.
              </p>
              <p className="text-brand-text-muted text-sm leading-relaxed">
                These insights revealed that many farmers rely on visual guesswork, struggle to differentiate diseases, and often receive treatment guidance too late. In many cases, they receive no guidance at all. These findings directly shaped every design decision in AgriLens AI.
              </p>
              <div className="mt-5 pt-5 border-t border-brand-border flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-green" />
                <span className="text-xs font-semibold text-brand-green">Early Product Discovery Research · Nigeria, 2025</span>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Key insights: what we found, what we built */}
        <SectionReveal>
          <div className="bg-brand-deep-green rounded-3xl p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2">Key Research Insights</div>
              <h3 className="font-display font-bold text-2xl text-white">What We Heard → What We Built</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {insights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/[0.06] border border-white/[0.1] rounded-2xl p-5 flex gap-4"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-full bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center">
                      <span className="text-brand-gold text-xs font-black">{i + 1}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">We heard:</div>
                    <div className="text-white text-sm font-semibold mb-2">&ldquo;{item.finding}&rdquo;</div>
                    <div className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-1">We built:</div>
                    <div className="text-brand-gold/80 text-sm">{item.impact}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Our Research: What Farmers Told Us */}
        <SectionReveal className="mt-16 mb-8">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-green mb-2">Our Research</div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-brand-text mb-2">What Farmers Told Us</h3>
            <p className="text-brand-text-muted text-sm max-w-2xl mx-auto">
              We surveyed 20+ maize farmers across Nigeria (Kaduna, Kano, Taraba, Adamawa, Gombe, Benue, and other states) via Google Forms to understand the problem space.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <SectionReveal delay={0.1}>
            <div className="bg-white border border-brand-border rounded-2xl p-7 h-full">
              <div className="text-xs font-bold uppercase tracking-widest text-red-500 mb-5">The Core Problem</div>
              <div className="grid grid-cols-2 gap-5">
                {problemStats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display font-black text-3xl text-brand-text mb-1">
                      {'value' in s ? <AnimatedCounter value={s.value as number} suffix={s.suffix} /> : s.display}
                    </div>
                    <p className="text-brand-text-muted text-xs leading-relaxed">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="bg-white border border-brand-border rounded-2xl p-7 h-full">
              <div className="text-xs font-bold uppercase tracking-widest text-brand-green mb-5">The Opportunity</div>
              <div className="grid grid-cols-2 gap-5">
                {opportunityStats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display font-black text-3xl text-brand-green mb-1">
                      <AnimatedCounter value={s.value} suffix={s.suffix} />
                    </div>
                    <p className="text-brand-text-muted text-xs leading-relaxed">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.3}>
          <div className="bg-brand-deep-green rounded-2xl p-6 sm:p-7 text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2">What Farmers Want Most</div>
            <p className="text-white text-base sm:text-lg font-medium">
              &ldquo;Knowing the disease and the right treatment&rdquo;, with step-by-step application instructions.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
