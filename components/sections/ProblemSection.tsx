'use client';
import SectionReveal from '@/components/ui/SectionReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const stats = [
  {
    value: 100,
    suffix: '%',
    label: 'Most farmers diagnose diseases through visual guesswork alone. They have no access to tools, AI support, or timely expert advice.',
    source: 'Early Product Discovery Research, AgriLens AI',
    color: 'from-amber-400 to-amber-600',
  },
  {
    value: 78,
    suffix: '%',
    label: 'Have confused one disease for another, leading to incorrect treatment and yield loss.',
    source: 'Early Product Discovery Research, AgriLens AI',
    color: 'from-orange-400 to-red-500',
  },
  {
    value: 89,
    suffix: '%',
    label: 'Already own smartphones capable of running AgriLens AI. The distribution channel exists in farmers\' pockets right now.',
    source: 'Early Product Discovery Research, AgriLens AI',
    color: 'from-brand-green to-brand-deep-green',
  },
];

const painPoints = [
  {
    icon: '⏱',
    title: 'Help Arrives Too Late',
    desc: 'Disease outbreaks spread for days before extension officers can respond. By the time help arrives, the damage is often irreversible.',
  },
  {
    icon: '👤',
    title: 'Extension Officers Are Stretched',
    desc: 'One officer typically serves hundreds of farmers. Most farmers wait weeks for advice that should take minutes.',
  },
  {
    icon: '💸',
    title: 'Wrong Chemicals Waste Money',
    desc: 'Misidentified diseases lead to incorrect chemical purchases, compounding losses that most smallholder farmers cannot recover from.',
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="section-pad bg-brand-deep-green relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
            The Problem
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            Farmers Are Losing Harvests Because Help Arrives Too Late
          </h2>
          <p className="text-white/60 text-base leading-relaxed">
            Many farmers identify diseases through guesswork, receive advice too late, and apply the wrong treatments. The result is crop losses, wasted money, and reduced food security.
          </p>
        </SectionReveal>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {stats.map((stat, i) => (
            <SectionReveal key={stat.value} delay={i * 0.1}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 transition-colors">
                <div className={`text-5xl font-display font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/75 text-sm leading-relaxed mb-3">{stat.label}</p>
                <p className="text-white/30 text-xs italic">{stat.source}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Pain points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {painPoints.map((pt, i) => (
            <SectionReveal key={pt.title} delay={0.3 + i * 0.1}>
              <div className="flex items-start gap-4 bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6">
                <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  {pt.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1.5">{pt.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{pt.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
