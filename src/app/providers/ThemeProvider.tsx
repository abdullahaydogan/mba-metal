import {
  useCallback,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';

import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material';

import {
  createAppTheme,
  type ThemeMode,
} from '../../theme';

import {
  ThemeContext,
} from '../../features/theme/ThemeContext';

const THEME_STORAGE_KEY = 'mba-metal-theme';

const getInitialTheme = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const storedTheme =
    window.localStorage.getItem(THEME_STORAGE_KEY);

  if (
    storedTheme === 'light' ||
    storedTheme === 'dark'
  ) {
    return storedTheme;
  }

  return 'light';
};

export function AppThemeProvider({
  children,
}: PropsWithChildren) {
  const [mode, setMode] =
    useState<ThemeMode>(getInitialTheme);

  const setThemeMode = useCallback(
    (newMode: ThemeMode) => {
      setMode(newMode);

      window.localStorage.setItem(
        THEME_STORAGE_KEY,
        newMode
      );
    },
    []
  );

  const toggleTheme = useCallback(() => {
    setMode((currentMode) => {
      const newMode =
        currentMode === 'light'
          ? 'dark'
          : 'light';

      window.localStorage.setItem(
        THEME_STORAGE_KEY,
        newMode
      );

      return newMode;
    });
  }, []);

  const theme = useMemo(
    () => createAppTheme(mode),
    [mode]
  );

  const contextValue = useMemo(
    () => ({
      mode,
      toggleTheme,
      setThemeMode,
    }),
    [
      mode,
      toggleTheme,
      setThemeMode,
    ]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />

        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}