import type { Metadata } from "next";
import {
  Bodoni_Moda,
  Playfair_Display,
  Inter,
  Space_Mono,
  Pinyon_Script,
} from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.canonicalUrl),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: [...siteConfig.seo.keywords],
  authors: [{ name: siteConfig.person.name }],
  creator: siteConfig.person.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: siteConfig.seo.canonicalUrl,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.person.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.person.name,
  url: siteConfig.seo.canonicalUrl,
  email: siteConfig.person.email,
  jobTitle: siteConfig.person.titles[0],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Trivandrum",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.person.name,
  url: siteConfig.seo.canonicalUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body
        className={`${bodoni.variable} ${playfair.variable} ${inter.variable} ${spaceMono.variable} ${pinyon.variable} antialiased`}
      >
        <div className="grain" aria-hidden="true" />
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
