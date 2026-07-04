'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const navLinks: { label: string; href: string; highlight?: boolean }[] = [
  { label: 'Product', href: '#product' },
  { label: 'Why Us', href: '#differentiation' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Partnerships', href: '#partnerships' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Pilot', href: '#pilot', highlight: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-brand-bg/95 backdrop-blur-xl border-b border-brand-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <Image
              src="/images/logo.jpeg"
              alt="AgriLens AI: See Early. Act Early. Grow More."
              width={180}
              height={68}
              className="h-11 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={link.highlight
                  ? "text-sm font-bold text-brand-gold border border-brand-gold/40 bg-brand-gold/8 rounded-full px-3 py-1 hover:bg-brand-gold/15 transition-colors"
                  : "text-sm font-medium text-brand-text-muted hover:text-brand-green transition-colors"
                }
              >
                {link.highlight && <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-gold mr-1.5 animate-pulse align-middle -mt-0.5" />}
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#product"
              className="text-sm font-semibold text-brand-green border border-brand-green rounded-lg px-4 py-2 hover:bg-brand-green-light transition-colors"
            >
              See How It Works
            </a>
            <a
              href="#pilot"
              className="text-sm font-semibold bg-brand-green text-white rounded-lg px-4 py-2 hover:bg-brand-deep-green transition-colors shadow-sm"
            >
              Apply for Pilot Testing
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-brand-text"
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <motion.rect
                x="3" y={mobileOpen ? "10.5" : "5"}
                width="16" height="2" rx="1" fill="currentColor"
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 0 : 0 }}
                style={{ transformOrigin: 'center' }}
              />
              {!mobileOpen && (
                <rect x="3" y="10.5" width="16" height="2" rx="1" fill="currentColor" />
              )}
              <motion.rect
                x="3" y={mobileOpen ? "10.5" : "16"}
                width="16" height="2" rx="1" fill="currentColor"
                animate={{ rotate: mobileOpen ? -45 : 0 }}
                style={{ transformOrigin: 'center' }}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-bg/98 backdrop-blur-xl border-b border-brand-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-brand-text py-2 border-b border-brand-border last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                <a href="#product" onClick={() => setMobileOpen(false)} className="text-center text-sm font-semibold text-brand-green border border-brand-green rounded-lg px-4 py-2.5">
                  See How It Works
                </a>
                <a href="#pilot" onClick={() => setMobileOpen(false)} className="text-center text-sm font-semibold bg-brand-green text-white rounded-lg px-4 py-2.5">
                  Apply for Pilot Testing
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
