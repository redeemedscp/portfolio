import { projects } from "@/lib/data";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-medium">{project.name}</h3>
                <p className="text-sm text-muted">{project.org}</p>
              </div>
              <span className="shrink-0 rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
                Private repo
              </span>
            </div>
            <p className="mt-3 text-sm text-muted">{project.description}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted marker:text-border">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-background px-2.5 py-0.5 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
