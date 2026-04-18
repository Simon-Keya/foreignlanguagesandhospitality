interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "navy" | "bordered" | "flat";
  padding?: "none" | "sm" | "md" | "lg";
  bar?: "none" | "primary" | "secondary" | "accent" | "tribar";
}

const variantClasses = {
  default:  "bg-white border border-base-300 shadow-sm",
  navy:     "bg-navy-gradient text-white border-none shadow-lg",
  bordered: "bg-white border-2 border-primary shadow-sm",
  flat:     "bg-base-200 border border-base-300 shadow-none",
};

const paddingClasses = {
  none: "",
  sm:   "p-5",
  md:   "p-7",
  lg:   "p-10",
};

const barClasses = {
  none:      "",
  primary:   "border-t-4 border-primary rounded-t-3xl",
  secondary: "border-t-4 border-secondary rounded-t-3xl",
  accent:    "border-t-4 border-accent rounded-t-3xl",
  tribar:    "",
};

export default function Card({
  children,
  className = "",
  hover = true,
  variant = "default",
  padding = "md",
  bar = "none",
}: CardProps) {
  return (
    <div
      className={[
        "rounded-3xl overflow-hidden relative",
        variantClasses[variant],
        paddingClasses[padding],
        hover ? "hover:shadow-xl hover:-translate-y-1 transition-all duration-400" : "",
        barClasses[bar],
        className,
      ].join(" ")}
    >
      {/* Tribar top strip — only when bar="tribar" */}
      {bar === "tribar" && (
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-tribar" />
      )}

      {children}
    </div>
  );
}