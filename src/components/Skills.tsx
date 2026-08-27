import { siteConfig } from "@/content/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const categories: { label: string; key: keyof typeof siteConfig.skills }[] = [
  { label: "LANGUAGES", key: "languages" },
  { label: "BACKEND", key: "backend" },
  { label: "AUTHENTICATION", key: "authentication" },
  { label: "AI", key: "ai" },
  { label: "AI APPLICATIONS", key: "aiApplications" },
  { label: "TOOLS", key: "tools" },
  { label: "EMBEDDED", key: "embedded" },
];

export default function Skills() {
  return (
    <section id="stack" className="py-24 md:py-32 mx-auto max-w-[1600px] px-6 md:px-12">
      <SectionHeading eyebrow="STACK" title="The stack." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        {categories.map((cat, i) => (
          <Reveal key={cat.key} delay={i * 60}>
            <p className="eyebrow mb-4 text-[var(--crimson-muted)]">{cat.label}</p>
            <ul className="space-y-2">
              {siteConfig.skills[cat.key].map((skill) => (
                <li
                  key={skill}
                  className="font-[family-name:var(--font-heading)] text-lg text-[var(--champagne)]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="eyebrow mb-6">CURRENT LEVEL — HONEST, NOT INFLATED</p>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--hairline)]">
        {siteConfig.skillLevels.map((s, i) => (
          <Reveal key={s.name} delay={i * 50}>
            <div className="bg-[var(--bg-primary)] p-6 h-full flex flex-col gap-3">
              <span className="eyebrow">{s.name}</span>
              <span className="font-[family-name:var(--font-mono)] text-xs px-2.5 py-1 border border-[var(--hairline-strong)] w-fit text-[var(--accent-cyan)]">
                {s.level}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
