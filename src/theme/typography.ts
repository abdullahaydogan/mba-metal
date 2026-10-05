import type { ThemeOptions } from '@mui/material/styles';

export const typography: ThemeOptions['typography'] = {
  fontFamily: [
    'Inter',
    'Arial',
    'sans-serif',
  ].join(','),

  h1: {
    fontSize: 'clamp(3rem, 7vw, 7rem)',
    fontWeight: 600,
    lineHeight: 0.95,
    letterSpacing: '-0.055em',
  },

  h2: {
    fontSize: 'clamp(2.4rem, 5vw, 5rem)',
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: '-0.045em',
  },

  h3: {
    fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
    fontWeight: 600,
    lineHeight: 1.05,
    letterSpacing: '-0.035em',
  },

  h4: {
    fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
    fontWeight: 600,
    lineHeight: 1.15,
    letterSpacing: '-0.025em',
  },

  h5: {
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.25,
  },

  h6: {
    fontSize: '1.125rem',
    fontWeight: 600,
    lineHeight: 1.3,
  },

  body1: {
    fontSize: '1rem',
    lineHeight: 1.75,
  },

  body2: {
    fontSize: '0.925rem',
    lineHeight: 1.65,
  },

  button: {
    fontWeight: 600,
    textTransform: 'none',
    letterSpacing: '-0.01em',
  },

  overline: {
    fontSize: '0.75rem',
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
  },
};