'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from '@/components/ui/SectionReveal';
import { trackFaqOpen, trackFaqSectionView } from '@/lib/analytics';

const faqs = [
  {
    question: 'What is AgriLens AI?',
    answer:
      'AgriLens AI is an AI-powered agricultural assistant that helps farmers identify maize diseases from a photo and receive treatment recommendations instantly. Farmers take a photo of a maize leaf, and the app returns a diagnosis, severity level, and step-by-step treatment guidance within seconds. It works in local languages and does not require a constant internet connection.',
  },
  {
    question: 'How does AgriLens AI work?',
    answer:
      'Farmers upload a clear image of a maize leaf using the in-app camera or their phone gallery. AgriLens AI analyzes the image using a machine learning model trained on African maize disease data. Within seconds, it returns a disease diagnosis, severity assessment, and localized treatment recommendations. Voice readout is available in English, Hausa, Yoruba, and Igbo.',
  },
  {
    question: 'Which maize diseases can AgriLens AI detect?',
    answer:
      'The current version identifies four classes: Healthy Maize, Common Rust, Maize Streak Virus, and Northern Corn Leaf Blight. Each diagnosis includes typical symptoms, severity grading, and recommended treatment products available in local agro-input stores. Additional diseases and crops are planned for 2027 and 2028.',
  },
  {
    question: 'Who is AgriLens AI built for?',
    answer:
      'AgriLens AI is designed for smallholder farmers, agricultural extension officers, agribusinesses, NGOs, and agricultural development programs. The free tier is built for individual farmers. The institutional tier is designed for cooperatives, government agencies, and NGOs that need regional disease monitoring, farmer management tools, and outbreak analytics.',
  },
];

function AccordionItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
        isOpen
          ? 'border-brand-green bg-white shadow-card'
          : 'border-brand-border bg-white hover:border-gray-300'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black transition-colors ${
              isOpen
                ? 'bg-brand-green text-white'
                : 'bg-brand-green-light text-brand-green'
            }`}
          >
            {index + 1}
          </div>
          <span
            className={`font-semibold text-base transition-colors ${
              isOpen ? 'text-brand-green' : 'text-brand-text'
            }`}
          >
            {faq.question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors ${
            isOpen
              ? 'border-brand-green text-brand-green'
              : 'border-brand-border text-brand-text-muted'
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="6" y1="1" x2="6" y2="11" />
            <line x1="1" y1="6" x2="11" y2="6" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              <div className="ml-11 border-t border-brand-border pt-4">
                <p className="text-brand-text-muted text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const viewTracked = useRef(false);

  // Track faq_section_view when it enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !viewTracked.current) {
            viewTracked.current = true;
            trackFaqSectionView();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleToggle = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);

    if (isOpening) {
      trackFaqOpen(faqs[index].question, index + 1);
    }
  };

  return (
    <section id="faq" ref={sectionRef} className="section-pad bg-brand-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
            FAQ
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-text leading-tight mb-4">
            Common Questions
          </h2>
          <p className="text-brand-text-muted leading-relaxed">
            Everything you need to know about AgriLens AI before getting started.
          </p>
        </SectionReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <SectionReveal key={faq.question} delay={i * 0.07}>
              <AccordionItem
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            </SectionReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <SectionReveal className="mt-10 text-center">
          <div className="bg-brand-green-light border border-brand-green-mid rounded-2xl px-6 py-5">
            <p className="text-brand-deep-green text-sm font-medium mb-3">
              Have a question not listed here?
            </p>
            <a
              href="mailto:hello@agrilens.ai"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-deep-green transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <rect x="1" y="3" width="14" height="10" rx="2" />
                <path d="M1 5l7 5 7-5" />
              </svg>
              hello@agrilens.ai
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
