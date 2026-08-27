# Aboobaker Siddique — Portfolio

A dark editorial technology portfolio for **Aboobaker Siddique** — AI
Application Developer & Python Backend Developer — built with Next.js 15
(App Router), TypeScript, and Tailwind CSS v4.

Design direction: luxury editorial magazine × dark high-fashion visual
language × AI engineering precision. Black, cream and burgundy palette,
oversized serif typography (Bodoni Moda / Playfair Display), hairline
grid, cinematic hero, honest (non-inflated) project and skill content.

## Getting started

Requirements: Node.js 18.18+ (LTS recommended) and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the local dev server with hot reload |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build (run `build` first) |
| `npm run lint` | Run ESLint |

## Editing content

Almost everything on the site — name, titles, hero copy, projects, skills,
experience, education, links, resume path — lives in one file:

```
src/content/site.ts
```

Read **[`CUSTOMIZATION.md`](./CUSTOMIZATION.md)** for a step-by-step guide
covering every kind of edit (text, images, projects, colors, fonts, section
order, deployment). **[`CONTENT.md`](./CONTENT.md)** is a plain-text mirror
of all the content for quick reading/reference.

## Images & resume

- `public/images/profile.png` — hero portrait
- `public/images/projects/*.png` — project screenshots
- `public/resume/Aboobaker-Siddique-Resume.pdf` — resume/CV

None of these files are included yet. Until you add them, the site shows a
clearly labeled "IMAGE PLACEHOLDER" instead of a broken image — the page
never breaks. See the `README.md` inside each of those folders for exact
filenames.

## Project structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # fonts, SEO metadata, JSON-LD
│   │   ├── page.tsx          # assembles all sections
│   │   └── globals.css       # design tokens, grain, cursor, animations
│   ├── components/           # one component per section
│   └── content/
│       └── site.ts           # single source of truth for all content
├── public/
│   ├── images/                # profile photo + project screenshots
│   └── resume/                # resume PDF
├── CUSTOMIZATION.md           # how to edit everything
├── CONTENT.md                 # plain-text content reference
└── README.md                  # this file
```

## Tech stack

- **Next.js 15** (App Router, React Server Components)
- **TypeScript**
- **Tailwind CSS v4**
- **lucide-react** for icons
- **next/font** for Google Fonts (Bodoni Moda, Playfair Display, Inter,
  Space Mono, Pinyon Script) — self-hosted automatically at build time, no
  external font requests at runtime

No animation library is used — scroll reveals, hover states and the custom
cursor are implemented with a small `IntersectionObserver`-based component
and plain CSS transitions, kept deliberately light for performance.

## Accessibility & performance notes

- Semantic HTML landmarks (`header`, `main`, `nav`, `footer`) and a proper heading hierarchy
- Visible focus states on all interactive elements
- `prefers-reduced-motion` disables scroll-reveal and other animation
- Custom cursor and cursor-following elements are disabled on touch/narrow viewports
- All images are lazy-loaded and have descriptive `alt` text
- No fake statistics, testimonials, or client logos — only real, editable content

## Deployment

The fastest path is [Vercel](https://vercel.com):

1. Push this repository to GitHub.
2. Import it on Vercel (auto-detects Next.js — no config needed).
3. Deploy.

See section 23 of `CUSTOMIZATION.md` for more detail and alternative hosts.

## License

Personal portfolio source for Aboobaker Siddique. Feel free to use the code
structure as a learning reference; the content, name and branding belong to
Aboobaker Siddique.
