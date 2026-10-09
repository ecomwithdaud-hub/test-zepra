"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Globe2,
  Layers3,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroParticles } from "@/components/ui/HeroParticles";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";
import { useLanguage } from "@/components/providers/language-provider";
import { heroHighlights } from "@/lib/site";

const capabilities = [
  "Web platforms",
  "AI automation",
  "Ecommerce",
  "Search growth",
  "Paid media",
  "Product design",
];

const highlightIcons = [Layers3, Bot, Sparkles];

export function HomeHero() {
  const { t } = useLanguage();
  const translatedHighlights = t("hero.highlights");
  const translatedCapabilities = t("hero.capabilities");

  return (
    <section className="relative isolate overflow-hidden pb-8 pt-8 sm:pb-12 sm:pt-12 lg:pb-12 lg:pt-12">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_12%_8%,rgba(56,198,255,0.18),transparent_28%),radial-gradient(ellipse_at_88%_20%,rgba(18,119,255,0.14),transparent_30%),linear-gradient(180deg,rgba(239,247,255,0.7),rgba(248,251,255,0)_75%)]" />
      <HeroParticles />

      <div className="container relative z-10">
        <div className="grid items-center gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-6">
          <div className="max-w-2xl">
            <div className="eyebrow animate-slide-up">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
              {t("hero.eyebrow")}
            </div>

            <h1 className="mt-4 text-balance font-display text-[2.65rem] font-semibold leading-[1.04] text-slate-950 sm:text-6xl lg:text-[4.35rem]">
              {t("hero.titleLead")} {" "}
              <span className="headline-gradient">{t("hero.titleAccent")}</span>
            </h1>
            <p className="muted-copy mt-4 max-w-xl text-base sm:text-lg">
              {t("hero.description")}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="xl"
                className="hover:shadow-cyanGlow motion-reduce:transform-none"
              >
                <Link href="/contact">
                  {t("hero.projectCta")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="hover:shadow-cyanGlow motion-reduce:transform-none"
              >
                <Link href="/services">
                  {t("hero.capabilitiesCta")}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-slate-600">
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" />
                {t("hero.ownership")}
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" />
                {t("hero.scale")}
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" />
                {t("hero.partner")}
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px] lg:ml-auto">
            <div className="absolute -inset-8 -z-10 rounded-full bg-sky-300/25 blur-3xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-slate-700/70 bg-[#0B1220] p-5 text-white shadow-[0_32px_90px_rgba(15,35,65,0.28)] sm:p-7">
              <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_86%_0%,rgba(18,119,255,0.28),transparent_38%),radial-gradient(circle_at_0%_100%,rgba(56,198,255,0.12),transparent_42%)]" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {t("hero.systemLabel")}
                    </div>
                    <h2 className="mt-2 font-display text-lg font-semibold sm:text-xl">
                      {t("hero.systemTitle")}
                    </h2>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                    <Workflow className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-2 text-center text-[11px] font-semibold text-slate-400 sm:gap-3 sm:p-3 sm:text-xs">
                  <span className="rounded-xl bg-blue-500/15 px-2 py-2.5 text-blue-200">{t("hero.plan")}</span>
                  <span className="rounded-xl bg-white/[0.04] px-2 py-2.5">{t("hero.build")}</span>
                  <span className="rounded-xl bg-white/[0.04] px-2 py-2.5">{t("hero.improve")}</span>
                </div>

                <div className="mt-4 grid gap-3">
                  {heroHighlights.map((item, index) => {
                    const Icon = highlightIcons[index] || Globe2;
                    const translatedItem = translatedHighlights?.[index] ?? item;

                    return (
                      <article
                        key={item.title}
                        className={`hero-highlight rounded-2xl border border-white/10 bg-white/[0.055] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/30 hover:bg-white/[0.09] sm:p-5 ${index === 1 ? "hero-highlight-delay" : index === 2 ? "hero-highlight-delay-long" : ""}`}
                      >
                        <div className="flex items-start gap-3.5">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-200/10 bg-cyan-300/10 text-cyan-200">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <h3 className="text-sm font-semibold text-white sm:text-base">
                              {translatedItem.title}
                            </h3>
                            <p className="mt-1.5 text-xs leading-5 text-slate-300 sm:text-sm sm:leading-6">
                              {translatedItem.description}
                            </p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>

                <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40 motion-reduce:animate-none" />
                      <span className="relative inline-flex h-2.5 w-2.5 animate-live-pulse rounded-full bg-emerald-400 motion-reduce:animate-none" />
                    </span>
                    <span className="text-xs font-medium text-slate-300 sm:text-sm">
                      {t("hero.connectedTeam")}
                    </span>
                  </div>
                  <Sparkles className="h-4 w-4 shrink-0 text-cyan-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full overflow-hidden border-y border-slate-200/70 bg-white/60 py-4 sm:mt-8">
        <InfiniteMarquee direction="left" speed="28s">
          {capabilities.map((capability, index) => (
            <span
              key={capability}
              className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="h-1.5 w-1.5 animate-live-pulse rounded-full bg-brand-cyan motion-reduce:animate-none" />
              {translatedCapabilities?.[index] ?? capability}
            </span>
          ))}
        </InfiniteMarquee>
      </div>
    </section>
  );
}