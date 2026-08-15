import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" number="02" title="Experience">
      <div className="space-y-10">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${job.dates}`} delay={i * 0.08}>
            <div className="relative border-l-2 border-border pl-6 transition-colors hover:border-accent">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-medium text-heading">
                  {job.role} <span className="text-accent">@ {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-slate">{job.dates}</span>
              </div>
              <p className="font-mono text-xs text-slate">{job.location}</p>
              <ul className="mt-3 space-y-2 text-[15px] text-slate">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="relative pl-5">
                    <span className="absolute left-0 text-accent">▹</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
