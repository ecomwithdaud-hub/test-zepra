"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/language-provider";
import { services } from "@/lib/site";
import { slugify } from "@/lib/utils";
import { CyberCircuitBackground } from "@/components/ui/CyberCircuitBackground";

export function ServicesGrid({
  showHeader = true,
  showCta = false,
  title,
  
}) {
  const { t } = useLanguage();
  const translatedServices = t("services.items");

  return (
    <section className="section-shell relative isolate overflow-hidden bg-white/50">
      <CyberCircuitBackground />
      <div className="container relative z-10">
        {showHeader ? (
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow={t("services.eyebrow")}
              title={title ?? t("services.title")}
              // description={description}
            />
            {showCta ? (
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  {t("services.cta")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </div>
        ) : null}

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {services.map((service, index) => (
            <div key={service.title} id={slugify(service.title)}>
              <ServiceCard
                service={{ ...service, ...translatedServices?.[index] }}
                agencyLabel={t("services.agencyService")}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
