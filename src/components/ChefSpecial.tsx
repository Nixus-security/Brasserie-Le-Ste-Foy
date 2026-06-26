"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Button, { ArrowIcon } from "@/components/Button";

export default function ChefSpecial() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-navy-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-crimson/[0.04] rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
          <Reveal animation="fade-right" duration={1000}>
            <div className="relative bg-gradient-to-br from-crimson to-crimson-dark p-8 sm:p-10 lg:p-14 flex flex-col justify-center overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-white/10 m-4" />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-white/10 m-4" />

              <div className="flex items-center gap-3 mb-6 relative">
                <span className="w-8 h-[1px] bg-white/40" />
                <span className="text-white/80 text-xs uppercase tracking-[0.3em]">
                  Suggestion du chef
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
                Œufs Meurette
              </h3>
              <p className="text-white/70 leading-relaxed mb-8">
                Œufs pochés nappés d&apos;une sauce bourguignonne onctueuse,
                garnis de lardons dorés, champignons et croûtons. Un classique
                de la cuisine lyonnaise, revisité avec passion.
              </p>
              <div className="flex items-center justify-between">
                <span className="font-[family-name:var(--font-heading)] text-3xl text-white">
                  12,50 €
                </span>
                <Button href="#carte" variant="white" size="md">
                  Voir la carte
                  <ArrowIcon />
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal animation="zoom-in" duration={1400} delay={300}>
            <div className="relative h-72 lg:h-auto min-h-[300px] overflow-hidden group">
              <Image
                src="/images/plat-nobg.png"
                alt="Œufs meurette — Spécialité du chef"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-navy-dark/20" />
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-[1px] mt-[1px] bg-white/5">
          {[
            { value: 4.1, label: "TripAdvisor", suffix: "/5", decimals: 1, icon: "tripadvisor" },
            { value: 4.4, label: "Google", suffix: "/5", decimals: 1, icon: "google" },
            { value: 100, label: "Fait maison", suffix: "%", decimals: 0, icon: null },
            { value: 0, label: "Budget moyen", display: "21-30€", icon: null },
          ].map((stat, i) => (
            <Reveal key={stat.label} animation="fade-up" delay={200 + i * 150} duration={700}>
              <div className="bg-navy-dark p-6 sm:p-8 text-center group hover:bg-navy-dark/80 transition-colors flex flex-col items-center justify-center min-h-[110px]">
                {stat.icon === "tripadvisor" && (
                  <div className="w-5 h-5 mx-auto mb-3 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#34E0A1] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 004.3 10.163 5.997 5.997 0 005.337-3.267l.406.706.407-.706a5.997 5.997 0 005.337 3.267 5.997 5.997 0 004.3-10.163L24 6.648h-4.35a13.573 13.573 0 00-7.644-2.353zM6.263 17.67a4.728 4.728 0 01-4.721-4.722 4.728 4.728 0 014.721-4.721 4.728 4.728 0 014.722 4.721 4.728 4.728 0 01-4.722 4.722zm5.743-4.891a6.27 6.27 0 00-2.603-4.266 12.207 12.207 0 015.194 0 6.27 6.27 0 00-2.591 4.266zm5.731 4.891a4.728 4.728 0 01-4.722-4.722 4.728 4.728 0 014.722-4.721 4.728 4.728 0 014.721 4.721 4.728 4.728 0 01-4.721 4.722zM6.263 9.93a3.02 3.02 0 00-3.018 3.017 3.02 3.02 0 003.018 3.018 3.02 3.02 0 003.017-3.018A3.02 3.02 0 006.263 9.93zm0 4.26a1.244 1.244 0 110-2.489 1.244 1.244 0 010 2.489zm11.474-4.26a3.02 3.02 0 00-3.018 3.017 3.02 3.02 0 003.018 3.018 3.02 3.02 0 003.017-3.018 3.02 3.02 0 00-3.017-3.017zm0 4.26a1.244 1.244 0 110-2.489 1.244 1.244 0 010 2.489z"/>
                    </svg>
                  </div>
                )}
                {stat.icon === "google" && (
                  <div className="w-5 h-5 mx-auto mb-3 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                )}
                {!stat.icon && <div className="h-5 mb-3 shrink-0" />}
                <div className="text-gold font-[family-name:var(--font-heading)] text-xl sm:text-2xl mb-1">
                  {stat.display ? (
                    stat.display
                  ) : (
                    <Counter
                      end={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                      duration={1800}
                    />
                  )}
                </div>
                <div className="text-white/50 text-[10px] sm:text-xs uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
