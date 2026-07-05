import { BlogPost } from "@/types";

export const blogCategories = [
  "CRM",
  "Automation",
  "AI",
  "Sales",
  "RevOps",
  "Integrations",
  "HubSpot",
  "Salesforce",
  "GoHighLevel",
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "signs-your-crm-needs-automation",
    title: "7 Signs Your CRM Needs an Automation Overhaul",
    excerpt:
      "If your team dreads opening the CRM, the problem usually isn't the platform — it's everything you're still doing manually inside it.",
    category: "CRM",
    date: "2026-06-02",
    readTime: "6 min read",
    author: "Converge Team",
    content: [
      "Most CRMs don't fail because the software is bad. They fail because the processes built on top of them were never automated, so the system slowly fills up with duplicate records, stale deals, and fields nobody trusts.",
      "Here are seven signals we look for during a CRM audit that reliably indicate an automation gap rather than a tooling problem.",
      "1. Reps keep a shadow spreadsheet. If your team tracks 'real' pipeline outside the CRM, the system has failed to earn their trust — usually because it requires too much manual upkeep.",
      "2. Leads sit unassigned for hours. Manual routing means speed-to-lead depends on whoever happens to check their inbox first, not a rule.",
      "3. Reports take a day to compile. If someone exports data to Excel to build the weekly pipeline report, your reporting is not real — it's a snapshot with a lag.",
      "4. Fields are inconsistently filled in. Optional fields with no automation enforcing them behind the scenes end up empty on 40-60% of records within a year.",
      "5. Follow-up depends on memory. Task reminders that rely on a rep remembering to set them are a coin flip, not a system.",
      "6. Deals go stale silently. Without automated stale-deal alerts, deals can sit untouched for weeks before anyone notices.",
      "7. Onboarding a new rep takes weeks. If ramping a new hire requires shadowing a tenured rep to learn 'how we actually do it,' the process lives in people's heads, not the system.",
      "If three or more of these sound familiar, the fix usually isn't a new CRM — it's automating the workflows the current one was never configured to run.",
    ],
  },
  {
    slug: "ai-agents-vs-chatbots",
    title: "AI Agents vs. Chatbots: What's Actually Different",
    excerpt:
      "Not every 'AI' on your website is doing the same job. Here's how modern AI agents differ from the rule-based chatbots of the last decade.",
    category: "AI",
    date: "2026-05-20",
    readTime: "7 min read",
    author: "Converge Team",
    content: [
      "The term 'chatbot' and 'AI agent' get used interchangeably, but the underlying architecture — and what you can trust them to do — is fundamentally different.",
      "Traditional chatbots follow decision trees. They match keywords or button clicks to a pre-written script. They're reliable for narrow FAQ-style tasks but break the moment a conversation goes off-script.",
      "AI agents built on large language models reason over context. They can read a lead's message, pull relevant account data, apply your qualification logic, and draft a response — all without a human writing every possible branch in advance.",
      "The trade-off is control. A chatbot can never say something off-script because it has no script for that path. An AI agent needs guardrails: defined escalation triggers, confidence thresholds, and retrieval sources it's allowed to pull from.",
      "In practice, the right architecture is often a hybrid — an AI agent handling qualification and drafting, with deterministic automation (the 'chatbot' logic) handling anything transactional like scheduling or status lookups.",
      "When we scope an AI agent project, the first question isn't which model to use — it's which decisions the business is comfortable letting the agent make autonomously, and which ones always need a human in the loop.",
    ],
  },
  {
    slug: "lead-routing-rules-that-actually-work",
    title: "Lead Routing Rules That Actually Hold Up at Scale",
    excerpt:
      "Round-robin routing looks fair on a whiteboard and falls apart in production. Here's what we use instead.",
    category: "Sales",
    date: "2026-05-08",
    readTime: "5 min read",
    author: "Converge Team",
    content: [
      "Simple round-robin routing is the most common lead routing setup we inherit — and one of the first things we replace.",
      "The problem: round-robin treats every rep as equally available and every lead as equally valuable. Neither is true. A rep on PTO still gets leads. A high-intent enterprise lead gets routed the same way as a low-fit trial signup.",
      "A routing system that holds up at scale layers three things: territory or product-line rules first, capacity and availability second, and lead score as a tiebreaker — not the primary sort.",
      "Capacity-aware routing checks a rep's current open pipeline before assigning a new lead, rather than blindly cycling through a list.",
      "Fit-based pre-filtering routes obviously poor-fit leads to a nurture sequence instead of a rep's queue at all, so reps only see leads worth a call.",
      "Fallback rules matter more than the primary rule. What happens when the assigned rep doesn't respond within your SLA? Automated escalation to a second rep or manager should be built in from day one, not added after the first missed lead.",
    ],
  },
  {
    slug: "hubspot-vs-salesforce-2026",
    title: "HubSpot vs. Salesforce in 2026: How We Actually Decide",
    excerpt:
      "The honest answer to 'which CRM should we use' depends on five factors we walk through with every client before recommending a platform.",
    category: "HubSpot",
    date: "2026-04-22",
    readTime: "8 min read",
    author: "Converge Team",
    content: [
      "We get asked to settle the HubSpot vs. Salesforce debate constantly, and the honest answer is that the 'better' platform depends entirely on five factors.",
      "Team size and complexity: HubSpot's out-of-the-box structure fits fast-moving teams under ~150 people well. Salesforce's flexibility pays off once you have complex approval chains, multiple business units, or heavy customization needs.",
      "Internal technical resourcing: Salesforce's power comes with more admin overhead. If you don't have a dedicated admin or partner, HubSpot is typically faster to keep clean without a full-time resource.",
      "Marketing and sales alignment: HubSpot was built marketing-out, so its marketing automation and CRM live in one data model. Salesforce marketing tools are usually a separate product bolted on via integration.",
      "Budget trajectory: HubSpot pricing scales with contacts and tiers; Salesforce scales with seats and add-on modules. Model your 3-year cost, not just year one.",
      "Ecosystem requirements: If you need deep, unusual integrations with legacy enterprise systems, Salesforce's mature partner ecosystem and API depth typically wins.",
      "Neither platform is 'better' in the abstract — the wrong fit for your team's maturity is what causes CRM projects to stall.",
    ],
  },
  {
    slug: "revops-roadmap-first-90-days",
    title: "Building a RevOps Roadmap for the First 90 Days",
    excerpt:
      "A practical framework for sequencing revenue operations work so you fix the highest-leverage leaks first.",
    category: "RevOps",
    date: "2026-04-05",
    readTime: "6 min read",
    author: "Converge Team",
    content: [
      "Most RevOps roadmaps fail because they try to fix everything at once. The teams that see fast results sequence their first 90 days around leverage, not completeness.",
      "Days 1-15: Audit and baseline. Before building anything, get a clear picture of current conversion rates by stage, data quality issues, and where reps spend time that isn't selling.",
      "Days 16-30: Fix the leaks that lose revenue directly. This usually means lead routing speed, follow-up consistency, and deduplication — the issues that actively cost you deals today.",
      "Days 31-60: Automate the operational drag. This is where workflow automation, reporting dashboards, and CRM hygiene enforcement come in — work that saves time but isn't actively losing revenue.",
      "Days 61-90: Layer in intelligence. Lead scoring refinement, AI-assisted qualification, and predictive reporting belong here, once the foundational data and processes are trustworthy.",
      "The mistake we see most often is starting at day 90 — companies want the AI agent or the predictive dashboard before the underlying data is clean enough to make either useful.",
    ],
  },
  {
    slug: "gohighlevel-snapshot-guide",
    title: "How to Build a Reusable GoHighLevel Snapshot",
    excerpt:
      "A well-built snapshot turns weeks of client onboarding into a same-day deployment. Here's our approach.",
    category: "GoHighLevel",
    date: "2026-03-18",
    readTime: "7 min read",
    author: "Converge Team",
    content: [
      "For agencies and SaaS resellers running multiple GoHighLevel sub-accounts, a reusable snapshot is the difference between a one-week onboarding and a same-day deployment.",
      "Start with the account structure. Decide what's global (shared pipelines, tags, custom fields) versus what's client-specific (branding, calendars, phone numbers) before you build a single funnel.",
      "Build automations with placeholders, not hardcoded values. Every business name, phone number, and calendar link inside a workflow should reference a custom field your onboarding checklist fills in, not a hardcoded string.",
      "Test the snapshot on a throwaway sub-account before deploying it to a real client. Snapshot exports frequently miss dependencies like custom values or integrations that don't travel automatically.",
      "Version your snapshots. As you improve the template, keep dated versions so you can trace which clients are on which version when you need to push an update.",
      "Document the manual steps that can't be automated — usually domain connection, phone number provisioning, and calendar OAuth — so onboarding still moves fast even where full automation isn't possible.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
