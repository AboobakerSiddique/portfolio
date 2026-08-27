export default function ArchitectureDiagram({ nodes }: { nodes: readonly string[] }) {
  return (
    <div className="hairline-border p-6 md:p-8 bg-[var(--bg-secondary)]">
      <p className="eyebrow mb-6">SYSTEM ARCHITECTURE</p>
      <ol className="flex flex-col items-start">
        {nodes.map((node, i) => {
          const isBranch = node.trim().startsWith("├") || node.trim().startsWith("└");
          return (
            <li key={i} className="w-full">
              <div
                className={`font-[family-name:var(--font-mono)] text-xs md:text-sm ${
                  isBranch
                    ? "text-[var(--text-secondary)] pl-4"
                    : "text-[var(--text-primary)]"
                }`}
              >
                {!isBranch ? (
                  <span className="inline-block px-3 py-1.5 border border-[var(--hairline-strong)]">
                    {node}
                  </span>
                ) : (
                  <span>{node}</span>
                )}
              </div>
              {i < nodes.length - 1 && !isBranch && (
                <div className="pl-3 py-1 text-[var(--crimson-muted)] text-xs font-[family-name:var(--font-mono)]">
                  ↓
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
