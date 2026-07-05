import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  // Honeypot: silently accept but drop obvious bot submissions.
  if (parsed.data.website) {
    return NextResponse.json({ success: true });
  }

  const { name, email, company, role, companySize, budget, message } = parsed.data;
  const payload = {
    name,
    email,
    company,
    role,
    companySize,
    budget,
    message,
    submittedAt: new Date().toISOString(),
    source: "website-contact-form",
  };

  const webhookUrl = process.env.CRM_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.error("CRM webhook responded with a non-OK status", response.status);
        return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 502 });
      }
    } catch (error) {
      console.error("Failed to forward lead to CRM webhook", error);
      return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 502 });
    }
  } else {
    // No CRM_WEBHOOK_URL configured yet — log so local/dev submissions are still visible.
    console.log("New contact form submission (CRM_WEBHOOK_URL not configured):", payload);
  }

  return NextResponse.json({ success: true });
}
