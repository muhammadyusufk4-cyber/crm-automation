import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  dot = true,
}: {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-muted px-3.5 py-1.5 text-xs font-medium tracking-wide text-foreground/70 uppercase",
        className,
      )}
    >
      {dot && (
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-75" />
          <span className="relative inline-flex size-1.5 rounded-full bg-electric" />
        </span>
      )}
      {children}
    </span>
  );
}
