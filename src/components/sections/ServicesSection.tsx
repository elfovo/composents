'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { colors } from '@/lib/colors';

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center" style={{ color: colors.text.primary }}>
            {t('servicesTitle')}
          </h1>
          {/* Contenu à ajouter */}
        </div>
      </div>
    </section>
  );
}

