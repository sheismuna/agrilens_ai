'use client';
import { motion } from 'framer-motion';

interface PhoneMockupProps {
  activeTab?: number;
  variant?: 'hero' | 'product';
}

const screens = [
  // 0: Upload
  <div key="screen-0" className="p-3">
    <div className="relative bg-brand-green-light border-2 border-dashed border-brand-green-mid rounded-2xl h-36 flex flex-col items-center justify-center gap-2 overflow-hidden mb-3">
      <div className="scan-line" />
      <span className="text-3xl">🌽</span>
      <span className="text-xs text-brand-text-muted font-medium">Point camera at maize leaf</span>
      <span className="text-[10px] text-gray-400">Offline mode coming soon · No special lighting needed</span>
    </div>
    <div className="flex gap-2">
      <div className="flex-1 bg-brand-green text-white text-xs font-semibold py-2 rounded-xl text-center">📷 Camera</div>
      <div className="flex-1 border border-brand-border text-xs font-semibold py-2 rounded-xl text-center text-brand-text-muted">🖼️ Gallery</div>
    </div>
  </div>,
  // 1: AI Diagnosis
  <div key="screen-1" className="p-3">
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-2.5 mb-2.5 flex items-center gap-2">
      <span className="text-amber-500 text-sm">⚡</span>
      <span className="text-[11px] font-semibold text-amber-700">AI analyzing your leaf…</span>
    </div>
    <div className="bg-white border border-brand-border rounded-xl p-3 mb-2">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-[11px] font-bold text-brand-text">Disease Identified</span>
        <span className="text-[10px] font-bold bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">⚠ Moderate</span>
      </div>
      <div className="text-[12px] font-semibold text-orange-600 mb-2">Northern Corn Leaf Blight</div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-1">
        <div className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500" style={{ width: '65%' }} />
      </div>
      <div className="flex justify-between">
        <span className="text-[10px] text-brand-text-muted">Severity: Moderate</span>
        <span className="text-[10px] text-brand-green font-semibold">91–97% accuracy (test set)</span>
      </div>
    </div>
  </div>,
  // 2: Severity
  <div key="screen-2" className="p-3">
    <div className="bg-white border border-brand-border rounded-xl p-3 mb-2">
      <div className="text-[11px] font-bold text-brand-text mb-3">Severity Assessment</div>
      <div className="flex gap-1.5 mb-3">
        {['MILD', 'MODERATE', 'SEVERE'].map((s, i) => (
          <div key={s} className={`flex-1 text-center text-[9px] font-bold py-2 rounded-lg border-2 ${i === 1 ? 'bg-amber-50 border-amber-400 text-amber-600' : 'border-gray-100 text-gray-300'}`}>
            {s}
          </div>
        ))}
      </div>
      <p className="text-[10px] text-brand-text-muted leading-relaxed">
        Disease is spreading but still controllable with prompt fungicide application.
      </p>
    </div>
    <div className="bg-brand-green-light border border-brand-green-mid rounded-xl p-2.5">
      <span className="text-[10px] font-semibold text-brand-deep-green">💡 Act within 48 hours for best results</span>
    </div>
  </div>,
  // 3: Treatment
  <div key="screen-3" className="p-3">
    <div className="bg-white border border-brand-border rounded-xl p-3">
      <div className="text-[11px] font-bold text-brand-text mb-2.5">Treatment Plan</div>
      {[
        'Apply Mancozeb at 2.5g per litre',
        'Spray every 7 days for 3 weeks',
        'Best applied early morning',
        'Wear gloves and mask',
      ].map((step, i) => (
        <div key={i} className="flex items-start gap-2 mb-2">
          <div className="w-5 h-5 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
            <span className="text-[9px] font-bold text-white">{i + 1}</span>
          </div>
          <span className="text-[10px] text-brand-text leading-4">{step}</span>
        </div>
      ))}
    </div>
  </div>,
  // 4: Voice
  <div key="screen-4" className="p-3">
    <div className="bg-brand-green rounded-xl p-3 text-center mb-2">
      <div className="text-[10px] text-white/70 mb-2">Now reading in Hausa</div>
      <div className="flex items-center justify-center gap-1 h-10">
        {[20, 36, 52, 64, 48, 58, 32, 20].map((h, i) => (
          <div
            key={i}
            className="w-1.5 bg-brand-gold rounded-full wave-bar"
            style={{ height: h, animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    </div>
    <div className="flex flex-wrap gap-1.5">
      {['🇳🇬 Hausa', 'Yoruba', 'Igbo', 'English'].map((lang, i) => (
        <div key={lang} className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${i === 0 ? 'bg-brand-green-light border-brand-green-mid text-brand-green' : 'border-brand-border text-gray-400'}`}>
          {lang}
        </div>
      ))}
    </div>
  </div>,
  // 5: Prevention
  <div key="screen-5" className="p-3">
    <div className="bg-white border border-brand-border rounded-xl p-3">
      <div className="text-[11px] font-bold text-brand-text mb-2.5">Prevention Plan</div>
      {[
        'Rotate crops with legumes next season',
        'Remove infected residue after harvest',
        'Use NCLB-resistant variety 2027',
        'Re-scan in 7 days to track progress',
      ].map((tip, i) => (
        <div key={i} className="flex items-start gap-2 mb-2">
          <span className="text-brand-green text-sm leading-none mt-0.5">✓</span>
          <span className="text-[10px] text-brand-text leading-4">{tip}</span>
        </div>
      ))}
    </div>
  </div>,
];

export default function PhoneMockup({ activeTab = 0, variant = 'hero' }: PhoneMockupProps) {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute w-64 h-64 bg-brand-green/20 rounded-full blur-3xl" />
      {variant === 'hero' && (
        <>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-8 top-16 bg-white/90 border border-brand-border rounded-2xl px-3 py-2 shadow-card z-10 hidden lg:flex items-center gap-2"
          >
            <span className="text-lg">🌿</span>
            <div>
              <div className="text-[10px] font-bold text-brand-text">Disease Detected</div>
              <div className="text-[9px] text-orange-500 font-semibold">NCLB · Moderate</div>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -right-6 bottom-24 bg-white border border-brand-border rounded-2xl px-3 py-2 shadow-card z-10 hidden lg:flex items-center gap-2"
          >
            <div className="w-6 h-6 bg-brand-green rounded-lg flex items-center justify-center">
              <span className="text-[10px] text-white">✓</span>
            </div>
            <div>
              <div className="text-[10px] font-bold text-brand-text">91–97% Accuracy</div>
              <div className="text-[9px] text-brand-green font-semibold">Treatment ready</div>
            </div>
          </motion.div>
        </>
      )}
      <div className="relative w-[220px] bg-[#111] rounded-[36px] p-2.5 shadow-phone z-[2]">
        <div className="w-16 h-5 bg-[#111] rounded-b-2xl mx-auto mb-2" />
        <div className="bg-white rounded-[26px] overflow-hidden min-h-[380px]">
          <div className="bg-brand-green px-3 py-2.5 flex items-center justify-between">
            <span className="font-display font-bold text-white text-xs">AgriLens AI</span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse-dot" />
              <span className="text-[9px] text-white/80">AI Ready</span>
            </div>
          </div>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {screens[activeTab]}
          </motion.div>
        </div>
        <div className="w-20 h-1 bg-white/20 rounded-full mx-auto mt-2" />
      </div>
    </div>
  );
}
