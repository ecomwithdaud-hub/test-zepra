"use client";

import { useState } from "react";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/components/providers/language-provider";
import {
  contactSchema,
} from "@/lib/contact-schema";
import { services, siteMeta } from "@/lib/site";

const initialState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
};

export function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    const parsed = contactSchema.safeParse(formData);

    if (!parsed.success) {
      const nextErrors = {};
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0];
        const messageKey =
          field === "message"
            ? issue.code === "too_big"
              ? "messageMax"
              : "messageMin"
            : field;
        nextErrors[field] = t(`contact.validation.${messageKey}`);
      });
      setErrors(nextErrors);
      setStatus({
        type: "error",
        message: t("contact.validationSummary"),
      });
      return;
    }

    const { name, company, email, phone, service, budget, timeline, message } = parsed.data;
    const subject = `New inquiry from ${name} | ${service}`;
    const body = [
      `Full Name: ${name}`,
      `Company: ${company}`,
      `Work Email: ${email}`,
      `Phone / WhatsApp: ${phone}`,
      `Service Needed: ${service}`,
      `Estimated Budget: ${budget}`,
      `Preferred Timeline: ${timeline}`,
      "",
      "Project Goals:",
      message,
    ].join("\n");

    const mailtoUrl = `mailto:${siteMeta.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setFormData(initialState);
    setErrors({});
    setStatus({
      type: "success",
      message:
        t("contact.emailOpening"),
    });

    if (typeof window !== "undefined") {
      window.location.href = mailtoUrl;
    }
  }

  const translatedServices = t("services.items");
  const budgetOptions = t("contact.budgetOptions");
  const timelineOptions = t("contact.timelineOptions");

  return (
    <form className="flex flex-1 flex-col" onSubmit={handleSubmit}>
      <div className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
        <Field label={t("contact.fullName")} error={errors.name}>
          <Input
            name="name"
            className="rounded-xl border-slate-200 bg-slate-50/50 p-3.5 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500 focus-visible:border-cyan-500 focus-visible:ring-cyan-500"
            placeholder={t("contact.namePlaceholder")}
            value={formData.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
          />
        </Field>
        <Field label={t("contact.companyName")} error={errors.company}>
          <Input
            name="company"
            className="rounded-xl border-slate-200 bg-slate-50/50 p-3.5 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500 focus-visible:border-cyan-500 focus-visible:ring-cyan-500"
            placeholder={t("contact.companyPlaceholder")}
            value={formData.company}
            onChange={handleChange}
            aria-invalid={Boolean(errors.company)}
          />
        </Field>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
        <Field label={t("contact.workEmail")} error={errors.email}>
          <Input
            type="email"
            name="email"
            className="rounded-xl border-slate-200 bg-slate-50/50 p-3.5 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500 focus-visible:border-cyan-500 focus-visible:ring-cyan-500"
            placeholder={t("contact.emailPlaceholder")}
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
          />
        </Field>
        <Field label={t("contact.phoneWhatsapp")} error={errors.phone}>
          <Input
            name="phone"
            className="rounded-xl border-slate-200 bg-slate-50/50 p-3.5 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500 focus-visible:border-cyan-500 focus-visible:ring-cyan-500"
            placeholder={t("contact.phonePlaceholder")}
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone)}
          />
        </Field>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
        <Field label={t("contact.serviceNeeded")} error={errors.service}>
          <SelectField
            name="service"
            value={formData.service}
            onChange={handleChange}
            aria-invalid={Boolean(errors.service)}
          >
            <option value="">{t("contact.selectService")}</option>
            {services.map((service, index) => (
              <option key={service.title} value={service.title}>
                {translatedServices?.[index]?.title ?? service.title}
              </option>
            ))}
          </SelectField>
        </Field>
        <Field label={t("contact.estimatedBudget")} error={errors.budget}>
          <SelectField
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            aria-invalid={Boolean(errors.budget)}
          >
            <option value="">{t("contact.selectBudget")}</option>
            {budgetOptions.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </SelectField>
        </Field>
        <Field label={t("contact.preferredTimeline")} error={errors.timeline}>
          <SelectField
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            aria-invalid={Boolean(errors.timeline)}
          >
            <option value="">{t("contact.selectTimeline")}</option>
            {timelineOptions.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </SelectField>
        </Field>
        </div>

        <Field label={t("contact.projectGoals")} error={errors.message}>
        <Textarea
          name="message"
          rows={3}
          className="min-h-0 rounded-xl border-slate-200 bg-slate-50/50 p-3.5 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500 focus-visible:border-cyan-500 focus-visible:ring-cyan-500"
          placeholder={t("contact.messagePlaceholder")}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
        />
        </Field>

        {status.message ? (
          <div
            className={`rounded-2xl border px-4 py-3 text-sm ${
              status.type === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-rose-200 bg-rose-50 text-rose-700"
            }`}
          >
            {status.message}
          </div>
        ) : null}
      </div>

      <Button
        type="submit"
        size="xl"
        className="mt-auto w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-900/10 hover:from-cyan-500 hover:to-blue-500"
      >
        <>
          <ArrowRight className="h-4 w-4" />
          {t("contact.submit")}
        </>
      </Button>
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-semibold text-slate-900">{label}</span>
      {children}
      {error ? <span className="text-sm text-rose-600">{error}</span> : null}
    </label>
  );
}

function SelectField({ className = "", children, ...props }) {
  return (
    <select
      className={`flex h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 text-sm text-slate-950 shadow-sm transition-colors focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus-visible:ring-cyan-500 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}
