"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import Button, { ArrowIcon } from "@/components/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";

export default function HistoireContent() {
  return (
    <>
      <Navbar />

      {/* Intro */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal animation="fade-up" duration={1000}>
            <div className="grid md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-3">
                <p className="font-[family-name:var(--font-heading)] text-navy text-xl sm:text-2xl leading-relaxed italic">
                  &ldquo;L&apos;esprit brasserie, c&apos;est un lieu de vie, de
                  rencontres et de convivialité.&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-10 h-[1px] bg-crimson" />
                  <span className="text-warm-gray text-sm">
                    Philippe Pellé, fondateur
                  </span>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="overflow-hidden">
                  <Image
                    src="/images/Capture d'écran 2026-06-24 204732.png"
                    alt="Devanture historique"
                    width={400}
                    height={300}
                    className="object-cover w-full h-52 sm:h-64"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Photos section */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { src: "/images/Capture d'écran 2026-06-24 204908.png", alt: "L'intérieur aujourd'hui" },
              { src: "/images/Capture d'écran 2026-06-24 204811.png", alt: "La terrasse" },
              { src: "/images/Capture d'écran 2026-06-24 204755.png", alt: "La façade" },
              { src: "/images/plat.png", alt: "Nos plats maison" },
              { src: "/images/eglise-du-centre-2024-scaled.jpg", alt: "Place Xavier Ricard" },
              { src: "/images/Capture d'écran 2026-06-24 204732.png", alt: "L'entrée" },
            ].map((img, i) => (
              <Reveal key={img.src} animation="zoom-in" delay={i * 80} duration={800}>
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-navy-deeper/0 group-hover:bg-navy-deeper/40 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-white text-xs">{img.alt}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-navy-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal animation="fade-up" duration={900}>
            <div className="w-12 h-[1px] bg-gold/40 mx-auto mb-8" />
            <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl text-white mb-4 italic">
              Venez écrire la suite
              <br />
              de <span className="text-crimson">notre histoire</span>
            </h3>
            <p className="text-white/30 text-sm sm:text-base mb-10 max-w-md mx-auto">
              Réservez votre table et découvrez par vous-même l&apos;ambiance
              qui fait vivre la Place Xavier Ricard depuis plus d&apos;un siècle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/reservation" variant="primary" size="lg">
                Réserver une table
                <ArrowIcon />
              </Button>
              <Button href="/" variant="outline" size="lg">
                Retour à l&apos;accueil
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
