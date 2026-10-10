"use client";

import { Mail } from "lucide-react";

import { ContactForm } from "@/components/shared/contact-form";
import { useLanguage } from "@/components/providers/language-provider";
import { siteMeta } from "@/lib/site";

export function MobileContact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-slate-950 py-8 text-white border-t border-white/10">
      <div className="container px-4">
        <div className="rounded-2xl border border-white/10 bg-slate-900/90 p-5 shadow-2xl backdrop-blur-xl">
          <div className="mb-5">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
              {t("contact.eyebrow")}
            </span>
            <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-white">
              {t("contact.requestConsultation")}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {t("contact.formIntro")}
            </p>
          </div>
          <ContactForm />
          <a
            href={`mailto:${siteMeta.email}`}
            className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-slate-300 hover:text-cyan-300 transition-colors"
          >
            <Mail className="h-4 w-4 text-cyan-400" />
            {siteMeta.email}
          </a>
        </div>
      </div>
    </section>
  );
}