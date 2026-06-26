"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Phone,
  Home,
  UtensilsCrossed,
  CalendarDays,
  Clock,
  Menu as MenuIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";
import TransitionLink from "@/components/TransitionLink";

const navLinks = [
  { href: "/#accueil", label: "Accueil", sectionId: "accueil" },
  { href: "/#apropos", label: "À propos", sectionId: "apropos" },
  { href: "/histoire", label: "Notre Histoire", sectionId: null },
  { href: "/#carte", label: "La Carte", sectionId: "carte" },
  { href: "/#galerie", label: "Galerie", sectionId: "galerie" },
  { href: "/#horaires", label: "Horaires", sectionId: "horaires" },
  { href: "/#contact", label: "Contact", sectionId: "contact" },
];

const bottomTabs = [
  { href: "/#accueil", label: "Accueil", sectionId: "accueil", icon: Home },
  { href: "/#carte", label: "Carte", sectionId: "carte", icon: UtensilsCrossed },
  { href: "/reservation", label: "Réserver", sectionId: null, icon: CalendarDays },
  { href: "/#horaires", label: "Horaires", sectionId: "horaires", icon: Clock },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("accueil");
  const pathname = usePathname();

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
    if (pathname !== "/") return;

    const sectionIds = navLinks
      .map((l) => l.sectionId)
      .filter(Boolean) as string[];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function isActive(link: { href: string; sectionId: string | null }) {
    if (pathname !== "/") return pathname === link.href;
    return link.sectionId === activeSection;
  }

  function isBottomActive(tab: (typeof bottomTabs)[number]) {
    if (tab.href === "/reservation") return pathname === "/reservation";
    if (pathname !== "/") return false;
    return tab.sectionId === activeSection;
  }

  return (
    <>
      {/* Top bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 hidden lg:block ${
          scrolled
            ? "bg-navy-dark/95 backdrop-blur-md shadow-2xl"
            : "bg-transparent"
        }`}
      >
        {/* Progress bar — desktop only */}
        <div
          className="scroll-progress absolute bottom-0 left-0 h-[2px] z-50 hidden lg:block"
          style={{
            transform: `scaleX(${scrollProgress})`,
            opacity: scrolled ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-24">
            {/* Logo */}
            <TransitionLink
              href="/"
              className="flex items-center gap-2 sm:gap-3 group relative z-50"
            >
              <Image
                src="/images/logo-brasserie-ste-foy.png"
                alt="Brasserie Le Ste Foy"
                width={52}
                height={52}
                className="w-9 h-9 lg:w-[52px] lg:h-[52px] drop-shadow-lg"
              />
            </TransitionLink>

            {/* Burger — desktop + mobile sidebar trigger */}
            <button
              onClick={() => setOpen(!open)}
              className="relative z-50 w-10 h-10 flex items-center justify-center lg:flex"
              aria-label="Menu"
            >
              <div className="flex flex-col items-end gap-[6px]">
                <span
                  className={`block h-[1.5px] bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-right ${
                    open
                      ? "w-6 rotate-[-40deg] translate-y-[4px]"
                      : "w-6"
                  }`}
                />
                <span
                  className={`block h-[1.5px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    open
                      ? "w-0 opacity-0"
                      : "w-4 bg-gold/60 opacity-100"
                  }`}
                />
                <span
                  className={`block h-[1.5px] bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-right ${
                    open
                      ? "w-6 rotate-[40deg] -translate-y-[4px]"
                      : "w-5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Bottom tab bar — mobile only */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-navy-deeper/[0.98] backdrop-blur-xl border-t border-white/[0.06] safe-area-bottom">
        <div className="grid grid-cols-5 h-16">
          {bottomTabs.map((tab) => {
            const Icon = tab.icon;
            const active = isBottomActive(tab);
            const isReservation = tab.href === "/reservation";

            return (
              <TransitionLink
                key={tab.href}
                href={tab.href}
                className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                  active ? "text-crimson" : "text-white/40 active:text-white/70"
                }`}
              >
                <div className="relative">
                  {isReservation && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-crimson rounded-full" />
                  )}
                  <Icon
                    className={`w-5 h-5 transition-transform duration-200 active:scale-110 ${
                      active ? "text-crimson" : ""
                    }`}
                  />
                </div>
                <span
                  className={`text-[9px] font-medium tracking-wide ${
                    active ? "text-crimson" : ""
                  }`}
                >
                  {tab.label}
                </span>
              </TransitionLink>
            );
          })}

          {/* More button */}
          <button
            onClick={() => setOpen(!open)}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              open ? "text-gold" : "text-white/40 active:text-white/70"
            }`}
          >
            <MenuIcon className="w-5 h-5 transition-transform duration-200 active:scale-110" />
            <span className="text-[9px] font-medium tracking-wide">Plus</span>
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-navy-deeper/60 backdrop-blur-sm transition-opacity duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-40 w-[300px] sm:w-[340px] bg-navy-deeper/[0.98] backdrop-blur-xl border-l border-white/[0.05] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 lg:pt-32 px-8 sm:px-10 pb-24 lg:pb-8">
          <span
            className={`text-gold/40 text-[9px] uppercase tracking-[0.3em] mb-6 transition-all duration-700 ${
              open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            style={{ transitionDelay: open ? "200ms" : "0ms" }}
          >
            Navigation
          </span>

          <nav className="flex flex-col gap-1 flex-1">
            {navLinks.map((link, i) => (
              <TransitionLink
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-[family-name:var(--font-heading)] text-2xl sm:text-[1.7rem] py-2 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-6"
                } ${
                  isActive(link)
                    ? "text-gold"
                    : "text-white/50 hover:text-white"
                }`}
                style={{
                  transitionDelay: open
                    ? `${280 + i * 60}ms`
                    : `${(navLinks.length - i) * 30}ms`,
                }}
              >
                {link.label}
              </TransitionLink>
            ))}
          </nav>

          <div
            className={`w-8 h-[1px] bg-white/[0.06] mb-6 transition-all duration-500 ${
              open ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{
              transitionDelay: open ? "700ms" : "0ms",
              transformOrigin: "left",
            }}
          />

          <div
            className={`transition-all duration-600 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: open ? "750ms" : "0ms" }}
          >
            <Button
              href="/reservation"
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => setOpen(false)}
            >
              <Phone className="w-4 h-4" />
              Réserver
            </Button>
          </div>

          <div
            className={`mt-8 pt-6 border-t border-white/[0.04] transition-all duration-600 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: open ? "850ms" : "0ms" }}
          >
            <a
              href="tel:+33426641388"
              className="text-white/40 hover:text-gold text-xs transition-colors block mb-1.5"
            >
              04 26 64 13 88
            </a>
            <p className="text-white/30 text-[10px] uppercase tracking-[0.15em]">
              7 Place Xavier Ricard, Sainte-Foy-lès-Lyon
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
