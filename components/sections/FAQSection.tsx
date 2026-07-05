'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { trackFaqOpen, trackFaqSectionView } from '@/lib/analytics';

const faqs = [
  {
    q: 'What is AgriLens AI?',
    a: 'AgriLens AI is an AI-powered agricultural assistant that helps farmers identify maize diseases from a photo and receive treatment recommendations instantly. Farmers take a photo of a maize leaf, and the app returns a diagnosis, severity level, and step-by-step treatment guidance within seconds.',
  },
  {
    q: 'How does AgriLens AI work?',
    a: 'Farmers upload a clear image of a maize leaf using the in-app camera or phone gallery. AgriLens AI analyzes the image using a machine learning model trained on African maize disease data. Within seconds, it returns a disease diagnosis, severity assessment, and localized treatment recommendations. Text-based disease guidance is available in English, Hausa, Yoruba, Igbo, and Pidgin English. Voice playback (text-to-speech) is currently available for English and Pidgin English, with additional voice languages rolling out in upcoming releases.',
  },
  {
    q: 'Which maize diseases can AgriLens AI detect?',
    a: 'The current version identifies four classes: Healthy Maize, Common Rust, Maize Streak Virus, and Northern Corn Leaf Blight. Each diagnosis includes typical symptoms, severity grading, and recommended treatment products available in local agro-input stores. Additional diseases and crops are planned for 2027 and 2028.',
  },
  {
    q: 'Who is AgriLens AI built for?',
    a: 'AgriLens AI is designed for smallholder farmers, agricultural extension officers, agribusinesses, NGOs, and agricultural development programs. The free tier serves individual farmers. The institutional tier is for cooperatives, government agencies, and NGOs that need regional disease monitoring and outbreak analytics.',
  },
  {
    q: 'Is AgriLens AI free to use?',
    a: 'Yes. Core disease detection, treatment guidance, and voice readout are completely free for farmers. An optional Premium Farmer tier and an Institutional subscription are available for advanced features such as disease history tracking, farm health reports, and regional outbreak dashboards.',
  },
  {
    q: 'Does it work without internet?',
    a: 'The current MVP requires an internet connection for disease diagnosis. Offline capability is on our near-term roadmap, since it\'s essential for farmers in rural areas with limited connectivity, pilot farmers will be first to access this feature once it ships.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const viewTracked = useRef(false);

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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleToggle = (index: number) => {
    const opening = openIndex !== index;
    setOpenIndex(opening ? index : null);
    if (opening) trackFaqOpen(faqs[index].q, index + 1);
  };

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#2E7D32] mb-3">
            FAQ
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111111] leading-tight mb-3">
            Common Questions
          </h2>
          <p className="text-[#555555] text-base leading-relaxed">
            Everything you need to know about AgriLens AI before getting started.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`border-2 rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? 'border-[#2E7D32] shadow-sm'
                    : 'border-[#E8E8E4] hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 bg-white"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black transition-colors ${
                      isOpen ? 'bg-[#2E7D32] text-white' : 'bg-[#E8F5E9] text-[#2E7D32]'
                    }`}>
                      {index + 1}
                    </div>
                    <span className={`font-semibold text-sm sm:text-base leading-snug transition-colors ${
                      isOpen ? 'text-[#2E7D32]' : 'text-[#111111]'
                    }`}>
                      {item.q}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isOpen ? 'border-[#2E7D32] text-[#2E7D32]' : 'border-[#E8E8E4] text-[#555555]'
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
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="ml-11 border-t border-[#E8E8E4] pt-4">
                          <p className="text-[#555555] text-sm leading-relaxed">{item.a}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <div className="bg-[#E8F5E9] border border-[#C8E6C9] rounded-2xl px-6 py-5">
            <p className="text-[#1B5E20] text-sm font-medium mb-3">
              Have a question not listed here?
            </p>
            <a
              href="mailto:hello.agrilensservices@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7D32] hover:text-[#1B5E20] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <rect x="1" y="3" width="14" height="10" rx="2" />
                <path d="M1 5l7 5 7-5" />
              </svg>
              hello.agrilensservices@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
