import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PhoneMissed, Clock, FileWarning, Star } from "lucide-react";

const problems = [
  {
    icon: PhoneMissed,
    title: "Missed calls, missed jobs",
    description: "Every call that goes to voicemail is a customer who might just call the next company on the list.",
  },
  {
    icon: Clock,
    title: "Hours lost to admin",
    description: "Your team spends evenings on quotes, invoices, and follow-up texts instead of going home on time.",
  },
  {
    icon: FileWarning,
    title: "Slow quotes lose jobs",
    description: "A quote that takes three days to go out often loses to whoever got there first.",
  },
  {
    icon: Star,
    title: "Happy customers, no reviews",
    description: "Great jobs go unrated because nobody remembers to ask — until a competitor's reviews pull ahead.",
  },
];

export function ProblemStatement() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="The problem"
          title="You're not losing jobs because of bad work. You're losing them to slow follow-up."
          description="Every missed call, delayed quote, and forgotten follow-up is a customer choosing someone else. Here's what that actually costs you every week."
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
