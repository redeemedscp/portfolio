"use client";

import { useEffect, useRef } from "react";

const SIZE = 1200;

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const canHover = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!canHover || reduceMotion) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${e.clientX - SIZE / 2}px, ${
          e.clientY - SIZE / 2
        }px, 0)`;
        el.style.opacity = "1";
        frame = 0;
      });
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 -z-10 opacity-0 transition-opacity duration-500"
      style={{
        width: SIZE,
        height: SIZE,
        background:
          "radial-gradient(circle, rgba(136,146,176,0.14), rgba(136,146,176,0.05) 40%, transparent 70%)",
      }}
    />
  );
}
