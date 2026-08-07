import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "outline";
  className?: string;
};

const variants = {
  dark: "bg-charcoal text-warm-white hover:bg-black-soft",
  light: "bg-warm-white text-charcoal hover:bg-cream",
  outline:
    "border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-warm-white",
};

export function Button({ href, children, variant = "dark", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-xs uppercase tracking-wide2 transition-all duration-500 ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <span className="transition-transform duration-500 group-hover:translate-x-1">&rarr;</span>
    </Link>
  );
}
