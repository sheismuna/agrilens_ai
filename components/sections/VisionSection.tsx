'use client';
import { motion } from 'framer-motion';
import SectionReveal from '@/components/ui/SectionReveal';

const pillars = [
  {
    num: '01',
    title: 'Farmer Intelligence Layer',
    desc: 'Real-time, farm-level disease detection data that feeds into national crop health monitoring systems.',
  },
  {
    num: '02',
    title: 'Early Warning System',
    desc: 'Detect emerging disease outbreaks weeks before they spread. This gives governments and NGOs time to respond before a local problem becomes a regional crisis.',
  },
  {
    num: '03',
    title: 'Food Security Infrastructure',
    desc: 'A shared data platform used by African governments to plan agricultural policy and protect food sovereignty.',
  },
  {
    num: '04',
    title: 'Continental Scale',
    desc: 'Connect 10M+ farmers, hundreds of cooperatives, and dozens of government agencies across Africa by 2030.',
  },
];

// Simplified Africa SVG with dot markers
function AfricaMap() {
  const dots = [
    { cx: 148, cy: 140, label: '2026', active: true },
    { cx: 130, cy: 160, label: '2027', active: false },
    { cx: 165, cy: 155, label: '2028', active: false },
    { cx: 170, cy: 185, label: '2030', active: false },
    { cx: 140, cy: 195, label: '', active: false },
    { cx: 120, cy: 175, label: '', active: false },
    { cx: 155, cy: 210, label: '', active: false },
  ];

  return (
    <svg viewBox="0 80 280 280" className="w-full max-w-[280px] mx-auto" aria-label="Africa expansion map">
      {/* Africa outline, simplified */}
      <path
        d="M130 90 L165 88 L185 100 L200 125 L205 155 L200 180 L215 200 L218 230
           L210 255 L200 275 L188 295 L175 315 L158 330 L142 330 L126 315
           L113 295 L103 270 L95 245 L90 218 L87 192 L85 165 L82 140
           L87 115 L93 100 L110 92 Z"
        fill="none"
        stroke="#2E7D32"
        strokeWidth="1.5"
        opacity="0.25"
        strokeLinejoin="round"
      />
      {/* Fill */}
      <path
        d="M130 90 L165 88 L185 100 L200 125 L205 155 L200 180 L215 200 L218 230
           L210 255 L200 275 L188 295 L175 315 L158 330 L142 330 L126 315
           L113 295 L103 270 L95 245 L90 218 L87 192 L85 165 L82 140
           L87 115 L93 100 L110 92 Z"
        fill="#2E7D32"
        opacity="0.06"
        strokeLinejoin="round"
      />
      {/* Nigeria highlight */}
      <ellipse cx="148" cy="148" rx="20" ry="16" fill="#2E7D32" opacity="0.2" />
      {/* Dots */}
      {dots.map((d, i) => (
        <motion.g key={i} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.12 }}>
          {d.active && (
            <circle cx={d.cx} cy={d.cy} r="12" fill="#2E7D32" opacity="0.12" />
          )}
          <circle
            cx={d.cx} cy={d.cy} r={d.active ? 5 : 3}
            fill={d.active ? '#F9A825' : '#2E7D32'}
            opacity={d.active ? 1 : 0.5}
          />
          {d.label && (
            <text x={d.cx + 8} y={d.cy + 4} fontSize="8" fill="#1B5E20" fontWeight="bold" fontFamily="Inter, sans-serif">
              {d.label}
            </text>
          )}
        </motion.g>
      ))}
    </svg>
  );
}

export default function VisionSection() {
  return (
    <section id="vision" className="section-pad bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
            Long-Term Vision
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-text leading-tight mb-4">
            Building Africa&apos;s Crop Health{' '}
            <span className="text-brand-green">Intelligence Network</span>
          </h2>
          <p className="text-brand-text-muted leading-relaxed">
            Today we help farmers identify maize diseases. Tomorrow we help governments, NGOs, and cooperatives predict outbreaks before they threaten regional food security.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Pillars */}
          <div className="space-y-7">
            {pillars.map((p, i) => (
              <SectionReveal key={p.num} delay={i * 0.1} direction="left">
                <div className="flex items-start gap-5">
                  <span className="font-display font-black text-4xl text-brand-border leading-none flex-shrink-0 w-10">
                    {p.num}
                  </span>
                  <div>
                    <h3 className="font-semibold text-brand-text text-base mb-1.5">{p.title}</h3>
                    <p className="text-brand-text-muted text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* Map card */}
          <SectionReveal direction="right">
            <div className="bg-brand-green-light border border-brand-green-mid rounded-3xl p-8 text-center">
              <AfricaMap />
              <div className="mt-4 space-y-2">
                <div className="font-semibold text-brand-deep-green text-base">Expanding Across Africa</div>
                <p className="text-brand-text-muted text-sm">Starting in Nigeria 2026 → Africa-wide platform by 2030</p>
                <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
                  <div className="flex items-center gap-1.5 text-xs text-brand-green font-medium">
                    <span className="w-3 h-3 rounded-full bg-brand-gold" />
                    Current: Nigeria
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-brand-text-muted font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-green opacity-50" />
                    Upcoming markets
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
