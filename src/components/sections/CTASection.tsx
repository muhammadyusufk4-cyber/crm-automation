import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection({
  title = "Ready to automate your revenue operations?",
  description = "Book a 30-minute strategy call. We'll map out exactly where automation would save your team the most time — no obligation.",
  primaryLabel = "Book a Strategy Call",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]" />
            <div className="pointer-events-none absolute left-1/2 top-0 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/30 blur-[120px]" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-medium tracking-tight text-white text-balance sm:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/60 text-balance">{description}</p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href={primaryHref} size="lg" showArrow>
                  {primaryLabel}
                </Button>
                {secondaryLabel && secondaryHref && (
                  <Button
                    href={secondaryHref}
                    size="lg"
                    variant="ghost"
                    className="text-white hover:bg-white/10"
                  >
                    {secondaryLabel}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
