"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-cream relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-crimson/[0.03] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-navy/[0.03] rounded-full -translate-x-1/2 translate-y-1/2" />

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
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              href: "tel:+33426641388",
              icon: Phone,
              title: "Téléphone",
              text: "04 26 64 13 88",
              external: false,
            },
            {
              href: "mailto:brasserielestefoy@icloud.com",
              icon: Mail,
              title: "Email",
              text: "brasserielestefoy@icloud.com",
              external: false,
            },
            {
              href: "https://maps.google.com/?q=7+Place+Xavier+Ricard+69110+Sainte-Foy-lès-Lyon",
              icon: MapPin,
              title: "Adresse",
              text: "7 Place Xavier Ricard\n69110 Sainte-Foy-lès-Lyon",
              external: true,
            },
          ].map((item, i) => (
            <Reveal key={item.title} animation="fade-up" delay={i * 150} duration={900}>
              <a
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group relative flex flex-col items-center text-center p-6 sm:p-10 bg-white border border-cream-dark hover:border-crimson/30 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-crimson/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative w-16 h-16 bg-navy-dark group-hover:bg-crimson flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-crimson/20">
                  <item.icon className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="relative font-[family-name:var(--font-heading)] text-navy text-lg mb-2">
                  {item.title}
                </h3>
                <p className="relative text-warm-gray text-sm break-all whitespace-pre-line">
                  {item.text}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
