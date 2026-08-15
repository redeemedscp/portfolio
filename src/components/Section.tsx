import { ReactNode } from "react";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-4xl px-6 py-10">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
