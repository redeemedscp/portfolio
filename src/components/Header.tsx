import Link from "next/link";
import { personal } from "@/lib/data";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="#top" className="font-semibold tracking-tight">
          {personal.name}
        </Link>
        <nav className="hidden gap-6 text-sm text-muted sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
