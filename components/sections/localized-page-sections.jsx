"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutPrinciples() {
  const { t } = useLanguage();
  const content = t("about.principles");

  return (
    <section className="relative overflow-hidden bg-[#E6F2FF] py-16 lg:py-24 text-slate-900">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading
          eyebrow={content?.eyebrow}
          title={content?.title}
          description={content?.description}
          align="center"
          className="[&_h2]:text-slate-900 [&_p]:text-slate-700"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content?.items?.map((item, index) => (
            <Card
              key={item.title || index}
              className={`group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/80 p-2 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-white hover:shadow-xl hover:shadow-cyan-500/10 ${
                index === 1 ? "lg:-translate-y-3" : ""
              }`}
            >
              <CardHeader className="p-5 pb-2">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-xs font-bold text-cyan-700 border border-cyan-500/20">
                  0{index + 1}
                </div>
                <CardTitle className="text-xl font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors duration-300">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 text-sm leading-relaxed text-slate-600">
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
    <section className="relative overflow-hidden bg-[#E6F2FF] py-16 lg:py-24 text-slate-900">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading
          eyebrow={content?.eyebrow}
          title={content?.title}
          description={content?.description}
          align="center"
          className="[&_h2]:text-slate-900 [&_p]:text-slate-700"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {content?.lanes?.map((lane, index) => (
            <Card
              key={lane.title || index}
              className={`group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/80 p-2 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-white hover:shadow-xl hover:shadow-cyan-500/10 ${
                index === 1 ? "xl:-translate-y-3" : ""
              }`}
            >
              <CardHeader className="p-5 pb-2">
                <CardTitle className="text-xl font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors duration-300">
                  {lane.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 text-sm leading-relaxed text-slate-600">
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
    <section className="relative overflow-hidden bg-[#E6F2FF] py-16 lg:py-24 text-slate-900">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading
          eyebrow={content?.stepsEyebrow}
          title={content?.stepsTitle}
          description={content?.stepsDescription}
          align="center"
          className="[&_h2]:text-slate-900 [&_p]:text-slate-700"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content?.steps?.map((step, index) => (
            <Card
              key={step.title || index}
              className={`group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/80 p-2 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-white hover:shadow-xl hover:shadow-cyan-500/10 ${
                index === 1 ? "lg:-translate-y-3" : ""
              }`}
            >
              <CardHeader className="p-5 pb-2">
                <CardTitle className="text-xl font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors duration-300">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 text-sm leading-relaxed text-slate-600">
                {step.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
