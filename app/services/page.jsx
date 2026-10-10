import { CtaBanner } from "@/components/sections/cta-banner";
import { ServiceLanes } from "@/components/sections/localized-page-sections";
import { ServicesGrid } from "@/components/sections/services-grid";
import { PricingTiers } from "@/components/sections/pricing-tiers";
import { ProjectRoiEstimator } from "@/components/ui/ProjectRoiEstimator";
import { DisqualificationManifesto } from "@/components/sections/disqualification-manifesto";

export const metadata = {
  title: "Enterprise Services & Architecture Tiers",
  description:
    "Explore Zepra Tech services: custom Next.js 15 web platforms, autonomous AI bots, high-conversion design, and predictable enterprise sprint tiers.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesGrid showCta={false} />
      <ServiceLanes />
      <PricingTiers />
      <ProjectRoiEstimator />
      <DisqualificationManifesto />
      <CtaBanner />
    </>
  );
}
