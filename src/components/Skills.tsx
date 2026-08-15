import { skills } from "@/lib/data";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" number="04" title="Skills">
      <div className="grid gap-8 sm:grid-cols-3">
        {Object.entries(skills).map(([category, items], i) => (
          <Reveal key={category} delay={i * 0.08}>
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
              {category}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate">
              {items.map((item) => (
                <li key={item} className="relative pl-5">
                  <span className="absolute left-0 text-accent">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
