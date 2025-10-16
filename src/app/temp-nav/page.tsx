'use client';

import { useState } from 'react';
import { MetaBalls } from '@/components/animations';
import GlassNavBar from '@/components/navigation/GlassNavBar';

export default function TempNavPage() {
  const [activeTab, setActiveTab] = useState<'contacts' | 'calls' | 'exchanges' | 'settings'>('exchanges');

  const handleTabChange = (tab: 'contacts' | 'calls' | 'exchanges' | 'settings') => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Arrière-plan MetaBalls */}
      <div className="absolute inset-0 z-0">
        <MetaBalls
          color="#5239ff"
          cursorBallColor="#ffffff"
          speed={0.5}
          enableMouseInteraction={true}
          ballCount={20}
          clumpFactor={1.2}
          cursorBallSize={4}
          enableTransparency={true}
          className="w-full h-full"
        />
      </div>

      {/* Contenu principal - Seulement le menu */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <GlassNavBar 
          activeItem={activeTab}
          onItemClick={handleTabChange}
        />
      </div>

      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/20 z-5"></div>
    </div>
  );
}
