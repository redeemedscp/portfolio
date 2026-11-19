import { ArrowUpRight, Star } from "lucide-react";
import BellTerminal from "@/components/BellTerminal";
import Reveal from "@/components/Reveal";
import {
  activities,
  education,
  experience,
  personal,
  projects,
  skills,
  stats,
} from "@/lib/data";

const nav = [
  { href: "#card", label: "Fight card" },
  { href: "#reel", label: "Highlight reel" },
  { href: "#arsenal", label: "Arsenal" },
  { href: "#camp", label: "Camp" },
  { href: "#contact", label: "Book me" },
];

const tickerItems = [
  `Fighting out of ${personal.location}`,
  `${experience[0].role} @ ${experience[0].company}`,
  "API · Web · Mobile",
  "Can you find the easter egg?",
];

/** Billing for a role by its position on the card. */
function billing(index: number) {
  if (index === 0) return "Main event";
  if (index === 1) return "Co-main event";
  return "Undercard";
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal>
      <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent">
        <Star size={12} fill="currentColor" /> {kicker}
      </p>
      <h2 className="mt-2 font-display text-6xl uppercase leading-none sm:text-8xl">
        {title}
      </h2>
    </Reveal>
  );
}

export default function Home() {
  const [firstName, ...rest] = personal.name.split(" ");
  const current = experience[0];

  const tape = [
    { label: "Division", value: personal.title },
    { label: "Fighting out of", value: personal.location },
    { label: "Current title", value: `${current.role}, ${current.company}` },
    { label: "Style", value: "Full-stack: API, web, mobile" },
    { label: "Camp", value: `${education.school}, Computer Science` },
    { label: "Off the clock", value: "Coached Brazilian Jiu-Jitsu at Rice" },
  ];

  return (
    <div id="top">
      {/* Ticker */}
      <div aria-hidden className="overflow-hidden bg-accent py-2 text-accent-foreground">
        <div className="ticker-track flex w-max font-mono text-xs font-medium uppercase tracking-[0.25em]">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0">
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <span key={i} className="flex items-center gap-6 pl-6">
                  {item} <Star size={10} fill="currentColor" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <header className="flex items-center justify-between gap-6 py-5 font-mono text-xs uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <a href="#top" className="font-display text-2xl tracking-normal">
              AVD
            </a>
            <BellTerminal />
          </div>
          <nav className="hidden gap-7 md:flex">
            {nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-foreground px-4 py-2 transition-colors hover:bg-foreground hover:text-background"
          >
            Resume
          </a>
        </header>

        <main>
          {/* Hero */}
          <section className="relative pb-16 pt-8">
            <div aria-hidden className="halftone pointer-events-none absolute inset-0" />
            <div className="relative grid gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-8">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                  {personal.title} · {personal.location}
                </p>
                <h1 className="mt-4 font-display text-[17vw] uppercase leading-[0.98] sm:text-[15vw] lg:text-[9.5rem]">
                  {firstName}
                  <br />
                  <span className="outline-text whitespace-nowrap">{rest.join(" ")}</span>
                </h1>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
                  {personal.tagline}
                </p>
                <div className="mt-8 flex flex-wrap gap-4 font-mono text-sm uppercase tracking-widest">
                  <a
                    href={`mailto:${personal.email}`}
                    className="bg-accent px-6 py-3 font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Book me
                  </a>
                  <a
                    href="#card"
                    className="border border-foreground px-6 py-3 transition-colors hover:bg-foreground hover:text-background"
                  >
                    See the card
                  </a>
                </div>
                <p className="mt-6 font-mono text-xs text-muted">
                  Psst: there&rsquo;s an easter egg on this page. Hint: every
                  fight starts with one.
                </p>
              </Reveal>

              {/* Tale of the tape */}
              <Reveal delay={0.15} className="lg:col-span-4 lg:pt-10">
                <div className="border border-foreground bg-background">
                  <p className="bg-foreground py-2 text-center font-display text-xl uppercase tracking-wide text-background">
                    Tale of the tape
                  </p>
                  <dl>
                    {tape.map((row) => (
                      <div
                        key={row.label}
                        className="border-b border-border px-5 py-3 last:border-b-0"
                      >
                        <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                          {row.label}
                        </dt>
                        <dd className="mt-0.5 font-medium">{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            </div>
          </section>

          <div aria-hidden className="tape" />

          {/* Numbers */}
          <section aria-label="Headline numbers" className="grid sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.value} delay={i * 0.08} className="h-full">
                <div className="h-full border-border py-10 sm:px-6 lg:border-l">
                  <p className="font-display text-7xl leading-none text-gold sm:text-8xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 max-w-[15rem] font-mono text-xs uppercase tracking-wider text-muted">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </section>

          <div aria-hidden className="tape" />

          {/* Fight card */}
          <section id="card" className="scroll-mt-6 py-20">
            <SectionTitle kicker="Experience" title="The fight card" />
            <ol className="mt-10 space-y-4">
              {experience.map((job, i) => (
                <li key={`${job.company}-${job.dates}`}>
                  <Reveal>
                    <details
                      open={i === 0}
                      className={`group border bg-card ${
                        i === 0 ? "border-accent" : "border-border"
                      }`}
                    >
                      <summary className="grid items-center gap-x-6 gap-y-2 p-5 sm:p-7 md:grid-cols-12">
                        <div className="md:col-span-3">
                          <p
                            className={`inline-block px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.25em] ${
                              i === 0
                                ? "bg-accent text-accent-foreground"
                                : "bg-border text-foreground"
                            }`}
                          >
                            {billing(i)}
                          </p>
                          <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">
                            {job.dates}
                          </p>
                        </div>
                        <div className="md:col-span-7">
                          <h3
                            className={`font-display uppercase leading-none ${
                              i === 0 ? "text-5xl sm:text-6xl" : "text-4xl"
                            }`}
                          >
                            {job.company}
                          </h3>
                          <p className="mt-2 text-muted">
                            {job.role} · {job.location}
                          </p>
                        </div>
                        <p className="font-mono text-xs uppercase tracking-widest text-accent md:col-span-2 md:text-right">
                          <span className="when-closed">+ Fight notes</span>
                          <span className="when-open">− Close</span>
                        </p>
                      </summary>
                      <ul className="grid gap-x-10 gap-y-3 border-t border-border p-5 text-[15px] leading-relaxed sm:p-7 md:grid-cols-2">
                        {job.bullets.map((bullet, j) => (
                          <li key={j} className="flex gap-3">
                            <span className="font-display text-lg leading-6 text-accent">
                              {String(j + 1).padStart(2, "0")}
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </Reveal>
                </li>
              ))}
            </ol>
          </section>

          {/* Highlight reel */}
          <section id="reel" className="scroll-mt-6 pb-20">
            <SectionTitle kicker="Projects" title="Highlight reel" />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {projects.map((project, i) => (
                <Reveal key={project.name} delay={(i % 2) * 0.08} className="h-full">
                  <article className="group relative flex h-full flex-col overflow-hidden border border-border bg-card p-6 transition-colors hover:border-foreground sm:p-8">
                    <span
                      aria-hidden
                      className="absolute -right-2 -top-6 font-display text-[9rem] leading-none text-border transition-colors group-hover:text-accent"
                    >
                      {i + 1}
                    </span>
                    <p className="relative font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                      {project.org} · Private repo
                    </p>
                    <h3 className="relative mt-3 font-display text-5xl uppercase leading-none">
                      {project.name}
                    </h3>
                    <p className="relative mt-4 max-w-md text-[15px] leading-relaxed">
                      {project.description}
                    </p>
                    <ul className="relative mt-4 space-y-2 text-sm text-muted">
                      {project.highlights.map((h, j) => (
                        <li key={j} className="flex gap-3">
                          <Star size={10} fill="currentColor" className="mt-1.5 flex-none text-gold" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <p className="relative mt-auto pt-6 font-mono text-xs uppercase tracking-wider text-muted">
                      {project.stack.join(" · ")}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Arsenal */}
          <section id="arsenal" className="scroll-mt-6 pb-20">
            <SectionTitle kicker="Skills" title="The arsenal" />
            <div className="mt-10 grid md:grid-cols-3">
              {Object.entries(skills).map(([category, items], i) => (
                <Reveal key={category} delay={i * 0.08} className="h-full">
                  <div className="h-full border-border py-6 md:border-l md:px-6">
                    <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                      {category}
                    </h3>
                    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-display text-3xl uppercase leading-tight">
                      {items.map((item) => (
                        <li key={item} className="transition-colors hover:text-gold">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Camp */}
          <section id="camp" className="scroll-mt-6 pb-20">
            <SectionTitle kicker="Education & leadership" title="Training camp" />
            <div className="mt-10 grid gap-10 md:grid-cols-12">
              <Reveal className="md:col-span-6">
                <h3 className="font-display text-5xl uppercase leading-none">
                  {education.school}
                </h3>
                <p className="mt-2 text-lg">{education.degree}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">
                  {education.dates} · {education.location}
                </p>
                <p className="mt-5 text-sm text-muted">
                  Coursework: {education.coursework.join(", ")}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {education.certifications.map((cert) => (
                    <li key={cert} className="flex gap-3">
                      <Star size={10} fill="currentColor" className="mt-1.5 flex-none text-gold" />
                      {cert}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 max-w-lg leading-relaxed text-muted">
                  {personal.bio.trim().replace(/\n/g, " ")}
                </p>
              </Reveal>
              <Reveal delay={0.1} className="md:col-span-5 md:col-start-8">
                <ul className="divide-y divide-border border-y border-border">
                  {activities.map((activity) => (
                    <li key={activity.org} className="py-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                        {activity.dates}
                      </p>
                      <p className="mt-1 font-display text-3xl uppercase leading-none">
                        {activity.org}
                      </p>
                      <p className="mt-2 text-sm">{activity.role}</p>
                      <p className="mt-1 text-sm text-muted">{activity.detail}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        </main>
      </div>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-6 bg-accent text-accent-foreground"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Reveal>
            <a
              href={`mailto:${personal.email}`}
              className="group block font-display text-[19vw] uppercase leading-[0.98] sm:text-[15vw] lg:text-[12rem]"
            >
              Book the
              <br />
              next fight
              <ArrowUpRight
                className="inline-block h-[0.7em] w-[0.7em] transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2"
                strokeWidth={2.5}
              />
            </a>
            <p className="mt-8 max-w-md text-lg">
              The fastest way to reach me is by email.
            </p>
          </Reveal>
          <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-accent-foreground/30 pt-6 font-mono text-xs uppercase tracking-widest">
            <p>
              © {new Date().getFullYear()} {personal.name}
            </p>
            <div className="flex gap-6">
              <a href={`mailto:${personal.email}`} className="hover:underline">
                Email
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub
              </a>
            </div>
          </footer>
          {/* Easter egg: a faint motto below the footer. It wraps to two lines
              on phones so it stays large enough to read. */}
          <p
            aria-hidden
            className="pointer-events-none mt-14 select-none text-center font-display text-[13vw] uppercase leading-[1.05] text-black/[0.18] sm:mt-20 sm:whitespace-nowrap sm:text-[min(8.5vw,6.5rem)] sm:leading-none"
          >
            Ad majorem
            <br className="sm:hidden" /> Dei gloriam
          </p>
        </div>
      </section>
    </div>
  );
}
