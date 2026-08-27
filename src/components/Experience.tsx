import { siteConfig } from "@/content/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  const edu = siteConfig.education;

  return (
    <section id="experience" className="py-24 md:py-32 mx-auto max-w-[1600px] px-6 md:px-12">
      <SectionHeading eyebrow="EXPERIENCE & BACKGROUND" title="Where I've worked." />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          {siteConfig.experience.map((item, i) => (
            <Reveal key={item.number} delay={i * 80}>
              <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr_auto] gap-4 md:gap-8 py-8 hairline-top items-start">
                <span className="section-number pt-1">{item.number}</span>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl">
                    {item.role}
                  </h3>
                  <p className="eyebrow mt-1 text-[var(--crimson-muted)]">
                    {item.company}
                  </p>
                  <p className="text-[var(--champagne)] text-sm md:text-base mt-3 leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
                <p className="eyebrow md:text-right whitespace-nowrap">
                  {item.period}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow mb-6">EDUCATION</p>
            <div className="hairline-border p-8 relative overflow-hidden">
              <svg
                aria-hidden="true"
                className="absolute -right-6 -bottom-6 opacity-[0.06]"
                width="180"
                height="180"
                viewBox="0 0 180 180"
                fill="none"
              >
                <circle cx="90" cy="90" r="70" stroke="currentColor" />
                <circle cx="90" cy="90" r="45" stroke="currentColor" />
                <path d="M90 20V0M90 180v-20M20 90H0M180 90h-20" stroke="currentColor" />
              </svg>
              <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--crimson-muted)] mb-3">
                {edu.degree}
              </p>
              <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl leading-snug">
                {edu.field}
              </h3>
              <p className="text-[var(--champagne)] text-sm mt-4">
                {edu.institution}
              </p>
              <p className="eyebrow mt-6">{edu.period}</p>
              <p className="eyebrow text-[var(--text-secondary)]">{edu.location}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
