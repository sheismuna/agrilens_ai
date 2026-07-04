// GA4 Analytics Utility: AgriLens AI
// Measurement ID: G-E8MDL98CTY

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const GA_MEASUREMENT_ID = 'G-E8MDL98CTY';

// Safe gtag wrapper, won't throw if GA hasn't loaded yet
function gtag(...args: unknown[]) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args);
  }
}

// 1. Page view: fires on load
export function trackPageView() {
  gtag('event', 'landing_page_view', {
    page_title: 'AgriLens AI Landing Page',
    page_location: typeof window !== 'undefined' ? window.location.href : '',
  });
}

// 2. Hero CTA click
export function trackHeroCtaClick(buttonText: string) {
  gtag('event', 'hero_cta_click', {
    button_text: buttonText,
  });
}

// 3. FAQ open
export function trackFaqOpen(question: string, position: number) {
  gtag('event', 'faq_open', {
    faq_question: question,
    faq_position: position,
  });
}

// 4. FAQ section view
export function trackFaqSectionView() {
  gtag('event', 'faq_section_view', {
    section: 'faq',
  });
}

// 5. App launch click
export function trackAppLaunchClick(buttonText: string) {
  gtag('event', 'app_launch_click', {
    button_text: buttonText,
  });
}

// 6. Contact click
export function trackContactClick(contactType: string, label: string) {
  gtag('event', 'contact_click', {
    contact_type: contactType,
    label: label,
  });
}

// 7 & 8. Scroll depth: call once each
export function trackScrollDepth(percent: 50 | 90) {
  gtag('event', `scroll_${percent}`, {
    scroll_depth: percent,
    page_title: 'AgriLens AI Landing Page',
  });
}
