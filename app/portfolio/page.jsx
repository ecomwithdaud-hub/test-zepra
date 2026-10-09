import { ContactSection } from "@/components/sections/contact-section";
import { EnterpriseCaseStudies } from "@/components/sections/enterprise-case-studies";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { UsaDemoShowcase } from "@/components/sections/usa-demo-showcase";
import { WikiRgShowcase } from "@/components/sections/wiki-rg-showcase";

export const metadata = {
  title: "Portfolio & Case Studies | Web Development, AI & Enterprise Systems",
  description:
    "Explore Zepra Tech's complete portfolio of 24+ live USA client demo websites, ecommerce deployments, interactive SaaS web apps, and enterprise case studies.",
};

export default function PortfolioPage() {
  return (
    <>
      <UsaDemoShowcase initialLimit={24} showViewAllLink={false} />
      <EnterpriseCaseStudies />
      <PortfolioPreview showCta={true} />
      <WikiRgShowcase />
      <ContactSection showHeader={false} />
    </>
  );
}
