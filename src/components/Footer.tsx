import { Terminal, Link2, Mail, FileText } from "lucide-react";
import { siteConfig } from "@/content/site";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="hairline-top">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <p className="font-[family-name:var(--font-heading)] text-xl">
              {siteConfig.person.name.toUpperCase()}
            </p>
            <p className="eyebrow mt-2 text-[var(--text-secondary)]">
              {siteConfig.person.titles[0].toUpperCase()}
              <br />
              {siteConfig.person.titles[1].toUpperCase()}
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 eyebrow md:justify-center">
            <li>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-[var(--champagne)] transition-colors"
              >
                <Terminal size={14} /> GITHUB
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-[var(--champagne)] transition-colors"
              >
                <Link2 size={14} /> LINKEDIN
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.email}
                className="inline-flex items-center gap-2 hover:text-[var(--champagne)] transition-colors"
              >
                <Mail size={14} /> EMAIL
              </a>
            </li>
            <li>
              <a
                href={siteConfig.resume.path}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-[var(--champagne)] transition-colors"
              >
                <FileText size={14} /> RESUME
              </a>
            </li>
          </ul>

          <p className="eyebrow md:text-right text-[var(--text-secondary)]">
            {siteConfig.person.location.toUpperCase().replace(/, /g, " · ")}
          </p>
        </div>

        <div className="hairline-top mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="eyebrow text-[var(--text-secondary)]">
            © {year} {siteConfig.person.name.toUpperCase()}
          </p>
          <p className="font-[family-name:var(--font-script)] text-2xl text-[var(--champagne)]">
            {siteConfig.footer.thankYou.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())} ✦
          </p>
        </div>
      </div>
    </footer>
  );
}
