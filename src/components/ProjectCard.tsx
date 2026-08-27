import { ArrowUpRight, Terminal } from "lucide-react";
import type { Project } from "@/content/site";
import SmartImage from "./SmartImage";
import Reveal from "./Reveal";

export default function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="group hairline-border h-full flex flex-col">
      <div className="p-6 flex items-baseline justify-between hairline-bottom">
        <span className="section-number">{project.number}</span>
        <span className="eyebrow">{project.category}</span>
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        data-cursor="project"
        aria-label={`View ${project.title} on GitHub`}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <div className="w-full h-full transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]">
          <SmartImage
            src={project.image}
            alt={`${project.title} preview`}
            label={`${project.title} screenshot`}
            className="w-full h-full"
          />
        </div>
      </a>

      <div className="p-6 flex flex-col grow">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl transition-transform duration-300 group-hover:translate-x-1">
          {project.title}
        </h3>
        <p className="text-[var(--text-secondary)] text-sm mt-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="eyebrow text-[10px] px-2.5 py-1 border border-[var(--hairline-strong)] bg-[var(--crimson-tag)]/30"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6 flex items-center gap-6 hairline-top pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            data-cursor="open"
            className="arrow-link inline-flex items-center gap-1.5 eyebrow hover:text-[var(--champagne)] transition-colors"
          >
            <Terminal size={13} /> GITHUB
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              data-cursor="open"
              className="arrow-link inline-flex items-center gap-1.5 eyebrow hover:text-[var(--champagne)] transition-colors"
            >
              VIEW PROJECT <ArrowUpRight size={13} />
            </a>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
