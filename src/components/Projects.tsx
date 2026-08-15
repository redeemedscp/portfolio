import { Folder, Lock } from "lucide-react";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" number="03" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.1} className="h-full">
            <div className="group flex h-full flex-col rounded-md border border-border bg-card p-6 shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_30px_-15px_rgba(2,12,27,0.7)]">
              <div className="flex items-center justify-between">
                <Folder className="text-accent" size={32} strokeWidth={1.5} />
                <span
                  title="Private repository"
                  className="flex items-center gap-1 font-mono text-[11px] text-slate"
                >
                  <Lock size={12} />
                  private
                </span>
              </div>
              <h3 className="mt-5 text-lg font-medium text-heading">
                {project.name}
              </h3>
              <p className="font-mono text-xs text-accent">{project.org}</p>
              <p className="mt-3 text-sm text-slate">{project.description}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-slate">
                {project.highlights.map((h, j) => (
                  <li key={j} className="relative pl-5">
                    <span className="absolute left-0 text-accent">▹</span>
                    {h}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-slate">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
