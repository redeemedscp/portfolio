import { activities, education } from "@/lib/data";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" number="05" title="Education">
      <Reveal>
        <div className="border-l-2 border-border pl-6 transition-colors hover:border-accent">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-lg font-medium text-heading">
              {education.degree} <span className="text-accent">@ {education.school}</span>
            </h3>
            <span className="font-mono text-xs text-slate">{education.dates}</span>
          </div>
          <p className="font-mono text-xs text-slate">{education.location}</p>
          <p className="mt-3 text-sm text-slate">
            <span className="font-medium text-heading">Coursework: </span>
            {education.coursework.join(", ")}
          </p>
          <p className="mt-1 text-sm text-slate">
            <span className="font-medium text-heading">Certifications: </span>
            {education.certifications.join(", ")}
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h3 className="mt-10 font-mono text-xs uppercase tracking-wider text-accent">
          Leadership &amp; Activities
        </h3>
        <div className="mt-5 space-y-5">
          {activities.map((activity) => (
            <div key={activity.org}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="text-sm font-medium text-heading">
                  {activity.role} <span className="text-accent">@ {activity.org}</span>
                </h4>
                <span className="font-mono text-xs text-slate">{activity.dates}</span>
              </div>
              <p className="text-sm text-slate">{activity.detail}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
