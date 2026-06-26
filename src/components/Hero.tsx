"use client";

import Image from "next/image";
import { CalendarDays } from "lucide-react";
import Reveal from "@/components/Reveal";
import Button, { ArrowIcon } from "@/components/Button";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{ animation: "kenburns 25s ease-in-out infinite alternate" }}
      >
        <Image
          src="/images/interieur-hero.png"
          alt="Intérieur de la Brasserie Le Ste Foy"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-navy-deeper/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper via-transparent to-navy-deeper/50" />

      <div className="absolute top-1/4 right-[10%] w-[300px] h-[300px] rounded-full border border-white/[0.03] animate-[spin_60s_linear_infinite]" />
      <div className="absolute bottom-1/3 left-[5%] w-[200px] h-[200px] rounded-full border border-gold/[0.04] animate-[spin_45s_linear_infinite_reverse]" />

      <div className="relative z-10 text-center px-4 sm:px-6 flex flex-col items-center justify-center">
        <Reveal animation="zoom-in" duration={1400}>
          <div className="flex justify-center mb-3">
            <Image
              src="/images/logo-brasserie-ste-foy.png"
              alt="Brasserie Le Ste Foy"
              width={200}
              height={200}
              className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] drop-shadow-2xl"
              priority
            />
          </div>
        </Reveal>

        <Reveal animation="fade-up" duration={900} delay={400}>
          <p className="text-white/90 text-sm sm:text-base uppercase tracking-[0.4em] mb-6 font-semibold">
            Brasserie · Cuisine française · Fait maison
          </p>
        </Reveal>

        <Reveal animation="fade-up" duration={800} delay={800}>
          <p className="text-white/50 text-sm sm:text-base tracking-wide mb-8 max-w-md mx-auto">
            7 Place Xavier Ricard, Sainte-Foy-lès-Lyon 69110
          </p>
        </Reveal>

        <Reveal animation="fade-up" duration={800} delay={1000}>
          {/* Mobile */}
          <div className="flex sm:hidden flex-col gap-4 justify-center">
            <Button href="/#carte" variant="primary" size="lg">
              La Carte
              <ArrowIcon />
            </Button>
            <Button href="#temoignages" variant="outline" size="lg">
              Avis clients
            </Button>
          </div>
          {/* Desktop */}
          <div className="hidden sm:flex flex-row gap-4 justify-center">
            <Button href="/reservation" variant="primary" size="lg">
              <CalendarDays className="w-4 h-4" />
              Réserver
              <ArrowIcon />
            </Button>
            <Button href="/#carte" variant="outline" size="lg">
              Découvrir la carte
            </Button>
          </div>
        </Reveal>
      </div>

    </section>
  );
}
