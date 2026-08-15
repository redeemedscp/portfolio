import { skills } from "@/lib/data";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 sm:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-sm font-medium text-muted">{category}</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-2.5 py-0.5 text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
