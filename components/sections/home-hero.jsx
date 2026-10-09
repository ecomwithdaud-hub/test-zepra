"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Cpu,
  Globe2,
  Layers3,
  Sparkles,
  Workflow,
} from "lucide-react";

import { HeroParticles } from "@/components/ui/HeroParticles";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";
import { TiltCard } from "@/components/ui/TiltCard";
import { useLanguage } from "@/components/providers/language-provider";
import { heroHighlights } from "@/lib/site";

const capabilities = [
  "WEB PLATFORMS",
  "AI AUTOMATION",
  "E-COMMERCE",
  "UI/UX ATELIER",
  "SEARCH GROWTH",
  "CLOUD ARCHITECTURE",
];

const highlightIcons = [Layers3, Bot, Sparkles];

export function HomeHero() {
  const { t } = useLanguage();
  const translatedHighlights = t("hero.highlights");
  const translatedCapabilities = t("hero.capabilities");
  const sectionRef = useRef(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    setParallax({ x: normX, y: normY });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  const marqueeItems = [
    ...capabilities,
    ...capabilities,
    ...capabilities,
  ];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative isolate overflow-hidden bg-[#040812] pb-16 pt-12 text-white sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20"
    >
      {/* Ambient DevCrafter Multi-Color Radial Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35 blur-[130px] transition-transform duration-500"
          style={{
            background:
              "radial-gradient(circle at center, rgba(56, 198, 255, 0.45) 0%, transparent 70%)",
            transform: `translate3d(${parallax.x * -40}px, ${parallax.y * -40}px, 0)`,
          }}
        />
        <div
          className="absolute -right-24 top-12 h-[440px] w-[440px] rounded-full opacity-30 blur-[130px] transition-transform duration-500"
          style={{
            background:
              "radial-gradient(circle at center, rgba(16, 185, 129, 0.38) 0%, transparent 70%)",
            transform: `translate3d(${parallax.x * 55}px, ${parallax.y * 55}px, 0)`,
          }}
        />
        <div
          className="absolute -left-24 bottom-12 h-[420px] w-[420px] rounded-full opacity-30 blur-[130px] transition-transform duration-500"
          style={{
            background:
              "radial-gradient(circle at center, rgba(18, 119, 255, 0.45) 0%, transparent 70%)",
            transform: `translate3d(${parallax.x * 35}px, ${parallax.y * -35}px, 0)`,
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <HeroParticles />

      <div className="container relative z-10">
        {/* DevCrafter Centerpiece Hero with Orbiting 3D Floating Cards */}
        <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
          {/* Floating Left 3D UX Card (Desktop) */}
          <div
            className="pointer-events-auto absolute -left-4 top-6 z-20 hidden xl:block"
            style={{
              transform: `translate3d(${parallax.x * -45}px, ${parallax.y * -35}px, 0) rotate(-6deg)`,
              transition: "transform 220ms ease-out",
            }}
          >
            <TiltCard
              cursorLabel="DETAIL"
              className="w-60 overflow-hidden rounded-3xl border border-white/15 bg-slate-950/75 p-3.5 shadow-[0_25px_60px_rgba(0,0,0,0.65)] backdrop-blur-xl"
            >
              <div className="relative h-28 w-full overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
                  alt="Conversion UI/UX Design"
                  className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2.5 rounded-full border border-cyan-400/40 bg-slate-950/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                  1.1s Edge Speed
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between px-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-300">
                  UI/UX Atelier
                </span>
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_10px_#38c6ff]" />
              </div>
            </TiltCard>
          </div>

          {/* Floating Right 3D Engineering Card (Desktop) */}
          <div
            className="pointer-events-auto absolute -right-4 bottom-12 z-20 hidden xl:block"
            style={{
              transform: `translate3d(${parallax.x * 55}px, ${parallax.y * 45}px, 0) rotate(4deg)`,
              transition: "transform 220ms ease-out",
            }}
          >
            <TiltCard
              cursorLabel="EXPLORE"
              className="w-64 overflow-hidden rounded-3xl border border-emerald-400/30 bg-slate-950/80 p-3.5 shadow-[0_30px_70px_rgba(16,185,129,0.2)] backdrop-blur-xl"
            >
              <div className="relative h-32 w-full overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
                  alt="Full-Stack Engineering"
                  className="h-full w-full object-cover contrast-125 saturate-0 transition-all duration-500 hover:saturate-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-3 left-3 text-left">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-white">
                    Engineering
                  </p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                    +54% Avg Conversion
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Floating Top-Right Badge */}
          <div
            className="pointer-events-auto absolute right-[14%] top-2 z-20 hidden lg:block"
            style={{
              transform: `translate3d(${parallax.x * -25}px, ${parallax.y * 25}px, 0)`,
              transition: "transform 220ms ease-out",
            }}
          >
            <TiltCard className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/35 bg-white/[0.04] p-2 text-center shadow-2xl backdrop-blur-md">
              <span className="text-[10px] font-extrabold uppercase leading-tight tracking-widest text-cyan-300">
                24+ Live
                <br />
                US Demos
              </span>
            </TiltCard>
          </div>

          {/* Top Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.32em] text-cyan-300 shadow-[0_0_25px_rgba(56,198,255,0.2)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
            {t("hero.eyebrow")}
          </div>

          {/* Massive DevCrafter-Style Dual Stroked Display Headline */}
          <div className="mt-6 select-none">
            <div className="font-display text-[clamp(2.9rem,11vw,7.4rem)] font-black uppercase leading-[0.9] tracking-tight text-white drop-shadow-2xl">
              DIGITAL
            </div>
            <div
              className="font-display text-[clamp(2.9rem,11vw,7.4rem)] font-black uppercase leading-[0.92] tracking-tight text-transparent"
              style={{
                WebkitTextStroke: "2px rgba(56, 198, 255, 0.85)",
              }}
            >
              PRESTIGE
            </div>
          </div>

          {/* Subtitle Headline & Description */}
          <h1 className="mt-5 max-w-3xl text-balance font-display text-xl font-semibold leading-snug text-slate-100 sm:text-3xl">
            {t("hero.titleLead")}{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
              {t("hero.titleAccent")}
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg">
            {t("hero.description")}
          </p>

          {/* DevCrafter-Inspired Floating Glass Pill CTA Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 rounded-full border border-white/15 bg-slate-950/75 p-2.5 shadow-[0_25px_70px_rgba(0,0,0,0.65)] backdrop-blur-2xl sm:gap-4 sm:px-5 sm:py-3">
            <Link
              href="/contact"
              data-cursor="LET'S GO"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 px-6 text-xs font-extrabold uppercase tracking-[0.15em] text-slate-950 shadow-[0_0_30px_rgba(56,198,255,0.45)] transition-all duration-300 hover:scale-105 sm:h-12 sm:px-8 sm:text-sm"
            >
              <span>{t("hero.projectCta") || "Start a Project"}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="hidden h-7 w-px bg-white/15 sm:block" />

            <Link
              href="/website-development"
              data-cursor="EXPLORE"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10 sm:h-12 sm:px-7 sm:text-sm"
            >
              <span>Web Portfolios (24 Live)</span>
              <ArrowUpRight className="h-4 w-4 text-cyan-300" />
            </Link>

            <Link
              href="/case-studies"
              data-cursor="DETAIL"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-4 text-xs font-bold uppercase tracking-[0.15em] text-slate-300 transition-all duration-300 hover:text-cyan-300 sm:h-12 sm:px-5 sm:text-sm"
            >
              <span>Case Studies</span>
            </Link>
          </div>

          {/* Trust Checkmarks */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-slate-300 sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-400" />
              {t("hero.ownership")}
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-400" />
              {t("hero.scale")}
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-400" />
              {t("hero.partner")}
            </span>
          </div>
        </div>

        {/* 3 Interactive Hero Highlight Cards Below */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {heroHighlights.map((item, index) => {
            const Icon = highlightIcons[index] || Globe2;
            const translatedItem = translatedHighlights?.[index] ?? item;

            return (
              <TiltCard
                key={item.title}
                cursorLabel="EXPLORE"
                className="rounded-3xl"
              >
                <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-slate-500 group-hover:text-cyan-300">
                        0{index + 1} // PILLAR
                      </span>
                    </div>
                    <h2 className="mt-5 font-display text-lg font-bold text-white sm:text-xl">
                      {translatedItem.title}
                    </h2>
                    <p className="mt-2 text-xs leading-6 text-slate-300 sm:text-sm">
                      {translatedItem.description}
                    </p>
                  </div>
                </article>
              </TiltCard>
            );
          })}
        </div>
      </div>

      {/* Clean Non-Overlapping Capability Marquee */}
      <div className="mt-14 w-full overflow-hidden border-y border-white/10 bg-[#070d1c]/90 py-4 backdrop-blur-md">
        <InfiniteMarquee direction="left" speed="28s">
          {capabilities.map((cap, idx) => (
            <span
              key={cap}
              className="mx-3 inline-flex shrink-0 items-center gap-3 whitespace-nowrap rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-200 transition-colors duration-300 hover:border-cyan-400/50 hover:text-cyan-300 sm:text-sm"
            >
              <span className="h-2 w-2 shrink-0 rotate-45 rounded-sm bg-cyan-400 shadow-[0_0_10px_rgba(56,198,255,0.8)]" />
              <span>{translatedCapabilities?.[idx] ?? cap}</span>
            </span>
          ))}
        </InfiniteMarquee>
      </div>
    </section>
  );
}