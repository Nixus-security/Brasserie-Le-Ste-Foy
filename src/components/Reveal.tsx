"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Animation =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "flip-up"
  | "blur-in"
  | "slide-up"
  | "clip-up"
  | "clip-left";

type Props = {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
};

const transforms: Record<Animation, string> = {
  "fade-up": "translate3d(0, 60px, 0)",
  "fade-down": "translate3d(0, -60px, 0)",
  "fade-left": "translate3d(80px, 0, 0)",
  "fade-right": "translate3d(-80px, 0, 0)",
  "zoom-in": "scale(0.85)",
  "zoom-out": "scale(1.15)",
  "flip-up": "perspective(1000px) rotateX(15deg) translateY(40px)",
  "blur-in": "translate3d(0, 30px, 0)",
  "slide-up": "translate3d(0, 100%, 0)",
  "clip-up": "translate3d(0, 0, 0)",
  "clip-left": "translate3d(0, 0, 0)",
};

export default function Reveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 800,
  className = "",
  once = true,
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  const isClip = animation === "clip-up" || animation === "clip-left";
  const isBlur = animation === "blur-in";

  const hiddenStyle: React.CSSProperties = isClip
    ? {
        clipPath:
          animation === "clip-up"
            ? "inset(100% 0 0 0)"
            : "inset(0 100% 0 0)",
        opacity: 1,
      }
    : {
        opacity: 0,
        transform: transforms[animation],
        filter: isBlur ? "blur(12px)" : undefined,
      };

  const visibleStyle: React.CSSProperties = isClip
    ? { clipPath: "inset(0 0 0 0)", opacity: 1 }
    : { opacity: 1, transform: "translate3d(0,0,0) scale(1) rotateX(0)", filter: "blur(0)" };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(visible ? visibleStyle : hiddenStyle),
        transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

type StaggerProps = {
  children: ReactNode[];
  animation?: Animation;
  staggerDelay?: number;
  duration?: number;
  className?: string;
  childClassName?: string;
  threshold?: number;
};

export function RevealStagger({
  children,
  animation = "fade-up",
  staggerDelay = 120,
  duration = 700,
  className = "",
  childClassName = "",
  threshold = 0.1,
}: StaggerProps) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <Reveal
          key={i}
          animation={animation}
          delay={i * staggerDelay}
          duration={duration}
          className={childClassName}
          threshold={threshold}
        >
          {child}
        </Reveal>
      ))}
    </div>
  );
}
