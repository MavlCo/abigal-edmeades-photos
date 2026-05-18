import Link from "next/link";
import { clsx } from "clsx";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "text";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  withArrow?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer select-none";

const variants = {
  primary:
    "bg-cta text-cta-fg hover:bg-terracotta active:scale-95",
  secondary:
    "bg-transparent text-ink border border-ink hover:border-terracotta hover:text-terracotta active:scale-95",
  text: "bg-transparent text-terracotta hover:text-olive underline-offset-4 hover:underline p-0",
};

const sizes = {
  sm: "text-[13px] px-5 py-2.5 tracking-[0.02em]",
  md: "text-[14px] px-7 py-3.5 tracking-[0.02em]",
  lg: "text-[15px] px-8 py-4 tracking-[0.02em]",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  fullWidth = false,
  withArrow = false,
  type = "button",
  disabled = false,
  className,
}: ButtonProps) {
  const styles = clsx(
    baseStyles,
    variants[variant],
    variant !== "text" && sizes[size],
    fullWidth && "w-full",
    disabled && "opacity-50 pointer-events-none",
    className
  );

  const content = (
    <>
      {children}
      {withArrow && <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={clsx(styles, "group")} style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(styles, "group")}
      style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
    >
      {content}
    </button>
  );
}
