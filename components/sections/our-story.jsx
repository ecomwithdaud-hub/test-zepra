"use client";

import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Target,
  Users,
  Compass,
  Code2,
  CheckCircle2,
  ArrowRight,
  Award,
  Globe2,
  Cpu,
  MessageCircle,
} from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { Button } from "@/components/ui/button";
import { teamMembers, siteMeta } from "@/lib/site";

const leadershipPillars = [
  {
    icon: Zap,
    title: "Speed As A Competitive Weapon",
    description:
      "We believe sluggish code kills conversions. Every web asset we build is engineered on Next.js 15 with sub-0.8s edge caching, passing strict Google Core Web Vitals with 95+ scores.",
  },
  {
    icon: Code2,
    title: "Zero Templates, 100% Bespoke Craft",
    description:
      "No off-the-shelf bloated WordPress themes. Every line of code, database schema, and interactive animation is crafted tailored to the client's business revenue model.",
  },
  {
    icon: Cpu,
    title: "Autonomous AI-First Architecture",
    description:
      "Under Mr. Daud Lashari's direction, we don't just build static pages—we embed intelligent 24/7 AI agents and CRM automation pipelines that capture, qualify, and book leads autonomously.",
  },
  {
    icon: ShieldCheck,
    title: "Unconditional Ownership & Transparency",
    description:
      "You receive 100% ownership of your GitHub source code, design assets, and production keys. No proprietary hostage fees, no hidden markups, and no vendor lock-in.",
  },
];

const impactStats = [
  { value: "150+", label: "Enterprise & High-Growth Deployments", sub: "Delivered on-time" },
  { value: "< 0.8s", label: "Average Global Edge Latency", sub: "99+ Lighthouse Mobile" },
  { value: "14 Days", label: "Average Sprint Deployment Time", sub: "Contractual SLA" },
  { value: "99.4%", label: "Client Retention & Satisfaction", sub: "Global US/UK/EU client base" },
];

export function OurStory() {
  const leadershipMember = teamMembers.find((m) => m.department === "Leadership") || teamMembers[0];
  const engineeringLeads = teamMembers.filter((m) => m.department === "Engineering").slice(0, 4);
  const growthLeads = teamMembers.filter((m) => m.department.includes("Growth") || m.department.includes("AI")).slice(0, 3);

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 pt-28 pb-20 text-white sm:pt-36 sm:pb-28">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[60rem] w-[80rem] -translate-x-1/2 [background:radial-gradient(ellipse_at_center,rgba(6,182,212,0.14),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 -z-10 h-[40rem] w-[40rem] [background:radial-gradient(circle,rgba(59,130,246,0.08),transparent_70%)]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[1600px]">
        {/* Eyebrow & Main Title */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            Our Story & Leadership Philosophy
          </div>

          <h1 className="mt-6 font-display text-4xl font-black tracking-tight text-white sm:text-6xl sm:leading-[1.15]">
            Engineered For Market Dominance.{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-400 bg-clip-text text-transparent">
              Led By Mr. Daud Lashari & Team.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-xl sm:leading-relaxed">
            Zepra Tech was founded on a singular, uncompromising principle: modern enterprises don’t need bloated, slow agencies billing hourly timesheets. They need precision digital weapons built for explosive conversion, extreme speed, and institutional credibility.
          </p>
        </div>

        {/* Founder Spotlight Card */}
        <div className="mt-16">
          <TiltCard cursorLabel="LEADERSHIP" className="rounded-3xl">
            <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-[#0a1224] to-slate-950 p-8 shadow-2xl sm:p-12">
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                {/* Left: Founder Persona & Direct Supervision */}
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/60 px-3.5 py-1 text-xs font-semibold text-cyan-300">
                    <Award className="h-3.5 w-3.5 text-cyan-400" />
                    Direct Hands-On Supervision
                  </div>

                  <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
                    Under the Supervision of Mr. Muhammad Daud Ali Lashari
                  </h2>

                  <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                    Founder, Chief Executive Officer & Lead Technical Strategist
                  </p>

                  <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                    <p>
                      At Zepra Tech, you never speak to junior offshore account managers who play telephone with your vision. Every major system architecture, Core Web Vitals benchmark, and conversion funnel is architected under the direct personal scrutiny of <strong className="text-white">Mr. Daud Lashari</strong> and our core senior leads.
                    </p>
                    <p>
                      Daud forged Zepra Tech after witnessing hundreds of businesses waste tens of thousands of dollars on slow, fragile WordPress themes and agency promises that never materialized. He instituted an uncompromising engineering culture where written SLAs, contractual performance guarantees, and radical transparency are non-negotiable.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Button asChild size="lg" className="bg-gradient-to-r from-cyan-400 to-blue-500 font-bold text-slate-950 shadow-lg shadow-cyan-500/20 hover:brightness-110">
                      <Link href={siteMeta.whatsappLink} target="_blank" rel="noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Direct WhatsApp With Daud
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-slate-700 bg-slate-900/60 text-white hover:bg-slate-800">
                      <Link href="/contact">
                        Schedule Executive Briefing
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Right: Key Supervision Metrics & Badges */}
                <div className="lg:col-span-5">
                  <div className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur-md">
                    <div className="border-b border-white/10 pb-4">
                      <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                        Operational Governance
                      </div>
                      <div className="mt-1 font-display text-xl font-bold text-white">
                        Founder-Led Delivery Guarantee
                      </div>
                    </div>

                    <ul className="space-y-3.5 text-xs text-slate-300 sm:text-sm">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                        <span><strong>100% Architecture Review:</strong> Every pull request and server schema is vetted for scale and security.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                        <span><strong>Direct Escalation Line:</strong> Enterprise partners receive a private WhatsApp & Slack communication channel.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                        <span><strong>Zero Junior Outsourcing:</strong> Work is executed entirely in-house by our battle-tested engineering team.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                        <span><strong>Global Standards:</strong> Built to serve high-ticket enterprises across the United States, UK, EU, and Pakistan.</span>
                      </li>
                    </ul>

                    <div className="rounded-xl border border-cyan-500/20 bg-cyan-950/30 p-3.5 text-center text-xs text-cyan-200">
                      <span className="font-bold text-white">Headquartered in Pakistan.</span> Delivering international enterprise standards worldwide.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* High-Impact Numerical Telemetry */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {impactStats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center backdrop-blur-sm transition-all hover:border-cyan-500/40"
            >
              <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                {stat.label}
              </div>
              <div className="mt-1 text-[11px] text-slate-400">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="mt-24">
          <div className="text-center">
            <h3 className="font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">
              The Four Pillars of Zepra Engineering
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400">
              The foundational ethos that sets our digital assets apart from ordinary digital agencies.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadershipPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-900/90"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="mt-5 font-display text-lg font-bold text-white">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* The Elite Core Team Matrix */}
        <div className="mt-24">
          <div className="flex flex-col justify-between gap-4 border-b border-slate-800 pb-6 sm:flex-row sm:items-end">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Engineering & Execution Force
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                The Specialists Behind Every Deployment
              </h3>
            </div>
            <p className="text-xs text-slate-400 sm:max-w-md">
              A synchronized powerhouse of full-stack engineers, AI researchers, project managers, and growth strategists under unified command.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 transition-all hover:border-cyan-500/40 hover:bg-slate-900/80"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-display text-lg font-bold text-white group-hover:text-cyan-300">
                      {member.name}
                    </h4>
                    <p className="text-xs font-semibold text-cyan-400">{member.role}</p>
                  </div>
                  <span className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-0.5 text-[10px] font-medium text-slate-300">
                    {member.department}
                  </span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-400">
                  {member.bio}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>{member.accent}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
