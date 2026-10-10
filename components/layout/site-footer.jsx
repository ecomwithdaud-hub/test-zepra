"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";

import { Logo } from "@/components/shared/logo";
import { useLanguage } from "@/components/providers/language-provider";
import { siteMeta, socialLinks } from "@/lib/site";
import { GlobalEdgeTelemetry } from "@/components/ui/GlobalEdgeTelemetry";

function XIcon({ className }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialIcons = {
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Facebook: Facebook,
  X: XIcon,
  WhatsApp: MessageCircle,
};

const navigationGroups = [
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/website-development" },
      { label: "AI Automation", href: "/services#ai-agents-bots" },
      { label: "Mobile Apps", href: "/services" },
      { label: "Cloud", href: "/services" },
      { label: "UI/UX", href: "/services#graphic-design" },
      { label: "Ecommerce", href: "/services#ecommerce-solutions" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Custom Software", href: "/website-development" },
      { label: "Workflow Automation", href: "/services#ai-agents-bots" },
      { label: "AI Ops", href: "/services#ai-agents-bots" },
      { label: "Enterprise Systems", href: "/services" },
    ],
  },
  {
    title: "Products / Tech Stack",
    links: [
      { label: "Web Platforms", href: "/website-development" },
      { label: "Mobile Platforms", href: "/services" },
      { label: "APIs", href: "/services" },
      { label: "Cloud Infrastructure", href: "/services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Case Studies", href: "/portfolio#case-studies-section" },
      { label: "Web Demos (24)", href: "/portfolio#web-development" },
      { label: "Guides", href: "/services" },
      { label: "News", href: "/portfolio#case-studies-section" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Portfolio & Case Studies", href: "/portfolio" },
      { label: "Careers", href: "/contact" },
      { label: "Contact Us", href: "/contact" },
      { label: "Partner Program", href: "/contact" },
    ],
  },
];

const partners = [
  { name: "Microsoft", mark: "microsoft" },
  { name: "AWS", mark: "aws" },
  { name: "Shopify", mark: "shopify" },
  { name: "Salesforce", mark: "salesforce" },
];

const defaultLocations = [
  {
    flag: "🇺🇸",
    name: "USA",
    detail: "San Jose, CA / Delaware",
    note: "US Recognized Tech Agency",
  },
  {
    flag: "🇵🇰",
    name: "Pakistan (HQ)",
    detail:
      "D Tower, Plot B, 281 Ghazi Rd, Khuda Buksh Colony KB Society, Lahore, Punjab",
  },
  {
    flag: "🇦🇪",
    name: "UAE / Global Services",
    detail:
      "Serving clients worldwide across the US, UK, Middle East, and Asia-Pacific.",
  },
  {
    flag: "🌐",
    name: "Global Reach",
    detail: "Distributed delivery for clients across multiple time zones.",
  },
];

const footerSocialLinks = [
  ...socialLinks.map((social) => ({
    ...social,
    label: social.label === "X" ? "X / Twitter" : social.label,
  })),
  { label: "WhatsApp", href: siteMeta.whatsappLink },
];

const contactIconWrap =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-brand-cyan ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-white";

const footerGroupKeys = {
  Services: "services",
  Solutions: "solutions",
  "Products / Tech Stack": "products",
  Resources: "resources",
  Company: "company",
};

const footerLinkKeys = {
  "Web Development": "webDevelopment",
  "AI Automation": "aiAutomation",
  "Mobile Apps": "mobileApps",
  Cloud: "cloud",
  "UI/UX": "uiux",
  Ecommerce: "ecommerce",
  "Custom Software": "customSoftware",
  "Workflow Automation": "workflowAutomation",
  "AI Ops": "aiOps",
  "Enterprise Systems": "enterpriseSystems",
  "Web Platforms": "webPlatforms",
  "Mobile Platforms": "mobilePlatforms",
  APIs: "apis",
  "Cloud Infrastructure": "cloudInfrastructure",
  Blogs: "blogs",
  "Case Studies": "caseStudies",
  Portfolio: "portfolio",
  Guides: "guides",
  News: "news",
  "About Us": "aboutUs",
  Careers: "careers",
  "Contact Us": "contactUs",
  "Partner Program": "partnerProgram",
};

export function SiteFooter() {
  const { t } = useLanguage();
  const rawLocations = t("footer.locations");
  const translatedLocations = Array.isArray(rawLocations) ? rawLocations : defaultLocations;

  const getTranslation = (key, fallback) => {
    const val = t(key);
    return val && typeof val === "string" && !val.startsWith("footer.") ? val : fallback;
  };

  return (
    <footer className="section-shell-tight relative border-t border-white/60 bg-slate-950 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/60 to-transparent" />

      <div className="w-full px-6 lg:px-12">
        <div className="flex flex-col gap-6 border-b border-slate-800 pb-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-sm">
            <Logo
              className="[&_svg]:shadow-glow"
              textClassName="[&_div:first-child]:text-white [&_div:last-child]:text-slate-400"
            />
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {getTranslation("footer.tagline", "Empowering global businesses with high-performance Web Apps, AI Automation, and modern cloud architecture.")}
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:gap-6">
            <a
              href={`mailto:${siteMeta.email}`}
              className="group inline-flex items-center gap-3 transition-colors duration-200 hover:text-cyan-400"
            >
              <span className={contactIconWrap}>
                <Mail className="h-4 w-4" />
              </span>
              {siteMeta.email}
            </a>
            <a
              href={siteMeta.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 transition-colors duration-200 hover:text-cyan-400"
            >
              <span className={contactIconWrap}>
                <MessageCircle className="h-4 w-4" />
              </span>
              {siteMeta.whatsappNumber}
            </a>
          </div>
        </div>

        {/* Global Edge Telemetry Bar */}
        <div className="py-6 border-b border-slate-800/80">
          <GlobalEdgeTelemetry />
        </div>

        <nav aria-label="Footer navigation" className="py-8">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 xl:grid-cols-5">
            {navigationGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-display text-base font-semibold text-white">
                  {getTranslation(`footer.${footerGroupKeys[group.title]}`, group.title)}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="transition-colors duration-200 hover:text-cyan-400"
                      >
                        {getTranslation(`footer.links.${footerLinkKeys[link.label]}`, link.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        <div className="border-t border-b border-slate-800 py-6">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              {getTranslation("footer.technology", "TECHNOLOGY PARTNERS")}
            </h3>
            <div className="mt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              {partners.map((partner) => (
                <div
                  key={partner.mark}
                  className="flex h-10 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white shadow-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
                >
                  <PartnerMark mark={partner.mark} />
                  {partner.mark === "shopify" ? (
                    <span className="whitespace-nowrap text-xs font-semibold">
                      Shopify Plus Partner
                    </span>
                  ) : partner.mark === "salesforce" ? (
                    <span className="text-sm font-semibold">salesforce</span>
                  ) : (
                    <span className="text-sm font-semibold">
                      {partner.mark === "aws" ? "aws" : partner.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <section aria-labelledby="global-presence-heading" className="py-8">
          <h3
            id="global-presence-heading"
            className="font-display text-lg font-semibold text-white"
          >
            {getTranslation("footer.globalPresence", "Global Presence")}
          </h3>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {defaultLocations.map((location, index) => {
              const translatedLocation = translatedLocations?.[index] ?? location;
              return (
                <div key={location.name} className="min-w-0">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl" aria-hidden="true">
                      {location.flag}
                    </span>
                    <h4 className="text-sm font-semibold text-white">
                      {translatedLocation.name || location.name}
                    </h4>
                  </div>
                  <p className="mt-3 break-words text-sm leading-6 text-slate-400">
                    {translatedLocation.detail || location.detail}
                  </p>
                  {(translatedLocation.note || location.note) ? (
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {translatedLocation.note || location.note}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>

        <div className="flex flex-col gap-5 border-t border-white/10 pt-6 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>© 2026 Zepra Tech</span>
            <span aria-hidden="true">|</span>
            <span>{getTranslation("footer.allRightsReserved", "All Rights Reserved")}</span>
            <span aria-hidden="true">|</span>
            <Link
              href="/privacy-policy"
              className="transition-colors duration-200 hover:text-cyan-400"
            >
              {getTranslation("footer.privacy", "Privacy Policy")}
            </Link>
            <span aria-hidden="true">|</span>
            <Link
              href="/terms-of-use"
              className="transition-colors duration-200 hover:text-cyan-400"
            >
              {getTranslation("footer.terms", "Terms of Service")}
            </Link>
            <span aria-hidden="true">|</span>
            <Link
              href="/privacy-policy"
              className="transition-colors duration-200 hover:text-cyan-400"
            >
              {getTranslation("footer.security", "Security")}
            </Link>
          </div>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-3" aria-label={getTranslation("footer.social", "Social Links")}>
            {footerSocialLinks.map((social) => {
              const Icon = social.label.startsWith("X")
                ? XIcon
                : socialIcons[social.label];
              if (!Icon) return null;
              const isExternal = social.href.startsWith("http");

              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-cyan-400"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{social.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function PartnerMark({ mark }) {
  if (mark === "microsoft") {
    return (
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5 shrink-0">
        <path fill="#F25022" d="M0 1.1 8.7 0v8.4H0z" />
        <path fill="#7FBA00" d="M10 0h10v8.4H10z" />
        <path fill="#00A4EF" d="M0 10h8.7v8.5L0 17.3z" />
        <path fill="#FFB900" d="M10 10h10v10l-10-1.2z" />
      </svg>
    );
  }

  if (mark === "aws") {
    return (
      <svg aria-hidden="true" viewBox="0 0 28 20" className="h-5 w-7 shrink-0">
        <path
          d="M3 5.5c6.4 5.1 15.3 6.2 22 1.4"
          fill="none"
          stroke="#FF9900"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="m21.1 5.5 4.2 1.1-1.1 4"
          fill="none"
          stroke="#FF9900"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (mark === "shopify") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 shrink-0">
        <path fill="#95BF47" d="m5 7 2-2h10l2 2 1 15H4z" />
        <path
          d="M8 8V6a4 4 0 0 1 8 0v2"
          fill="none"
          stroke="#5E8E3E"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <text
          x="12"
          y="18"
          fill="white"
          fontFamily="Georgia, serif"
          fontSize="11"
          fontStyle="italic"
          fontWeight="700"
          textAnchor="middle"
        >
          S
        </text>
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 28 22" className="h-5 w-7 shrink-0">
      <path
        fill="#00A1E0"
        d="M9 20.5C4.6 20.5 1 17.4 1 13.5c0-3.5 2.9-6.3 6.5-6.3.8-3 3.5-5.2 6.7-5.2 3.1 0 5.8 2 6.7 5 .5-.2 1.1-.3 1.7-.3 3.1 0 5.5 2.5 5.5 5.6 0 .5-.1 1-.2 1.4 1.2 1 2 2.4 2 4 0 1.6-1 2.8-2.6 2.8z"
      />
    </svg>
  );
}

export default SiteFooter;