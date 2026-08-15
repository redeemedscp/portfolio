import { personal } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pt-16 pb-12 sm:pt-24">
      <p className="text-sm font-medium text-accent">{personal.title}</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
        {personal.name}
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted">{personal.tagline}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${personal.email}`}
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Get in touch
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
    </section>
  );
}
