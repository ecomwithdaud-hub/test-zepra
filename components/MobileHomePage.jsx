import { EnterpriseCaseStudies } from "@/components/sections/enterprise-case-studies";
import { HomeHero } from "@/components/sections/home-hero";
import { MobileContact } from "@/components/sections/mobile-contact";
import {
  MobileAISection,
  MobileFooter,
  MobileTestimonials,
} from "@/components/sections/mobile-home-sections";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { UsaDemoShowcase } from "@/components/sections/usa-demo-showcase";
import { WhyUs } from "@/components/sections/why-us";

export default function MobileHomePage() {
  return (
    <div className="mobile-home-layout md:hidden">
      <HomeHero />
      <UsaDemoShowcase initialLimit={6} showViewAllLink={true} />
      <PortfolioPreview showCta={true} />
      <EnterpriseCaseStudies />
      <MobileAISection />
      <WhyUs />
      <MobileTestimonials />
      <MobileContact />
      <MobileFooter />
    </div>
  );
}
