import React, { useState, useRef, useEffect } from 'react';
import GlassSurface from '../GlassSurface';

type NavItemId = 'contacts' | 'calls' | 'exchanges' | 'settings';

interface GlassNavBarProps {
  activeItem?: NavItemId;
  onItemClick?: (item: NavItemId) => void;
  className?: string;
}

type ButtonMetric = {
  left: number;
  top: number;
  width: number;
  height: number;
  centerX: number;
  centerY: number;
};

const FALLBACK_METRIC: ButtonMetric = {
  left: 0,
  top: 0,
  width: 72,
  height: 48,
  centerX: 36,
  centerY: 24
};

const GlassNavBar: React.FC<GlassNavBarProps> = ({
  activeItem = 'exchanges',
  onItemClick,
  className = ''
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [buttonMetrics, setButtonMetrics] = useState<ButtonMetric[]>([]);
  const [isMoving, setIsMoving] = useState(false);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Mesurer les positions réelles des boutons
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const measurePositions = () => {
      const buttons = buttonRefs.current.filter(Boolean);
      if (buttons.length === 0) {
        return;
      }

      const wrapperRect = wrapperRef.current?.getBoundingClientRect();
      const metrics = buttonRefs.current.map((button) => {
        if (!button) {
          return FALLBACK_METRIC;
        }

        const rect = button.getBoundingClientRect();
        const left = wrapperRect ? rect.left - wrapperRect.left : FALLBACK_METRIC.left;
        const top = wrapperRect ? rect.top - wrapperRect.top : FALLBACK_METRIC.top;
        const width = rect.width || FALLBACK_METRIC.width;
        const height = rect.height || FALLBACK_METRIC.height;

        return {
          left,
          top,
          width,
          height,
          centerX: left + width / 2,
          centerY: top + height / 2
        };
      });

      setButtonMetrics(metrics);

    };

    let animationFrame = 0;
    const scheduleMeasure = () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      animationFrame = window.requestAnimationFrame(measurePositions);
    };

    scheduleMeasure();
    const timeouts: number[] = [];
    [80, 240].forEach((delay) => {
      timeouts.push(window.setTimeout(scheduleMeasure, delay));
    });

    let observer: ResizeObserver | null = null;

    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(scheduleMeasure);

      const wrapper = wrapperRef.current;
      if (wrapper) {
        observer.observe(wrapper);
      }

      buttonRefs.current.forEach((button) => {
        if (button) {
          observer?.observe(button);
        }
      });
    }

    // Re-mesurer si la fenêtre change de taille
    window.addEventListener('resize', scheduleMeasure);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      timeouts.forEach((timeout) => window.clearTimeout(timeout));

      if (observer) {
        observer.disconnect();
      }

      window.removeEventListener('resize', scheduleMeasure);
    };
  }, []);

  // Détecter le mouvement du focus ring
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    setIsMoving(true);
    const timer = window.setTimeout(() => setIsMoving(false), 600);
    return () => window.clearTimeout(timer);
  }, [hoveredItem, activeItem]);

  const items = [
    { 
      id: 'contacts', 
      label: 'Contacts', 
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      )
    },
    { 
      id: 'calls', 
      label: 'Appels', 
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      )
    },
    { 
      id: 'exchanges', 
      label: 'Échanges', 
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      )
    },
    { 
      id: 'settings', 
      label: 'Paramètres', 
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
        </svg>
      )
    },
  ];

  const targetItemId: NavItemId | null = (hoveredItem as NavItemId | null) || activeItem;
  const targetIndex = items.findIndex((item) => item.id === targetItemId);
  const targetMetric =
    (targetIndex >= 0 && buttonMetrics[targetIndex]) || FALLBACK_METRIC;

  const focusWidth = targetMetric.width || FALLBACK_METRIC.width;
  const focusHeight = targetMetric.height || FALLBACK_METRIC.height;

  return (
    <div
      ref={wrapperRef}
      className={`relative mx-auto w-full max-w-md px-3 py-2 sm:max-w-lg sm:px-4 ${className}`}
    >
      {/* Focus ring mobile qui se déplace */}
      <div
        className="absolute transition-all duration-700 ease-in-out"
        style={{
          left: `${targetMetric.centerX}px`,
          top: `${targetMetric.centerY}px`,
          width: `${focusWidth}px`,
          height: `${focusHeight}px`,
          transform: `translate(-50%, -50%) scale(${isMoving ? 1.05 : 1})`,
          transformOrigin: 'center',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      >
        <GlassSurface
          width={focusWidth}
          height={focusHeight}
          borderRadius={20}
          borderWidth={0}
          brightness={50}
          opacity={0.93}
          blur={0}
          displace={0}
          backgroundOpacity={0}
          saturation={1}
          distortionScale={40}
          redOffset={0}
          greenOffset={10}
          blueOffset={20}
          className="w-full h-full"
        />
      </div>
      
      {/* Menu principal */}
      <GlassSurface
        width="100%"
        height="clamp(52px, 13vw, 64px)"
        borderRadius={28}
        borderWidth={0.1}
        brightness={50}
        opacity={0.9}
        blur={15}
        displace={0.7}
        backgroundOpacity={0}
        saturation={1.8}
        distortionScale={-45}
        redOffset={0}
        greenOffset={0}
        blueOffset={0}
        className="w-full h-full"
      >
        <div className="flex items-center w-full h-full gap-1 sm:gap-2">
          {items.map((item, index) => {
            const isActive = item.id === activeItem;
            const isHovered = item.id === hoveredItem;
            
            return (
              <button
                key={item.id}
                ref={(el) => (buttonRefs.current[index] = el)}
                type="button"
                className={`relative z-10 flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-1 py-1 text-[0.7rem] font-medium leading-tight transition-colors duration-500 ease-out sm:px-2 sm:text-xs
                  ${isActive || isHovered ? 'text-blue-400' : 'text-white'}
                `}
                style={{ minWidth: '56px', minHeight: '48px' }}
                onClick={() => onItemClick?.(item.id as NavItemId)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onFocus={() => setHoveredItem(item.id)}
                onBlur={() => setHoveredItem(null)}
                onTouchStart={() => setHoveredItem(item.id)}
                onTouchEnd={() => setHoveredItem(null)}
                onTouchCancel={() => setHoveredItem(null)}
                aria-pressed={isActive}
              >
                <div className={`mb-0.5 transition-colors duration-1000 ease-in-out ${isActive || isHovered ? 'text-blue-400' : 'text-white'}`}>
                  {item.icon}
                </div>
                <span className={`text-xs font-medium transition-colors duration-1000 ease-in-out ${isActive || isHovered ? 'text-blue-400' : 'text-white'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </GlassSurface>
    </div>
  );
};

export default GlassNavBar;
