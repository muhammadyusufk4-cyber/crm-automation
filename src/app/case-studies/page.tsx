import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies } from "@/data/case-studies";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from CRM automation and AI agent projects across HVAC, auto repair, med spas, and dental practices.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="The automation. The numbers. The client's own words."
        description="Every engagement below includes the exact challenge, what we built, and the measurable outcome."
      />

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.slug} delay={(i % 2) * 0.1}>
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
        </Container>
      </section>

      <CTASection />
    </>
  );
}
