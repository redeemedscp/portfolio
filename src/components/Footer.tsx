import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="mt-8 border-t border-border">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-3 max-w-lg text-muted">
          I&apos;m open to new full-time software engineering opportunities.
          The fastest way to reach me is by email.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={`mailto:${personal.email}`}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            {personal.email}
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            GitHub
          </a>
        </div>
        <p className="mt-10 text-xs text-muted">
          © {new Date().getFullYear()} {personal.name}
        </p>
      </div>
    </footer>
  );
}
