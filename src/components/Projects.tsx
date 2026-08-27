import { siteConfig } from "@/content/site";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-32 mx-auto max-w-[1600px] px-6 md:px-12">
      <SectionHeading
        eyebrow="SELECTED WORK"
        title="Software I've actually built."
        action={{ label: "VIEW GITHUB →", href: siteConfig.social.github }}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {siteConfig.projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}
