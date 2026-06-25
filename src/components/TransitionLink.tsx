"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePageTransition } from "@/components/PageTransition";
import type { ReactNode, MouseEvent } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

export default function TransitionLink({
  href,
  children,
  className,
  onClick,
  style,
}: Props) {
  const { navigateTo } = usePageTransition();
  const pathname = usePathname();

  function needsTransition() {
    if (href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("//") || href.startsWith("http")) {
      return false;
    }

    const targetPath = href.split("#")[0] || "/";
    return targetPath !== pathname;
  }

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (needsTransition()) {
      e.preventDefault();
      onClick?.();
      navigateTo(href);
    } else {
      onClick?.();
    }
  }

  return (
    <Link href={href} className={className} onClick={handleClick} style={style}>
      {children}
    </Link>
  );
}
