import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Ban, Clock, Database, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Manual busywork",
    description: "Reps spend hours a week on data entry, task creation, and status updates instead of selling.",
  },
  {
    icon: TrendingDown,
    title: "Lost & cold leads",
    description: "Leads sit unassigned for hours while speed-to-lead determines whether they convert at all.",
  },
  {
    icon: Database,
    title: "Scattered data",
    description: "Contact and deal data lives across a dozen tools that don't talk to each other.",
  },
  {
    icon: Ban,
    title: "Low CRM adoption",
    description: "Reps keep shadow spreadsheets because the CRM demands more effort than it gives back.",
  },
];

export function ProblemStatement() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="The problem"
          title="Your CRM is a database. It should be a system."
          description="Most revenue teams don't have a tooling problem — they have an automation gap. Here's what that gap costs you every week."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, i) => (
            <Reveal key={problem.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border-subtle bg-surface p-6">
                <div className="flex size-10 items-center justify-center rounded-xl bg-surface-muted text-foreground/70">
                  <problem.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-medium">{problem.title}</h3>
                <p className="mt-2 text-sm text-foreground/60">{problem.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
