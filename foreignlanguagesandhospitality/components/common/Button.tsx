import Link from "next/link";

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  arrow?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  target?: "_blank" | "_self";
}

const variantClasses = {
  primary:   "bg-primary text-white hover:bg-primary-dark border border-primary hover:border-primary-dark shadow-md hover:shadow-lg",
  secondary: "bg-secondary text-white hover:bg-secondary-dark border border-secondary hover:border-secondary-dark shadow-md hover:shadow-lg shadow-glow",
  outline:   "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",
  ghost:     "bg-transparent text-primary border border-base-300 hover:bg-base-200 hover:border-primary/30",
  accent:    "bg-accent text-primary font-black border border-accent hover:bg-accent-dark hover:border-accent-dark shadow-md",
};

const sizeClasses = {
  sm: "px-5 py-2 text-sm gap-1.5 rounded-xl",
  md: "px-7 py-3 text-sm gap-2 rounded-xl",
  lg: "px-9 py-4 text-base gap-2.5 rounded-2xl",
};

export default function Button({
  children,
  href,
  variant = "secondary",
  size = "md",
  className = "",
  onClick,
  arrow = false,
  disabled = false,
  type = "button",
  target,
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center font-bold transition-all duration-300",
    "hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
    variantClasses[variant],
    sizeClasses[size],
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
    className,
  ].join(" ");

  const content = (
    <>
      {children}
      {arrow && <ArrowIcon />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}