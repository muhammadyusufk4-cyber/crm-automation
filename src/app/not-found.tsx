import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/legacy/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-24">
      <Container className="flex flex-col items-center text-center">
        <span className="text-gradient text-7xl font-medium">404</span>
        <h1 className="mt-4 text-2xl font-medium tracking-tight">This page didn&apos;t automate itself.</h1>
        <p className="mt-3 max-w-md text-foreground/60">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back
          on track.
        </p>
        <div className="mt-8 flex gap-4">
          <Button href="/">Back to home</Button>
          <Link href="/contact" className="flex items-center text-sm font-medium text-foreground/70 hover:text-foreground">
            Contact us →
          </Link>
        </div>
      </Container>
    </section>
  );
}
