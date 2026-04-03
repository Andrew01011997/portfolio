# Andrii Strelchenko — Portfolio

Personal portfolio of **Andrii Strelchenko**, Senior JavaScript Engineer — 7 years with React and TypeScript, 2.5 of them full-stack (Node.js, NestJS, PostgreSQL).

**Live:** https://andrew01011997.github.io/portfolio/

The site is small on purpose, but it is built the way I build production frontends: a token-based design system, content separated from components, motion that respects the user, and a performance budget checked against Lighthouse.

| Page             | What's there                                                                           |
| ---------------- | -------------------------------------------------------------------------------------- |
| `/`              | Hero with rotating phrases, about, experience timeline, featured case studies, contact |
| `/work`          | All case studies in a bento grid, plus live projects with screenshots                  |
| `/work/[slug]`   | Case study: challenge, what I built, stack, metrics                                    |
| `/design-system` | Living preview of every token: colors, type scale, cards, motion                       |

## Stack

- **SvelteKit 3** with **Svelte 5** runes and attachments
- **Tailwind CSS 4** — the design system lives in CSS (`@theme`), no JS config
- **TypeScript** in strict mode
- **adapter-static** — every page is prerendered to HTML
- **GitHub Actions → GitHub Pages** for deploys
- Self-hosted fonts via **Fontsource**: Geist (display), DM Sans (text), DM Mono (labels)

## Getting started

Requires Node.js 24+.

```sh
npm install
npm run dev        # http://localhost:5173
```

| Script            | Does                         |
| ----------------- | ---------------------------- |
| `npm run dev`     | Dev server                   |
| `npm run build`   | Static build into `build/`   |
| `npm run preview` | Serve the production build   |
| `npm run check`   | `svelte-check` type checking |
| `npm run lint`    | Prettier + ESLint            |
| `npm run format`  | Prettier, write mode         |

## Project structure

```
src/
├── app.html                  picks the theme before first paint
├── lib/
│   ├── types.ts              Project, LiveProject, Experience, NavLink…
│   ├── data/                 all copy and content — no text lives in components
│   │   ├── site.ts           name, role, hero phrases, navigation, socials
│   │   ├── projects.ts       case studies (each gets its own /work/[slug] page)
│   │   ├── live-projects.ts  public projects with screenshots
│   │   └── experience.ts     timeline, skills, marquee words
│   ├── components/
│   │   ├── layout/           Header, Footer, ThemeToggle
│   │   ├── sections/         one file per home page block — Hero, About, Work…
│   │   └── ui/               reusable pieces — ProjectCard, ProjectGrid, SectionHeading…
│   ├── attachments/          DOM behaviour — reveal on scroll, pointer parallax
│   ├── motion/               easing/duration tokens for JS, custom transitions
│   ├── state/                global reactive state (theme)
│   ├── utils/                small pure helpers
│   └── assets/projects/      screenshots, imported so Vite hashes them
└── routes/
    ├── layout.css            the design system: tokens, base styles, utilities
    ├── +layout.ts            prerender = true for the whole site
    ├── work/                 /work and /work/[slug]
    └── design-system/        token preview page
```


## Decisions

### Design system in CSS, not in components

All tokens are defined once in [`src/routes/layout.css`](src/routes/layout.css) with Tailwind 4's `@theme`: semantic colors (`bg`, `surface`, `ink`, `accent`, `line`…), a fluid type scale (`text-hero` … `text-label`), layout, easings and keyframes. Components use the generated classes (`text-ink-muted`, `ease-out-expo`, `animate-orbit`) and a handful of `@utility` patterns (`container-page`, `eyebrow`, `chip`, `icon-button`).

Colors are CSS variables that swap under `[data-theme='dark']`, and `@theme inline` points Tailwind at them, so every utility is theme-aware with no `dark:` duplication. `/design-system` renders the tokens so changes can be reviewed visually.

### Content is data

Components never contain copy. Everything a visitor reads comes from `src/lib/data/*` and is typed in `src/lib/types.ts`, so content changes don't touch markup, and adding a case study is a data change.

### Theme without a flash

The inline script in `app.html` runs before first paint and chooses: **saved choice → system `prefers-color-scheme` → dark**. `<html data-theme="dark">` is the static default, so the site is dark even without JavaScript. Until the visitor picks a theme, it follows system changes live. The toggle label is switched with the `dark:` variant rather than JS state, so it is correct before hydration.

### Motion that degrades well

- **Scroll reveals** — the [`reveal`](src/lib/attachments/reveal.ts) attachment uses one shared `IntersectionObserver`. Elements entering together are staggered automatically in DOM order, so lists need no manual delays. Content already on screen at first load is left alone, so it never flashes hidden after hydration.
- **Hero phrases** — letters of the outgoing phrase flip away before the next phrase flips in, with no overlap. The [transitions](src/lib/motion/transitions.ts) bake their delay into the `css` function so the start frame holds while waiting.
- **Parallax and orbit labels** only run with a precise pointer, and the extra orbit layer only on ≥1920 px screens.
- `prefers-reduced-motion` disables reveals, the phrase rotation and parallax, and collapses CSS animations.
- Motion tokens exist both in CSS and in [`src/lib/motion`](src/lib/motion/index.ts), so JS animations match CSS ones.

### Responsive hero via container queries

The hero heading is sized by `clamp(2.25rem, min(11cqi, 17svh), 9rem)`:

- `11cqi` — relative to the hero's own width (it's an `@container`), which keeps the longest phrase at ~92% of the line, so it never wraps;
- `17svh` — caps it on short ultrawide screens;
- the orbit graphics are anchored to the content column, not the viewport edge.

From 1920 px the page column widens to 112rem instead of leaving huge side margins.

### Performance

- **No render-blocking requests**: the stylesheet (~35 KB) is inlined into each HTML file via `inlineStyleThreshold`, and fonts are self-hosted instead of loaded through Google Fonts' CSS → font chain.
- The two fonts used above the fold are **preloaded**; `unicode-range` subsets mean only Latin files are downloaded.
- Every page is **prerendered**; JavaScript only adds behaviour.
- Screenshots are WebP and lazy-loaded.

### Static hosting on GitHub Pages

[`adapter-static`](https://svelte.dev/docs/kit/adapter-static) builds plain HTML with a `404.html` fallback. A project site is served from `/<repo>`, so the base path comes from `BASE_PATH`, which [the workflow](.github/workflows/deploy.yml) sets from the repository name. All internal links go through `resolve()` from `$app/paths` (enforced by ESLint), so they work with any base. `static/.nojekyll` stops Pages from hiding the `_app` folder.

### Conventions

- Imports use the `#lib` subpath alias from `package.json`. TypeScript files are imported with a **`.js` extension** (`#lib/data/projects.js`) — without it the type checker can't resolve them.
- Shared reactive state goes in `*.svelte.ts` files so runes work outside components.
- Tailwind class names are never assembled from strings; lookups like `cardBackground` in `utils` hold full class names so Tailwind can find them.

## Deployment

Every push to `main` builds and deploys through GitHub Actions. One-time setup: **Settings → Pages → Source: GitHub Actions**.

To build exactly like CI:

```sh
BASE_PATH=/portfolio npm run build
```

On Windows Git Bash, prefix it with `MSYS_NO_PATHCONV=1`, otherwise `/portfolio` is rewritten into a Windows path.

## Contact

- Email: andrew01.01.1997@gmail.com
- LinkedIn: [andrii-strelchenko](https://www.linkedin.com/in/andrii-strelchenko)
