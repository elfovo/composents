'use client';

import { colors } from '@/lib/colors';
import { useState } from 'react';

export default function ButtonsSection() {
  const [activeDemo, setActiveDemo] = useState('primary');

  const buttonDemos = [
    {
      id: 'primary',
      name: 'Boutons Primaires',
      description: 'Boutons principaux avec effets de survol',
      component: (
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Bouton Standard
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium transform hover:scale-105">
            Gradient Hover
          </button>
          <button className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all font-medium">
            Outline
          </button>
        </div>
      )
    },
    {
      id: 'animated',
      name: 'Boutons Animés',
      description: 'Boutons avec animations avancées',
      component: (
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium relative overflow-hidden group">
            <span className="relative z-10">Ripple Effect</span>
            <div className="absolute inset-0 bg-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>
          <button className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-red-600/50 transition-all duration-300 transform hover:-translate-y-1">
            Lift Effect
          </button>
          <button className="px-6 py-3 bg-yellow-600 text-white rounded-lg font-medium relative overflow-hidden">
            <span className="relative z-10">Shine Effect</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-30 transform -skew-x-12 translate-x-[-100%] hover:translate-x-[100%] transition-all duration-700"></div>
          </button>
        </div>
      )
    },
    {
      id: 'toggle',
      name: 'Boutons Toggle',
      description: 'Boutons de basculement et switches',
      component: (
        <div className="flex flex-wrap gap-6 justify-center items-center">
          <div className="flex items-center space-x-3">
            <span className="text-gray-700">Toggle Switch:</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
              Option 1
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Option 2
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
              Option 3
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'loading',
      name: 'Boutons Loading',
      description: 'Boutons avec états de chargement',
      component: (
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center space-x-2" disabled>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Chargement...</span>
          </button>
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium relative overflow-hidden">
            <span className="relative z-10">Progress Button</span>
            <div className="absolute bottom-0 left-0 h-1 bg-green-400 animate-pulse" style={{ width: '60%' }}></div>
          </button>
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium">
            <span className="inline-block animate-bounce">✓</span> Succès
          </button>
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

          {/* Navigation des démos */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {buttonDemos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(demo.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeDemo === demo.id
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                style={{
                  backgroundColor: activeDemo === demo.id ? colors.primary.blue : colors.background.card,
                  border: `1px solid ${colors.border.light}`
                }}
              >
                {demo.name}
              </button>
            ))}
          </div>

          {/* Démo active */}
          <div className="mb-8 p-8 rounded-xl" style={{ backgroundColor: colors.background.card }}>
            {buttonDemos.find(demo => demo.id === activeDemo)?.component}
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

          {/* Code d'exemple */}
          <div className="bg-gray-900 rounded-lg p-6">
            <h4 className="text-white font-semibold mb-4">Code d'exemple :</h4>
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{`// Bouton avec effet de survol
<button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
  Bouton Standard
</button>

// Bouton avec animation
<button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium transform hover:scale-105">
  Gradient Hover
</button>`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
