import { Integration } from "@/types";

export const crmPlatforms: Integration[] = [
  { name: "Salesforce", category: "crm" },
  { name: "HubSpot", category: "crm" },
  { name: "GoHighLevel", category: "crm" },
  { name: "Pipedrive", category: "crm" },
  { name: "Zoho", category: "crm" },
  { name: "Microsoft Dynamics", category: "crm" },
  { name: "Monday.com", category: "crm" },
  { name: "ClickUp", category: "crm" },
  { name: "Notion", category: "crm" },
  { name: "Airtable", category: "crm" },
  { name: "Google Workspace", category: "crm" },
  { name: "Microsoft 365", category: "crm" },
];

export const aiPlatforms: Integration[] = [
  { name: "OpenAI", category: "ai" },
  { name: "Claude", category: "ai" },
  { name: "Gemini", category: "ai" },
  { name: "Perplexity", category: "ai" },
  { name: "Mistral", category: "ai" },
  { name: "Grok", category: "ai" },
];

export const automationTools: Integration[] = [
  { name: "n8n", category: "automation" },
  { name: "Zapier", category: "automation" },
  { name: "Make", category: "automation" },
  { name: "Clay", category: "automation" },
  { name: "Apify", category: "automation" },
  { name: "Instantly", category: "automation" },
  { name: "Apollo", category: "automation" },
  { name: "Smartlead", category: "automation" },
  { name: "Lemlist", category: "automation" },
  { name: "PhantomBuster", category: "automation" },
];

export const allIntegrations: Integration[] = [
  ...crmPlatforms,
  ...aiPlatforms,
  ...automationTools,
];

export const techStack = {
  frontend: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
  backend: ["Node.js", "Supabase", "PostgreSQL"],
  auth: ["Clerk", "Auth.js"],
  deployment: ["Vercel"],
  analytics: ["Google Analytics", "Microsoft Clarity", "Plausible"],
};
