import { Globe2 } from "lucide-react";
import { siteConfig } from "@/content/site";
import SmartImage from "./SmartImage";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-16 overflow-hidden">
      {/* ambient burgundy glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 38%, var(--wine-deep) 0%, transparent 70%)",
          opacity: 0.6,
        }}
      />

      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        {/* eyebrow row */}
        <Reveal>
          <div className="flex items-center justify-between eyebrow">
            <span>{siteConfig.person.eyebrowLeft}</span>
            <span>{siteConfig.person.eyebrowRight}</span>
          </div>
        </Reveal>

        {/* giant headline + portrait overlap */}
        <div className="relative mt-6 md:mt-10 flex justify-center">
          <Reveal delay={100}>
            <h1
              className="select-none text-center font-[family-name:var(--font-display)] leading-[0.82] tracking-tight"
              style={{ fontSize: "clamp(4.2rem, 16vw, 13rem)" }}
            >
              {siteConfig.hero.headline}
            </h1>
          </Reveal>

          <Reveal
            delay={250}
            className="absolute left-1/2 -translate-x-1/2 top-[8%] md:top-[2%] w-[52%] sm:w-[38%] md:w-[24%] aspect-[3/4]"
          >
            <div className="relative w-full h-full">
              <div
                aria-hidden="true"
                className="absolute -inset-4 md:-inset-6 -z-10 blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, var(--crimson-muted) 0%, transparent 70%)",
                  opacity: 0.45,
                }}
              />
              <SmartImage
                src={siteConfig.hero.portrait}
                alt={`Portrait of ${siteConfig.person.name}`}
                label="Replace with your portrait"
                className="w-full h-full hairline-border shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: "inset 0 -60px 60px -20px rgba(8,8,8,0.85)",
                }}
              />
            </div>
          </Reveal>
        </div>

        {/* left / right content */}
        <div className="mt-10 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end">
          <Reveal delay={150} className="max-w-md">
            <h2 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl leading-snug">
              {siteConfig.hero.leftHeadline}
            </h2>
            <div className="mt-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] status-dot" />
              <a
                href="#contact"
                data-cursor="open"
                className="eyebrow border border-[var(--hairline-strong)] px-5 py-2.5 hover:border-[var(--champagne)] hover:text-[var(--champagne)] transition-colors inline-flex items-center gap-2"
              >
                {siteConfig.hero.eyebrow} ✦
              </a>
            </div>
            <p className="font-[family-name:var(--font-script)] text-3xl mt-8 text-[var(--champagne)]">
              {siteConfig.hero.signature}
            </p>
          </Reveal>

          <Reveal delay={200} className="max-w-md md:ml-auto md:text-right">
            <p className="text-[var(--champagne)] text-base md:text-lg leading-relaxed">
              {siteConfig.hero.rightDescription}
            </p>
            <div className="mt-6 flex items-center gap-2 md:justify-end eyebrow">
              <Globe2 size={14} />
              <span>
                {siteConfig.person.locationShort.toUpperCase()} · REMOTE
              </span>
            </div>
          </Reveal>
        </div>

        {/* metrics strip */}
        <Reveal delay={100} className="mt-16 md:mt-24 hairline-top pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {siteConfig.metrics.map((m) => (
              <div key={m.number} className="flex items-baseline gap-3">
                <span className="section-number">{m.number}</span>
                <span className="eyebrow text-[var(--text-primary)]">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
