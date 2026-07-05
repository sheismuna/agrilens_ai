'use client';
import { motion } from 'framer-motion';
import SectionReveal from '@/components/ui/SectionReveal';

const rows = [
  { feature: 'Disease Dataset',       others: 'Generic global datasets',              agrilens: 'African disease-focused training data' },
  { feature: 'Language Support',      others: 'English only',                          agrilens: 'Hausa, Yoruba, Igbo + voice readout' },
  { feature: 'Treatment Guidance',    others: 'General recommendations',               agrilens: 'Localized, actionable, product-specific' },
  { feature: 'Offline Usage',         others: 'Requires internet connection',          agrilens: 'Current MVP requires internet; offline mode is on our near-term roadmap' },
  { feature: 'Disease Tracking',      others: null,                                    agrilens: 'Track progress across multiple scans' },
  { feature: 'Severity Assessment',   others: 'Basic or none',                         agrilens: 'Mild / Moderate / Severe grading' },
  { feature: 'Personalized Advice',   others: 'One-size-fits-all',                     agrilens: 'Adapted to your farm, location & stage' },
  { feature: 'Outbreak Intelligence', others: null,                                    agrilens: 'Regional monitoring for institutions' },
];

export default function DifferentiationSection() {
  return (
    <section id="differentiation" className="section-pad bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
            Competitive Advantage
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-text leading-tight mb-4">
            Built for African Farmers.{' '}
            <span className="text-brand-green">Not Adapted Later.</span>
          </h2>
          <p className="text-brand-text-muted leading-relaxed">
            Generic agricultural apps were designed for global markets then retrofitted for Africa. AgriLens AI was built from the ground up for African conditions, languages, and farmers.
          </p>
        </SectionReveal>

        {/* Desktop table */}
        <SectionReveal>
          <div className="hidden md:block rounded-2xl overflow-hidden shadow-card border border-brand-border">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr>
                  <th className="text-left px-6 py-4 bg-gray-50 text-xs font-bold uppercase tracking-widest text-brand-text-muted w-[28%]">Feature</th>
                  <th className="text-left px-6 py-4 bg-gray-50 text-xs font-bold uppercase tracking-widest text-brand-text-muted w-[36%]">Others</th>
                  <th className="text-left px-6 py-4 bg-brand-green text-xs font-bold uppercase tracking-widest text-white w-[36%]">
                    ✦ AgriLens AI
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="border-t border-brand-border group hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-brand-text">{row.feature}</td>
                    <td className="px-6 py-4 text-sm text-brand-text-muted">
                      {row.others === null ? (
                        <span className="inline-flex items-center gap-1.5 text-gray-300 font-medium">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round"/></svg>
                          Not available
                        </span>
                      ) : row.others}
                    </td>
                    <td className="px-6 py-4 bg-[#F1F8E9]">
                      <span className="flex items-start gap-2 text-sm text-brand-deep-green font-medium">
                        <span className="text-brand-green mt-0.5 flex-shrink-0">✦</span>
                        {row.agrilens}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionReveal>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {rows.map((row, i) => (
            <SectionReveal key={row.feature} delay={i * 0.05}>
              <div className="bg-white border border-brand-border rounded-2xl overflow-hidden">
                <div className="px-4 py-2.5 bg-gray-50 border-b border-brand-border">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-text-muted">{row.feature}</span>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-3 border-r border-brand-border">
                    <div className="text-[10px] font-bold text-gray-400 uppercase mb-1">Others</div>
                    <div className="text-xs text-brand-text-muted">
                      {row.others ?? <span className="text-gray-300">Not available</span>}
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-[#F1F8E9]">
                    <div className="text-[10px] font-bold text-brand-green uppercase mb-1">AgriLens AI</div>
                    <div className="text-xs text-brand-deep-green font-medium">{row.agrilens}</div>
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
