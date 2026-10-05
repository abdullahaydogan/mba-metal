import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import tr from './locales/tr/translation.json';
import en from './locales/en/translation.json';

export const LANGUAGE_STORAGE_KEY =
  'mba-metal-language';

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return 'tr';
  }

  const storedLanguage =
    window.localStorage.getItem(
      LANGUAGE_STORAGE_KEY
    );

  if (
    storedLanguage === 'tr' ||
    storedLanguage === 'en'
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
    },

    lng: getInitialLanguage(),

    fallbackLng: 'tr',

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;