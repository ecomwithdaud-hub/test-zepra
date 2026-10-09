"use client";

import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  const { t } = useLanguage();

  return (
    <section className="section-shell-tight">
      <div className="container">
        <div className="glass-panel relative overflow-hidden px-6 py-6 sm:px-6 lg:px-12 lg:py-6">
          <div className="absolute inset-y-0 right-0 w-1/3 bg-brand-radial opacity-80" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="eyebrow border-white/10 bg-white/10 text-cyan-300">
                {t("cta.eyebrow")}
              </div>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                {t("cta.title")}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                {t("cta.description")}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="xl">
                <Link href="/contact">
                  {t("nav.bookConsultation")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="light">
                <Link href="/services">
                  <PhoneCall className="h-4 w-4" />
                  {t("nav.viewServices")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
