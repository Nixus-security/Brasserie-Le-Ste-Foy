"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import Button, { ArrowIcon } from "@/components/Button";

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0" style={{ animation: "kenburns 25s ease-in-out infinite alternate" }}>
        <Image
          src="/images/interieur-hero.png"
          alt="Intérieur de la Brasserie Le Ste Foy"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-navy-deeper/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper via-transparent to-navy-deeper/50" />

      {/* Decorative floating circles */}
      <div className="absolute top-1/4 right-[10%] w-[300px] h-[300px] rounded-full border border-white/[0.03] animate-[spin_60s_linear_infinite]" />
      <div className="absolute bottom-1/3 left-[5%] w-[200px] h-[200px] rounded-full border border-gold/[0.04] animate-[spin_45s_linear_infinite_reverse]" />

      <div className="relative z-10 text-center px-4 sm:px-6">
        <Reveal animation="zoom-in" duration={1400}>
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo Braseerie St-foy.jpg"
              alt="Brasserie Le Ste Foy"
              width={140}
              height={140}
              className="rounded-full ring-2 ring-white/20 shadow-2xl shadow-black/30"
              priority
            />
          </div>
        </Reveal>

        <Reveal animation="clip-up" duration={1200} delay={300}>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white tracking-wide mb-3">
            Le <span className="text-gradient italic">Ste Foy</span>
          </h1>
        </Reveal>

        <Reveal animation="fade-up" duration={900} delay={600}>
          <p className="text-white/40 text-xs sm:text-sm uppercase tracking-[0.5em] mb-12">
            Brasserie · Cuisine française · Fait maison
          </p>
        </Reveal>

        <Reveal animation="fade-up" duration={800} delay={800}>
          <p className="text-white/30 text-sm sm:text-base tracking-wide mb-12 max-w-md mx-auto">
            7 Place Xavier Ricard, Sainte-Foy-lès-Lyon 69110
          </p>
        </Reveal>

        <Reveal animation="fade-up" duration={800} delay={1000}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/#carte" variant="primary" size="lg">
              Découvrir la carte
              <ArrowIcon />
            </Button>
            <Button href="/reservation" variant="outline" size="lg">
              Réserver
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <Reveal animation="fade-up" delay={1400}>
          <a
            href="#apropos"
            className="flex flex-col items-center gap-2 text-white/20 hover:text-gold transition-colors group"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
              <div className="absolute inset-0 bg-gold animate-[slideDown_1.5s_ease-in-out_infinite]" />
            </div>
          </a>
        </Reveal>
      </div>

      {/* Fixed reservation button — mobile only */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <Button href="/reservation" variant="primary" size="md">
          Réserver une table
        </Button>
      </div>
    </section>
  );
}
