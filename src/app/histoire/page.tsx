import type { Metadata } from "next";
import Image from "next/image";
import HistoireContent from "@/components/HistoireContent";

export const metadata: Metadata = {
  title: "Notre Histoire | Brasserie Le Ste Foy",
  description:
    "Découvrez l'histoire de la Brasserie Le Ste Foy, ancien bar-PMU transformé en brasserie de quartier depuis 2015 à Sainte-Foy-lès-Lyon.",
};

export default function HistoirePage() {
  return (
    <main>
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-end">
        <Image
          src="/images/devanture-brasserie.png"
          alt="Façade de la Brasserie Le Ste Foy"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper via-navy-deeper/60 to-navy-deeper/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 sm:pb-24">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-xs sm:text-sm uppercase tracking-[0.3em]">
              Depuis 2015
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-7xl text-white leading-[0.95]">
            Notre
            <br />
            <span className="text-crimson italic">Histoire</span>
          </h1>
        </div>
      </section>

      <HistoireContent />
    </main>
  );
}
