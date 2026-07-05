import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/legacy/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-24">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_50%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-15%] size-[500px] -translate-x-1/2 rounded-full bg-electric/15 blur-[120px] dark:bg-electric/10" />
      <Container className="relative flex flex-col items-center text-center">
        {eyebrow && (
          <Reveal>
            <Badge>{eyebrow}</Badge>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h1 className="mt-6 max-w-3xl text-4xl font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg text-foreground/60 text-balance">{description}</p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.15} className="mt-8">
            {children}
          </Reveal>
        )}
      </Container>
    </section>
  );
}
