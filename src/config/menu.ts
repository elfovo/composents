import { colors } from '@/lib/colors';
import { TranslationKey } from '@/lib/translations';

export const getMenuConfig = (t: (key: TranslationKey) => string) => {
  return {
    items: [
      {
        label: t('home'),
        href: '#home',
        ariaLabel: t('home'),
        rotation: -8,
        hoverStyles: { bgColor: colors.menu.hover, textColor: colors.primary.white }
      },
      {
        label: t('about'),
        href: '#about',
        ariaLabel: t('about'),
        rotation: 8,
        hoverStyles: { bgColor: colors.menu.hover, textColor: colors.primary.white }
      },
      {
        label: t('projects'),
        href: '#projects',
        ariaLabel: t('projects'),
        rotation: 8,
        hoverStyles: { bgColor: colors.menu.hover, textColor: colors.primary.white }
      },
      {
        label: t('services'),
        href: '#services',
        ariaLabel: t('services'),
        rotation: -8,
        hoverStyles: { bgColor: colors.menu.hover, textColor: colors.primary.white }
      },
      {
        label: t('contact'),
        href: '#contact',
        ariaLabel: t('contact'),
        rotation: 8,
        hoverStyles: { bgColor: colors.menu.hover, textColor: colors.primary.white }
      }
    ],
    logo: '/logo.svg',
    useFixedPosition: true,
    menuBg: colors.menu.background,
    menuContentColor: colors.menu.text
  };
};