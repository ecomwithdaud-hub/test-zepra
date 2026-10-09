import { ContactSection } from "@/components/sections/contact-section";
import { EnterpriseCaseStudies } from "@/components/sections/enterprise-case-studies";
import { HomeHero } from "@/components/sections/home-hero";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TheShiftSection } from "@/components/sections/TheShiftSection";
import { UsaDemoShowcase } from "@/components/sections/usa-demo-showcase";
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
    areaServed: ["Pakistan", "International"],
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
      <UsaDemoShowcase initialLimit={9} showViewAllLink={true} />
      <PortfolioPreview showCta={true} />
      <EnterpriseCaseStudies />
      <TheShiftSection />
      <WhyUs />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
