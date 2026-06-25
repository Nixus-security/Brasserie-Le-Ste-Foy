"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Users, CalendarDays, Clock, MapPin, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button, { ArrowIcon } from "@/components/Button";
import Reveal from "@/components/Reveal";

type Zone = "interieur" | "terrasse" | null;

export default function ReservationContent() {
  const [zone, setZone] = useState<Zone>(null);
  const [guests, setGuests] = useState("2");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("12:00");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const zoneLabel = zone === "interieur" ? "En salle" : zone === "terrasse" ? "En terrasse" : "";

  function buildPhoneMessage() {
    const parts = [
      `Réservation ${zoneLabel}`,
      `${guests} personne${Number(guests) > 1 ? "s" : ""}`,
      date && `le ${date}`,
      `à ${time}`,
      name && `au nom de ${name}`,
      message && `— ${message}`,
    ].filter(Boolean);
    return parts.join(", ");
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-navy-deeper">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-navy)_0%,_transparent_70%)] opacity-40" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Reveal animation="fade-up" duration={1000}>
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-12 h-[1px] bg-gold" />
                <span className="text-gold text-xs sm:text-sm uppercase tracking-[0.3em]">
                  Réservation
                </span>
                <span className="w-12 h-[1px] bg-gold" />
              </div>
              <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-6xl text-white leading-tight mb-4">
                Réservez votre
                <br />
                <span className="text-crimson italic">table</span>
              </h1>
              <p className="text-white/30 text-sm sm:text-base max-w-md mx-auto">
                Choisissez votre emplacement préféré et réservez par téléphone
              </p>
            </div>
          </Reveal>

          {/* Zone selector */}
          <Reveal animation="fade-up" delay={200} duration={900}>
            <p className="text-center text-white/40 text-sm uppercase tracking-[0.15em] mb-8">
              Où souhaitez-vous vous installer ?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-16">
              {/* Terrasse */}
              <button
                onClick={() => setZone("terrasse")}
                className="group relative overflow-hidden aspect-[4/3] cursor-pointer focus:outline-none"
              >
                <Image
                  src="/images/terrasse.png"
                  alt="Terrasse de la brasserie"
                  fill
                  className={`object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 ${
                    zone === "terrasse"
                      ? "grayscale-0 brightness-100"
                      : "grayscale brightness-50"
                  }`}
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 transition-all duration-700 ${
                    zone === "terrasse"
                      ? "bg-crimson/20"
                      : "bg-navy-deeper/50 group-hover:bg-navy-deeper/30"
                  }`}
                />

                {/* Selected ring */}
                <div
                  className={`absolute inset-0 border-2 transition-all duration-500 ${
                    zone === "terrasse"
                      ? "border-gold opacity-100"
                      : "border-transparent opacity-0"
                  }`}
                />

                {/* Check badge */}
                <div
                  className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    zone === "terrasse"
                      ? "bg-gold scale-100 opacity-100"
                      : "bg-white/10 scale-50 opacity-0"
                  }`}
                >
                  <Check className="w-5 h-5 text-navy-deeper" strokeWidth={3} />
                </div>

                {/* Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div
                    className={`transition-all duration-500 ${
                      zone === "terrasse" ? "scale-110" : "group-hover:scale-105"
                    }`}
                  >
                    <MapPin
                      className={`w-8 h-8 mx-auto mb-3 transition-colors duration-500 ${
                        zone === "terrasse" ? "text-gold" : "text-white/60"
                      }`}
                    />
                    <span
                      className={`font-[family-name:var(--font-heading)] text-2xl sm:text-3xl block transition-colors duration-500 ${
                        zone === "terrasse" ? "text-gold" : "text-white"
                      }`}
                    >
                      En terrasse
                    </span>
                    <span className="text-white/40 text-xs uppercase tracking-[0.2em] mt-2 block">
                      Tables extérieures
                    </span>
                  </div>
                </div>
              </button>

              {/* Intérieur */}
              <button
                onClick={() => setZone("interieur")}
                className="group relative overflow-hidden aspect-[4/3] cursor-pointer focus:outline-none"
              >
                <Image
                  src="/images/interieur.png"
                  alt="Intérieur de la brasserie"
                  fill
                  className={`object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 ${
                    zone === "interieur"
                      ? "grayscale-0 brightness-100"
                      : "grayscale brightness-50"
                  }`}
                />

                <div
                  className={`absolute inset-0 transition-all duration-700 ${
                    zone === "interieur"
                      ? "bg-crimson/20"
                      : "bg-navy-deeper/50 group-hover:bg-navy-deeper/30"
                  }`}
                />

                <div
                  className={`absolute inset-0 border-2 transition-all duration-500 ${
                    zone === "interieur"
                      ? "border-gold opacity-100"
                      : "border-transparent opacity-0"
                  }`}
                />

                <div
                  className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    zone === "interieur"
                      ? "bg-gold scale-100 opacity-100"
                      : "bg-white/10 scale-50 opacity-0"
                  }`}
                >
                  <Check className="w-5 h-5 text-navy-deeper" strokeWidth={3} />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div
                    className={`transition-all duration-500 ${
                      zone === "interieur" ? "scale-110" : "group-hover:scale-105"
                    }`}
                  >
                    <Users
                      className={`w-8 h-8 mx-auto mb-3 transition-colors duration-500 ${
                        zone === "interieur" ? "text-gold" : "text-white/60"
                      }`}
                    />
                    <span
                      className={`font-[family-name:var(--font-heading)] text-2xl sm:text-3xl block transition-colors duration-500 ${
                        zone === "interieur" ? "text-gold" : "text-white"
                      }`}
                    >
                      En salle
                    </span>
                    <span className="text-white/40 text-xs uppercase tracking-[0.2em] mt-2 block">
                      Tables intérieures
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </Reveal>

          {/* Reservation form */}
          <div
            className={`max-w-2xl mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              zone
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8 pointer-events-none"
            }`}
          >
            <div className="border border-white/[0.06] bg-white/[0.02] p-6 sm:p-10">
              {/* Selected zone recap */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-gold animate-pulse" />
                <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
                  {zoneLabel}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Name */}
                <div className="sm:col-span-2">
                  <label className="text-white/30 text-[11px] uppercase tracking-[0.15em] mb-2 block">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jean Dupont"
                    className="w-full bg-white/[0.04] border border-white/[0.08] text-white px-4 py-3.5 text-sm placeholder:text-white/15 focus:border-gold/40 focus:outline-none transition-colors"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label className="text-white/30 text-[11px] uppercase tracking-[0.15em] mb-2 flex items-center gap-2">
                    <Users className="w-3.5 h-3.5" />
                    Convives
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/[0.08] text-white px-4 py-3.5 text-sm focus:border-gold/40 focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n} value={n} className="bg-navy-dark">
                        {n} {n > 1 ? "personnes" : "personne"}
                      </option>
                    ))}
                    <option value="10+" className="bg-navy-dark">
                      10+ (nous contacter)
                    </option>
                  </select>
                </div>

                {/* Phone */}
                <div>
                  <label className="text-white/30 text-[11px] uppercase tracking-[0.15em] mb-2 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5" />
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="06 12 34 56 78"
                    className="w-full bg-white/[0.04] border border-white/[0.08] text-white px-4 py-3.5 text-sm placeholder:text-white/15 focus:border-gold/40 focus:outline-none transition-colors"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="text-white/30 text-[11px] uppercase tracking-[0.15em] mb-2 flex items-center gap-2">
                    <CalendarDays className="w-3.5 h-3.5" />
                    Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/[0.08] text-white px-4 py-3.5 text-sm focus:border-gold/40 focus:outline-none transition-colors"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="text-white/30 text-[11px] uppercase tracking-[0.15em] mb-2 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    Heure
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/[0.08] text-white px-4 py-3.5 text-sm focus:border-gold/40 focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    {[
                      "12:00", "12:15", "12:30", "12:45",
                      "13:00", "13:15", "13:30",
                      "19:00", "19:15", "19:30", "19:45",
                      "20:00", "20:15", "20:30",
                      "21:00", "21:15", "21:30",
                    ].map((t) => (
                      <option key={t} value={t} className="bg-navy-dark">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label className="text-white/30 text-[11px] uppercase tracking-[0.15em] mb-2 block">
                    Message (optionnel)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Allergies, occasion spéciale, chaise bébé..."
                    rows={3}
                    className="w-full bg-white/[0.04] border border-white/[0.08] text-white px-4 py-3.5 text-sm placeholder:text-white/15 focus:border-gold/40 focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Button
                  href={`tel:+33426641388`}
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4" />
                  Appeler pour réserver
                  <ArrowIcon />
                </Button>

                <Button
                  href={`mailto:brasserielestefoy@icloud.com?subject=${encodeURIComponent(`Réservation ${zoneLabel}`)}&body=${encodeURIComponent(buildPhoneMessage())}`}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Envoyer par email
                </Button>
              </div>

              <p className="text-center text-white/15 text-xs mt-6">
                La réservation sera confirmée par téléphone ou email
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-12 sm:py-16 bg-navy-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: "Par téléphone",
                text: "04 26 64 13 88",
                sub: "Méthode recommandée",
              },
              {
                icon: Clock,
                title: "Horaires",
                text: "Lun-Ven dès 7h",
                sub: "Sam dès 8h · Dim fermé",
              },
              {
                icon: Users,
                title: "Capacité",
                text: "36 couverts",
                sub: "Privatisation possible",
              },
            ].map((item) => (
              <Reveal key={item.title} animation="fade-up" delay={100} duration={700}>
                <div className="flex items-start gap-4 p-6 bg-white/[0.03] border border-white/5">
                  <item.icon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white text-sm font-medium mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm">{item.text}</p>
                    <p className="text-white/20 text-xs mt-1">{item.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
