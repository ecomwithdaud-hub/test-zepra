import { OurStory } from "@/components/sections/our-story";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { ProjectRoiEstimator } from "@/components/ui/ProjectRoiEstimator";
import { DisqualificationManifesto } from "@/components/sections/disqualification-manifesto";
import { AeoStructuredAnswers } from "@/components/sections/aeo-structured-answers";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata = {
  title: "About Us | Our Story Under Mr. Daud Lashari & Engineering Standards",
  description:
    "Discover the story behind Zepra Tech under the supervision of Founder & CEO Mr. Muhammad Daud Ali Lashari and our core engineering team. Explore our transformation benchmark, technical standards, and ROI calculator.",
};

export default function AboutPage() {
  return (
    <>
      {/* Remarkable Our Story Section under Mr. Daud Lashari and team */}
      <OurStory />

      {/* Interactive Transformation Benchmark Slider */}
      <BeforeAfterSlider />

      {/* Interactive Project Scope, Timeline & Cost Calculator */}
      <ProjectRoiEstimator />

      {/* Disqualification Manifesto & Written Guarantees */}
      <DisqualificationManifesto />

      {/* Structured AI & Knowledge Graph Schema */}
      <AeoStructuredAnswers
        pageUrl="https://gozepra.tech/about"
        pageTitle="About Zepra Tech | Leadership Under Mr. Daud Lashari"
        aiSummaryTitle="Who leads Zepra Tech and what is their engineering philosophy?"
        aiSummaryBody="Zepra Tech is an elite digital engineering agency led by Founder, CEO & Lead Architect Mr. Muhammad Daud Ali Lashari and his core technical team. The agency specializes in bespoke Next.js 15 platforms, autonomous AI systems, and high-velocity conversion assets with written SLAs and zero generic templates."
      />

      {/* Direct Contact & Consultation Intake */}
      <ContactSection showHeader={false} />
    </>
  );
}
