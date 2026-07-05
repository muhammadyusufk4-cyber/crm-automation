import { Hero } from "@/components/sections/Hero";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { Solutions } from "@/components/sections/Solutions";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Integrations } from "@/components/sections/Integrations";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { Benefits } from "@/components/sections/Benefits";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { generalFaqs } from "@/data/faqs";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemStatement />
      <Solutions />
      <ServicesGrid />
      <HowItWorks />
      <Integrations />
      <IndustriesSection />
      <Benefits />
      <CaseStudiesSection />
      <Testimonials />
      <ProcessSection />
      <FAQSection faqs={generalFaqs} />
      <CTASection />
    </>
  );
}
