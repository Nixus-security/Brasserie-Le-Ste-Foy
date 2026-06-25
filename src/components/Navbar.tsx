"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import Button from "@/components/Button";
import TransitionLink from "@/components/TransitionLink";

const navLinks = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/#apropos", label: "À propos" },
  { href: "/histoire", label: "Notre Histoire" },
  { href: "/#carte", label: "La Carte" },
  { href: "/#galerie", label: "Galerie" },
  { href: "/#horaires", label: "Horaires" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? window.scrollY / docH : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "bg-navy-dark/98 backdrop-blur-md shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div
          className="scroll-progress absolute bottom-0 left-0 h-[2px] z-50"
          style={{
            transform: `scaleX(${scrollProgress})`,
            opacity: scrolled ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
            <TransitionLink href="/" className="flex items-center gap-2 sm:gap-3 group relative z-50">
              <Image
                src="/images/logo-brasserie-ste-foy.jpg"
                alt="Brasserie Le Ste Foy"
                width={52}
                height={52}
                className="w-10 h-10 sm:w-[52px] sm:h-[52px] rounded-full ring-2 ring-crimson/30 group-hover:ring-crimson/60 transition-all"
              />
              <div className="hidden sm:block">
                <span className="font-[family-name:var(--font-heading)] text-white text-lg block leading-tight">
                  Le Ste Foy
                </span>
                <span className="text-gold/60 text-[10px] uppercase tracking-[0.2em]">
                  Brasserie
                </span>
              </div>
            </TransitionLink>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <TransitionLink
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-gold text-[13px] uppercase tracking-[0.15em] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all hover:after:w-full"
                >
                  {link.label}
                </TransitionLink>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Button href="/reservation" variant="primary" size="sm">
                <Phone className="w-4 h-4" />
                Réserver
              </Button>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
              aria-label="Menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`block h-[2px] bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                    open ? "rotate-45 translate-y-[9px]" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${
                    open ? "opacity-0 scale-x-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-[2px] bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                    open ? "-rotate-45 -translate-y-[9px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-navy-deeper/98 backdrop-blur-xl transition-all duration-700 ${
            open ? "scale-100" : "scale-95"
          }`}
        />

        <div className="relative h-full flex flex-col items-center justify-center px-8">
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/[0.03] transition-all duration-1000 ${open ? "scale-100 opacity-100" : "scale-50 opacity-0"}`} />
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.02] transition-all duration-1000 delay-100 ${open ? "scale-100 opacity-100" : "scale-50 opacity-0"}`} />

          <nav className="flex flex-col items-center gap-2">
            {navLinks.map((link, i) => (
              <TransitionLink
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block text-white/80 hover:text-gold font-[family-name:var(--font-heading)] text-3xl sm:text-4xl py-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open
                    ? "opacity-100 translate-y-0 blur-0"
                    : "opacity-0 translate-y-8 blur-sm"
                }`}
                style={{
                  transitionDelay: open ? `${200 + i * 80}ms` : `${(navLinks.length - i) * 40}ms`,
                }}
              >
                {link.label}
              </TransitionLink>
            ))}
          </nav>

          <div
            className={`w-12 h-[1px] bg-gold/30 my-8 transition-all duration-700 ${
              open ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transitionDelay: open ? "700ms" : "0ms" }}
          />

          <div
            className={`mt-12 text-center transition-all duration-700 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: open ? "900ms" : "0ms" }}
          >
            <p className="text-white/50 text-xs">04 26 64 13 88</p>
            <p className="text-white/40 text-[10px] mt-1 uppercase tracking-[0.2em]">
              7 Place Xavier Ricard, Sainte-Foy-lès-Lyon
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
