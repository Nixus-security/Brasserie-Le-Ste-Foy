"use client";

import { useState, useEffect, useCallback } from "react";
import { Star } from "lucide-react";

type Review = {
  name: string;
  badge?: string;
  date: string;
  text: string;
  rating: number;
};

const reviews: Review[] = [
  {
    name: "Marie-Danielle I.",
    badge: "Local Guide",
    date: "Février 2026",
    text: "Ambiance chaude, souriante, humaine, comme si tout le monde se connaissait ! Plusieurs personnes âgées comme moi, avec un grand sourire, comme si elles étaient chez elles ! Je suis très touchée par cet accueil de la part de l'ensemble de l'équipe !",
    rating: 5,
  },
  {
    name: "Philippe C.",
    badge: "Local Guide",
    date: "Décembre 2025",
    text: "Une équipe au top et fort sympathique ! Bonne cuisine, bons produits, bonne ambiance. À fréquenter sans modération !",
    rating: 5,
  },
  {
    name: "Pro",
    badge: "Local Guide",
    date: "Janvier 2026",
    text: "Très jolie terrasse et café excellent : bien équilibré, sans amertume ! Le personnel est très sympathique. Au plaisir !",
    rating: 5,
  },
  {
    name: "Pansart N.",
    badge: "Local Guide · 189 avis",
    date: "Juillet 2023",
    text: "Très bonne brasserie avec une très belle terrasse. Du choix, de la qualité, un très bon service. Bref une belle et bonne brasserie. À bientôt !",
    rating: 5,
  },
  {
    name: "A. Voltär",
    badge: "Local Guide",
    date: "Mai 2024",
    text: "C'est une brasserie avec des plats généreux et bons. L'origine des viandes est indiquée et le personnel et la direction sympathiques.",
    rating: 4,
  },
  {
    name: "Anthony C.",
    badge: "Local Guide",
    date: "Visiteur",
    text: "Très bon accueil, cuisine parfaite — produits frais, maison — rapport qualité/prix parfait.",
    rating: 5,
  },
  {
    name: "Jean-Olivier W.",
    badge: "Local Guide",
    date: "Août 2024",
    text: "Service agréable, terrasse à l'ombre, dans une zone calme. C'était délicieux, plat excellent… rien à redire !",
    rating: 5,
  },
  {
    name: "Aurélie G.",
    badge: "Local Guide",
    date: "Octobre 2024",
    text: "Des choix à l'ardoise gage de fraîcheur, un tartare de bœuf excellent, des frites maison et un service très agréable. On se sent bien, on a le temps et l'envie de rester !",
    rating: 5,
  },
  {
    name: "Fabrice T.",
    badge: "Local Guide",
    date: "Novembre 2024",
    text: "Accueil sympathique et convivial, cadre agréable, restauration authentique. N'est pas fidésien qui veut !",
    rating: 4,
  },
  {
    name: "DEMOISSON C.",
    badge: "Local Guide",
    date: "Mars 2024",
    text: "Bonne brasserie, service rapide, viande extra. Seul bémol un peu bruyant mais ça reste une brasserie !",
    rating: 4,
  },
  {
    name: "Kiara",
    date: "Visiteur",
    text: "Un lieu incontournable à Ste Foy ! Si vous venez déjeuner ou juste boire un café, c'est l'endroit idéal pour être en famille, entre amis ou juste profiter.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const [fade, setFade] = useState(true);

  const goTo = useCallback(
    (idx: number) => {
      setFade(false);
      setTimeout(() => {
        setActive(idx);
        setFade(true);
      }, 300);
    },
    []
  );

  const next = useCallback(() => {
    goTo((active + 1) % reviews.length);
  }, [active, goTo]);

  useEffect(() => {
    if (!isAuto) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAuto, next]);

  const current = reviews[active];

  const side1 = reviews[(active + 1) % reviews.length];
  const side2 = reviews[(active + 2) % reviews.length];
  const side3 = reviews[(active + reviews.length - 1) % reviews.length];

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-navy-deeper overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-crimson/[0.03] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold/[0.02] rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.02] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.015] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-[11px] uppercase tracking-[0.4em] font-medium">
              Témoignages
            </span>
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-6xl text-white leading-tight mb-8">
            Ce que disent
            <br />
            nos <span className="text-crimson italic">clients</span>
          </h2>

          {/* Rating badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://www.tripadvisor.fr/Restaurant_Review-g1080964-d8772587-Reviews-Brasserie_Le_Ste_Foy-Sainte_Foy_les_Lyon_Rhone_Auvergne_Rhone_Alpes.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.06] hover:border-[#34E0A1]/30 px-5 py-3 transition-all group"
            >
              <svg className="w-5 h-5 text-[#34E0A1]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm4-3c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm2 3c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
              </svg>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-semibold text-sm">4.1</span>
                  <span className="text-white/30 text-xs">/5</span>
                  <div className="flex gap-0.5 ml-1">
                    {[1,2,3,4].map(s => (
                      <div key={s} className="w-2 h-2 rounded-full bg-[#34E0A1]" />
                    ))}
                    <div className="w-2 h-2 rounded-full bg-[#34E0A1]/30" />
                  </div>
                </div>
                <span className="text-white/25 text-[10px]">57 avis · TripAdvisor</span>
              </div>
            </a>

            <a
              href="https://maps.google.com/?q=Brasserie+Le+Ste+Foy+Sainte-Foy-lès-Lyon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.06] hover:border-gold/30 px-5 py-3 transition-all group"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-semibold text-sm">4.4</span>
                  <span className="text-white/30 text-xs">/5</span>
                  <div className="flex gap-0.5 ml-1">
                    {[1,2,3,4].map(s => (
                      <div key={s} className="w-2 h-2 rounded-full bg-gold" />
                    ))}
                    <div className="w-2 h-2 rounded-full bg-gold/40" />
                  </div>
                </div>
                <span className="text-white/25 text-[10px]">66 avis · Google</span>
              </div>
            </a>

            <div className="flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.06] px-5 py-3">
              <span className="text-crimson font-[family-name:var(--font-heading)] text-lg">#6</span>
              <div className="text-left">
                <span className="text-white/50 text-[11px] block leading-tight">sur 18 restaurants</span>
                <span className="text-white/25 text-[10px]">Sainte-Foy-lès-Lyon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Giant quote mark */}
            <div className="absolute -top-8 left-0 sm:-left-4 pointer-events-none">
              <svg
                className="w-20 h-20 sm:w-28 sm:h-28 text-crimson/10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Featured review content */}
            <div
              className={`transition-all duration-500 ${
                fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="text-center px-4 sm:px-12 pt-12">
                {/* Stars */}
                <div className="flex items-center justify-center gap-1.5 mb-8">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={`w-5 h-5 ${
                        s < current.rating
                          ? "fill-gold text-gold"
                          : "text-white/10"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="font-[family-name:var(--font-heading)] text-white/80 text-lg sm:text-xl lg:text-3xl leading-relaxed lg:leading-relaxed mb-8 sm:mb-10 italic">
                  &ldquo;{current.text}&rdquo;
                </p>

                {/* Divider */}
                <div className="w-12 h-[1px] bg-gold/40 mx-auto mb-8" />

                {/* Author */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-crimson to-crimson-dark flex items-center justify-center text-white font-[family-name:var(--font-heading)] text-xl shadow-lg shadow-crimson/20">
                    {current.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-medium text-base tracking-wide">
                      {current.name}
                    </div>
                    <div className="text-white/25 text-xs mt-1">
                      {current.badge && `${current.badge} · `}
                      {current.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side reviews (desktop) */}
        <div className="hidden lg:grid grid-cols-3 gap-5 max-w-5xl mx-auto mb-14">
          {[side3, side1, side2].map((review, i) => (
            <button
              key={review.name + i}
              onClick={() => {
                setIsAuto(false);
                const idx = reviews.indexOf(review);
                goTo(idx);
              }}
              className="text-left p-6 border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/10 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className={`w-3 h-3 ${
                      s < review.rating
                        ? "fill-gold/50 text-gold/50"
                        : "text-white/5"
                    }`}
                  />
                ))}
              </div>
              <p className="text-white/30 text-sm leading-relaxed line-clamp-2 group-hover:text-white/50 transition-colors mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-crimson/10 flex items-center justify-center text-crimson/60 text-xs font-[family-name:var(--font-heading)]">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white/50 text-xs font-medium">
                    {review.name}
                  </div>
                  <div className="text-white/15 text-[10px]">{review.date}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Progress bar navigation */}
        <div className="flex items-center justify-center gap-1">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsAuto(false);
                goTo(i);
              }}
              className="relative h-6 flex items-center group"
              aria-label={`Avis ${i + 1}`}
            >
              <span
                className={`block h-[2px] rounded-full transition-all duration-500 ${
                  i === active
                    ? "w-10 bg-gradient-to-r from-crimson to-gold"
                    : "w-3 bg-white/10 group-hover:bg-white/25 group-hover:w-5"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Google CTA */}
        <div className="text-center mt-10">
          <a
            href="https://maps.google.com/?q=Brasserie+Le+Ste+Foy+Sainte-Foy-lès-Lyon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/20 hover:text-gold text-xs uppercase tracking-[0.2em] transition-colors"
          >
            Voir tous les avis sur Google
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
