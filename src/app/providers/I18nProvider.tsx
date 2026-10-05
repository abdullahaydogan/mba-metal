import {
  useCallback,
  useMemo,
  type PropsWithChildren,
} from 'react';

import {
  I18nextProvider,
} from 'react-i18next';

import i18n, {
  LANGUAGE_STORAGE_KEY,
} from '../../i18n';

import {
  LanguageContext,
  type Language,
  type LanguageContextValue,
} from '../../features/language/LanguageContext';

export function AppI18nProvider({
  children,
}: PropsWithChildren) {
  const language: Language =
    i18n.language.startsWith('en')
      ? 'en'
      : 'tr';

  const setLanguage =
    useCallback(
      async (
        newLanguage: Language
      ): Promise<void> => {
        await i18n.changeLanguage(
          newLanguage
        );

        window.localStorage.setItem(
          LANGUAGE_STORAGE_KEY,
          newLanguage
        );

        document.documentElement.lang =
          newLanguage;
      },
      []
    );

  const toggleLanguage =
    useCallback(
      async (): Promise<void> => {
        const newLanguage: Language =
          i18n.language.startsWith(
            'tr'
          )
            ? 'en'
            : 'tr';

        await setLanguage(
          newLanguage
        );
      },
      [setLanguage]
    );

  const value =
    useMemo<LanguageContextValue>(
      () => ({
        language,
        setLanguage,
        toggleLanguage,
      }),
      [
        language,
        setLanguage,
        toggleLanguage,
      ]
    );

  return (
    <LanguageContext.Provider
      value={value}
    >
      <I18nextProvider
        i18n={i18n}
      >
        {children}
      </I18nextProvider>
    </LanguageContext.Provider>
  );
}