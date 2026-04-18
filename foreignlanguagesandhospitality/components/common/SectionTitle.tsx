interface SectionTitleProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  eyebrow,
  centered = true,
  light = false,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>

      {/* Optional eyebrow label */}
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${centered ? "justify-center" : ""}`}>
          <div className={`w-8 h-px ${light ? "bg-accent" : "bg-secondary"}`} />
          <span
            className={`text-xs font-bold uppercase tracking-eyebrow ${
              light ? "text-accent" : "text-secondary"
            }`}
          >
            {eyebrow}
          </span>
          <div className={`w-8 h-px ${centered ? "block" : "hidden"} ${light ? "bg-accent" : "bg-secondary"}`} />
        </div>
      )}

      {/* Main title */}
      <h2
        className={`font-black text-4xl md:text-5xl leading-tight ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>

      {/* Gold underline rule */}
      <div className={`mt-4 h-1 w-14 rounded-full bg-accent ${centered ? "mx-auto" : ""}`} />

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/75" : "text-neutral-500"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}