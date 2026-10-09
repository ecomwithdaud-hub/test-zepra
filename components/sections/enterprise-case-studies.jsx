"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  Eye,
  Layers3,
  Sparkles,
  X,
} from "lucide-react";

import { enterpriseCaseStudies } from "@/lib/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CyberCard } from "@/components/ui/CyberCard";
import { TiltCard } from "@/components/ui/TiltCard";

const categories = [
  "All Case Studies",
  "Website Development",
  "Full-Stack Web Platform",
  "Ecommerce Solutions",
  "AI Agents & SaaS",
  "Growth & Marketing",
];

export function EnterpriseCaseStudies() {
  const [activeCategory, setActiveCategory] = useState("All Case Studies");
  const [selectedStudy, setSelectedStudy] = useState(null);

  const filteredStudies = useMemo(() => {
    if (activeCategory === "All Case Studies") return enterpriseCaseStudies;
    return enterpriseCaseStudies.filter(
      (study) => study.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      id="case-studies"
      className="relative isolate overflow-hidden bg-slate-950 py-14 text-white sm:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-16 -z-10 h-96 w-96 rounded-full bg-cyan-500/12 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 bottom-16 -z-10 h-96 w-96 rounded-full bg-blue-600/12 blur-[130px]"
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            Verified Engineering Outcomes & Client Case Studies
          </div>
          <h1 className="mt-5 font-display text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Enterprise Case Studies & Architecture Breakdowns.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            Explore how Zepra Tech solves real operational, technical, and growth challenges across US industry web rollouts, institutional MERN platforms, high-velocity e-commerce, and autonomous AI pipelines.
          </p>

          {/* Category Filter Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                    isActive
                      ? "bg-gradient-to-r from-brand-blue to-brand-cyan text-slate-950 shadow-[0_0_24px_rgba(56,198,255,0.4)]"
                      : "border border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-400/40 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {filteredStudies.map((study) => {
            const isExternal = study.href.startsWith("http");
            return (
              <TiltCard
                key={study.id}
                cursorLabel="EXPLORE"
                className="rounded-[28px]"
              >
                <CyberCard
                  className="group flex h-full flex-col justify-between rounded-[28px] border border-cyan-500/25 bg-gradient-to-b from-[#0e1f38] via-[#0b132b] to-[#060a17] p-6 text-white shadow-2xl transition-all duration-300 hover:border-cyan-400/60 sm:p-7"
                >
                  <div>
                    {/* Image Banner */}
                    {study.image ? (
                      <div className="relative mb-6 h-56 w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                        <img
                          src={study.image}
                          alt={study.title}
                          loading="lazy"
                          className="h-full w-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
                        <div className="absolute inset-x-4 top-3 flex items-center justify-between gap-2">
                          <Badge className="border border-cyan-400/30 bg-slate-950/80 text-cyan-300 backdrop-blur-md">
                            {study.badge}
                          </Badge>
                          {study.timeline ? (
                            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-slate-950/80 px-3 py-1 text-[11px] font-medium text-slate-200 backdrop-blur-md">
                              <Clock className="h-3 w-3 text-amber-400" />
                              {study.timeline}
                            </span>
                          ) : null}
                        </div>
                        <div className="absolute inset-x-4 bottom-3 flex items-center justify-between">
                          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                            {study.category}
                          </span>
                          <span className="text-xs text-slate-300">
                            Client: {study.client}
                          </span>
                        </div>
                      </div>
                    ) : null}

                    <h2 className="font-display text-2xl font-bold leading-snug text-white">
                      {study.title}
                    </h2>

                    {/* Key Metrics Grid */}
                    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {study.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-center transition-colors duration-300 group-hover:border-cyan-400/30"
                        >
                          <div className="font-display text-xl font-bold text-cyan-300 sm:text-2xl">
                            {metric.value}
                          </div>
                          <div className="mt-1 text-[11px] font-medium text-slate-300">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Challenge & Solution */}
                    <div className="mt-5 space-y-3 rounded-2xl border border-white/10 bg-slate-950/55 p-4 text-xs leading-6 text-slate-300 sm:text-sm">
                      <div>
                        <strong className="text-rose-300">Business Challenge: </strong>
                        {study.challenge}
                      </div>
                      <div>
                        <strong className="text-emerald-300">Engineered Solution: </strong>
                        {study.solution}
                      </div>
                    </div>

                    {/* Deliverables */}
                    {study.deliverables?.length ? (
                      <div className="mt-5">
                        <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                          Key Engineering Deliverables
                        </div>
                        <ul className="mt-2.5 grid gap-2 sm:grid-cols-2">
                          {study.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-xs text-slate-200"
                            >
                              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-6 space-y-4 border-t border-white/10 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11px] font-medium text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        data-cursor="DETAIL"
                        onClick={() => setSelectedStudy(study)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/35 bg-cyan-400/10 px-4 py-2.5 text-xs font-semibold text-cyan-200 transition-all hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white sm:text-sm"
                      >
                        <Eye className="h-4 w-4" />
                        <span>Case Study Breakdown</span>
                      </button>

                      <Link
                        href={study.href}
                        data-cursor="VIEW LIVE"
                        {...(isExternal
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan px-4 py-2.5 text-xs font-bold text-slate-950 shadow-md transition-all hover:brightness-110 sm:text-sm"
                      >
                        <span>View Live Proof</span>
                        {isExternal ? (
                          <ExternalLink className="h-4 w-4" />
                        ) : (
                          <ArrowUpRight className="h-4 w-4" />
                        )}
                      </Link>
                    </div>
                  </div>
                </CyberCard>
              </TiltCard>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedStudy ? (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedStudy(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border border-cyan-400/30 bg-[#081121] p-6 text-white shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <Badge className="border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                  {selectedStudy.badge}
                </Badge>
                <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                  {selectedStudy.title}
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Client: {selectedStudy.client} • Category: {selectedStudy.category} • {selectedStudy.timeline}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedStudy(null)}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {selectedStudy.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 text-center"
                  >
                    <div className="font-display text-2xl font-bold text-cyan-300">
                      {m.value}
                    </div>
                    <div className="mt-1 text-xs text-slate-300">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-sm leading-7 text-slate-200">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-300">
                    The Problem & Operational Bottleneck
                  </div>
                  <p className="mt-1">{selectedStudy.challenge}</p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Zepra Tech Architecture & Solution
                  </div>
                  <p className="mt-1">{selectedStudy.solution}</p>
                </div>
              </div>

              {selectedStudy.deliverables?.length ? (
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Complete Deliverables
                  </div>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {selectedStudy.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                <Link
                  href={selectedStudy.href}
                  onClick={() => setSelectedStudy(null)}
                  {...(selectedStudy.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan px-5 py-3 text-sm font-bold text-slate-950 shadow-lg hover:brightness-110"
                >
                  <span>Explore Live Deployment / Proof</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setSelectedStudy(null)}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <span>Start a Similar Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
