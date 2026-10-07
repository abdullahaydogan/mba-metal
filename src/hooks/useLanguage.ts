import {
  useContext,
} from 'react';

import {
  LanguageContext,
} from '../features/language/LanguageContext';

export const useLanguage = () => {
  const context =
    useContext(LanguageContext);

  if (!context) {
    throw new Error(
      'useLanguage must be used inside I18nProvider'
    );
  }

  return context;
};