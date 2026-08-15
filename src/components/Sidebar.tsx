import { Mail } from "lucide-react";
import { personal } from "@/lib/data";
import { navLinks } from "@/lib/nav";
import { GitHubIcon, LinkedInIcon } from "./icons/BrandIcons";

export default function Sidebar() {
  return (
    <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-[380px] lg:flex-col lg:justify-between lg:overflow-y-auto lg:overflow-x-hidden lg:px-12 lg:py-16 xl:w-[420px]">
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-accent/10 blur-3xl glow" />

      <div className="relative">
        <p className="font-mono text-sm text-accent">Hi, my name is</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-heading">
          {personal.name}
        </h1>
        <p className="mt-1 text-xl font-medium text-slate">{personal.title}</p>
        <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate">
          {personal.tagline}
        </p>

        <nav className="mt-14">
          <ul className="space-y-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group flex items-center gap-3 border-l-2 border-transparent pl-4 -ml-4 transition-colors hover:border-accent"
                >
                  <span className="font-mono text-xs text-accent">
                    {link.number}
                  </span>
                  <span className="text-sm font-medium tracking-wide text-slate transition-colors group-hover:text-heading">
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="relative flex items-center gap-5">
        <a
          href={`mailto:${personal.email}`}
          aria-label="Email"
          className="text-slate transition-all hover:-translate-y-0.5 hover:text-accent"
        >
          <Mail size={20} />
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-slate transition-all hover:-translate-y-0.5 hover:text-accent"
        >
          <LinkedInIcon size={20} />
        </a>
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-slate transition-all hover:-translate-y-0.5 hover:text-accent"
        >
          <GitHubIcon size={20} />
        </a>
        <a
          href={personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent ml-2 rounded px-4 py-2 text-xs font-medium"
        >
          Resume
        </a>
      </div>
    </aside>
  );
}
