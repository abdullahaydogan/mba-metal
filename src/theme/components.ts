import type { Components, Theme } from '@mui/material/styles';

export const components: Components<Omit<Theme, 'components'>> = {
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        scrollBehavior: 'smooth',
      },

      body: {
        margin: 0,
        padding: 0,
        minWidth: 320,
        overflowX: 'hidden',
      },

      '*': {
        boxSizing: 'border-box',
      },

      '::selection': {
        backgroundColor: '#1D593E',
        color: '#FFFFFF',
      },

      img: {
        display: 'block',
        maxWidth: '100%',
      },

      a: {
        color: 'inherit',
        textDecoration: 'none',
      },

      button: {
        fontFamily: 'inherit',
      },
    },
  },

  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },

    styleOverrides: {
      root: {
        minHeight: 48,
        borderRadius: 999,
        paddingInline: 24,
        fontWeight: 600,
      },

      sizeLarge: {
        minHeight: 56,
        paddingInline: 30,
        fontSize: '1rem',
      },
    },
  },

  MuiContainer: {
    defaultProps: {
      maxWidth: 'xl',
    },
  },
};