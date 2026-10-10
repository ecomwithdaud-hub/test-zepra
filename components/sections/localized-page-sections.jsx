"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutPrinciples() {
  const { t } = useLanguage();
  const content = t("about.principles");

  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-24 text-white border-t border-white/10">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading
          eyebrow={content?.eyebrow}
          title={content?.title}
          description={content?.description}
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content?.items?.map((item, index) => (
            <Card
              key={item.title || index}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-2 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-500/10 ${
                index === 1 ? "lg:-translate-y-3" : ""
              }`}
            >
              <CardHeader className="p-5 pb-2">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-xs font-bold text-cyan-300">
                  0{index + 1}
                </div>
                <CardTitle className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 text-sm leading-relaxed text-slate-300">
                {item.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceLanes() {
  const { t } = useLanguage();
  const content = t("servicePage");

  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-24 text-white border-t border-white/10">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading
          eyebrow={content?.eyebrow}
          title={content?.title}
          description={content?.description}
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {content?.lanes?.map((lane, index) => (
            <Card
              key={lane.title || index}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-2 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-500/10 ${
                index === 1 ? "xl:-translate-y-3" : ""
              }`}
            >
              <CardHeader className="p-5 pb-2">
                <CardTitle className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {lane.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 text-sm leading-relaxed text-slate-300">
                {lane.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactNextSteps() {
  const { t } = useLanguage();
  const content = t("contactPage");

  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-24 text-white border-t border-white/10">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading
          eyebrow={content?.stepsEyebrow}
          title={content?.stepsTitle}
          description={content?.stepsDescription}
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content?.steps?.map((step, index) => (
            <Card
              key={step.title || index}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-2 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-500/10 ${
                index === 1 ? "lg:-translate-y-3" : ""
              }`}
            >
              <CardHeader className="p-5 pb-2">
                <CardTitle className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 text-sm leading-relaxed text-slate-300">
                {step.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
