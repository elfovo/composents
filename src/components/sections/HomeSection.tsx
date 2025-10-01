'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { colors } from '@/lib/colors';
import LiquidEther from '@/components/LiquidEther';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HomeSection() {
  const { t } = useLanguage();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Animation fade-in pour les éléments
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.7"
    )
    .fromTo(descriptionRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.7"
    );
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Fond animé LiquidEther */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          dt={0.014}
          BFECC={true}
          resolution={0.5}
          isBounce={false}
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={1000}
          autoRampDuration={0.6}
          style={{
            width: '100%',
            height: '100%',
            opacity: 0.7
          }}
        />
        
        {/* Gradient fade-out en bas - transition très douce */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 75%, transparent 100%)'
          }}
        />
      </div>
      
      {/* Contenu de la section */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className="text-6xl font-bold mb-6 drop-shadow-lg" 
            style={{ color: colors.text.primary, opacity: 0 }}
          >
            {t('welcomeTitle')}
          </h1>
          <h2 
            ref={subtitleRef}
            className="text-2xl mb-6 drop-shadow-md" 
            style={{ color: colors.text.light, opacity: 0 }}
          >
            {t('welcomeSubtitle')}
          </h2>
          <p 
            ref={descriptionRef}
            className="text-xl max-w-3xl mx-auto drop-shadow-sm" 
            style={{ color: colors.text.muted, opacity: 0 }}
          >
            {t('welcomeDescription')}
          </p>
        </div>
      </div>
    </section>
  );
}

