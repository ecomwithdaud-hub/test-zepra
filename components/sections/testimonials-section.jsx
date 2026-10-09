"use client";

import React from 'react';
import { testimonials } from "@/lib/site";
import { useLanguage } from "@/components/providers/language-provider";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";

export function TestimonialCard({ testimonial, index }) {
  const { t } = useLanguage();
  const testimonialsContent = t("home.testimonials");
  const translatedItems = Array.isArray(testimonialsContent?.items) ? testimonialsContent.items : [];
  const translated = translatedItems[index];

  return (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-[#0e1f38] via-[#0b132b] to-[#060a17] p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/15">
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl transition-all duration-300 group-hover:bg-cyan-400/20" 
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 shadow-inner">
            {translated?.service || testimonial?.service || testimonial?.tag || "Service"}
          </span>
          <div className="flex text-amber-400 text-sm tracking-widest">
            ★★★★★
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-200 font-normal">
          “{translated?.quote || testimonial?.quote || testimonial?.content || testimonial?.text}”
        </p>
      </div>

      <div className="relative z-10 mt-6 flex items-center gap-3 border-t border-slate-800/80 pt-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/10 text-xs font-bold text-cyan-300 border border-cyan-500/30">
          {testimonial?.name ? testimonial.name.charAt(0) : "C"}
        </div>
        <div>
          <h4 className="text-xs font-semibold text-white">
            {translated?.name || testimonial?.name || "Confidential client"}
          </h4>
          <p className="text-[11px] text-slate-400">
            {translated?.role || testimonial?.role || testimonial?.project || testimonial?.service}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const { t } = useLanguage();
  const testimonialsContent = t("home.testimonials");

  return (
    <section className="relative isolate overflow-hidden bg-[#E6F2FF] py-8 text-slate-900 sm:py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-16 -z-10 h-80 w-[min(80vw,900px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.18),transparent_68%)] blur-[120px] animate-pulse motion-reduce:animate-none"
      />
      <div className="container relative mx-auto px-4">
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-700/20 bg-white/75 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-800 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {testimonialsContent?.eyebrow || "CLIENT TRUST & REVIEWS"}
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {testimonialsContent?.title || "What our global clients say about us."}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">
            {testimonialsContent?.description || "Real testimonials from enterprises, startups, and brands across web, AI, e-commerce, and growth marketing."}
          </p>
        </header>

        <div className="mt-8 overflow-hidden">
          <InfiniteMarquee
            direction="left"
            speed="45s"
            fadeIn="8%"
            fadeOut="92%"
            className="py-2"
          >
            {testimonials && testimonials.map((testimonial, index) => (
              <div
                key={testimonial.service || index}
                className="w-[360px] shrink-0 md:w-[420px]"
              >
                <TestimonialCard
                  testimonial={testimonial}
                  index={index}
                />
              </div>
            ))}
          </InfiniteMarquee>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;