"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Building2,
  CheckCircle2,
  Clock,
  Compass,
  FileText,
  Globe2,
  HelpCircle,
  Layers,
  MessageCircle,
  PhoneCall,
  Scissors,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  TrendingUp,
  Truck,
  UtensilsCrossed,
  Wrench,
  Zap,
} from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { siteMeta } from "@/lib/site";

// Industry Profiles tailored to real-world clients
const INDUSTRY_PROFILES = [
  {
    id: "contractors",
    name: "Contractors & Home Services",
    subtitle: "Roofing, Plumbing, HVAC, Electricians & Auto",
    icon: Wrench,
    badge: "Most Popular For Local Leads",
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/30",
    accent: "text-amber-400",
    headline: "Turn Google searches into emergency calls and booked service jobs.",
    plainExplanation:
      "When someone's roof leaks or pipe bursts, they don't care about coding languages. They want a phone number they can trust in 3 seconds. We build high-speed mobile websites with tap-to-call buttons, instant quote calculators, and top ranking on Google Maps so local homeowners call you first.",
    whatWeDeliver: [
      "Tap-to-Call emergency buttons on every mobile screen",
      "Instant estimate & zip code service area checkers",
      "Google Maps local optimization (#1 in your service radius)",
      "Automated lead alerts sent straight to your phone & WhatsApp",
    ],
    liveDemos: [
      { name: "Summit Commercial Roofing", demoUrl: "https://summit-commercial-roofing.vercel.app/" },
      { name: "ClearFlow Plumbing & Drain", demoUrl: "https://clearflow-plumbing.vercel.app/" },
      { name: "Apex Precision Auto Care", demoUrl: "https://apex-auto-care.vercel.app/" },
    ],
  },
  {
    id: "healthcare",
    name: "Clinics, MedSpas & Doctors",
    subtitle: "Dentists, Aesthetic Clinics, Wellness & Doctors",
    icon: Stethoscope,
    badge: "High Patient Trust",
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/30",
    accent: "text-cyan-400",
    headline: "Inspire confidence, showcase before/afters, and book appointments 24/7.",
    plainExplanation:
      "Patients look for clean professionalism, verified credentials, and an effortless way to book a consultation without waiting on hold. We give your practice a medical-grade online image with automated appointment booking and patient intake forms.",
    whatWeDeliver: [
      "HIPAA/privacy-conscious online consultation booking",
      "Interactive before-and-after treatment visual galleries",
      "Patient reviews & doctor credential trust cards",
      "24/7 automated WhatsApp bot for booking inquiries",
    ],
    liveDemos: [
      { name: "Glow Aesthetics & MedSpa", demoUrl: "https://glow-medspa.vercel.app/" },
      { name: "Apex Family Dental Clinic", demoUrl: "https://apex-family-dental.vercel.app/" },
    ],
  },
  {
    id: "textiles-manufacturing",
    name: "Textiles, Manufacturing & Export",
    subtitle: "Garments, Fabrics, Mills & B2B Production",
    icon: Scissors,
    badge: "Built for Wholesale & Exporters",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
    accent: "text-emerald-400",
    headline: "Showcase manufacturing capacity, digital catalogs & secure international buyers.",
    plainExplanation:
      "Whether you run a textile mill in Faisalabad exporting containers to Europe or a domestic manufacturer supplying brands, international buyers need to verify your factory certifications, machine capacity, fabric specs, and send bulk RFQ inquiries directly.",
    whatWeDeliver: [
      "Digital swatch & high-res fabric product catalogs",
      "Factory machinery, GSM specifications & compliance certifications",
      "International RFQ (Request For Quotation) inquiry portal",
      "Direct WhatsApp & email communication for wholesale buyers",
    ],
    liveDemos: [
      { name: "Silk & Cotton Mills Portal", demoUrl: "/portfolio#client-websites" },
      { name: "B2B Manufacturing Architecture", demoUrl: "/case-studies" },
    ],
  },
  {
    id: "retail-ecommerce",
    name: "Retail, Boutiques & E-Commerce",
    subtitle: "Fashion, Accessories, Jewelry & Consumer Brands",
    icon: ShoppingBag,
    badge: "Higher Conversion Rates",
    color: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/30",
    accent: "text-pink-400",
    headline: "A fast, stylish store with a smart assistant that takes orders while you sleep.",
    plainExplanation:
      "Slow shopping websites lose 50% of shoppers before they even see a product. We build lightning-fast online stores with smooth checkouts and automated WhatsApp assistants that answer customer questions about sizing, delivery, and payments instantly.",
    whatWeDeliver: [
      "Sub-second load times that keep mobile shoppers buying",
      "Automated WhatsApp order notifications & status tracking",
      "Cash on Delivery (COD) & card payment integrations",
      "Abandoned cart recovery systems that bring back lost sales",
    ],
    liveDemos: [
      { name: "Moda Lux Apparel Store", demoUrl: "/website-development" },
      { name: "Wiki RG High-Speed Store", demoUrl: "/portfolio#web-demos" },
    ],
  },
  {
    id: "restaurants-hospitality",
    name: "Restaurants & Hospitality",
    subtitle: "Cafes, Fine Dining, Bistros & Event Venues",
    icon: UtensilsCrossed,
    badge: "Local Foot Traffic",
    color: "from-red-500/20 to-orange-500/20",
    border: "border-red-500/30",
    accent: "text-red-400",
    headline: "Mouth-watering visual menus, table reservations, and more diners in your seats.",
    plainExplanation:
      "When people are hungry, they look up menus on their phones. We build gorgeous, mobile-friendly menus that load instantly, with one-tap Google Maps directions and table booking so you stay full on weekends.",
    whatWeDeliver: [
      "Mobile-optimized photo menus with dietary & pricing tags",
      "Instant table reservation system with SMS confirmation",
      "One-tap directions to your front door on Google Maps",
      "Private event & catering inquiry forms",
    ],
    liveDemos: [
      { name: "Veloce Italian Bistro", demoUrl: "https://veloce-bistro.vercel.app/" },
    ],
  },
  {
    id: "tech-startups",
    name: "Tech Startups & Modern Brands",
    subtitle: "SaaS Platforms, AI Tools & Digital Enterprises",
    icon: Zap,
    badge: "Advanced Next.js 15 & AI",
    color: "from-indigo-500/20 to-purple-500/20",
    border: "border-indigo-500/30",
    accent: "text-indigo-400",
    headline: "Silicon Valley-grade Next.js architecture, AI agents, and custom software.",
    plainExplanation:
      "If you do understand technology, you will appreciate our craftsmanship: Next.js 15 App Router, React Server Components, sub-0.8s edge caching, custom LLM fine-tuning, autonomous CRM agents, and bank-grade data security.",
    whatWeDeliver: [
      "100% bespoke Next.js 15 & Tailwind CSS codebases",
      "Autonomous AI bots & CRM pipeline integrations",
      "Multi-region edge hosting with 99+ Google Lighthouse scores",
      "Full GitHub source code ownership with zero proprietary lock-in",
    ],
    liveDemos: [
      { name: "24 Live US Web Demos", demoUrl: "/portfolio#web-demos" },
      { name: "Enterprise Architecture Studies", demoUrl: "/case-studies" },
    ],
  },
];

// Plain English Solutions
const PLAIN_ENGLISH_SOLUTIONS = [
  {
    number: "01",
    title: "Your 24/7 Digital Storefront",
    subtitle: "Web Development in Plain English",
    icon: Globe2,
    badge: "Credibility & Trust",
    description:
      "A fast, beautiful website that looks established, works effortlessly on phones, and gives customers the confidence to pick up the phone or place an order.",
    bullets: [
      "Loads in under 1 second on any mobile network",
      "Clear contact numbers, service lists & pricing guides",
      "You own 100% of the website forever (no monthly hostage fees)",
    ],
  },
  {
    number: "02",
    title: "Your 24/7 Virtual Assistant",
    subtitle: "AI Automation in Plain English",
    icon: Bot,
    badge: "Never Miss A Lead",
    description:
      "A smart digital assistant on your WhatsApp and website. When customers message at midnight, on weekends, or while you're busy on a job, it answers them in 5 seconds and books the lead.",
    bullets: [
      "Answers common pricing, timing, and service questions",
      "Collects customer phone numbers and job details",
      "Sends qualified leads straight to your personal phone",
    ],
  },
  {
    number: "03",
    title: "Getting Found Before Competitors",
    subtitle: "SEO & Growth in Plain English",
    icon: Search,
    badge: "More Customers Finding You",
    description:
      "When local customers search on Google, TikTok, or Instagram for what you sell, your business shows up at the top with great reviews and proof of your work.",
    bullets: [
      "Rank at the top of local Google Maps in your area",
      "Targeted ads on Meta & TikTok aimed only at real buyers",
      "Showcase verified customer reviews and past projects",
    ],
  },
  {
    number: "04",
    title: "Zero Tech Headaches For You",
    subtitle: "Managed Care in Plain English",
    icon: ShieldCheck,
    badge: "Peace of Mind",
    description:
      "You run your business. We handle all hosting, domain renewals, security, speed updates, and technical maintenance. You never have to write code or worry about your site crashing.",
    bullets: [
      "100% managed hosting and security encryption",
      "Direct WhatsApp access to Mr. Daud Lashari & senior developers",
      "Free updates and changes whenever your services grow",
    ],
  },
];

// 3-Step Simple Process
const HOW_IT_WORKS_STEPS = [
  {
    step: "1",
    title: "15-Minute Friendly Chat",
    duration: "Day 1",
    description:
      "No tech jargon or confusing buzzwords. Tell us on a call or via WhatsApp what your business does, who your customers are, and what results you want.",
    icon: PhoneCall,
  },
  {
    step: "2",
    title: "We Build Everything 100% Done-For-You",
    duration: "Days 2 - 12",
    description:
      "Our team writes the text, designs the visuals, tests on all mobile devices, and connects your WhatsApp and phone. You review progress without any stress.",
    icon: Layers,
  },
  {
    step: "3",
    title: "Hand-off & Ongoing Peace of Mind",
    duration: "Day 14 & Beyond",
    description:
      "We launch your site, give you a simple 5-minute video guide, and Mr. Daud Lashari's team stays on standby whenever you need anything updated.",
    icon: CheckCircle2,
  },
];

export function HumanBusinessBridge() {
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRY_PROFILES[0]);
  const [mode, setMode] = useState("plain"); // 'plain' or 'technical'

  return (
    <section className="relative overflow-hidden bg-[#030712] py-20 text-white sm:py-28">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-500/15 via-blue-500/5 to-transparent blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[130px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header: Plain English Promise */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" />
            Simple & Transparent For Business Owners
          </div>

          <h2 className="mt-5 font-display text-3xl font-black tracking-tight text-white sm:text-5xl sm:leading-tight">
            No Tech Jargon. Just{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
              Real Results For Your Business.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-lg">
            Whether you run a roofing company, a dental clinic, a textile factory, or an online boutique—you do not need to understand coding or artificial intelligence.{" "}
            <span className="font-semibold text-white">
              Under the supervision of Mr. Daud Lashari and our specialized team
            </span>
            , we build your website, bring you customers, and handle all the technology from A to Z.
          </p>

          {/* Mode Switcher Pill */}
          <div className="mt-7 inline-flex items-center rounded-full border border-white/15 bg-slate-900/90 p-1.5 shadow-xl backdrop-blur-xl">
            <button
              onClick={() => setMode("plain")}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold transition-all sm:text-sm ${
                mode === "plain"
                  ? "bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 shadow-md"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <span>💡 Plain English (For Business Owners)</span>
            </button>
            <button
              onClick={() => setMode("technical")}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold transition-all sm:text-sm ${
                mode === "technical"
                  ? "bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 shadow-md"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <span>⚡ Deep Tech & Architecture (For CTOs)</span>
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* INTERACTIVE INDUSTRY MATCH MAKER */}
        {/* ============================================================== */}
        <div className="mt-16 rounded-3xl border border-white/12 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 backdrop-blur-xl sm:p-10">
          <div className="flex flex-col items-start justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                Step 1: Choose Your Business Type
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
                See Exactly What We Build For Your Industry
              </h3>
            </div>
            <span className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-medium text-slate-300">
              Click any industry to see live solutions
            </span>
          </div>

          {/* Industry Selection Buttons */}
          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
            {INDUSTRY_PROFILES.map((ind) => {
              const Icon = ind.icon;
              const isSelected = selectedIndustry.id === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`group flex flex-col items-center rounded-2xl border p-4 text-center transition-all ${
                    isSelected
                      ? "border-cyan-400 bg-cyan-400/10 shadow-[0_0_25px_rgba(56,198,255,0.25)]"
                      : "border-white/10 bg-slate-950/60 hover:border-white/25 hover:bg-white/[0.04]"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                      isSelected
                        ? "bg-cyan-400 text-slate-950"
                        : "bg-white/5 text-slate-300 group-hover:text-cyan-300"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="mt-3 text-xs font-bold text-white sm:text-sm">
                    {ind.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Industry Detail Showcase */}
          <div className="mt-8 rounded-2xl border border-white/15 bg-slate-950/80 p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Clear Explanation & Deliverables */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
                  <span>{selectedIndustry.badge}</span>
                </div>

                <h4 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                  {selectedIndustry.headline}
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {selectedIndustry.plainExplanation}
                </p>

                <div className="mt-6 space-y-2.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    What we build & set up for you:
                  </p>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {selectedIndustry.whatWeDeliver.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 rounded-xl border border-white/8 bg-white/[0.03] p-3 text-xs font-medium text-slate-200 sm:text-sm"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Live Demos & Fast Action */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-[#0a1428] via-[#050c18] to-slate-950 p-6 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                      Ready-To-Inspect Live Demos
                    </span>
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  <p className="mt-2 text-xs text-slate-300">
                    See working examples we engineered for this exact industry:
                  </p>

                  <div className="mt-4 space-y-2.5">
                    {selectedIndustry.liveDemos.map((demo, idx) => (
                      <a
                        key={idx}
                        href={demo.demoUrl}
                        target={demo.demoUrl.startsWith("http") ? "_blank" : "_self"}
                        rel="noreferrer"
                        className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3.5 transition-all hover:border-cyan-400 hover:bg-cyan-400/10"
                      >
                        <span className="text-xs font-semibold text-white group-hover:text-cyan-300 sm:text-sm">
                          {demo.name}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-5 text-center">
                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 py-3 text-xs font-extrabold uppercase tracking-wider text-slate-950 transition-all hover:scale-[1.02] shadow-lg"
                    >
                      <span>Get a Website Like This For Your Business</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <p className="mt-2 text-[11px] text-slate-400">
                      Free consultation • Direct chat with Mr. Daud Lashari & team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 4 PLAIN ENGLISH CORE SERVICES */}
        {/* ============================================================== */}
        <div className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              Everything Under One Roof
            </p>
            <h3 className="mt-2 font-display text-3xl font-black text-white sm:text-4xl">
              What We Actually Solve For You
            </h3>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              You don’t need 5 different agencies for websites, ads, and support. We provide complete turnkey execution.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PLAIN_ENGLISH_SOLUTIONS.map((sol) => {
              const Icon = sol.icon;
              return (
                <TiltCard key={sol.number} cursorLabel="VIEW" className="rounded-3xl">
                  <div className="group flex h-full flex-col justify-between rounded-3xl border border-white/12 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-7 transition-all hover:border-cyan-400/50">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                          <Icon className="h-6 w-6" />
                        </span>
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500">
                          {sol.number} // SERVICE
                        </span>
                      </div>

                      <div className="mt-5">
                        <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-0.5 text-[11px] font-bold text-cyan-300">
                          {sol.badge}
                        </span>
                        <h4 className="mt-2 font-display text-xl font-bold text-white group-hover:text-cyan-300">
                          {sol.title}
                        </h4>
                        <p className="text-xs font-semibold text-slate-400">
                          {sol.subtitle}
                        </p>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-slate-300">
                        {sol.description}
                      </p>

                      <ul className="mt-5 space-y-2">
                        {sol.bullets.map((b, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-center gap-2 text-xs font-medium text-slate-300"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between text-xs font-bold text-cyan-300">
                      <span>100% Done-For-You Delivery</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3-STEP "HOW IT WORKS" ROADMAP (DISPELLING TECH FEAR) */}
        {/* ============================================================== */}
        <div className="mt-24 rounded-3xl border border-white/12 bg-gradient-to-b from-[#060c1c] via-[#040814] to-slate-950 p-8 sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
              <Clock className="h-3.5 w-3.5" />
              Painless Client Journey
            </span>
            <h3 className="mt-4 font-display text-3xl font-black text-white sm:text-4xl">
              How Easy It Is To Work With Us
            </h3>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              No technical expertise needed on your end. We handle the heavy lifting while you keep running your business.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {HOW_IT_WORKS_STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all hover:border-cyan-400/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 font-bold">
                      {s.step}
                    </span>
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-bold text-slate-400">
                      {s.duration}
                    </span>
                  </div>

                  <h4 className="mt-4 font-display text-lg font-bold text-white">
                    {s.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {s.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Leadership & Standards Reassurance Banner */}
          <div className="mt-12 rounded-2xl border border-emerald-400/30 bg-gradient-to-r from-emerald-950/40 via-cyan-950/30 to-slate-950 p-6 sm:p-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Our Standards & Written Guarantees
                  </span>
                </div>
                <h4 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
                  Under Direct Supervision of Mr. Daud Lashari & Core Engineering Leads
                </h4>
                <p className="mt-2 max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-sm">
                  Every project is assigned a dedicated project manager and personally reviewed by Mr. Daud Lashari before launch. You get 100% source code ownership, zero hidden fees, and lifetime peace of mind.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all hover:bg-emerald-300 shadow-lg"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Chat With Mr. Daud Lashari</span>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10"
                >
                  <span>Read Our Standards</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
