import { createContext } from 'react';

import type { ThemeMode } from '../../theme';

export interface ThemeContextValue {
  mode: ThemeMode;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
}

export const ThemeContext =
  createContext<ThemeContextValue | undefined>(undefined);