import { siteConfig } from "@/content/site";
import SmartImage from "./SmartImage";
import ArchitectureDiagram from "./ArchitectureDiagram";
import Reveal from "./Reveal";

export default function FeaturedProject() {
  const project = siteConfig.projects.find(
    (p) => p.id === siteConfig.featuredCaseStudy.projectId
  )!;
  const arch = (siteConfig.architectures as Record<string, readonly string[]>)[
    project.id
  ];
  const cs = siteConfig.featuredCaseStudy;

  const rows: [string, string][] = [
    ["THE PROBLEM", cs.problem],
    ["THE APPROACH", cs.approach],
    ["THE RESULT", cs.result],
  ];

  return (
    <section className="py-24 md:py-32 mx-auto max-w-[1600px] px-6 md:px-12">
      <Reveal>
        <p className="eyebrow mb-3">FEATURED CASE STUDY ✦</p>
        <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl mb-12 md:mb-16">
          {project.title}
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <Reveal delay={100}>
          <SmartImage
            src={project.image}
            alt={`${project.title} architecture preview`}
            label={`${project.title} screenshot`}
            className="w-full aspect-[4/3] hairline-border"
          />
        </Reveal>

        <div className="flex flex-col gap-10">
          {rows.map(([label, text], i) => (
            <Reveal key={label} delay={150 + i * 80}>
              <p className="eyebrow mb-2 text-[var(--crimson-muted)]">{label}</p>
              <p className="text-[var(--champagne)] leading-relaxed max-w-lg">
                {text}
              </p>
            </Reveal>
          ))}

          <Reveal delay={400}>
            <p className="eyebrow mb-2 text-[var(--crimson-muted)]">
              THE ARCHITECTURE
            </p>
            <p className="text-[var(--champagne)] leading-relaxed max-w-lg mb-6">
              {cs.architecture}
            </p>
            <ArchitectureDiagram nodes={arch} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
