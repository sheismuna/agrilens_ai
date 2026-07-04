'use client';
import SectionReveal from '@/components/ui/SectionReveal';

export default function FounderSection() {
  return (
    <section id="founder" className="section-pad bg-[#F2F2EF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center max-w-xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-green mb-3">The Founder</div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-text leading-tight">
            Driven by Purpose,{' '}
            <span className="text-brand-green">Grounded in the Field</span>
          </h2>
        </SectionReveal>

        <SectionReveal>
          <div className="bg-white border border-brand-border rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all">
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Avatar column */}
              <div className="md:col-span-2 bg-gradient-to-br from-brand-green-light to-white flex flex-col items-center justify-center p-10 gap-4">
                {/*
                  PLACEHOLDER: Replace this div with:
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image src="/images/founder/maimuna.jpg" fill className="object-cover" alt="Maimuna Mohammed" />
                  </div>
                */}
                <div className="w-32 h-32 rounded-full bg-brand-green-light border-4 border-white shadow-lg flex items-center justify-center">
                  <span className="font-display font-black text-4xl text-brand-green">MM</span>
                </div>
                <div className="text-center">
                  <div className="font-bold text-brand-text text-base">Maimuna Mohammed</div>
                  <div className="text-brand-text-muted text-sm">Founder, AgriLens AI</div>
                </div>
                <div className="flex gap-2 mt-1">
                  <a href="https://www.linkedin.com/in/maimuna-mohammed-090aa022a" target="_blank" rel="noopener noreferrer" className="text-[10px] font-semibold text-brand-green border border-brand-green-mid bg-brand-green-light px-3 py-1 rounded-full hover:bg-brand-green hover:text-white transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://x.com/moo_narh" target="_blank" rel="noopener noreferrer" className="text-[10px] font-semibold text-brand-green border border-brand-green-mid bg-brand-green-light px-3 py-1 rounded-full hover:bg-brand-green hover:text-white transition-colors">
                    X
                  </a>
                </div>
              </div>

              {/* Text column */}
              <div className="md:col-span-3 p-10 flex flex-col justify-center">
                <div className="text-5xl font-display text-brand-green-mid leading-none mb-4">&ldquo;</div>
                <p className="font-display text-xl lg:text-2xl text-brand-text leading-snug mb-6 italic">
                  Building technology that bridges the gap between modern AI and smallholder farmers, helping communities make faster and smarter decisions before diseases affect their harvests.
                </p>
                <p className="text-brand-text-muted text-sm leading-relaxed mb-6">
                  AgriLens AI was founded on a simple belief: every farmer deserves access to reliable agricultural support, regardless of literacy level, internet connectivity, or proximity to an extension officer.
                </p>
                <p className="text-brand-text-muted text-sm leading-relaxed mb-6">
                  We are building practical tools that help farmers identify crop diseases earlier, make informed decisions, and protect their yields. Our long-term goal is to make agricultural intelligence more accessible to farming communities across Africa.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['AI / Machine Learning', 'Agricultural Technology', 'Food Security', 'Social Impact'].map((tag) => (
                    <span key={tag} className="text-xs font-semibold bg-brand-green-light text-brand-deep-green border border-brand-green-mid px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
