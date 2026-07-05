import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/ui/StatCounter";

const benefits = [
  { stat: "83%", label: "Less time on manual data entry (illustrative)" },
  { stat: "11x", label: "Faster response to new customer inquiries (illustrative)" },
  { stat: "35%", label: "More appointments booked per month (illustrative)" },
  { stat: "20+", label: "Admin hours saved every week (illustrative)" },
];

export function Benefits() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy to-navy-2" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_40%,transparent_100%)]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Results"
          title={<span className="text-white">The impact shows up in your numbers, not just your workflow.</span>}
          description=""
          className="[&_p]:text-white/50"
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.label} delay={i * 0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
                <div className="text-4xl font-medium text-white sm:text-5xl">
                  <StatCounter value={b.stat} />
                </div>
                <p className="mt-3 text-sm text-white/50">{b.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
