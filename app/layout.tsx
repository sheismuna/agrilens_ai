import type { Metadata } from 'next';
import '../styles/globals.css';
import GoogleAnalytics from '@/components/ui/GoogleAnalytics';

export const metadata: Metadata = {
  metadataBase: new URL('https://agrilensai.com'),
  title: 'AgriLens AI: See Early. Act Early. Grow More.',
  description:
    'AgriLens AI helps maize farmers across Africa identify crop diseases early, receive localized treatment guidance, and protect their harvests using a simple smartphone photo.',
  keywords: [
    'crop disease detection',
    'African farming',
    'AI agriculture',
    'maize disease',
    'agtech Africa',
    'smart farming',
  ],
  authors: [{ name: 'AgriLens AI' }],
  creator: 'AgriLens AI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://agrilensai.com',
    siteName: 'AgriLens AI',
    title: 'AgriLens AI: See Early. Act Early. Grow More.',
    description:
      'AI-powered crop disease detection for African maize farmers.',
    images: [
      {
        url: '/images/field-demo-poster.jpg',
        width: 1024,
        height: 576,
        alt: 'AgriLens AI field validation in a Nigerian maize farm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@AgrilensAI',
    creator: '@AgrilensAI',
    title: 'AgriLens AI: See Early. Act Early. Grow More.',
    description: 'AI-powered crop disease detection for African farmers.',
    images: ['/images/field-demo-poster.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1B5E20" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-brand-bg text-brand-text antialiased">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
