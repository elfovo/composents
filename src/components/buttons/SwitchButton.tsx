import React, { useState } from 'react';

interface SwitchButtonProps {
  initialState?: boolean;
  onToggle?: (isOn: boolean) => void;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function SwitchButton({
  initialState = false,
  onToggle,
  disabled = false,
  className = '',
  size = 'md'
}: SwitchButtonProps) {
  const [isOn, setIsOn] = useState(initialState);
  
  const baseClasses = 'relative rounded-full transition-all duration-300 border-2 border-white';
  
  const sizeClasses = {
    sm: 'w-12 h-6',
    md: 'w-16 h-8',
    lg: 'w-20 h-10'
  };
  
  const stateClasses = isOn 
    ? 'bg-white' 
    : 'bg-transparent';
  
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer';

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

  const getThumbSize = () => {
    switch (size) {
      case 'sm': return isOn ? 'w-4 h-4' : 'w-3.5 h-3.5';
      case 'md': return isOn ? 'w-6 h-6' : 'w-5 h-5';
      case 'lg': return isOn ? 'w-8 h-8' : 'w-7 h-7';
      default: return isOn ? 'w-6 h-6' : 'w-5 h-5';
    }
  };

  const getThumbPosition = () => {
    switch (size) {
      case 'sm': return isOn ? 'translate-x-6' : 'translate-x-0';
      case 'md': return isOn ? 'translate-x-8' : 'translate-x-0';
      case 'lg': return isOn ? 'translate-x-10' : 'translate-x-0';
      default: return isOn ? 'translate-x-8' : 'translate-x-0';
    }
  };

  return (
    <button
      className={combinedClasses}
      onClick={handleClick}
      disabled={disabled}
      aria-label={isOn ? 'Désactiver' : 'Activer'}
    >
      <div className={`
        absolute top-1/2 left-1 ${getThumbSize()} rounded-full transition-transform duration-300
        ${isOn ? 'bg-black' : 'bg-white'}
        ${getThumbPosition()}
        transform -translate-y-1/2
      `} />
    </button>
  );
}
