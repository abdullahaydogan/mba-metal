import type {
  PropsWithChildren,
} from 'react';

import {
  Box,
  type BoxProps,
} from '@mui/material';

interface ContainerProps
  extends PropsWithChildren {
  maxWidth?: number;
  sx?: BoxProps['sx'];
}

export function Container({
  children,
  maxWidth = 1440,
  sx,
}: ContainerProps) {
  return (
    <Box
      sx={[
        {
          width: '100%',

          maxWidth,

          mx: 'auto',

          px: {
            xs: 2.5,
            sm: 4,
            md: 6,
            lg: 8,
            xl: 10,
          },
        },

        ...(Array.isArray(sx)
          ? sx
          : [sx]),
      ]}
    >
      {children}
    </Box>
  );
}