import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/legacy/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import { CTASection } from "@/components/sections/CTASection";
import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";
import { Quote, ArrowRight, Zap, Bot, Database, CheckCircle2 } from "lucide-react";
import { absoluteUrl, SITE_NAME } from "@/lib/utils";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};

  return {
    title: `${cs.client} Case Study`,
    description: cs.summary,
    alternates: { canonical: `/case-studies/${cs.slug}` },
    openGraph: {
      title: `${cs.client} Case Study | ${SITE_NAME}`,
      description: cs.summary,
      url: absoluteUrl(`/case-studies/${cs.slug}`),
    },
  };
}

const diagramIcons = [Zap, Database, Bot, CheckCircle2];

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-16 sm:pt-20 sm:pb-20">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_50%,transparent_100%)]" />
        <Container className="relative">
          <Reveal>
            <nav className="flex items-center gap-2 text-sm text-foreground/50">
              <Link href="/case-studies" className="hover:text-foreground">
                Case Studies
              </Link>
              <span>/</span>
              <span className="text-foreground/80">{cs.client}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <Badge className="mt-6">{cs.industry}</Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-3xl text-4xl font-medium tracking-tight text-balance sm:text-5xl">
              {cs.client}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-2xl text-lg text-foreground/60 text-balance">{cs.summary}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {cs.results.map((r) => (
                <div key={r.label} className="rounded-2xl border border-border-subtle bg-surface p-6 text-center">
                  <div className="text-3xl font-medium text-gradient">{r.value}</div>
                  <p className="mt-2 text-sm text-foreground/60">{r.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Challenge</h2>
              <p className="mt-4 text-foreground/60 leading-relaxed">{cs.challenge}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Solution</h2>
              <p className="mt-4 text-foreground/60 leading-relaxed">{cs.solution}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Workflow diagram placeholder */}
      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Workflow diagram</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 rounded-3xl border border-border-subtle bg-surface p-8 sm:p-12">
              <div className="grid gap-8 sm:grid-cols-4">
                {diagramIcons.map((DiagramIcon, i) => (
                  <div key={i} className="relative flex flex-col items-center gap-3 text-center">
                    {i < diagramIcons.length - 1 && (
                      <div className="absolute left-1/2 top-7 hidden h-px w-full bg-gradient-to-r from-electric/40 to-violet/40 sm:block" />
                    )}
                    <div className="relative z-10 flex size-14 items-center justify-center rounded-full border border-border-subtle bg-surface-muted">
                      <DiagramIcon className="size-6 text-electric" />
                    </div>
                    <span className="text-xs font-medium text-foreground/60 sm:text-sm">
                      {cs.process[i]?.title ?? "Step"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <Reveal>
                <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Our process</h2>
              </Reveal>
              <ProcessTimeline steps={cs.process} />
            </div>

            <div>
              <Reveal>
                <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Before &amp; after</h2>
              </Reveal>
              <div className="mt-6 flex flex-col gap-3">
                {cs.metrics.map((m, i) => (
                  <Reveal key={m.label} delay={i * 0.06}>
                    <div className="rounded-xl border border-border-subtle bg-surface p-5">
                      <div className="text-sm font-medium text-foreground/80">{m.label}</div>
                      <div className="mt-3 flex items-center gap-3">
                        <span className="rounded-full bg-surface-muted px-3 py-1 text-sm text-foreground/50 line-through">
                          {m.before}
                        </span>
                        <ArrowRight className="size-4 text-foreground/30" />
                        <span className="rounded-full bg-electric/10 px-3 py-1 text-sm font-medium text-electric">
                          {m.after}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.2}>
                <h3 className="mt-10 text-lg font-medium">Tools used</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cs.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-border-subtle bg-surface-muted px-3.5 py-1.5 text-xs font-medium text-foreground/70"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="rounded-3xl border border-border-subtle bg-surface-muted p-10 text-center">
              <Quote className="mx-auto size-8 text-electric/40" />
              <p className="mt-6 text-xl font-medium text-balance leading-relaxed">
                &ldquo;{cs.quote.text}&rdquo;
              </p>
              <div className="mt-6">
                <div className="font-medium">{cs.quote.author}</div>
                <div className="text-sm text-foreground/50">
                  {cs.quote.role}, {cs.client}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="Want results like this for your business?"
        description="Book a free 30-minute call and we'll map the opportunity specific to your business."
      />
    </>
  );
}
