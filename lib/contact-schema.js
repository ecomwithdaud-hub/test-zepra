import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  company: z.string().min(2, "Please enter your company name."),
  email: z.string().email("Please enter a valid work email."),
  phone: z.string().min(7, "Please enter your phone or WhatsApp number."),
  service: z.string().min(2, "Please choose a service."),
  budget: z.string().min(2, "Please select an estimated budget."),
  timeline: z.string().min(2, "Please choose a preferred timeline."),
  message: z
    .string()
    .min(20, "Please share a little more about your project.")
    .max(2000, "Please keep the message under 2000 characters."),
});

export const budgetOptions = [
  "$3,000 - $5,000 (Local Market Dominator)",
  "$5,000 - $12,000 (Enterprise Growth & AI Platform)",
  "$12,000 - $25,000 (Custom Flagship Platform)",
  "$25,000+ (Multi-Market Enterprise)",
  "Under $3,000 (Subject to Review)",
];

export const timelineOptions = [
  "As soon as possible",
  "Within 2 weeks",
  "Within 1 month",
  "Within 2-3 months",
  "Flexible / exploring",
];
