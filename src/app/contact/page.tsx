import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FAQSection } from "@/components/sections/FAQSection";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { CalendlyEmbed } from "@/components/forms/CalendlyEmbed";
import { MapPlaceholder } from "@/components/ui/MapPlaceholder";
import { generalFaqs } from "@/data/faqs";
import { Mail, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a strategy call with Converge to map out where CRM automation, AI agents, and workflow automation would save your team the most time.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's map your automation opportunity."
        description="Fill out the form or grab a slot directly on our calendar — either way you'll talk to someone who can scope the work, not a gatekeeper."
      />

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl border border-border-subtle bg-surface p-8">
                <h2 className="text-xl font-medium">Send us a message</h2>
                <p className="mt-2 text-sm text-foreground/60">
                  We respond within one business day.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col gap-6">
              <div>
                <h2 className="text-xl font-medium">Book directly</h2>
                <p className="mt-2 text-sm text-foreground/60">
                  Prefer to skip the form? Pick a time that works for you.
                </p>
                <div className="mt-5">
                  <CalendlyEmbed />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-border-subtle bg-surface p-5">
                  <Mail className="size-5 text-electric" />
                  <div className="mt-3 text-sm font-medium">Email</div>
                  <a href="mailto:hello@converge.ai" className="text-sm text-foreground/60 hover:text-foreground">
                    hello@converge.ai
                  </a>
                </div>
                <div className="rounded-xl border border-border-subtle bg-surface p-5">
                  <Clock className="size-5 text-electric" />
                  <div className="mt-3 text-sm font-medium">Response time</div>
                  <div className="text-sm text-foreground/60">Within 1 business day</div>
                </div>
                <div className="rounded-xl border border-border-subtle bg-surface p-5">
                  <MessageCircle className="size-5 text-electric" />
                  <div className="mt-3 text-sm font-medium">Call length</div>
                  <div className="text-sm text-foreground/60">30 minutes, no obligation</div>
                </div>
              </div>

              <MapPlaceholder />
            </Reveal>
          </div>
        </Container>
      </section>

      <FAQSection faqs={generalFaqs} />
    </>
  );
}
