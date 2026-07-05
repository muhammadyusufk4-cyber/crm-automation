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
    "Converge helps HVAC, plumbing, auto, dental, and med-spa businesses stop losing customers to slow follow-up with CRM automation, AI agents, and hands-on systems consulting.",
};

const values = [
  {
    icon: Target,
    title: "Outcomes over output",
    description: "We measure success in hours saved and jobs booked, not workflows shipped.",
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
    title: "We've done this before, not just talked about it",
    description: "Every recommendation comes from having actually built it inside a real business, not a slide deck.",
  },
  {
    title: "One team, everything connected",
    description: "CRM setup, AI agents, and integrations from one team, instead of coordinating three different vendors.",
  },
  {
    title: "We recommend what fits, not what we sell",
    description: "The right CRM or tool is whichever one fits your business — not the one we make the most money referring.",
  },
  {
    title: "Fixed price, no surprises",
    description: "You know the full cost before we start. No hourly billing, no surprise invoices.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Converge"
        title="We build the systems behind every job you win."
        description="Converge exists because too many good businesses lose customers to slow follow-up, not bad work. We fix the follow-up."
      />

      <section className="pb-24 sm:pb-32">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Our story</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-6 space-y-4 text-foreground/70 leading-relaxed">
              <p>
                Converge started with a simple observation: the busiest, best-reviewed local
                businesses we talked to weren&apos;t winning because they worked harder than
                everyone else — they were winning because almost nothing manual stood between a
                customer calling and that customer getting booked.
              </p>
              <p>
                Everywhere else, good businesses were losing jobs they should have won. Calls went
                to voicemail. Quotes took days to go out. Follow-up depended on someone remembering
                to do it between other jobs. The work wasn&apos;t the problem — nobody had built
                the system to catch every customer before they called someone else.
              </p>
              <p>
                Today we work with HVAC companies, plumbers, electricians, auto shops, med spas,
                and dental practices who all share the same pattern: plenty of demand, but a
                follow-up process that&apos;s costing them jobs. We build the systems that close
                that gap — and we measure ourselves against the hours and revenue it recovers.
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
                  To take the manual busywork off your team&apos;s plate so every customer gets a
                  fast reply, every quote gets followed up, and every job gets booked.
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
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Why owners choose us</h2>
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
        title="Let's talk about how your team follows up today."
        description="Book a free 30-minute call — we'll tell you honestly whether automation is your biggest opportunity right now, or if something else should come first."
      />
    </>
  );
}
