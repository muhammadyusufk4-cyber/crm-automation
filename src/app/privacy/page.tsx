import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SummitOps collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated July 2026" />
      <section className="pb-24 sm:pb-32">
        <Container className="max-w-3xl">
          <div className="prose-sm flex flex-col gap-8 text-foreground/70 leading-relaxed">
            <div>
              <h2 className="text-xl font-medium text-foreground">Information we collect</h2>
              <p className="mt-3">
                When you submit our contact form or book a strategy call, we collect your name,
                email address, company name, and any information you choose to share about your
                project. We do not collect this information through any other means without your
                knowledge.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-medium text-foreground">How we use it</h2>
              <p className="mt-3">
                We use the information you provide solely to respond to your inquiry, schedule
                calls, and, if you become a client, to deliver our services. We do not sell or
                rent your information to third parties.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-medium text-foreground">Data storage</h2>
              <p className="mt-3">
                Form submissions are transmitted securely to our internal CRM. You may request
                deletion of your data at any time by emailing hello@summitops.ai.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-medium text-foreground">Cookies &amp; analytics</h2>
              <p className="mt-3">
                We use privacy-conscious analytics tools to understand aggregate site usage. No
                individually identifying data is sold or shared with advertisers.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-medium text-foreground">Contact</h2>
              <p className="mt-3">
                Questions about this policy can be sent to{" "}
                <a href="mailto:hello@summitops.ai" className="text-electric">
                  hello@summitops.ai
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
