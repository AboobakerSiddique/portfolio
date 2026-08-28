import { ImageIcon } from "lucide-react";

export default function ImagePlaceholder({
  path,
  label,
  className = "",
  frameless = false,
}: {
  path: string;
  label?: string;
  className?: string;
  /** No background fill or border — just a small centered marker, so
   *  whatever sits behind (e.g. giant hero type) stays fully visible. */
  frameless?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 ${
        frameless
          ? ""
          : "bg-gradient-to-b from-[var(--wine-deep)]/40 to-[var(--bg-secondary)] hairline-border"
      } ${className}`}
      role="img"
      aria-label={label ?? `Image placeholder for ${path}`}
    >
      <div
        className={
          frameless
            ? "flex flex-col items-center gap-2 px-4 py-3 bg-[var(--bg-primary)]/70 backdrop-blur-sm border border-dashed border-[var(--hairline-strong)]"
            : "contents"
        }
      >
        <ImageIcon size={20} strokeWidth={1.25} className="text-[var(--text-secondary)]" />
        <div className="text-center px-2">
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
    </div>
  );
}
