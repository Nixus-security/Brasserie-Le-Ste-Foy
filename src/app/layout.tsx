import type { Metadata } from "next";
import localFont from "next/font/local";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const montserrat = localFont({
  src: [
    { path: "../../public/fonts/Montserrat-Latin.woff2", style: "normal" },
    { path: "../../public/fonts/Montserrat-LatinItalic.woff2", style: "italic" },
  ],
  variable: "--font-heading",
  display: "swap",
});

const outfit = localFont({
  src: "../../public/fonts/Outfit-Latin.woff2",
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brasserie Le Ste Foy | Restaurant à Sainte-Foy-lès-Lyon",
  description:
    "Brasserie rétro et familiale au cœur de Sainte-Foy-lès-Lyon. Cuisine française fait maison, plats du jour, burgers, tartare, salades. 7 Place Xavier Ricard.",
  keywords: [
    "brasserie",
    "restaurant",
    "Sainte-Foy-lès-Lyon",
    "cuisine française",
    "fait maison",
    "Lyon",
    "terrasse",
    "burger",
    "tartare",
  ],
  openGraph: {
    title: "Brasserie Le Ste Foy",
    description: "Cuisine française fait maison à Sainte-Foy-lès-Lyon",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Brasserie Le Ste Foy",
  image: "/images/logo-brasserie-ste-foy.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7 Place Xavier Ricard",
    addressLocality: "Sainte-Foy-lès-Lyon",
    postalCode: "69110",
    addressCountry: "FR",
  },
  telephone: "+33426641388",
  servesCuisine: "Cuisine française",
  priceRange: "€€",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday"], opens: "07:00", closes: "19:45" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "07:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "07:00", closes: "20:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "15:00" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.4",
    reviewCount: "66",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${outfit.variable} font-[family-name:var(--font-body)] antialiased bg-navy-deeper grain`}
      >
        <SmoothScroll />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
