"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, MonitorSmartphone, ShoppingBag } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  developmentShowcases,
  livePortfolioLinks,
  webAppShowcases,
} from "@/lib/site";
import { useLanguage } from "@/components/providers/language-provider";
import { CyberCircuitBackground } from "@/components/ui/CyberCircuitBackground";

export function PortfolioPreview({
  showCta = true,
  eyebrow,
  title,
  description,
}) {
  const { t } = useLanguage();
  const content = t("websitePage.portfolio");

  return (
    <section id="website-development" className="section-shell relative isolate scroll-mt-32 overflow-hidden bg-slate-950 text-white border-t border-white/10">
      <CyberCircuitBackground />
      <div className="container relative z-10">
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-start">
          <div>
            <SectionHeading
              eyebrow={eyebrow ?? content.eyebrow}
              title={title ?? content.title}
              description={description ?? content.description}
            />

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {livePortfolioLinks.map((project, index) => {
                const translatedProject = content.liveProjects?.[index] ?? project;
                return (
                <Card
                  key={project.href}
                  className={`card-shine h-full border border-white/10 bg-slate-900/85 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-900 hover:shadow-2xl ${
                    index === 1 || index === 3 ? "md:translate-y-6" : ""
                  }`}
                >
                  <CardHeader className="gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <Badge variant="secondary" className="border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">{translatedProject.category}</Badge>
                        <div className="text-sm font-medium text-cyan-400">
                          {translatedProject.status}
                        </div>
                      </div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 shadow-glow">
                        {project.category === "Admin Panel" ? (
                          <MonitorSmartphone className="h-5 w-5" />
                        ) : (
                          <ShoppingBag className="h-5 w-5" />
                        )}
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-white">{translatedProject.title}</CardTitle>
                      <div className="mt-2 text-sm font-medium text-slate-400">
                        {project.domain}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <p className="text-sm leading-7 text-slate-300">
                      {translatedProject.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {translatedProject.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="border border-white/10 bg-white/5 text-slate-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="w-full justify-between">
                      <Link href={project.href} target="_blank" rel="noreferrer">
                        {content.visitProject}
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                );
              })}
            </div>

            {showCta ? (
              <div className="mt-8">
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    {content.startProject}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ) : null}
          </div>

          <div className="grid gap-6">
            {developmentShowcases.map((showcase, index) => {
              const translatedShowcase = content.developmentShowcases?.[index] ?? showcase;
              return (
              <Card
                key={showcase.title}
                className={`card-shine overflow-hidden border border-white/10 bg-slate-900/85 text-white backdrop-blur-md ${
                  index === 1 ? "xl:-translate-x-4" : ""
                }`}
              >
                <div className="border-b border-white/10 p-5">
                  <Badge variant="secondary" className="border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">{translatedShowcase.badge}</Badge>
                  <CardTitle className="mt-4 text-2xl text-white">{translatedShowcase.title}</CardTitle>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {translatedShowcase.summary}
                  </p>
                </div>
                <div className="p-5">
                  <Link
                    href={showcase.href ?? showcase.image}
                    target={showcase.href ? "_blank" : undefined}
                    rel={showcase.href ? "noreferrer" : undefined}
                    className="group block overflow-hidden rounded-[24px] border border-white/10 bg-slate-950"
                  >
                    {showcase.image ? (
                      <img
                        src={showcase.image}
                        alt={translatedShowcase.title}
                        decoding="async"
                        className="h-[440px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="relative flex h-[440px] flex-col justify-between overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.3),_transparent_42%),linear-gradient(145deg,_#020617,_#0f172a_58%,_#1e293b)] p-7 text-white">
                        <div className="absolute inset-0 opacity-70">
                          <div className="absolute -right-16 top-14 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl" />
                          <div className="absolute bottom-8 left-0 h-32 w-32 rounded-full bg-indigo-400/20 blur-3xl" />
                          <div className="absolute inset-x-6 top-24 h-px bg-white/10" />
                          <div className="absolute inset-x-6 top-28 h-px bg-white/5" />
                        </div>

                        <div className="relative flex items-center justify-between gap-4">
                          <div className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-100">
                            {content.livePortfolio}
                          </div>
                          <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-200">
                            {showcase.domain}
                          </div>
                        </div>

                        <div className="relative max-w-md">
                          <p className="text-xs font-medium uppercase tracking-[0.32em] text-sky-200/80">
                            {content.websitePresentation}
                          </p>
                          <div className="mt-4 text-4xl font-semibold leading-tight text-white">
                            {translatedShowcase.title}
                          </div>
                          <p className="mt-4 text-sm leading-7 text-slate-200/88">
                            {translatedShowcase.summary}
                          </p>
                        </div>

                        <div className="relative grid gap-3 sm:grid-cols-2">
                          {(translatedShowcase.previewPoints ?? []).map((point) => (
                            <div
                              key={point}
                              className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-slate-100 backdrop-blur-sm"
                            >
                              {point}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </Link>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {translatedShowcase.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="border border-white/10 bg-white/5 text-slate-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {showcase.href ? (
                    <Button asChild variant="outline" className="mt-4 w-full justify-between">
                      <Link
                        href={showcase.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {translatedShowcase.buttonLabel ?? content.visitProject}
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <SectionHeading
            eyebrow={content.webAppsEyebrow}
            title={content.webAppsTitle}
            description={content.webAppsDescription}
            align="center"
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {webAppShowcases.map((project, index) => {
              const translatedProject = content.webApps?.[index] ?? project;
              return (
              <Card
                key={project.href}
                className="card-shine overflow-hidden border border-white/10 bg-slate-900/85 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-2xl"
              >
                <CardContent className="p-0">
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                  >
                    <div className="overflow-hidden border-b border-white/10 bg-slate-950">
                      <img
                        src={project.image}
                        alt={project.title}
                        decoding="async"
                        className="h-[240px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </Link>

                  <div className="space-y-5 p-5">
                    <div className="space-y-3">
                      <Badge variant="secondary" className="border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">{translatedProject.category}</Badge>
                      <CardTitle className="text-2xl leading-tight text-white">
                        {translatedProject.title}
                      </CardTitle>
                      <p className="text-sm leading-7 text-slate-300">
                        {translatedProject.summary}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {translatedProject.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="border border-white/10 bg-white/5 text-slate-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button asChild variant="outline" className="w-full justify-between">
                      <Link href={project.href} target="_blank" rel="noreferrer">
                        {content.openProject}
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
