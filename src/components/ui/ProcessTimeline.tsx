import { ProcessStep } from "@/types";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="relative mt-4 flex flex-col gap-8">
      <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border-subtle" />
      {steps.map((step, i) => (
        <Reveal key={step.title} delay={i * 0.06} className="relative flex gap-6">
          <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-surface text-sm font-medium text-electric">
            {i + 1}
          </div>
          <div className="pt-1.5">
            <h4 className="font-medium">{step.title}</h4>
            <p className="mt-1.5 text-sm text-foreground/60">{step.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
