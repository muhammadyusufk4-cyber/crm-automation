# SummitOps — Revenue Automation Website

A production-ready marketing website for a CRM automation, AI agents, and
RevOps consulting agency. Built with Next.js 16 (App Router), TypeScript,
Tailwind CSS v4, and Framer Motion.

> "We build systems that automate your sales operations so your team spends
> less time on manual work and more time closing deals."

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack, React Server Components) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-based theme, dark mode via `next-themes`) |
| Animation | Framer Motion (scroll reveals, counters, page transitions) |
| Forms | React Hook Form + Zod validation |
| Icons | lucide-react |
| Fonts | Geist Sans / Geist Mono (`next/font/google`) |

No database or CMS is wired up — all content (services, industries, case
studies, blog posts, testimonials) lives in typed data files under `src/data`
so it's trivial to edit without touching component code, and just as easy to
swap for a real CMS later.

## Project structure

```
src/
  app/                      Route segments (App Router)
    page.tsx                Homepage
    services/[slug]/        12 dynamic service pages
    industries/[slug]/      7 dynamic industry pages
    case-studies/[slug]/    Case study detail pages
    about/, blog/[slug]/, contact/, privacy/, terms/
    api/contact/route.ts    Contact form submission handler
    sitemap.ts, robots.ts   SEO plumbing
    opengraph-image.tsx     Generated OG image (next/og)
  components/
    ui/                     Button, Card, Badge, Reveal, ProcessTimeline, ...
    layout/                 Navbar, Footer
    sections/               Hero, Solutions, ServicesGrid, FAQSection, ...
    forms/                  ContactForm, CalendlyEmbed
  data/                     Typed content: services, industries, case
                             studies, blog posts, testimonials, integrations,
                             FAQs, nav
  lib/                      utils.ts, validations.ts (Zod schemas)
  types/                    Shared TypeScript interfaces
```

Every service, industry, case study, and blog post is generated from its data
file via `generateStaticParams`, so adding a new one is a matter of appending
an object to the relevant array in `src/data/` — no new route files needed.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in the values you have
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

See `.env.example` for the full list. None are required for local
development — the site works out of the box with sensible fallbacks:

| Variable | Purpose | If unset |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap, OG tags | Falls back to a placeholder domain |
| `NEXT_PUBLIC_CALENDLY_URL` | Calendly link embedded on `/contact` | Shows a labeled placeholder card |
| `CRM_WEBHOOK_URL` | Where contact-form leads get forwarded (Zapier, Make, n8n, or a CRM's inbound webhook) | Submissions are logged to the server console instead |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` / `NEXT_PUBLIC_CLARITY_ID` / `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Analytics | Not loaded |

## Customizing content

- **Brand name / copy**: update `SITE_NAME` in `src/lib/utils.ts`, and the
  navbar/footer logo mark in `src/components/layout/Navbar.tsx` and
  `Footer.tsx`.
- **Services, industries, case studies, blog posts, testimonials,
  integrations, FAQs**: edit the arrays in `src/data/*.ts`. Each entry is
  fully typed (see `src/types/index.ts`), so TypeScript will flag anything
  missing.
- **Colors**: CSS custom properties in `src/app/globals.css` under `:root`
  and `.dark` (`--navy`, `--electric`, `--violet`, etc.), mapped into Tailwind
  via the `@theme inline` block.
- **Fonts**: swap the `Geist`/`Geist_Mono` imports in `src/app/layout.tsx` for
  any other `next/font/google` family.

## Forms & lead capture

The contact form (`src/components/forms/ContactForm.tsx`) posts to
`/api/contact`, which validates the payload with Zod and forwards it to
`CRM_WEBHOOK_URL` if set (any endpoint that accepts a JSON POST — a CRM's
inbound webhook, a Zapier/Make catch hook, or an n8n workflow all work
without changes). A honeypot field silently drops obvious bot submissions.

## SEO

- Per-page `generateMetadata` (title, description, canonical URL, Open Graph)
  on every dynamic route.
- JSON-LD structured data: `Organization` schema site-wide, `Service` schema
  on service pages, `BlogPosting` schema on blog posts.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and
  `/robots.txt` from the same data files that drive the pages, so new
  content is automatically included.
- `app/opengraph-image.tsx` generates the social preview image at build time
  — no static asset to keep in sync.

## Scripts

```bash
npm run dev     # start the dev server (Turbopack)
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint (flat config, Next.js + TypeScript rules)
```

## Deployment

Deploys cleanly to [Vercel](https://vercel.com/new) with zero configuration
— connect the repo, set the environment variables above, and deploy. Any
Node.js host that supports Next.js 16 works as well (`npm run build && npm
run start`).

## Accessibility & performance

- Semantic HTML throughout, skip-to-content link, keyboard-navigable nav and
  accordions, visible focus states.
- Respects `prefers-reduced-motion` (animations are disabled at the CSS
  level for users who request it).
- Static generation (SSG) for every content page; the only dynamic route is
  the contact form's API endpoint.
