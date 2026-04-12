# Lumière Studio — Premium Photography Website

A full-featured, production-ready photography portfolio website built with **Next.js 15 (App Router)**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide React**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 📁 Project Structure

```
photography-site/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky navbar with blur, dark mode toggle, mobile menu
│   │   ├── Hero.tsx          # Fullscreen hero with overlay + animations
│   │   ├── Portfolio.tsx     # Filterable grid gallery with lightbox
│   │   ├── About.tsx         # Two-column about section with stats
│   │   ├── Pricing.tsx       # 3-tier pricing cards
│   │   ├── Testimonials.tsx  # Auto-rotating carousel
│   │   ├── Contact.tsx       # Form + WhatsApp CTA
│   │   ├── Instagram.tsx     # IG grid preview
│   │   └── Footer.tsx        # Footer with social links
│   ├── globals.css           # Tailwind v4 + design tokens (CSS vars)
│   ├── layout.tsx            # Root layout with SEO metadata
│   └── page.tsx              # Home page assembly
├── next.config.ts            # Next.js config (image domains)
├── postcss.config.mjs        # PostCSS for Tailwind v4
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

### Color Palette (CSS Variables)
| Token               | Dark Mode    | Light Mode   |
|---------------------|-------------|-------------|
| `--color-bg`        | `#0a0a09`   | `#f8f5f0`   |
| `--color-surface`   | `#111110`   | `#ffffff`   |
| `--color-accent`    | `#c9a96e`   | `#a07840`   |
| `--color-text`      | `#f5f0eb`   | `#1a1a18`   |
| `--color-text-muted`| 50% opacity | 50% opacity |

### Typography
- **Display Font**: Cormorant Garamond (serif) — headings, quotes, brand name
- **Body Font**: DM Sans — UI, labels, body text

---

## 🔧 Customisation Guide

### 1. Photographer Info
Update these across the components:
- **Name**: `Adaeze Okonkwo` → in `About.tsx`
- **Brand**: `Lumière` → in `Navbar.tsx` and `Footer.tsx`
- **WhatsApp number**: in `Contact.tsx` — replace `2348012345678`
- **Email/Phone**: in `Contact.tsx`
- **Instagram handle**: in `Instagram.tsx` and `Footer.tsx`

### 2. Portfolio Images
In `Portfolio.tsx`, update the `portfolioImages` array with your real Unsplash or hosted image URLs. Each image has:
```ts
{
  id: number,
  src: string,        // image URL
  category: string,  // "Weddings" | "Portraits" | "Events" | "Fashion"
  title: string,
  aspect: "portrait" | "landscape" | "square"
}
```

### 3. Pricing
Update `packages` array in `Pricing.tsx` with your actual prices and features.

### 4. Testimonials
Update `testimonials` array in `Testimonials.tsx` with real client reviews.

### 5. SEO Metadata
Update `app/layout.tsx` — title, description, keywords, OG data.

---

## ✨ Features

### Sections
- **Hero** — Fullscreen background, gradient overlay, animated tagline, dual CTA, scroll indicator
- **Portfolio** — Category filter (All/Weddings/Portraits/Events/Fashion), hover zoom, lightbox modal
- **About** — Two-column layout, stats grid, floating badge, decorative bg text
- **Pricing** — 3 cards (Mini/Standard/Full Event), featured highlight, feature checklist
- **Testimonials** — Auto-rotating carousel (6s), manual nav, dot indicators
- **Contact** — Validated form, WhatsApp CTA (green button), contact details, availability note
- **Instagram** — 6-post grid preview with like overlay
- **Footer** — Social icons, nav links, back to top

### Animations (Framer Motion)
- Fade-in + slide-up on scroll (`whileInView`)
- Staggered children with `delay`
- Hover scale on cards and buttons
- Layout animations on portfolio filter
- Lightbox scale-in / scale-out
- Testimonial slide transitions
- Scroll indicator bounce

### Performance & SEO
- Next.js `Image` component with `fill`, `sizes`, `priority`, lazy loading
- `next.config.ts` image domain allowlist
- Semantic HTML (`section`, `nav`, `footer`, `article`)
- Full `metadata` object in `layout.tsx` (title, description, keywords, OG, Twitter)
- Dark mode via CSS variables (no layout shift, persisted to localStorage)
- Custom scrollbar
- Grain texture overlay for premium feel

---

## 🌙 Dark Mode

Dark mode is the default. A sun/moon toggle in the navbar switches modes.  
The preference is saved to `localStorage` and re-applied on reload via an inline script in `<head>` to prevent FOUC.

---

## 📱 Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `> 768px` | Full desktop layout |
| `≤ 768px` | Single column, mobile nav menu |
| `≤ 480px` | Tighter spacing, 2-col IG grid |

---

## 🔗 WhatsApp Integration

The WhatsApp button in the Contact section links to:
```
https://wa.me/2348012345678?text=Hi%20Adaeze!%20I'd%20love%20to%20book%20a%20session%20with%20Lumière%20Studio.
```
Replace `2348012345678` with your international format number (no `+` or spaces).

---

## 🚢 Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect your GitHub repo at vercel.com for automatic deploys
```

The `next.config.ts` already includes the Unsplash image domain. Add any additional image host domains there.

---

## 📦 Dependencies

| Package | Version | Use |
|---|---|---|
| `next` | 15.0 | Framework |
| `react` | 18 | UI library |
| `framer-motion` | 11 | Animations |
| `lucide-react` | 0.447 | Icons |
| `tailwindcss` | 4.0 | Styling |
| `@tailwindcss/postcss` | 4.0 | Tailwind v4 PostCSS plugin |

---

*Built for Lumière Studio — Premium Photography, Lagos, Nigeria*
