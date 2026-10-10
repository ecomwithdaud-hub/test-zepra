"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { wikiRgScreens } from "@/lib/site";
import { useLanguage } from "@/components/providers/language-provider";

export function WikiRgShowcase() {
  const { t } = useLanguage();
  const content = t("websitePage.wiki");
  const featuredScreen = wikiRgScreens.find((item) => item.featured);
  const detailScreens = wikiRgScreens.filter((item) => !item.featured);

  return (
    <section id="wiki-rg-case-study" className="section-shell scroll-mt-28 bg-slate-950 text-white border-t border-white/10">
      <div className="container">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          align="center"
        />

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          {featuredScreen ? (
            <Card className="card-shine overflow-hidden border border-white/10 bg-slate-900/85 text-white backdrop-blur-md">
              <div className="border-b border-white/10 p-6">
                <Badge variant="secondary" className="border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">{content.screens[wikiRgScreens.indexOf(featuredScreen)]?.label ?? featuredScreen.label}</Badge>
                <CardTitle className="mt-4 text-3xl text-white">
                  {content.screens[wikiRgScreens.indexOf(featuredScreen)]?.title ?? featuredScreen.title}
                </CardTitle>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                  {content.screens[wikiRgScreens.indexOf(featuredScreen)]?.summary ?? featuredScreen.summary}
                </p>
              </div>
              <div className="bg-slate-950/80 p-4">
                <div className="overflow-hidden rounded-[26px] border border-white/10 bg-slate-950 shadow-soft">
                  <img
                    src={featuredScreen.image}
                    alt={featuredScreen.title}
                    decoding="async"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </Card>
          ) : null}

          <div className="grid gap-6 sm:grid-cols-2">
            {detailScreens.map((screen) => {
              const translatedScreen = content.screens[wikiRgScreens.indexOf(screen)] ?? screen;
              return (
              <Card
                key={screen.title}
                className="card-shine overflow-hidden border border-white/10 bg-slate-900/85 text-white backdrop-blur-md"
              >
                <div className="border-b border-white/10 p-5">
                  <Badge variant="secondary" className="border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">{translatedScreen.label}</Badge>
                  <CardTitle className="mt-4 text-xl leading-tight text-white">
                    {translatedScreen.title}
                  </CardTitle>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {translatedScreen.summary}
                  </p>
                </div>
                <div className="bg-slate-950/80 p-4">
                  <div className="overflow-hidden rounded-[22px] border border-white/10 bg-slate-950 shadow-soft">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      decoding="async"
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>
              </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
