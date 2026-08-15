import { personal } from "@/lib/data";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center sm:px-10">
      <Reveal>
        <p className="font-mono text-sm text-accent">06. What&apos;s Next?</p>
        <h2 className="mt-4 text-3xl font-bold text-heading">Get In Touch</h2>
        <p className="mx-auto mt-5 max-w-md text-slate">
          I&apos;m open to new full-time software engineering opportunities.
          The fastest way to reach me is by email.
        </p>
        <a
          href={`mailto:${personal.email}`}
          className="btn-accent mt-8 inline-block rounded px-8 py-4 font-mono text-sm"
        >
          Say Hello
        </a>
      </Reveal>

      <div className="mt-20 flex flex-col items-center gap-4 font-mono text-xs text-slate">
        <div className="flex gap-5">
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline">
            LinkedIn
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="link-underline">
            GitHub
          </a>
        </div>
        <p>© {new Date().getFullYear()} {personal.name}</p>
      </div>
    </footer>
  );
}
