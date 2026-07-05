"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { Button } from "@/components/legacy/Button";
import { CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const inputClasses =
  "w-full rounded-xl border border-border-subtle bg-surface px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 outline-none transition-colors focus:border-electric";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border-subtle bg-surface p-10 text-center">
        <CheckCircle2 className="size-10 text-electric" />
        <h3 className="mt-4 text-lg font-medium">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm text-foreground/60">
          Thanks for reaching out — we&apos;ll reply within one business day to schedule your
          strategy call.
        </p>
        <Button className="mt-6" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <input
        type="text"
        {...register("website")}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Full name
          </label>
          <input id="name" className={inputClasses} placeholder="Jane Doe" {...register("name")} />
          {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Work email
          </label>
          <input
            id="email"
            type="email"
            className={inputClasses}
            placeholder="jane@company.com"
            {...register("email")}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium">
            Company
          </label>
          <input id="company" className={inputClasses} placeholder="Acme Inc." {...register("company")} />
          {errors.company && <p className="mt-1.5 text-xs text-red-500">{errors.company.message}</p>}
        </div>
        <div>
          <label htmlFor="role" className="mb-1.5 block text-sm font-medium">
            Role
          </label>
          <input id="role" className={inputClasses} placeholder="Head of Sales" {...register("role")} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="companySize" className="mb-1.5 block text-sm font-medium">
            Team size
          </label>
          <select id="companySize" className={cn(inputClasses, "appearance-none")} {...register("companySize")}>
            <option value="">Select...</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="201-500">201-500</option>
            <option value="500+">500+</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-1.5 block text-sm font-medium">
            Project budget
          </label>
          <select id="budget" className={cn(inputClasses, "appearance-none")} {...register("budget")}>
            <option value="">Select...</option>
            <option value="<5k">Under $5k</option>
            <option value="5k-15k">$5k - $15k</option>
            <option value="15k-50k">$15k - $50k</option>
            <option value="50k+">$50k+</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          What would you like to automate?
        </label>
        <textarea
          id="message"
          rows={5}
          className={inputClasses}
          placeholder="Tell us about your current CRM setup and where things are breaking down..."
          {...register("message")}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong sending your message. Please try again or email us directly.
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"} className="mt-2">
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending...
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
