'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from '@/components/ui/SectionReveal';

// This must be your Google Apps Script Web App deployment URL
// (ends in /exec), NOT the Google Sheet URL itself.
// Set as NEXT_PUBLIC_FORM_ENDPOINT in Vercel > Project Settings > Environment Variables.
// See setup instructions in google-apps-script.js
const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '';

const roles = [
  'Farmer',
  'Cooperative',
  'Extension Officer',
  'NGO',
  'Researcher',
  'Government Agency',
  'Investor',
  'Other',
];

const benefits = [
  { icon: '⚡', text: 'Early access to all new features before public release' },
  { icon: '🎯', text: 'Direct feedback sessions with the AgriLens AI team' },
  { icon: '📊', text: 'Access to disease monitoring insights and outbreak data' },
  { icon: '🛠️', text: 'Opportunity to shape product development direction' },
  { icon: '🤝', text: 'Priority support throughout the pilot period' },
  { icon: '🌍', text: 'Recognition as a founding partner in Africa\'s crop intelligence network' },
];

type FormData = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  role: string;
  location: string;
  cropType: string;
  message: string;
};

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export default function PilotAccessSection() {
  const [form, setForm] = useState<FormData>({
    name: '',
    organization: '',
    email: '',
    phone: '',
    role: '',
    location: '',
    cropType: '',
    message: '',
  });
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState('loading');

    if (!GOOGLE_SCRIPT_URL) {
      console.error(
        'Form submission failed: NEXT_PUBLIC_FORM_ENDPOINT is not set. ' +
        'Add it in Vercel > Project Settings > Environment Variables.'
      );
      setSubmitState('error');
      return;
    }

    try {
      // Content-Type: text/plain avoids a CORS preflight (OPTIONS) request,
      // which Google Apps Script Web Apps do not handle. This lets us read
      // the real response instead of firing blind with mode: 'no-cors'.
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          ...form,
          timestamp: new Date().toISOString(),
        }),
      });

      const result = await res.json();

      if (result.success) {
        setSubmitState('success');
      } else {
        console.error('Google Sheets submission failed:', result.error);
        setSubmitState('error');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setSubmitState('error');
    }
  };

  const inputClass = (field: string) =>
    `w-full bg-white border-2 rounded-xl px-4 py-3 text-sm text-brand-text placeholder-gray-400 outline-none transition-all duration-200 font-medium ${
      focused === field
        ? 'border-brand-green shadow-sm shadow-brand-green/10'
        : 'border-brand-border hover:border-gray-300'
    }`;

  return (
    <section id="pilot" className="section-pad bg-[#F2F2EF] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[440px] h-[560px] opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 300 400" fill="#1B5E20" className="w-full h-full">
          <path d="M150 380 Q20 280 30 140 Q40 20 150 10 Q260 20 270 140 Q280 280 150 380Z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 text-amber-700 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            Limited Pilot Slots Available
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-text leading-tight mb-4">
            Become One of Our{' '}
            <span className="text-brand-green">First Pilot Partners</span>
          </h2>
          <p className="text-brand-text-muted text-lg leading-relaxed">
            Help shape the future of AI-powered crop disease detection in Africa. We&apos;re onboarding a limited number of partners to test AgriLens AI in real-world conditions.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left: Benefits */}
          <div className="lg:col-span-2">
            <SectionReveal direction="left">
              <div className="sticky top-24">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-green mb-5">
                  Pilot Partners Receive
                </div>
                <div className="space-y-4 mb-8">
                  {benefits.map((b, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-9 h-9 bg-white border border-brand-border rounded-xl flex items-center justify-center flex-shrink-0 text-base shadow-sm">
                        {b.icon}
                      </div>
                      <p className="text-sm text-brand-text leading-relaxed pt-1.5">{b.text}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="bg-brand-deep-green rounded-2xl p-5">
                  <div className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2">Who We&apos;re Looking For</div>
                  <div className="flex flex-wrap gap-2">
                    {['Farmers', 'Cooperatives', 'NGOs', 'Extension Officers', 'Researchers', 'Investors'].map((r) => (
                      <span key={r} className="text-xs font-semibold bg-white/10 text-white/80 px-3 py-1.5 rounded-full border border-white/10">
                        {r}
                      </span>
                    ))}
                  </div>
                  <p className="text-white/50 text-xs mt-3 leading-relaxed">
                    Applications reviewed within 3–5 business days. Pilot launching Q3 2026.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <SectionReveal direction="right">
              <div className="bg-white border border-brand-border rounded-3xl shadow-card overflow-hidden">
                {/* Form header */}
                <div className="bg-gradient-to-r from-brand-deep-green to-brand-green px-8 py-5 flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold text-base">Pilot Application</div>
                    <div className="text-white/60 text-xs mt-0.5">AgriLens AI · 2026 Cohort</div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                    <span className="text-white text-xs font-semibold">Accepting Applications</span>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {submitState === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="p-12 flex flex-col items-center text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                        className="w-20 h-20 bg-brand-green-light border-4 border-brand-green-mid rounded-full flex items-center justify-center mb-6"
                      >
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6,18 14,26 30,10" />
                        </svg>
                      </motion.div>
                      <h3 className="font-display font-black text-2xl text-brand-text mb-3">
                        Application Received!
                      </h3>
                      <p className="text-brand-text-muted text-base leading-relaxed mb-2 max-w-sm">
                        Thank you, <span className="font-semibold text-brand-text">{form.name}</span>. We&apos;ve received your pilot application and will be in touch within 3–5 business days.
                      </p>
                      <p className="text-brand-text-muted text-sm leading-relaxed max-w-sm mb-8">
                        We will send next steps to <span className="font-medium text-brand-green">{form.email}</span> as we review your application.
                      </p>
                      <div className="bg-brand-green-light border border-brand-green-mid rounded-2xl px-6 py-4 max-w-sm w-full">
                        <div className="text-xs font-bold uppercase tracking-widest text-brand-green mb-2">What Happens Next</div>
                        <ol className="text-sm text-brand-text-muted text-left space-y-1.5">
                          <li className="flex gap-2"><span className="text-brand-green font-bold">1.</span>Application reviewed by the AgriLens team</li>
                          <li className="flex gap-2"><span className="text-brand-green font-bold">2.</span>Shortlisted partners contacted for a brief call</li>
                          <li className="flex gap-2"><span className="text-brand-green font-bold">3.</span>Pilot onboarding begins Q3 2026</li>
                        </ol>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                      onSubmit={handleSubmit}
                      className="p-8 space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-brand-text uppercase tracking-widest mb-2">
                            Full Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="e.g. Aliyu Ibrahim"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            onFocus={() => setFocused('name')}
                            onBlur={() => setFocused(null)}
                            className={inputClass('name')}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-brand-text uppercase tracking-widest mb-2">
                            Organization <span className="text-brand-text-muted font-normal normal-case">(optional)</span>
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Kaduna Farmers Coop"
                            value={form.organization}
                            onChange={(e) => setForm({ ...form, organization: e.target.value })}
                            onFocus={() => setFocused('org')}
                            onBlur={() => setFocused(null)}
                            className={inputClass('org')}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-brand-text uppercase tracking-widest mb-2">
                            Email Address <span className="text-red-400">*</span>
                          </label>
                          <input
                            required
                            type="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            onFocus={() => setFocused('email')}
                            onBlur={() => setFocused(null)}
                            className={inputClass('email')}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-brand-text uppercase tracking-widest mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            placeholder="+234 800 000 0000"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            onFocus={() => setFocused('phone')}
                            onBlur={() => setFocused(null)}
                            className={inputClass('phone')}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-brand-text uppercase tracking-widest mb-2">
                          Your Role <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <select
                            required
                            value={form.role}
                            onChange={(e) => setForm({ ...form, role: e.target.value })}
                            onFocus={() => setFocused('role')}
                            onBlur={() => setFocused(null)}
                            className={`${inputClass('role')} appearance-none cursor-pointer pr-10 ${!form.role ? 'text-gray-400' : 'text-brand-text'}`}
                          >
                            <option value="" disabled>Select your role…</option>
                            {roles.map((r) => (
                              <option key={r} value={r}>{r}</option>
                            ))}
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-text-muted">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M3 5l4 4 4-4" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-brand-text uppercase tracking-widest mb-2">
                            Location
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Kaduna, Nigeria"
                            value={form.location}
                            onChange={(e) => setForm({ ...form, location: e.target.value })}
                            onFocus={() => setFocused('location')}
                            onBlur={() => setFocused(null)}
                            className={inputClass('location')}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-brand-text uppercase tracking-widest mb-2">
                            Crop Type
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Maize"
                            value={form.cropType}
                            onChange={(e) => setForm({ ...form, cropType: e.target.value })}
                            onFocus={() => setFocused('cropType')}
                            onBlur={() => setFocused(null)}
                            className={inputClass('cropType')}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-brand-text uppercase tracking-widest mb-2">
                          Feedback
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about your farm or organization, and what you hope to get from the pilot…"
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          onFocus={() => setFocused('message')}
                          onBlur={() => setFocused(null)}
                          className={`${inputClass('message')} resize-none`}
                        />
                      </div>

                      {submitState === 'error' && (
                        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600 font-medium">
                          Something went wrong. Please try again or email us directly at hello.agrilensservices@gmail.com
                        </div>
                      )}

                      <div className="pt-1">
                        <motion.button
                          type="submit"
                          disabled={submitState === 'loading'}
                          whileHover={{ scale: submitState === 'loading' ? 1 : 1.01 }}
                          whileTap={{ scale: submitState === 'loading' ? 1 : 0.98 }}
                          className="w-full bg-brand-green text-white font-bold py-4 px-8 rounded-xl text-base hover:bg-brand-deep-green transition-colors disabled:opacity-70 flex items-center justify-center gap-3 shadow-sm"
                        >
                          {submitState === 'loading' ? (
                            <>
                              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                              </svg>
                              Submitting Application…
                            </>
                          ) : (
                            <>
                              Apply for Pilot Access
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M3.5 9h11M10 4.5l4.5 4.5-4.5 4.5" strokeLinecap="round" />
                              </svg>
                            </>
                          )}
                        </motion.button>
                        <p className="text-center text-xs text-brand-text-muted mt-3">
                          Limited pilot slots available · Applications reviewed within 3–5 days
                        </p>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
