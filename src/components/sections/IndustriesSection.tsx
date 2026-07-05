import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { industries } from "@/data/industries";
import { ArrowRight } from "lucide-react";

export function IndustriesSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Built for the businesses that keep this country running."
          description="Whether you're chasing HVAC estimates, confirming med-spa appointments, or managing intake for an auto repair shop — the leaks look the same everywhere: slow follow-up, missed calls, and admin work nobody has time for."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delay={(i % 4) * 0.08}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border-subtle bg-surface p-6 transition-all duration-300 hover:border-violet/40 hover:-translate-y-0.5"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-surface-muted text-violet">
                  <Icon name={industry.icon} />
                </div>
                <div className="mt-5">
                  <h3 className="font-medium">{industry.name}</h3>
                  <p className="mt-2 text-sm text-foreground/60">{industry.tagline}</p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-electric opacity-0 transition-opacity group-hover:opacity-100">
                  Explore <ArrowRight className="size-3.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
