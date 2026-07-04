'use client';
import { motion } from 'framer-motion';
import PhoneMockup from '@/components/ui/PhoneMockup';
import { trackHeroCtaClick } from '@/lib/analytics';

const trustItems = [
  'Built for African Farmers',
  'Local Language Support',
  'Voice Guidance',
  'Offline-First Design',
  'Smartphone Friendly',
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-bg via-brand-green-light/30 to-brand-bg" />

      {/* Leaf shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[600px] opacity-[0.035] pointer-events-none">
        <svg viewBox="0 0 300 400" fill="#1B5E20" className="w-full h-full">
          <path d="M150 380 Q20 280 30 140 Q40 20 150 10 Q260 20 270 140 Q280 280 150 380Z" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-[380px] h-[480px] opacity-[0.03] pointer-events-none rotate-12">
        <svg viewBox="0 0 300 400" fill="#1B5E20" className="w-full h-full">
          <path d="M150 380 Q20 280 30 140 Q40 20 150 10 Q260 20 270 140 Q280 280 150 380Z" />
        </svg>
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(#2E7D32 1px, transparent 1px), linear-gradient(90deg, #2E7D32 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand-green-light border border-brand-green-mid text-brand-deep-green rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse-dot" />
              AgTech 2.0 for Africa
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.1] text-brand-text mb-5"
            >
              Every Diseased Leaf Is A Chance To{' '}
              <span className="text-brand-green">Save A Harvest</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-brand-text-muted leading-relaxed mb-8 max-w-lg"
            >
              AgriLens AI helps maize farmers identify diseases, receive treatment guidance, and protect their yields using a simple smartphone photo.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="#pilot"
                className="inline-flex items-center gap-2 bg-brand-green text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-brand-deep-green transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-lg text-sm"
              >
                Apply for Pilot Testing
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <a
                href="#product"
                className="inline-flex items-center gap-2 border border-brand-green text-brand-green font-semibold px-7 py-3.5 rounded-xl hover:bg-brand-green-light transition-all text-sm"
              >
                See How It Works
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2"
            >
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="1.5,5 4,7.5 8.5,2.5" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-brand-text-muted">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Phone */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup activeTab={0} variant="hero" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-brand-text-muted/40"
      >
        <span className="text-xs font-medium">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  );
}
