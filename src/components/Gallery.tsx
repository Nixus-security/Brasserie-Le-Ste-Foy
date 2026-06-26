"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Button, { ArrowIcon } from "@/components/Button";

const images = [
  { src: "/images/devanture-brasserie.png", alt: "Façade de la brasserie", className: "col-span-2 row-span-2" },
  { src: "/images/interieur-bar.png", alt: "Intérieur et bar", className: "col-span-1 row-span-1" },
  { src: "/images/plat-nobg.png", alt: "Œufs meurette maison", className: "col-span-1 row-span-1" },
  { src: "/images/terrasse-soiree.png", alt: "Terrasse en soirée", className: "col-span-1 row-span-1" },
  { src: "/images/facade-brasserie.png", alt: "Devanture", className: "col-span-1 row-span-1" },
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / (el.scrollWidth / images.length));
      setActiveIdx(Math.min(idx, images.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToIdx(idx: number) {
    const el = scrollRef.current;
    if (!el) return;
    const itemWidth = el.scrollWidth / images.length;
    el.scrollTo({ left: itemWidth * idx, behavior: "smooth" });
  }

  return (
    <section id="galerie" className="py-16 sm:py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal animation="fade-down" duration={800}>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-12 h-[1px] bg-crimson" />
              <span className="text-crimson text-sm uppercase tracking-[0.2em] font-medium">
                En images
              </span>
              <span className="w-12 h-[1px] bg-crimson" />
            </div>
          </Reveal>

          <Reveal animation="clip-up" duration={1100} delay={100}>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-6xl text-navy mt-3 mb-4">
              Notre <span className="italic text-crimson">Brasserie</span>
            </h2>
          </Reveal>

          <Reveal animation="blur-in" delay={250} duration={800}>
            <p className="text-warm-gray text-lg max-w-xl mx-auto">
              Découvrez notre cadre chaleureux, notre terrasse et nos plats
            </p>
          </Reveal>
        </div>

        {/* Mobile: horizontal scroll with interactive dots */}
        <div className="md:hidden -mx-4 px-4">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto snap-x-mandatory scrollbar-none pb-4"
            style={{ touchAction: "pan-x" }}
          >
            {images.map((img) => (
              <div
                key={img.src}
                className="snap-center shrink-0 w-[80vw] aspect-[4/3] relative group overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="80vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-6 h-[1px] bg-gold mb-2" />
                  <span className="text-white text-sm font-medium">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-1.5 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIdx(i)}
                aria-label={`Image ${i + 1}`}
                className={`h-[2px] rounded-full transition-all duration-300 ${
                  i === activeIdx ? "w-10 bg-crimson" : "w-8 bg-navy/10 hover:bg-navy/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <div
              key={img.src}
              className={`${img.className} relative group overflow-hidden aspect-[4/3]`}
            >
              <Reveal animation="zoom-in" delay={i * 100} duration={900} className="w-full h-full">
                <div className="relative w-full h-full">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 80vw, 25vw" className="object-cover" />
                  <div className="absolute inset-0 bg-navy-deeper/0 group-hover:bg-navy-deeper/40 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-end p-5">
                    <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <div className="w-8 h-[1px] bg-gold mb-2" />
                      <span className="text-white text-sm font-medium">{img.alt}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Church + CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          <div className="relative group overflow-hidden aspect-[4/3]">
            <Reveal animation="fade-right" duration={1000} className="w-full h-full">
              <div className="relative w-full h-full">
                <Image src="/images/eglise-du-centre-2024-scaled.jpg" alt="Église de Sainte-Foy-lès-Lyon" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-navy-deeper/0 group-hover:bg-navy-deeper/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-end p-5">
                  <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-8 h-[1px] bg-gold mb-2" />
                    <span className="text-white text-sm font-medium">Église de Sainte-Foy-lès-Lyon</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal animation="fade-left" delay={200} duration={1000}>
            <div className="flex flex-col items-center justify-center h-full bg-navy-dark p-8 sm:p-12 text-center min-h-[250px] relative overflow-hidden">
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold/20" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold/20" />
              <div className="w-12 h-[1px] bg-gold/40 mb-6" />
              <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl text-white mb-4 italic">
                Un cadre
                <br />
                <span className="text-crimson italic">chaleureux</span>
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-8">
                Au cœur du village de Sainte-Foy-lès-Lyon, sur la Place Xavier Ricard, face à l&apos;église.
              </p>
              <Button href="#contact" variant="outline" size="sm">
                Nous trouver
                <ArrowIcon className="w-3.5 h-3.5" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
