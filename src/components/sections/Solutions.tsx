import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Bot, Workflow, Compass } from "lucide-react";

const solutions = [
  {
    icon: Workflow,
    title: "CRM & Workflow Automation",
    description:
      "We set up your CRM to capture every call and lead, send quotes and invoices automatically, and remind customers about appointments — so it runs itself instead of running your team ragged.",
    gradient: "from-electric/15 to-transparent",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "A custom AI agent answers calls and messages, books appointments, and follows up on quotes — around the clock, across every channel your customers actually use.",
    gradient: "from-violet/15 to-transparent",
  },
  {
    icon: Compass,
    title: "Business Systems Consulting",
    description:
      "A clear, prioritized plan connecting your front desk, dispatch, and billing into one coordinated system you can actually measure and trust.",
    gradient: "from-electric/15 to-violet/10",
  },
];

export function Solutions() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="The solution"
          title="One partner. Three ways we get you there."
          description="We don't sell one-off automations. We build one connected system across the tools you already use."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-border-subtle bg-surface p-8">
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient}`} />
                <div className="relative">
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-border-subtle bg-surface-muted">
                    <s.icon className="size-6 text-electric" />
                  </div>
                  <h3 className="mt-6 text-xl font-medium">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/60">{s.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
