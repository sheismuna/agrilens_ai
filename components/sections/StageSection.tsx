'use client';
import SectionReveal from '@/components/ui/SectionReveal';
export default function StageSection() {
  return (
    <section id="stage" className="bg-brand-green-light border-y border-brand-green/20 py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 text-center sm:text-left">
            <div className="flex-shrink-0 inline-flex items-center gap-2 bg-white/70 border border-brand-green/30 rounded-full px-4 py-1.5 mx-auto sm:mx-0">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green">Current Stage: MVP</span>
            </div>
            <p className="text-brand-text text-sm leading-relaxed">
              AgriLens AI is in early testing phase. We&rsquo;ve built core disease-detection functionality and are now gathering real-world farmer feedback to improve accuracy and design.{' '}
              Interested in joining our pilot cohort (free access, direct feedback loop with our team)? Reach us at{' '}
              <a href="mailto:hello.agrilensservices@gmail.com" className="font-semibold text-brand-green underline underline-offset-2 hover:text-brand-deep-green">
                hello.agrilensservices@gmail.com
              </a>.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
