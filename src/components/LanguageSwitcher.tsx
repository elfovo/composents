'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { colors } from '@/lib/colors';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'fr'
            ? 'text-white'
            : 'text-gray-400 hover:text-white'
        }`}
        style={{
          backgroundColor: language === 'fr' ? colors.primary.black : 'transparent',
          border: `1px solid ${colors.border.light}`
        }}
      >
        FR
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'en'
            ? 'text-white'
            : 'text-gray-400 hover:text-white'
        }`}
        style={{
          backgroundColor: language === 'en' ? colors.primary.black : 'transparent',
          border: `1px solid ${colors.border.light}`
        }}
      >
        EN
      </button>
    </div>
  );
}
