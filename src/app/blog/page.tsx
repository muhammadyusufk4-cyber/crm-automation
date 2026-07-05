import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { BlogListing } from "@/components/sections/BlogListing";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical advice on CRM automation, AI agents, and running a busier, better-organized service business — for HubSpot, Salesforce, and GoHighLevel users.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Practical advice, not generic AI hype."
        description="Notes from real projects we've run — what actually worked, what didn't, and what to try next."
      />
      <BlogListing />
      <CTASection />
    </>
  );
}
