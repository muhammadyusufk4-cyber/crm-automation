import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "meridian-recruiting",
    client: "Meridian Recruiting",
    industry: "Recruitment",
    logo: "Meridian",
    summary: "A 40-person staffing firm cut time-to-placement by 38% by automating candidate sourcing and client reporting.",
    challenge:
      "Meridian's recruiters were spending nearly half their week on manual data entry between their ATS and CRM, duplicating candidate profiles and manually compiling weekly client status reports. Placements were slipping because sourcing couldn't keep pace with open requisitions.",
    solution:
      "We built a bi-directional sync between their ATS and HubSpot, automated candidate sourcing sequences across email and LinkedIn, and replaced manual client reporting with live, auto-updating dashboards tied directly to pipeline stage changes.",
    process: [
      { title: "Audit", description: "Mapped every manual hand-off between the ATS, CRM, and spreadsheets used for client reporting." },
      { title: "Integration build", description: "Built a real-time sync layer so candidate and requisition data never had to be re-entered." },
      { title: "Automation rollout", description: "Deployed sourcing sequences, screening automation, and client-facing dashboards." },
      { title: "Recruiter training", description: "Trained all 12 recruiters on the new workflow with live sessions and recorded guides." },
    ],
    results: [
      { label: "Faster time-to-placement", value: "38%" },
      { label: "Recruiter admin hours saved weekly", value: "15 hrs" },
      { label: "More candidates sourced per month", value: "3x" },
    ],
    metrics: [
      { label: "Time-to-placement", before: "29 days", after: "18 days" },
      { label: "Recruiter admin time / week", before: "18 hrs", after: "3 hrs" },
      { label: "Client reporting time", before: "6 hrs/week", after: "Automated" },
    ],
    quote: {
      text: "We used to lose good candidates because our process couldn't move fast enough. Now sourcing, screening, and reporting all happen while our recruiters are on calls with clients.",
      author: "Sarah Chen",
      role: "VP of Operations",
    },
    tools: ["HubSpot", "n8n", "Apollo", "Clay"],
    featured: true,
  },
  {
    slug: "brightpath-realty",
    client: "Brightpath Realty Group",
    industry: "Real Estate",
    logo: "Brightpath",
    summary: "A 60-agent brokerage more than doubled lead-to-appointment conversion after unifying lead capture from 8 sources.",
    challenge:
      "Brightpath's leads came from 8 different portals and campaigns, landing in disconnected inboxes and spreadsheets. Follow-up speed and consistency varied wildly by agent, and transaction coordination relied on manual checklists that regularly missed deadlines.",
    solution:
      "We unified every lead source into a single CRM pipeline with automatic deduplication, built agent-specific nurture sequences triggered by lead behavior, and automated transaction milestone tracking with task creation for coordinators.",
    process: [
      { title: "Lead source audit", description: "Catalogued every lead source and mapped where leads were being lost or duplicated." },
      { title: "Unified capture", description: "Routed every source into a single CRM with real-time deduplication logic." },
      { title: "Nurture automation", description: "Built buyer and seller nurture sequences triggered by behavior and lead source." },
      { title: "Transaction automation", description: "Automated milestone-based task creation for the transaction coordination team." },
    ],
    results: [
      { label: "Lead-to-appointment conversion", value: "+140%" },
      { label: "Faster average transaction close", value: "22%" },
      { label: "Agent hours saved monthly", value: "40 hrs" },
    ],
    metrics: [
      { label: "Lead-to-appointment rate", before: "8%", after: "19%" },
      { label: "Average response time", before: "4.2 hrs", after: "3 min" },
      { label: "Missed transaction deadlines / month", before: "11", after: "0" },
    ],
    quote: {
      text: "Every lead used to be a coin flip on whether it got followed up on. Now every single one gets the same fast, consistent experience regardless of which agent it lands on.",
      author: "Marcus Rivera",
      role: "Managing Broker",
    },
    tools: ["GoHighLevel", "Zapier", "Google Workspace"],
    featured: true,
  },
  {
    slug: "clearwave-health",
    client: "Clearwave Health Partners",
    industry: "Healthcare",
    logo: "Clearwave",
    summary: "A multi-location clinic group reduced no-shows by 31% and cut administrative overhead with automated patient workflows.",
    challenge:
      "Clearwave's five locations each handled patient intake and reminders differently, leading to inconsistent no-show rates and front-desk staff spending hours a day on manual scheduling confirmations and referral tracking.",
    solution:
      "We standardized digital intake across all locations synced directly into their practice management system, deployed multi-channel appointment reminders, and automated referral routing between departments with follow-up tracking.",
    process: [
      { title: "Compliance-aware discovery", description: "Mapped intake and referral workflows across all five locations with data handling requirements in mind." },
      { title: "Intake automation", description: "Deployed standardized digital intake forms syncing directly to the practice management system." },
      { title: "Reminder automation", description: "Built multi-channel (SMS, email, voice) appointment reminder sequences." },
      { title: "Referral workflow build", description: "Automated referral creation, routing, and follow-up tracking between departments." },
    ],
    results: [
      { label: "No-show rate reduction", value: "31%" },
      { label: "Front-desk admin hours saved weekly", value: "18 hrs" },
      { label: "Faster referral follow-up", value: "5x" },
    ],
    metrics: [
      { label: "No-show rate", before: "17%", after: "12%" },
      { label: "Front-desk admin hours / week", before: "26 hrs", after: "8 hrs" },
      { label: "Referral follow-up time", before: "6 days", after: "1 day" },
    ],
    quote: {
      text: "Our front desk teams finally have time to focus on patients instead of chasing down confirmations across five different spreadsheets.",
      author: "Dr. Elena Vasquez",
      role: "Chief Operating Officer",
    },
    tools: ["Salesforce Health Cloud", "Make", "Twilio"],
  },
  {
    slug: "forge-manufacturing",
    client: "Forge Industrial Supply",
    industry: "Manufacturing",
    logo: "Forge",
    summary: "A regional manufacturer cut quote turnaround by 60% by connecting their ERP, CRM, and distributor network.",
    challenge:
      "Forge's sales team built quotes manually from spreadsheets and static price lists, with no visibility into real-time inventory or order status from the ERP. Distributor communication was scattered across email threads with no central tracking.",
    solution:
      "We built a live integration between their ERP and CRM so quotes generate automatically from current pricing and inventory data, gave sales real-time order and fulfillment visibility, and automated distributor notifications and reorder reminders.",
    process: [
      { title: "Systems audit", description: "Assessed ERP, CRM, and distributor communication workflows for integration points." },
      { title: "ERP-CRM integration", description: "Built a real-time data sync so quotes always reflect current pricing and inventory." },
      { title: "Quoting automation", description: "Automated quote and proposal generation directly from CRM opportunity data." },
      { title: "Distributor automation", description: "Deployed automated notifications and reorder reminder workflows for the distributor network." },
    ],
    results: [
      { label: "Faster quote turnaround", value: "60%" },
      { label: "Order visibility improvement", value: "100%" },
      { label: "Reporting hours saved monthly", value: "20 hrs" },
    ],
    metrics: [
      { label: "Average quote turnaround", before: "3.5 days", after: "1.4 days" },
      { label: "Order status visibility for sales", before: "None", after: "Real-time" },
      { label: "Manual reporting hours / month", before: "20 hrs", after: "0 hrs" },
    ],
    quote: {
      text: "Sales used to call operations just to find out where an order stood. Now it's all in the CRM in real time, and quotes go out same-day instead of end-of-week.",
      author: "Tom Whitfield",
      role: "VP of Sales",
    },
    tools: ["Salesforce", "n8n", "Custom API"],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
