import React from 'react';

interface SquareButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'white' | 'gray' | 'blue';
}

export default function SquareButton({
  children,
  onClick,
  disabled = false,
  className = '',
  size = 'md',
  variant = 'white'
}: SquareButtonProps) {
  const baseClasses = 'rounded-none font-black shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent w-full';
  
  const sizeClasses = {
    sm: 'px-2 py-2 text-xs sm:px-3 sm:py-2 sm:text-sm',
    md: 'px-3 py-2 text-sm sm:px-4 sm:py-3 sm:text-base md:px-6',
    lg: 'px-4 py-3 text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:text-lg'
  };
  
  const variantClasses = {
    white: 'border-4 border-white text-white hover:bg-white hover:text-gray-800',
    gray: 'border-4 border-gray-300 text-gray-700 hover:bg-gray-300 hover:text-white',
    blue: 'border-4 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
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
    >
      {children}
    </button>
  );
}
