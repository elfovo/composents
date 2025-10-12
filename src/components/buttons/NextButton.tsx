import React from 'react';

interface NextButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function NextButton({
  onClick,
  disabled = false,
  className = '',
  size = 'md'
}: NextButtonProps) {
  const baseClasses = 'bg-transparent text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white hover:bg-white hover:text-black';
  
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };
  
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-lg hover:bg-transparent hover:text-white' 
    : '';

  const combinedClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${disabledClasses}
    ${className}
  `.trim();

  return (
    <button
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label="Suivant"
    >
      <svg 
        className="w-full h-full p-2" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9 5l7 7-7 7" 
        />
      </svg>
    </button>
  );
}
