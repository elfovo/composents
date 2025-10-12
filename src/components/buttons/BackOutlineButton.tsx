import React from 'react';

interface BackOutlineButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'white' | 'gray' | 'blue';
}

export default function BackOutlineButton({
  onClick,
  disabled = false,
  className = '',
  size = 'md',
  variant = 'white'
}: BackOutlineButtonProps) {
  const baseClasses = 'rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent';
  
  const sizeClasses = {
    sm: 'pl-1 pr-2 py-2 text-xs sm:pl-2 sm:pr-3 sm:py-2 sm:text-sm',
    md: 'pl-2 pr-3 py-2 text-sm sm:pl-3 sm:pr-4 sm:py-3 sm:text-base md:pl-4 md:pr-6',
    lg: 'pl-3 pr-4 py-3 text-sm sm:pl-4 sm:pr-6 sm:py-3 sm:text-base md:pl-6 md:pr-8 md:text-lg'
  };
  
  const variantClasses = {
    white: 'border-2 border-white text-white hover:bg-white hover:text-gray-800',
    gray: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-300 hover:text-white',
    blue: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
  };
  
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed hover:shadow-lg' 
    : '';

  const combinedClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabledClasses}
    ${className}
  `.trim();

  return (
    <button
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label="Retour"
    >
      <div className="flex items-center gap-2">
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 19l-7-7 7-7" 
          />
        </svg>
        <span>Retour</span>
      </div>
    </button>
  );
}
