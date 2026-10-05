import {
  Stack,
  Typography,
  type StackProps,
} from '@mui/material';

export type SectionHeaderAlign =
  | 'left'
  | 'center';

interface SectionHeaderProps {
  eyebrow?: string;

  title: string;

  description?: string;

  align?: SectionHeaderAlign;

  maxWidth?: number;

  sx?: StackProps['sx'];
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  maxWidth = 900,
  sx,
}: SectionHeaderProps) {
  const isCenter =
    align === 'center';

  return (
    <Stack
      spacing={2.5}
      sx={[
        {
          width: '100%',

          maxWidth,

          mx: isCenter
            ? 'auto'
            : 0,

          textAlign: align,

          alignItems: isCenter
            ? 'center'
            : 'flex-start',
        },

        ...(Array.isArray(sx)
          ? sx
          : [sx]),
      ]}
    >
      {eyebrow && (
        <Typography
          variant="overline"
          color="primary"
        >
          {eyebrow}
        </Typography>
      )}

      <Typography
        variant="h2"
        component="h2"
      >
        {title}
      </Typography>

      {description && (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: 720,

            fontSize: {
              xs: '1rem',
              md: '1.1rem',
            },
          }}
        >
          {description}
        </Typography>
      )}
    </Stack>
  );
}