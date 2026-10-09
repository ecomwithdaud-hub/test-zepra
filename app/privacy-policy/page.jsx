import { LegalPage } from "@/components/layout/legal-page";

export const metadata = {
  title: "Privacy Policy",
  description: "How Zepra Tech collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="[Draft placeholder: replace this page with the approved Zepra Tech privacy policy before publishing.]"
      sections={[
        { heading: "Information we collect", body: "[Add what the contact form and site collect.]" },
        { heading: "How we use it", body: "[Add why the information is collected and used.]" },
        { heading: "Sharing and storage", body: "[Add who receives the data and how long it is kept.]" },
        { heading: "Your choices", body: "[Add how people can ask to view or delete their data.]" },
      ]}
    />
  );
}
