import React from 'react';
import '../GlassSurface.css';

interface GlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'ghost';
  glassProps?: React.CSSProperties;
}

export default function GlassButton({
  children,
  onClick,
  disabled = false,
  className = '',
  size = 'md',
  variant = 'default',
  glassProps = {}
}: GlassButtonProps) {
  const baseClasses = 'text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-transform duration-200 ease-out hover:scale-105 border border-white/20';
  
  const sizeClasses = {
    sm: 'px-2 py-2 text-xs sm:px-3 sm:py-2 sm:text-sm',
    md: 'px-3 py-2 text-sm sm:px-4 sm:py-3 sm:text-base md:px-6',
    lg: 'px-4 py-3 text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:text-lg'
  };
  
  const variantClasses = {
    default: 'text-white border-white/20',
    outline: 'text-white border-white/40 hover:bg-white/10',
    ghost: 'text-white border-transparent hover:bg-white/10'
  };
  
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed hover:scale-100' 
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
      style={{
        background: 'transparent',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        willChange: 'transform',
        transform: 'translateZ(0)',
        ...glassProps
      }}
    >
      {children}
    </button>
  );
}
