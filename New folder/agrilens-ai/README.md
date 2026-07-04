# AgriLens AI: Landing Page

> **See Early. Act Early. Grow More.**
>
> A production-ready Next.js 15 landing page for AgriLens AI, an AI-powered crop disease detection platform built for African maize farmers.

---

## ✦ Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 12 |
| Language | TypeScript |
| Deployment | Vercel |
| Fonts | Playfair Display + Inter (Google Fonts) |

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Build for production

```bash
npm run build
npm start
```

---

## ☁️ Deploy to Vercel

### Option A: Vercel CLI (recommended)

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option B: GitHub + Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Framework preset: **Next.js** (auto-detected)
5. Click **Deploy**

Vercel will automatically:
- Build with `next build`
- Deploy to global CDN
- Enable HTTPS + HTTP/2
- Configure security headers (from `vercel.json`)

---

## 📁 Project Structure

```
agrilens-ai/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   └── page.tsx            # Main page (assembles all sections)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav with mobile hamburger
│   │   └── Footer.tsx      # Full footer with links
│   ├── sections/
│   │   ├── HeroSection.tsx         # Hero with phone mockup + trust indicators
│   │   ├── ProblemSection.tsx      # Problem + animated stat cards
│   │   ├── ProductSection.tsx      # Interactive 6-tab product walkthrough
│   │   ├── DiseasesSection.tsx     # 4 disease cards with symptoms + impact
│   │   ├── DifferentiationSection.tsx  # Comparison table vs competitors
│   │   ├── FeaturesSection.tsx     # 6 feature cards (glassmorphism)
│   │   ├── RoadmapSection.tsx      # 4-phase expansion timeline
│   │   ├── BuiltWithFarmersSection.tsx # Discovery research, stats, and testimonials
│   │   ├── BusinessModelSection.tsx # 3-tier pricing
│   │   ├── FounderSection.tsx      # Founder card with quote
│   │   ├── PartnershipsSection.tsx # Partner org cards
│   │   ├── VisionSection.tsx       # Vision pillars + Africa map
│   │   └── CtaSection.tsx          # Final CTA with emotional close
│   └── ui/
│       ├── PhoneMockup.tsx         # Animated phone with 6 screen states
│       ├── SectionReveal.tsx       # Scroll-triggered reveal wrapper
│       └── AnimatedCounter.tsx     # Number counter on scroll into view
├── lib/
│   └── utils.ts            # cn() utility (clsx + tailwind-merge)
├── styles/
│   └── globals.css         # Global styles + CSS custom properties
├── public/
│   ├── favicon.svg
│   └── images/
│       └── IMAGES.md       # Image placeholder guide
├── tailwind.config.js      # Brand tokens + custom utilities
├── next.config.mjs
├── vercel.json             # Deployment config + security headers
└── tsconfig.json
```

---

## 🎨 Brand Tokens (Tailwind)

| Token | Value | Usage |
|---|---|---|
| `brand-green` | `#2E7D32` | Primary buttons, accents |
| `brand-deep-green` | `#1B5E20` | Dark sections, hover |
| `brand-gold` | `#F9A825` | Featured, CTA emphasis |
| `brand-bg` | `#FAFAF7` | Page background |
| `brand-text` | `#111111` | Body text |
| `brand-text-muted` | `#555555` | Secondary text |
| `brand-green-light` | `#E8F5E9` | Tinted backgrounds |
| `brand-border` | `#E8E8E4` | Card borders |

---

## 🖼️ Replacing Placeholder Images

Search for `PLACEHOLDER:` comments in components. Replace placeholder `<div>` elements with `<Image>` from Next.js:

```tsx
import Image from 'next/image';

// Founder photo
<div className="relative w-32 h-32 rounded-full overflow-hidden">
  <Image
    src="/images/founder/maimuna.jpg"
    fill
    className="object-cover"
    alt="Maimuna Mohammed"
  />
</div>
```

See `/public/images/IMAGES.md` for the full list of images needed.

---

## ♿ Accessibility

- WCAG AA color contrast on all text
- `aria-label` on icon buttons
- `alt` text on all images
- Keyboard-navigable tabs in ProductSection
- `prefers-reduced-motion` respected in globals.css

---

## 📱 Mobile Responsiveness

All sections are mobile-first. Key breakpoints:
- **Mobile** (`< 640px`): Single column, stacked layouts
- **Tablet** (`640px-1024px`): 2-column grids
- **Desktop** (`> 1024px`): Full multi-column layouts

---

## 🔧 Customization

### Update contact emails in CtaSection.tsx:
```tsx
href="mailto:hello.agrilensservices@gmail.com?subject=Investor Demo Request"
href="mailto:hello.agrilensservices@gmail.com?subject=Partnership Inquiry"
```

### Update nav links in Navbar.tsx:
```tsx
const navLinks = [
  { label: 'Product', href: '#product' },
  // Add/remove links here
];
```

---

## 📊 Performance Targets

| Metric | Target |
|---|---|
| LCP | < 2.0s |
| CLS | < 0.05 |
| FID | < 100ms |
| Lighthouse Performance | > 90 |

Fonts are preloaded. All animations respect `prefers-reduced-motion`. Images use Next.js `<Image>` with automatic WebP conversion.

---

## 🌍 About AgriLens AI

AgriLens AI helps maize farmers across Africa detect crop diseases early, receive localized treatment guidance, and protect their harvests using a simple smartphone photo.

**Supported diseases:** Healthy Leaf · Maize Streak Disease (MSD) · Northern Corn Leaf Blight (NCLB) · Common Rust (CR)

**Mission:** Every diseased leaf is a chance to save a harvest.

**Vision:** Build Africa's Crop Health Intelligence Network.

---

*Built with purpose. Deployed with pride. Protecting African harvests with intelligence.*
