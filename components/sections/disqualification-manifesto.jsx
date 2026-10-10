"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  LockKeyhole,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  XCircle,
  Zap,
} from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const disqualifications = [
  {
    title: "No $300 Template Sites",
    description:
      "We do not install bloated WordPress themes or generic drag-and-drop templates. We engineer bespoke, sub-second web platforms designed to convert high-ticket clients.",
  },
  {
    title: "No Uncommitted Spec Work",
    description:
      "We partner with businesses that have validated market models and are ready to invest in serious digital infrastructure. We do not engage in multi-agency unpaid pitch contests.",
  },
  {
    title: "No Cutting Corners on Speed or Security",
    description:
      "Every deployment must meet strict international standards: sub-1.2s edge delivery, strict data protection, clean semantic HTML, and zero bloat.",
  },
];

const ironcladGuarantees = [
  {
    icon: Zap,
    title: "Contractual 95+ Core Web Vitals",
    description:
      "Every production website we deploy is guaranteed to achieve a 95+ Google Lighthouse Mobile score, or we optimize it free of charge.",
  },
  {
    icon: LockKeyhole,
    title: "100% IP & Code Rights",
    description:
      "You receive complete source code, Figma assets, and production deployment credentials. No proprietary hostage fees or vendor lock-in.",
  },
  {
    icon: ShieldCheck,
    title: "Weekly Live Milestone Demos",
    description:
      "We work in transparent 1-to-2 week sprints with live interactive staging demos. You never wait weeks wondering what is happening.",
  },
  {
    icon: Sparkles,
    title: "Direct Founder & Senior Engineering",
    description:
      "Direct access to Founder Daud Ali Lashari and senior technical leads. No middleman telephone games or offshore junior account reps.",
  },
];

export function DisqualificationManifesto() {
  return (
    <section className="relative isolate overflow-hidden bg-[#030610] py-20 text-white sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]"
      />

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-rose-300">
            <ShieldAlert className="h-3.5 w-3.5" />
            The Zepra Tech Standard
          </div>

          <h2 className="mt-5 font-display text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl">
            We Are Not For Everyone.{" "}
            <span className="block bg-gradient-to-r from-rose-300 via-amber-300 to-cyan-300 bg-clip-text text-transparent">
              Here Is Who We Do NOT Work With.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Elite digital prestige requires uncompromising technical discipline. If you are looking for shortcuts or bottom-barrel pricing, we are the wrong agency for you.
          </p>
        </div>

        {/* 3 Disqualification Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {disqualifications.map((item, idx) => (
            <TiltCard key={item.title} className="rounded-3xl">
              <article className="group flex h-full flex-col justify-between rounded-3xl border border-rose-500/25 bg-gradient-to-b from-[#18090f] via-[#0f070c] to-[#080306] p-7 shadow-2xl transition hover:border-rose-400/50">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-rose-500/30 bg-rose-500/15 text-rose-400">
                      <XCircle className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs font-bold tracking-[0.2em] text-rose-400/60">
                      RULE 0{idx + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                </div>
              </article>
            </TiltCard>
          ))}
        </div>

        {/* The 4 Ironclad Guarantees */}
        <div className="mt-16 rounded-[32px] border border-cyan-400/25 bg-gradient-to-br from-[#0d1a33] via-[#081224] to-[#040812] p-8 shadow-2xl sm:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between border-b border-white/10 pb-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                What We Guarantee In Writing
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                The 4 Non-Negotiable Zepra Tech Guarantees
              </h3>
            </div>
            <Link
              href="/contact#contact"
              data-cursor="LET'S GO"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan px-6 py-3.5 text-xs font-extrabold uppercase tracking-widest text-slate-950 shadow-lg hover:brightness-110"
            >
              <span>Apply for Client Intake</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ironcladGuarantees.map((g) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/35 hover:bg-white/[0.06]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 font-display text-base font-bold text-white">
                    {g.title}
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-slate-300">
                    {g.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
