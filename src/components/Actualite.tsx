"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Calendar, Clock, Music, UtensilsCrossed } from "lucide-react";
import Reveal from "@/components/Reveal";

type Event = {
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  details: { icon: "music" | "food" | "time"; label: string }[];
  badge?: string;
  location?: string;
};

const events: Event[] = [
  {
    title: "Fête de la Musique",
    date: "Dimanche 21 Juin",
    time: "À partir de 17h00",
    description:
      "Musique live, planches à partager et ambiance conviviale sur la terrasse.",
    image: "/images/actualite-fete-musique.jpg",
    details: [
      { icon: "music", label: "DJ Set by Olivier Figuet" },
      { icon: "food", label: "Planches à partager & Merguez" },
      { icon: "time", label: "Dimanche 21 Juin — 17h00" },
    ],
    badge: "Prochain événement",
    location: "Brasserie Le Ste Foy",
  },
];

const iconMap = {
  music: Music,
  food: UtensilsCrossed,
  time: Clock,
};

function EventCard({ event }: { event: Event }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center max-w-5xl mx-auto"
    >
      {/* Poster — clip-path reveal from left */}
      <div
        className="relative flex-shrink-0 w-full sm:w-[320px] lg:w-[360px]"
        style={{
          clipPath: visible
            ? "inset(0 0 0 0)"
            : "inset(0 100% 0 0)",
          transition: "clip-path 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
        }}
      >
        {/* Badge — drops from top */}
        {event.badge && (
          <div
            className="absolute -top-3 left-4 z-10 bg-crimson text-white text-[10px] uppercase tracking-[0.15em] px-4 py-1.5 font-medium"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(-20px)",
              transition:
                "opacity 0.4s ease 1s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 1s",
            }}
          >
            {event.badge}
          </div>
        )}
        <div className="relative overflow-hidden border border-white/[0.06] rounded-sm">
          <Image
            src={event.image}
            alt={event.title}
            width={360}
            height={480}
            className="object-cover w-full h-[440px] sm:h-[480px] hover:scale-105 transition-transform duration-700"
            style={{
              transform: visible ? "scale(1)" : "scale(1.15)",
              transition: "transform 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
            }}
          />
        </div>
      </div>

      {/* Details — staggered from right */}
      <div className="flex-1 w-full">
        {/* Title block */}
        <div
          className="border-l-2 border-crimson pl-5 mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateX(0)"
              : "translateX(60px)",
            transition:
              "opacity 0.6s ease 0.5s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
          }}
        >
          {/* Crimson bar grows */}
          <div
            className="absolute -ml-5 w-0.5 bg-crimson"
            style={{
              height: visible ? "100%" : "0%",
              transition: "height 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
            }}
          />
          <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-2">
            {event.title}
          </h3>
          {event.location && (
            <span className="text-white/40 text-sm">{event.location}</span>
          )}
        </div>

        {/* Date/time */}
        <div
          className="flex items-center gap-3 mb-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateX(0)"
              : "translateX(40px)",
            transition:
              "opacity 0.5s ease 0.7s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.7s",
          }}
        >
          <div className="flex items-center gap-2 text-gold">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">{event.date}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <div className="flex items-center gap-2 text-white/50">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{event.time}</span>
          </div>
        </div>

        {/* Description */}
        <p
          className="text-white/50 text-base leading-relaxed mb-10 max-w-md"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateY(0)"
              : "translateY(20px)",
            transition:
              "opacity 0.5s ease 0.85s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.85s",
          }}
        >
          {event.description}
        </p>

        {/* Detail cards — staggered cascade */}
        <div className="flex flex-col gap-3">
          {event.details.map((detail, i) => {
            const Icon = iconMap[detail.icon];
            const delay = 1 + i * 0.15;
            return (
              <div
                key={i}
                className="flex items-center gap-4 px-5 py-4 bg-white/[0.03] border border-white/[0.05] hover:border-gold/15 transition-colors"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? "translateX(0) scale(1)"
                    : "translateX(50px) scale(0.95)",
                  transition: `opacity 0.4s ease ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
                }}
              >
                <Icon className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-white/70 text-sm font-medium">
                  {detail.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Actualite() {
  return (
    <section
      id="actualite"
      className="relative py-20 sm:py-28 lg:py-36 bg-navy-deeper overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-crimson/[0.03] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold/[0.02] rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal animation="fade-up" duration={900}>
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold" />
              <span className="text-gold text-[11px] uppercase tracking-[0.4em] font-medium">
                Actualité
              </span>
              <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold" />
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-6xl text-white leading-tight">
              Nos <span className="text-crimson italic">événements</span>
            </h2>
          </div>
        </Reveal>

        {events.map((event, idx) => (
          <EventCard key={idx} event={event} />
        ))}
      </div>
    </section>
  );
}
