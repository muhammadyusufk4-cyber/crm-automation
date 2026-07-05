import { Industry } from "@/types";

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline: "Automate patient intake without breaking compliance.",
    description:
      "We help healthcare providers and healthtech companies automate scheduling, intake, and follow-up while keeping patient data secure and compliant.",
    icon: "HeartPulse",
    stat: { label: "Reduction in no-show rate", value: "31%" },
    problems: [
      "Patient intake forms require manual re-entry into the CRM or EHR",
      "Appointment reminders are inconsistent, driving high no-show rates",
      "Referral follow-ups fall through the cracks between departments",
      "Patient data is scattered across scheduling, billing, and CRM tools",
    ],
    solutions: [
      { title: "Automated intake", description: "Digital intake forms sync directly into your CRM or practice management system." },
      { title: "Smart appointment reminders", description: "Multi-channel reminders reduce no-shows without manual staff effort." },
      { title: "Referral tracking automation", description: "Referrals are logged, routed, and followed up automatically." },
      { title: "Compliant data workflows", description: "Automations are designed with data handling that respects healthcare privacy requirements." },
    ],
    automations: [
      "Automated patient intake and record creation",
      "Appointment reminder and rescheduling flows",
      "Referral routing and follow-up",
      "Post-visit satisfaction and review requests",
      "Insurance verification status tracking",
    ],
    outcomes: [
      { label: "No-show reduction", value: "31%" },
      { label: "Admin hours saved weekly", value: "18 hrs" },
      { label: "Faster referral follow-up", value: "5x" },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    tagline: "Never let a lead go cold between showings again.",
    description:
      "We automate lead routing, follow-up, and transaction coordination for real estate teams and brokerages so agents spend more time closing and less time chasing paperwork.",
    icon: "Building2",
    stat: { label: "More leads converted to appointments", value: "2.4x" },
    problems: [
      "Leads from multiple portals aren't captured in one place",
      "Follow-up happens inconsistently across agents",
      "Transaction coordination relies on manual checklists",
      "Past clients aren't nurtured for referrals or repeat business",
    ],
    solutions: [
      { title: "Unified lead capture", description: "Leads from every portal and source flow into one CRM automatically." },
      { title: "Automated nurture sequences", description: "Buyers and sellers get consistent follow-up regardless of agent workload." },
      { title: "Transaction automation", description: "Milestone-based task creation keeps every closing on track." },
      { title: "Referral and repeat-client flows", description: "Automated check-ins keep past clients engaged for future business." },
    ],
    automations: [
      "Multi-portal lead capture and deduplication",
      "Buyer and seller nurture sequences",
      "Showing scheduling and reminders",
      "Transaction milestone task automation",
      "Post-closing referral requests",
    ],
    outcomes: [
      { label: "Lead-to-appointment rate", value: "+140%" },
      { label: "Faster transaction close time", value: "22%" },
      { label: "Agent hours saved monthly", value: "40 hrs" },
    ],
  },
  {
    slug: "recruitment",
    name: "Recruitment",
    tagline: "Fill roles faster with a pipeline that runs itself.",
    description:
      "We automate candidate sourcing, screening, and client communication for recruitment and staffing firms so recruiters focus on placements, not admin.",
    icon: "UserSearch",
    stat: { label: "Faster candidate-to-placement time", value: "38%" },
    problems: [
      "Candidate data is duplicated across ATS, CRM, and spreadsheets",
      "Screening and follow-up is manual and inconsistent",
      "Client updates require manual status reports",
      "Sourcing outreach doesn't scale with open requisitions",
    ],
    solutions: [
      { title: "ATS-CRM synchronization", description: "Candidate and client data stays in sync across your ATS and CRM automatically." },
      { title: "Automated screening flows", description: "Initial screening questions and scheduling happen without recruiter intervention." },
      { title: "Client reporting automation", description: "Clients get automatic pipeline updates without manual reporting." },
      { title: "Scaled sourcing outreach", description: "Outreach sequences run across email and LinkedIn to keep pipelines full." },
    ],
    automations: [
      "Candidate sourcing and outreach sequences",
      "Automated screening and interview scheduling",
      "ATS-CRM data synchronization",
      "Client status reporting",
      "Placement and follow-up workflows",
    ],
    outcomes: [
      { label: "Faster time-to-placement", value: "38%" },
      { label: "More candidates sourced monthly", value: "3x" },
      { label: "Recruiter admin time saved", value: "15 hrs/wk" },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    tagline: "Connect quoting, sales, and fulfillment into one system.",
    description:
      "We automate quote generation, order tracking, and distributor communication for manufacturers so sales and operations teams work from the same real-time data.",
    icon: "Factory",
    stat: { label: "Faster quote turnaround", value: "60%" },
    problems: [
      "Quotes are built manually from spreadsheets and price lists",
      "Order status isn't visible to sales without checking with operations",
      "Distributor and rep communication happens over scattered emails",
      "Reporting is stitched together manually across systems",
    ],
    solutions: [
      { title: "Automated quoting", description: "Quotes generate directly from CRM and product data in minutes." },
      { title: "Real-time order visibility", description: "Sales sees live order and fulfillment status inside the CRM." },
      { title: "Distributor automation", description: "Distributor and rep communication is centralized and automated." },
      { title: "Unified reporting", description: "Sales and operations reporting pulls from one connected data source." },
    ],
    automations: [
      "Automated quote and proposal generation",
      "Order status sync between ERP and CRM",
      "Distributor and rep notification workflows",
      "Renewal and reorder reminders",
      "Sales and operations reporting dashboards",
    ],
    outcomes: [
      { label: "Faster quote turnaround", value: "60%" },
      { label: "Order visibility improvement", value: "100%" },
      { label: "Fewer reporting hours monthly", value: "20 hrs" },
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    tagline: "Automate client intake, engagement, and reporting.",
    description:
      "We help law firms, accounting practices, and consultancies automate intake, engagement workflows, and status reporting so partners spend time on billable work.",
    icon: "Briefcase",
    stat: { label: "More billable hours recovered monthly", value: "25 hrs" },
    problems: [
      "Client intake requires re-entering the same information multiple times",
      "Engagement and matter status updates are manual",
      "Billing and invoicing workflows are disconnected from the CRM",
      "Referral and repeat-client follow-up is inconsistent",
    ],
    solutions: [
      { title: "Automated client intake", description: "Intake forms flow directly into your CRM and matter management system." },
      { title: "Engagement workflow automation", description: "Status updates and task creation happen automatically through each engagement." },
      { title: "Connected billing workflows", description: "Invoicing triggers automatically from milestones or time tracking." },
      { title: "Referral nurture automation", description: "Past clients and referral partners get automated, timely check-ins." },
    ],
    automations: [
      "Client intake and onboarding automation",
      "Engagement/matter status workflows",
      "Automated invoicing triggers",
      "Document generation for contracts and agreements",
      "Referral partner nurture sequences",
    ],
    outcomes: [
      { label: "Billable hours recovered monthly", value: "25 hrs" },
      { label: "Faster client onboarding", value: "45%" },
      { label: "Reduction in billing delays", value: "50%" },
    ],
  },
  {
    slug: "saas",
    name: "SaaS",
    tagline: "Turn product signals into pipeline automatically.",
    description:
      "We connect product usage data, billing, and support into your CRM so SaaS revenue teams can automate onboarding, expansion, and churn prevention.",
    icon: "Cpu",
    stat: { label: "Improvement in trial-to-paid conversion", value: "27%" },
    problems: [
      "Product usage data isn't connected to the CRM",
      "Onboarding relies on manual check-ins that don't scale",
      "Expansion and upsell opportunities are missed",
      "Churn risk is identified too late to intervene",
    ],
    solutions: [
      { title: "Product-CRM integration", description: "Usage events sync into the CRM to trigger sales and success workflows." },
      { title: "Automated onboarding", description: "Onboarding sequences trigger based on account activity, not calendar dates." },
      { title: "Expansion signal automation", description: "Usage thresholds automatically flag expansion-ready accounts to sales." },
      { title: "Churn risk automation", description: "Health scoring flags at-risk accounts for proactive intervention." },
    ],
    automations: [
      "Product usage event sync to CRM",
      "Automated onboarding and activation sequences",
      "Expansion and upsell alerts",
      "Customer health scoring",
      "Renewal and churn-risk workflows",
    ],
    outcomes: [
      { label: "Trial-to-paid conversion lift", value: "27%" },
      { label: "Faster time-to-value", value: "35%" },
      { label: "Reduction in preventable churn", value: "20%" },
    ],
  },
  {
    slug: "agencies",
    name: "Agencies",
    tagline: "Run client acquisition and delivery on autopilot.",
    description:
      "We help marketing, creative, and consulting agencies automate lead generation, client onboarding, and reporting so account teams focus on delivery, not admin.",
    icon: "Megaphone",
    stat: { label: "More proposals sent per month", value: "3x" },
    problems: [
      "Lead intake and qualification is inconsistent across sales reps",
      "Client onboarding checklists are managed manually",
      "Reporting to clients takes hours to compile each month",
      "Renewals and upsells are reactive instead of proactive",
    ],
    solutions: [
      { title: "Automated lead qualification", description: "Inbound leads are scored and routed automatically before a call is booked." },
      { title: "Client onboarding automation", description: "Kickoff tasks, documents, and access provisioning trigger automatically." },
      { title: "Automated client reporting", description: "Performance dashboards populate automatically from connected ad and analytics accounts." },
      { title: "Proactive renewal workflows", description: "Renewal and upsell reminders trigger ahead of contract dates." },
    ],
    automations: [
      "Lead qualification and proposal generation",
      "Client onboarding and kickoff workflows",
      "Automated performance reporting",
      "Renewal and contract reminder flows",
      "Internal capacity and utilization tracking",
    ],
    outcomes: [
      { label: "More proposals sent monthly", value: "3x" },
      { label: "Reporting hours saved monthly", value: "30 hrs" },
      { label: "Improvement in renewal rate", value: "18%" },
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}
