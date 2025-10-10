import React from 'react';

interface CancelButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function CancelButton({
  onClick,
  disabled = false,
  className = '',
  size = 'md'
}: CancelButtonProps) {
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
      aria-label="Annuler"
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
          d="M6 18L18 6M6 6l12 12" 
        />
      </svg>
    </button>
  );
}
