"use client";

import { useEffect, useRef, useState } from "react";

type TimelineItem = {
  year: string;
  title: string;
  text: string;
  accent: boolean;
};

const timeline: TimelineItem[] = [
  {
    year: "~1900",
    title: "Les origines",
    text: "L'adresse du 7 place Xavier Ricard existe depuis plus de cent ans en tant que commerce de quartier. Pendant des décennies, le lieu fonctionne comme un bar-PMU, point de passage incontournable des habitants de Sainte-Foy-lès-Lyon.",
    accent: false,
  },
  {
    year: "2015",
    title: "La renaissance",
    text: "En octobre 2015, Philippe Pellé rachète l'ancien Bar-PMU et décide de le transformer entièrement. Inspiré par ses souvenirs familiaux à Reims, il veut créer « l'esprit brasserie » — un vrai lieu de vie, de rencontres et de convivialité.",
    accent: true,
  },
  {
    year: "2015",
    title: "Le relooking",
    text: "Le décor est entièrement repensé : mobilier chiné en brocante, disparition des écrans de télévision, PMU rendu discret. La salle de 36 couverts devient un espace chaleureux, loin de l'ambiance bar d'antan.",
    accent: false,
  },
  {
    year: "2015",
    title: "En cuisine",
    text: "Le chef David Pianina prend les commandes en cuisine. L'équipe de service, déjà en place depuis longtemps, assure la continuité et la proximité avec les habitués du quartier.",
    accent: false,
  },
  {
    year: "2023",
    title: "Nouveau chapitre",
    text: "La société BERNS reprend l'établissement en mai 2023, avec une nouvelle structure mais la même identité. L'enseigne reste Brasserie Le Ste Foy — le nom, l'esprit et la cuisine demeurent fidèles à l'ADN d'origine.",
    accent: true,
  },
  {
    year: "Auj.",
    title: "Aujourd'hui",
    text: "La brasserie continue de proposer une cuisine familiale fait maison, un menu du jour, une terrasse ombragée et des soirées à thème. Un lieu simple, vivant, centré sur la convivialité et la cuisine de brasserie.",
    accent: false,
  },
];

function TimelineHeader() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center mb-16 sm:mb-24">
      <div
        className="inline-flex items-center gap-4 mb-6 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold/60" />
        <span className="text-gold text-[11px] uppercase tracking-[0.4em] font-medium">
          Chronologie
        </span>
        <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold/60" />
      </div>
      <h2
        className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-white transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transitionDelay: visible ? "150ms" : "0ms",
        }}
      >
        D&apos;un bar-PMU à une
        <br />
        <span className="text-crimson italic">brasserie de quartier</span>
      </h2>
    </div>
  );
}

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setRatio(Math.min(entry.intersectionRatio * 2.5, 1));
      },
      {
        threshold: Array.from({ length: 20 }, (_, i) => i / 20),
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;
  const eased = ratio < 0.5
    ? 4 * ratio * ratio * ratio
    : 1 - Math.pow(-2 * ratio + 2, 3) / 2;

  return (
    <div ref={ref} className="relative grid md:grid-cols-[1fr_80px_1fr] gap-0 items-start">
      <div
        className={`py-6 sm:py-10 px-4 sm:px-8 ${
          isLeft ? "md:text-right" : "md:order-3"
        }`}
        style={{
          opacity: eased,
          transform: `translate3d(${isLeft ? -1 : 1}${(1 - eased) * 60}px, ${(1 - eased) * 20}px, 0) scale(${0.92 + eased * 0.08})`,
          transition: "transform 0.1s linear, opacity 0.1s linear",
        }}
      >
        {isLeft && (
          <>
            <div className="md:hidden inline-flex items-center gap-2 mb-3">
              <span
                className={`text-xs font-bold px-3 py-1 ${
                  item.accent
                    ? "bg-crimson/20 text-crimson border border-crimson/30"
                    : "bg-white/[0.05] text-gold border border-white/10"
                }`}
              >
                {item.year}
              </span>
            </div>
            <h3
              className={`font-[family-name:var(--font-heading)] text-xl sm:text-2xl lg:text-3xl mb-3 ${
                item.accent ? "text-crimson" : "text-white"
              }`}
            >
              {item.title}
            </h3>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              {item.text}
            </p>
          </>
        )}
      </div>

      <div className="hidden md:flex flex-col items-center">
        <div className="w-[1px] h-10 bg-white/10" />
        <div
          className="relative"
          style={{
            transform: `scale(${0.6 + eased * 0.4})`,
            opacity: eased,
            transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
          }}
        >
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-colors duration-500 ${
              item.accent
                ? "border-crimson bg-crimson/20"
                : "border-gold/30 bg-white/[0.03]"
            }`}
          >
            <span
              className={`font-[family-name:var(--font-heading)] text-xs font-bold ${
                item.accent ? "text-crimson" : "text-gold"
              }`}
            >
              {item.year}
            </span>
          </div>
          <div
            className={`absolute inset-0 rounded-full border ${
              item.accent ? "border-crimson/20" : "border-gold/10"
            }`}
            style={{
              transform: `scale(${1 + eased * 0.4})`,
              opacity: Math.max(0, 1 - eased * 1.5),
              transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
            }}
          />
        </div>
        <div
          className="w-[1px] flex-1 origin-top"
          style={{
            background: `linear-gradient(to bottom, ${item.accent ? "rgba(200,16,46,0.3)" : "rgba(255,255,255,0.1)"}, rgba(255,255,255,0.05))`,
            transform: `scaleY(${eased})`,
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>

      <div
        className={`py-6 sm:py-10 px-4 sm:px-8 ${
          isLeft ? "md:order-3 hidden md:block" : ""
        }`}
        style={
          !isLeft
            ? {
                opacity: eased,
                transform: `translate3d(${(1 - eased) * 60}px, ${(1 - eased) * 20}px, 0) scale(${0.92 + eased * 0.08})`,
                transition: "transform 0.1s linear, opacity 0.1s linear",
              }
            : undefined
        }
      >
        {!isLeft && (
          <>
            <div className="md:hidden inline-flex items-center gap-2 mb-3">
              <span
                className={`text-xs font-bold px-3 py-1 ${
                  item.accent
                    ? "bg-crimson/20 text-crimson border border-crimson/30"
                    : "bg-white/[0.05] text-gold border border-white/10"
                }`}
              >
                {item.year}
              </span>
            </div>
            <h3
              className={`font-[family-name:var(--font-heading)] text-xl sm:text-2xl lg:text-3xl mb-3 ${
                item.accent ? "text-crimson" : "text-white"
              }`}
            >
              {item.title}
            </h3>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              {item.text}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      setProgress(Math.max(0, Math.min(1, scrolled / total)));
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 bg-navy-deeper relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at 50% ${progress * 100}%, rgba(200,16,46,0.04), transparent 70%)`,
        }}
      />

      <div className="absolute top-0 left-0 w-[2px] h-full bg-white/[0.03]">
        <div
          className="w-full bg-gradient-to-b from-crimson via-gold to-crimson"
          style={{
            height: `${progress * 100}%`,
            transition: "height 0.1s linear",
          }}
        />
      </div>

      <div
        className="fixed right-6 z-30 hidden lg:flex flex-col items-center gap-2"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          opacity: progress > 0.02 && progress < 0.98 ? 1 : 0,
          transition: "opacity 0.5s",
        }}
      >
        <div className="w-[2px] h-20 bg-white/5 rounded-full overflow-hidden">
          <div
            className="w-full bg-gold rounded-full"
            style={{ height: `${progress * 100}%`, transition: "height 0.1s linear" }}
          />
        </div>
        <span className="text-white/50 text-[10px] font-mono">
          {Math.round(progress * 100)}%
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <TimelineHeader />

        <div className="absolute left-1/2 top-48 bottom-0 -translate-x-1/2 w-[1px] bg-white/[0.04] hidden md:block">
          <div
            className="w-full bg-gradient-to-b from-gold/40 via-crimson/30 to-gold/40"
            style={{
              height: `${progress * 100}%`,
              transition: "height 0.15s linear",
            }}
          />
        </div>

        <div className="space-y-0">
          {timeline.map((item, i) => (
            <TimelineCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
