"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ExternalLink, Sparkles } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const defaultMetrics = [
  { label: "Delivery Timeline", value: "6 Weeks" },
  { label: "Lead Conversion Lift", value: "+54%" },
  { label: "Process Automation", value: "3.4x Speed" },
];

export function CaseStudySpotlight({
  eyebrow = "Featured Case Study Spotlight",
  title = "US Multi-Vertical Conversion Rollout — 24 Production Web Platforms",
  description = "We engineered a unified, high-converting Next.js & Tailwind web architecture deployed across 24 US metropolitan service brands—combining sub-1.2s edge load speeds, mobile-first quote funnels, and local schema SEO.",
  metrics = defaultMetrics,
  image = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
  primaryHref = "https://clearflow-plumbing-demo.vercel.app/",
  primaryLabel = "Launch Live Flagship Demo",
  secondaryHref = "/case-studies",
  secondaryLabel = "Explore All Case Studies",
}) {
  const isExternal = primaryHref.startsWith("http");

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 py-16 text-white sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]"
      />
      <div className="container relative z-10">
        <div className="grid gap-12 rounded-[32px] border border-white/12 bg-gradient-to-br from-[#0d1b33] via-[#091224] to-[#050a14] p-6 shadow-[0_25px_90px_rgba(0,0,0,0.55)] sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
          {/* Left Column: Narrative + 3 Glowing Metric Cards */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              {eyebrow}
            </div>

            <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              {title}
            </h2>

            <p className="text-sm leading-7 text-slate-300 sm:text-base">
              {description}
            </p>

            {/* 3 DevCrafter-Style Hover-Glow Metric Cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="group rounded-[22px] border border-white/15 bg-gradient-to-br from-white/[0.06] to-white/[0.02] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:from-cyan-400/15 hover:to-cyan-400/5"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400 transition duration-300 group-hover:text-cyan-300">
                    {item.label}
                  </p>
                  <p className="mt-2 font-display text-2xl font-bold text-white transition duration-300 group-hover:text-cyan-300 sm:text-3xl">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={primaryHref}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                data-cursor="VIEW LIVE"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan px-6 py-3 text-xs font-bold text-slate-950 shadow-lg transition-all hover:brightness-110 sm:text-sm"
              >
                <span>{primaryLabel}</span>
                {isExternal ? (
                  <ExternalLink className="h-4 w-4" />
                ) : (
                  <ArrowUpRight className="h-4 w-4" />
                )}
              </a>

              {secondaryHref ? (
                <Link
                  href={secondaryHref}
                  data-cursor="EXPLORE"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold text-white transition-all hover:border-cyan-400/40 hover:bg-white/10 sm:text-sm"
                >
                  <span>{secondaryLabel}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ) : null}
            </div>
          </div>

          {/* Right Column: Interactive Grayscale-to-Color Reveal Preview */}
          <TiltCard cursorLabel="EXPLORE" className="rounded-[28px]">
            <div className="group relative overflow-hidden rounded-[28px] border border-white/15 bg-slate-950 shadow-[0_25px_80px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-cyan-400/40">
              {/* Top Browser Frame */}
              <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/90 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-[11px] text-slate-300">
                  Hover to reveal live color preview
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Verified
                </span>
              </div>

              <div className="relative h-[320px] w-full overflow-hidden sm:h-[380px]">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent transition-opacity duration-300" />
                <div className="absolute inset-x-6 bottom-5 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <span className="inline-block rounded-full border border-cyan-400/40 bg-cyan-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cyan-200 backdrop-blur-md">
                      Architecture Spotlight
                    </span>
                    <p className="mt-2 font-display text-lg font-bold text-white sm:text-xl">
                      Sub-Second Edge Delivery & High-Intent Lead Funnels
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
