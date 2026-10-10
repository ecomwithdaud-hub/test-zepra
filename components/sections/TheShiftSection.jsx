"use client";

import React from 'react';
import { useLanguage } from "@/components/providers/language-provider";
import { CyberCard } from "@/components/ui/CyberCard";

export function TheShiftSection() {
  const { t } = useLanguage();
  const content = t("home.operations");

  // Safe Array Fallbacks agar JSON translation na mile
  const legacyPointsList = Array.isArray(content?.legacyPoints)
    ? content.legacyPoints
    : [
        {
          label: "Manual & Repetitive Tasks",
          description: "Hours wasted every day on manual data entry, reporting, and routine tasks.",
        },
        {
          label: "Slow Response Times",
          description: "Customer queries and lead follow-ups take hours or days to process.",
        },
        {
          label: "Human Errors & Security Risks",
          description: "Scattered client data without automated encryption or strict compliance.",
        },
        {
          label: "High Overhead Costs",
          description: "Scaling operations requires constantly hiring more workforce and expanding payroll.",
        },
      ];

  const aiPointsList = Array.isArray(content?.aiPoints)
    ? content.aiPoints
    : [
        {
          label: "24/7 AI Automation",
          description: "Custom AI workflows execute repetitive tasks, document handling, and lead processing instantly.",
        },
        {
          label: "Data Science Intelligence",
          description: "Live real-time dashboards analyze trends and provide predictive insights for growth.",
        },
        {
          label: "Enterprise Data Security",
          description: "Bank-grade encryption and location-based compliance keeping client data 100% safe.",
        },
        {
          label: "10x Operational Leverage",
          description: "Multiply business output and scale revenue without increasing overhead expenses.",
        },
      ];

  const pillarsList = Array.isArray(content?.pillars)
    ? content.pillars
    : [
        {
          category: "Automation",
          title: "AI Workflow Transformation",
          description: "We replace time-consuming manual work with smart AI pipelines that work continuously without human intervention or delay.",
        },
        {
          category: "Data Science",
          title: "Predictive Growth Insights",
          description: "We structure your raw business data into clear, real-time analytics that guide executive decisions and eliminate guesswork.",
        },
        {
          category: "Data Security",
          title: "Bank-Grade Compliance",
          description: "Your proprietary business data remains completely isolated and protected with encrypted AI pipelines and regulatory standards.",
        },
      ];

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 py-8 text-white sm:py-12 border-t border-white/10">
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-96 w-[min(90vw,1000px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent_70%)] blur-[120px] animate-pulse motion-reduce:animate-none"
      />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {content?.eyebrow || "THE AI REVOLUTION IN OPERATIONS"}
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            {content?.title || "Transforming Business Operations with AI + Data Science."}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            {content?.description || "The shift to AI-native operations means moving away from slow, manual processes. We build custom AI automation, intelligent data pipelines, and bank-grade data security into your business—making it work faster, smarter, and scale effortlessly."}
          </p>
        </header>

        {/* Legacy vs AI-Native Comparison Grid */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          
          {/* Card 1: Legacy Model */}
          <div className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-md backdrop-blur-sm sm:p-6 text-white">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-bold tracking-wider text-slate-300 uppercase border border-white/10">
                  {content?.legacyTag || "LEGACY MODEL"}
                </span>
                <span className="text-xs font-semibold text-rose-400">{content?.legacyStatus || "Slow & Expensive"}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">
                {content?.legacyTitle || "Traditional Manual Business Operations"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                {content?.legacyDescription || "Standard operational setups relying on traditional human hours and fragmented tools."}
              </p>

              <ul className="mt-6 space-y-4 text-sm text-slate-300">
                {legacyPointsList.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500/10 text-rose-400 text-xs font-bold">✕</span>
                    <span><strong className="text-white">{point.label}:</strong> {point.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: AI-Native Model */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-[#0e1f38] via-[#0b132b] to-[#060a17] p-5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:shadow-cyan-500/20 sm:p-6">
            <div 
              aria-hidden="true" 
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl transition-all duration-300 group-hover:bg-cyan-400/25" 
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-bold tracking-wider text-cyan-300 uppercase shadow-inner">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {content?.aiTag || "AI-NATIVE REVOLUTION"}
                </span>
                <span className="text-xs font-semibold text-cyan-400">{content?.aiStatus || "Fast, Scalable & Secure"}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">
                {content?.aiTitle || "Intelligent AI + Data Science Operations"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                {content?.aiDescription || "Modern automated architecture designed to handle complex workflows with 24/7 reliability."}
              </p>

              <ul className="mt-6 space-y-4 text-sm text-slate-200">
                {aiPointsList.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">✓</span>
                    <span><strong>{point.label}:</strong> {point.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* 3 Core AI Value Pillars Below */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillarsList.map((pillar, index) => (
            <CyberCard key={index} className="rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-[#0e1f38] via-[#0b132b] to-[#060a17] p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/50 hover:shadow-cyan-500/15">
              <span className="inline-block rounded-lg bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/20">
                {pillar.category}
              </span>
              <h4 className="mt-4 text-base font-bold text-white">{pillar.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">{pillar.description}</p>
            </CyberCard>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TheShiftSection;