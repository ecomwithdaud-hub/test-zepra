import { AboutPreview } from "@/components/sections/about-preview";
import { AboutPrinciples } from "@/components/sections/localized-page-sections";
import { WhyUs } from "@/components/sections/why-us";

export const metadata = {
  title: "About",
  description:
    "Learn how Zepra Tech combines strategy, web development, AI systems, marketing, and support to help businesses grow with confidence.",
};

export default function AboutPage() {
  return (
    <>
      <AboutPreview showCta={false} />
      <AboutPrinciples />
      <WhyUs />
    </>
  );
}
