"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { personal } from "@/lib/data";
import { navLinks } from "@/lib/nav";
import { GitHubIcon, LinkedInIcon } from "./icons/BrandIcons";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/90 px-6 py-4 backdrop-blur">
        <a href="#top" className="font-mono text-sm font-medium text-heading">
          {personal.name}
        </a>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-heading"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 border-b border-border bg-background px-6 py-8"
          >
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 text-heading"
                  >
                    <span className="font-mono text-xs text-accent">
                      {link.number}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-5">
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="text-slate hover:text-accent"
              >
                <Mail size={20} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate hover:text-accent"
              >
                <LinkedInIcon size={20} />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate hover:text-accent"
              >
                <GitHubIcon size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
