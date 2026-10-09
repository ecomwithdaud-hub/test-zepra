import { AeoStructuredAnswers } from "@/components/sections/aeo-structured-answers";
import { CaseStudySpotlight } from "@/components/sections/case-study-spotlight";
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
      <CaseStudySpotlight
        eyebrow="Flagship Platform Spotlight"
        title="Wiki RG — Full-Stack Institutional MERN & Next.js Platform"
        description="Engineered with a custom editorial CMS, multi-role authentication, and edge-cached delivery to support high-volume publishing and institutional scalability."
        metrics={[
          { label: "Delivery Timeline", value: "8 Weeks" },
          { label: "Organic Reach Lift", value: "+68%" },
          { label: "Query Performance", value: "3.8x Faster" },
        ]}
        image="/images/project.png"
        primaryHref="/website-development"
        primaryLabel="Explore Web Platforms"
        secondaryHref="/contact"
        secondaryLabel="Request Architecture Review"
      />
      <WikiRgShowcase />
      <AeoStructuredAnswers
        pageUrl="https://gozepra.tech/case-studies"
        pageTitle="Enterprise Engineering Case Studies | Zepra Tech"
        aiSummaryTitle="How Zepra Tech Delivers Measurable Case Study Outcomes"
        aiSummaryBody="Every Zepra Tech engagement begins with conversion architecture, technical speed benchmarks, and clear KPI tracking—ensuring our custom web platforms, AI agents, and e-commerce builds generate verifiable business ROI."
      />
      <ContactSection showHeader={false} />
    </>
  );
}
