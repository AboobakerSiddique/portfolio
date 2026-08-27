# CUSTOMIZATION.md

This site is built so you can change almost everything by editing **one file**:

```
src/content/site.ts
```

You do not need to understand React to update your portfolio. Open the file,
find the value you want to change, edit the text between the quotes, save,
and the website updates automatically (if `npm run dev` is running) or on
your next deploy.

A few things (colors, fonts, section order) live in different files — those
are covered below too.

Every instruction follows this format:

> **FILE:** where to open
> **EXACT LOCATION:** what to look for inside that file
> **WHAT TO CHANGE:** what to edit
> **EXAMPLE:** a before/after snippet

---

## 1. Change your name

**FILE:** `src/content/site.ts`
**EXACT LOCATION:** `person.name` and `person.firstName`
**WHAT TO CHANGE:** the string values
**EXAMPLE:**
```ts
person: {
  name: "Aboobaker Siddique",   // ← full name shown in nav, hero, footer
  firstName: "Aboobaker",
  ...
}
```

## 2. Change your job title(s)

**FILE:** `src/content/site.ts`
**EXACT LOCATION:** `person.titles` (an array, shown in the footer and used for SEO)
**WHAT TO CHANGE:** the list of title strings
**EXAMPLE:**
```ts
titles: [
  "AI Application Developer",
  "Python Backend Developer",
  "Aspiring AI Engineer",
],
```

## 3. Change hero text

**FILE:** `src/content/site.ts`
**EXACT LOCATION:** the `hero` object
**WHAT TO CHANGE:** `headline` (the giant word), `leftHeadline`, `rightDescription`, `signature`
**EXAMPLE:**
```ts
hero: {
  eyebrow: "AVAILABLE FOR OPPORTUNITIES",
  headline: "PORTFOLIO",
  leftHeadline: "I BUILD BACKEND SYSTEMS & AI-POWERED APPLICATIONS",
  rightDescription: "ECE graduate building modern backend systems...",
  signature: "Aboobaker Siddique",
  portrait: "/images/profile.png",
}
```

## 4. Change your profile photo

**FILE:** just add the image file — no code edit required
**EXACT LOCATION:** `public/images/profile.png`
**WHAT TO CHANGE:** replace the file at that exact path (keep the filename
`profile.png`, or change `hero.portrait` in `site.ts` if you use a different name/extension)
**EXAMPLE:** drag `profile.png` into `public/images/` in your file explorer or VS Code.
Until you do this, the hero shows an elegant "IMAGE PLACEHOLDER" block instead of breaking.

## 5. Change a project

**FILE:** `src/content/site.ts`
**EXACT LOCATION:** the `projects` array — find the project object by its `id`
**WHAT TO CHANGE:** `title`, `category`, `description`, `technologies`, `highlights`, `github`, `live`
**EXAMPLE:**
```ts
{
  id: "siddique-ai",
  number: "01",
  title: "SIDDIQUE-AI",
  category: "PERSONAL AI COMPANION",
  description: "A full-stack, high-performance personal AI companion...",
  technologies: ["PYTHON", "AI", "SSE", "SQLITE", "SYSTEM TOOLS"],
  github: "https://github.com/AboobakerSiddique/Siddique-AI",
  live: "",
  featured: true,
}
```

## 6. Add a new project

**FILE:** `src/content/site.ts`
**EXACT LOCATION:** the `projects` array
**WHAT TO CHANGE:** add a new object with a unique `id` and the next `number`
(e.g. `"04"`). The project grid on the homepage renders automatically for
every entry in this array — no component code changes needed.
**EXAMPLE:**
```ts
{
  id: "my-new-project",
  number: "04",
  title: "MY NEW PROJECT",
  category: "CATEGORY LABEL",
  description: "One or two sentences describing it.",
  image: "/images/projects/my-new-project.png",
  technologies: ["PYTHON", "FASTAPI"],
  highlights: ["Feature one", "Feature two"],
  github: "https://github.com/AboobakerSiddique/my-new-project",
  live: "",
  featured: false,
},
```

## 7. Remove a project

**FILE:** `src/content/site.ts`
**EXACT LOCATION:** the `projects` array
**WHAT TO CHANGE:** delete that project's `{ ... }` object entirely (including
its trailing comma). The grid automatically re-flows.

## 8. Change a project image

**FILE:** just add/replace the image file
**EXACT LOCATION:** `public/images/projects/<name>.png` — the exact path must
match the `image` field of that project in `site.ts`
**EXAMPLE:** for Siddique-AI, add `public/images/projects/siddique-ai.png`.
Missing images automatically show a placeholder — the site never breaks.

## 9. Add / change a GitHub link

**FILE:** `src/content/site.ts`
**EXACT LOCATION:** a project's `github` field, or the top-level `social.github`
**WHAT TO CHANGE:** the URL string
**EXAMPLE:**
```ts
github: "https://github.com/AboobakerSiddique/dripVault",
```

## 10. Add a live demo link

**FILE:** `src/content/site.ts`
**EXACT LOCATION:** a project's `live` field
**WHAT TO CHANGE:** set it to your deployed URL. Leave it as an empty string
`""` to hide the "VIEW PROJECT" button for that project.
**EXAMPLE:**
```ts
live: "https://dripvault.vercel.app",
```

## 11. Change skills

**FILE:** `src/content/site.ts`
**EXACT LOCATION:** the `skills` object (categorized arrays) and `skillLevels`
(honest level tags — no fake percentages)
**WHAT TO CHANGE:** add/remove strings in each category array; levels are one
of `"FOUNDATION"`, `"WORKING KNOWLEDGE"`, `"BUILDING"`, `"EXPLORING"`
**EXAMPLE:**
```ts
backend: ["FastAPI", "REST APIs", "SQLAlchemy", "Pydantic", "SQLite"],
...
skillLevels: [
  { name: "PYTHON", level: "BUILDING" },
]
```

## 12. Change experience

**FILE:** `src/content/site.ts`
**EXACT LOCATION:** the `experience` array
**WHAT TO CHANGE:** `role`, `company`, `period`, `description` per entry, or
add/remove entries the same way as projects
**EXAMPLE:**
```ts
{
  number: "01",
  role: "UI Designer",
  company: "Lofilute",
  period: "Jan 2024 — Nov 2024",
  description: "Designed responsive web and mobile interfaces...",
},
```

## 13. Change education

**FILE:** `src/content/site.ts`
**EXACT LOCATION:** the `education` object
**WHAT TO CHANGE:** `degree`, `field`, `institution`, `period`, `location`
**EXAMPLE:**
```ts
education: {
  degree: "B.TECH",
  field: "Electronics & Communication Engineering",
  institution: "University College of Engineering, Kariavattom",
  period: "2022 — 2026",
  location: "Kerala, India",
}
```

## 14. Change contact information

**FILE:** `src/content/site.ts`
**EXACT LOCATION:** `person.email`, `person.phone`, `social.email`
**WHAT TO CHANGE:** the string values (keep `social.email` prefixed with `mailto:`)
**EXAMPLE:**
```ts
email: "aboobakersiddique2004@gmail.com",
phone: "+91 9567830686",
...
social: {
  email: "mailto:aboobakersiddique2004@gmail.com",
}
```

## 15. Change social links

**FILE:** `src/content/site.ts`
**EXACT LOCATION:** the `social` object
**WHAT TO CHANGE:** `github`, `linkedin`, `email`
**EXAMPLE:**
```ts
social: {
  github: "https://github.com/AboobakerSiddique",
  linkedin: "https://www.linkedin.com/in/aboobaker-siddique-ba4a66333",
  email: "mailto:aboobakersiddique2004@gmail.com",
}
```

## 16. Replace your resume

**FILE:** just add the PDF file — no code edit required
**EXACT LOCATION:** `public/resume/Aboobaker-Siddique-Resume.pdf`
**WHAT TO CHANGE:** replace the file at that exact path and filename. If you
want a different filename, also update `resume.path` in `site.ts`.
**EXAMPLE:**
```ts
resume: {
  path: "/resume/Aboobaker-Siddique-Resume.pdf",
}
```

## 17. Change colors

**FILE:** `src/app/globals.css`
**EXACT LOCATION:** the `:root { ... }` block at the top of the file
**WHAT TO CHANGE:** the hex values of the CSS variables
**EXAMPLE:**
```css
:root {
  --bg-primary: #080808;      /* main background */
  --crimson-muted: #6b1420;   /* accent used on hovers, numbers, tags */
  --text-primary: #f5efe6;    /* main text color */
  --accent-cyan: #00e5ff;     /* use sparingly — status dots, tiny UI */
}
```

## 18. Change fonts

**FILE:** `src/app/layout.tsx`
**EXACT LOCATION:** the `next/font/google` imports near the top of the file
**WHAT TO CHANGE:** swap the imported font name (must be a valid Google Font)
and update the corresponding `variable` name if you change it in `globals.css` too
**EXAMPLE:**
```ts
import { Bodoni_Moda } from "next/font/google";
const bodoni = Bodoni_Moda({ variable: "--font-bodoni", subsets: ["latin"] });
```

## 19. Change section order

**FILE:** `src/app/page.tsx`
**EXACT LOCATION:** the list of components inside `<main>...</main>`
**WHAT TO CHANGE:** reorder the JSX lines
**EXAMPLE:**
```tsx
<main>
  <Hero />
  <Projects />
  <FeaturedProject />
  <About />
  <EmbeddedProjects />
  <BuildJourney />
  <Skills />
  <Experience />
  <GitHubSection />
  <ContactCTA />
</main>
```
Move any line up or down to change the order it appears on the page.

## 20. Add a new section

**FILE:** create a new file in `src/components/`, e.g. `src/components/Testimonials.tsx`
**EXACT LOCATION:** follow the pattern of an existing component (e.g. `Skills.tsx`)
**WHAT TO CHANGE:** write your new section, then import and place it in
`src/app/page.tsx` where you want it to appear.
**EXAMPLE:**
```tsx
// src/app/page.tsx
import Testimonials from "@/components/Testimonials";
...
<Testimonials />
```

## 21. Remove a section

**FILE:** `src/app/page.tsx`
**EXACT LOCATION:** the `<main>` block
**WHAT TO CHANGE:** delete the corresponding component line (e.g. delete
`<EmbeddedProjects />` to remove the hardware section). You can leave the
unused component file in `src/components/` or delete it — it won't render
either way once removed from `page.tsx`.

## 22. Change the footer

**FILE:** `src/components/Footer.tsx` (layout/structure) and `src/content/site.ts` (text)
**EXACT LOCATION:** `siteConfig.footer.thankYou` for the closing line; the
component itself for layout changes
**EXAMPLE:**
```ts
footer: {
  thankYou: "THANK YOU FOR VISITING",
}
```

## 23. Deploy the website

The easiest option is [Vercel](https://vercel.com) (made by the creators of Next.js):

1. Push this project to a GitHub repository.
2. Go to vercel.com → "New Project" → import your repository.
3. Leave the default build settings (Vercel auto-detects Next.js).
4. Click "Deploy". Your site will be live at a `*.vercel.app` URL, with the
   option to attach a custom domain afterward.

Alternatively, run `npm run build` locally, then `npm run start` to serve the
production build, or deploy the `.next` output to any Node.js host that
supports Next.js (Netlify, Render, Railway, your own server, etc.).

## 24. Update the website later

1. Edit `src/content/site.ts` (and/or drop in new images/resume).
2. Run `npm run dev` locally to preview your change at `http://localhost:3000`.
3. Commit and push to GitHub — if deployed on Vercel, it redeploys automatically.

---

## Quick reference — where things live

| What | File |
|---|---|
| All text content, projects, skills, experience, links | `src/content/site.ts` |
| Colors, fonts (CSS variables), grain, cursor, animations | `src/app/globals.css` |
| Font imports, SEO metadata, structured data | `src/app/layout.tsx` |
| Section order on the homepage | `src/app/page.tsx` |
| Individual section components | `src/components/*.tsx` |
| Profile photo | `public/images/profile.png` |
| Project screenshots | `public/images/projects/*.png` |
| Resume PDF | `public/resume/Aboobaker-Siddique-Resume.pdf` |

If you're ever unsure where a piece of text lives, search for it (Ctrl+F /
Cmd+F across the project) — nearly everything traces back to `site.ts`.
