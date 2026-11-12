export function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div role="img" aria-label={`Placeholder image: ${label}`}
      className={`flex items-center justify-center bg-muted text-muted-foreground border border-border text-xs uppercase tracking-[0.2em] ${className}`}>
      {label}
    </div>
  );
}
