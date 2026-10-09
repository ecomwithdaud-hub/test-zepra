"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  Landmark,
  Layers3,
  LockKeyhole,
  MessagesSquare,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const accreditationsIcons = [Award, Landmark, Building2];
const pillarsIcons = [Layers3, LockKeyhole, TrendingUp, MessagesSquare];

export function WhyUs() {
  const { t } = useLanguage();
  const content = t("home.whyUs");

  // Fallback Arrays agar translation na mile
  const accreditationsList = Array.isArray(content?.accreditations)
    ? content.accreditations
    : [
        "ISO Certified (Quality Standards)",
        "FBR Approved (Pakistan)",
        "Registered LLC (United States)",
      ];

  const metricsList = Array.isArray(content?.metrics)
    ? content.metrics
    : [
        { value: "50+", label: "Projects Delivered" },
        { value: "30+", label: "Websites Launched" },
        { value: "20+", label: "E-Commerce Stores Scaled" },
        { value: "PK + Global", label: "Built for Pakistan & International Clients" },
      ];

  const pillarsList = Array.isArray(content?.pillars)
    ? content.pillars
    : [
        {
          title: "Unified Delivery Stack",
          description:
            "Websites, Shopify e-commerce, AI automation, and graphic design under one roof.",
        },
        {
          title: "Secure & Scalable Infrastructure",
          description:
            "ISO-compliant security, robust performance, and zero downtime, built to support your business as it grows.",
        },
        {
          title: "Growth-Focused Execution",
          description:
            "Digital marketing, conversion rate optimization, and revenue-driven performance focused on measurable progress.",
        },
        {
          title: "Dedicated Client Partnership",
          description:
            "Direct developer communication, fast sprint cycles, and 24/7 support keep your team moving with confidence.",
        },
      ];

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 py-8 text-white sm:py-12">
      <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-36 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="container relative">
        <header className="flex flex-col gap-6 border-b border-white/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {content?.eyebrow || "WHY CHOOSE US"}
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              {content?.title || "Built for trust, speed, and real business outcomes."}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              {content?.description || "Proven engineering and digital execution designed to scale your revenue worldwide."}
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {accreditationsList.map((label, index) => {
                const Icon = accreditationsIcons[index] || Award;

                return (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-md"
                  >
                    <Icon className="h-3.5 w-3.5 text-cyan-300" />
                    {label}
                  </span>
                );
              })}
            </div>
          </div>

          <Link
            href="/#contact"
            className="group inline-flex w-fit shrink-0 items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_0_rgba(34,211,238,0)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/[0.09] hover:shadow-[0_0_30px_rgba(34,211,238,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {content?.chat || "Let's chat"}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none" />
          </Link>
        </header>

        <div className="grid grid-cols-2 gap-x-5 gap-y-6 py-6 md:grid-cols-4">
          {metricsList.map((metric, index) => {
            const numericValue = String(metric.value).match(/^(\d+(?:\.\d+)?)(.*)$/);
            const value = numericValue ? (
              <AnimatedCounter
                target={Number(numericValue[1])}
                suffix={numericValue[2]}
              />
            ) : metric.value;

            return (
              <div
                key={index}
                className="min-w-0"
              >
                <div className="font-display text-2xl font-semibold leading-none text-white sm:text-3xl">
                  {value}
                </div>
                <p className="mt-2 max-w-[14rem] text-xs leading-5 text-slate-400 sm:text-sm">
                  {metric.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid gap-4 pt-6 sm:grid-cols-2 xl:grid-cols-4">
          {pillarsList.map((pillar, index) => {
            const Icon = pillarsIcons[index] || Layers3;

            return (
              <article
                key={index}
                className="group min-h-[230px] rounded-3xl border border-slate-800/90 bg-slate-900/65 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/50 hover:bg-slate-900/90 hover:shadow-[0_20px_50px_rgba(6,182,212,0.1)] motion-reduce:transition-none"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.09] text-cyan-300 transition-colors duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/[0.14]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold tabular-nums text-slate-600">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}