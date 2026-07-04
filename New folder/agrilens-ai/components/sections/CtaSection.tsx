'use client';
import { motion } from 'framer-motion';
import { trackHeroCtaClick, trackContactClick } from '@/lib/analytics';
import SectionReveal from '@/components/ui/SectionReveal';

export default function CtaSection() {
  return (
    <section id="cta" className="relative overflow-hidden bg-brand-deep-green py-28 px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        {/* Leaf left */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[400px] h-[500px] opacity-[0.05] pointer-events-none">
          <svg viewBox="0 0 300 400" fill="white" className="w-full h-full" style={{ transform: 'rotate(30deg)' }}>
            <path d="M150 380 Q20 280 30 140 Q40 20 150 10 Q260 20 270 140 Q280 280 150 380Z" />
          </svg>
        </div>
        {/* Leaf right */}
        <div className="absolute -right-16 -bottom-20 w-[350px] h-[440px] opacity-[0.05] pointer-events-none">
          <svg viewBox="0 0 300 400" fill="white" className="w-full h-full" style={{ transform: 'rotate(-20deg)' }}>
            <path d="M150 380 Q20 280 30 140 Q40 20 150 10 Q260 20 270 140 Q280 280 150 380Z" />
          </svg>
        </div>
        {/* Glow center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-green/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <SectionReveal>
          <div className="inline-flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-8 h-px bg-brand-gold/50" />
            Join the Mission
            <span className="w-8 h-px bg-brand-gold/50" />
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
            Every Diseased Leaf Is A Chance To{' '}
            <span className="text-brand-gold">Save A Harvest</span>
          </h2>

          <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Join us in securing Africa&apos;s food future by giving farmers the tools to detect diseases early, act quickly, and protect their yields before it&apos;s too late.
          </p>

          {/* Pilot badge */}
          <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/35 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse flex-shrink-0" />
            <span className="text-brand-gold text-xs font-bold tracking-wide">
              Pilot Programme Now Open &nbsp;·&nbsp; Accepting Early Partners
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <motion.a
              href="mailto:hello.agrilensservices@gmail.com?subject=Investor Demo Request"
              onClick={() => trackHeroCtaClick('Request Investor Demo')}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-brand-gold text-[#111] font-bold px-8 py-4 rounded-xl text-base shadow-glow-gold hover:bg-brand-gold-dark transition-colors"
            >
              Request Investor Demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </motion.a>
            <motion.a
              href="mailto:hello.agrilensservices@gmail.com?subject=Partnership Inquiry"
              onClick={() => trackContactClick('email', 'Partner With Us CTA')}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-white/10 hover:border-white/40 transition-all"
            >
              Partner With Us
            </motion.a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              'Built for African Farmers',
              'Investor Ready',
              'NGO & Government Partner',
              'See Early. Act Early. Grow More.',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/40 text-sm">
                <span className="text-brand-gold text-xs">✦</span>
                {item}
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
