import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "sterling-heating-air",
    client: "Sterling Heating & Air",
    industry: "HVAC",
    logo: "Sterling",
    summary:
      "A 3-truck HVAC company stopped losing after-hours emergency calls and booked 42% more estimates within 60 days. (Illustrative results.)",
    challenge:
      "Sterling's office closed at 5pm, but most emergency calls — no heat, no AC, a leaking unit — came in at night or on weekends. Those calls went to voicemail, and by morning most customers had already called a competitor. Estimates for non-emergency jobs also took 2-3 days to go out because the owner built every quote by hand between service calls.",
    solution:
      "We set up instant text-back for every missed call so customers heard from Sterling within seconds, even at 11pm. We built an estimate template that pulls from their price book so quotes go out the same day a tech scopes the job, and added automatic maintenance-plan renewal reminders so recurring revenue stopped depending on someone remembering to follow up.",
    process: [
      { title: "Call audit", description: "Reviewed a month of call logs to see exactly when and why calls were being missed." },
      { title: "Instant response setup", description: "Built automatic text-back for missed calls, routed to the on-call tech after hours." },
      { title: "Estimate automation", description: "Connected their price book so quotes generate and send within the hour, not days later." },
      { title: "Renewal automation", description: "Set up maintenance-plan renewal reminders tied to each customer's contract date." },
    ],
    results: [
      { label: "More estimates booked (illustrative)", value: "+42%" },
      { label: "Admin hours saved weekly (illustrative)", value: "12 hrs" },
      { label: "Faster first response (illustrative)", value: "9x" },
    ],
    metrics: [
      { label: "After-hours calls answered", before: "~15%", after: "100%" },
      { label: "Average estimate turnaround", before: "2-3 days", after: "Same day" },
      { label: "Maintenance plan renewal rate", before: "61%", after: "84%" },
    ],
    quote: {
      text: "We used to lose emergency calls every single night. Now the customer gets a text back before I even see the missed call notification.",
      author: "Dana Ferraro",
      role: "Owner",
    },
    tools: ["GoHighLevel", "Make", "QuickBooks"],
    featured: true,
  },
  {
    slug: "ironclad-auto-repair",
    client: "Ironclad Auto Repair",
    industry: "Auto Repair",
    logo: "Ironclad",
    summary:
      "A 2-bay independent repair shop cut status-check phone calls by more than half and got more repair estimates approved the same day. (Illustrative results.)",
    challenge:
      "Ironclad's one service writer spent a huge part of the day just telling customers what their car's status was — because the only way to find out was to call. Estimates were approved verbally over the phone, then re-typed into the shop management system later, and declined repairs were never followed up on, so that work simply disappeared.",
    solution:
      "We set up automatic text updates at each stage of a repair — diagnosis, estimate, approval, ready for pickup — so customers stopped calling in for status. Estimates now get approved with one tap from a text link, syncing straight into the shop system. Declined work gets an automatic follow-up reminder a few weeks later instead of vanishing from the pipeline.",
    process: [
      { title: "Workflow mapping", description: "Walked the full repair order lifecycle from drop-off to pickup to find every manual touchpoint." },
      { title: "Status automation", description: "Built automatic text updates tied to each repair-order stage change." },
      { title: "Digital approvals", description: "Set up one-tap estimate approval from text, synced directly to the shop management system." },
      { title: "Deferred-work follow-up", description: "Added automatic reminders for declined or deferred repairs on a set schedule." },
    ],
    results: [
      { label: "Fewer status-check calls (illustrative)", value: "-55%" },
      { label: "More estimates approved (illustrative)", value: "+24%" },
      { label: "Admin hours saved weekly (illustrative)", value: "8 hrs" },
    ],
    metrics: [
      { label: "Daily status-check calls", before: "~30", after: "~13" },
      { label: "Same-day estimate approval rate", before: "44%", after: "68%" },
      { label: "Deferred work later recovered", before: "~5%", after: "22%" },
    ],
    quote: {
      text: "Our service writer used to spend half her day just telling people where their car was. Now customers already know before they think to call.",
      author: "Mike Torres",
      role: "Shop Owner",
    },
    tools: ["Tekmetric", "n8n", "Twilio"],
    featured: true,
  },
  {
    slug: "lumiere-med-spa",
    client: "Lumière Med Spa",
    industry: "Med Spas",
    logo: "Lumière",
    summary:
      "A single-location med spa cut no-shows by a third and grew membership renewals, without adding front-desk staff. (Illustrative results.)",
    challenge:
      "Lumière's front desk handled check-in, checkout, retail, and Instagram DMs at the same time — so new inquiries on social media often sat for hours before anyone replied, and by then some clients had already booked elsewhere. No-shows and late cancellations were common, and membership renewals were tracked on a spreadsheet nobody had time to check.",
    solution:
      "We connected Instagram, their website form, and phone calls into one inbox with automatic instant replies, so new inquiries get a response in under a minute. Appointment reminders now go out automatically by text and email, and membership renewals trigger a reminder two weeks before expiration instead of relying on a spreadsheet.",
    process: [
      { title: "Inquiry audit", description: "Tracked how long it actually took to respond to DMs, forms, and calls over a two-week period." },
      { title: "Unified inbox setup", description: "Connected every inquiry channel into one system with automatic instant replies." },
      { title: "Reminder automation", description: "Built appointment confirmation and reminder sequences by text and email." },
      { title: "Membership automation", description: "Set up renewal reminders tied to each client's membership or package expiration date." },
    ],
    results: [
      { label: "Reduction in no-shows (illustrative)", value: "-34%" },
      { label: "More membership renewals (illustrative)", value: "+29%" },
      { label: "Front-desk hours saved weekly (illustrative)", value: "10 hrs" },
    ],
    metrics: [
      { label: "Average inquiry response time", before: "3+ hrs", after: "<1 min" },
      { label: "No-show rate", before: "18%", after: "12%" },
      { label: "On-time membership renewal rate", before: "58%", after: "81%" },
    ],
    quote: {
      text: "We were losing bookings to DMs we just didn't get to fast enough. Now every inquiry gets an instant reply, even at 9pm on a Saturday.",
      author: "Camille Reyes",
      role: "Founder & Medical Director",
    },
    tools: ["GoHighLevel", "Instagram", "Stripe"],
  },
  {
    slug: "brightside-family-dental",
    client: "Brightside Family Dental",
    industry: "Dental Clinics",
    logo: "Brightside",
    summary:
      "A 2-doctor family dental practice cut its no-show rate by a third and filled more recall appointments without adding front-office staff. (Illustrative results.)",
    challenge:
      "Brightside's front office called patients by hand to confirm appointments and remind overdue patients to book a cleaning — a task that ate hours every week and still left plenty of empty chairs from no-shows. New-patient intake was done on a clipboard and re-typed into the practice management system, and insurance verification happened the morning of the appointment, sometimes causing delays.",
    solution:
      "We automated appointment confirmations and reminders by text, with a one-tap reschedule link that cut down on no-call no-shows. Patients overdue for a cleaning now get an automatic recall reminder instead of a staff member working down a list. New patients fill out intake forms online before their visit, and insurance eligibility gets checked automatically the day before instead of during check-in.",
    process: [
      { title: "Front-office workflow audit", description: "Mapped every manual call, form, and verification step across a typical week." },
      { title: "Reminder automation", description: "Built text-based appointment confirmations, reminders, and reschedule links." },
      { title: "Recall automation", description: "Set up automatic recall reminders for patients overdue for a cleaning or check-up." },
      { title: "Digital intake & verification", description: "Moved new-patient intake online and automated insurance eligibility checks ahead of each visit." },
    ],
    results: [
      { label: "Reduction in no-show rate (illustrative)", value: "-33%" },
      { label: "More recall visits booked (illustrative)", value: "+26%" },
      { label: "Front-desk hours saved weekly (illustrative)", value: "9 hrs" },
    ],
    metrics: [
      { label: "No-show rate", before: "16%", after: "11%" },
      { label: "Overdue recall patients rebooked monthly", before: "~20", after: "~48" },
      { label: "Front-desk hours on manual reminders / week", before: "9 hrs", after: "<1 hr" },
    ],
    quote: {
      text: "Our team used to spend Friday afternoons calling down a list of overdue patients. Now that list works itself, and we actually see those patients again.",
      author: "Dr. Priya Nair",
      role: "Practice Owner",
    },
    tools: ["Dentrix", "Make", "Twilio"],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
