import { activities, education } from "@/lib/data";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="border-l-2 border-border pl-5">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-medium">
            {education.degree} · {education.school}
          </h3>
          <span className="text-sm text-muted">{education.dates}</span>
        </div>
        <p className="text-sm text-muted">{education.location}</p>
        <p className="mt-3 text-sm text-muted">
          <span className="font-medium text-foreground">Coursework: </span>
          {education.coursework.join(", ")}
        </p>
        <p className="mt-1 text-sm text-muted">
          <span className="font-medium text-foreground">Certifications: </span>
          {education.certifications.join(", ")}
        </p>
      </div>

      <h3 className="mt-8 text-sm font-medium text-muted">
        Leadership & Activities
      </h3>
      <div className="mt-4 space-y-5">
        {activities.map((activity) => (
          <div key={activity.org}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h4 className="text-sm font-medium">
                {activity.role} · {activity.org}
              </h4>
              <span className="text-sm text-muted">{activity.dates}</span>
            </div>
            <p className="text-sm text-muted">{activity.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
