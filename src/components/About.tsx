import Section from "./Section";
import { personal } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" number="01" title="About Me">
      <div className="max-w-xl space-y-4 text-[15px] leading-relaxed text-slate">
        {personal.bio
          .trim()
          .split("\n\n")
          .map((paragraph, i) => (
            <p key={i}>{paragraph.replace(/\n/g, " ")}</p>
          ))}
      </div>
    </Section>
  );
}
