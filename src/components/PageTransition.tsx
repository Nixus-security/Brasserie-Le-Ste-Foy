"use client";

import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  useCallback,
  createContext,
  useContext,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";

type TransitionContextType = {
  navigateTo: (href: string) => void;
};

const TransitionContext = createContext<TransitionContextType>({
  navigateTo: () => {},
});

export function usePageTransition() {
  return useContext(TransitionContext);
}

const COLS = 5;

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [phase, setPhase] = useState<"idle" | "exit" | "hold" | "enter">("idle");
  const pendingHref = useRef<string | null>(null);

  const navigateTo = useCallback(
    (href: string) => {
      const targetPath = href.split("#")[0] || "/";
      if (targetPath === pathname && !href.includes("#")) return;
      pendingHref.current = href;
      setPhase("exit");
    },
    [pathname]
  );

  useEffect(() => {
    if (phase === "exit") {
      const timer = setTimeout(() => {
        if (pendingHref.current) {
          router.push(pendingHref.current);
          pendingHref.current = null;
        }
        window.scrollTo(0, 0);
        setPhase("hold");
      }, 700);
      return () => clearTimeout(timer);
    }

    if (phase === "hold") {
      const timer = setTimeout(() => setPhase("enter"), 200);
      return () => clearTimeout(timer);
    }

    if (phase === "enter") {
      const timer = setTimeout(() => setPhase("idle"), 900);
      return () => clearTimeout(timer);
    }
  }, [phase, router]);

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      {/* Multi-column wipe overlay */}
      <div className="fixed inset-0 z-[999] pointer-events-none">
        {Array.from({ length: COLS }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 bg-navy-deeper"
            style={{
              left: `${(i / COLS) * 100}%`,
              width: `${100 / COLS + 0.5}%`,
              transform:
                phase === "exit" || phase === "hold"
                  ? "scaleY(1)"
                  : "scaleY(0)",
              transformOrigin:
                phase === "enter" || phase === "idle" ? "top" : "bottom",
              transition:
                phase === "exit"
                  ? `transform 0.5s cubic-bezier(0.76, 0, 0.24, 1) ${i * 0.06}s`
                  : phase === "enter"
                    ? `transform 0.5s cubic-bezier(0.76, 0, 0.24, 1) ${i * 0.06}s`
                    : "none",
            }}
          />
        ))}

        {/* Crimson accent columns */}
        {Array.from({ length: COLS }).map((_, i) => (
          <div
            key={`accent-${i}`}
            className="absolute bottom-0 bg-crimson"
            style={{
              left: `${(i / COLS) * 100}%`,
              width: `${100 / COLS + 0.5}%`,
              height: "3px",
              transform:
                phase === "exit" || phase === "hold"
                  ? "scaleX(1)"
                  : "scaleX(0)",
              transformOrigin: "left",
              transition:
                phase === "exit"
                  ? `transform 0.4s cubic-bezier(0.76, 0, 0.24, 1) ${0.15 + i * 0.06}s`
                  : phase === "enter"
                    ? `transform 0.3s ease ${i * 0.04}s`
                    : "none",
            }}
          />
        ))}

        {/* Center branding */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4"
          style={{
            opacity: phase === "hold" || (phase === "exit" && true) ? 1 : 0,
            transform:
              phase === "exit"
                ? "translateY(10px) scale(0.95)"
                : phase === "hold"
                  ? "translateY(0) scale(1)"
                  : "translateY(-10px) scale(0.95)",
            transition:
              phase === "exit"
                ? "opacity 0.3s ease 0.35s, transform 0.4s cubic-bezier(0.16,1,0.3,1) 0.35s"
                : phase === "hold"
                  ? "opacity 0.2s ease, transform 0.3s ease"
                  : "opacity 0.2s ease, transform 0.2s ease",
          }}
        >
          <div className="w-8 h-[1px] bg-gold/50" />
          <span className="font-[family-name:var(--font-heading)] text-gold/90 text-xl sm:text-2xl tracking-[0.2em] uppercase">
            Le Ste Foy
          </span>
          <span className="text-white/20 text-[10px] tracking-[0.4em] uppercase">
            Brasserie
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          opacity: phase === "exit" || phase === "hold" ? 0 : 1,
          transition:
            phase === "exit"
              ? "opacity 0.25s ease"
              : phase === "enter"
                ? "opacity 0.4s ease 0.3s"
                : "none",
        }}
      >
        {children}
      </div>
    </TransitionContext.Provider>
  );
}
