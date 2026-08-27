import { siteConfig } from "@/content/site";
import Reveal from "./Reveal";

export default function BuildJourney() {
  return (
    <section className="py-24 md:py-32 mx-auto max-w-[1600px] px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* What I have built */}
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-8">WHAT I HAVE BUILT</p>
          </Reveal>
          <ol className="flex flex-col">
            {siteConfig.buildTimeline.map((step, i) => (
              <Reveal key={step} delay={i * 50}>
                <li className="flex items-center gap-4 py-3 hairline-top">
                  <span className="section-number w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[var(--champagne)]">{step}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Currently building */}
        <div className="lg:col-span-3">
          <Reveal delay={100}>
            <p className="eyebrow mb-8 flex items-center gap-2">
              {siteConfig.currentFocus.heading}
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] status-dot" />
            </p>
            <ul className="space-y-3">
              {siteConfig.currentFocus.items.map((item) => (
                <li
                  key={item}
                  className="font-[family-name:var(--font-heading)] text-lg text-[var(--text-primary)]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="eyebrow mt-8 text-[var(--accent-cyan)]">
              STATUS: {siteConfig.currentFocus.status}
            </p>
          </Reveal>
        </div>

        {/* Roadmap */}
        <div className="lg:col-span-4">
          <Reveal delay={150}>
            <p className="eyebrow mb-8">{siteConfig.roadmap.heading}</p>
            <ul className="space-y-2 mb-8">
              {siteConfig.roadmap.completed.map((item) => (
                <li
                  key={item}
                  className="text-sm text-[var(--text-secondary)] flex items-center gap-2"
                >
                  <span className="text-[var(--accent-cyan)]">✓</span> {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {siteConfig.roadmap.upcoming.map((item) => (
                <li
                  key={item}
                  className="text-sm text-[var(--champagne)] flex items-center gap-2"
                >
                  <span className="text-[var(--crimson-muted)]">→</span> {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
