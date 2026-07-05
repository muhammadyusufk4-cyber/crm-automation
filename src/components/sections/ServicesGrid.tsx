import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/legacy/Button";
import { services } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export function ServicesGrid() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="What we build"
            title="Every automation your business actually needs."
            className="sm:items-start sm:text-left"
          />
          <Button href="/services" variant="outline" className="hidden shrink-0 sm:inline-flex">
            View all services
          </Button>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.08}>
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
                  <h3 className="mt-5 font-medium">{service.name}</h3>
                  <p className="mt-2 text-sm text-foreground/60">{service.tagline}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <Button href="/services" variant="outline">
            View all services
          </Button>
        </div>
      </Container>
    </section>
  );
}
