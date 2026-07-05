import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { BlogListing } from "@/components/sections/BlogListing";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on CRM automation, AI agents, sales automation, RevOps, and integrations for HubSpot, Salesforce, and GoHighLevel.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes on revenue operations, automation, and AI."
        description="Practical frameworks from engagements we've run — not generic thought leadership."
      />
      <BlogListing />
      <CTASection />
    </>
  );
}
