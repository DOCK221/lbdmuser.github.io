# 🎨 Customization Guide

Learn how to customize your landing page template to match your brand and product.

## Table of Contents

1. [Changing Colors](#changing-colors)
2. [Changing Fonts](#changing-fonts)
3. [Editing Content](#editing-content)
4. [Replacing Images](#replacing-images)
5. [Customizing Components](#customizing-components)
6. [Adding New Sections](#adding-new-sections)
7. [SEO & Metadata](#seo--metadata)

---

## Changing Colors

### Method 1: Edit CSS Variables (Recommended)

Edit `app/globals.css` to change your color scheme:

```css
:root {
  --background: 0 0% 100%;          /* #ffffff */
  --foreground: 240 10% 3.9%;       /* #09090b */
  --primary: 240 5.9% 10%;          /* Your brand color */
  --secondary: 240 4.8% 95.9%;      /* Secondary color */
  /* ... more variables */
}
```

**Color values use HSL format**: `hue saturation lightness`

Example: `240 5.9% 10%` = `hsl(240, 5.9%, 10%)`

### Method 2: Use Gradient Buttons

Change gradient colors in components:

```tsx
// From this:
<Button variant="gradient">Get Started</Button>

// The gradient is defined in button.tsx:
bg-gradient-to-r from-blue-600 to-purple-600

// Change to:
bg-gradient-to-r from-emerald-600 to-teal-600
```

### Popular Color Schemes

**Blue/Purple (Default)**
```css
--primary: 240 5.9% 10%;
/* Gradients: from-blue-600 to-purple-600 */
```

**Green/Emerald**
```css
--primary: 142 76% 36%;
/* Gradients: from-emerald-600 to-teal-600 */
```

**Orange/Red**
```css
--primary: 24 95% 53%;
/* Gradients: from-orange-600 to-red-600 */
```

---

## Changing Fonts

### Step 1: Choose Your Fonts

Visit [Google Fonts](https://fonts.google.com/) and select 2 fonts:
- One for **headings** (bold, distinctive)
- One for **body text** (readable)

### Step 2: Update Layout

Edit `app/layout.tsx`:

```tsx
// Replace this:
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// With this (example: Inter + Poppins):
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});
```

### Step 3: Update CSS

Edit `app/globals.css`:

```css
@theme inline {
  --font-sans: var(--font-inter);
  --font-heading: var(--font-poppins);
}

body {
  font-family: var(--font-sans);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
}
```

---

## Editing Content

### Change Text Content

All text is in the component files. Find and replace:

**Example: Hero Section**

Edit `components/hero/hero-1.tsx`:

```tsx
// Change headline:
<h1>
  Ship Your SaaS in{" "}
  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    Hours, Not Weeks
  </span>
</h1>

// To your headline:
<h1>
  Grow Your Business{" "}
  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    10x Faster
  </span>
</h1>
```

### Change Button Text

```tsx
// Find buttons:
<Button size="lg" variant="gradient">
  Start Building Now
</Button>

// Change to:
<Button size="lg" variant="gradient">
  Get Started Free
</Button>
```

### Quick Content Locations

| Component | File | What to Change |
|-----------|------|----------------|
| Hero headline | `components/hero/hero-1.tsx` | Main headline, subheadline, CTA |
| Features | `components/features/feature-grid.tsx` | Feature titles and descriptions |
| Pricing | `components/pricing/pricing-table.tsx` | Plans, prices, features |
| Testimonials | `components/testimonials/testimonial-grid.tsx` | Customer quotes and names |
| FAQ | `components/faq/faq-accordion.tsx` | Questions and answers |

---

## Replacing Images

### Step 1: Add Your Images

Place your images in the `/public` folder:

```
public/
├── logo.png
├── hero-screenshot.png
├── app-mockup.png
└── avatars/
    ├── customer-1.jpg
    └── customer-2.jpg
```

### Step 2: Update Components

Use Next.js Image component:

```tsx
import Image from "next/image"

// Replace placeholder:
<div className="text-6xl">🚀</div>

// With your image:
<Image
  src="/hero-screenshot.png"
  alt="Dashboard preview"
  width={1200}
  height={800}
  className="rounded-lg"
/>
```

### Step 3: Update Testimonial Avatars

Edit `components/testimonials/testimonial-grid.tsx`:

```tsx
// Replace emoji:
<div className="text-2xl">{testimonial.avatar}</div>

// With image:
<Image
  src={`/avatars/${testimonial.id}.jpg`}
  alt={testimonial.name}
  width={48}
  height={48}
  className="rounded-full"
/>
```

---

## Customizing Components

### Changing Component Variants

Many components have variants you can mix and match:

**Button Variants**
```tsx
<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="gradient">Gradient</Button>
```

**Hero Variants**
```tsx
// Use different hero styles:
import Hero1 from "@/components/hero/hero-1"  // Center aligned
import Hero2 from "@/components/hero/hero-2"  // Two column
import Hero3 from "@/components/hero/hero-3"  // Waitlist style
```

### Removing Sections

To remove a section from a page, simply delete or comment out the import and component:

```tsx
// app/page.tsx
import Hero1 from "@/components/hero/hero-1"
// import ProblemSection from "@/components/problem/problem-section"  // ← Remove
import FeatureGrid from "@/components/features/feature-grid"

export default function Home() {
  return (
    <main>
      <Hero1 />
      {/* <ProblemSection /> */}  {/* ← Don't render */}
      <FeatureGrid />
    </main>
  )
}
```

### Reordering Sections

Just change the order of components in your page file:

```tsx
// Before:
<Hero1 />
<LogoCloud />
<ProblemSection />

// After:
<Hero1 />
<ProblemSection />
<LogoCloud />
```

---

## Adding New Sections

### Method 1: Duplicate Existing Component

1. Copy an existing component:
```bash
cp components/features/feature-grid.tsx components/features/feature-grid-2.tsx
```

2. Rename the function:
```tsx
export default function FeatureGrid2() {
  // ... your changes
}
```

3. Import and use:
```tsx
import FeatureGrid2 from "@/components/features/feature-grid-2"

<FeatureGrid2 />
```

### Method 2: Create From Scratch

Create a new component file:

```tsx
// components/custom/my-section.tsx
"use client"

import { motion } from "framer-motion"

export default function MySection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          My Custom Section
        </h2>
        {/* Your content here */}
      </div>
    </section>
  )
}
```

Then import and use it in your page.

---

## SEO & Metadata

### Update Page Metadata

Edit `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Your Product Name - Tagline",
  description: "Your compelling product description for search engines (150-160 characters)",
  keywords: ["saas", "product", "your", "keywords"],
  openGraph: {
    title: "Your Product Name",
    description: "Product description",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Product Name",
    description: "Product description",
    images: ["/twitter-image.png"],
  },
}
```

### Add Favicon

Replace files in `/public`:
- `favicon.ico` (32×32)
- `icon.png` (any size)
- `apple-icon.png` (180×180)

### Add Analytics

Edit `app/layout.tsx` to add Google Analytics:

```tsx
import Script from "next/script"

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  )
}
```

---

## Tips & Best Practices

### 1. Keep It Simple
- Don't change everything at once
- Test after each major change
- Keep the original files as backup

### 2. Maintain Consistency
- Use the same color scheme throughout
- Stick to 2-3 fonts maximum
- Keep spacing consistent

### 3. Test Responsiveness
```bash
# Test on different screen sizes
# Mobile: 375px, 414px
# Tablet: 768px, 1024px
# Desktop: 1280px, 1920px
```

### 4. Optimize Images
- Use WebP format when possible
- Compress images before uploading
- Use appropriate sizes (don't use 4K images for thumbnails)

### 5. Keep Performance in Mind
- Minimize custom CSS
- Use Tailwind utilities
- Lazy load images below the fold

---

## Common Customizations

### Change Logo

Edit `components/layout/navbar.tsx` and `components/layout/footer.tsx`:

```tsx
// Replace this:
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
  <Sparkles className="h-6 w-6 text-white" />
</div>
<span className="text-xl font-bold">SaaSKit</span>

// With your logo:
<Image
  src="/logo.svg"
  alt="Your Company"
  width={120}
  height={40}
/>
```

### Change Pricing

Edit `components/pricing/pricing-table.tsx`:

```tsx
const plans = [
  {
    name: "Starter",
    monthlyPrice: 29,  // ← Change price
    annualPrice: 290,
    features: [
      "Feature 1",     // ← Edit features
      "Feature 2",
    ],
  },
]
```

### Add Social Links

Edit `components/layout/footer.tsx`:

```tsx
<a href="https://twitter.com/yourhandle" target="_blank" rel="noopener">
  <MessageCircle className="h-5 w-5" />
</a>
```

---

## Need Help?

- 📧 Email: support@landingpagekit.com
- 📖 Full docs: [docs.landingpagekit.com](https://docs.landingpagekit.com)
- 💬 Discord: [Join community](https://discord.gg/landingpagekit)

---

**Pro Tip**: Make small changes and test frequently. Use Git to track your changes so you can easily revert if needed.
