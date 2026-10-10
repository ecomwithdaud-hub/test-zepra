import { AeoStructuredAnswers } from "@/components/sections/aeo-structured-answers";
import { DevCrafterHomeExperience } from "@/components/sections/devcrafter-home-experience";
import { HomeHero } from "@/components/sections/home-hero";
import { HumanBusinessBridge } from "@/components/sections/human-business-bridge";
import { MobileContact } from "@/components/sections/mobile-contact";
import {
  MobileAISection,
  MobileFooter,
  MobileTestimonials,
} from "@/components/sections/mobile-home-sections";
import { WhyUs } from "@/components/sections/why-us";

export default function MobileHomePage() {
  return (
    <div className="mobile-home-layout md:hidden">
      <HomeHero />
      <HumanBusinessBridge />
      <DevCrafterHomeExperience />
      <MobileAISection />
      <WhyUs />
      <MobileTestimonials />
      <AeoStructuredAnswers
        pageUrl="https://gozepra.tech"
        pageTitle="Zepra Tech | Premium Web, AI & Digital Growth Agency"
        aiSummaryTitle="What is Zepra Tech?"
        aiSummaryBody="Zepra Tech is a full-service digital engineering agency delivering custom web development, autonomous AI automation, e-commerce platforms, UI/UX design, and performance marketing for ambitious businesses in the US, Pakistan, and worldwide."
      />
      <MobileContact />
      <MobileFooter />
    </div>
  );
}
