"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { siteMeta } from "@/lib/site";

export function QuickConnectDock() {
  const [open, setOpen] = useState(false);

  const actions = [
    {
      label: "WhatsApp Instant Chat",
      sub: siteMeta.whatsappNumber || "+92 320 4154156",
      href: siteMeta.whatsappLink || "https://wa.me/923204154156",
      icon: MessageCircle,
      external: true,
      accent: "from-emerald-500 to-teal-400 text-slate-950",
    },
    {
      label: "Book a Strategy Call",
      sub: "24-hour response roadmap",
      href: "/contact",
      icon: Calendar,
      external: false,
      accent: "from-brand-blue to-brand-cyan text-slate-950",
    },
    {
      label: "Email Engineering Team",
      sub: siteMeta.email || "info@gozepra.tech",
      href: `mailto:${siteMeta.email || "info@gozepra.tech"}`,
      icon: Mail,
      external: true,
      accent: "from-sky-500 to-cyan-400 text-slate-950",
    },
    {
      label: "Direct Voice Call",
      sub: siteMeta.whatsappNumber || "+92 320 4154156",
      href: "tel:+923204154156",
      icon: Phone,
      external: true,
      accent: "from-amber-400 to-orange-400 text-slate-950",
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-[9990] flex flex-col items-end gap-3">
      {/* Expanded Multi-Channel Dock */}
      {open ? (
        <div className="w-72 overflow-hidden rounded-[24px] border border-cyan-400/35 bg-slate-950/95 p-4 text-white shadow-[0_24px_70px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:w-80">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Quick Connect Dock
                </p>
                <p className="text-[11px] text-slate-400">
                  Available for Web, AI & Growth Builds
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close quick connect menu"
              className="rounded-full border border-white/10 bg-white/5 p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="mt-3 space-y-2">
            {actions.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.accent} shadow-sm`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-xs font-bold text-white group-hover:text-cyan-300">
                      {item.label}
                    </div>
                    <div className="truncate text-[11px] text-slate-400">
                      {item.sub}
                    </div>
                  </div>
                </>
              );

              if (item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="LET'S GO"
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-2.5 transition-all hover:border-cyan-400/40 hover:bg-white/[0.08]"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  data-cursor="LET'S GO"
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-2.5 transition-all hover:border-cyan-400/40 hover:bg-white/[0.08]"
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}

      {/* Floating Pill Trigger */}
      <div className="flex items-center gap-2">
        <a
          href={siteMeta.whatsappLink || "https://wa.me/923204154156"}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="LET'S GO"
          aria-label="Chat on WhatsApp"
          className="hidden items-center gap-2 rounded-full border border-emerald-400/40 bg-slate-950/90 px-4 py-2.5 text-xs font-bold text-emerald-300 shadow-lg backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-slate-900 sm:inline-flex"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          data-cursor="LET'S GO"
          aria-expanded={open}
          aria-label="Toggle Quick Connect Dock"
          className="group inline-flex items-center gap-2.5 rounded-full border border-cyan-400/45 bg-gradient-to-r from-slate-950 via-[#0c1b33] to-slate-950 px-4 py-3 text-xs font-bold text-white shadow-[0_12px_35px_rgba(18,119,255,0.38)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-slate-950">
            {open ? (
              <X className="h-4 w-4" />
            ) : (
              <MessageCircle className="h-4 w-4" />
            )}
          </span>
          <span className="pr-1">Quick Connect</span>
        </button>
      </div>
    </div>
  );
}
