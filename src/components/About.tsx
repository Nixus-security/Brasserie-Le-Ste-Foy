"use client";

import Image from "next/image";
import { UtensilsCrossed, Leaf, Clock, Users } from "lucide-react";
import Reveal from "@/components/Reveal";

const features = [
  {
    icon: UtensilsCrossed,
    title: "Fait Maison",
    description: "Plats préparés sur place avec des produits frais",
  },
  {
    icon: Leaf,
    title: "Terroir",
    description: "Ingrédients locaux et de saison sélectionnés",
  },
  {
    icon: Clock,
    title: "Service Rapide",
    description: "Idéal pour la pause déjeuner, qualité intacte",
  },
  {
    icon: Users,
    title: "Convivial",
    description: "Lieu chaleureux pour familles et amis du quartier",
  },
];

export default function About() {
  return (
    <section id="apropos" className="py-16 sm:py-20 lg:py-32 bg-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-crimson/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photos grid */}
          <Reveal animation="fade-right" duration={1200} className="relative">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-7 space-y-4">
                <div className="rounded-sm overflow-hidden shadow-2xl group">
                  <Image
                    src="/images/Capture d'écran 2026-06-24 204908.png"
                    alt="Intérieur de la brasserie"
                    width={500}
                    height={600}
                    className="object-cover w-full h-72 sm:h-80 transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                </div>
                <div className="rounded-sm overflow-hidden shadow-2xl group">
                  <Image
                    src="/images/Capture d'écran 2026-06-24 204732.png"
                    alt="Entrée de la brasserie"
                    width={500}
                    height={400}
                    className="object-cover w-full h-48 transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="col-span-5 space-y-4 pt-12">
                <div className="rounded-sm overflow-hidden shadow-2xl group">
                  <Image
                    src="/images/plat.png"
                    alt="Œufs meurette"
                    width={400}
                    height={400}
                    className="object-cover w-full h-48 transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                </div>
                <div className="rounded-sm overflow-hidden shadow-2xl group">
                  <Image
                    src="/images/Capture d'écran 2026-06-24 204811.png"
                    alt="Terrasse de la brasserie"
                    width={400}
                    height={500}
                    className="object-cover w-full h-72 sm:h-80 transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-6 bg-navy-dark text-white px-8 py-5 shadow-xl z-10">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-[family-name:var(--font-heading)] text-gold">
                  €€
                </div>
                <div>
                  <div className="text-white/90 text-sm font-medium">
                    Budget moyen
                  </div>
                  <div className="text-white/50 text-xs">
                    21 – 30€ par personne
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text content */}
          <div>
            <Reveal animation="fade-left" duration={900}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-[1px] bg-crimson" />
                <span className="text-crimson text-sm uppercase tracking-[0.2em] font-medium">
                  Notre histoire
                </span>
              </div>
            </Reveal>

            <Reveal animation="clip-up" duration={1100} delay={100}>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-6xl text-navy leading-tight mb-6 sm:mb-8">
                Une brasserie
                <br />
                de <span className="text-gradient italic">tradition</span>
              </h2>
            </Reveal>

            <Reveal animation="blur-in" delay={250} duration={900}>
              <p className="text-warm-gray text-base sm:text-lg leading-relaxed mb-6">
                Au cœur de la Place Xavier Ricard, la Brasserie Le Ste Foy
                accueille les habitants de Sainte-Foy-lès-Lyon dans une ambiance
                rétro et chaleureuse. Ici, la cuisine est familiale, généreuse
                et faite maison.
              </p>
            </Reveal>

            <Reveal animation="blur-in" delay={350} duration={900}>
              <p className="text-warm-gray text-base sm:text-lg leading-relaxed mb-8 sm:mb-12">
                Des classiques de la brasserie française — burgers, œufs
                meurette, tartare, salades composées — préparés avec soin et
                servis avec le sourire.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <Reveal
                  key={feature.title}
                  animation="fade-up"
                  delay={400 + i * 150}
                  duration={700}
                >
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 shrink-0 bg-navy-dark flex items-center justify-center group-hover:bg-crimson transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-crimson/20">
                      <feature.icon className="w-5 h-5 text-gold group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1 text-sm uppercase tracking-wide">
                        {feature.title}
                      </h3>
                      <p className="text-warm-gray text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
