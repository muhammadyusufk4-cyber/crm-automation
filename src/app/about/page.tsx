import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Target, Compass, ShieldCheck, Gauge, Layers, Users2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "SummitOps is a revenue automation partner helping B2B teams eliminate manual sales work with CRM automation, AI agents, and RevOps consulting.",
};

const values = [
  {
    icon: Target,
    title: "Outcomes over output",
    description: "We measure success in hours saved and deals closed, not workflows shipped.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last",
    description: "Every automation ships with monitoring, documentation, and a rollback plan — not just a demo.",
  },
  {
    icon: Gauge,
    title: "Bias toward speed",
    description: "Most engagements go from kickoff to live system in weeks, not quarters.",
  },
  {
    icon: Users2,
    title: "Your team, not ours",
    description: "We build systems your team can operate and extend — no permanent dependency on us.",
  },
];

const whyUs = [
  {
    title: "We're operators, not just consultants",
    description: "Every recommendation is built from having implemented it inside a real revenue team, not a slide deck.",
  },
  {
    title: "One partner, full stack",
    description: "CRM configuration, AI agents, and integrations from one team instead of stitching together three vendors.",
  },
  {
    title: "Platform agnostic",
    description: "We recommend the CRM, AI model, or automation tool that fits your business — not the one we're incentivized to sell.",
  },
  {
    title: "Fixed scope, fixed price",
    description: "You know the full investment before we start. No hourly billing surprises.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SummitOps"
        title="We build the systems behind the sale."
        description="SummitOps exists because too much revenue gets lost to manual process, not bad strategy. We fix the process."
      />

      <section className="pb-24 sm:pb-32">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Our story</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-6 space-y-4 text-foreground/70 leading-relaxed">
              <p>
                SummitOps started with a simple observation: the highest-performing sales teams
                we worked with weren&apos;t winning because of better reps or bigger budgets —
                they were winning because almost nothing manual stood between a lead showing up
                and a rep having everything they needed to close it.
              </p>
              <p>
                Everyone else was buying more software and getting less out of it. CRMs sat
                half-configured. Leads sat unassigned. Reports took a day to compile. The tools
                weren&apos;t the problem — nobody had built the automation layer connecting them.
              </p>
              <p>
                Today we work with B2B SaaS companies, agencies, recruiters, healthcare providers,
                and manufacturers who all share the same pattern: strong demand, inconsistent
                systems. We build the automation, AI agents, and integrations that close that gap
                — and we measure ourselves against the hours and revenue it recovers.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-border-subtle bg-surface p-8">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-surface-muted text-electric">
                  <Compass className="size-6" />
                </div>
                <h3 className="mt-6 text-xl font-medium">Our mission</h3>
                <p className="mt-3 text-foreground/60 leading-relaxed">
                  To eliminate manual work from revenue operations so every sales team can spend
                  its time on the conversations that actually close deals.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-3xl border border-border-subtle bg-surface p-8">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-surface-muted text-violet">
                  <Layers className="size-6" />
                </div>
                <h3 className="mt-6 text-xl font-medium">Technology philosophy</h3>
                <p className="mt-3 text-foreground/60 leading-relaxed">
                  We&apos;re platform and model agnostic by design. The right CRM, AI model, or
                  automation tool is whichever one fits your process — we integrate with what you
                  have rather than requiring you to standardize on our preferred stack.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Our values</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border-subtle bg-surface p-6">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-surface-muted text-foreground/70">
                    <v.icon className="size-5" />
                  </div>
                  <h3 className="mt-5 font-medium">{v.title}</h3>
                  <p className="mt-2 text-sm text-foreground/60">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Why teams choose us</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl bg-surface-muted p-6">
                  <h3 className="font-medium">{w.title}</h3>
                  <p className="mt-2 text-sm text-foreground/60">{w.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ProcessSection />

      <CTASection
        title="Let's talk about your revenue operations."
        description="Book a 30-minute strategy call — we'll tell you honestly whether automation is your biggest lever right now."
      />
    </>
  );
}
