import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from '@mui/material';

import {
  ArrowDown,
  ArrowUpRight,
  FileText,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import heroImage from '../../../assets/images/hero/hero-manufacturing.jpeg';

import { routes } from '../../../constants/routes';

const MotionBox = motion.create(Box);

const industryKeys = [
  'automotive',
  'whiteGoods',
  'retail',
  'industrial',
] as const;

export default function HeroSection() {
  const { t } = useTranslation();

  const scrollToNextSection = () => {
    const nextSection =
      document.getElementById('about');

    nextSection?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',

        minHeight: {
          xs: 'calc(100svh - 72px)',
          md: 'calc(100svh - 84px)',
        },

        display: 'flex',
        alignItems: 'stretch',

        overflow: 'hidden',

        bgcolor: 'background.default',
      }}
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <MotionBox
        initial={{
          opacity: 0,
          scale: 1.04,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        sx={{
          position: 'absolute',

          top: 0,
          right: 0,
          bottom: 0,

          width: {
            xs: '100%',
            lg: '58%',
          },

          overflow: 'hidden',

          '&::before': {
            content: '""',

            position: 'absolute',
            inset: 0,

            zIndex: 1,

            background: {
              xs: `
                linear-gradient(
                  90deg,
                  rgba(7, 17, 12, 0.94) 0%,
                  rgba(7, 17, 12, 0.82) 50%,
                  rgba(7, 17, 12, 0.42) 100%
                )
              `,

              lg: `
                linear-gradient(
                  90deg,
                  rgba(7, 17, 12, 0.88) 0%,
                  rgba(7, 17, 12, 0.20) 36%,
                  rgba(7, 17, 12, 0.05) 100%
                )
              `,
            },
          },

          '&::after': {
            content: '""',

            position: 'absolute',
            inset: 0,

            zIndex: 1,

            background: `
              linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.08) 0%,
                rgba(0, 0, 0, 0.02) 55%,
                rgba(0, 0, 0, 0.35) 100%
              )
            `,
          },
        }}
      >
        <Box
          component="img"
          src={heroImage}
          alt={t('home.hero.imageAlt')}
          sx={{
            width: '100%',
            height: '100%',

            objectFit: 'cover',
            objectPosition: 'center',

            display: 'block',
          }}
        />
      </MotionBox>

      {/* =====================================================
          LEFT BACKGROUND
      ===================================================== */}

      <Box
        sx={{
          position: 'absolute',
          inset: 0,

          zIndex: 0,

          background: (theme) =>
            theme.palette.mode === 'dark'
              ? `
                  linear-gradient(
                    90deg,
                    #07110c 0%,
                    #07110c 47%,
                    rgba(7,17,12,0.92) 55%,
                    rgba(7,17,12,0) 74%
                  )
                `
              : `
                  linear-gradient(
                    90deg,
                    #f7f9f7 0%,
                    #f7f9f7 47%,
                    rgba(247,249,247,0.94) 55%,
                    rgba(247,249,247,0) 74%
                  )
                `,
        }}
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 3,

          display: 'flex',
          alignItems: 'center',

          py: {
            xs: 10,
            md: 12,
            lg: 14,
          },
        }}
      >
        <Box
          sx={{
            width: {
              xs: '100%',
              md: '78%',
              lg: '52%',
            },
          }}
        >
          {/* EYEBROW */}

          <MotionBox
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.15,
            }}
          >
            <Stack
              direction="row"
              spacing={1.5}
              sx={{
                alignItems: 'center',
                mb: 3,
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 2,

                  bgcolor: 'primary.main',
                }}
              />

              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',

                  fontWeight: 700,
                  letterSpacing: '0.16em',
                }}
              >
                MBA METAL
              </Typography>
            </Stack>
          </MotionBox>

          {/* =====================================================
              TITLE
          ===================================================== */}

          <MotionBox
            initial={{
              opacity: 0,
              y: 28,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: 'clamp(3rem, 12vw, 5rem)',
                  md: 'clamp(4rem, 7vw, 6.5rem)',
                  xl: '7rem',
                },

                lineHeight: 0.93,
                letterSpacing: '-0.055em',

                fontWeight: 600,

                color: {
                  xs: 'common.white',
                  lg: 'text.primary',
                },

                maxWidth: 900,
              }}
            >
              {t('home.hero.titleLine1')}

              <br />

              <Box
                component="span"
                sx={{
                  color: 'primary.main',
                }}
              >
                {t('home.hero.titleLine2')}
              </Box>
            </Typography>
          </MotionBox>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

          <MotionBox
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.4,
            }}
          >
            <Typography
              sx={{
                mt: {
                  xs: 3,
                  md: 4,
                },

                maxWidth: 630,

                fontSize: {
                  xs: '1rem',
                  md: '1.12rem',
                },

                lineHeight: 1.75,

                color: {
                  xs: 'rgba(255,255,255,0.76)',
                  lg: 'text.secondary',
                },
              }}
            >
              {t('home.hero.description')}
            </Typography>
          </MotionBox>

          {/* =====================================================
              CTA
          ===================================================== */}

          <MotionBox
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.52,
            }}
          >
            <Stack
              direction={{
                xs: 'column',
                sm: 'row',
              }}
              spacing={1.5}
              sx={{
                mt: {
                  xs: 4,
                  md: 5,
                },

                alignItems: {
                  xs: 'stretch',
                  sm: 'center',
                },
              }}
            >
              <Button
                component={Link}
                to={routes.quote}
                variant="contained"
                size="large"
                endIcon={
                  <ArrowUpRight size={18} />
                }
                sx={{
                  px: 3.5,
                  minHeight: 54,
                }}
              >
                {t('common.getQuote')}
              </Button>

              <Button
                component={Link}
                to={routes.capabilities}
                variant="outlined"
                size="large"
                startIcon={
                  <FileText size={18} />
                }
                sx={{
                  px: 3.5,
                  minHeight: 54,

                  borderColor: {
                    xs: 'rgba(255,255,255,0.32)',
                    lg: 'divider',
                  },

                  color: {
                    xs: 'common.white',
                    lg: 'text.primary',
                  },

                  '&:hover': {
                    borderColor:
                      'primary.main',
                  },
                }}
              >
                {t(
                  'navigation.capabilities'
                )}
              </Button>
            </Stack>
          </MotionBox>

          {/* =====================================================
              INDUSTRY LABELS
          ===================================================== */}

          <MotionBox
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
          >
            <Stack
              direction="row"
              sx={{
                mt: {
                  xs: 6,
                  md: 7,
                },

                flexWrap: 'wrap',

                gap: {
                  xs: 2,
                  md: 3,
                },
              }}
            >
              {industryKeys.map(
                (industryKey) => (
                  <Typography
                    key={industryKey}
                    variant="caption"
                    sx={{
                      fontWeight: 600,

                      letterSpacing:
                        '0.08em',

                      textTransform:
                        'uppercase',

                      color: {
                        xs: 'rgba(255,255,255,0.62)',
                        lg: 'text.secondary',
                      },
                    }}
                  >
                    {t(
                      `home.hero.industries.${industryKey}`
                    )}
                  </Typography>
                )
              )}
            </Stack>
          </MotionBox>
        </Box>
      </Container>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <Box
        sx={{
          position: 'absolute',

          zIndex: 5,

          bottom: {
            xs: 24,
            md: 32,
          },

          right: {
            xs: 20,
            md: 40,
          },

          display: {
            xs: 'none',
            md: 'block',
          },
        }}
      >
        <Button
          onClick={scrollToNextSection}
          aria-label={t(
            'home.hero.scrollToNext'
          )}
          sx={{
            minWidth: 0,

            width: 48,
            height: 48,

            borderRadius: '50%',

            color: 'common.white',

            border: '1px solid',
            borderColor:
              'rgba(255,255,255,0.3)',

            bgcolor:
              'rgba(0,0,0,0.15)',

            backdropFilter:
              'blur(10px)',

            '&:hover': {
              bgcolor: 'primary.main',
              borderColor:
                'primary.main',
            },
          }}
        >
          <ArrowDown size={19} />
        </Button>
      </Box>
    </Box>
  );
}