import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronRight } from "lucide-react";

import { ContactSection } from "@/components/sections/contact-section";
import { serviceIconMap } from "@/components/shared/service-card";
import { CyberCircuitBackground } from "@/components/ui/CyberCircuitBackground";
import { services } from "@/lib/site";

const processSteps = [
  {
    title: "Discovery",
    description: "We align on your goals, audience, requirements, and success measures.",
  },
  {
    title: "Plan & Build",
    description: "We shape a clear delivery plan and complete the agreed service work.",
  },
  {
    title: "Review & Refine",
    description: "We review the work together, address feedback, and prepare a polished handoff.",
  },
  {
    title: "Launch & Support",
    description: "We help you put the deliverables to work and provide the agreed follow-up support.",
  },
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

  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
        <CyberCircuitBackground />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl"
        />
        <div className="container relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/services" className="transition-colors hover:text-cyan-300">
              Services
            </Link>
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
            <span aria-current="page" className="text-slate-200">{service.title}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
              {Icon ? <Icon aria-hidden="true" className="h-7 w-7" /> : null}
            </span>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Zepra Tech Services
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {service.fullDescription}
            </p>
            <Link
              href="/contact#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-premium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyanGlow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Get started
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white/60">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Core capabilities</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-950">
              What we can help you deliver
            </h2>
            <ul className="mt-6 space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-slate-700">
                  <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-slate-950">
              Typical deliverables
            </h2>
            <ul className="mt-5 space-y-3">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex items-start gap-3 text-sm leading-6 text-brand-slate">
                  <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-cyan-600" />
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell bg-slate-950 text-white">
        <div className="container">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Technology & tools
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold">
            A practical stack for the work
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {service.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-200"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#E6F2FF]">
        <div className="container">
          <p className="eyebrow">Our process</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-slate-950">
            Clear steps from brief to delivery
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-soft"
              >
                <span className="text-sm font-semibold tabular-nums text-cyan-700">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-brand-slate">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactSection showHeader={false} />
    </>
  );
}
