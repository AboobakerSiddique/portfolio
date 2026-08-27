import { ImageIcon } from "lucide-react";

export default function ImagePlaceholder({
  path,
  label,
  className = "",
}: {
  path: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-[var(--wine-deep)]/40 to-[var(--bg-secondary)] hairline-border ${className}`}
      role="img"
      aria-label={label ?? `Image placeholder for ${path}`}
    >
      <ImageIcon size={22} strokeWidth={1.25} className="text-[var(--text-secondary)]" />
      <div className="text-center px-4">
        <p className="eyebrow text-[10px]">IMAGE PLACEHOLDER</p>
        {label && (
          <p className="font-[family-name:var(--font-heading)] italic text-sm mt-1 text-[var(--champagne)]">
            {label}
          </p>
        )}
        <p className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--text-secondary)] mt-2 break-all">
          {path}
        </p>
      </div>
    </div>
  );
}
