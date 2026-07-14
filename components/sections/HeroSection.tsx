'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { trackHeroCtaClick } from '@/lib/analytics';

const trustItems = [
  'Built for African Farmers',
  'Local Language Support',
  'Voice Guidance',
  'Offline-First Design',
  'Smartphone Friendly',
];

const videoTrustItems = [
  'Field Tested in Nigeria',
  'Real Farmers',
  'Real Maize Disease Samples',
];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play();
  };

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

          {/* Right: Field validation video */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            {/* Field Validated badge */}
            <div className="inline-flex items-center gap-2 bg-brand-green-light border border-brand-green-mid text-brand-deep-green rounded-full px-3.5 py-1.5 text-[11px] font-bold tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 bg-brand-green rounded-full flex-shrink-0" aria-hidden="true" />
              Field Validated
            </div>

            {/* Video player */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-brand-text">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/images/field-demo-poster.jpg"
                controls
                playsInline
                preload="none"
                aria-label="AgriLens AI field demonstration video: real-time maize disease detection tested with farmers in Nigeria"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                <source src="/videos/agrilens-field-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Large play button overlay (hidden once playing) */}
              {!isPlaying && (
                <button
                  type="button"
                  onClick={handlePlayClick}
                  aria-label="Play field demonstration video"
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group focus:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
                >
                  <span className="flex items-center justify-center w-20 h-20 rounded-full bg-white/95 shadow-xl group-hover:scale-105 transition-transform">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#1B5E20" aria-hidden="true" className="ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              )}
            </div>

            {/* Trust indicators below video */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
              {videoTrustItems.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-[18px] h-[18px] bg-brand-green rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="1.5,5 4,7.5 8.5,2.5" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-brand-text-muted">{item}</span>
                </div>
              ))}
            </div>
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
