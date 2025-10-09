import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  gradient?: 'blue' | 'purple' | 'green' | 'orange';
}

export default function GradientButton({
  children,
  onClick,
  disabled = false,
  className = '',
  size = 'md',
  gradient = 'blue'
}: GradientButtonProps) {
  // ✨ Fix "seam" : pas de border, clip + overflow, mask WebKit, et gradient forcé à couvrir 100%
  const baseClasses =
    'text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 ' +
    'outline-none focus-visible:ring-2 focus-visible:ring-white/40 ' +
    'overflow-hidden bg-clip-padding relative ' +
    '[background-origin:padding-box] [background-size:100%_100%] [background-position:0_0] ' +
    '[-webkit-mask-image:-webkit-radial-gradient(white,black)]';

  const sizeClasses = {
    sm: 'px-2 py-2 text-xs sm:px-3 sm:py-2 sm:text-sm',
    md: 'px-3 py-2 text-sm sm:px-4 sm:py-3 sm:text-base md:px-6',
    lg: 'px-4 py-3 text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:text-lg'
  };

  // Garde tes couleurs, mais avec le rendu corrigé
  const gradientClasses = {
    blue:   'bg-gradient-to-r from-[#005aa7] to-[#fffde4] hover:from-[#004a8a] hover:to-[#eeeccf]',
    purple: 'bg-gradient-to-r from-[#005aa7] to-[#fffde4] hover:from-[#004a8a] hover:to-[#eeeccf]',
    green:  'bg-gradient-to-r from-[#005aa7] to-[#fffde4] hover:from-[#004a8a] hover:to-[#eeeccf]',
    orange: 'bg-gradient-to-r from-[#005aa7] to-[#fffde4] hover:from-[#004a8a] hover:to-[#eeeccf]'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed hover:shadow-lg' : '';

  const combinedClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${gradientClasses[gradient]}
    ${disabledClasses}
    ${className}
  `.trim();

  return (
    <button className={combinedClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}