import { ContactSection } from "@/components/sections/contact-section";

export const metadata = {
  title: "Contact",
  description:
    "Contact Zepra Tech for web development, AI automation, marketing, SEO, ecommerce, design, support, and consultation.",
};

export default function ContactPage() {
  return (
    <>
      <div id="inquiry-form">
        <ContactSection showHeader={false} />
      </div>
    </>
  );
}
