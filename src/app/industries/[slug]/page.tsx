import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { CTASection } from "@/components/sections/CTASection";
import { industries, getIndustryBySlug } from "@/data/industries";
import { Ban, Zap } from "lucide-react";
import { absoluteUrl, SITE_NAME } from "@/lib/utils";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  return {
    title: `${industry.name} Automation`,
    description: industry.description,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: `${industry.name} Automation | ${SITE_NAME}`,
      description: industry.description,
      url: absoluteUrl(`/industries/${industry.slug}`),
    },
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_50%,transparent_100%)]" />
        <div className="pointer-events-none absolute right-[-10%] top-[-10%] size-[500px] rounded-full bg-violet/15 blur-[120px] dark:bg-violet/10" />
        <Container className="relative">
          <Reveal>
            <nav className="flex items-center gap-2 text-sm text-foreground/50">
              <Link href="/industries" className="hover:text-foreground">
                Industries
              </Link>
              <span>/</span>
              <span className="text-foreground/80">{industry.name}</span>
            </nav>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <Reveal>
                <Badge>{industry.name}</Badge>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 max-w-2xl text-4xl font-medium tracking-tight text-balance sm:text-5xl">
                  {industry.tagline}
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-xl text-foreground/60">{industry.description}</p>
              </Reveal>
              <Reveal delay={0.15} className="mt-8">
                <Button href="/contact" size="lg" showArrow>
                  Book a Strategy Call
                </Button>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-border-subtle bg-surface p-8 text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-surface-muted text-violet">
                  <Icon name={industry.icon} className="size-7" />
                </div>
                <div className="mt-6 text-4xl font-medium text-gradient">{industry.stat.value}</div>
                <p className="mt-2 text-sm text-foreground/60">{industry.stat.label}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <Reveal>
                <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">The problems we solve</h2>
              </Reveal>
              <ul className="mt-6 flex flex-col gap-3">
                {industry.problems.map((p, i) => (
                  <Reveal key={p} delay={i * 0.05}>
                    <li className="flex items-start gap-3 rounded-xl border border-border-subtle bg-surface p-4">
                      <Ban className="mt-0.5 size-4 shrink-0 text-red-400" />
                      <span className="text-sm text-foreground/70">{p}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            <div>
              <Reveal>
                <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Our solutions</h2>
              </Reveal>
              <div className="mt-6 flex flex-col gap-3">
                {industry.solutions.map((s, i) => (
                  <Reveal key={s.title} delay={i * 0.05}>
                    <div className="flex items-start gap-3 rounded-xl border border-electric/20 bg-electric/5 p-4">
                      <Zap className="mt-0.5 size-4 shrink-0 text-electric" />
                      <div>
                        <div className="text-sm font-medium">{s.title}</div>
                        <div className="mt-1 text-sm text-foreground/60">{s.description}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
              Example automations we build for {industry.name}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {industry.automations.map((a, i) => (
              <Reveal key={a} delay={i * 0.05}>
                <div className="rounded-xl bg-surface-muted px-5 py-4 text-sm font-medium text-foreground/80">
                  {a}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Expected outcomes</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {industry.outcomes.map((o, i) => (
              <Reveal key={o.label} delay={i * 0.08}>
                <div className="rounded-2xl border border-border-subtle bg-surface p-8 text-center">
                  <div className="text-4xl font-medium text-gradient">{o.value}</div>
                  <p className="mt-2 text-sm text-foreground/60">{o.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title={`Ready to automate ${industry.name} operations?`}
        description="Book a strategy call and we'll show you exactly what this looks like for your team."
      />
    </>
  );
}
