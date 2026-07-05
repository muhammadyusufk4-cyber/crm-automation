import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  showArrow?: boolean;
};

const variants: Record<string, string> = {
  primary:
    "bg-navy text-white dark:bg-white dark:text-navy hover:opacity-90 shadow-[0_1px_0_0_rgba(255,255,255,0.1)_inset]",
  secondary:
    "bg-electric text-white hover:bg-electric-2",
  outline:
    "border border-border-subtle text-foreground hover:bg-surface-muted",
  ghost: "text-foreground hover:bg-surface-muted",
};

const sizes: Record<string, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-7 py-3.5",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  showArrow,
  href,
  ...props
}: ButtonBaseProps & { href?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 cursor-pointer whitespace-nowrap",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
