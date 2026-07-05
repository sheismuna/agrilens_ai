'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from '@/components/ui/SectionReveal';
import PhoneMockup from '@/components/ui/PhoneMockup';

const tabs = [
  {
    id: 0,
    label: 'Upload Leaf',
    icon: '📷',
    title: 'Capture Your Leaf',
    desc: 'Take a photo of any maize leaf using the in-app camera or upload from your gallery. The app works in everyday farm conditions with no special lighting, equipment, or data connection needed.',
    features: ['In-app camera capture', 'Gallery photo upload', 'Works in low light', 'Offline capability on roadmap'],
  },
  {
    id: 1,
    label: 'AI Diagnosis',
    icon: '🔬',
    title: 'Instant AI Diagnosis',
    desc: 'Our AI model is trained on African maize disease datasets. It analyzes your photo and returns a clear diagnosis within seconds, including the disease name, confidence score, and visual indicators.',
    features: ['Maize Streak Disease (MSD)', 'Northern Corn Leaf Blight (NCLB)', 'Common Rust (CR)', 'Healthy leaf confirmation'],
  },
  {
    id: 2,
    label: 'Severity',
    icon: '📊',
    title: 'Disease Severity Assessment',
    desc: 'AgriLens AI goes beyond identifying the disease. It also grades severity so farmers know exactly whether to monitor closely, begin treatment, or take urgent action.',
    features: ['Mild: monitor closely', 'Moderate: begin treatment', 'Severe: urgent action needed', 'Recommended urgency timeline'],
  },
  {
    id: 3,
    label: 'Treatment',
    icon: '💊',
    title: 'Step-by-Step Treatment Plan',
    desc: 'Every treatment plan is clear and localized. It includes exact product names available in nearby agro-input stores, quantities, application methods, timing, and safety instructions.',
    features: ['Locally available product names', 'Exact dosage and mixing guide', 'Application frequency & schedule', 'Safety precautions included'],
  },
  {
    id: 4,
    label: 'Voice Guide',
    icon: '🎙️',
    title: 'Guidance in Local Languages',
    desc: 'Text-based disease guidance is available in English, Hausa, Yoruba, Igbo, and Pidgin English. Voice playback (text-to-speech) currently supports English and Pidgin English, with more voice languages rolling out in upcoming releases.',
    features: ['English (text + voice)', 'Pidgin (text + voice)', 'Hausa (text)', 'Yoruba (text)', 'Igbo (text)'],
  },
  {
    id: 5,
    label: 'Prevention',
    icon: '🛡️',
    title: 'Personalised Prevention Advice',
    desc: 'After treatment, AgriLens AI provides prevention strategies tailored to your farm\'s disease history, location, and crop stage. It helps you stay ahead of future outbreaks rather than reacting to them.',
    features: ['Based on disease history', 'Location-aware recommendations', 'Seasonal planting guidance', 'Track progress across scans'],
  },
];

export default function ProductSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="product" className="section-pad bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
            How It Works
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-text leading-tight mb-4">
            Your Extension Officer{' '}
            <span className="text-brand-green">In Your Pocket</span>
          </h2>
          <p className="text-brand-text-muted leading-relaxed">
            A complete crop health workflow in six steps. From leaf scan to treatment plan in under 30 seconds.
          </p>
        </SectionReveal>

        {/* Tab buttons */}
        <SectionReveal className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === tab.id
                  ? 'bg-brand-green text-white shadow-md scale-105'
                  : 'border border-brand-border bg-white text-brand-text-muted hover:border-brand-green hover:text-brand-green'
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </SectionReveal>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-green-light rounded-2xl flex items-center justify-center text-2xl border border-brand-green-mid">
                    {tabs[active].icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-green">Step {active + 1} of 6</span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-brand-text mb-3">
                  {tabs[active].title}
                </h3>
                <p className="text-brand-text-muted leading-relaxed mb-6 text-base">
                  {tabs[active].desc}
                </p>
                <ul className="space-y-3">
                  {tabs[active].features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-green-light flex items-center justify-center flex-shrink-0">
                        <span className="text-brand-green text-xs font-bold">✓</span>
                      </div>
                      <span className="text-sm font-medium text-brand-text">{f}</span>
                    </li>
                  ))}
                </ul>
                {/* Progress bar */}
                <div className="mt-8 flex gap-1.5">
                  {tabs.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-1 rounded-full transition-all ${i === active ? 'flex-1 bg-brand-green' : 'w-6 bg-brand-border'}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Right: phone */}
          <div className="flex justify-center">
            <PhoneMockup activeTab={active} variant="product" />
          </div>
        </div>
      </div>
    </section>
  );
}
