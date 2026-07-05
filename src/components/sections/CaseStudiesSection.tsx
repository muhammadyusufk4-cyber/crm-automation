import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/legacy/Button";
import { caseStudies } from "@/data/case-studies";
import { ArrowUpRight } from "lucide-react";

export function CaseStudiesSection() {
  const featured = caseStudies.filter((c) => c.featured);

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Case studies"
            title="Real teams, real automation, real numbers."
            className="sm:items-start sm:text-left"
          />
          <Button href="/case-studies" variant="outline" className="hidden shrink-0 sm:inline-flex">
            View all case studies
          </Button>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {featured.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 0.1}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-border-subtle bg-surface p-8 transition-all duration-300 hover:border-electric/40 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-border-subtle bg-surface-muted px-3 py-1 text-xs font-medium text-foreground/60">
                    {cs.industry}
                  </span>
                  <ArrowUpRight className="size-4 text-foreground/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-electric" />
                </div>
                <h3 className="mt-6 text-xl font-medium">{cs.client}</h3>
                <p className="mt-3 text-sm text-foreground/60">{cs.summary}</p>
                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border-subtle pt-6">
                  {cs.results.slice(0, 3).map((r) => (
                    <div key={r.label}>
                      <div className="text-xl font-medium text-electric">{r.value}</div>
                      <div className="mt-1 text-xs text-foreground/50">{r.label}</div>
                    </div>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <Button href="/case-studies" variant="outline">
            View all case studies
          </Button>
        </div>
      </Container>
    </section>
  );
}
