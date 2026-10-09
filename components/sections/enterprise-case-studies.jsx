"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Layers3, Sparkles } from "lucide-react";

import { enterpriseCaseStudies } from "@/lib/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CyberCard } from "@/components/ui/CyberCard";

export function EnterpriseCaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative isolate overflow-hidden bg-[#E6F2FF] py-12 text-slate-900 sm:py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-96 w-[min(90vw,1000px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(18,119,255,0.14),transparent_70%)] blur-[110px]"
      />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-700/20 bg-white/85 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-800 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-brand-blue" />
            Verified Engineering Outcomes & Case Studies
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Enterprise Architecture Built for Measurable Business Impact.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">
            From 24-vertical US web rollouts to full-stack institutional platforms and AI-automated operations, explore how Zepra Tech engineers digital systems that scale.
          </p>
        </div>

        <div className="mt-10 grid gap-7 lg:grid-cols-2">
          {enterpriseCaseStudies.map((study) => {
            const isExternal = study.href.startsWith("http");
            return (
              <CyberCard
                key={study.id}
                className="flex flex-col justify-between rounded-[26px] border border-cyan-500/25 bg-gradient-to-b from-[#0e1f38] via-[#0b132b] to-[#060a17] p-6 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/60 sm:p-7"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <Badge className="border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                      {study.badge}
                    </Badge>
                    <span className="text-xs font-semibold text-slate-400">
                      {study.category}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold leading-snug text-white">
                    {study.title}
                  </h3>

                  {/* Key Metrics Grid */}
                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {study.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-center"
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
                      <strong className="text-rose-300">Challenge: </strong>
                      {study.challenge}
                    </div>
                    <div>
                      <strong className="text-emerald-300">Engineered Solution: </strong>
                      {study.solution}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
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

                  <Button
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-brand-blue to-brand-cyan text-slate-950 font-bold hover:brightness-110"
                  >
                    <Link
                      href={study.href}
                      {...(isExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      Explore Case Study
                      <ArrowUpRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CyberCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
