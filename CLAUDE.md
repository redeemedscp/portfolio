# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server (Turbopack, http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config, `eslint.config.mjs`)
- `npx tsc --noEmit` — type-check without emitting

There is no test runner configured.

## Architecture

This is a single-page portfolio site (Next.js 16, App Router, TypeScript, Tailwind v4).

- **All content lives in `src/lib/data.ts`** — personal info, work experience, featured
  projects, skills, education, and activities are exported as typed constants from this
  one file. Components import from it and render lists; there is no CMS or database.
  When updating bio, jobs, or projects, edit this file rather than the components.
- **`src/app/page.tsx`** composes the page by stacking section components in order:
  `Header`, `Hero`, `About`, `Experience`, `Projects`, `Skills`, `Education`, `Footer`.
  Each section component (in `src/components/`) is presentational and pulls its data
  from `src/lib/data.ts`.
- **`Section.tsx`** is a shared wrapper (id + heading + spacing) used by
  `Experience`, `Projects`, `Skills`, and `Education` for consistent layout — add new
  resume-style sections through it rather than duplicating the heading/spacing markup.
- **Theming** is done via CSS custom properties in `src/app/globals.css`, mapped into
  Tailwind through `@theme inline`. Light/dark values are defined once each and switched
  via `prefers-color-scheme` — there is no manual theme toggle. Use the `background`,
  `foreground`, `muted`, `card`, `border`, `accent`, and `accent-foreground` tokens
  (as Tailwind classes like `bg-card`, `text-muted`, `border-border`) instead of hardcoding
  colors, or the two themes will drift apart.
- **Resume download**: `public/resume.pdf` is the static file linked from the Header and
  Hero "Resume" buttons. It's a plain copy of the source resume, not generated from
  `data.ts` — if resume content changes, both need to be updated by hand.

## Content notes

- The three featured projects (Consistente, Reservao, Cuba Diving) live in private
  GitHub repos (`Diaz-Combat-Software` and `Criollos-Tech` orgs). By design, `Projects.tsx`
  shows a "Private repo" badge and never links out to the repo — descriptions only.
  Don't add repo links to these cards unless the user explicitly asks to make a repo
  public first.
- All of the user's personal GitHub repos have been set to private (only the two orgs
  above hold the projects referenced on this site).
