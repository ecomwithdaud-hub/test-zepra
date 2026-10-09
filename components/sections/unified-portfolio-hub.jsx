"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  FileText,
  Globe,
  Image as ImageIcon,
  Layers,
  Megaphone,
  Sparkles,
} from "lucide-react";

import { AeoStructuredAnswers } from "@/components/sections/aeo-structured-answers";
import { CaseStudySpotlight } from "@/components/sections/case-study-spotlight";
import { ContactSection } from "@/components/sections/contact-section";
import { EnterpriseCaseStudies } from "@/components/sections/enterprise-case-studies";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { UsaDemoShowcase } from "@/components/sections/usa-demo-showcase";
import { WikiRgShowcase } from "@/components/sections/wiki-rg-showcase";
import { TiltCard } from "@/components/ui/TiltCard";

const hubTabs = [
  {
    id: "all",
    label: "All Portfolio & Case Studies",
    badge: "Full Hub",
    icon: Layers,
  },
  {
    id: "web-demos",
    label: "Web Development (24 Live Demos)",
    badge: "24 Live",
    icon: Globe,
  },
  {
    id: "case-studies",
    label: "Case Studies & Architecture",
    badge: "7 Studies",
    icon: FileText,
  },
  {
    id: "client-websites",
    label: "Client Web Deployments",
    badge: "Live Sites",
    icon: Sparkles,
  },
  {
    id: "growth-creative",
    label: "Marketing & Creative Proof",
    badge: "Campaigns",
    icon: Megaphone,
  },
];

export function UnifiedPortfolioHub() {
  const [activeTab, setActiveTab] = useState("all");

  const showWebDemos = activeTab === "all" || activeTab === "web-demos";
  const showCaseStudies = activeTab === "all" || activeTab === "case-studies";
  const showClientWebsites =
    activeTab === "all" || activeTab === "client-websites";
  const showGrowthCreative =
    activeTab === "all" || activeTab === "growth-creative";

  return (
    <div className="bg-slate-950 text-white">
      {/* Top Unified Portfolio & Case Studies Hero + Sticky Filter Bar */}
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#040812] pb-10 pt-12 sm:pb-14 sm:pt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/4 top-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/12 blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-1/4 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-600/12 blur-[140px]"
        />

        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              Unified Portfolio & Case Studies Hub
            </div>

            <h1 className="mt-5 font-display text-4xl font-black uppercase leading-[0.96] tracking-tight text-white sm:text-6xl">
              Live Web Builds &{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                Verified Case Studies
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
              Explore our complete body of work in one place: 24 interactive US industry demo websites, production client deployments, full-stack architecture case studies, and growth marketing proof.
            </p>
          </div>

          {/* Interactive Hub Section Switcher */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 rounded-3xl border border-white/12 bg-slate-900/80 p-3 shadow-2xl backdrop-blur-xl">
            {hubTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-bold transition-all duration-300 sm:text-sm ${
                    isActive
                      ? "bg-gradient-to-r from-brand-blue to-brand-cyan text-slate-950 shadow-[0_0_25px_rgba(56,198,255,0.45)]"
                      : "border border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-400/40 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{tab.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold uppercase ${
                      isActive
                        ? "bg-slate-950/20 text-slate-950"
                        : "bg-cyan-400/15 text-cyan-300"
                    }`}
                  >
                    {tab.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 1: 24 Live USA Demo Websites (Web Development) */}
      {showWebDemos ? (
        <div id="web-development">
          <UsaDemoShowcase initialLimit={24} showViewAllLink={false} />
        </div>
      ) : null}

      {/* Section 2: Case Studies & Architecture Breakdowns */}
      {showCaseStudies ? (
        <div id="case-studies-section" className="border-t border-white/10">
          <CaseStudySpotlight />
          <EnterpriseCaseStudies />
          <WikiRgShowcase />
        </div>
      ) : null}

      {/* Section 3: Production Client Website Deployments */}
      {showClientWebsites ? (
        <div id="client-websites" className="border-t border-white/10">
          <PortfolioPreview showCta={false} />
        </div>
      ) : null}

      {/* Section 4: Social Media Marketing & Creative Thumbnail Proof */}
      {showGrowthCreative ? (
        <section
          id="growth-creative"
          className="relative overflow-hidden border-t border-white/10 bg-[#040812] py-16 sm:py-22"
        >
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">
                Specialized Growth & Creative Galleries
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                Paid Media Proof & Visual Storytelling
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                Inspect our dedicated campaign reporting dashboards, ad spend proof, and high-CTR YouTube thumbnail design systems.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <TiltCard cursorLabel="EXPLORE" className="rounded-[28px]">
                <Link
                  href="/social-media-marketing"
                  className="group flex h-full flex-col justify-between rounded-[28px] border border-white/15 bg-gradient-to-br from-[#0e1e38] via-[#091326] to-[#050a14] p-7 transition-all hover:border-cyan-400/50"
                >
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-bold text-cyan-300">
                      <Megaphone className="h-3.5 w-3.5" />
                      Performance Marketing & Ad Proof
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-bold text-white group-hover:text-cyan-300">
                      Social Media Marketing & Paid Ads Gallery
                    </h3>
                    <p className="mt-2.5 text-sm leading-7 text-slate-300">
                      Verified Meta & Google Ads campaign snapshots, ROAS metrics, cost-per-lead reductions, and audience scaling proof.
                    </p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300">
                    <span>Open Marketing Proof Gallery</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </TiltCard>

              <TiltCard cursorLabel="EXPLORE" className="rounded-[28px]">
                <Link
                  href="/thumbnail-designing"
                  className="group flex h-full flex-col justify-between rounded-[28px] border border-white/15 bg-gradient-to-br from-[#0e1e38] via-[#091326] to-[#050a14] p-7 transition-all hover:border-cyan-400/50"
                >
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 text-xs font-bold text-emerald-300">
                      <ImageIcon className="h-3.5 w-3.5" />
                      High-CTR Creative Systems
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-bold text-white group-hover:text-emerald-300">
                      Thumbnail Designing & Visual Concepts
                    </h3>
                    <p className="mt-2.5 text-sm leading-7 text-slate-300">
                      Before-and-after YouTube thumbnail transformations, creator brand visuals, and high-click-through cover layouts.
                    </p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
                    <span>Open Thumbnail Design Gallery</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </TiltCard>
            </div>
          </div>
        </section>
      ) : null}

      <AeoStructuredAnswers
        pageUrl="https://gozepra.tech/portfolio"
        pageTitle="Portfolio & Engineering Case Studies | Zepra Tech"
        aiSummaryTitle="What is included in the Zepra Tech Portfolio & Case Studies Hub?"
        aiSummaryBody="The Zepra Tech Portfolio Hub brings together 24 live interactive US business demo websites, full-stack institutional platforms like Wiki RG, e-commerce transformations, AI automation architectures, and verified growth marketing case studies."
      />

      <ContactSection showHeader={false} />
    </div>
  );
}
