"use client";

import { useEffect, useState } from "react";
import { Plus, X } from "lucide-react";
import { siteConfig } from "@/content/site";

const links = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "STACK", href: "#stack" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[var(--bg-primary)]/85 backdrop-blur-md hairline-bottom" : ""
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto max-w-[1600px] px-6 md:px-12 h-16 md:h-20 flex items-center justify-between"
      >
        <a
          href="#top"
          className="font-[family-name:var(--font-heading)] text-sm md:text-base tracking-[0.08em]"
        >
          {siteConfig.person.name.toUpperCase()}
        </a>

        <ul className="hidden md:flex items-center gap-10 eyebrow">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link" data-cursor="open">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block eyebrow border border-[var(--hairline-strong)] px-5 py-2.5 hover:border-[var(--champagne)] hover:text-[var(--champagne)] transition-colors"
          data-cursor="open"
        >
          CONTACT
        </a>

        <button
          className="md:hidden inline-flex items-center gap-2 eyebrow"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={16} /> : <Plus size={16} />}
          MENU
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[var(--bg-primary)] hairline-top hairline-bottom px-6 py-6 flex flex-col gap-5"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="eyebrow text-base"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="eyebrow text-base text-[var(--champagne)]"
          >
            CONTACT
          </a>
        </div>
      )}
    </header>
  );
}
