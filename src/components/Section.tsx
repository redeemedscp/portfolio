import { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
      <Reveal>
        <h2 className="flex items-center gap-3 whitespace-nowrap text-xl font-semibold text-heading">
          <span className="font-mono text-lg text-accent">{number}.</span>
          {title}
          <span className="h-px w-full flex-1 bg-border" aria-hidden />
        </h2>
      </Reveal>
      <div className="mt-8">{children}</div>
    </section>
  );
}
