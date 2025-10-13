'use client';

import { colors } from '@/lib/colors';
import GooeyNav from '@/components/navigation/GooeyNav.jsx';
import { OutlineInput, DateSelector } from '@/components/inputs';
import { LoginForm, SignupForm, ResetPasswordForm } from '@/components/layouts';
import { SocialLoginButtons } from '@/components/buttons';
import { useState, useEffect, useRef } from 'react';

export default function LayoutsSection() {
  const [activeDemo, setActiveDemo] = useState('forms');
  const [inputValue, setInputValue] = useState('');
  const [showValidation, setShowValidation] = useState(false);
  const [shouldCenter, setShouldCenter] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const layoutDemos = [
    {
      id: 'forms',
      name: 'OutlineInput',
      description: 'Composant de saisie avec style outline',
      component: (
        <div className="max-w-md mx-auto p-8">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-white">Exemple</label>
            <div className={`bg-white text-black text-xs px-1 py-1 rounded-full flex items-center justify-center shadow-lg w-5 h-5 transition-opacity duration-300 ${showValidation ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <span className="text-xs">✓</span>
            </div>
          </div>
          <div className="relative">
            <OutlineInput 
              placeholder="Tapez quelque chose..."
              variant="white"
              size="lg"
              className="w-full"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onBlur={() => {
                if (inputValue.trim() !== '') {
                  setShowValidation(true);
                } else {
                  setShowValidation(false);
                }
              }}
              onFocus={() => setShowValidation(false)}
            />
          </div>
        </div>
      )
    },
    {
      id: 'dateselector',
      name: 'DateSelector',
      description: 'Composant de saisie avec style outline',
      component: (
        <div className="max-w-md mx-auto p-8">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-white">Exemple</label>
            <div className={`bg-white text-black text-xs px-1 py-1 rounded-full flex items-center justify-center shadow-lg w-5 h-5 transition-opacity duration-300 ${showValidation ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <span className="text-xs">✓</span>
            </div>
          </div>
          <div className="relative">
            <DateSelector 
              placeholder="Tapez quelque chose..."
              variant="white"
              size="lg"
              className="w-full"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onBlur={() => {
                if (inputValue.trim() !== '') {
                  setShowValidation(true);
                } else {
                  setShowValidation(false);
                }
              }}
              onFocus={() => setShowValidation(false)}
            />
          </div>
        </div>
      )
    },
    {
      id: 'login',
      name: 'LoginForm',
      description: 'Composant complet de page de connexion',
      component: (
        <div className="flex items-center justify-center h-full w-full px-4">
          <LoginForm 
            onSubmit={(data) => {
              console.log('Connexion:', data);
              alert(`Connexion réussie pour ${data.email}`);
            }}
          />
        </div>
      )
    },
    {
      id: 'signup',
      name: 'SignupForm',
      description: 'Composant complet de création de compte',
      component: (
        <div className="flex items-center justify-center h-full w-full px-4">
          <SignupForm 
            onSubmit={(data) => {
              console.log('Inscription:', data);
              alert(`Compte créé pour ${data.email}`);
            }}
          />
        </div>
      )
    },
    {
      id: 'resetpassword',
      name: 'ResetPasswordForm',
      description: 'Composant pour réinitialiser le mot de passe',
      component: (
        <div className="flex items-center justify-center h-full w-full px-4">
          <ResetPasswordForm 
            onSubmit={(data) => {
              console.log('Réinitialisation:', data);
              alert(`Mot de passe réinitialisé pour ${data.email}`);
            }}
          />
        </div>
      )
    },
    {
      id: 'sociallogin',
      name: 'SocialLoginButtons',
      description: 'Boutons de connexion avec Apple et Google',
      component: (
        <div className="flex items-center justify-center h-full w-full px-4">
          <div className="max-w-sm sm:max-w-md w-full">
            <SocialLoginButtons
              onAppleLogin={() => {
                console.log('Connexion Apple');
                alert('Connexion avec Apple');
              }}
              onGoogleLogin={() => {
                console.log('Connexion Google');
                alert('Connexion avec Google');
              }}
              size="lg"
            />
          </div>
        </div>
      )
    }
  ];

  const navItems = layoutDemos.map((demo) => ({
    label: demo.name,
    href: '#'
  }));

  useEffect(() => {
    if (!containerRef.current) return;

    const links = containerRef.current.querySelectorAll('a');
    links.forEach((link: HTMLAnchorElement, index: number) => {
      link.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const selectedDemo = layoutDemos[index];
        if (selectedDemo) {
          setActiveDemo(selectedDemo.id);
        }
      });
    });

    return () => {
      links.forEach((link: HTMLAnchorElement) => {
        link.removeEventListener('click', () => {});
      });
    };
  }, [layoutDemos, setActiveDemo]);

  // Détecter si le contenu déborde pour centrer ou non
  useEffect(() => {
    const checkOverflow = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const content = container.querySelector('.gooey-nav-container');
      
      if (content) {
        const containerWidth = container.clientWidth;
        const contentWidth = content.scrollWidth;
        
        // Si le contenu ne déborde pas, centrer
        setShouldCenter(contentWidth <= containerWidth);
      }
    };

    // Vérifier au montage et au redimensionnement
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    
    // Vérifier après un délai pour laisser le temps au contenu de se rendre
    const timeoutId = setTimeout(checkOverflow, 100);

    return () => {
      window.removeEventListener('resize', checkOverflow);
      clearTimeout(timeoutId);
    };
  }, [activeDemo]);

  return (
    <section id="layouts" className="min-h-screen py-20" style={{ backgroundColor: colors.background.main }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-0">
            <h2 className="text-4xl font-bold mb-4" style={{ color: colors.text.primary }}>
              Layouts & Structures
            </h2>
            <p className="text-xl" style={{ color: colors.text.muted }}>
              Composants de mise en page et structures
            </p>
          </div>

          {/* Navigation moderne avec GooeyNav */}
          <div className="relative" style={{ margin: 0, padding: 0, marginBottom: 0 }}>
            <div 
              className={`w-full overflow-x-auto overflow-y-hidden scrollbar-hide ${shouldCenter ? 'flex justify-center' : ''}`}
              ref={containerRef}
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                margin: 0,
                padding: '50px 0',
                marginBottom: 0
              }}
            >
              <div className="inline-block min-w-max">
                <GooeyNav
                  items={navItems}
                  animationTime={600}
                  particleCount={12}
                  particleDistances={[80, 8]}
                  particleR={80}
                  timeVariance={200}
                  colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                  initialActiveIndex={layoutDemos.findIndex((demo) => demo.id === activeDemo)}
                />
              </div>
              <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                
                /* Permettre aux particules de déborder verticalement dans l'espace existant */
                .gooey-nav-container {
                  overflow: visible !important;
                }
                
                .gooey-nav-container .effect.filter {
                  overflow: visible !important;
                }
              `}</style>
            </div>
          </div>

          {/* Zone d'affichage avec contours arrondis */}
          <div className="mb-8 p-8 rounded-2xl shadow-lg" style={{ backgroundColor: '#000000' }}>
            <div className="w-full h-[600px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg relative flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
              {layoutDemos.find(demo => demo.id === activeDemo)?.component}
            </div>
          </div>

          {/* Description */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.text.primary }}>
              {layoutDemos.find(demo => demo.id === activeDemo)?.name}
            </h3>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.text.muted }}>
              {layoutDemos.find(demo => demo.id === activeDemo)?.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
