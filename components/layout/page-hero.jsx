"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CyberCircuitBackground } from "@/components/ui/CyberCircuitBackground";
import { useLanguage } from "@/components/providers/language-provider";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  stats = [],
  translationKey,
}) {
  const { t } = useLanguage();
  const translated = translationKey ? t(translationKey) : null;
  const resolvedEyebrow = translated?.eyebrow ?? eyebrow;
  const resolvedTitle = translated?.title ?? title;
  const resolvedDescription = translated?.description ?? description;
  const resolvedPrimaryAction = primaryAction
    ? { ...primaryAction, label: translated?.primaryAction ?? primaryAction.label }
    : null;
  const resolvedSecondaryAction = secondaryAction
    ? { ...secondaryAction, label: translated?.secondaryAction ?? secondaryAction.label }
    : null;

  return (
    <section className="section-shell relative isolate overflow-hidden pt-16">
      <CyberCircuitBackground />
      <div className="container relative z-10">
        <div className="surface-panel relative overflow-hidden bg-white/[0.88] px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="absolute inset-y-0 right-0 hidden w-2/5 bg-brand-radial opacity-90 lg:block" />
          <div className="relative max-w-4xl">
            {resolvedEyebrow ? <div className="eyebrow">{resolvedEyebrow}</div> : null}
            <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {resolvedTitle}
            </h1>
            <p className="muted-copy mt-6 max-w-3xl text-base md:text-lg">{resolvedDescription}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {resolvedPrimaryAction ? (
                <Button asChild size="xl">
                  <Link href={resolvedPrimaryAction.href}>
                    {resolvedPrimaryAction.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              ) : null}
              {resolvedSecondaryAction ? (
                <Button asChild size="xl" variant="outline">
                  <Link href={resolvedSecondaryAction.href}>{resolvedSecondaryAction.label}</Link>
                </Button>
              ) : null}
            </div>

            {stats.length ? (
              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-[22px] border border-slate-200/70 bg-white/[0.85] p-5 shadow-soft">
                    <div className="font-display text-2xl font-semibold text-slate-950">{stat.value}</div>
                    <div className="mt-2 text-sm leading-6 text-brand-slate">{stat.label}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
