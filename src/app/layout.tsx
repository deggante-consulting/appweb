import type { Metadata } from "next";
import "@fontsource-variable/manrope/index.css";
import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { organizationJsonLd, site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "DÉGGANTE Consulting | Relations sociales professionnelles",
    template: "%s | DÉGGANTE Consulting",
  },
  description:
    "Cabinet indépendant en relations sociales professionnelles en Guadeloupe. Conseil, prévention des conflits, dialogue social, négociation et accompagnement des salariés.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_GP",
    url: site.url,
    siteName: site.name,
    title: "DÉGGANTE Consulting",
    description:
      "L'expérience du dialogue social au service des employeurs et de leurs équipes.",
    images: [
      {
        url: "/images/photos/banner.webp",
        width: 960,
        height: 640,
        alt: "Échange professionnel autour du dialogue social",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html data-scroll-behavior="smooth" lang="fr">
      <body>
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
