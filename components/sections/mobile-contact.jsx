"use client";

import { Mail } from "lucide-react";

import { ContactForm } from "@/components/shared/contact-form";
import { useLanguage } from "@/components/providers/language-provider";
import { siteMeta } from "@/lib/site";

export function MobileContact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-[#E6F2FF] py-8">
      <div className="container px-4">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-lg">
          <div className="mb-5">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-800">
              {t("contact.eyebrow")}
            </span>
            <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-slate-950">
              {t("contact.requestConsultation")}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {t("contact.formIntro")}
            </p>
          </div>
          <ContactForm />
          <a
            href={`mailto:${siteMeta.email}`}
            className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-slate-700"
          >
            <Mail className="h-4 w-4 text-cyan-700" />
            {siteMeta.email}
          </a>
        </div>
      </div>
    </section>
  );
}