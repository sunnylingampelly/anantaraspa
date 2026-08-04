# Anantara Spa — Website

Marketing website for Anantara Spa, a luxury day spa in Gachibowli, Hyderabad.
Static site, no backend — all bookings route to phone/WhatsApp.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 + shadcn/ui (base-ui primitives, not Radix — see `AGENTS.md`)
- Framer Motion for reveal/parallax animation, GSAP-free by design (kept minimal)
- Lenis for smooth scrolling
- next-themes for dark mode

## Project structure

```
src/
  app/                 Routes (App Router). One folder per page.
  components/
    layout/            Header, Footer, mobile CTA bar, command menu, etc.
    home/               Homepage-only sections
    ui/                 shadcn/ui primitives (generated — prefer `npx shadcn add` over hand-editing)
    ui-custom/          Reusable design-system pieces (cards, reveal wrapper, page hero, ...)
    seo/                JSON-LD renderer
    providers/          Theme, smooth-scroll, service-worker registration
  content/              Typed content data: services, pricing, blog posts, FAQs, testimonials, gallery, journey, membership
  lib/
    site-config.ts       Single source of truth for business info (address, phone, hours, nav)
    schema.ts             JSON-LD builders (LocalBusiness/DaySpa, FAQPage, Breadcrumb, Service, BlogPosting)
    links.ts               tel: / wa.me / mailto: link builders
public/
  images/                Real photography + logo pulled from the live site
  icons/                  Generated PWA icon set
```

To change a price, service description, FAQ, or blog post, edit the corresponding file in `src/content/` — every page reads from there, nothing is hardcoded per-page.

## Content that needs a final pass before launch

- **Business hours** (`siteConfig.hours` in `src/lib/site-config.ts`) — not published anywhere we could verify; currently a placeholder (10 AM–9 PM daily). Confirm and update.
- **Testimonials** (`src/content/testimonials.ts`) — illustrative placeholders, not real guest quotes. Replace with verified reviews before launch.
- **Membership tiers & pricing** (`src/content/membership.ts`) — proposed new program per the site brief; Anantara doesn't currently publish a membership plan. Review pricing/benefits before launch.
- **Email typo** — the live site listed `anantaraspa2025@gamil.com`; this looks like a `gmail.com` typo, so the site uses the corrected address. Confirm which is actually monitored.
- **Photography** — gallery/hero images are reused from the current live site. For a true five-star presentation, commission professional photography per the brand brief (warm lighting, no stock-looking posed shots).
- **Google review count / rating** — intentionally not included as structured data (`aggregateRating`) since no verified rating was available. Add once you have a real, current Google rating to cite.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — also type-checks and lints
npm run start    # serve the production build locally
npm run lint
```

## Deployment (Vercel)

This is a static-first Next.js app with no environment variables or database required.

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import it in [Vercel](https://vercel.com/new) — it will detect Next.js automatically.
3. Update `siteConfig.url` in `src/lib/site-config.ts` if the production domain differs from `https://anantaraspa.co.in`.
4. Deploy.

## SEO/PWA notes

- `sitemap.ts`, `robots.ts`, `manifest.ts`, and `opengraph-image.tsx` are Next.js file-convention routes — edit those files directly rather than static XML/JSON.
- JSON-LD (`DaySpa`/LocalBusiness, `FAQPage`, `BreadcrumbList`, `Service`, `BlogPosting`) is generated per-page via `src/lib/schema.ts` and rendered with `src/components/seo/json-ld.tsx`.
- A minimal service worker (`public/sw.js`) caches static assets and provides an `/offline` fallback for navigation; it only registers in production builds.
