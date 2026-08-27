import { Terminal, ArrowUpRight, FileDown, ExternalLink } from "lucide-react";
import { siteConfig } from "@/content/site";
import Reveal from "./Reveal";

export default function GitHubSection() {
  return (
    <section className="py-24 md:py-32 mx-auto max-w-[1600px] px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow mb-3">GITHUB ✦</p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl mb-3">
              {siteConfig.github.heading}
            </h2>
            <p className="text-[var(--text-secondary)] max-w-md mb-10">
              {siteConfig.github.subheading}
            </p>
          </Reveal>

          <div className="flex flex-col">
            {siteConfig.github.repos.map((repo, i) => (
              <Reveal key={repo.name} delay={i * 80}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="open"
                  className="group flex items-center justify-between gap-6 py-6 hairline-top hover:pl-2 transition-all duration-300"
                >
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl flex items-center gap-3">
                      <Terminal size={16} className="text-[var(--text-secondary)]" />
                      {repo.name}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm mt-2 max-w-md">
                      {repo.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-[var(--champagne)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="pt-6 hairline-top mt-0">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="open"
              className="arrow-link inline-flex items-center gap-2 eyebrow hover:text-[var(--champagne)] transition-colors"
            >
              VIEW GITHUB
              <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>

        {/* Resume */}
        <div className="lg:col-span-5">
          <Reveal delay={120}>
            <div className="hairline-border p-8 md:p-10 h-full flex flex-col">
              <p className="eyebrow mb-3 text-[var(--crimson-muted)]">RESUME / CV</p>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl mb-6">
                The full record.
              </h3>
              <p className="text-[var(--champagne)] text-sm leading-relaxed mb-10">
                A structured overview of my education, projects, stack and
                experience — kept current alongside this site.
              </p>

              <div className="mt-auto flex flex-col gap-4">
                <a
                  href={siteConfig.resume.path}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="open"
                  className="arrow-link inline-flex items-center justify-between eyebrow border border-[var(--hairline-strong)] px-5 py-3.5 hover:border-[var(--champagne)] hover:text-[var(--champagne)] transition-colors"
                >
                  VIEW RESUME <ExternalLink size={14} />
                </a>
                <a
                  href={siteConfig.resume.path}
                  download
                  data-cursor="open"
                  className="inline-flex items-center justify-between eyebrow bg-[var(--crimson-tag)]/40 border border-[var(--hairline-strong)] px-5 py-3.5 hover:bg-[var(--crimson-tag)]/70 transition-colors"
                >
                  DOWNLOAD CV <FileDown size={14} />
                </a>
              </div>
              <p className="eyebrow text-[10px] text-[var(--text-secondary)] mt-6">
                If the file hasn&apos;t been added yet, these links will show
                &ldquo;resume will be available soon&rdquo; once uploaded to{" "}
                {siteConfig.resume.path}.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
