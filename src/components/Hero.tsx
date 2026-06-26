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
        <Reveal animation="fade-down" duration={800} delay={200}>
          <div className="flex items-center justify-center gap-5 mb-4">
            <a
              href="https://maps.google.com/?q=Brasserie+Le+Ste+Foy+Sainte-Foy-lès-Lyon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-white/80 text-xs font-semibold">4.4</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="w-1.5 h-1.5 rounded-full bg-gold" />
                ))}
                <div className="w-1.5 h-1.5 rounded-full bg-gold/30" />
              </div>
            </a>

            <div className="w-px h-4 bg-white/20" />

            <a
              href="https://www.tripadvisor.fr/Restaurant_Review-g1080964-d8772587-Reviews-Brasserie_Le_Ste_Foy-Sainte_Foy_les_Lyon_Rhone_Auvergne_Rhone_Alpes.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <svg className="w-4 h-4 text-[#34E0A1] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 004.3 10.163 5.997 5.997 0 005.337-3.267l.406.706.407-.706a5.997 5.997 0 005.337 3.267 5.997 5.997 0 004.3-10.163L24 6.648h-4.35a13.573 13.573 0 00-7.644-2.353zM6.263 17.67a4.728 4.728 0 01-4.721-4.722 4.728 4.728 0 014.721-4.721 4.728 4.728 0 014.722 4.721 4.728 4.728 0 01-4.722 4.722zm5.743-4.891a6.27 6.27 0 00-2.603-4.266 12.207 12.207 0 015.194 0 6.27 6.27 0 00-2.591 4.266zm5.731 4.891a4.728 4.728 0 01-4.722-4.722 4.728 4.728 0 014.722-4.721 4.728 4.728 0 014.721 4.721 4.728 4.728 0 01-4.721 4.722zM6.263 9.93a3.02 3.02 0 00-3.018 3.017 3.02 3.02 0 003.018 3.018 3.02 3.02 0 003.017-3.018A3.02 3.02 0 006.263 9.93zm0 4.26a1.244 1.244 0 110-2.489 1.244 1.244 0 010 2.489zm11.474-4.26a3.02 3.02 0 00-3.018 3.017 3.02 3.02 0 003.018 3.018 3.02 3.02 0 003.017-3.018 3.02 3.02 0 00-3.017-3.017zm0 4.26a1.244 1.244 0 110-2.489 1.244 1.244 0 010 2.489z" />
              </svg>
              <span className="text-white/80 text-xs font-semibold">4.1</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="w-1.5 h-1.5 rounded-full bg-[#34E0A1]" />
                ))}
                <div className="w-1.5 h-1.5 rounded-full bg-[#34E0A1]/30" />
              </div>
            </a>
          </div>
        </Reveal>

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
