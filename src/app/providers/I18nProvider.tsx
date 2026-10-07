import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';

import {
  I18nextProvider,
} from 'react-i18next';

import i18n, {
  LANGUAGE_STORAGE_KEY,
  SUPPORTED_LANGUAGES,
  type SupportedLanguage,
} from '../../i18n';

import {
  LanguageContext,
  type Language,
  type LanguageContextValue,
} from '../../features/language/LanguageContext';

const getCurrentLanguage =
  (): Language => {
    const currentLanguage =
      i18n.resolvedLanguage ??
      i18n.language ??
      'tr';

    const normalizedLanguage =
      currentLanguage
        .split('-')[0] as SupportedLanguage;

    if (
      SUPPORTED_LANGUAGES.includes(
        normalizedLanguage
      )
    ) {
      return normalizedLanguage;
    }

    return 'tr';
  };

export function AppI18nProvider({
  children,
}: PropsWithChildren) {
  const [
    language,
    setCurrentLanguage,
  ] = useState<Language>(
    getCurrentLanguage
  );

  const setLanguage =
    useCallback(
      async (
        newLanguage: Language
      ): Promise<void> => {
        await i18n.changeLanguage(
          newLanguage
        );

        if (
          typeof window !==
          'undefined'
        ) {
          window.localStorage.setItem(
            LANGUAGE_STORAGE_KEY,
            newLanguage
          );
        }

        if (
          typeof document !==
          'undefined'
        ) {
          document.documentElement.lang =
            newLanguage;
        }

        setCurrentLanguage(
          newLanguage
        );
      },
      []
    );

  useEffect(() => {
    document.documentElement.lang =
      language;
  }, [language]);

  const value =
    useMemo<LanguageContextValue>(
      () => ({
        language,
        setLanguage,
      }),
      [
        language,
        setLanguage,
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