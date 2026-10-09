import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { WikiRgShowcase } from "@/components/sections/wiki-rg-showcase";

export const metadata = {
  title: "Website Development",
  description:
    "Explore Zepra Tech website development work across live business deployments, premium frontend showcases, ecommerce builds, and launch-ready web systems.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <PortfolioPreview showCta={false} />
      <WikiRgShowcase />
    </>
  );
}
