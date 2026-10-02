# CLAUDE.md — Xpress Nails website

Permanent instructions for every Claude Code session in this repository. Read this file before doing anything else.

## Project Overview

- **Project:** Xpress Nails website (repository `dhwang0324/xpress-nail-salon`, public)
- **Live website:** https://xpressnailssalon.com/
- **Business name:** Nail Xpress. This is the official and canonical name. Always spell it "Nail Xpress" and preserve that spelling everywhere on the website (hero, page titles, logo alt text, footer, map title, image alt text).
- **Social handle:** `nailxpressmarietta`
- **Business:** A nail salon at 3605 Sandy Plains Rd, Marietta, GA 30066
- **Footer credit:** "Developed and designed by Solace."

The site is approved and live. Preserve it as it is unless a redesign is explicitly requested.

## Technical Information

Everything below was read from the repository.

- **Framework:** Next.js `16.2.10` (App Router), React `19.2.4`, React DOM `19.2.4`.
- **Rendering:** Fully static export. `next.config.ts` sets `output: "export"`, `trailingSlash: true` and `images: { unoptimized: true }`. There is no server in production: no API routes, server actions, middleware or image optimizer. The build writes the site to `out/`.
- **Animation:** `framer-motion` `^11.18.2` (11.18.2 installed).
- **TypeScript:** `^5` (5.9.3 installed), `strict: true`, `moduleResolution: bundler`, path alias `@/*` → project root.
- **Styling:** Tailwind CSS v4 (`^4`, 4.3.3 installed) through `@tailwindcss/postcss`. There is no `tailwind.config` file; tokens are defined in `app/globals.css`. Almost all styling is Tailwind utility classes written directly in the components. The only custom class is `.eyebrow`.
- **Linting:** ESLint 9 flat config (`eslint.config.mjs`) with `eslint-config-next` core-web-vitals and typescript.
- **Package manager:** npm, with `package-lock.json`. CI uses `npm ci` on Node 22.
- **Tests:** none. Type errors surface in `npm run build`.
- **Environment:** no `.env` files, no credentials and no server-side code in the repository.

### Commands

| Command | Purpose |
|---|---|
| `npm ci` | Install exactly what the lockfile specifies |
| `npm run dev` | Local preview (`next dev`) |
| `npm run lint` | ESLint |
| `npm run build` | Production build (`next build`), output in `out/` |

`npm run lint` currently reports one existing error: `react-hooks/set-state-in-effect` at `components/xpressnails/services/category-tabs.tsx:27`. It predates this file and does not block the build or the deployment (the workflow does not run lint). Do not fix it as a side effect of another task; when reporting lint results, say whether a change introduced anything beyond this known error.

### Project structure

```
app/
  layout.tsx            Root layout: fonts, default metadata, <body> classes
  globals.css           Tailwind import, color tokens, fonts, .eyebrow
  page.tsx              Home
  services/page.tsx     Services & Pricing
  gallery/page.tsx      Gallery
  contact/page.tsx      Contact
components/
  ui/                   Shared primitives
  xpressnails/          Site-specific components
    nav.tsx, footer.tsx
    home/               Homepage sections
    services/           category-tabs.tsx
    contact/            store-map.tsx
lib/
  services.ts           All services, prices and categories
public/media/           Logo and all photographs
.github/workflows/
  deploy.yml            Hostinger FTP deployment
```

Each page file renders `<Nav />`, `<main className="flex-1">` and `<Footer />` itself; the root layout does not include them.

### Pages

| Page | Route | File | Content |
|---|---|---|---|
| Home | `/` | `app/page.tsx` | `Hero` → `About` → `WhyChooseUs` → `FeaturedServices` → `GalleryPreview` → `Testimonials` → `InstagramPreview` → `FinalCta` |
| Services | `/services/` | `app/services/page.tsx` | Heading, pricing note, `CategoryTabs` fed by `lib/services.ts` |
| Gallery | `/gallery/` | `app/gallery/page.tsx` | Masonry of 9 nail photos and 5 interior photos (list defined in the page file) |
| Contact | `/contact/` | `app/contact/page.tsx` | Hours, phone, address, social links, Google map embed, storefront photo |

There is no booking system and no contact form. Every "Book Appointment" button links to `/contact`, where visitors call or get directions.

### Components

Shared primitives in `components/ui/` — reuse these before writing anything new:

- `Container` — centered `max-w-6xl` wrapper with responsive side padding.
- `Button` — pill-shaped link with arrow; variants `dark`, `light`, `outline`.
- `FadeIn` — fade-and-rise on scroll into view (framer-motion, runs once).
- `SectionHeading` — eyebrow + `h2` + optional description; `align` and `light` options.
- `ImagePlaceholder` — the photo component used for every photograph. With `src` it renders a `next/image` filling a box set by `aspect`, with `rounded`, `objectPosition` and an optional `mobileObjectPosition` (applied below 640px). Without `src` it renders a labelled placeholder.

Site components in `components/xpressnails/`:

- `nav.tsx` — fixed header: logo left, four links right. Transparent at the top of the page, translucent warm-white with a hairline border after 40px of scroll. Below `md` it becomes a hamburger with a drop-down panel that also contains "Book Appointment".
- `footer.tsx` — logo and tagline, Explore links, Hours, Connect, copyright line.
- `home/*` — one file per homepage section.
- `services/category-tabs.tsx` — pill tabs, one per category. Opens the category named in the URL hash (`/services#pedicures`) and updates the hash on click. On phones the tabs scroll horizontally.
- `contact/store-map.tsx` — Google Maps iframe built from the address.

Components that use state, effects or framer-motion are client components (`"use client"`).

### Services data

All services and prices live in `lib/services.ts` as `serviceCategories`. The array order is the display order of the tabs:

1. Manicures
2. Pedicures
3. Acrylic (with an Add-Ons list and a design-price disclaimer)
4. Polish Changes
5. Waxing
6. Kids

Preserve this organization. **The Kids category stays last.** The category `slug` values are used as URL hashes by `FeaturedServices` (`/services#manicures`, `#pedicures`, `#acrylic`); do not rename them without updating those links.

### Media

All media is in `public/media/` and is referenced by path (`/media/...`) directly in the components:

| File(s) | Used in |
|---|---|
| `logo.png` (1024×428) | Nav and footer |
| `salon-hero-photo.jpg` (2400×1600) | Home hero |
| `home-about-care2.jpg` | Home About section |
| `gallery-nail-1.jpg` … `gallery-nail-9.jpg` | Gallery page; 3, 5 and 7 also appear in Featured Services |
| `store-interior-1.jpg` … `store-interior-4.jpg`, `store-reception.jpg` | Home "A Look Inside" grid and Gallery page |
| `insta-1.jpg` … `insta-5.jpg` | Home Instagram strip |
| `contact-storefront.jpg` (2400×1600) | Contact page |

The favicon is `app/icon.png` (512×512): the header logo centered on a transparent square. Next.js adds the `<link rel="icon">` tag from this file automatically. If the logo changes, regenerate it from `public/media/logo.png`. There is no video.

### Contact details currently on the site

These appear in more than one file; if one is ever updated, update every occurrence.

- Address: 3605 Sandy Plains Rd, Marietta, GA 30066 — `app/contact/page.tsx`
- Phone: (770) 578-0078 — `app/contact/page.tsx`, `components/xpressnails/footer.tsx`
- Hours: Monday–Saturday 10am–7pm, Sunday 12pm–6pm — contact page and footer
- Instagram `nailxpressmarietta`, Facebook `NailXpressMarietta` — contact page, footer, Instagram strip

## Design System

The look is quiet, warm and minimal: light neutral backgrounds, very light-weight sans headings, small italic serif accents, generous spacing and large rounded photographs.

### Colors (`app/globals.css`)

| Token | Value | Typical use |
|---|---|---|
| `warm-white` | `#faf8f4` | Page background, text on dark sections |
| `cream` | `#f4ede2` | Footer and Instagram section background, light hover |
| `stone` | `#e9e0d2` | "Why Choose Us" background |
| `beige` | `#ddd0ba` | Text selection, placeholder tones |
| `taupe` | `#a89179` | Eyebrow text on dark sections |
| `taupe-dark` | `#7d6b56` | Eyebrows, prices, stars, numerals |
| `brown` | `#5c4632` | Placeholder gradient only |
| `charcoal` | `#26211c` | Body text, dark buttons, dark section background |
| `black-soft` | `#16130f` | Final call-to-action background, hero overlay |

Use the tokens (`bg-cream`, `text-charcoal/55`, `border-charcoal/10`, …). Secondary text is charcoal at reduced opacity, not a separate gray. Do not introduce new colors.

### Typography

- **Inter** (`font-sans`, weights 200–700) for everything by default. Headings are `font-extralight` with tight tracking.
- **Instrument Serif** (`font-serif`, regular and italic) for accents: `.eyebrow` labels, prices, testimonial quotes, numerals.
- Small labels and buttons: `text-xs uppercase tracking-wide2` (0.14em).
- Fonts are loaded with `next/font/google` in `app/layout.tsx`.

### Layout and motion conventions

- Sections use `py-24 sm:py-32`; inner pages start with `pt-40 sm:pt-48` to clear the fixed header.
- Photos use `rounded-[2rem]` (large) or `rounded-xl` (grids); buttons and tabs are `rounded-full`.
- Dividers are 1px `charcoal/10` hairlines.
- Motion is limited to `FadeIn` on scroll, a slow scale on the hero image, the tab cross-fade and small arrow nudges on hover. Keep it that subtle; do not add new effects.

## Mobile Responsiveness

- Tailwind's default breakpoints are used: `sm` 640px, `md` 768px, `lg` 1024px.
- The navigation switches to the hamburger menu below `md`.
- Grids collapse to one or two columns on phones; the service tabs scroll sideways; the gallery is two columns on phones and three from `sm`.
- The hero is `h-[92svh]` with a 640px minimum and uses a different photo focal point below 640px (`mobileObjectPosition`).
- After any visual change, check the affected page at phone width (about 375px), tablet width (about 768px) and desktop width, including the open mobile menu when the header is involved.

## Image Quality

- Images are served exactly as stored (`images.unoptimized`), so every new image must be resized and compressed before it is added. Existing photos are roughly 1400–2400px on the long edge and 160–890 KB.
- Do not upscale, stretch or over-compress. Photos are shown with `object-cover`; control framing with `aspect`, `objectPosition` and `mobileObjectPosition` instead of editing the file.
- Give every image meaningful alt text.
- Use the real approved images already in `public/media/`. Do not add stock photography or generated images, and do not remove or replace approved images unless instructed.

## Content Rules

- Do not invent services, prices, testimonials, business information or policies.
- Service names, descriptions and prices come only from `lib/services.ts` and change only when the owner supplies new information.
- Testimonials are real customer reviews (`components/xpressnails/home/testimonials.tsx`). Use only real approved testimonials; do not write, embellish or re-attribute them. Shortening an approved quote requires approval.
- Existing marketing claims are already on the site but have not been independently verified: the "8+ years", "50+ satisfied customers" and "100% non-toxic products" figures in the About section, and the hygiene and product claims in "Why Choose Us" (hospital-grade sterilization, single-use tools, non-toxic low-odor formulas, longer time slots). Keep them as written. Do not strengthen them, repeat them elsewhere or add new claims unless the owner supplies confirmation.
- Keep hours, phone, address and social links exactly as they are unless updated information is provided.

## Deployment

`.github/workflows/deploy.yml` ("Deploy to Hostinger") runs on **every push to `main`**:

1. Checkout, Node 22, `npm ci`
2. `npm run build`
3. Upload `./out/` to the Hostinger web root (`server-dir: /`) over FTP with `SamKirkland/FTP-Deploy-Action@v4.3.5`, using the repository secrets `FTP_HOST`, `FTP_USERNAME` and `FTP_PASSWORD`

Important consequences:

- **Pushing to `main` is a production deployment.** There is no staging site and no preview.
- **The upload uses `dangerous-clean-slate: true`, which wipes the target web root before uploading.** Anything on the server that is not in `out/` is deleted, and the site is briefly empty during the upload. Deployment therefore requires explicit confirmation every time.
- The workflow does not run lint; a lint error will not stop a deployment, but a build error will.
- If a deployment fails, inspect the run and report the failed step and cause first. Do not rerun the job, push again or change the workflow until that has been reported and approved.
- Do not modify the workflow, the repository secrets or any Hostinger setting without approval.

## Development Rules

Before changing anything:

1. Inspect the relevant files.
2. Explain the intended approach.
3. Preserve the approved site and its existing behavior.
4. Make the smallest change necessary.

After changes:

1. Run `npm run lint`.
2. Run `npm run build`.
3. Check responsive behavior if the change is visual.
4. Report exactly which files changed and what is visibly different.
5. Report errors and warnings honestly.

Additional rules:

- Reuse existing components and styles.
- Do not modify unrelated files, and do not silently rewrite code outside the request.
- Use npm. Do not upgrade dependencies or run `npm audit fix` without approval, and do not add packages when existing code can do the job.
- Never expose or commit credentials. Do not create or commit `.env` files or secrets. This repository is public.
- Do not commit, push or deploy without explicit approval.
- Do not force-push, reset, rebase or delete branches.
- Ask before any redesign or architectural change.

## Workflow

When receiving a new request:

1. Read `CLAUDE.md`.
2. Inspect the current implementation.
3. Check `git status`.
4. Confirm the requested scope.
5. Make only the requested changes.
6. Run lint and the production build, and check responsive behavior for visual changes.
7. Provide a concise change summary.
8. Wait for explicit approval before committing, pushing or deploying.
