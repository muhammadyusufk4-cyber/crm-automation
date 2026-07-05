import { cn } from "@/lib/utils";
import { Badge } from "@/components/legacy/Badge";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Badge>{eyebrow}</Badge>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-base text-foreground/60 sm:text-lg text-balance">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
