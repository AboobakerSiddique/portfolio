import { ArrowUpRight, Mail } from "lucide-react";
import { siteConfig } from "@/content/site";
import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 mx-auto max-w-[1600px] px-6 md:px-12 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 50%, var(--wine-deep) 0%, transparent 72%)",
          opacity: 0.5,
        }}
      />

      <Reveal>
        <h2 className="font-[family-name:var(--font-display)] leading-[0.92] text-center"
          style={{ fontSize: "clamp(2.6rem, 9vw, 7rem)" }}
        >
          {siteConfig.contactCTA.lines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="font-[family-name:var(--font-script)] text-center text-4xl md:text-6xl mt-4 text-[var(--champagne)]">
          {siteConfig.contactCTA.script}
        </p>
      </Reveal>

      <Reveal delay={150}>
        <p className="text-[var(--champagne)] text-center max-w-lg mx-auto mt-10 leading-relaxed">
          {siteConfig.contactCTA.description}
        </p>
      </Reveal>

      <Reveal delay={250}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">
          <a
            href={siteConfig.social.email}
            data-cursor="open"
            className="inline-flex items-center gap-2 eyebrow bg-[var(--text-primary)] text-[var(--bg-primary)] px-7 py-4 hover:bg-[var(--champagne)] transition-colors"
          >
            <Mail size={14} /> SEND A MESSAGE ✦
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer"
            data-cursor="open"
            className="arrow-link inline-flex items-center gap-2 eyebrow border border-[var(--hairline-strong)] px-7 py-4 hover:border-[var(--champagne)] hover:text-[var(--champagne)] transition-colors"
          >
            CONNECT ON LINKEDIN <ArrowUpRight size={14} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
