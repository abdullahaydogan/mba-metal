import type { PropsWithChildren } from 'react';

import {
  HelmetProvider,
} from 'react-helmet-async';

import {
  AppThemeProvider,
} from './ThemeProvider';

import {
  AppI18nProvider,
} from './I18nProvider';

export function AppProviders({
  children,
}: PropsWithChildren) {
  return (
    <HelmetProvider>
      <AppI18nProvider>
        <AppThemeProvider>
          {children}
        </AppThemeProvider>
      </AppI18nProvider>
    </HelmetProvider>
  );
}