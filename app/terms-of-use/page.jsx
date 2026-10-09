import { LegalPage } from "@/components/layout/legal-page";

export const metadata = {
  title: "Terms of Use",
  description: "The terms that apply when you use the Zepra Tech website and services.",
};

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="[Draft placeholder: replace this page with the approved Zepra Tech terms before publishing.]"
      sections={[
        { heading: "Using this website", body: "[Add the rules for using the website.]" },
        { heading: "Services and payments", body: "[Add how projects, quotes, and payments work.]" },
        { heading: "Intellectual property", body: "[Add who owns the delivered work and site content.]" },
        { heading: "Contact", body: "[Add who to contact with questions about these terms.]" },
      ]}
    />
  );
}
