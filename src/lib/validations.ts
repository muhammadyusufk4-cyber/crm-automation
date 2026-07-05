import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name").max(100),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Please enter your company name").max(100),
  role: z.string().max(100).optional(),
  companySize: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more about what you need (min 10 characters)").max(2000),
  website: z.string().max(0).optional(), // honeypot field
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
