import React from 'react';

interface SimpleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'ghost';
}

export default function SimpleButton({
  children,
  onClick,
  disabled = false,
  className = '',
  size = 'md',
  variant = 'default'
}: SimpleButtonProps) {
  const baseClasses = 'bg-white text-gray-800 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100';
  
  const sizeClasses = {
    sm: 'px-2 py-2 text-xs sm:px-3 sm:py-2 sm:text-sm',
    md: 'px-3 py-2 text-sm sm:px-4 sm:py-3 sm:text-base md:px-6',
    lg: 'px-4 py-3 text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:text-lg'
  };
  
  const variantClasses = {
    default: 'bg-white text-gray-800 border-gray-100',
    outline: 'bg-transparent text-gray-800 border-gray-300 hover:bg-gray-50',
    ghost: 'bg-transparent text-gray-800 border-transparent hover:bg-gray-100'
  };
  
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-lg' 
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


