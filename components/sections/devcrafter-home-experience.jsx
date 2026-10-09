"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Cpu, Sparkles } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const trustedBrands = [
  "ClearFlow USA",
  "Summit Roofing",
  "Wiki RG Platform",
  "Apex Auto Care",
  "Glow MedSpa",
  "Veloce Bistro",
];

const manifestoTabs = [
  {
    id: "mission",
    label: "Our Mission",
    content:
      "Our mission is to empower ambitious businesses by creating digital experiences that are radically high-converting and flawlessly engineered. From strategy to edge deployment, we solve complex operational and growth challenges with elegant software and web systems.",
  },
  {
    id: "vision",
    label: "Our Vision",
    content:
      "We envision a standard where enterprise engineering and luxury digital design move as one. We build platforms, AI workflows, and brand systems that become the undisputed benchmark in your market—turning traffic into long-term customer equity.",
  },
  {
    id: "value",
    label: "Our Value",
    content:
      "Expect elite execution: sub-second load speeds, mobile-first conversion architecture, transparent sprint delivery, and measurable ROI. Our team collaborates directly with founders and operators so your digital presence outpaces every competitor.",
  },
];

const signatureServices = [
  {
    number: "01",
    title: "Custom Web Development",
    engine: "Next.js / React / Vercel Edge",
    description:
      "Tailored, conversion-engineered websites and full-stack platforms built for speed, authority, and seamless scalability.",
    href: "/website-development",
    stats: { scalability: 99, performance: 98, roi: 96 },
  },
  {
    number: "02",
    title: "AI Agents & Workflow Automation",
    engine: "LLMs / Python / Custom APIs",
    description:
      "Autonomous 24/7 AI chat & voice agents, CRM pipelines, and intelligent process automation that multiply operational output.",
    href: "/services/ai-agents-bots",
    stats: { scalability: 98, performance: 97, roi: 99 },
  },
  {
    number: "03",
    title: "E-Commerce Architecture",
    engine: "Shopify Plus / WooCommerce / Stripe",
    description:
      "High-velocity online storefronts engineered with frictionless checkout flows, inventory sync, and AOV optimization.",
    href: "/services/ecommerce-solutions",
    stats: { scalability: 96, performance: 95, roi: 98 },
  },
  {
    number: "04",
    title: "UI/UX Atelier & Brand Identity",
    engine: "Figma / Design Systems / Motion",
    description:
      "Uncompromising visual systems, interactive prototypes, and brand geometry crafted to command instant market trust.",
    href: "/services/graphic-design",
    stats: { scalability: 94, performance: 99, roi: 95 },
  },
  {
    number: "05",
    title: "Search & Growth Marketing",
    engine: "Technical SEO / Meta / Google Ads",
    description:
      "Data-driven acquisition campaigns, schema SEO, and conversion funnels orchestrated for compounding revenue growth.",
    href: "/services/digital-marketing",
    stats: { scalability: 100, performance: 94, roi: 97 },
  },
];

const pipelineSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "Deep-dive workshops to align on revenue goals, target audience, conversion KPIs, and technical architecture.",
    accent: "#38c6ff",
  },
  {
    number: "02",
    title: "Experience Design",
    description:
      "We craft high-trust UI systems, interactive wireframes, and conversion-focused user journeys before code begins.",
    accent: "#34d399",
  },
  {
    number: "03",
    title: "Engineering & Motion",
    description:
      "Developing scalable, sub-second web and AI architectures with fluid micro-interactions and clean code.",
    accent: "#fbbf24",
  },
  {
    number: "04",
    title: "Launch & Ascension",
    description:
      "We deploy on global edge infrastructure, verify analytics & SEO, and scale your brand's new digital altitude.",
    accent: "#38c6ff",
  },
];

export function DevCrafterHomeExperience() {
  const [activeTab, setActiveTab] = useState("mission");
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const ctaRef = useRef(null);
  const [ctaGlow, setCtaGlow] = useState({ x: 50, y: 50, active: false });

  const activeService = signatureServices[activeServiceIdx] || signatureServices[0];

  const handleCtaMouseMove = (e) => {
    if (!ctaRef.current) return;
    const rect = ctaRef.current.getBoundingClientRect();
    setCtaGlow({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  return (
    <div className="bg-[#040812] text-white">
      {/* 1. Trusted By Forward-Looking Teams Bar */}
      <section className="border-y border-white/10 py-14 sm:py-18">
        <div className="container space-y-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.38em] text-slate-400">
            Trusted by Forward-Looking Teams & Industry Leaders
          </p>
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
            {trustedBrands.map((brand) => (
              <div
                key={brand}
                data-cursor="EXPLORE"
                className="group cursor-pointer rounded-[20px] border border-white/15 bg-gradient-to-br from-white/[0.07] to-white/[0.02] px-4 py-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:from-cyan-400/15 hover:to-cyan-400/5 hover:text-cyan-300 hover:shadow-[0_15px_40px_rgba(56,198,255,0.15)]"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Manifesto Statement + Interactive Mission / Vision / Value Tabs */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="container">
          {/* Big Manifesto Quote */}
          <div className="mb-16 max-w-5xl sm:mb-24">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.38em] text-cyan-300">
              Our Engineering Philosophy
            </p>
            <h2 className="font-display text-[clamp(1.65rem,3.8vw,3.1rem)] font-bold leading-[1.18] tracking-tight text-white/95">
              We don&apos;t just build websites. We engineer{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                digital prestige
              </span>
              . Every project is a masterpiece of uncompromising design, fluid motion, and airtight conversion architecture.
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16">
            {/* Left: Grayscale-to-Color Interactive Studio Showcase + Floating 50+ Badge */}
            <div className="relative">
              <TiltCard cursorLabel="EXPLORE" className="rounded-[32px]">
                <div className="group relative overflow-hidden rounded-[32px] border border-white/15 bg-slate-950 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
                    alt="Zepra Tech Engineering Studio"
                    loading="lazy"
                    className="h-[340px] w-full object-cover contrast-110 grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 sm:h-[460px]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                </div>
              </TiltCard>

              {/* Floating Glass Metric Badge */}
              <div className="mt-4 inline-flex items-center gap-4 rounded-[24px] border border-cyan-400/30 bg-slate-950/90 px-6 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:absolute sm:-bottom-6 sm:right-6 sm:mt-0">
                <p className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  50<span className="text-cyan-300">+</span>
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                  Global Projects
                  <br />
                  Engineered
                </p>
              </div>
            </div>

            {/* Right: Interactive Mission / Vision / Value Tabs */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_10px_#38c6ff]" />
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-slate-300">
                  Zepra Tech Standard
                </span>
              </div>

              <div className="flex flex-wrap gap-2 border-b border-white/10">
                {manifestoTabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`border-b-2 px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                        isActive
                          ? "border-cyan-400 text-white"
                          : "border-transparent text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="min-h-[130px]">
                {manifestoTabs.map((tab) =>
                  tab.id === activeTab ? (
                    <p
                      key={tab.id}
                      className="text-base leading-8 text-slate-300 sm:text-lg"
                    >
                      {tab.content}
                    </p>
                  ) : null
                )}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/website-development"
                  data-cursor="EXPLORE"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-lg transition hover:brightness-110"
                >
                  <span>Explore 24 Live Demo Sites</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/case-studies"
                  data-cursor="DETAIL"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:border-cyan-400/40 hover:bg-white/10"
                >
                  <span>Read Case Studies</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Sticky Service Capabilities & Live Engine Metrics */}
      <section className="relative border-t border-white/10 bg-[#02050c] py-20 sm:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            {/* Left Sticky Live Telemetry Card */}
            <div className="space-y-8 lg:sticky lg:top-28">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-[0.38em] text-cyan-300">
                    Our Capabilities
                  </span>
                </div>
                <h2 className="mt-4 font-display text-4xl font-black uppercase leading-[1.02] tracking-tight text-white sm:text-5xl">
                  Premium Digital{" "}
                  <span
                    className="block text-transparent"
                    style={{
                      WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    Solutions
                  </span>
                </h2>
              </div>

              {/* Active Service Live Telemetry Box */}
              <div className="overflow-hidden rounded-[28px] border border-cyan-400/25 bg-gradient-to-br from-[#0d1b33] via-[#091224] to-[#050a14] p-7 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-300">
                    Service Telemetry // {activeService.number}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    Active
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-tight text-white">
                  {activeService.title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  Engine: {activeService.engine}
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
                      <span>Scalability</span>
                      <span className="text-cyan-300">
                        {activeService.stats.scalability}%
                      </span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan transition-all duration-500"
                        style={{ width: `${activeService.stats.scalability}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
                      <span>Performance</span>
                      <span className="text-emerald-300">
                        {activeService.stats.performance}%
                      </span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-300 transition-all duration-500"
                        style={{ width: `${activeService.stats.performance}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
                      <span>ROI Impact</span>
                      <span className="text-amber-300">
                        {activeService.stats.roi}%
                      </span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-500"
                        style={{ width: `${activeService.stats.roi}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-7 pt-2">
                  <Link
                    href="/services"
                    data-cursor="EXPLORE"
                    className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:border-cyan-400/50 hover:bg-white/10"
                  >
                    View All 11 Agency Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Interactive Service Cards Stack */}
            <div className="space-y-5">
              {signatureServices.map((srv, idx) => {
                const isSelected = idx === activeServiceIdx;
                return (
                  <TiltCard
                    key={srv.number}
                    cursorLabel="SCAN"
                    onMouseEnter={() => setActiveServiceIdx(idx)}
                    className="rounded-[32px]"
                  >
                    <article
                      className={`group relative overflow-hidden rounded-[32px] border p-7 transition-all duration-300 sm:p-9 ${
                        isSelected
                          ? "border-cyan-400/55 bg-gradient-to-br from-[#0e1f3a] via-[#091326] to-[#050a14] shadow-[0_25px_70px_rgba(18,119,255,0.22)]"
                          : "border-white/10 bg-[#080f1e]/90 hover:border-cyan-400/35"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-mono text-xs font-black uppercase tracking-[0.35em] text-slate-400 group-hover:text-cyan-300">
                          SERVICE // {srv.number}
                        </span>
                        <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-cyan-300">
                          {srv.engine}
                        </span>
                      </div>

                      <h3 className="mt-5 font-display text-2xl font-black uppercase tracking-tight text-white transition-colors group-hover:text-cyan-200 sm:text-3xl">
                        {srv.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                        {srv.description}
                      </p>

                      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                        <Link
                          href={srv.href}
                          data-cursor="EXPLORE"
                          className="inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.25em] text-white transition hover:text-cyan-300"
                        >
                          <span>Explore Capability</span>
                          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950">
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </Link>
                      </div>
                    </article>
                  </TiltCard>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Masterpiece Pipeline — Wall of Proof */}
      <section className="relative overflow-hidden border-t border-white/10 bg-[#030711] py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(56,198,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,198,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-cyan-300">
              The Masterpiece Pipeline
            </p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">
              Wall of <span className="text-cyan-300">Proof</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pipelineSteps.map((step) => (
              <TiltCard
                key={step.number}
                cursorLabel={`STEP ${step.number}`}
                className="rounded-[32px]"
              >
                <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[32px] border border-white/12 bg-[#081020] p-7 shadow-2xl transition-all duration-300 hover:border-cyan-400/50">
                  <div className="pointer-events-none absolute -right-4 -top-6 select-none font-display text-8xl font-black text-white/[0.04]">
                    {step.number}
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">
                        STEP {step.number}
                      </span>
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-full border text-xs font-black transition-colors group-hover:bg-cyan-400 group-hover:text-slate-950"
                        style={{
                          borderColor: `${step.accent}66`,
                          color: step.accent,
                        }}
                      >
                        {step.number}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-black uppercase tracking-tight text-white group-hover:text-cyan-300">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {step.description}
                    </p>
                  </div>
                </article>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Signature Luxury Product Approach */}
      <section className="relative overflow-hidden border-t border-white/10 py-20 sm:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.45em] text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Signature Approach
              </div>
              <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
                We Choreograph Digital{" "}
                <span className="block bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                  Experiences Like Luxury Products
                </span>
              </h2>
              <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Strategy, design, and engineering move in perfect sync. Every launch is a composed narrative—crafted from first impression through measurable conversion.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
                <span>Art Direction</span>
                <span className="h-px w-12 bg-white/20" />
                <span>Technical Precision</span>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-gradient-to-br from-[#0d1b33] via-[#091224] to-[#050a14] p-6 shadow-2xl sm:p-9">
              <div className="space-y-4">
                {[
                  "Discovery & Visioning",
                  "Design Systems & Identity",
                  "Engineering & Edge Launch",
                  "Growth & Conversion Iteration",
                ].map((label, idx) => (
                  <div
                    key={label}
                    className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-3.5 transition-all duration-300 hover:border-cyan-400/35 hover:bg-white/[0.06]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-cyan-400/40 bg-cyan-400/10 text-xs font-bold text-cyan-300 transition group-hover:border-cyan-300 group-hover:bg-cyan-400 group-hover:text-slate-950">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-sm font-semibold text-slate-200 group-hover:text-white sm:text-base">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DevCrafter Interactive Radial Spotlight Closing Banner */}
      <section
        ref={ctaRef}
        onMouseMove={handleCtaMouseMove}
        onMouseLeave={() => setCtaGlow((prev) => ({ ...prev, active: false }))}
        className="relative overflow-hidden border-y border-white/10 bg-[#02040a] py-20 sm:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: ctaGlow.active ? 1 : 0.35,
            background: `radial-gradient(650px circle at ${ctaGlow.x}px ${ctaGlow.y}px, rgba(56, 198, 255, 0.18), transparent 75%)`,
          }}
        />
        <div className="container relative z-10 text-center">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400" />
              <span className="text-xs font-black uppercase tracking-[0.38em] text-cyan-300">
                Let&apos;s Work Together
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400" />
            </div>

            <h2 className="font-display text-[clamp(2.3rem,7vw,4.8rem)] font-black leading-[1.04] tracking-tight text-white">
              Ready to Elevate{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                Your Brand?
              </span>
            </h2>

            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Stop settling for average. Let&apos;s build a digital experience that converts traffic into customers and scales your business.
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                data-cursor="LET'S GO"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 px-8 py-4 text-xs font-extrabold uppercase tracking-[0.2em] text-slate-950 shadow-[0_0_40px_rgba(56,198,255,0.45)] transition-transform duration-300 hover:scale-105 sm:text-sm"
              >
                <span>Start a Project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/website-development"
                data-cursor="EXPLORE"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition hover:border-cyan-400/50 hover:bg-white/10 sm:text-sm"
              >
                <span>Our Web Portfolio</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
