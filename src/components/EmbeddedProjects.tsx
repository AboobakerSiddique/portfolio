import { Cpu } from "lucide-react";
import { siteConfig } from "@/content/site";
import Reveal from "./Reveal";

export default function EmbeddedProjects() {
  return (
    <section className="py-24 md:py-32 mx-auto max-w-[1600px] px-6 md:px-12">
      <Reveal>
        <p className="eyebrow mb-3">ENGINEERING FOUNDATION ✦</p>
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl mb-4 max-w-2xl">
          {siteConfig.embeddedHeading}
        </h2>
        <p className="text-[var(--text-secondary)] max-w-xl mb-14">
          These hardware projects represent the engineering foundation behind
          the transition into software and AI.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--hairline)]">
        {siteConfig.embeddedProjects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <div className="bg-[var(--bg-primary)] p-8 h-full flex flex-col">
              <Cpu size={20} strokeWidth={1.25} className="text-[var(--crimson-muted)] mb-6" />
              <h3 className="font-[family-name:var(--font-heading)] text-2xl">
                {p.title}
              </h3>
              <p className="text-[var(--champagne)] text-sm leading-relaxed mt-3 mb-6">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="eyebrow text-[10px] px-2.5 py-1 border border-[var(--hairline-strong)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
