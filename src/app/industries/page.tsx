import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { industries } from "@/data/industries";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "CRM automation and AI agents built for HVAC, plumbing, electrical, roofing, auto repair, auto detailing, collision centers, med spas, and dental clinics.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built around how your industry actually books jobs."
        description="Every trade has its own version of the same problem — slow follow-up, missed calls, admin work nobody has time for. We build around yours, not a generic template."
      />

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border-subtle bg-surface p-6 transition-all duration-300 hover:border-violet/40 hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-surface-muted text-violet">
                        <Icon name={industry.icon} />
                      </div>
                      <ArrowUpRight className="size-4 text-foreground/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-violet" />
                    </div>
                    <h3 className="mt-5 font-medium">{industry.name}</h3>
                    <p className="mt-2 text-sm text-foreground/60">{industry.tagline}</p>
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
