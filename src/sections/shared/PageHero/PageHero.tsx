import {
  Box,
  Typography,
} from '@mui/material';

import { motion } from 'motion/react';

import { Container } from '../../../components/common/Container';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

const MotionBox = motion.create(Box);

export function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <Box
      component="section"
      sx={{
        pt: {
          xs: 16,
          md: 20,
          lg: 22,
        },
        pb: {
          xs: 10,
          md: 14,
          lg: 16,
        },
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container>
        <MotionBox
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {eyebrow && (
            <Typography
              variant="overline"
              color="primary.main"
              sx={{
                display: 'block',
                mb: 2,
              }}
            >
              {eyebrow}
            </Typography>
          )}

          <Typography
            component="h1"
            variant="h1"
            sx={{
              maxWidth: 1050,
            }}
          >
            {title}
          </Typography>

          {description && (
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mt: 3,
                maxWidth: 680,
                fontSize: {
                  xs: '1rem',
                  md: '1.1rem',
                },
                lineHeight: 1.8,
              }}
            >
              {description}
            </Typography>
          )}
        </MotionBox>
      </Container>
    </Box>
  );
}