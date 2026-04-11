// src/components/common/SectionTitle.tsx

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    titleClass?: string;
    subtitleClass?: string;
    centered?: boolean;
  }
  
  export default function SectionTitle({
    title,
    subtitle,
    titleClass = "text-primary",
    subtitleClass = "text-neutral-600",
    centered = true,
  }: SectionTitleProps) {
    return (
      <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
        <h2 className={`text-4xl md:text-5xl font-bold ${titleClass}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-4 text-lg max-w-3xl mx-auto ${subtitleClass}`}>
            {subtitle}
          </p>
        )}
      </div>
    );
  }