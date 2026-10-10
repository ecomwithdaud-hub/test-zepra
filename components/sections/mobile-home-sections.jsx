"use client";

import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  ShieldCheck,
  Workflow,
  X,
} from "lucide-react";

import { Logo } from "@/components/shared/logo";
import { TestimonialCard } from "@/components/sections/testimonials-section";
import { useLanguage } from "@/components/providers/language-provider";
import { siteMeta, socialLinks, testimonials } from "@/lib/site";

const socialIcons = {
  LinkedIn: Linkedin,
  Instagram,
  Facebook,
  X,
  WhatsApp: MessageCircle,
};

export function MobileAISection() {
  const { t } = useLanguage();
  const content = t("home.operations");

  return (
    <section className="bg-slate-950 py-8 text-white border-t border-white/10">
      <div className="container px-4">
        <header className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {content.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white">
            {content.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">{content.description}</p>
        </header>

        <div className="mt-6 grid gap-4">
          <article className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-md text-white">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-base font-semibold text-white">
                {content.legacyTitle}
              </h3>
              <span className="shrink-0 rounded-full bg-rose-500/10 p-2 text-rose-400">
                <ArrowRight className="h-4 w-4 rotate-45" />
              </span>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              {content.legacyPoints.map((point) => (
                <li key={point.label} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                  <span><strong className="text-white">{point.label}:</strong> {point.description}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-[#0e1f38] via-[#0b132b] to-[#060a17] p-5 text-white shadow-xl">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-base font-semibold text-white">
                {content.aiTag}
              </h3>
              <span className="shrink-0 rounded-full border border-cyan-300/20 bg-cyan-300/10 p-2 text-cyan-200">
                <Workflow className="h-4 w-4" />
              </span>
            </div>
            <p className="mt-2 text-xs font-semibold text-cyan-300">{content.aiStatus}</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
              {content.aiPoints.map((point) => (
                <li key={point.label} className="flex items-start gap-2.5">
                  <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                  <span><strong className="text-white">{point.label}:</strong> {point.description}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export function MobileTestimonials() {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-950 py-8 text-white border-t border-white/10">
      <div className="container px-4">
        <header className="mx-auto max-w-xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {t("home.testimonials.eyebrow")}
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white">
            {t("home.testimonials.title")}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            {t("home.testimonials.description")}
          </p>
        </header>
        <div className="mt-6 grid gap-4">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.service || index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function MobileFooter() {
  const { t } = useLanguage();
  const footerSocials = [
    ...socialLinks,
    { label: "WhatsApp", href: siteMeta.whatsappLink },
  ];
  const legalLinks = [
    { label: t("nav.caseStudies") || "Case Studies", href: "/case-studies" },
    { label: t("nav.websiteDevelopment") || "Websites", href: "/website-development" },
    { label: t("footer.privacy"), href: "/privacy-policy" },
    { label: t("footer.terms"), href: "/terms-of-use" },
    { label: t("footer.security"), href: "/privacy-policy" },
  ];

  return (
    <footer className="bg-slate-950 px-4 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <Logo
          className="[&_svg]:shadow-glow"
          textClassName="[&_div:first-child]:text-white [&_div:last-child]:text-slate-400"
        />
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-5 text-slate-400">
          <span>© 2026 Zepra Tech</span>
          <span aria-hidden="true">|</span>
          <span>{t("footer.allRightsReserved")}</span>
          {legalLinks.map((link) => (
            <span key={link.label} className="contents">
              <span aria-hidden="true">|</span>
              <a href={link.href} className="hover:text-white">{link.label}</a>
            </span>
          ))}
        </div>
        <ul className="flex flex-wrap gap-3" aria-label={t("footer.social")}>
          {footerSocials.map((social) => {
            const Icon = socialIcons[social.label];
            const isExternal = social.href.startsWith("http");
            if (!Icon) return null;

            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}