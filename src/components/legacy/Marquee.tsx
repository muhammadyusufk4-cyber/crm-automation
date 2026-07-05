import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  reverse = false,
  duration = "32s",
}: {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  duration?: string;
}) {
  return (
    <div className={cn("group relative flex overflow-hidden no-scrollbar", className)}>
      <div
        className={cn(
          "flex shrink-0 items-center gap-10 pr-10 [animation:marquee_var(--marquee-duration)_linear_infinite] group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]",
        )}
        style={{ "--marquee-duration": duration } as React.CSSProperties}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 items-center gap-10 pr-10 [animation:marquee_var(--marquee-duration)_linear_infinite] group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]",
        )}
        style={{ "--marquee-duration": duration } as React.CSSProperties}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
}
