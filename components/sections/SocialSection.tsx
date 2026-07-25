'use client';
import SectionReveal from '@/components/ui/SectionReveal';

export default function SocialSection() {
  return (
    <section id="follow" className="bg-brand-deep-green py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionReveal>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-brand-gold mb-5">
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full flex-shrink-0" aria-hidden="true" />
            Follow Our Journey
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-4">
            Follow AgriLens AI As We Build
          </h2>

          <p className="text-white/70 text-base leading-relaxed max-w-xl mx-auto mb-8">
            Follow AgriLens AI as we build AI-powered tools to help African farmers detect crop diseases early and improve productivity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://x.com/AgrilensAI"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow AgriLens AI on X"
              className="inline-flex items-center gap-2.5 bg-white text-brand-deep-green font-semibold px-6 py-3 rounded-xl hover:bg-brand-gold hover:text-brand-deep-green hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 text-sm w-full sm:w-auto justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Follow us on X
            </a>

            <a
              href="https://www.linkedin.com/company/agrilens-ai-technologies-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with AgriLens AI on LinkedIn"
              className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 text-sm w-full sm:w-auto justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect with us on LinkedIn
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
