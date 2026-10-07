import {
  createContext,
} from 'react';

import type {
  SupportedLanguage,
} from '../../i18n';

export type Language =
  SupportedLanguage;

export interface LanguageContextValue {
  language: Language;

  setLanguage: (
    language: Language
  ) => Promise<void>;
}

export const LanguageContext =
  createContext<
    LanguageContextValue | undefined
  >(undefined);