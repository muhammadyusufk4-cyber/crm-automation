import { Industry } from "@/types";

export const industries: Industry[] = [
  {
    slug: "hvac",
    name: "HVAC",
    tagline: "Answer every service call, day or night.",
    description:
      "We build systems for HVAC companies that capture every inbound call and web form, get quotes out same-day, and text customers automatically so no maintenance renewal or emergency call gets missed.",
    icon: "Thermometer",
    stat: { label: "More estimates booked per month (illustrative)", value: "+42%" },
    problems: [
      "After-hours and weekend calls go to voicemail and never get called back",
      "Estimates take days to go out because someone has to build them by hand",
      "Maintenance plan renewals get forgotten until a customer calls a competitor instead",
      "Techs and dispatch are stuck texting back and forth to figure out who's free",
    ],
    solutions: [
      { title: "24/7 call and text response", description: "Every missed call gets an instant text back so customers hear from you before they call the next company." },
      { title: "Same-day estimates", description: "Quotes generate automatically from your pricing and go out the same day the job is scoped." },
      { title: "Automatic renewal reminders", description: "Maintenance plan customers get reminded before their contract lapses, without anyone tracking a spreadsheet." },
      { title: "Smart dispatching", description: "Jobs route to the nearest available tech automatically based on schedule and location." },
    ],
    automations: [
      "Instant text-back for missed calls and after-hours inquiries",
      "Automated estimate and quote generation",
      "Maintenance plan renewal reminders",
      "Appointment confirmations and day-before reminders",
      "Review requests sent after every completed job",
    ],
    outcomes: [
      { label: "More estimates booked (illustrative)", value: "+42%" },
      { label: "Admin hours saved weekly (illustrative)", value: "12 hrs" },
      { label: "Faster first response (illustrative)", value: "9x" },
    ],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    tagline: "Never lose an emergency call to voicemail again.",
    description:
      "We help plumbing companies capture every call — especially the emergency ones — get quotes out fast, and keep customers in the loop automatically from first call to paid invoice.",
    icon: "Droplet",
    stat: { label: "Faster response to new calls (illustrative)", value: "<2 min" },
    problems: [
      "Emergency calls come in after hours and nobody's available to answer",
      "Techs write quotes on paper or in a group chat, and half never make it into the system",
      "Customers don't hear back after a quote and quietly go with someone else",
      "Invoicing happens days after the job because paperwork sits in a truck",
    ],
    solutions: [
      { title: "Instant emergency response", description: "After-hours calls trigger an immediate text with next steps, so customers know help is coming." },
      { title: "Mobile-friendly quoting", description: "Techs send quotes from the job site in minutes, and every quote lands in your system automatically." },
      { title: "Automatic follow-up", description: "Unanswered quotes get a friendly follow-up text so fewer jobs go cold." },
      { title: "Same-day invoicing", description: "Invoices generate and send the moment a job is marked complete." },
    ],
    automations: [
      "Instant response to missed and after-hours calls",
      "Mobile quote creation synced straight to your CRM",
      "Automated quote follow-up sequences",
      "Same-day invoice generation and payment reminders",
      "Review requests after every paid invoice",
    ],
    outcomes: [
      { label: "Faster response to new calls (illustrative)", value: "<2 min" },
      { label: "More quotes converted to jobs (illustrative)", value: "+27%" },
      { label: "Admin hours saved weekly (illustrative)", value: "10 hrs" },
    ],
  },
  {
    slug: "electrical",
    name: "Electrical",
    tagline: "Turn more estimates into signed jobs.",
    description:
      "We build systems for electrical contractors that respond to leads instantly, keep multi-step jobs and permits on track, and follow up automatically so estimates don't die in an inbox.",
    icon: "Zap",
    stat: { label: "More estimates turned into booked jobs (illustrative)", value: "+31%" },
    problems: [
      "Leads from your website or Google ads sit for hours before anyone responds",
      "Bigger jobs have multiple steps — estimate, permit, rough-in, final — with nothing tracking where each one stands",
      "Customers forget to approve a quote and the job quietly stalls",
      "Techs' schedules live in someone's head instead of a shared system",
    ],
    solutions: [
      { title: "Instant lead response", description: "New leads get a text or call within minutes, before they contact a competitor." },
      { title: "Job stage tracking", description: "Multi-step jobs move through clear stages so nothing sits waiting on someone to remember it." },
      { title: "Automated quote follow-up", description: "Unapproved estimates get reminders on a schedule instead of falling off your radar." },
      { title: "Centralized scheduling", description: "Every tech's schedule lives in one system your whole team can see." },
    ],
    automations: [
      "Instant response to new website and phone leads",
      "Job stage tracking from estimate to final inspection",
      "Automated estimate follow-up sequences",
      "Appointment and permit-inspection reminders",
      "Review requests after job completion",
    ],
    outcomes: [
      { label: "More estimates → booked jobs (illustrative)", value: "+31%" },
      { label: "Faster lead response (illustrative)", value: "8x" },
      { label: "Admin hours saved weekly (illustrative)", value: "9 hrs" },
    ],
  },
  {
    slug: "roofing",
    name: "Roofing",
    tagline: "Keep every inspection and insurance claim moving.",
    description:
      "We help roofing companies respond to storm leads fast, keep insurance-claim jobs from stalling in paperwork, and automatically update customers who are used to waiting weeks for someone to call them back.",
    icon: "Home",
    stat: { label: "Faster response to storm leads (illustrative)", value: "6x" },
    problems: [
      "Storm season floods your phone with leads faster than anyone can call them back",
      "Insurance-claim jobs stall for weeks waiting on adjusters, and customers assume you forgot about them",
      "Inspection photos and notes get scattered across texts and personal phones",
      "Customers have to call in just to ask what's happening with their claim",
    ],
    solutions: [
      { title: "Instant storm-lead response", description: "Every new lead gets an immediate text, even when your phone is ringing off the hook." },
      { title: "Claim status automation", description: "Customers get automatic status updates so they stop calling to ask what's happening." },
      { title: "Centralized inspection records", description: "Photos, notes, and measurements sync to one job record instead of living on someone's phone." },
      { title: "Proactive scheduling", description: "Crews and inspections get scheduled and confirmed automatically as claims move forward." },
    ],
    automations: [
      "Instant response to storm and web leads",
      "Automated insurance-claim status updates",
      "Inspection photo and note syncing to the CRM",
      "Crew scheduling and confirmation texts",
      "Review requests once a roof is completed",
    ],
    outcomes: [
      { label: "Faster response to storm leads (illustrative)", value: "6x" },
      { label: "Fewer status-check calls (illustrative)", value: "-60%" },
      { label: "Admin hours saved weekly (illustrative)", value: "11 hrs" },
    ],
  },
  {
    slug: "auto-repair",
    name: "Auto Repair",
    tagline: "Get more approved repair orders, faster.",
    description:
      "We build systems for auto repair shops that text customers their diagnosis and estimate instantly, follow up automatically on unapproved work, and keep the bay schedule full without a service writer chasing every call.",
    icon: "Wrench",
    stat: { label: "More repair estimates approved (illustrative)", value: "+24%" },
    problems: [
      "Customers wait on hold or call back three times to get a status update",
      "Estimates get approved by phone but never make it into the system correctly",
      "Declined or deferred repairs are never followed up on, so that revenue just disappears",
      "The bay schedule fills up unevenly, with slow days and overbooked days back to back",
    ],
    solutions: [
      { title: "Text-based status updates", description: "Customers get diagnosis, estimate, and status updates by text without calling in." },
      { title: "One-tap approvals", description: "Customers approve estimates from their phone, and the job moves to the bay automatically." },
      { title: "Deferred-work follow-up", description: "Declined repairs get a reminder at the right time instead of disappearing forever." },
      { title: "Smarter scheduling", description: "Appointments get balanced across the week automatically to keep every bay productive." },
    ],
    automations: [
      "Text-based diagnosis, estimate, and status updates",
      "One-tap digital repair approvals",
      "Automated deferred-work follow-up reminders",
      "Appointment scheduling and reminder texts",
      "Review requests after vehicle pickup",
    ],
    outcomes: [
      { label: "More repair estimates approved (illustrative)", value: "+24%" },
      { label: "Fewer status-check calls (illustrative)", value: "-55%" },
      { label: "Admin hours saved weekly (illustrative)", value: "8 hrs" },
    ],
  },
  {
    slug: "auto-detailing",
    name: "Auto Detailing",
    tagline: "Keep your booking calendar full automatically.",
    description:
      "We help auto detailing businesses capture every booking request instantly, cut down no-shows with automatic reminders, and turn one-time customers into repeat bookings without any extra admin work.",
    icon: "Sparkles",
    stat: { label: "Reduction in no-shows (illustrative)", value: "-38%" },
    problems: [
      "Booking requests come in through Instagram, text, and your website with no central place to track them",
      "No-shows and last-minute cancellations leave empty slots that don't get refilled",
      "Mobile detailing jobs need address and access details that get lost in text threads",
      "Happy customers never get asked to book again or leave a review",
    ],
    solutions: [
      { title: "Unified booking capture", description: "Every request — social, text, or web — lands in one calendar automatically." },
      { title: "No-show reduction", description: "Automatic reminders and confirmations cut down on missed appointments." },
      { title: "Job detail automation", description: "Address, vehicle, and access notes attach to every mobile job automatically." },
      { title: "Repeat-booking reminders", description: "Past customers get a friendly nudge to rebook on a schedule that fits their vehicle." },
    ],
    automations: [
      "Unified booking capture from social, text, and web",
      "Automated appointment reminders and confirmations",
      "Mobile job detail and access-note automation",
      "Repeat-customer rebooking sequences",
      "Review requests after every completed detail",
    ],
    outcomes: [
      { label: "Reduction in no-shows (illustrative)", value: "-38%" },
      { label: "More repeat bookings (illustrative)", value: "+45%" },
      { label: "Admin hours saved weekly (illustrative)", value: "6 hrs" },
    ],
  },
  {
    slug: "collision-centers",
    name: "Collision Centers",
    tagline: "Stop fielding 'where's my car' calls all day.",
    description:
      "We build systems for collision and body shops that keep customers and insurance adjusters updated automatically, so your front desk isn't spending half the day on status-check phone calls.",
    icon: "Car",
    stat: { label: "Fewer status-check calls (illustrative)", value: "-65%" },
    problems: [
      "Customers call daily just to ask when their car will be ready",
      "Insurance estimates and supplements get stuck in email back-and-forth",
      "Parts delays never get communicated until a customer calls to ask",
      "Front desk staff spend hours a day repeating the same status updates by phone",
    ],
    solutions: [
      { title: "Automatic repair status updates", description: "Customers get text updates at each stage — teardown, parts, paint, reassembly — without calling in." },
      { title: "Insurance workflow automation", description: "Supplement requests and approvals get tracked and routed automatically." },
      { title: "Proactive delay notifications", description: "Customers hear about parts delays from you first, before they have to ask." },
      { title: "Freed-up front desk", description: "Staff spend their time on customers in the shop, not repeating updates on the phone." },
    ],
    automations: [
      "Automated repair-stage status texts",
      "Insurance supplement and approval tracking",
      "Proactive parts-delay notifications",
      "Pickup scheduling and reminder texts",
      "Review requests after vehicle delivery",
    ],
    outcomes: [
      { label: "Fewer status-check calls (illustrative)", value: "-65%" },
      { label: "Front-desk hours saved weekly (illustrative)", value: "14 hrs" },
      { label: "Faster insurance turnaround (illustrative)", value: "30%" },
    ],
  },
  {
    slug: "med-spas",
    name: "Med Spas",
    tagline: "Fill your appointment book and keep it full.",
    description:
      "We help med spas capture every inquiry, cut down no-shows with automatic reminders, and turn one-time visitors into repeat clients and membership renewals without extra front-desk work.",
    icon: "Flower2",
    stat: { label: "Reduction in no-shows (illustrative)", value: "-34%" },
    problems: [
      "Instagram DMs and web inquiries go unanswered for hours and clients book elsewhere",
      "No-shows and late cancellations leave gaps in a schedule that's expensive to run",
      "Membership and package renewals get missed because nobody's tracking expiration dates",
      "Front desk is too busy checking clients in to also handle marketing follow-up",
    ],
    solutions: [
      { title: "Instant inquiry response", description: "DMs, forms, and calls get an immediate reply so clients book with you, not the next spa in their feed." },
      { title: "No-show reduction", description: "Automatic text and email reminders cut down on missed appointments and late cancellations." },
      { title: "Membership renewal automation", description: "Clients get reminded before a package or membership expires, protecting recurring revenue." },
      { title: "Automatic rebooking prompts", description: "Clients get a gentle nudge to book their next visit right when they're due." },
    ],
    automations: [
      "Instant response to DMs, forms, and calls",
      "Automated appointment reminders and confirmations",
      "Membership and package renewal reminders",
      "Post-treatment check-in and rebooking sequences",
      "Review and referral requests after every visit",
    ],
    outcomes: [
      { label: "Reduction in no-shows (illustrative)", value: "-34%" },
      { label: "More membership renewals (illustrative)", value: "+29%" },
      { label: "Front-desk hours saved weekly (illustrative)", value: "10 hrs" },
    ],
  },
  {
    slug: "dental-clinics",
    name: "Dental Clinics",
    tagline: "Cut no-shows and keep the chair full.",
    description:
      "We build systems for dental practices that confirm appointments automatically, bring back overdue patients without a staff member making calls all day, and keep insurance and intake paperwork from piling up.",
    icon: "Smile",
    stat: { label: "Reduction in no-show rate (illustrative)", value: "-33%" },
    problems: [
      "No-shows and late cancellations leave expensive gaps in the day's schedule",
      "Patients overdue for a cleaning or recall visit fall through the cracks",
      "New-patient intake forms get filled out on a clipboard and re-typed by hand",
      "Front desk spends hours a week on insurance verification calls",
    ],
    solutions: [
      { title: "Automatic appointment confirmations", description: "Patients get reminder texts and easy rescheduling links that cut down on no-shows." },
      { title: "Recall and hygiene reminders", description: "Overdue patients get an automatic nudge to book their next cleaning, without staff making calls." },
      { title: "Digital intake", description: "New patients fill out forms online before they arrive, synced directly into your system." },
      { title: "Insurance verification automation", description: "Coverage gets checked automatically ahead of the appointment instead of during it." },
    ],
    automations: [
      "Automated appointment reminders and confirmations",
      "Recall and hygiene visit reminder sequences",
      "Digital new-patient intake and forms",
      "Insurance eligibility verification",
      "Review requests after every visit",
    ],
    outcomes: [
      { label: "Reduction in no-show rate (illustrative)", value: "-33%" },
      { label: "More recall visits booked (illustrative)", value: "+26%" },
      { label: "Front-desk hours saved weekly (illustrative)", value: "9 hrs" },
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}
