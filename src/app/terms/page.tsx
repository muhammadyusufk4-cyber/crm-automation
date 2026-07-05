import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the Converge website and services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" description="Last updated July 2026" />
      <section className="pb-24 sm:pb-32">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-8 text-foreground/70 leading-relaxed">
            <div>
              <h2 className="text-xl font-medium text-foreground">Use of this website</h2>
              <p className="mt-3">
                This website is provided for informational purposes about Converge&apos;
                services. By using it, you agree not to misuse the site, attempt unauthorized
                access to any systems, or reproduce content without permission.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-medium text-foreground">Service engagements</h2>
              <p className="mt-3">
                Any services described on this site are subject to a separate signed agreement
                outlining scope, timeline, and pricing. Nothing on this website constitutes a
                binding offer until a formal agreement is executed by both parties.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-medium text-foreground">Intellectual property</h2>
              <p className="mt-3">
                All content on this site, including copy, graphics, and code, is the property of
                Converge unless otherwise noted, and may not be reproduced without written
                consent.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-medium text-foreground">Limitation of liability</h2>
              <p className="mt-3">
                Converge is not liable for any indirect or consequential damages arising from
                use of this website. Service-related liability is governed exclusively by the
                signed services agreement for each engagement.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-medium text-foreground">Contact</h2>
              <p className="mt-3">
                Questions about these terms can be sent to{" "}
                <a href="mailto:hello@converge.ai" className="text-electric">
                  hello@converge.ai
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
