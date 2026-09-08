# Sanjay B — Portfolio

A handcrafted single-page portfolio built with React 19, Vite, Tailwind CSS, React Router, Framer Motion, and Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview
```

## Before you deploy

1. **Photo** — replace the placeholder avatar card in `src/components/Hero.jsx` with an `<img>` of your real photo. Drop the image in `public/` and point the `src` at it.
2. **Resume** — overwrite `public/Sanjay_B_Resume.pdf` with your real resume. Every "View Resume" / "Download Resume" button already points at that exact path, so nothing else needs to change.
3. **Contact form** — `src/components/Contact.jsx` currently opens the visitor's mail client with the message pre-filled (no backend required). If you'd rather receive submissions directly, swap the `handleSubmit` function for a call to a service like Formspree, EmailJS, or your own API route.
4. **Content** — everything else (skills, projects, education, certifications, social links) lives in one place: `src/data/portfolioData.js`. Edit that file and the whole site updates.

## Project structure

```
src/
  components/     One component per section (Navbar, Hero, About, Skills, ...)
  data/           portfolioData.js — all editable content
  hooks/          useTheme (dark mode), useActiveSection (scroll-spy)
  App.jsx         Routing shell
  index.css       Design tokens, base styles, reusable classes (.card, .btn-*, .tag)
tailwind.config.js  Color palette, fonts, radii, shadows
```

## Notes

- Dark mode toggle persists to `localStorage` and respects the visitor's OS preference on first visit.
- Keyboard focus is visible everywhere; motion is reduced automatically for visitors with `prefers-reduced-motion` set.
- Section anchors (`#about`, `#projects`, etc.) match the IDs used in `src/data/portfolioData.js`'s `nav` array — keep them in sync if you rename a section.
