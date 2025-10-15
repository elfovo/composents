'use client';

import { MetaBalls } from '@/components/animations';
import { GlassLoginForm } from '@/components/layouts';

export default function TempLoginPage() {
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

      {/* Contenu principal */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <GlassLoginForm 
            onSubmit={(data) => {
              console.log('Données de connexion:', data);
              alert(`Connexion réussie pour ${data.email}`);
            }}
          />
        </div>
      </div>

      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/20 z-5"></div>
    </div>
  );
}
