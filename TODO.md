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
      all kinds of software, I work solving business problems..."
- [x] Verified: `tsc --noEmit` clean, `npm run lint` clean, dev server renders all
      sections correctly

## Open decisions / not yet done

- [ ] **Deploy to Vercel.** Chosen host, not yet connected. Needs a `vercel` login/link
      or GitHub integration once this repo is pushed somewhere.
- [ ] **This repo isn't pushed to GitHub yet.** Decide: new repo under `redeemedscp`,
      public or private? (Likely public, since it's the portfolio itself.)
- [ ] **Custom domain**: the resume lists `avaldesdiaz.com` as an existing personal
      domain — confirm whether to point it at this Vercel deployment.
- [ ] **Favicon/OG image** still the default Next.js favicon — replace with something
      personal before sharing the link.
- [ ] **GitHub profile README** — original ask was "portfolio + GitHub profile." The
      GitHub-profile piece (a `redeemedscp/redeemedscp` special repo with a profile
      README) hasn't been started.
- [ ] Mobile/responsive pass and a real-browser check haven't been done yet — only
      verified via curl'd HTML and lint/type-check so far.
- [ ] Resume PDF and `src/lib/data.ts` are maintained separately — if the resume changes,
      remember to update both.

## Contacts/links used on the site

- Email: adrianvaldes1439@gmail.com
- LinkedIn: https://www.linkedin.com/in/adrian-valdes-diaz/
- GitHub: https://github.com/redeemedscp
