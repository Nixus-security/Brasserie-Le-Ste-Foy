"use client";

import Image from "next/image";
import {
  Clock,
  MapPin,
  CircleParking,
  Wifi,
  Accessibility,
  Beer,
  Coffee,
  ShoppingBag,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const schedule = [
  { day: "Lundi", hours: "7h00 – 19h45" },
  { day: "Mardi", hours: "7h00 – 19h45" },
  { day: "Mercredi", hours: "7h00 – 19h45" },
  { day: "Jeudi", hours: "7h00 – 19h45" },
  { day: "Vendredi", hours: "7h00 – 20h30" },
  { day: "Samedi", hours: "8h00 – 15h00" },
  { day: "Dimanche", hours: "8h30 – 13h00" },
];

const services = [
  { icon: Beer, label: "Bar & Bières" },
  { icon: Coffee, label: "Café & Terrasse" },
  { icon: ShoppingBag, label: "À emporter" },
  { icon: Wifi, label: "Wi-Fi gratuit" },
  { icon: Accessibility, label: "Accessible PMR" },
  { icon: CircleParking, label: "Parking rue" },
];

function getCurrentDay(): number {
  const d = new Date();
  return d.getDay() === 0 ? 6 : d.getDay() - 1;
}

export default function Hours() {
  const today = getCurrentDay();

  return (
    <section
      id="horaires"
      className="py-16 sm:py-20 lg:py-28 bg-navy-deeper relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/terrasse-soiree.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-navy-deeper/70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <Reveal animation="fade-right" duration={900}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-[1px] bg-gold" />
                <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
                  Quand venir
                </span>
              </div>
            </Reveal>

            <Reveal animation="clip-up" duration={1100} delay={100}>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-5">
                Nos Horaires
              </h2>
            </Reveal>

            <Reveal animation="blur-in" delay={200} duration={800}>
              <p className="text-white/60 text-lg mb-12">
                Ouvert 7j/7. Restauration le midi, bar toute la
                journée.
              </p>
            </Reveal>

            <Reveal animation="fade-up" delay={300} duration={900}>
              <div className="bg-white/[0.03] border border-white/5">
                {schedule.map((item, index) => (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between py-4 px-6 transition-colors ${
                      index !== schedule.length - 1
                        ? "border-b border-white/5"
                        : ""
                    } ${
                      index === today
                        ? "bg-crimson/10 border-l-2 border-l-crimson"
                        : "hover:bg-white/[0.02]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {index === today && (
                        <span className="w-2 h-2 bg-crimson rounded-full animate-pulse" />
                      )}
                      <span
                        className={`font-medium text-sm ${
                          index === today ? "text-white" : "text-white/70"
                        }`}
                      >
                        {item.day}
                      </span>
                      {index === today && (
                        <span className="text-[10px] bg-crimson/20 text-crimson-light px-2 py-0.5 uppercase tracking-wider">
                          Aujourd&apos;hui
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-sm ${
                        item.closed
                          ? "text-white/50 italic"
                          : "text-white/60 font-mono"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[1px] mt-8 bg-white/5">
              {services.map((service, i) => (
                <Reveal
                  key={service.label}
                  animation="fade-up"
                  delay={500 + i * 80}
                  duration={600}
                >
                  <div className="bg-navy-deeper flex flex-col items-center justify-center gap-2 p-5 text-center min-h-[90px]">
                    <div className="w-5 h-5 flex items-center justify-center shrink-0">
                      <service.icon className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-white/60 text-[10px] uppercase tracking-wider leading-tight">
                      {service.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Reveal animation="fade-left" delay={200} duration={1000}>
              <div className="overflow-hidden h-64 lg:h-80 shadow-2xl">
                <iframe
                  title="Brasserie Le Ste Foy"
                  src="https://maps.google.com/maps?q=Brasserie+Le+Ste+Foy,+7+Place+Xavier+Ricard,+69110+Sainte-Foy-lès-Lyon&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>

            <Reveal animation="fade-left" delay={350} duration={800}>
              <div className="flex items-start gap-4 p-6 bg-white/[0.03] border border-white/5">
                <MapPin className="w-5 h-5 text-crimson shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-white text-sm mb-1">
                    Notre adresse
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    7 Place Xavier Ricard
                    <br />
                    69110 Sainte-Foy-lès-Lyon
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal animation="fade-left" delay={450} duration={800}>
              <div className="flex items-start gap-4 p-6 bg-white/[0.03] border border-white/5">
                <Clock className="w-5 h-5 text-crimson shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-white text-sm mb-1">
                    Réservation & À emporter
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Réservation par téléphone recommandée.
                    <br />
                    Plats à emporter disponibles sur toute la carte.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
