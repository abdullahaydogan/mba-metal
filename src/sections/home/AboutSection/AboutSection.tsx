import {
  Box,
  Container,
  Stack,
  Typography,
} from '@mui/material';

import {
  ArrowUpRight,
  Factory,
  GitBranch,
  Sparkles,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import aboutImage from '../../../assets/images/about/About.jpg';

import { routes } from '../../../constants/routes';

const MotionBox = motion.create(Box);

const capabilities = [
  {
    icon: GitBranch,
    number: '01',
    titleKey:
      'home.about.capabilities.wire.title',
    descriptionKey:
      'home.about.capabilities.wire.description',
  },
  {
    icon: Sparkles,
    number: '02',
    titleKey:
      'home.about.capabilities.welding.title',
    descriptionKey:
      'home.about.capabilities.welding.description',
  },
  {
    icon: Factory,
    number: '03',
    titleKey:
      'home.about.capabilities.oem.title',
    descriptionKey:
      'home.about.capabilities.oem.description',
  },
] as const;

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
      {/* Decorative line */}

      <Box
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
            SECTION HEADER
        =================================================== */}

        <MotionBox
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Stack
            direction={{
              xs: 'column',
              md: 'row',
            }}
            spacing={2}
            sx={{
              alignItems: {
                xs: 'flex-start',
                md: 'center',
              },

              justifyContent:
                'space-between',

              mb: {
                xs: 6,
                md: 9,
              },
            }}
          >
            <Stack
              direction="row"
              spacing={1.5}
              sx={{
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  color: 'primary.main',

                  fontSize: '0.75rem',
                  fontWeight: 700,

                  letterSpacing:
                    '0.16em',
                }}
              >
                01
              </Typography>

              <Box
                sx={{
                  width: 36,
                  height: 1,

                  bgcolor: 'divider',
                }}
              />

              <Typography
                variant="overline"
                sx={{
                  color:
                    'text.secondary',

                  fontWeight: 600,

                  letterSpacing:
                    '0.15em',
                }}
              >
                MBA METAL
              </Typography>
            </Stack>

            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',

                letterSpacing:
                  '0.12em',

                textTransform:
                  'uppercase',
              }}
            >
              {t(
                'home.about.eyebrow'
              )}
            </Typography>
          </Stack>
        </MotionBox>

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

              letterSpacing:
                '-0.055em',

              color: 'text.primary',
            }}
          >
            {t(
              'home.about.titleLine1'
            )}

            <br />

            <Box
              component="span"
              sx={{
                color:
                  'text.secondary',
              }}
            >
              {t(
                'home.about.titleLine2'
              )}
            </Box>
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
          {/* IMAGE */}

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
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
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

                bgcolor:
                  'background.paper',

                '&::after': {
                  content: '""',

                  position:
                    'absolute',

                  inset: 0,

                  background: `
                    linear-gradient(
                      180deg,
                      rgba(0,0,0,0) 55%,
                      rgba(0,0,0,0.38) 100%
                    )
                  `,

                  pointerEvents:
                    'none',
                },
              }}
            >
              <MotionBox
                whileHover={{
                  scale: 1.025,
                }}
                transition={{
                  duration: 0.7,

                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                sx={{
                  width: '100%',
                  height: '100%',
                }}
              >
                <Box
                  component="img"
                  src={aboutImage}
                  alt={t(
                    'home.about.imageAlt'
                  )}
                  loading="lazy"
                  sx={{
                    width: '100%',
                    height: '100%',

                    objectFit:
                      'cover',

                    display: 'block',
                  }}
                />
              </MotionBox>

              {/* IMAGE LABEL */}

              <Box
                sx={{
                  position:
                    'absolute',

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
                    color:
                      'common.white',

                    fontWeight: 600,

                    fontSize: {
                      xs: '0.8rem',
                      md: '0.9rem',
                    },

                    letterSpacing:
                      '0.1em',

                    textTransform:
                      'uppercase',
                  }}
                >
                  {t(
                    'home.about.imageLabel'
                  )}
                </Typography>
              </Box>
            </Box>
          </MotionBox>

          {/* ===================================================
              RIGHT CONTENT
          =================================================== */}

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

              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >
            <Box
              sx={{
                pb: {
                  lg: 2,
                },
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 2,

                  bgcolor:
                    'primary.main',

                  mb: 3,
                }}
              />

              <Typography
                sx={{
                  fontSize: {
                    xs: '1.5rem',
                    md: '1.8rem',
                  },

                  fontWeight: 500,

                  lineHeight: 1.35,

                  letterSpacing:
                    '-0.025em',

                  color:
                    'text.primary',
                }}
              >
                {t(
                  'home.about.lead'
                )}
              </Typography>

              <Typography
                sx={{
                  mt: 3,

                  fontSize: {
                    xs: '0.98rem',
                    md: '1.05rem',
                  },

                  lineHeight: 1.8,

                  color:
                    'text.secondary',
                }}
              >
                {t(
                  'home.about.description'
                )}
              </Typography>

              {/* LINK */}

              <Box
                component={Link}
                to={routes.about}
                sx={{
                  mt: 4,

                  display:
                    'inline-flex',

                  alignItems:
                    'center',

                  gap: 1,

                  color:
                    'text.primary',

                  textDecoration:
                    'none',

                  fontSize:
                    '0.9rem',

                  fontWeight: 600,

                  '& svg': {
                    transition:
                      'transform 200ms ease',
                  },

                  '&:hover': {
                    color:
                      'primary.main',

                    '& svg': {
                      transform:
                        'translate(3px, -3px)',
                    },
                  },
                }}
              >
                {t(
                  'home.about.discover'
                )}

                <ArrowUpRight
                  size={17}
                />
              </Box>
            </Box>
          </MotionBox>
        </Box>

        {/* ===================================================
            CAPABILITY STRIP
        =================================================== */}

        <Box
          sx={{
            mt: {
              xs: 7,
              md: 10,
            },

            borderTop:
              '1px solid',

            borderBottom:
              '1px solid',

            borderColor: 'divider',

            display: 'grid',

            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {capabilities.map(
            (item, index) => {
              const Icon =
                item.icon;

              return (
                <MotionBox
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  transition={{
                    duration: 0.6,

                    delay:
                      index * 0.1,
                  }}
                  sx={{
                    position:
                      'relative',

                    py: {
                      xs: 3.5,
                      md: 4,
                    },

                    px: {
                      xs: 0,
                      md: 4,
                    },

                    borderBottom: {
                      xs:
                        index !==
                        capabilities.length -
                          1
                          ? '1px solid'
                          : 'none',

                      md: 'none',
                    },

                    borderRight: {
                      xs: 'none',

                      md:
                        index !==
                        capabilities.length -
                          1
                          ? '1px solid'
                          : 'none',
                    },

                    borderColor:
                      'divider',

                    '&:first-of-type':
                      {
                        pl: {
                          md: 0,
                        },
                      },
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      alignItems:
                        'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,

                        display:
                          'grid',

                        placeItems:
                          'center',

                        border:
                          '1px solid',

                        borderColor:
                          'divider',

                        color:
                          'primary.main',
                      }}
                    >
                      <Icon
                        size={20}
                        strokeWidth={
                          1.6
                        }
                      />
                    </Box>

                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color:
                            'primary.main',

                          fontWeight:
                            700,

                          letterSpacing:
                            '0.12em',
                        }}
                      >
                        {item.number}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 0.3,

                          fontWeight:
                            600,

                          color:
                            'text.primary',
                        }}
                      >
                        {t(
                          item.titleKey
                        )}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        {t(
                          item.descriptionKey
                        )}
                      </Typography>
                    </Box>
                  </Stack>
                </MotionBox>
              );
            }
          )}
        </Box>
      </Container>
    </Box>
  );
}