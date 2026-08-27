import { siteConfig } from "@/content/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 mx-auto max-w-[1600px] px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-3">ABOUT ✦</p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl leading-[1.05]">
              {siteConfig.about.heading}
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-8 space-y-4 max-w-md">
            {siteConfig.about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[var(--champagne)] leading-relaxed text-base md:text-lg"
              >
                {p}
              </p>
            ))}
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={150}>
            <p className="eyebrow mb-8">ENGINEERING EVOLUTION</p>
          </Reveal>
          <ol className="flex flex-col">
            {siteConfig.evolution.map((step, i) => {
              const isCurrent = step.label === siteConfig.evolutionCurrent;
              return (
                <Reveal key={step.number} delay={180 + i * 60}>
                  <li className="flex items-center gap-6 py-4 hairline-top">
                    <span className="section-number w-8 shrink-0">
                      {step.number}
                    </span>
                    <span
                      className={`font-[family-name:var(--font-heading)] text-lg md:text-2xl ${
                        isCurrent ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                      }`}
                    >
                      {step.label}
                    </span>
                    {isCurrent && (
                      <span className="ml-auto eyebrow flex items-center gap-2 text-[var(--accent-cyan)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] status-dot" />
                        CURRENT
                      </span>
                    )}
                  </li>
                </Reveal>
              );
            })}
          </ol>
          <Reveal delay={200} className="pt-4 hairline-top mt-0">
            <p className="eyebrow text-[var(--text-secondary)]">
              NEXT: <span className="text-[var(--champagne)]">{siteConfig.evolutionFuture}</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
