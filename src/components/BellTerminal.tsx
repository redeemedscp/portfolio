"use client";

import { Bell, X } from "lucide-react";
import { ReactNode, useEffect, useRef, useState } from "react";
import {
  activities,
  education,
  experience,
  personal,
  projects,
  skills,
  stats,
} from "@/lib/data";

type TermLine = { id: number; node: ReactNode };

const PROMPT = "adrian@ringside ~ %";

/** Page sections `goto` can scroll to, keyed by what the visitor types. */
const sections: Record<string, string> = {
  experience: "#card",
  projects: "#reel",
  skills: "#arsenal",
  education: "#camp",
  contact: "#contact",
};

const dim = (text: ReactNode) => <span className="text-muted">{text}</span>;
const gold = (text: ReactNode) => <span className="text-gold">{text}</span>;

/** What `cat <name>` prints for each section. */
function printSection(name: string): ReactNode[] | null {
  switch (name) {
    case "about":
      return [personal.bio.trim().replace(/\n/g, " ")];
    case "experience":
      return experience.flatMap((job) => [
        gold(`${job.role} @ ${job.company}`),
        dim(`${job.dates} · ${job.location}`),
        ...job.bullets.map((b) => `  - ${b}`),
        "",
      ]);
    case "projects":
      return projects.flatMap((project) => [
        gold(project.name),
        dim(`${project.org} · ${project.stack.join(", ")}`),
        `  ${project.description}`,
        "",
      ]);
    case "skills":
      return Object.entries(skills).flatMap(([category, items]) => [
        gold(category),
        `  ${items.join(", ")}`,
      ]);
    case "education":
      return [
        gold(`${education.degree}, ${education.school}`),
        dim(`${education.dates} · ${education.location}`),
        ...education.certifications.map((c) => `  - ${c}`),
        "",
        ...activities.map((a) => `  - ${a.role}, ${a.org} (${a.dates})`),
      ];
    case "contact":
      return [
        `email     ${personal.email}`,
        `linkedin  ${personal.linkedin}`,
        `github    ${personal.github}`,
        dim('Run "email" to start a message.'),
      ];
    default:
      return null;
  }
}

/**
 * The site's easter egg: a bell in the header that opens a working terminal.
 * ⌘K / Ctrl+K opens it too.
 */
export default function BellTerminal() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<TermLine[]>([]);
  const [command, setCommand] = useState("");
  const nextId = useRef(0);
  const end = useRef<HTMLDivElement>(null);

  const say = (node: ReactNode): TermLine => ({ id: nextId.current++, node });

  const openTerminal = () => {
    setOpen(true);
    setLines((current) =>
      current.length > 0
        ? current
        : [
            say(gold("DING DING DING. You found the easter egg.")),
            say(
              dim(
                <>
                  This is a working terminal. Type{" "}
                  <span className="text-foreground">help</span> to see what it
                  can do.
                </>,
              ),
            ),
          ],
    );
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openTerminal();
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // openTerminal only touches state setters and a ref, so one binding is enough.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    end.current?.scrollIntoView({ block: "nearest" });
  }, [lines, open]);

  const run = (raw: string) => {
    const input = raw.trim();
    const [name = "", arg = ""] = input.toLowerCase().split(/\s+/);
    const echo = say(
      <>
        {gold(PROMPT)} {input}
      </>,
    );
    let output: ReactNode[] = [];

    switch (name) {
      case "":
        break;
      case "help":
        output = [
          "ls               list what's here",
          "cat <section>    print a section, e.g. cat experience",
          "goto <section>   close the terminal and jump to that part of the page",
          "whoami           the short version",
          "stats            headline numbers",
          "resume           open my resume",
          "email            start an email to me",
          "clear            clear the screen",
          "exit             close the terminal (or press Esc)",
        ];
        break;
      case "ls":
        output = ["about  experience  projects  skills  education  contact"];
        break;
      case "cat":
        output = printSection(arg) ?? [
          `cat: ${arg || "(nothing)"}: no such section. Try "ls".`,
        ];
        break;
      case "goto":
        if (sections[arg]) {
          setOpen(false);
          document.querySelector(sections[arg])?.scrollIntoView();
          output = [`Jumped to ${arg}.`];
        } else {
          output = [`goto: pick one of: ${Object.keys(sections).join(", ")}`];
        }
        break;
      case "whoami":
        output = [
          `${personal.name}, ${personal.title.toLowerCase()} in ${personal.location}. Currently ${experience[0].role} at ${experience[0].company}.`,
        ];
        break;
      case "stats":
        output = stats.map((s) => `${s.value.padEnd(6)} ${s.label}`);
        break;
      case "resume":
        window.open(personal.resumeUrl, "_blank", "noopener,noreferrer");
        output = ["Opening resume.pdf…"];
        break;
      case "email":
        window.location.href = `mailto:${personal.email}`;
        output = [`Opening a draft to ${personal.email}…`];
        break;
      case "clear":
        setLines([]);
        return;
      case "exit":
        setOpen(false);
        return;
      case "sudo":
        output = ['Permission granted. Run "email" to make it official.'];
        break;
      default:
        output = [`command not found: ${name}. Type "help".`];
    }
    setLines((current) => [...current, echo, ...output.map(say)]);
  };

  return (
    <>
      <button
        onClick={openTerminal}
        aria-label="Ring the bell"
        title="Ring the bell"
        className="bell text-gold transition-transform hover:scale-125"
      >
        <Bell size={18} fill="currentColor" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-3 normal-case tracking-normal sm:items-center sm:p-6"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-label="Terminal"
            onClick={(e) => e.stopPropagation()}
            className="terminal-in flex h-[70dvh] w-full max-w-3xl flex-col overflow-hidden border border-foreground bg-background shadow-2xl"
          >
            <div className="flex flex-none items-center justify-between bg-foreground px-4 py-2 text-background">
              <p className="font-display text-lg uppercase tracking-wide">
                Ringside terminal
              </p>
              <button aria-label="Close terminal" onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </div>
            <label className="min-h-0 flex-1 cursor-text overflow-y-auto p-4 font-mono text-[13px] leading-6">
              {lines.map((line) => (
                <div key={line.id} className="min-h-6 whitespace-pre-wrap break-words">
                  {line.node}
                </div>
              ))}
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  run(command);
                  setCommand("");
                }}
              >
                <span className="flex-none text-gold">{PROMPT}</span>
                <input
                  autoFocus
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  aria-label="Terminal input"
                  autoCapitalize="off"
                  autoComplete="off"
                  spellCheck={false}
                  className="min-w-0 flex-1 bg-transparent text-foreground caret-accent outline-none"
                />
              </form>
              <div ref={end} />
            </label>
          </div>
        </div>
      )}
    </>
  );
}
