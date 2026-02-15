# shaneschmaltz.com

Personal website built with React, TypeScript, Tailwind CSS v4, and Vite. Deployed on Vercel.

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start dev server             |
| `npm run build`   | TypeScript check + build     |
| `npm run preview` | Preview production build     |
| `npm run lint`    | Lint with ESLint             |

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Styling:** Tailwind CSS v4 with custom alpine color palette
- **Build:** Vite
- **Deploy:** Vercel (static)

## Project Structure

```
src/
  components/
    Navbar.tsx       # Sticky nav with scroll effect + mobile menu
    Hero.tsx         # Full-viewport hero with background image
    About.tsx        # Bio, tags, stats
    Experience.tsx   # Work history cards
    Projects.tsx     # Project card grid
    Contact.tsx      # Email CTA + social links
    Footer.tsx       # Minimal footer
  assets/
    hero-bg.png      # Hero/about background image
  App.tsx            # Composes all sections
  main.tsx           # Entry point
  index.css          # Tailwind config + custom theme
```
