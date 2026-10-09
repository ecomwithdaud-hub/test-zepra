import { AeoStructuredAnswers } from "@/components/sections/aeo-structured-answers";
import { CaseStudySpotlight } from "@/components/sections/case-study-spotlight";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { UsaDemoShowcase } from "@/components/sections/usa-demo-showcase";

export const metadata = {
  title: "Website Development | 24+ Live Client Demo Websites & Web Platforms",
  description:
    "Explore Zepra Tech website development work across 24 live US industry demo websites, client deployments, premium frontend showcases, ecommerce builds, and launch-ready web systems.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <UsaDemoShowcase initialLimit={24} showViewAllLink={false} />
      <CaseStudySpotlight />
      <PortfolioPreview showCta={true} />
      <AeoStructuredAnswers
        pageUrl="https://gozepra.tech/website-development"
        pageTitle="Website Development Portfolio & 24 Live USA Demo Websites | Zepra Tech"
      />
    </>
  );
}
