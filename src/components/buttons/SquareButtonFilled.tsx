import React from 'react';

interface SquareButtonFilledProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'white' | 'gray' | 'blue';
}

export default function SquareButtonFilled({
  children,
  onClick,
  disabled = false,
  className = '',
  size = 'md',
  variant = 'white'
}: SquareButtonFilledProps) {
  const baseClasses = 'rounded-none font-black shadow-lg hover:shadow-xl transition-all duration-300 w-full hover:scale-105';
  
  const sizeClasses = {
    sm: 'px-2 py-2 text-xs sm:px-3 sm:py-2 sm:text-sm',
    md: 'px-3 py-2 text-sm sm:px-4 sm:py-3 sm:text-base md:px-6',
    lg: 'px-4 py-3 text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:text-lg'
  };
  
  const variantClasses = {
    white: 'bg-white text-gray-800 border-4 border-white hover:bg-gray-100',
    gray: 'bg-gray-300 text-white border-4 border-gray-300 hover:bg-gray-400',
    blue: 'bg-blue-500 text-white border-4 border-blue-500 hover:bg-blue-600'
  };
  
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed hover:shadow-lg hover:scale-100' 
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
    >
      {children}
    </button>
  );
}
