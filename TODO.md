# Portfolio — Progress & Next Steps

Status log for continuing this project across sessions. Update this file as work
progresses — check items off, add new ones, don't let it go stale.

## Done

- [x] GitHub CLI (`gh`) installed and authenticated as `redeemedscp`
- [x] All personal GitHub repos set to private (16 repos flipped)
- [x] Confirmed all repos in `Diaz-Combat-Software` and `Criollos-Tech` orgs are private
- [x] Scaffolded Next.js 16 + TypeScript + Tailwind v4 app (App Router) in this repo
- [x] Built single-page site: Header, Hero, About, Experience, Projects, Skills,
      Education, Contact/Footer
- [x] Content sourced from resume (`Resume Adrian Valdes Diaz.docx (1).pdf`) and copied
      to `public/resume.pdf` for the download button
- [x] Featured 3 projects as description-only cards (no repo links, since repos are
      private): Consistente (Diaz Combat Software), Reservao, Cuba Diving (Criollos Tech)
- [x] Bio/tagline rewritten per feedback: no front-end/cloud framing — "I love building
      all kinds of software, I work solving business problems..." with front-end/cloud
      mentioned only in the context of the specific jobs where they applied
- [x] Bio also name-drops Consistente and Reservao as side projects
- [x] Verified: `tsc --noEmit` clean, `npm run lint` clean, dev server renders all
      sections correctly
- [x] Pushed to GitHub: https://github.com/redeemedscp/portfolio (public repo)
- [x] Deployed to Vercel, connected to the GitHub repo (auto-deploys on push to `main`):
      https://portfolio-orcin-gamma-2i4u01h7pk.vercel.app
      (Vercel project: `adiaxs-projects/portfolio`, logged in as `sidecontrolpapi`)
- [x] Redesigned in the style of brittanychiang.com (sourced from the open-source
      `bchiang7/v4` repo for the actual color tokens/hover mechanics, not copied content):
      dark navy background, green accent, monospace numbered section headings
      (01. About … 06. Contact), fixed left sidebar with nav + socials on desktop,
      slide-down mobile menu, lift-on-hover project cards with hard drop-shadow,
      animated underline links, `framer-motion` scroll-reveal + staggered entrances
- [x] Added inline GitHub/LinkedIn brand SVGs (`src/components/icons/BrandIcons.tsx`)
      since `lucide-react` dropped brand icons in recent versions
- [x] Verified: `tsc --noEmit` clean, `npm run lint` clean, `npm run build` clean,
      dev server renders correctly — pushed and confirmed live on Vercel
- [x] Custom domain connected: `avaldesdiaz.com` and `www.avaldesdiaz.com` added to the
      Vercel project (`vercel domains add`); user added the A records
      (`avaldesdiaz.com` / `www.avaldesdiaz.com` → `76.76.21.21`) in Route 53 (registrar:
      Amazon Registrar). Verified live with a valid Let's Encrypt cert — domain
      previously pointed to an empty GitHub Pages 404, nothing was lost.
- [x] Confirmed personal GitHub repos are still all private except `portfolio` (kept
      public on purpose — it's the source behind the live site, user confirmed keep
      public over a literal "private everything" reading)

## Open decisions / not yet done

- [ ] **Chrome extension is still not connected** — tried again, still fails
      ("Browser extension is not connected"). User needs to install/re-enable it from
      https://claude.ai/chrome, log into the extension with the same Claude account,
      and fully restart Chrome. Blocks: visual/interactive QA of the redesign, sourcing
      company logos, and screenshotting live projects.
- [ ] **Company logos**: user wants logos for Hogarth Worldwide, Oracle Cloud
      Infrastructure, SAS Institute, and Rice University in the Experience/Education
      section — approved to source from official sites, not yet done (blocked on
      Chrome access).
- [ ] **Live project screenshots**: user wants real screenshots of Consistente,
      Reservao, and/or Cuba Diving in the Projects cards if any are deployed publicly.
      Waiting on the user to paste live URLs — none provided yet.
- [ ] **Favicon/OG image** still the default Next.js favicon — replace with something
      personal before sharing the link (matters more now that there's a real visual
      identity/theme to draw from).
- [ ] **GitHub profile README** — original ask was "portfolio + GitHub profile." The
      GitHub-profile piece (a `redeemedscp/redeemedscp` special repo with a profile
      README) hasn't been started.
- [ ] Resume PDF and `src/lib/data.ts` are maintained separately — if the resume changes,
      remember to update both.

## Contacts/links used on the site

- Email: adrianvaldes1439@gmail.com
- LinkedIn: https://www.linkedin.com/in/adrian-valdes-diaz/
- GitHub: https://github.com/redeemedscp
