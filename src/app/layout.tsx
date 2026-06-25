import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${playfair.variable} ${inter.variable} font-[family-name:var(--font-body)] antialiased bg-navy-deeper grain`}
      >
        <SmoothScroll />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
