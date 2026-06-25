"use client";

type Props = {
  text: string;
  separator?: string;
  speed?: number;
  className?: string;
  dark?: boolean;
};

export default function Marquee({
  text,
  separator = " · ",
  speed = 30,
  className = "",
  dark = false,
}: Props) {
  const repeated = Array(8).fill(`${text}${separator}`).join("");

  return (
    <div
      className={`overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      <div
        className="whitespace-nowrap inline-flex"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        <span
          className={`font-[family-name:var(--font-heading)] text-5xl sm:text-7xl lg:text-[8rem] uppercase tracking-wider ${
            dark ? "text-white/[0.03]" : "text-navy/[0.04]"
          }`}
        >
          {repeated}
        </span>
        <span
          className={`font-[family-name:var(--font-heading)] text-5xl sm:text-7xl lg:text-[8rem] uppercase tracking-wider ${
            dark ? "text-white/[0.03]" : "text-navy/[0.04]"
          }`}
        >
          {repeated}
        </span>
      </div>
    </div>
  );
}
