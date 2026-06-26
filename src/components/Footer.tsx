"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import TransitionLink from "@/components/TransitionLink";

export default function Footer() {
  return (
    <footer className="relative bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        {/* Centered logo + name */}
        <Reveal animation="fade-up" duration={900}>
          <div className="flex flex-col items-center text-center mb-12">
            <div className="w-[1px] h-8 bg-gradient-to-b from-transparent to-gold/40 mb-6" />
            <Image
              src="/images/logo-brasserie-ste-foy.png"
              alt="Brasserie Le Ste Foy"
              width={70}
              height={70}
              className="drop-shadow-lg mb-4"
            />
            <h3 className="font-[family-name:var(--font-heading)] text-2xl text-white mb-2">
              Brasserie Le Ste Foy
            </h3>
            <p className="text-gold/60 text-[10px] uppercase tracking-[0.35em]">
              Cuisine française fait maison
            </p>
          </div>
        </Reveal>

        <div className="w-full h-[1px] bg-white/[0.06] mb-10" />

        {/* 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-white/[0.06]">
          {/* Adresse */}
          <Reveal animation="fade-up" delay={100} duration={800}>
            <div className="flex flex-col items-center text-center md:px-8">
              <span className="text-gold text-[10px] uppercase tracking-[0.3em] mb-5">
                Adresse
              </span>
              <p className="text-white/60 text-sm leading-relaxed">
                7 Place Xavier Ricard
                <br />
                69110 Sainte-Foy-lès-Lyon
              </p>
              <a
                href="tel:+33426641388"
                className="text-white/80 text-sm mt-4 hover:text-gold transition-colors"
              >
                04 26 64 13 88
              </a>
              <a
                href="mailto:brasserielestefoy@icloud.com"
                className="text-white/50 text-xs mt-1 hover:text-gold transition-colors"
              >
                brasserielestefoy@icloud.com
              </a>
            </div>
          </Reveal>

          {/* Horaires */}
          <Reveal animation="fade-up" delay={200} duration={800}>
            <div className="flex flex-col items-center text-center md:px-8">
              <span className="text-gold text-[10px] uppercase tracking-[0.3em] mb-5">
                Horaires
              </span>
              <div className="text-white/60 text-sm space-y-1">
                <p>Lun – Jeu : 7h00 – 19h45</p>
                <p>Vendredi : 7h00 – 20h30</p>
                <p>Samedi : 8h00 – 15h00</p>
                <p>Dimanche : 8h30 – 13h00</p>
              </div>
            </div>
          </Reveal>

          {/* Suivez-nous */}
          <Reveal animation="fade-up" delay={300} duration={800}>
            <div className="flex flex-col items-center text-center md:px-8">
              <span className="text-gold text-[10px] uppercase tracking-[0.3em] mb-5">
                Suivez-nous
              </span>
              <div className="flex gap-3 mb-5">
                <a
                  href="https://instagram.com/lestefoy_brasserie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:border-gold/40 hover:bg-white/[0.08] transition-all"
                >
                  <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com/446186362232161"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:border-gold/40 hover:bg-white/[0.08] transition-all"
                >
                  <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.tripadvisor.fr/Restaurant_Review-g1080964-d8772587-Reviews-Brasserie_Le_Ste_Foy-Sainte_Foy_les_Lyon_Rhone_Auvergne_Rhone_Alpes.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:border-[#34E0A1]/40 hover:bg-white/[0.08] transition-all"
                >
                  <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 004.3 10.163 5.997 5.997 0 005.337-3.267l.406.706.407-.706a5.997 5.997 0 005.337 3.267 5.997 5.997 0 004.3-10.163L24 6.648h-4.35a13.573 13.573 0 00-7.644-2.353zM6.263 17.67a4.728 4.728 0 01-4.721-4.722 4.728 4.728 0 014.721-4.721 4.728 4.728 0 014.722 4.721 4.728 4.728 0 01-4.722 4.722zm5.743-4.891a6.27 6.27 0 00-2.603-4.266 12.207 12.207 0 015.194 0 6.27 6.27 0 00-2.591 4.266zm5.731 4.891a4.728 4.728 0 01-4.722-4.722 4.728 4.728 0 014.722-4.721 4.728 4.728 0 014.721 4.721 4.728 4.728 0 01-4.721 4.722zM6.263 9.93a3.02 3.02 0 00-3.018 3.017 3.02 3.02 0 003.018 3.018 3.02 3.02 0 003.017-3.018A3.02 3.02 0 006.263 9.93zm0 4.26a1.244 1.244 0 110-2.489 1.244 1.244 0 010 2.489zm11.474-4.26a3.02 3.02 0 00-3.018 3.017 3.02 3.02 0 003.018 3.018 3.02 3.02 0 003.017-3.018 3.02 3.02 0 00-3.017-3.017zm0 4.26a1.244 1.244 0 110-2.489 1.244 1.244 0 010 2.489z" />
                  </svg>
                </a>
              </div>
              <p className="text-white/40 text-xs">@lestefoy_brasserie</p>

              {/* Navigation links */}
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-6 pt-5 border-t border-white/[0.06]">
                {[
                  { href: "/#accueil", label: "Accueil" },
                  { href: "/#carte", label: "La Carte" },
                  { href: "/histoire", label: "Histoire" },
                  { href: "/#horaires", label: "Horaires" },
                  { href: "/#contact", label: "Contact" },
                ].map((link) => (
                  <TransitionLink
                    key={link.href}
                    href={link.href}
                    className="text-white/40 hover:text-gold text-xs transition-colors"
                  >
                    {link.label}
                  </TransitionLink>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] bg-navy-deeper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Brasserie Le Ste Foy · Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
