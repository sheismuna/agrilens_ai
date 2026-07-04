# Image Placeholders: AgriLens AI

Replace these files with real photos before production:

## `/public/images/`

### `og-image.png` (1200×630)
Open Graph image for social sharing.
Recommended: Green background with AgriLens AI logo and tagline.

### `diseases/`
- `healthy.jpg`: Healthy maize leaf (green, no lesions)
- `msd.jpg`: Maize Streak Disease (pale yellow streaks on leaf)
- `nclb.jpg`: Northern Corn Leaf Blight (cigar-shaped tan lesions)
- `common-rust.jpg`: Common Rust (reddish-brown pustules)

### `founder/`
- `maimuna.jpg`: Professional headshot (400×400, square crop)

### `farmers/`
- `aliyu.jpg`: Testimonial, Aliyu Ibrahim (200×200)
- `fatima.jpg`: Testimonial, Fatima Kwara (200×200)
- `emmanuel.jpg`: Testimonial, Emmanuel Okafor (200×200)

### `app-screens/`
- `scan.png`: App screenshot, leaf scan interface
- `diagnosis.png`: App screenshot, diagnosis result
- `treatment.png`: App screenshot, treatment plan
- `voice.png`: App screenshot, voice guidance active
- `tracking.png`: App screenshot, disease tracking chart

## Usage in components:
```tsx
import Image from 'next/image';

// Replace placeholder <div> with:
<div className="relative w-32 h-32 rounded-full overflow-hidden">
  <Image
    src="/images/founder/maimuna.jpg"
    fill
    className="object-cover"
    alt="Maimuna Mohammed, Founder AgriLens AI"
  />
</div>
```

Search for `PLACEHOLDER:` comments in components to find exact swap locations.
