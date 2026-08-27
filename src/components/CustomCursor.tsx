"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const isNarrow = window.matchMedia("(max-width: 1023px)").matches;
    if (isTouch || isNarrow) return;

    const id = window.requestAnimationFrame(() => setEnabled(true));
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
      const target = e.target as HTMLElement;
      const projectEl = target.closest("[data-cursor='project']");
      const openEl = target.closest("[data-cursor='open']");
      if (projectEl) {
        setInteractive(true);
        setLabel("VIEW");
      } else if (openEl) {
        setInteractive(true);
        setLabel("OPEN");
      } else if (target.closest("a, button")) {
        setInteractive(true);
        setLabel("");
      } else {
        setInteractive(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.cancelAnimationFrame(id);
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${interactive ? "is-interactive" : ""}`}
      aria-hidden="true"
    >
      {label}
    </div>
  );
}
