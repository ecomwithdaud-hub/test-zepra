"use client";

import { BarChart3, Megaphone, TrendingUp } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { marketingProofs } from "@/lib/site";
import { useLanguage } from "@/components/providers/language-provider";
import { CyberCircuitBackground } from "@/components/ui/CyberCircuitBackground";

const proofHighlights = [
  {
    title: "Campaign visibility",
    description:
      "Real account screenshots help show that Zepra Tech is not presenting theory alone, but actual campaign monitoring and reporting work.",
    icon: Megaphone,
  },
  {
    title: "Performance tracking",
    description:
      "The gallery covers spend, clicks, leads, analytics movement, optimization suggestions, and reporting continuity.",
    icon: BarChart3,
  },
  {
    title: "Growth-focused execution",
    description:
      "This section is arranged to support trust for social media marketing, paid campaigns, and practical growth support services.",
    icon: TrendingUp,
  },
];

export function ResultsProofSection({
  eyebrow,
  title,
  description,
}) {
  const { t } = useLanguage();
  const content = t("marketingPage");
  const highlights = content.highlights;
  const translatedProofs = content.proofs;

  return (
    <section id="social-media-marketing" className="section-shell relative isolate scroll-mt-32 overflow-hidden bg-white/50">
      <CyberCircuitBackground />
      <div className="container relative z-10">
        <SectionHeading
          eyebrow={eyebrow ?? content.eyebrow}
          title={title ?? content.title}
          description={description ?? content.description}
          align="center"
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {proofHighlights.map((item, index) => {
            const Icon = item.icon;
            const translatedItem = highlights?.[index] ?? item;

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
          {marketingProofs.map((proof, index) => {
            const translatedProof = translatedProofs?.[index] ?? proof;
            return (
            <div key={proof.title} className="mb-6 break-inside-avoid">
              <Card className="card-shine overflow-hidden border-slate-200/80 bg-white/94">
                <div className="border-b border-slate-200/70 p-5">
                  <Badge>{translatedProof.label}</Badge>
                  <CardTitle className="mt-4 text-xl">{translatedProof.title}</CardTitle>
                  <p className="mt-3 text-sm leading-7 text-brand-slate">
                    {translatedProof.summary}
                  </p>
                </div>
                <div className="bg-slate-50 p-4">
                  <div className="overflow-hidden rounded-[22px] border border-slate-200/70 bg-white shadow-soft">
                    <img
                      src={proof.image}
                      alt={proof.title}
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
