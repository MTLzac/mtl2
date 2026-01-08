# Mobile Tech Lab Design System Prompt

Use this prompt when starting new Lovable projects to replicate the professional, conversion-focused design aesthetic.

---

## Design Philosophy

Build a **professional service business website** with a clean, trustworthy aesthetic. Focus on:
- High contrast for readability
- Bold primary color for CTAs and brand identity
- Generous whitespace with purposeful density in content areas
- Mobile-first responsive design
- Conversion-focused UI patterns (trust badges, sticky CTAs, clear hierarchy)

---

## Technology Stack

- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: shadcn/ui (customized)
- **Icons**: Lucide React
- **Font**: Inter (via @fontsource/inter)
- **Routing**: React Router DOM
- **SEO**: React Helmet Async

---

## Color System (HSL Values)

### Light Mode
```css
--background: 0 0% 100%;           /* Pure white */
--foreground: 220 15% 15%;         /* Dark charcoal */

--card: 0 0% 100%;
--card-foreground: 220 15% 15%;

--primary: 1 76% 55%;              /* Brand red #E53935 */
--primary-foreground: 0 0% 100%;   /* White text on primary */

--secondary: 0 0% 96%;             /* Light gray background */
--secondary-foreground: 220 15% 15%;

--muted: 0 0% 94%;
--muted-foreground: 220 10% 45%;   /* Subdued text */

--accent: 1 76% 55%;               /* Same as primary for consistency */
--accent-foreground: 0 0% 100%;

--success: 142 76% 36%;            /* Green for positive indicators */
--success-foreground: 0 0% 100%;

--destructive: 0 84% 60%;
--destructive-foreground: 0 0% 100%;

--border: 0 0% 90%;
--input: 0 0% 90%;
--ring: 1 76% 55%;                 /* Focus ring matches primary */

--radius: 0.5rem;
```

### Dark Mode
```css
--background: 220 15% 10%;
--foreground: 0 0% 96%;

--card: 220 12% 14%;
--card-foreground: 0 0% 96%;

--primary: 1 76% 55%;              /* Primary stays consistent */
--primary-foreground: 0 0% 100%;

--secondary: 220 12% 18%;
--secondary-foreground: 0 0% 96%;

--muted: 220 10% 20%;
--muted-foreground: 0 0% 65%;

--accent: 1 76% 55%;
--accent-foreground: 0 0% 100%;

--border: 220 12% 22%;
--input: 220 12% 22%;
```

---

## Typography

### Font Family
```css
font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
```

### Heading Styles
- All headings: `font-bold tracking-tight`
- H1: `text-3xl md:text-4xl lg:text-5xl`
- H2: `text-2xl md:text-3xl`
- H3: `text-xl md:text-2xl`
- Body: `text-base` (16px)
- Small/Muted: `text-sm text-muted-foreground`

### Text Utilities
```css
.text-gradient {
  @apply bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent;
}
```

---

## Spacing System

### Container
- Max width: `max-w-4xl` for content, `max-w-6xl` for wider sections
- Padding: `px-4` mobile, `px-6` tablet+
- Section spacing: `py-12 md:py-16 lg:py-20`

### Component Spacing
- Card padding: `p-6`
- Button gaps: `gap-2` (internal), `gap-4` (between buttons)
- Grid gaps: `gap-4` to `gap-8`
- Stack spacing: `space-y-4` to `space-y-8`

---

## Component Patterns

### Buttons

```tsx
// Primary CTA - High emphasis
<Button size="lg" className="gap-2">
  <Icon className="w-5 h-5" />
  Primary Action
</Button>

// Secondary/Soft - Medium emphasis
<Button variant="soft" size="lg" className="gap-2">
  <Icon className="w-5 h-5" />
  Secondary Action
</Button>

// Outline - Low emphasis
<Button variant="outline" size="lg">
  Tertiary Action
</Button>
```

**Custom "soft" variant** (add to button.tsx):
```tsx
soft: "border border-primary/40 bg-primary/10 text-primary hover:bg-primary/15 hover:border-primary/60"
```

### Cards

```tsx
<Card className="border-0 shadow-lg">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description text</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>

// Accent border card
<Card className="border-l-4 border-l-primary">
```

### Trust Badges

```tsx
<div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
  <Star className="w-4 h-4 fill-primary" />
  <span>4.9 Google Rating</span>
</div>
```

### Section Headers

```tsx
<div className="text-center space-y-4 mb-12">
  <h2 className="text-2xl md:text-3xl font-bold">Section Title</h2>
  <p className="text-muted-foreground max-w-2xl mx-auto">
    Supporting description text that provides context.
  </p>
</div>
```

---

## Layout Patterns

### Hero Section
```tsx
<section className="relative bg-gradient-to-br from-secondary via-background to-secondary py-16 md:py-24 overflow-hidden">
  <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
    {/* Trust badges */}
    {/* H1 headline */}
    {/* Tagline paragraph */}
    {/* CTA button group */}
  </div>
  {/* Decorative background elements */}
</section>
```

### Responsive Grid
```tsx
// 2-column on mobile, 3 on tablet, 4 on desktop
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

// Feature cards - 1 column mobile, 2 tablet, 3 desktop
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Sticky CTA Bar
```tsx
<div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t p-4 z-50 md:hidden">
  <div className="flex gap-3">
    <Button className="flex-1">Primary CTA</Button>
    <Button variant="outline">Secondary</Button>
  </div>
</div>
```

---

## Animations

### Keyframes (add to tailwind.config.ts)
```js
keyframes: {
  "fade-in": {
    "0%": { opacity: "0", transform: "translateY(10px)" },
    "100%": { opacity: "1", transform: "translateY(0)" }
  },
  "scale-in": {
    "0%": { transform: "scale(0.95)", opacity: "0" },
    "100%": { transform: "scale(1)", opacity: "1" }
  },
  "slide-in-right": {
    "0%": { transform: "translateX(100%)" },
    "100%": { transform: "translateX(0)" }
  }
}
```

### Animation Classes
```js
animation: {
  "fade-in": "fade-in 0.3s ease-out",
  "scale-in": "scale-in 0.2s ease-out",
  "slide-in-right": "slide-in-right 0.3s ease-out",
  "enter": "fade-in 0.3s ease-out, scale-in 0.2s ease-out"
}
```

### Hover Effects
```css
.hover-scale {
  @apply transition-transform duration-200 hover:scale-105;
}

/* Underline animation for links */
.story-link {
  @apply relative after:content-[''] after:absolute after:w-full after:scale-x-0 
         after:h-0.5 after:bottom-0 after:left-0 after:bg-primary 
         after:origin-bottom-right after:transition-transform after:duration-300 
         hover:after:scale-x-100 hover:after:origin-bottom-left;
}
```

---

## Icon Usage

- Icon size in buttons: `w-5 h-5`
- Icon size in lists: `w-4 h-4`
- Icon with text: `gap-2` spacing
- Filled icons for emphasis: `fill-primary` or `fill-current`

Common icons:
- Phone, MessageCircle (contact)
- Star (ratings)
- Check, CheckCircle (features/benefits)
- MapPin (locations)
- Clock (time/speed)
- Shield (trust/warranty)
- Wrench, Settings (services)

---

## SEO Patterns

```tsx
<Helmet>
  <title>Page Title | Brand Name</title>
  <meta name="description" content="Under 160 chars description" />
  <link rel="canonical" href="https://domain.com/page" />
</Helmet>
```

- Title: Under 60 characters, keyword first
- Meta description: Under 160 characters
- Single H1 per page matching intent
- Semantic HTML: header, main, section, article, footer

---

## File Structure

```
src/
├── assets/           # Images, logos
├── components/
│   ├── ui/          # shadcn components (customized)
│   ├── layout/      # Header, Footer
│   ├── home/        # Homepage sections
│   └── [feature]/   # Feature-specific components
├── pages/           # Route components
├── hooks/           # Custom hooks
├── lib/             # Utilities, constants
└── index.css        # Design tokens, base styles
```

---

## Quick Start Prompt

Copy this condensed version for new projects:

```
Build a professional service website with:
- Primary color: HSL 1 76% 55% (vibrant red)
- Clean white background with dark charcoal text
- Inter font family, bold headings with tight tracking
- shadcn/ui components with custom "soft" button variant
- Trust badges with primary color background at 10% opacity
- Generous section padding (py-16 md:py-24)
- Sticky mobile CTA bar
- Fade-in and scale animations
- Responsive grids (2/3/4 columns)
- Max content width 4xl, centered
```
