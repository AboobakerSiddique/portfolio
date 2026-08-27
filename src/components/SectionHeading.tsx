import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: { label: string; href: string };
}) {
  return (
    <Reveal className="mb-10 md:mb-16">
      <div className="flex items-end justify-between gap-6 hairline-bottom pb-6">
        <div>
          <p className="eyebrow mb-3">{eyebrow} ✦</p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl leading-[1.05]">
            {title}
          </h2>
        </div>
        {action && (
          <a
            href={action.href}
            target={action.href.startsWith("http") ? "_blank" : undefined}
            rel={action.href.startsWith("http") ? "noreferrer" : undefined}
            className="arrow-link hidden md:inline-flex items-center gap-2 eyebrow shrink-0 hover:text-[var(--text-primary)] transition-colors"
          >
            {action.label}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </a>
        )}
      </div>
    </Reveal>
  );
}
