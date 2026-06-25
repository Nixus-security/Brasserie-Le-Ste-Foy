"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { usePageTransition } from "@/components/PageTransition";

type Variant = "primary" | "outline" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-xs gap-2",
  md: "px-7 py-3.5 text-sm gap-2.5",
  lg: "px-8 py-4 sm:px-10 sm:py-[18px] text-sm sm:text-base gap-3",
};

function isInternalRoute(href: string) {
  return (
    href.startsWith("/") &&
    !href.startsWith("//")
  );
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  onClick,
}: Props) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const { navigateTo } = usePageTransition();
  const pathname = usePathname();

  function handleMouseMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  }

  const base = `
    group relative inline-flex items-center justify-center font-medium
    uppercase tracking-[0.12em] overflow-hidden
    transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
    ${sizes[size]}
  `;

  const variants: Record<Variant, string> = {
    primary: `
      bg-crimson text-white
      hover:bg-crimson-dark hover:shadow-xl hover:shadow-crimson/25
      active:scale-[0.97]
    `,
    outline: `
      bg-transparent text-white border border-white/20
      hover:border-gold/50 hover:text-gold
      active:scale-[0.97]
    `,
    ghost: `
      bg-white/[0.05] text-white/60 border border-white/[0.06]
      hover:bg-white/[0.08] hover:border-gold/20 hover:text-gold
      active:scale-[0.97]
    `,
    white: `
      bg-white text-crimson
      hover:bg-cream hover:shadow-xl
      active:scale-[0.97]
    `,
  };

  const cls = `${base} ${variants[variant]} ${className}`
    .replace(/\s+/g, " ")
    .trim();

  const inner = (
    <>
      {(variant === "primary" || variant === "white") && (
        <span
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "radial-gradient(120px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.15), transparent 60%)",
          }}
        />
      )}

      {(variant === "outline" || variant === "ghost") && (
        <span
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "radial-gradient(100px circle at var(--mx, 50%) var(--my, 50%), rgba(196,163,90,0.12), transparent 60%)",
          }}
        />
      )}

      <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

      <span className="relative z-10 flex items-center gap-[inherit]">
        {children}
      </span>
    </>
  );

  if (href) {
    if (!external && isInternalRoute(href)) {
      const targetPath = href.split("#")[0] || "/";
      const needsTransition = targetPath !== pathname;

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          onMouseMove={handleMouseMove}
          onClick={(e) => {
            if (needsTransition) {
              e.preventDefault();
              onClick?.();
              navigateTo(href);
            } else {
              onClick?.();
            }
          }}
          className={cls}
        >
          {inner}
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        href={href}
        onMouseMove={handleMouseMove}
        onClick={onClick}
        className={cls}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={cls}
    >
      {inner}
    </button>
  );
}

export function ArrowIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={`${className} transition-transform duration-500 group-hover:translate-x-1.5`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}
