import {
  Box,
  Container,
  Typography,
} from '@mui/material';

import {
  ArrowUpRight,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import aboutImage from '../../../assets/images/about/About.jpg';

import { routes } from '../../../constants/routes';

const MotionBox = motion.create(Box);

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <Box
      id="about"
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',

        bgcolor: 'background.default',

        py: {
          xs: 10,
          md: 14,
          lg: 18,
        },
      }}
    >
      {/* ===================================================
          BACKGROUND DECORATIVE LINE
      =================================================== */}

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',

          top: 0,
          left: '50%',

          width: 1,
          height: 100,

          bgcolor: 'divider',

          display: {
            xs: 'none',
            lg: 'block',
          },
        }}
      />

      <Container maxWidth="xl">
        {/* ===================================================
            MAIN TITLE
        =================================================== */}

        <MotionBox
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Typography
            component="h2"
            sx={{
              maxWidth: 1100,

              fontSize: {
                xs: 'clamp(2.8rem, 10vw, 4.5rem)',
                md: 'clamp(4rem, 7vw, 6.5rem)',
              },

              fontWeight: 600,

              lineHeight: 0.98,

              letterSpacing: '-0.055em',

              color: 'text.primary',
            }}
          >
            {t('home.about.titleLine1')}

            <br />

            {t('home.about.titleLine2')}
          </Typography>
        </MotionBox>

        {/* ===================================================
            IMAGE + CONTENT
        =================================================== */}

        <Box
          sx={{
            mt: {
              xs: 6,
              md: 9,
            },

            display: 'grid',

            gridTemplateColumns: {
              xs: '1fr',
              lg: 'minmax(0, 1.35fr) minmax(360px, 0.65fr)',
            },

            gap: {
              xs: 5,
              lg: 8,
            },

            alignItems: 'end',
          }}
        >
          {/* =================================================
              IMAGE
          ================================================= */}

          <MotionBox
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            sx={{
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'relative',

                overflow: 'hidden',

                height: {
                  xs: 380,
                  sm: 500,
                  md: 620,
                  lg: 680,
                },

                borderRadius: {
                  xs: 2,
                  md: 3,
                },

                bgcolor: 'background.paper',

                '&::after': {
                  content: '""',

                  position: 'absolute',

                  inset: 0,

                  background: `
                    linear-gradient(
                      180deg,
                      rgba(0,0,0,0) 55%,
                      rgba(0,0,0,0.38) 100%
                    )
                  `,

                  pointerEvents: 'none',
                },
              }}
            >
              <MotionBox
                whileHover={{
                  scale: 1.025,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                sx={{
                  width: '100%',
                  height: '100%',
                }}
              >
                <Box
                  component="img"
                  src={aboutImage}
                  alt={t('home.about.imageAlt')}
                  loading="lazy"
                  sx={{
                    width: '100%',
                    height: '100%',

                    objectFit: 'cover',

                    display: 'block',
                  }}
                />
              </MotionBox>

              {/* =============================================
                  IMAGE LABEL
              ============================================= */}

              <Box
                sx={{
                  position: 'absolute',

                  zIndex: 2,

                  left: {
                    xs: 20,
                    md: 30,
                  },

                  bottom: {
                    xs: 20,
                    md: 28,
                  },
                }}
              >
                <Typography
                  sx={{
                    color: 'common.white',

                    fontWeight: 600,

                    fontSize: {
                      xs: '0.8rem',
                      md: '0.9rem',
                    },

                    letterSpacing: '0.1em',

                    textTransform: 'uppercase',
                  }}
                >
                  {t('home.about.imageLabel')}
                </Typography>
              </Box>
            </Box>
          </MotionBox>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <MotionBox
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.12,

              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Box
              sx={{
                pb: {
                  lg: 2,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: '1.5rem',
                    md: '1.8rem',
                  },

                  fontWeight: 500,

                  lineHeight: 1.35,

                  letterSpacing: '-0.025em',

                  color: 'text.primary',
                }}
              >
                {t('home.about.lead')}
              </Typography>

              <Typography
                sx={{
                  mt: 3,

                  fontSize: {
                    xs: '0.98rem',
                    md: '1.05rem',
                  },

                  lineHeight: 1.8,

                  color: 'text.secondary',
                }}
              >
                {t('home.about.description')}
              </Typography>

              {/* =============================================
                  ABOUT LINK
              ============================================= */}

              <Box
                component={Link}
                to={routes.about}
                sx={{
                  mt: 4,

                  display: 'inline-flex',

                  alignItems: 'center',

                  gap: 1,

                  color: 'text.primary',

                  textDecoration: 'none',

                  fontSize: '0.9rem',

                  fontWeight: 600,

                  transition: 'color 200ms ease',

                  '& svg': {
                    transition:
                      'transform 200ms ease',
                  },

                  '&:hover': {
                    color: 'primary.main',

                    '& svg': {
                      transform:
                        'translate(3px, -3px)',
                    },
                  },
                }}
              >
                {t('home.about.discover')}

                <ArrowUpRight size={17} />
              </Box>
            </Box>
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
}