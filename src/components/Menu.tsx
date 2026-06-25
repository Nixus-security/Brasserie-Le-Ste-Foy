"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Button, { ArrowIcon } from "@/components/Button";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  image?: string;
  badge?: string;
};

type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  items: MenuItem[];
};

const menuCategories: MenuCategory[] = [
  {
    id: "entrees",
    title: "Entrées",
    subtitle: "Pour commencer",
    icon: "01",
    items: [
      {
        name: "Œufs Meurette",
        description:
          "Œufs pochés, sauce bourguignonne, lardons, champignons, croûtons",
        price: "12,50 €",
        image: "/images/plat.png",
        badge: "Spécialité",
      },
      {
        name: "Salade Lyonnaise",
        description: "Frisée, lardons, croûtons, œuf poché, vinaigrette",
        price: "11,00 €",
      },
      {
        name: "Plat à venir",
        description: "Nouveau plat en préparation",
        price: "—",
        badge: "Bientôt",
      },
    ],
  },
  {
    id: "plats",
    title: "Plats",
    subtitle: "Nos classiques",
    icon: "02",
    items: [
      {
        name: "Burger Le Ste Foy",
        description:
          "Steak haché frais, cheddar, bacon, salade, tomate, sauce maison, frites",
        price: "16,50 €",
        badge: "Populaire",
      },
      {
        name: "Tartare de Bœuf",
        description: "Bœuf haché au couteau, condiments, frites maison",
        price: "18,00 €",
      },
      {
        name: "Plat du Jour",
        description:
          "Selon le marché et l'inspiration du chef — demandez-nous !",
        price: "14,50 €",
        badge: "Chaque jour",
      },
      {
        name: "Plat à venir",
        description: "Nouveau plat en préparation",
        price: "—",
        badge: "Bientôt",
      },
    ],
  },
  {
    id: "salades",
    title: "Salades",
    subtitle: "Fraîcheur & légèreté",
    icon: "03",
    items: [
      {
        name: "Salade Composée",
        description: "Mélange de saison, crudités, vinaigrette maison",
        price: "13,00 €",
      },
      {
        name: "Plat à venir",
        description: "Nouveau plat en préparation",
        price: "—",
        badge: "Bientôt",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    subtitle: "Pour finir en douceur",
    icon: "04",
    items: [
      {
        name: "Tiramisu Maison",
        description: "Mascarpone, café, biscuits, cacao",
        price: "8,50 €",
        badge: "Coup de cœur",
      },
      {
        name: "Plat à venir",
        description: "Nouveau dessert en préparation",
        price: "—",
        badge: "Bientôt",
      },
    ],
  },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState("entrees");
  const [fade, setFade] = useState(true);
  const activeCategory = menuCategories.find((c) => c.id === activeTab)!;

  function switchTab(id: string) {
    if (id === activeTab) return;
    setFade(false);
    setTimeout(() => {
      setActiveTab(id);
      setFade(true);
    }, 250);
  }

  return (
    <section id="carte" className="relative py-12 sm:py-20 lg:py-32 bg-navy-deeper overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-crimson/[0.02] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/[0.02] rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-14 lg:mb-20">
          <Reveal animation="fade-down" duration={800}>
            <div className="inline-flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-gold/60" />
              <span className="text-gold text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-medium">
                Nos plats
              </span>
              <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-gold/60" />
            </div>
          </Reveal>

          <Reveal animation="fade-up" duration={1100} delay={100}>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-5xl lg:text-7xl text-white leading-none mb-3 sm:mb-6">
              La <span className="italic text-crimson">Carte</span>
            </h2>
          </Reveal>

          <Reveal animation="blur-in" delay={300} duration={900}>
            <p className="text-white/30 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              Cuisine française fait maison, produits frais et de saison.
              <span className="text-gold/40 block sm:inline">
                {" "}Menu du jour disponible chaque midi.
              </span>
            </p>
          </Reveal>
        </div>

        {/* Tabs — always horizontal scroll mobile, vertical desktop */}
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-6 max-w-5xl mx-auto">
          {/* Mobile tabs */}
          <div className="lg:hidden">
            <div className="flex gap-2 overflow-x-auto scrollbar-none -mx-4 px-4 pb-1">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => switchTab(cat.id)}
                  className={`shrink-0 px-4 py-2 text-[11px] uppercase tracking-[0.1em] font-medium transition-all border whitespace-nowrap ${
                    activeTab === cat.id
                      ? "text-white bg-crimson border-crimson"
                      : "text-white/40 border-white/[0.08] active:bg-white/[0.05]"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop tabs */}
          <div className="hidden lg:block w-[260px] shrink-0 border-r border-white/[0.06]">
            <div className="sticky top-32 pr-6">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => switchTab(cat.id)}
                  className={`group w-full text-left py-5 px-6 transition-all duration-500 relative ${
                    activeTab === cat.id ? "bg-white/[0.03]" : "hover:bg-white/[0.02]"
                  }`}
                >
                  <div
                    className={`absolute right-0 top-0 bottom-0 w-[2px] transition-all duration-500 ${
                      activeTab === cat.id ? "bg-crimson" : "bg-transparent"
                    }`}
                  />
                  <span className={`block text-[10px] font-mono mb-1 transition-colors ${activeTab === cat.id ? "text-crimson" : "text-white/15"}`}>
                    {cat.icon}
                  </span>
                  <span className={`block font-[family-name:var(--font-heading)] text-lg transition-colors ${activeTab === cat.id ? "text-white" : "text-white/30 group-hover:text-white/50"}`}>
                    {cat.title}
                  </span>
                  <span className={`block text-[11px] mt-0.5 transition-colors ${activeTab === cat.id ? "text-gold/50" : "text-white/10"}`}>
                    {cat.subtitle}
                  </span>
                </button>
              ))}
              <div className="mt-8 px-6">
                <div className="w-8 h-[1px] bg-white/[0.06] mb-4" />
                <a
                  href="https://instagram.com/lestefoy_brasserie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/20 hover:text-gold text-xs transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  @lestefoy_brasserie
                </a>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`flex-1 lg:pl-10 min-w-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            {/* Category header */}
            <div className="mb-5 sm:mb-8 flex items-center gap-3">
              <span className="text-crimson/20 font-mono text-2xl sm:text-4xl lg:text-6xl font-bold leading-none">
                {activeCategory.icon}
              </span>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg sm:text-2xl lg:text-3xl text-white">
                  {activeCategory.title}
                </h3>
                <span className="text-white/20 text-[10px] sm:text-[11px] italic">
                  {activeCategory.subtitle}
                </span>
              </div>
            </div>

            {/* Items */}
            {activeCategory.items.map((item, i) => {
              const isSoon = item.badge === "Bientôt";

              return (
                <div key={item.name + i}>
                  <div
                    className={`group relative pl-3 py-4 sm:py-6 transition-all ${
                      isSoon ? "opacity-30" : ""
                    }`}
                  >
                    {/* Name + price row */}
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <div className="min-w-0">
                        <h4
                          className={`font-[family-name:var(--font-heading)] text-[15px] sm:text-lg lg:text-xl transition-colors leading-snug ${
                            isSoon
                              ? "text-white/30 italic"
                              : "text-white group-hover:text-gold"
                          }`}
                        >
                          {item.name}
                        </h4>
                        {item.badge && !isSoon && (
                          <span className="inline-block mt-1 text-[8px] sm:text-[9px] uppercase tracking-[0.1em] px-2 py-0.5 bg-crimson/15 text-crimson-light border border-crimson/20 font-medium">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <span
                        className={`font-[family-name:var(--font-heading)] text-base sm:text-xl lg:text-2xl shrink-0 tabular-nums ${
                          isSoon ? "text-white/15" : "text-gold"
                        }`}
                      >
                        {item.price}
                      </span>
                    </div>

                    {/* Description */}
                    <div className="flex items-start gap-3">
                      {item.image && (
                        <div className="hidden sm:block shrink-0 w-14 h-14 lg:w-16 lg:h-16 overflow-hidden relative rounded-sm">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <p
                        className={`text-xs sm:text-sm leading-relaxed ${
                          isSoon ? "text-white/10" : "text-white/30"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>

                    {isSoon && (
                      <span className="inline-block mt-1.5 text-[8px] sm:text-[9px] uppercase tracking-[0.1em] px-2 py-0.5 border border-dashed border-white/10 text-white/20">
                        Bientôt
                      </span>
                    )}

                    {!isSoon && (
                      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-crimson scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                    )}
                  </div>

                  {i < activeCategory.items.length - 1 && (
                    <div className="h-[1px] bg-gradient-to-r from-white/[0.04] via-white/[0.06] to-white/[0.04]" />
                  )}
                </div>
              );
            })}

            {/* Menu du jour */}
            <div className="mt-6 sm:mt-10 p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-crimson/[0.06] to-transparent border border-crimson/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-crimson/[0.05] rounded-full translate-x-1/2 -translate-y-1/2" />
              <div className="relative">
                <span className="text-crimson text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">
                  Chaque midi
                </span>
                <h4 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl lg:text-2xl text-white mt-1.5 mb-1.5 italic">
                  Menu du jour
                </h4>
                <p className="text-white/30 text-xs sm:text-sm mb-4">
                  Selon le marché et l&apos;inspiration du chef.
                </p>
                <Button href="https://instagram.com/lestefoy_brasserie" variant="ghost" size="sm" external>
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  @lestefoy_brasserie
                  <ArrowIcon className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
