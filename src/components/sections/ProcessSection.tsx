import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";

const methodology = [
  { title: "Discover", description: "Deep-dive audit of your current CRM, tools, and sales process to find where time and revenue leak." },
  { title: "Design", description: "An automation blueprint mapping every trigger, workflow, and integration before a line is built." },
  { title: "Build", description: "Implementation directly inside your existing stack — no rip-and-replace, no new tools to adopt." },
  { title: "Test", description: "Every workflow is run against real and edge-case scenarios before it touches live data." },
  { title: "Launch", description: "Phased rollout with team training so adoption happens from day one, not after a struggle." },
  { title: "Optimize", description: "Post-launch tuning based on real usage data, with retainer support for what comes next." },
];

export function ProcessSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our process"
              title="A repeatable methodology, not a one-off project."
              description="The same six phases run on every engagement, whether it's a single AI agent or a full RevOps transformation."
              className="lg:items-start lg:text-left"
            />
          </div>
          <ProcessTimeline steps={methodology} />
        </div>
      </Container>
    </section>
  );
}
