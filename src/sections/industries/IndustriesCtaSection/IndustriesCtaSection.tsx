import {
    ArrowRight,
    MoveUpRight,
} from 'lucide-react';

import {
    Box,
    Button,
    Typography,
} from '@mui/material';

import {
    motion,
    useReducedMotion,
} from 'motion/react';

import {
    Link,
} from 'react-router-dom';

import {
    useTranslation,
} from 'react-i18next';

import {
    Container,
} from '../../../components/common/Container';

import {
    routes,
} from '../../../constants/routes';

/* =========================================================
   SECTION
========================================================= */

export function IndustriesCtaSection() {
    const { t } = useTranslation();

    const reduceMotion =
        useReducedMotion();

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',

                overflow: 'hidden',

                bgcolor: '#0b2a1d',

                color: '#ffffff',

                borderTop:
                    '1px solid rgba(255,255,255,0.08)',
            }}
        >
            {/* =================================================
                BACKGROUND GRID
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    inset: 0,

                    opacity: 0.45,

                    backgroundImage: `
                        linear-gradient(
                            rgba(255,255,255,0.035) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(255,255,255,0.035) 1px,
                            transparent 1px
                        )
                    `,

                    backgroundSize:
                        '72px 72px',

                    maskImage:
                        'linear-gradient(to bottom, black, transparent 92%)',

                    pointerEvents: 'none',
                }}
            />

            {/* =================================================
                LEFT GLOW
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    width: {
                        xs: 500,
                        md: 850,
                    },

                    height: {
                        xs: 500,
                        md: 850,
                    },

                    left: {
                        xs: -360,
                        md: -520,
                    },

                    bottom: -520,

                    borderRadius: '50%',

                    background:
                        'radial-gradient(circle, rgba(83,174,128,0.24) 0%, rgba(83,174,128,0.08) 42%, transparent 70%)',

                    pointerEvents: 'none',
                }}
            />

            {/* =================================================
                RIGHT GLOW
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    width: 600,
                    height: 600,

                    right: -350,
                    top: -300,

                    borderRadius: '50%',

                    background:
                        'radial-gradient(circle, rgba(95,186,141,0.14), transparent 68%)',

                    pointerEvents: 'none',
                }}
            />

            {/* =================================================
                LARGE BACKGROUND TEXT
            ================================================= */}

            <Typography
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    right: {
                        md: -20,
                        lg: -40,
                    },

                    bottom: {
                        md: -25,
                        lg: -45,
                    },

                    display: {
                        xs: 'none',
                        md: 'block',
                    },

                    color:
                        'rgba(255,255,255,0.025)',

                    fontSize: {
                        md: '9rem',
                        lg: '12rem',
                        xl: '15rem',
                    },

                    fontWeight: 800,

                    lineHeight: 0.75,

                    letterSpacing:
                        '-0.075em',

                    whiteSpace: 'nowrap',

                    userSelect: 'none',

                    pointerEvents: 'none',
                }}
            >
                MBA METAL
            </Typography>

            <Container>
                <Box
                    sx={{
                        position: 'relative',

                        zIndex: 2,

                        py: {
                            xs: 10,
                            sm: 12,
                            md: 15,
                            lg: 17,
                        },
                    }}
                >
                    {/* =================================================
                        TOP TECHNICAL LINE
                    ================================================= */}

                    <Box
                        component={motion.div}
                        initial={
                            reduceMotion
                                ? false
                                : {
                                      opacity: 0,
                                      y: 20,
                                  }
                        }
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
                        }}
                        sx={{
                            display: 'flex',

                            alignItems: 'center',

                            gap: 1.5,

                            mb: {
                                xs: 4,
                                md: 5,
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: 8,
                                height: 8,

                                bgcolor: '#64b98c',

                                boxShadow:
                                    '0 0 20px rgba(100,185,140,0.55)',
                            }}
                        />

                        <Typography
                            sx={{
                                color:
                                    'rgba(255,255,255,0.62)',

                                fontSize:
                                    '0.66rem',

                                fontWeight: 800,

                                letterSpacing:
                                    '0.17em',

                                textTransform:
                                    'uppercase',
                            }}
                        >
                            {t(
                                'industriesPage.cta.eyebrow'
                            )}
                        </Typography>

                        <Box
                            sx={{
                                width: {
                                    xs: 45,
                                    sm: 80,
                                },

                                height: '1px',

                                background:
                                    'linear-gradient(90deg, rgba(100,185,140,0.8), transparent)',
                            }}
                        />
                    </Box>

                    {/* =================================================
                        MAIN CONTENT
                    ================================================= */}

                    <Box
                        sx={{
                            display: 'grid',

                            gridTemplateColumns: {
                                xs: '1fr',

                                lg:
                                    'minmax(0,1.35fr) minmax(300px,0.65fr)',
                            },

                            columnGap: {
                                lg: 9,
                                xl: 14,
                            },

                            rowGap: {
                                xs: 6,
                                lg: 0,
                            },

                            alignItems: 'end',
                        }}
                    >
                        {/* =============================================
                            LEFT
                        ============================================= */}

                        <Box
                            component={motion.div}
                            initial={
                                reduceMotion
                                    ? false
                                    : {
                                          opacity: 0,
                                          y: 35,
                                      }
                            }
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.35,
                            }}
                            transition={{
                                duration: 0.75,

                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1,
                                ],
                            }}
                        >
                            <Typography
                                component="h2"
                                sx={{
                                    maxWidth: 850,

                                    color: '#ffffff',

                                    fontSize: {
                                        xs: '2.6rem',
                                        sm: '3.4rem',
                                        md: '4.4rem',
                                        lg: '5rem',
                                    },

                                    lineHeight: 0.98,

                                    fontWeight: 500,

                                    letterSpacing:
                                        '-0.055em',
                                }}
                            >
                                {t(
                                    'industriesPage.cta.title'
                                )}
                            </Typography>

                            <Typography
                                sx={{
                                    mt: {
                                        xs: 3,
                                        md: 4,
                                    },

                                    maxWidth: 650,

                                    color:
                                        'rgba(255,255,255,0.62)',

                                    fontSize: {
                                        xs: '0.96rem',
                                        md: '1.02rem',
                                    },

                                    lineHeight: 1.8,
                                }}
                            >
                                {t(
                                    'industriesPage.cta.description'
                                )}
                            </Typography>
                        </Box>

                        {/* =============================================
                            RIGHT / TECHNICAL SIGNATURE
                        ============================================= */}

                        <Box
                            component={motion.div}
                            initial={
                                reduceMotion
                                    ? false
                                    : {
                                          opacity: 0,
                                          x: 30,
                                      }
                            }
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.4,
                            }}
                            transition={{
                                duration: 0.75,

                                delay: 0.1,

                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1,
                                ],
                            }}
                            sx={{
                                position: 'relative',

                                pl: {
                                    xs: 2.5,
                                    md: 3,
                                },

                                py: 1,

                                borderLeft:
                                    '1px solid rgba(100,185,140,0.38)',

                                '&::before': {
                                    content: '""',

                                    position:
                                        'absolute',

                                    left: -3,
                                    top: 0,

                                    width: 5,
                                    height: 5,

                                    bgcolor:
                                        '#64b98c',
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    color:
                                        'rgba(255,255,255,0.38)',

                                    fontSize:
                                        '0.61rem',

                                    fontWeight: 800,

                                    letterSpacing:
                                        '0.16em',

                                    textTransform:
                                        'uppercase',
                                }}
                            >
                                ENGINEERING /
                                PRODUCTION
                            </Typography>

                            <Typography
                                sx={{
                                    mt: 1.2,

                                    maxWidth: 300,

                                    color:
                                        'rgba(255,255,255,0.72)',

                                    fontSize:
                                        '0.86rem',

                                    lineHeight: 1.65,
                                }}
                            >
                                {t(
                                    'industriesPage.cta.note'
                                )}
                            </Typography>
                        </Box>
                    </Box>

                    {/* =================================================
                        DIVIDER
                    ================================================= */}

                    <Box
                        sx={{
                            my: {
                                xs: 6,
                                md: 7,
                            },

                            height: '1px',

                            background:
                                'linear-gradient(90deg, rgba(255,255,255,0.16), rgba(255,255,255,0.04), transparent)',
                        }}
                    />

                    {/* =================================================
                        ACTIONS
                    ================================================= */}

                    <Box
                        component={motion.div}
                        initial={
                            reduceMotion
                                ? false
                                : {
                                      opacity: 0,
                                      y: 25,
                                  }
                        }
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.5,
                        }}
                        transition={{
                            duration: 0.65,

                            delay: 0.15,
                        }}
                        sx={{
                            display: 'flex',

                            flexDirection: {
                                xs: 'column',
                                sm: 'row',
                            },

                            alignItems: {
                                xs: 'stretch',
                                sm: 'center',
                            },

                            gap: {
                                xs: 2,
                                sm: 2.5,
                            },
                        }}
                    >
                        {/* PRIMARY */}

                        <Button
                            component={Link}
                            to={routes.contact}
                            endIcon={
                                <MoveUpRight
                                    size={17}
                                    strokeWidth={
                                        1.7
                                    }
                                />
                            }
                            sx={{
                                minHeight: 54,

                                px: 3.4,

                                alignSelf: {
                                    sm: 'flex-start',
                                },

                                bgcolor: '#ffffff',

                                color: '#0b2a1d',

                                borderRadius: 0,

                                fontSize:
                                    '0.72rem',

                                fontWeight: 800,

                                letterSpacing:
                                    '0.08em',

                                textTransform:
                                    'uppercase',

                                boxShadow: 'none',

                                transition:
                                    'transform 250ms ease, background-color 250ms ease',

                                '&:hover': {
                                    bgcolor:
                                        '#edf5f0',

                                    transform:
                                        'translateY(-2px)',

                                    boxShadow:
                                        'none',
                                },
                            }}
                        >
                            {t(
                                'industriesPage.cta.primaryAction'
                            )}
                        </Button>

                        {/* SECONDARY */}

                        <Button
                            component={Link}
                            to={
                                routes.capabilities
                            }
                            endIcon={
                                <ArrowRight
                                    size={17}
                                    strokeWidth={
                                        1.6
                                    }
                                />
                            }
                            sx={{
                                minHeight: 54,

                                px: 3.2,

                                alignSelf: {
                                    sm: 'flex-start',
                                },

                                color: '#ffffff',

                                border:
                                    '1px solid rgba(255,255,255,0.18)',

                                borderRadius: 0,

                                fontSize:
                                    '0.72rem',

                                fontWeight: 800,

                                letterSpacing:
                                    '0.08em',

                                textTransform:
                                    'uppercase',

                                transition:
                                    'border-color 250ms ease, background-color 250ms ease, transform 250ms ease',

                                '&:hover': {
                                    borderColor:
                                        'rgba(100,185,140,0.65)',

                                    bgcolor:
                                        'rgba(100,185,140,0.07)',

                                    transform:
                                        'translateY(-2px)',
                                },
                            }}
                        >
                            {t(
                                'industriesPage.cta.secondaryAction'
                            )}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default IndustriesCtaSection;