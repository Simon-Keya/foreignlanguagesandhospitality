// src/components/common/Card.tsx

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
  }
  
  export default function Card({ children, className = '', hover = true }: CardProps) {
    return (
      <div 
        className={`
          card bg-white border border-base-300 shadow-lg 
          ${hover ? 'hover:shadow-2xl hover:-translate-y-1 transition-all duration-300' : ''}
          ${className}
        `}
      >
        {children}
      </div>
    );
  }