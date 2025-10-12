import React, { useState } from 'react';

interface ToggleButtonProps {
  initialState?: boolean;
  onToggle?: (isOn: boolean) => void;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function ToggleButton({
  initialState = false,
  onToggle,
  disabled = false,
  className = '',
  size = 'md'
}: ToggleButtonProps) {
  const [isOn, setIsOn] = useState(initialState);
  
  const baseClasses = 'rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2';
  
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };
  
  const stateClasses = isOn 
    ? 'bg-white text-black border-white' 
    : 'bg-transparent text-white border-white hover:bg-white hover:text-black';
  
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-lg' 
    : '';

  const combinedClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${stateClasses}
    ${disabledClasses}
    ${className}
  `.trim();

  const handleClick = () => {
    if (!disabled) {
      const newState = !isOn;
      setIsOn(newState);
      onToggle?.(newState);
    }
  };

  return (
    <button
      className={combinedClasses}
      onClick={handleClick}
      disabled={disabled}
      aria-label={isOn ? 'Désactiver' : 'Activer'}
    >
      <svg 
        className="w-full h-full p-2" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isOn ? (
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 13l4 4L19 7" 
          />
        ) : (
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M6 18L18 6M6 6l12 12" 
          />
        )}
      </svg>
    </button>
  );
}
