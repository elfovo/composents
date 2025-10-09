'use client';

import { colors } from '@/lib/colors';
import { ModernLayoutNav } from '@/components/navigation';
import { useState } from 'react';

export default function LayoutsSection() {
  const [activeDemo, setActiveDemo] = useState('cards');

  const layoutDemos = [
    {
      id: 'cards',
      name: 'Cartes',
      description: 'Différents styles de cartes et conteneurs',
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Carte Simple</h3>
            <p className="text-gray-600 mb-4">Description de la carte avec du contenu.</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Action
            </button>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-3">Carte Gradient</h3>
            <p className="mb-4 opacity-90">Carte avec fond dégradé.</p>
            <button className="px-4 py-2 bg-white text-purple-600 rounded hover:bg-gray-100 transition-colors">
              Action
            </button>
          </div>
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-blue-500 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Carte Bordure</h3>
            <p className="text-gray-600 mb-4">Carte avec bordure colorée au survol.</p>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors">
              Action
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'grid',
      name: 'Grilles',
      description: 'Systèmes de grilles et layouts responsives',
      component: (
        <div className="space-y-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-blue-100 p-4 rounded text-center">
              <span className="text-blue-800 font-medium">Col 1/3</span>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-green-100 p-4 rounded text-center">
              <span className="text-green-800 font-medium">Col 2/3</span>
            </div>
            <div className="col-span-12 md:col-span-12 lg:col-span-4 bg-purple-100 p-4 rounded text-center">
              <span className="text-purple-800 font-medium">Col 3/3</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Layout 2 Colonnes</h4>
              <p className="text-gray-600">Contenu de la première colonne</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Layout 2 Colonnes</h4>
              <p className="text-gray-600">Contenu de la deuxième colonne</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'navigation',
      name: 'Navigation',
      description: 'Composants de navigation et menus',
      component: (
        <div className="space-y-6">
          <nav className="bg-white shadow-sm rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold text-gray-800">Logo</div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Accueil</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
              </div>
            </div>
          </nav>
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex space-x-2">
              <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Tous</span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300 transition-colors cursor-pointer">Web</span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300 transition-colors cursor-pointer">Mobile</span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300 transition-colors cursor-pointer">Design</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'forms',
      name: 'Formulaires',
      description: 'Layouts de formulaires et inputs',
      component: (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Formulaire</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Votre message"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Envoyer
            </button>
          </form>
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
