'use client';

import { colors } from '@/lib/colors';
import { ModernButtonNav } from '@/components/navigation';
import { SimpleButton, GradientButton, OutlineButton } from '@/components/buttons';
import { useState } from 'react';

export default function ButtonsSection() {
  const [activeDemo, setActiveDemo] = useState('simple');

  const buttonDemos = [
    {
      id: 'simple',
      name: 'Bouton Simple',
      description: 'Bouton blanc moderne et minimaliste',
      component: (
        <div className="flex justify-center items-center">
          <SimpleButton size="lg">
            Bouton Simple
          </SimpleButton>
        </div>
      )
    },
    {
      id: 'gradient',
      name: 'Bouton Gradient',
      description: 'Bouton avec dégradé bleu',
      component: (
        <div className="flex justify-center items-center">
          <GradientButton size="lg" gradient="blue">
            Bouton Gradient
          </GradientButton>
        </div>
      )
    },
    {
      id: 'outline',
      name: 'Bouton Outline',
      description: 'Bouton avec bordure blanche',
      component: (
        <div className="flex justify-center items-center">
          <OutlineButton size="lg" variant="white">
            Bouton Outline
          </OutlineButton>
        </div>
      )
    }
  ];

  return (
    <section id="buttons" className="min-h-screen py-20" style={{ backgroundColor: colors.background.main }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: colors.text.primary }}>
              Boutons & Interactions
            </h2>
            <p className="text-xl" style={{ color: colors.text.muted }}>
              Collection de boutons et éléments interactifs
            </p>
          </div>

          {/* Navigation moderne avec GooeyNav */}
          <ModernButtonNav 
            buttonDemos={buttonDemos}
            activeDemo={activeDemo}
            setActiveDemo={setActiveDemo}
          />

          {/* Zone d'affichage avec contours arrondis */}
          <div className="mb-8 p-8 rounded-2xl shadow-lg" style={{ backgroundColor: '#000000' }}>
            <div className="w-full h-[600px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg relative flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
              {buttonDemos.find(demo => demo.id === activeDemo)?.component}
            </div>
          </div>

          {/* Description */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.text.primary }}>
              {buttonDemos.find(demo => demo.id === activeDemo)?.name}
            </h3>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.text.muted }}>
              {buttonDemos.find(demo => demo.id === activeDemo)?.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
