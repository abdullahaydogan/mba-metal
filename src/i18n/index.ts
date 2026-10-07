import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import tr from './locales/tr/translation.json';
import en from './locales/en/translation.json';
import de from './locales/de/translation.json';
import ru from './locales/ru/translation.json';

export const LANGUAGE_STORAGE_KEY =
  'mba-metal-language';

export const SUPPORTED_LANGUAGES = [
  'tr',
  'en',
  'de',
  'ru',
] as const;

export type SupportedLanguage =
  (typeof SUPPORTED_LANGUAGES)[number];

export const isSupportedLanguage = (
  language: string | null
): language is SupportedLanguage => {
  return SUPPORTED_LANGUAGES.includes(
    language as SupportedLanguage
  );
};

const getInitialLanguage =
  (): SupportedLanguage => {
    if (typeof window === 'undefined') {
      return 'tr';
    }

    const storedLanguage =
      window.localStorage.getItem(
        LANGUAGE_STORAGE_KEY
      );

    if (
      isSupportedLanguage(
        storedLanguage
      )
    ) {
      return storedLanguage;
    }

    return 'tr';
  };

i18n
  .use(initReactI18next)
  .init({
    resources: {
      tr: {
        translation: tr,
      },

      en: {
        translation: en,
      },

      de: {
        translation: de,
      },

      ru: {
        translation: ru,
      },
    },

    lng: getInitialLanguage(),

    fallbackLng: 'tr',

    supportedLngs:
      SUPPORTED_LANGUAGES,

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;