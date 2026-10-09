import { LegalPage } from "@/components/layout/legal-page";

export const metadata = {
  title: "Modern Slavery Act",
  description: "Zepra Tech's statement on preventing modern slavery and human trafficking.",
};

export default function ModernSlaveryActPage() {
  return (
    <LegalPage
      title="Modern Slavery Act"
      intro="[Draft placeholder: replace this page with the approved Zepra Tech modern slavery statement before publishing.]"
      sections={[
        { heading: "Our statement", body: "[Add the company's statement.]" },
        { heading: "Our supply chain", body: "[Add how suppliers and partners are checked.]" },
        { heading: "Raising a concern", body: "[Add how to report a concern.]" },
      ]}
    />
  );
}
