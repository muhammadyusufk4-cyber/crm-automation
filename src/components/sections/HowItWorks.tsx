import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Strategy Call",
    description: "We learn how your team handles calls, quotes, and follow-up today, and where time and jobs are actually being lost.",
  },
  {
    number: "02",
    title: "Automation Blueprint",
    description: "You get a concrete plan — what gets automated, in what order, and the expected impact.",
  },
  {
    number: "03",
    title: "Build & Integrate",
    description: "We implement workflows, AI agents, and integrations directly inside your existing stack.",
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description: "We test against real scenarios, train your team, and tune the system against live results.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From first call to a working system in weeks, not quarters."
        />

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-9 left-0 right-0 hidden h-px bg-border-subtle lg:block" />
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1} className="relative">
              <div className="relative flex size-[72px] items-center justify-center rounded-2xl border border-border-subtle bg-surface text-xl font-medium text-electric">
                {step.number}
              </div>
              <h3 className="mt-5 font-medium">{step.title}</h3>
              <p className="mt-2 text-sm text-foreground/60">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
