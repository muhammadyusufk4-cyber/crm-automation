import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { services, getServiceBySlug } from "@/data/services";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { absoluteUrl, SITE_NAME } from "@/lib/utils";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | ${SITE_NAME}`,
      description: service.description,
      url: absoluteUrl(`/services/${service.slug}`),
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((s) => service.relatedServices.includes(s.slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: { "@type": "Organization", name: SITE_NAME },
    areaServed: "Worldwide",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_50%,transparent_100%)]" />
        <div className="pointer-events-none absolute left-1/2 top-[-15%] size-[500px] -translate-x-1/2 rounded-full bg-electric/15 blur-[120px] dark:bg-electric/10" />
        <Container className="relative">
          <Reveal>
            <nav className="flex items-center gap-2 text-sm text-foreground/50">
              <Link href="/services" className="hover:text-foreground">
                Services
              </Link>
              <span>/</span>
              <span className="text-foreground/80">{service.name}</span>
            </nav>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <Reveal>
                <Badge>{service.category}</Badge>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 max-w-2xl text-4xl font-medium tracking-tight text-balance sm:text-5xl">
                  {service.name}
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-xl text-lg text-foreground/60 text-balance">
                  {service.tagline}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-4 max-w-xl text-foreground/60">{service.description}</p>
              </Reveal>
              <Reveal delay={0.2} className="mt-8">
                <Button href="/contact" size="lg" showArrow>
                  Book a Strategy Call
                </Button>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-border-subtle bg-surface p-8 text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-surface-muted text-electric">
                  <Icon name={service.icon} className="size-7" />
                </div>
                <div className="mt-6 text-4xl font-medium text-gradient">{service.heroStat.value}</div>
                <p className="mt-2 text-sm text-foreground/60">{service.heroStat.label}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Benefits</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.06}>
                <div className="flex gap-4 rounded-2xl border border-border-subtle bg-surface p-6">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-electric" />
                  <div>
                    <h3 className="font-medium">{b.title}</h3>
                    <p className="mt-1.5 text-sm text-foreground/60">{b.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <Reveal>
                <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Our process</h2>
                <p className="mt-3 text-foreground/60">
                  How we take {service.name} from kickoff to a fully running system.
                </p>
              </Reveal>
              <ProcessTimeline steps={service.process} />
            </div>

            <div>
              <Reveal>
                <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Deliverables</h2>
              </Reveal>
              <ul className="mt-6 flex flex-col gap-3">
                {service.deliverables.map((d, i) => (
                  <Reveal key={d} delay={i * 0.05}>
                    <li className="flex items-start gap-3 rounded-xl border border-border-subtle bg-surface p-4">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-electric" />
                      <span className="text-sm text-foreground/80">{d}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={0.2}>
                <h3 className="mt-10 text-lg font-medium">Timeline</h3>
                <div className="mt-4 flex flex-col gap-3">
                  {service.timeline.map((t) => (
                    <div
                      key={t.phase}
                      className="flex items-center justify-between gap-4 rounded-xl bg-surface-muted px-4 py-3"
                    >
                      <div>
                        <div className="text-sm font-medium">{t.phase}</div>
                        <div className="text-xs text-foreground/50">{t.description}</div>
                      </div>
                      <span className="shrink-0 rounded-full border border-border-subtle bg-surface px-3 py-1 text-xs font-medium text-electric">
                        {t.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <FAQSection faqs={service.faqs} title={`${service.name} FAQs`} eyebrow="FAQ" />

      {related.length > 0 && (
        <section className="pb-24 sm:pb-32">
          <Container>
            <Reveal>
              <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Related services</h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {related.map((s, i) => (
                <Reveal key={s.slug} delay={i * 0.06}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex items-center justify-between rounded-2xl border border-border-subtle bg-surface p-5 transition-colors hover:border-electric/40"
                  >
                    <div className="flex items-center gap-3">
                      <Icon name={s.icon} className="text-electric" />
                      <span className="font-medium">{s.shortName}</span>
                    </div>
                    <ArrowRight className="size-4 text-foreground/30 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        title={`Ready to get started with ${service.name}?`}
        description="Book a strategy call and we'll show you exactly what this looks like for your team."
      />
    </>
  );
}
