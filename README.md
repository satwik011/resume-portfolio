# Satwik Nakhate — Portfolio

A "road trip" portfolio built with **Next.js (App Router) + TypeScript + CSS Modules**.
No UI or animation libraries — the animations are plain CSS plus two tiny scroll scripts, so the site stays fast.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also type-checks)
npm start        # serve the production build
```

## Change the content

Almost everything you'll want to edit is in **`src/data/portfolio.ts`**:

| What | Where in `portfolio.ts` |
| --- | --- |
| Name, role, email, LinkedIn | `profile` |
| Resume link | `profile.resumeUrl` → put `resume.pdf` in `/public` and set `"/resume.pdf"` |
| Photo | `profile.photo` → put `me.jpg` in `/public` and set `"/me.jpg"` |
| Hero ticket card | `ticket` |
| Job stops on the road | `stops` (add / remove / reorder — sides alternate automatically) |
| Skill cards | `stack` |
| Sliding skills strip | `marquee` |
| Projects ("The garage") | `projects` — add `{ name, blurb, url, image }`; screenshots go in `/public/projects/` |

## Project structure

```
src/
  app/
    layout.tsx            fonts, page title, SEO
    page.tsx              puts the sections in order
    globals.css           colour tokens + shared utilities (buttons, stickers, reveal)
    opengraph-image.tsx   the preview card shown when the link is shared
  components/             one folder-free component per section, each with its own *.module.css
    Nav  ScrollCar  Hero  Marquee  Road  Stack  Garage  Footer
    Car.tsx               the little car SVG
    RevealObserver.tsx    one IntersectionObserver that fades cards in on scroll
  hooks/
    useScrollProgress.ts  rAF-throttled scroll listener (car + road drawing)
  data/
    portfolio.ts          ALL the words
  fonts/                  self-hosted variable fonts (Bricolage Grotesque, Figtree — OFL)
```

### How the animations work
- **On load** (`.fade`, letters, ticket, stickers): CSS keyframes.
- **On scroll into view**: add `data-reveal="up" | "left" | "right"` to any element; `RevealObserver` adds `.in`.
- **Tied to scroll position** (top car, road drawing): `useScrollProgress` writes a CSS variable once per frame — no React re-renders.
- Users with "reduce motion" turned on get a still version.

### Colours
Change them once in `:root` in `src/app/globals.css` (`--accent`, `--orange`, `--yellow`, …).

## Deploy (free) on Vercel
1. Push this folder to a GitHub repo.
2. Go to vercel.com → **Add New → Project** → import the repo → **Deploy**.
3. You get a link like `satwik-nakhate.vercel.app`. Add a custom domain in Vercel → Settings → Domains if you buy one.
