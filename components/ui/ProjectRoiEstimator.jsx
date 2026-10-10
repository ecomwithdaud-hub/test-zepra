"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Calculator,
  CheckCircle2,
  Clock,
  Cpu,
  Gauge,
  Globe,
  Layers,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Zap,
} from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const platforms = [
  {
    id: "web-dev",
    name: "Custom Next.js Web Platform",
    sub: "Sub-1.2s Edge Delivery",
    basePrice: 3800,
    weeks: 3,
    icon: Globe,
    stack: "Next.js 15 / Tailwind CSS / Vercel Edge",
  },
  {
    id: "ecommerce",
    name: "E-Commerce Architecture",
    sub: "High-AOV Shopify / Stripe",
    basePrice: 5200,
    weeks: 4,
    icon: ShoppingCart,
    stack: "Shopify Plus / Headless / Stripe API",
  },
  {
    id: "ai-agents",
    name: "Autonomous AI Agents",
    sub: "24/7 Lead Qual & Operations",
    basePrice: 4800,
    weeks: 3,
    icon: Bot,
    stack: "OpenAI / LangChain / Python / Webhooks",
  },
  {
    id: "fullstack-saas",
    name: "Full-Stack Custom SaaS",
    sub: "Institutional Web Applications",
    basePrice: 8500,
    weeks: 6,
    icon: Layers,
    stack: "MERN / Next.js / PostgreSQL / AWS EC2",
  },
];

const scaleTiers = [
  {
    id: "starter",
    label: "Local US Market Dominator",
    mult: 1.0,
    weeksAdd: 0,
    desc: "Single-city/regional high-converting dominance.",
  },
  {
    id: "growth",
    label: "Multi-State Scaling Brand",
    mult: 1.45,
    weeksAdd: 1,
    desc: "Multi-location funnels with CRM integrations.",
  },
  {
    id: "enterprise",
    label: "Global Enterprise & Institutional",
    mult: 2.1,
    weeksAdd: 3,
    desc: "High-concurrency architecture with SLA guarantee.",
  },
];

const addOns = [
  {
    id: "ai-bot",
    name: "24/7 Autonomous AI Lead Qualification Bot",
    price: 1200,
    icon: Bot,
  },
  {
    id: "schema-seo",
    name: "Complete LocalBusiness & Service Schema SEO",
    price: 800,
    icon: Sparkles,
  },
  {
    id: "crm-sync",
    name: "HubSpot / GoHighLevel / Salesforce CRM Sync",
    price: 950,
    icon: Zap,
  },
  {
    id: "sla-guarantee",
    name: "Contractual 95+ Core Web Vitals SLA Guarantee",
    price: 650,
    icon: ShieldCheck,
  },
];

export function ProjectRoiEstimator() {
  const [platformId, setPlatformId] = useState("web-dev");
  const [scaleId, setScaleId] = useState("starter");
  const [selectedAddons, setSelectedAddons] = useState(["schema-seo", "sla-guarantee"]);

  const toggleAddon = (id) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedPlatform =
    platforms.find((p) => p.id === platformId) || platforms[0];
  const selectedScale = scaleTiers.find((s) => s.id === scaleId) || scaleTiers[0];

  const calculation = useMemo(() => {
    const addonsTotal = selectedAddons.reduce((acc, curr) => {
      const found = addOns.find((a) => a.id === curr);
      return acc + (found ? found.price : 0);
    }, 0);

    const rawTotal = Math.round(
      selectedPlatform.basePrice * selectedScale.mult + addonsTotal
    );
    const lowEst = Math.round(rawTotal * 0.9);
    const highEst = Math.round(rawTotal * 1.15);
    const totalWeeks = selectedPlatform.weeks + selectedScale.weeksAdd;

    return {
      low: lowEst.toLocaleString(),
      high: highEst.toLocaleString(),
      weeks: totalWeeks,
    };
  }, [selectedPlatform, selectedScale, selectedAddons]);

  const prefillMessage = encodeURIComponent(
    `Hello Zepra Tech Team! I used your Interactive ROI Estimator.\nSelected Platform: ${selectedPlatform.name}\nScale: ${selectedScale.label}\nAdd-ons: ${selectedAddons.join(", ")}\nEstimated Investment: $${calculation.low} - $${calculation.high}\nEstimated Sprint: ${calculation.weeks} Weeks\n\nI would like to discuss locking in this sprint roadmap.`
  );

  return (
    <section
      id="roi-estimator"
      className="relative isolate overflow-hidden bg-slate-950 py-16 text-white sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/12 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-blue-600/12 blur-[140px]"
      />

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300 shadow-[0_0_25px_rgba(56,198,255,0.2)]">
            <Calculator className="h-3.5 w-3.5" />
            Interactive Scope & ROI Architecture Estimator
          </div>

          <h2 className="mt-5 font-display text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Configure Your Custom{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
              Engineering Sprint
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Configure your platform requirements, scale tier, and high-conversion features below for an instant, transparent sprint estimation and architecture recommendation.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Left Column: Interactive Controls */}
          <div className="space-y-8">
            {/* Step 1: Platform Selection */}
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">
                  Step 01 // Select Core Platform
                </span>
                <span className="text-xs text-slate-400">4 Architecture Options</span>
              </div>
              <div className="mt-3.5 grid gap-3 sm:grid-cols-2">
                {platforms.map((p) => {
                  const Icon = p.icon;
                  const isSelected = platformId === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPlatformId(p.id)}
                      className={`group flex items-start gap-3.5 rounded-2xl border p-4 text-left transition-all duration-200 ${
                        isSelected
                          ? "border-cyan-400 bg-cyan-400/15 shadow-[0_0_30px_rgba(56,198,255,0.22)]"
                          : "border-white/10 bg-slate-900/60 hover:border-white/25 hover:bg-slate-900/90"
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${
                          isSelected
                            ? "bg-cyan-400 text-slate-950"
                            : "bg-white/5 text-slate-300 group-hover:text-cyan-300"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <div className="font-display text-sm font-bold text-white">
                          {p.name}
                        </div>
                        <div className="text-[11px] text-slate-400">{p.sub}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Scale & Complexity Tier */}
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">
                  Step 02 // Business Scale & Reach
                </span>
                <span className="text-xs text-slate-400">Target Market Footprint</span>
              </div>
              <div className="mt-3.5 space-y-2.5">
                {scaleTiers.map((scale) => {
                  const isSelected = scaleId === scale.id;
                  return (
                    <button
                      key={scale.id}
                      type="button"
                      onClick={() => setScaleId(scale.id)}
                      className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-all ${
                        isSelected
                          ? "border-emerald-400 bg-emerald-400/15 shadow-[0_0_25px_rgba(52,211,153,0.2)]"
                          : "border-white/10 bg-slate-900/60 hover:border-white/25 hover:bg-slate-900/90"
                      }`}
                    >
                      <div>
                        <div className="font-display text-sm font-bold text-white">
                          {scale.label}
                        </div>
                        <div className="text-xs text-slate-400">{scale.desc}</div>
                      </div>
                      <span
                        className={`h-4 w-4 shrink-0 rounded-full border transition-all ${
                          isSelected
                            ? "border-emerald-400 bg-emerald-400"
                            : "border-white/30 bg-transparent"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: High-Conversion Add-Ons */}
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">
                  Step 03 // Conversion & Speed Add-Ons
                </span>
                <span className="text-xs text-slate-400">Optional Accelerators</span>
              </div>
              <div className="mt-3.5 grid gap-2.5 sm:grid-cols-2">
                {addOns.map((addon) => {
                  const Icon = addon.icon;
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-start gap-3 rounded-2xl border p-3.5 text-left transition-all ${
                        isChecked
                          ? "border-cyan-400/50 bg-white/[0.08]"
                          : "border-white/10 bg-slate-900/40 opacity-75 hover:opacity-100"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                          isChecked
                            ? "border-cyan-400 bg-cyan-400 text-slate-950"
                            : "border-white/30"
                        }`}
                      >
                        {isChecked ? <CheckCircle2 className="h-3 w-3" /> : null}
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-white">
                          {addon.name}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Dynamic Telemetry & Output Card */}
          <TiltCard cursorLabel="ROADMAP" className="rounded-[32px] lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[32px] border border-cyan-400/35 bg-gradient-to-br from-[#0e1f3a] via-[#091428] to-[#050a14] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.7)] sm:p-9">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                  Sprint Telemetry
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  Live Estimate
                </span>
              </div>

              {/* Price Range */}
              <div className="mt-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Estimated Sprint Investment
                </span>
                <div className="mt-1 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  ${calculation.low}{" "}
                  <span className="text-xl font-normal text-slate-400 sm:text-2xl">
                    – ${calculation.high}
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-slate-400">
                  Includes full UI/UX design, sprint build, QA testing, and edge deployment.
                </p>
              </div>

              {/* Specs Grid */}
              <div className="mt-7 grid grid-cols-2 gap-3 border-y border-white/10 py-5">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                    <Clock className="h-3.5 w-3.5 text-cyan-300" />
                    Delivery Timeline
                  </div>
                  <div className="mt-1.5 font-display text-xl font-bold text-white">
                    {calculation.weeks} Weeks
                  </div>
                  <div className="text-[10px] text-slate-400">Weekly Live Demos</div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                    <Gauge className="h-3.5 w-3.5 text-emerald-400" />
                    Speed Benchmark
                  </div>
                  <div className="mt-1.5 font-display text-xl font-bold text-emerald-400">
                    98–100 / 100
                  </div>
                  <div className="text-[10px] text-slate-400">Core Web Vitals SLA</div>
                </div>
              </div>

              {/* Stack & Ownership */}
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Recommended Stack:</span>
                  <span className="font-semibold text-cyan-200">
                    {selectedPlatform.stack}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Code & IP Rights:</span>
                  <span className="font-semibold text-emerald-300">
                    100% Client Ownership
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Post-Launch Support:</span>
                  <span className="font-semibold text-slate-200">
                    30-Day Guaranteed Warranty
                  </span>
                </div>
              </div>

              {/* 1-Click Action Buttons */}
              <div className="mt-8 space-y-3">
                <a
                  href={`https://wa.me/923204154156?text=${prefillMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="LET'S GO"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-cyan py-4 text-xs font-extrabold uppercase tracking-[0.18em] text-slate-950 shadow-[0_0_30px_rgba(56,198,255,0.45)] transition-all hover:brightness-110 sm:text-sm"
                >
                  <span>Lock In This Sprint Roadmap</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  href="/contact#contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 py-3 text-xs font-bold uppercase tracking-wider text-slate-200 transition hover:border-cyan-400/40 hover:bg-white/10 hover:text-white"
                >
                  Submit Formal RFP / Proposal
                </Link>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
