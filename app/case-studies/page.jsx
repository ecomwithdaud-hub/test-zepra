import { ContactSection } from "@/components/sections/contact-section";
import { EnterpriseCaseStudies } from "@/components/sections/enterprise-case-studies";
import { WikiRgShowcase } from "@/components/sections/wiki-rg-showcase";

export const metadata = {
  title: "Case Studies | Enterprise Web Platforms, AI Systems & E-Commerce",
  description:
    "Explore Zepra Tech engineering case studies, architecture breakdowns, and verified client outcomes across web development, full-stack platforms, AI automation, and growth.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <EnterpriseCaseStudies />
      <WikiRgShowcase />
      <ContactSection showHeader={false} />
    </>
  );
}
