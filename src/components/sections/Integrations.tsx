import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { crmPlatforms, aiPlatforms, automationTools } from "@/data/integrations";

function LogoPill({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-5 py-2.5 text-sm font-medium text-foreground/70 whitespace-nowrap">
      {name}
    </div>
  );
}

export function Integrations() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Integrations"
          title="Works with the tools you already run on."
          description="No rip-and-replace. We automate on top of your existing CRM, AI, and outbound stack."
        />
      </Container>

      <div className="mt-14 flex flex-col gap-4">
        <Marquee duration="36s">
          {[...crmPlatforms, ...crmPlatforms].map((item, i) => (
            <LogoPill key={`${item.name}-${i}`} name={item.name} />
          ))}
        </Marquee>
        <Marquee duration="30s" reverse>
          {[...aiPlatforms, ...automationTools, ...aiPlatforms, ...automationTools].map((item, i) => (
            <LogoPill key={`${item.name}-${i}`} name={item.name} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
