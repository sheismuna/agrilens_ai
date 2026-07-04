'use client';
import Script from 'next/script';
import { useEffect } from 'react';
import { GA_MEASUREMENT_ID, trackPageView, trackScrollDepth } from '@/lib/analytics';

export default function GoogleAnalytics() {
  useEffect(() => {
    // Fire landing_page_view once on mount
    trackPageView();

    // Scroll depth tracking: 50% and 90%
    let fired50 = false;
    let fired90 = false;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const percent = (scrollTop / docHeight) * 100;

      if (!fired50 && percent >= 50) {
        fired50 = true;
        trackScrollDepth(50);
      }
      if (!fired90 && percent >= 90) {
        fired90 = true;
        trackScrollDepth(90);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Load GA4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      {/* Initialize dataLayer and gtag */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            debug_mode: true,
            send_page_view: false
          });
        `}
      </Script>
    </>
  );
}
