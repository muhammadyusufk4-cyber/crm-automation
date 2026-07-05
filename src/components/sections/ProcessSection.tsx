import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";

const methodology = [
  { title: "Discover", description: "A close look at how your team handles calls, quotes, and follow-up today, to find where time and jobs are slipping away." },
  { title: "Design", description: "A clear plan for every automation before we touch anything — so you know what's changing and why." },
  { title: "Build", description: "Built directly inside the tools you already use — no switching software, nothing new for your team to learn from scratch." },
  { title: "Test", description: "Every automation is tested against real scenarios before it ever touches a real customer." },
  { title: "Launch", description: "A phased rollout with hands-on training, so your team is comfortable from day one." },
  { title: "Optimize", description: "We keep tuning based on how it's actually being used, with support available for whatever comes next." },
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
              title="A repeatable process, not a one-off project."
              description="The same six phases run on every engagement, whether it's a single AI agent or a full system overhaul."
              className="lg:items-start lg:text-left"
            />
          </div>
          <ProcessTimeline steps={methodology} />
        </div>
      </Container>
    </section>
  );
}
