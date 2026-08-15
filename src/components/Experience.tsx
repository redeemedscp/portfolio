import { experience } from "@/lib/data";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {experience.map((job) => (
          <div
            key={`${job.company}-${job.dates}`}
            className="border-l-2 border-border pl-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-medium">
                {job.role} · {job.company}
              </h3>
              <span className="text-sm text-muted">{job.dates}</span>
            </div>
            <p className="text-sm text-muted">{job.location}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted marker:text-border">
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
