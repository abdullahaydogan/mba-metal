import type {
  PropsWithChildren,
} from 'react';

import {
  Box,
  type BoxProps,
} from '@mui/material';

type SectionVariant =
  | 'default'
  | 'surface'
  | 'dark'
  | 'primary';

type SectionOverflow =
  | 'visible'
  | 'hidden'
  | 'clip'
  | 'scroll'
  | 'auto';

interface SectionProps
  extends PropsWithChildren {
  id?: string;

  variant?: SectionVariant;

  disablePadding?: boolean;

  overflow?: SectionOverflow;

  sx?: BoxProps['sx'];
}

export function Section({
  children,
  id,
  variant = 'default',
  disablePadding = false,
  overflow = 'hidden',
  sx,
}: SectionProps) {
  const getBackground = () => {
    switch (variant) {
      case 'surface':
        return 'background.paper';

      case 'dark':
        return '#0B0F0D';

      case 'primary':
        return 'primary.dark';

      default:
        return 'background.default';
    }
  };

  const getColor = () => {
    if (
      variant === 'dark' ||
      variant === 'primary'
    ) {
      return '#FFFFFF';
    }

    return 'text.primary';
  };

  return (
    <Box
      component="section"
      id={id}
      sx={[
        {
          position: 'relative',

          width: '100%',

          overflow,

          bgcolor: getBackground(),

          color: getColor(),

          py: disablePadding
            ? 0
            : {
                xs: 10,
                md: 14,
                lg: 18,
              },
        },

        ...(Array.isArray(sx)
          ? sx
          : sx
            ? [sx]
            : []),
      ]}
    >
      {children}
    </Box>
  );
}