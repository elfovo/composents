'use client';

import { colors } from '@/lib/colors';
import { ModernLayoutNav } from '@/components/navigation';
import { OutlineInput } from '@/components/inputs';
import { useState } from 'react';

export default function LayoutsSection() {
  const [activeDemo, setActiveDemo] = useState('forms');
  const [inputValue, setInputValue] = useState('');
  const [showValidation, setShowValidation] = useState(false);

  const layoutDemos = [
    {
      id: 'forms',
      name: 'Champs d\'écriture',
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
    }
  ];

  return (
    <section id="layouts" className="min-h-screen py-20" style={{ backgroundColor: colors.background.main }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: colors.text.primary }}>
              Layouts & Structures
            </h2>
            <p className="text-xl" style={{ color: colors.text.muted }}>
              Composants de mise en page et structures
            </p>
          </div>

          {/* Navigation moderne avec GooeyNav */}
          <ModernLayoutNav 
            layoutDemos={layoutDemos}
            activeDemo={activeDemo}
            setActiveDemo={setActiveDemo}
          />

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
