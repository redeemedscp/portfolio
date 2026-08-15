import { personal } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-8">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        {personal.bio
          .trim()
          .split("\n\n")
          .map((paragraph, i) => (
            <p
              key={i}
              className="text-muted leading-relaxed [&:not(:first-child)]:mt-4"
            >
              {paragraph.replace(/\n/g, " ")}
            </p>
          ))}
      </div>
    </section>
  );
}
