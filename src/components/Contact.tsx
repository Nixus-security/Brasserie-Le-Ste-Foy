"use client";

import { useRef, type MouseEvent } from "react";
import { Phone, Mail, MapPin, CalendarDays, ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";
import Button, { ArrowIcon } from "@/components/Button";

const contactItems = [
  {
    href: "tel:+33426641388",
    icon: Phone,
    title: "Téléphone",
    text: "04 26 64 13 88",
    action: "Appeler",
    external: false,
    color: "crimson",
  },
  {
    href: "mailto:brasserielestefoy@icloud.com",
    icon: Mail,
    title: "Email",
    text: "brasserielestefoy@icloud.com",
    action: "Écrire",
    external: false,
    color: "navy",
  },
  {
    href: "https://maps.google.com/?q=7+Place+Xavier+Ricard+69110+Sainte-Foy-lès-Lyon",
    icon: MapPin,
    title: "Adresse",
    text: "7 Place Xavier Ricard\n69110 Sainte-Foy-lès-Lyon",
    action: "Itinéraire",
    external: true,
    color: "gold",
  },
];

function ContactCard({
  item,
  index,
}: {
  item: (typeof contactItems)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  function handleMouseMove(e: MouseEvent) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--cx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--cy", `${e.clientY - rect.top}px`);
  }

  function handleMouseLeave() {
    const el = cardRef.current;
    if (!el) return;
    el.style.removeProperty("--cx");
    el.style.removeProperty("--cy");
  }

  const glowColors: Record<string, string> = {
    crimson: "rgba(200,16,46,0.12)",
    navy: "rgba(26,31,43,0.10)",
    gold: "rgba(196,163,90,0.12)",
  };

  const iconBgColors: Record<string, string> = {
    crimson: "bg-crimson/10 group-hover:bg-crimson",
    navy: "bg-navy/10 group-hover:bg-navy-dark",
    gold: "bg-gold/10 group-hover:bg-gold",
  };

  const iconTextColors: Record<string, string> = {
    crimson: "text-crimson group-hover:text-white",
    navy: "text-navy-dark group-hover:text-white",
    gold: "text-gold group-hover:text-navy",
  };

  return (
    <Reveal animation="fade-up" delay={index * 150} duration={900}>
      <a
        ref={cardRef}
        href={item.href}
        {...(item.external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative flex flex-col p-7 sm:p-9 bg-white border border-cream-dark/80 hover:border-crimson/20 hover:shadow-2xl hover:shadow-crimson/[0.06] hover:-translate-y-1 transition-all duration-500 h-full overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(300px circle at var(--cx, 50%) var(--cy, 50%), ${glowColors[item.color]}, transparent 70%)`,
          }}
        />

        <span className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-crimson via-crimson/60 to-transparent transition-all duration-700 pointer-events-none" />

        <div className="relative flex items-center gap-4 mb-5">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ${iconBgColors[item.color]}`}
          >
            <item.icon
              className={`w-5 h-5 transition-colors duration-500 ${iconTextColors[item.color]}`}
            />
          </div>
          <h3 className="font-[family-name:var(--font-heading)] text-navy text-xl font-semibold">
            {item.title}
          </h3>
        </div>

        <p className="relative text-warm-gray text-sm whitespace-pre-line mb-7 leading-relaxed">
          {item.text}
        </p>

        <span className="relative mt-auto text-crimson text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
          {item.action}
          {item.external ? (
            <ExternalLink className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" />
          ) : (
            <ArrowIcon className="w-4 h-4" />
          )}
        </span>
      </a>
    </Reveal>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-28 bg-cream relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-crimson/[0.04] rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-navy/[0.03] rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Reveal animation="fade-down" duration={800}>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-12 h-[1px] bg-crimson" />
              <span className="text-crimson text-sm uppercase tracking-[0.2em] font-medium">
                Contactez-nous
              </span>
              <span className="w-12 h-[1px] bg-crimson" />
            </div>
          </Reveal>

          <Reveal animation="clip-up" duration={1100} delay={100}>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-6xl text-navy mt-3 mb-4">
              À votre <span className="italic text-crimson">service</span>
            </h2>
          </Reveal>

          <Reveal animation="fade-up" duration={800} delay={200}>
            <p className="text-warm-gray text-sm sm:text-base max-w-md mx-auto">
              Une question, une réservation ? Nous sommes à votre écoute.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {contactItems.map((item, i) => (
            <ContactCard key={item.title} item={item} index={i} />
          ))}
        </div>

        <Reveal animation="fade-up" duration={800} delay={600}>
          <div className="flex justify-center mt-14">
            <Button href="/reservation" variant="primary" size="lg">
              <CalendarDays className="w-4 h-4" />
              Réserver une table
              <ArrowIcon />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
