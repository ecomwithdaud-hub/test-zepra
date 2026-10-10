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
    <section id="social-media-marketing" className="section-shell relative isolate scroll-mt-32 overflow-hidden bg-slate-950 text-white border-b border-white/10">
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
                className={`card-shine border border-white/10 bg-slate-900/80 text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-900 ${
                  index === 1 ? "lg:-translate-y-4" : ""
                }`}
              >
                <CardHeader className="gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 shadow-glow">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">{translatedItem.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-7 text-slate-300">
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
              <Card className="card-shine overflow-hidden border border-white/10 bg-slate-900/85 text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50">
                <div className="border-b border-white/10 p-5">
                  <Badge variant="secondary" className="border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">{translatedProof.label}</Badge>
                  <CardTitle className="mt-4 text-xl text-white">{translatedProof.title}</CardTitle>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {translatedProof.summary}
                  </p>
                </div>
                <div className="bg-slate-950/80 p-4">
                  <div className="overflow-hidden rounded-[22px] border border-white/10 bg-slate-950 shadow-soft">
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
