'use client';

interface FloatingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function FloatingButton({ 
  children, 
  onClick, 
  disabled = false, 
  className = '' 
}: FloatingButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 ${className}`}
    >
      {children}
    </button>
  );
}
