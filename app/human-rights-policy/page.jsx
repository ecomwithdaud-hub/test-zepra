import { LegalPage } from "@/components/layout/legal-page";

export const metadata = {
  title: "Human Rights Policy",
  description: "Zepra Tech's commitment to respecting human rights in how it works.",
};

export default function HumanRightsPolicyPage() {
  return (
    <LegalPage
      title="Human Rights Policy"
      intro="[Draft placeholder: replace this page with the approved Zepra Tech human rights policy before publishing.]"
      sections={[
        { heading: "Our commitment", body: "[Add the company's stated commitment.]" },
        { heading: "Our team and partners", body: "[Add how this applies to staff, freelancers, and suppliers.]" },
        { heading: "Raising a concern", body: "[Add how to report a concern.]" },
      ]}
    />
  );
}
