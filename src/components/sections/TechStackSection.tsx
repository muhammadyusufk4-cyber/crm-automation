import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { techStack } from "@/data/integrations";

const groups: { title: string; items: string[] }[] = [
  { title: "Frontend", items: techStack.frontend },
  { title: "Backend", items: techStack.backend },
  { title: "Authentication", items: techStack.auth },
  { title: "Deployment", items: techStack.deployment },
  { title: "Analytics", items: techStack.analytics },
];

export function TechStackSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Technology"
          title="Built on the same stack modern SaaS companies run on."
          description="When we build custom dashboards, portals, or internal tools as part of an engagement, this is the foundation."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border-subtle bg-surface p-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
                  {g.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((item) => (
                    <li key={item} className="text-sm text-foreground/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
