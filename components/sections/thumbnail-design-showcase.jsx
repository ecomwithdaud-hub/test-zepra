"use client";

import { Layers3, Sparkles, Target } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { thumbnailDesignShowcases } from "@/lib/site";
import { useLanguage } from "@/components/providers/language-provider";
import { CyberCircuitBackground } from "@/components/ui/CyberCircuitBackground";

const thumbnailHighlights = [
  {
    title: "CTR-focused hierarchy",
    description:
      "Large typography, stronger focal points, and contrast-driven layouts help each design grab attention faster.",
    icon: Target,
  },
  {
    title: "Curated core showcase",
    description:
      "The page now focuses on a smaller set of selected thumbnail concepts instead of showing every variation at once.",
    icon: Layers3,
  },
  {
    title: "Bold visual treatment",
    description:
      "Every concept is arranged with dramatic lighting, expressive cutouts, and visual storytelling built for stronger click appeal.",
    icon: Sparkles,
  },
];

export function ThumbnailDesignShowcase() {
  const { t } = useLanguage();
  const content = t("thumbnailPage");

  return (
    <section className="section-shell relative isolate overflow-hidden bg-white/50">
      <CyberCircuitBackground />
      <div className="container relative z-10">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          align="center"
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {thumbnailHighlights.map((item, index) => {
            const Icon = item.icon;
            const translatedItem = content.highlights?.[index] ?? item;

            return (
              <Card
                key={item.title}
                className={`card-shine border-slate-200/80 bg-white/92 ${
                  index === 1 ? "lg:-translate-y-4" : ""
                }`}
              >
                <CardHeader className="gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-glow">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{translatedItem.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-7 text-brand-slate">
                  {translatedItem.description}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 columns-1 gap-6 md:columns-2 xl:columns-3 2xl:columns-4">
          {thumbnailDesignShowcases.map((item, index) => {
            const translatedItem = content.items?.[index] ?? item;
            return (
            <div key={item.title} className="mb-6 break-inside-avoid">
              <Card className="card-shine overflow-hidden border-slate-200/80 bg-white/94">
                <div className="border-b border-slate-200/70 p-5">
                  <Badge>{translatedItem.label}</Badge>
                  <CardTitle className="mt-4 text-xl">{translatedItem.title}</CardTitle>
                </div>
                <div className="bg-slate-50 p-4">
                  <div className="overflow-hidden rounded-[22px] border border-slate-200/70 bg-white shadow-soft">
                    <img
                      src={item.image}
                      alt={item.title}
                      decoding="async"
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>
              </Card>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
