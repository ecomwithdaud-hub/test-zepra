import { HomeHero } from "@/components/sections/home-hero";
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
      <MobileAISection />
      <WhyUs />
      <MobileTestimonials />
      <MobileContact />
      <MobileFooter />
    </div>
  );
}
