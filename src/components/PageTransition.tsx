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
import Image from "next/image";

type TransitionContextType = {
  navigateTo: (href: string) => void;
};

const TransitionContext = createContext<TransitionContextType>({
  navigateTo: () => {},
});

export function usePageTransition() {
  return useContext(TransitionContext);
}

const ROWS = 7;
const STAGGER = 0.03;

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [phase, setPhase] = useState<"idle" | "exit" | "hold" | "enter">(
    "idle"
  );
  const pendingHref = useRef<string | null>(null);
  const safetyTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const navigateTo = useCallback(
    (href: string) => {
      const targetPath = href.split("#")[0] || "/";
      if (targetPath === pathname && !href.includes("#")) return;
      if (phase !== "idle") return;
      pendingHref.current = href;
      setPhase("exit");
    },
    [pathname, phase]
  );

  useEffect(() => {
    clearTimeout(safetyTimer.current);

    if (phase === "exit") {
      const timer = setTimeout(() => {
        if (pendingHref.current) {
          router.push(pendingHref.current);
          pendingHref.current = null;
        }
        window.scrollTo(0, 0);
        setPhase("hold");
      }, 450);
      safetyTimer.current = setTimeout(() => setPhase("idle"), 3000);
      return () => clearTimeout(timer);
    }

    if (phase === "hold") {
      const timer = setTimeout(() => setPhase("enter"), 300);
      return () => clearTimeout(timer);
    }

    if (phase === "enter") {
      const timer = setTimeout(() => setPhase("idle"), 700);
      return () => clearTimeout(timer);
    }
  }, [phase, router]);

  useEffect(() => {
    return () => clearTimeout(safetyTimer.current);
  }, []);

  const closing = phase === "exit" || phase === "hold";

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      {/* Horizontal blinds overlay */}
      <div className="fixed inset-0 z-[999] pointer-events-none">
        {Array.from({ length: ROWS }).map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 bg-navy-deeper"
            style={{
              top: `${(i / ROWS) * 100}%`,
              height: `${100 / ROWS + 0.5}%`,
              transform: closing ? "scaleY(1)" : "scaleY(0)",
              transformOrigin:
                phase === "enter" || phase === "idle" ? "bottom" : "top",
              transition:
                phase === "exit"
                  ? `transform 0.25s cubic-bezier(0.76, 0, 0.24, 1) ${i * STAGGER}s`
                  : phase === "enter"
                    ? `transform 0.3s cubic-bezier(0.76, 0, 0.24, 1) ${i * STAGGER}s`
                    : "none",
            }}
          />
        ))}

        {/* Crimson accent lines */}
        {Array.from({ length: ROWS }).map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute left-0 right-0 bg-crimson"
            style={{
              top: `${((i + 1) / ROWS) * 100}%`,
              height: "2px",
              transform: closing ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: i % 2 === 0 ? "left" : "right",
              transition:
                phase === "exit"
                  ? `transform 0.2s cubic-bezier(0.76, 0, 0.24, 1) ${0.08 + i * STAGGER}s`
                  : phase === "enter"
                    ? `transform 0.2s ease ${i * 0.02}s`
                    : "none",
            }}
          />
        ))}

        {/* Center logo */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: phase === "hold" ? 1 : 0,
            transform:
              phase === "hold"
                ? "translateY(0) scale(1)"
                : "translateY(8px) scale(0.92)",
            transition:
              phase === "hold"
                ? "opacity 0.2s ease 0.05s, transform 0.3s cubic-bezier(0.16,1,0.3,1) 0.05s"
                : "opacity 0.12s ease, transform 0.12s ease",
          }}
        >
          <Image
            src="/images/logo-brasserie-ste-foy.png"
            alt="Brasserie Le Ste Foy"
            width={200}
            height={200}
            className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] drop-shadow-lg"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          opacity: closing ? 0 : 1,
          transition:
            phase === "exit"
              ? "opacity 0.12s ease"
              : phase === "enter"
                ? "opacity 0.3s ease 0.2s"
                : "none",
        }}
      >
        {children}
      </div>
    </TransitionContext.Provider>
  );
}
