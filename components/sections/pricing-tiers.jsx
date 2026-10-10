"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  ArrowRight,
  Clock,
  Layers,
  HelpCircle,
  TrendingUp,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteMeta } from "@/lib/site";

const TIERS = [
  {
    id: "local-dominator",
    name: "Local Market Dominator",
    tagline: "For high-end local leaders, boutique clinics & premier firms looking to capture 3x local market share.",
    badge: "14-DAY SPRINT",
    badgeVariant: "slate",
    price: "$3,500 – $5,000",
    billingPeriod: "one-time sprint investment",
    popular: false,
    highlightMetric: "Sub-0.8s Load Times",
    features: [
      "Custom Next.js 15 SSR Architecture (No templates)",
      "Bespoke High-Conversion UI/UX designed in Figma",
      "Instant WhatsApp CRM & Webhook Lead Routing",
      "95+ Lighthouse Score & Technical Local Schema",
      "Multi-device Responsive & Retina Optimization",
      "Full Code Ownership (100% IP transferred to you)",
      "14-Day Delivery SLA Guarantee",
    ],
    guarantee: "100% Core Web Vitals pass guarantee or we optimize at zero cost.",
    cta: "Deploy Local Dominator",
    href: "/contact",
  },
  {
    id: "enterprise-growth",
    name: "Enterprise Growth & AI Platform",
    tagline: "For scaling B2B companies, high-volume e-commerce & funded startups who demand automated lead capture.",
    badge: "MOST POPULAR • 2 SLOTS LEFT",
    badgeVariant: "cyan",
    price: "$7,500 – $12,000",
    billingPeriod: "one-time sprint investment",
    popular: true,
    highlightMetric: "24/7 AI Qualification Bot",
    features: [
      "Everything in Local Dominator, plus:",
      "Custom 24/7 AI Receptionist trained on your knowledge base",
      "Headless CMS integration (Sanity / Supabase) for instant edits",
      "Interactive ROI Calculators & Before/After Showmanship widgets",
      "Multi-Language i18n Architecture (English, Spanish, French, Arabic)",
      "Automated Zapier / Make / HubSpot CRM Pipelines",
      "Direct Private Slack Channel with Senior Solutions Architect",
      "21-Day Delivery SLA with Daily Asynchronous Standups",
    ],
    guarantee: "Guaranteed on-time launch or receive $250 credit per day delayed.",
    cta: "Claim Sprint Slot",
    href: "/contact",
  },
  {
    id: "flagship-bespoke",
    name: "Custom Flagship Platform",
    tagline: "For venture-backed giants, enterprise institutions & mission-critical ecosystems processing high GMV.",
    badge: "INVITATION & BRIEFING ONLY",
    badgeVariant: "purple",
    price: "$15,000 – $30,000+",
    billingPeriod: "one-time sprint investment",
    popular: false,
    highlightMetric: "Custom Agentic Workflows",
    features: [
      "Bespoke Microservices & Serverless Edge Architecture",
      "High-End 3D WebGL / Canvas interactive showmanship",
      "Autonomous Multi-Agent AI Workflows (Voice + Chat + CRM Sync)",
      "SOC-2 Type II Compliant Data Pipelines & Security Audits",
      "Custom Enterprise Database & Stripe/Payment Gateway Architecture",
      "60-Day Post-Launch Conversion Optimization & A/B Testing",
      "Direct Phone & WhatsApp Escalation Line to Founder Daud",
      "Unconditional Executive Board Sign-off Guarantee",
    ],
    guarantee: "Unlimited post-launch sprint iterations until your executive KPI is met.",
    cta: "Request Executive Briefing",
    href: "/contact",
  },
];

const RETAINERS = [
  {
    id: "retainer-essential",
    name: "Continuous Edge Sentry",
    price: "$997",
    period: "/month",
    description: "24/7 uptime monitoring, security patches, edge cache tuning, and 5 hours of monthly feature requests.",
    deliverables: [
      "24/7 Global Edge Telemetry monitoring",
      "Zero-downtime dependency & framework upgrades",
      "Instant 2-hour SLA response for critical bugs",
      "Monthly SEO & conversion telemetry report",
    ],
  },
  {
    id: "retainer-growth",
    name: "Conversion & AI Sprint Partner",
    price: "$2,450",
    period: "/month",
    badge: "MAX VELOCITY",
    description: "A full-stack engineering arm on retainer: ongoing A/B testing, AI prompt engineering, and continuous feature releases.",
    deliverables: [
      "All Edge Sentry deliverables included",
      "20 dedicated hours of custom Next.js feature development",
      "Bi-weekly A/B testing & landing page conversion experiments",
      "AI Bot dataset retraining & prompt fine-tuning",
      "Dedicated Slack channel with same-day turnaround",
    ],
  },
];

export function PricingTiers() {
  const [model, setModel] = useState("sprint"); // 'sprint' | 'retainer'

  return (
    <section id="pricing" className="relative isolate overflow-hidden bg-slate-950 py-24 sm:py-32">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[50rem] w-[70rem] -translate-x-1/2 [background:radial-gradient(ellipse_at_center,rgba(6,182,212,0.12),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[35rem] w-[35rem] [background:radial-gradient(circle,rgba(59,130,246,0.08),transparent_70%)]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            Transparent Value Architecture
          </div>
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-tight">
            Enterprise Quality. Predictable ROI.{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Zero Hourly Guesswork.
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            We don’t bill by the hour like traditional agencies that pad timesheets. Every tier is a fixed-investment, outcome-guaranteed deployment backed by written SLAs.
          </p>

          {/* Model Switcher Pill */}
          <div className="mt-10 inline-flex items-center rounded-2xl border border-slate-800 bg-slate-900/90 p-1.5 shadow-2xl backdrop-blur-md">
            <button
              type="button"
              onClick={() => setModel("sprint")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all sm:text-sm ${
                model === "sprint"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Zap className="h-4 w-4" />
              Fixed Sprint Deployments
            </button>
            <button
              type="button"
              onClick={() => setModel("retainer")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all sm:text-sm ${
                model === "retainer"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <TrendingUp className="h-4 w-4" />
              Monthly Growth Retainers
            </button>
          </div>
        </div>

        {/* Sprint Model Cards */}
        {model === "sprint" && (
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
            {TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  tier.popular
                    ? "border-2 border-cyan-400/80 bg-slate-900/90 shadow-2xl shadow-cyan-500/15 ring-1 ring-cyan-400/40 lg:-translate-y-2"
                    : "border border-slate-800/90 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900/70"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow-md">
                    {tier.badge}
                  </div>
                )}

                <div>
                  {!tier.popular && (
                    <div className="inline-flex rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-300">
                      {tier.badge}
                    </div>
                  )}

                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="font-display text-2xl font-bold text-white">{tier.name}</h3>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-400 sm:text-sm">
                    {tier.tagline}
                  </p>

                  <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Total Investment
                    </div>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                        {tier.price}
                      </span>
                    </div>
                    <span className="text-[11px] text-cyan-400 font-medium">{tier.billingPeriod}</span>
                  </div>

                  <div className="mt-6 border-t border-slate-800/80 pt-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
                      What's Included:
                    </div>
                    <ul className="mt-4 space-y-3">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-800/80 pt-6">
                  <div className="mb-5 rounded-xl border border-cyan-500/20 bg-cyan-950/30 p-3 text-[11px] text-cyan-200">
                    <span className="font-semibold text-cyan-400">Guarantee: </span>
                    {tier.guarantee}
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className={`w-full font-bold transition-all ${
                      tier.popular
                        ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/25"
                        : "border border-white/15 bg-white/10 text-white hover:bg-white/20 hover:border-cyan-400/40"
                    }`}
                  >
                    <Link href={`${tier.href}?tier=${tier.id}`}>
                      {tier.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Retainer Model Cards */}
        {model === "retainer" && (
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
            {RETAINERS.map((ret) => (
              <div
                key={ret.id}
                className="relative flex flex-col justify-between rounded-3xl border border-slate-800/90 bg-slate-900/60 p-8 shadow-xl hover:border-cyan-500/40 transition-all"
              >
                {ret.badge && (
                  <div className="absolute -top-3.5 right-6 rounded-full bg-cyan-500 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-slate-950">
                    {ret.badge}
                  </div>
                )}
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">{ret.name}</h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">{ret.description}</p>
                  
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-display text-4xl font-extrabold text-white">{ret.price}</span>
                    <span className="text-sm font-semibold text-slate-400">{ret.period}</span>
                  </div>

                  <div className="mt-6 border-t border-slate-800 pt-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      SLA & Deliverables:
                    </div>
                    <ul className="mt-4 space-y-3">
                      {ret.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-800 pt-6">
                  <Button asChild size="lg" className="w-full bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-bold">
                    <Link href={`/contact?retainer=${ret.id}`}>
                      Subscribe to Retainer
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Written SLA & Peace of Mind Banner */}
        <div className="mt-16 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-slate-900/90 p-8 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">100% Code & Asset Ownership</div>
                <div className="text-xs text-slate-400 mt-0.5">You own your GitHub repo, hosting, and data. Zero vendor lock-in.</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Hard Sprint Delivery SLA</div>
                <div className="text-xs text-slate-400 mt-0.5">Contractually bound delivery timelines. We ship on time or pay you back.</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Direct Founder Engineering</div>
                <div className="text-xs text-slate-400 mt-0.5">No 19-year-old junior interns. Direct senior guidance by Daud & lead team.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
