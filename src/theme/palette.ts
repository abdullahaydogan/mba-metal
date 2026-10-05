import type { PaletteOptions } from '@mui/material/styles';

export const brandColors = {
  green: {
    50: '#F0F8F4',
    100: '#DCEFE5',
    200: '#B8DEC9',
    300: '#87C5A5',
    400: '#56AA80',
    500: '#328D62',
    600: '#246F4C',
    700: '#1D593E',
    800: '#184733',
    900: '#123829',
    950: '#091F17',
  },

  neutral: {
    0: '#FFFFFF',
    50: '#F8FAF9',
    100: '#F0F3F1',
    200: '#E0E5E2',
    300: '#C8D0CC',
    400: '#96A19B',
    500: '#6E7973',
    600: '#505B55',
    700: '#3A433E',
    800: '#252C28',
    900: '#161B18',
    950: '#0B0F0D',
  },

  metal: {
    light: '#D8DDDA',
    main: '#9EA7A2',
    dark: '#59635E',
  },
} as const;

export const lightPalette: PaletteOptions = {
  mode: 'light',

  primary: {
    main: brandColors.green[700],
    light: brandColors.green[500],
    dark: brandColors.green[900],
    contrastText: brandColors.neutral[0],
  },

  secondary: {
    main: brandColors.metal.main,
  },

  background: {
    default: brandColors.neutral[0],
    paper: brandColors.neutral[50],
  },

  text: {
    primary: brandColors.neutral[900],
    secondary: brandColors.neutral[600],
  },

  divider: brandColors.neutral[200],

  success: {
    main: brandColors.green[600],
  },
};

export const darkPalette: PaletteOptions = {
  mode: 'dark',

  primary: {
    main: brandColors.green[400],
    light: brandColors.green[300],
    dark: brandColors.green[700],
    contrastText: brandColors.neutral[950],
  },

  secondary: {
    main: brandColors.metal.light,
  },

  background: {
    default: brandColors.neutral[950],
    paper: brandColors.neutral[900],
  },

  text: {
    primary: brandColors.neutral[50],
    secondary: brandColors.neutral[400],
  },

  divider: 'rgba(255, 255, 255, 0.10)',

  success: {
    main: brandColors.green[400],
  },
};