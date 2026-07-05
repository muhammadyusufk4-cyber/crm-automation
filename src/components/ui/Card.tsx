import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  hover = true,
}: {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-border-subtle bg-surface p-6 transition-all duration-300",
        hover && "hover:border-electric/40 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-20px_rgba(59,107,255,0.25)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
