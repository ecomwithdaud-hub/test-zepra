import { Plus_Jakarta_Sans, Sora } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LanguageProvider } from "@/components/providers/language-provider";
import { QuickConnectDock } from "@/components/ui/QuickConnectDock";
import { TechCursor } from "@/components/ui/TechCursor";
import { siteMeta } from "@/lib/site";

import "./globals.css";

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Sora({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: siteMeta.title,
    template: "%s | Zepra Tech",
  },
  description: siteMeta.description,
  keywords: [
    "Zepra Tech",
    "digital agency Pakistan",
    "web development agency",
    "AI solutions",
    "SEO services",
    "digital marketing",
    "ecommerce development",
  ],
  applicationName: siteMeta.name,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.url,
    siteName: siteMeta.name,
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bodyFont.variable} ${displayFont.variable} font-sans`}>
        <LanguageProvider>
          <TechCursor />
          <QuickConnectDock />
          <div className="relative min-h-screen overflow-x-clip">
            <SiteHeader />
            <div aria-hidden="true" className="h-24" />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
