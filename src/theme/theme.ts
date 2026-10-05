import { createTheme } from '@mui/material/styles';

import {
  darkPalette,
  lightPalette,
} from './palette';

import { typography } from './typography';
import { components } from './components';

export type ThemeMode = 'light' | 'dark';

export const createAppTheme = (
  mode: ThemeMode
) => {
  const palette =
    mode === 'light'
      ? lightPalette
      : darkPalette;

  return createTheme({
    palette,

    typography,

    components,

    shape: {
      borderRadius: 16,
    },

    spacing: 8,

    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
};