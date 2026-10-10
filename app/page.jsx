import { AeoStructuredAnswers } from "@/components/sections/aeo-structured-answers";
import { ContactSection } from "@/components/sections/contact-section";
import { DevCrafterHomeExperience } from "@/components/sections/devcrafter-home-experience";
import { HomeHero } from "@/components/sections/home-hero";
import { HumanBusinessBridge } from "@/components/sections/human-business-bridge";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TheShiftSection } from "@/components/sections/TheShiftSection";
import { WhyUs } from "@/components/sections/why-us";
import MobileHomePage from "@/components/MobileHomePage";
import { siteMeta } from "@/lib/site";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteMeta.name,
    url: siteMeta.url,
    email: siteMeta.email,
    description: siteMeta.description,
    areaServed: ["Pakistan", "United States", "International"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: siteMeta.email,
        contactType: "sales",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="hidden md:block">
        <DesktopHome />
      </div>
      <MobileHomePage />
    </>
  );
}

function DesktopHome() {
  return (
    <>
      <HomeHero />
      <HumanBusinessBridge />
      <DevCrafterHomeExperience />
      <TheShiftSection />
      <WhyUs />
      <TestimonialsSection />
      <AeoStructuredAnswers
        pageUrl="https://gozepra.tech"
        pageTitle="Zepra Tech | Premium Web, AI & Digital Growth Agency"
        aiSummaryTitle="What is Zepra Tech?"
        aiSummaryBody="Zepra Tech is a full-service digital engineering agency delivering custom web development, autonomous AI automation, e-commerce platforms, UI/UX design, and performance marketing for ambitious businesses in the US, Pakistan, and worldwide."
      />
      <ContactSection />
    </>
  );
}
