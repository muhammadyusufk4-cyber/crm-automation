import { Calendar } from "lucide-react";

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

export function CalendlyEmbed() {
  if (calendlyUrl) {
    return (
      <div className="overflow-hidden rounded-2xl border border-border-subtle">
        <iframe
          src={calendlyUrl}
          title="Book a strategy call"
          className="h-[700px] w-full"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="flex h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-border-subtle bg-surface-muted p-10 text-center">
      <div className="flex size-14 items-center justify-center rounded-2xl bg-surface text-electric">
        <Calendar className="size-6" />
      </div>
      <h3 className="mt-5 font-medium">Calendly embed placeholder</h3>
      <p className="mt-2 max-w-sm text-sm text-foreground/60">
        Set the <code className="rounded bg-surface px-1.5 py-0.5 text-xs">NEXT_PUBLIC_CALENDLY_URL</code>{" "}
        environment variable to your Calendly scheduling link to embed live booking here.
      </p>
    </div>
  );
}
