import { MapPin } from "lucide-react";

export function MapPlaceholder({ location = "Remote-first · Serving clients worldwide" }: { location?: string }) {
  return (
    <div className="bg-grid relative flex h-64 items-center justify-center overflow-hidden rounded-2xl border border-border-subtle bg-surface-muted">
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_30%,transparent_100%)]" />
      <div className="relative flex flex-col items-center text-center">
        <div className="flex size-12 items-center justify-center rounded-full border border-border-subtle bg-surface text-electric">
          <MapPin className="size-5" />
        </div>
        <p className="mt-3 text-sm font-medium text-foreground/70">{location}</p>
      </div>
    </div>
  );
}
