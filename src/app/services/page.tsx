import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "CRM automation, AI agents, workflow automation, sales automation, and RevOps consulting — the full stack of services to automate your revenue operations.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Every service you need to automate revenue operations."
        description="From CRM setup to AI agents, each engagement is scoped to remove a specific bottleneck in how your team sells."
      />

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border-subtle bg-surface p-6 transition-all duration-300 hover:border-electric/40 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-20px_rgba(59,107,255,0.25)]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-surface-muted text-electric">
                        <Icon name={service.icon} />
                      </div>
                      <ArrowUpRight className="size-4 text-foreground/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-electric" />
                    </div>
                    <span className="mt-5 block text-xs font-medium uppercase tracking-wider text-foreground/40">
                      {service.category}
                    </span>
                    <h3 className="mt-1.5 font-medium">{service.name}</h3>
                    <p className="mt-2 text-sm text-foreground/60">{service.tagline}</p>
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
