import { CtaBanner } from "@/components/sections/cta-banner";
import { ServiceLanes } from "@/components/sections/localized-page-sections";
import { ServicesGrid } from "@/components/sections/services-grid";

export const metadata = {
  title: "Services",
  description:
    "Explore Zepra Tech services including web development, AI bots, marketing, SEO, ecommerce, content, design, and customer support.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesGrid showCta={false} />

      <ServiceLanes />
      <CtaBanner />
    </>
  );
}
