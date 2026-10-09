import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, CheckCircle2, ChevronRight, Cpu, Sparkles } from "lucide-react";

import { AeoStructuredAnswers } from "@/components/sections/aeo-structured-answers";
import { ContactSection } from "@/components/sections/contact-section";
import { UsaDemoShowcase } from "@/components/sections/usa-demo-showcase";
import { serviceIconMap } from "@/components/shared/service-card";
import { CyberCircuitBackground } from "@/components/ui/CyberCircuitBackground";
import { TiltCard } from "@/components/ui/TiltCard";
import { services } from "@/lib/site";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Analysis",
    description:
      "We analyze your business model, target audience, and technical requirements to create a clear strategic roadmap.",
  },
  {
    number: "02",
    title: "Architecture & UI/UX Planning",
    description:
      "Our team designs the conversion flow, visual system, and technical specifications before writing a single line of code.",
  },
  {
    number: "03",
    title: "Engineering & Build",
    description:
      "Senior engineers build your solution using modern, high-speed frameworks, clean code, and conversion-focused components.",
  },
  {
    number: "04",
    title: "Testing, QA & Speed Tuning",
    description:
      "Rigorous cross-device testing ensures security, mobile responsiveness, and sub-second Core Web Vitals performance.",
  },
  {
    number: "05",
    title: "Production Deployment",
    description:
      "Seamless launch on edge infrastructure with analytics, schema SEO, and team training/documentation.",
  },
  {
    number: "06",
    title: "Support & Growth Iteration",
    description:
      "Ongoing monitoring, updates, and conversion optimization keep your digital asset performing at its peak.",
  },
];

const coreBenefits = [
  "Tailored to Your Exact Business Goals",
  "Scalable & Future-Proof Architecture",
  "Sub-Second Mobile & Edge Performance",
  "100% IP & Source Code Ownership",
  "Faster Time-to-Market with Weekly Demos",
  "Seamless CRM, Payment & AI Integrations",
  "Built-In Technical SEO & Schema Markup",
  "Dedicated Post-Launch Engineering Support",
];

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  return service
    ? {
        title: service.title,
        description: service.shortDescription,
      }
    : {};
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  const Icon = serviceIconMap[service.icon];
  const enginePreview =
    service.technologies?.slice(0, 4).join(" • ") || "Next.js • React • Cloud";

  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
        <CyberCircuitBackground />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl"
        />
        <div className="container relative z-10">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-slate-400"
          >
            <Link
              href="/services"
              className="transition-colors hover:text-cyan-300"
            >
              Services
            </Link>
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
            <span aria-current="page" className="text-slate-200">
              {service.title}
            </span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                {Icon ? <Icon aria-hidden="true" className="h-7 w-7" /> : null}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold text-cyan-300">
                <Cpu className="h-3.5 w-3.5" />
                Engine: {enginePreview}
              </span>
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Zepra Tech Services
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {service.fullDescription}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact#contact"
                data-cursor="LET'S GO"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-premium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyanGlow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Start Your Project
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link
                href="/case-studies"
                data-cursor="EXPLORE"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-cyan-400/40 hover:bg-white/10"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases vs Deliverables + Core Benefits */}
      <section className="section-shell bg-white/60">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            <TiltCard className="rounded-3xl">
              <div className="h-full rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-soft sm:p-8">
                <p className="eyebrow">Use Cases & Capabilities</p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-slate-950 sm:text-3xl">
                  When to choose our {service.title}
                </h2>
                <ul className="mt-6 space-y-4">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>

            <TiltCard className="rounded-3xl">
              <div className="h-full rounded-3xl border border-slate-200/80 bg-slate-950 p-6 text-white shadow-soft sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Production Deliverables
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
                  What you get on delivery
                </h2>
                <ul className="mt-6 space-y-3.5">
                  {service.deliverables.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-200"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-1 h-4 w-4 shrink-0 text-emerald-400"
                      />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </div>

          {/* 8 Core Benefits Grid inspired by DevCrafter */}
          <div className="mt-12 rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft sm:p-8">
            <p className="eyebrow">Why Choose Zepra Tech</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-slate-950">
              Engineered for measurable business ROI
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {coreBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-slate-50/90 p-3.5 text-xs font-semibold text-slate-800 sm:text-sm"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-600" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {slug === "web-development" ? (
        <UsaDemoShowcase initialLimit={12} showViewAllLink={true} />
      ) : null}

      <section className="section-shell bg-slate-950 text-white">
        <div className="container">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Technology & Tools
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold">
            Production Stack & Engineering Ecosystem
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {service.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-cyan-400/25 bg-white/[0.06] px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400 hover:bg-cyan-400/15"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Step Engineering Methodology */}
      <section className="section-shell bg-[#E6F2FF]">
        <div className="container">
          <p className="eyebrow">Our Process</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-slate-950">
            6-Step Methodology from Discovery to Scale
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <TiltCard key={step.number} className="rounded-2xl">
                <article className="h-full rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-soft">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 font-mono text-xs font-bold text-cyan-300">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-brand-slate">
                    {step.description}
                  </p>
                </article>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <AeoStructuredAnswers
        pageUrl={`https://gozepra.tech/services/${service.slug}`}
        pageTitle={`${service.title} | Zepra Tech`}
        aiSummaryTitle={`What is ${service.title} at Zepra Tech?`}
        aiSummaryBody={service.fullDescription}
      />

      <ContactSection showHeader={false} />
    </>
  );
}
