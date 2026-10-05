import {
    Box,
    Typography,
} from '@mui/material';

import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from 'motion/react';

import {
    useRef,
} from 'react';

import {
    useTranslation,
} from 'react-i18next';

import {
    Container,
} from '../../../components/common/Container';

import type {
    IndustryDetail,
} from '../../../types/industry-detail.types';

interface IndustryOverviewSectionProps {
    industry: IndustryDetail;
}

export function IndustryOverviewSection({
    industry,
}: IndustryOverviewSectionProps) {
    const { t } = useTranslation();

    const reduceMotion =
        useReducedMotion();

    const sectionRef =
        useRef<HTMLElement | null>(null);

    const {
        scrollYProgress,
    } = useScroll({
        target: sectionRef,

        offset: [
            'start end',
            'end start',
        ],
    });

    const imageY =
        useTransform(
            scrollYProgress,
            [0, 1],
            ['-7%', '7%']
        );

    const imageScale =
        useTransform(
            scrollYProgress,
            [0, 1],
            [1.08, 1.02]
        );

    const baseKey =
        industry.translationKey;

    const technicalItems = [
        'technicalDrawing',
        'sample',
        'material',
        'tolerance',
        'quantity',
    ];

    return (
        <Box
            ref={sectionRef}
            component="section"
            sx={{
                position: 'relative',

                overflow: 'hidden',

                bgcolor: '#ffffff',

                py: {
                    xs: 9,
                    md: 13,
                    lg: 16,
                },
            }}
        >
            {/* =====================================================
                BACKGROUND DECORATION
            ===================================================== */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    inset: 0,

                    pointerEvents: 'none',

                    background: `
                        radial-gradient(
                            circle at 92% 25%,
                            rgba(39, 122, 84, 0.075),
                            transparent 28%
                        )
                    `,
                }}
            />

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    top: 0,
                    bottom: 0,

                    left: {
                        xs: 24,
                        md: '50%',
                    },

                    width: '1px',

                    bgcolor:
                        'rgba(15, 45, 32, 0.055)',

                    pointerEvents: 'none',
                }}
            />

            <Container>
                {/* =================================================
                    SECTION HEADER
                ================================================= */}

                <Box
                    sx={{
                        position: 'relative',

                        zIndex: 2,

                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',
                            lg: '0.9fr 1.1fr',
                        },

                        gap: {
                            xs: 3,
                            lg: 8,
                        },

                        alignItems: 'end',

                        mb: {
                            xs: 6,
                            md: 8,
                            lg: 10,
                        },
                    }}
                >
                    <Box>
                        <Box
                            component={motion.div}
                            initial={
                                reduceMotion
                                    ? false
                                    : {
                                          opacity: 0,
                                          x: -20,
                                      }
                            }
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.6,
                            }}
                            transition={{
                                duration: 0.6,
                            }}
                            sx={{
                                display: 'flex',

                                alignItems:
                                    'center',

                                gap: 1.5,

                                mb: 2.5,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 34,
                                    height: '1px',

                                    bgcolor:
                                        '#1d6b4b',
                                }}
                            />

                            <Typography
                                sx={{
                                    color:
                                        '#1d6b4b',

                                    fontSize:
                                        '0.66rem',

                                    fontWeight: 800,

                                    letterSpacing:
                                        '0.18em',

                                    textTransform:
                                        'uppercase',
                                }}
                            >
                                {t(
                                    `${baseKey}.overview.eyebrow`
                                )}
                            </Typography>
                        </Box>

                        <Typography
                            component={
                                motion.h2
                            }
                            initial={
                                reduceMotion
                                    ? false
                                    : {
                                          opacity: 0,
                                          y: 30,
                                      }
                            }
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.4,
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
                            sx={{
                                m: 0,

                                maxWidth: 680,

                                color: '#101713',

                                fontSize: {
                                    xs: '2.6rem',
                                    sm: '3.2rem',
                                    md: '4rem',
                                    lg: '4.4rem',
                                },

                                lineHeight: 1,

                                fontWeight: 500,

                                letterSpacing:
                                    '-0.055em',
                            }}
                        >
                            {t(
                                `${baseKey}.overview.title`
                            )}
                        </Typography>
                    </Box>

                    <Typography
                        component={motion.p}
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
                            duration: 0.7,

                            delay: 0.1,
                        }}
                        sx={{
                            m: 0,

                            maxWidth: 570,

                            justifySelf: {
                                lg: 'end',
                            },

                            color: '#626d67',

                            fontSize: {
                                xs: '0.96rem',
                                md: '1.03rem',
                            },

                            lineHeight: 1.85,
                        }}
                    >
                        {t(
                            `${baseKey}.overview.description`
                        )}
                    </Typography>
                </Box>

                {/* =================================================
                    MAIN EDITORIAL LAYOUT
                ================================================= */}

                <Box
                    sx={{
                        position: 'relative',

                        zIndex: 2,

                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',

                            lg:
                                'minmax(0,1.08fr) minmax(390px,0.92fr)',
                        },

                        minHeight: {
                            lg: 680,
                        },

                        borderTop:
                            '1px solid rgba(17,55,39,0.12)',

                        borderBottom:
                            '1px solid rgba(17,55,39,0.12)',
                    }}
                >
                    {/* =============================================
                        IMAGE
                    ============================================= */}

                    <Box
                        component={motion.div}
                        initial={
                            reduceMotion
                                ? false
                                : {
                                      opacity: 0,
                                      x: -35,
                                  }
                        }
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        transition={{
                            duration: 0.85,

                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                        sx={{
                            position: 'relative',

                            overflow: 'hidden',

                            minHeight: {
                                xs: 440,
                                sm: 540,
                                lg: 680,
                            },

                            bgcolor: '#10241a',
                        }}
                    >
                        <Box
                            component={
                                motion.img
                            }
                            src={
                                industry.overviewImage
                            }
                            alt={t(
                                `${baseKey}.overview.imageAlt`
                            )}
                            style={{
                                y:
                                    reduceMotion
                                        ? 0
                                        : imageY,

                                scale:
                                    reduceMotion
                                        ? 1.04
                                        : imageScale,
                            }}
                            sx={{
                                position:
                                    'absolute',

                                inset: '-10% 0',

                                width: '100%',
                                height: '120%',

                                objectFit:
                                    'cover',
                            }}
                        />

                        <Box
                            aria-hidden="true"
                            sx={{
                                position:
                                    'absolute',

                                inset: 0,

                                background: `
                                    linear-gradient(
                                        180deg,
                                        rgba(5,18,12,0.02) 25%,
                                        rgba(5,18,12,0.68) 100%
                                    )
                                `,
                            }}
                        />

                        {/* IMAGE LABEL */}

                        <Box
                            sx={{
                                position:
                                    'absolute',

                                left: {
                                    xs: 24,
                                    md: 34,
                                },

                                bottom: {
                                    xs: 24,
                                    md: 34,
                                },

                                maxWidth: 400,
                            }}
                        >
                            <Typography
                                sx={{
                                    color:
                                        '#6ac091',

                                    fontSize:
                                        '0.62rem',

                                    fontWeight: 800,

                                    letterSpacing:
                                        '0.17em',

                                    textTransform:
                                        'uppercase',
                                }}
                            >
                                MBA METAL /
                                PRODUCTION
                            </Typography>

                            <Typography
                                sx={{
                                    mt: 1.5,

                                    color:
                                        '#ffffff',

                                    fontSize: {
                                        xs: '1.4rem',
                                        md: '1.7rem',
                                    },

                                    lineHeight: 1.25,

                                    fontWeight: 500,

                                    letterSpacing:
                                        '-0.025em',
                                }}
                            >
                                {t(
                                    `${baseKey}.overview.imageCaption`
                                )}
                            </Typography>
                        </Box>

                        {/* TECHNICAL CORNER */}

                        <Box
                            aria-hidden="true"
                            sx={{
                                position:
                                    'absolute',

                                top: 24,
                                right: 24,

                                width: 54,
                                height: 54,

                                borderTop:
                                    '1px solid rgba(255,255,255,0.38)',

                                borderRight:
                                    '1px solid rgba(255,255,255,0.38)',
                            }}
                        />
                    </Box>

                    {/* =============================================
                        RIGHT CONTENT
                    ============================================= */}

                    <Box
                        sx={{
                            position: 'relative',

                            display: 'flex',

                            flexDirection:
                                'column',

                            justifyContent:
                                'space-between',

                            px: {
                                xs: 0,
                                lg: 6,
                                xl: 8,
                            },

                            py: {
                                xs: 6,
                                lg: 7,
                            },

                            borderLeft: {
                                xs: 'none',

                                lg:
                                    '1px solid rgba(17,55,39,0.12)',
                            },
                        }}
                    >
                        <Box>
                            <Typography
                                component={
                                    motion.p
                                }
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
                                    duration: 0.7,
                                }}
                                sx={{
                                    m: 0,

                                    maxWidth: 500,

                                    color:
                                        '#17201b',

                                    fontSize: {
                                        xs: '1.45rem',
                                        md: '1.7rem',
                                    },

                                    lineHeight: 1.45,

                                    fontWeight: 500,

                                    letterSpacing:
                                        '-0.025em',
                                }}
                            >
                                {t(
                                    `${baseKey}.overview.statement`
                                )}
                            </Typography>

                            <Box
                                sx={{
                                    width: 44,
                                    height: 2,

                                    mt: 4,
                                    mb: 5,

                                    bgcolor:
                                        '#2f8c65',
                                }}
                            />

                            <Typography
                                sx={{
                                    color:
                                        '#7a847f',

                                    fontSize:
                                        '0.62rem',

                                    fontWeight: 800,

                                    letterSpacing:
                                        '0.15em',

                                    textTransform:
                                        'uppercase',

                                    mb: 2.5,
                                }}
                            >
                                {t(
                                    `${baseKey}.overview.inputLabel`
                                )}
                            </Typography>

                            {/* TECHNICAL INPUTS */}

                            <Box>
                                {technicalItems.map(
                                    (
                                        item,
                                        index
                                    ) => (
                                        <Box
                                            key={
                                                item
                                            }
                                            component={
                                                motion.div
                                            }
                                            initial={
                                                reduceMotion
                                                    ? false
                                                    : {
                                                          opacity: 0,
                                                          x: 22,
                                                      }
                                            }
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.65,
                                            }}
                                            transition={{
                                                duration: 0.55,

                                                delay:
                                                    index *
                                                    0.07,
                                            }}
                                            sx={{
                                                display:
                                                    'flex',

                                                alignItems:
                                                    'center',

                                                justifyContent:
                                                    'space-between',

                                                gap: 3,

                                                py: 2.1,

                                                borderBottom:
                                                    '1px solid rgba(17,55,39,0.11)',

                                                '&:first-of-type':
                                                    {
                                                        borderTop:
                                                            '1px solid rgba(17,55,39,0.11)',
                                                    },

                                                transition:
                                                    'padding 220ms ease, background-color 220ms ease',

                                                '&:hover':
                                                    {
                                                        px: 1.5,

                                                        bgcolor:
                                                            'rgba(41,127,89,0.045)',
                                                    },
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color:
                                                        '#18231d',

                                                    fontSize: {
                                                        xs: '0.9rem',
                                                        md: '0.95rem',
                                                    },

                                                    fontWeight: 600,
                                                }}
                                            >
                                                {t(
                                                    `${baseKey}.overview.inputs.${item}`
                                                )}
                                            </Typography>

                                            <Box
                                                sx={{
                                                    display:
                                                        'flex',

                                                    alignItems:
                                                        'center',

                                                    gap: 1,
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 26,
                                                        height: '1px',

                                                        bgcolor:
                                                            'rgba(47,140,101,0.5)',
                                                    }}
                                                />

                                                <Box
                                                    sx={{
                                                        width: 5,
                                                        height: 5,

                                                        bgcolor:
                                                            '#2f8c65',
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    )
                                )}
                            </Box>
                        </Box>

                        {/* BOTTOM NOTE */}

                        <Box
                            component={motion.div}
                            initial={
                                reduceMotion
                                    ? false
                                    : {
                                          opacity: 0,
                                      }
                            }
                            whileInView={{
                                opacity: 1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.7,

                                delay: 0.25,
                            }}
                            sx={{
                                mt: 6,

                                pt: 3,

                                display: 'flex',

                                alignItems:
                                    'flex-start',

                                gap: 2,

                                borderTop:
                                    '1px solid rgba(17,55,39,0.11)',
                            }}
                        >
                            <Box
                                sx={{
                                    width: 8,
                                    height: 8,

                                    mt: '6px',

                                    flexShrink: 0,

                                    bgcolor:
                                        '#2f8c65',
                                }}
                            />

                            <Typography
                                sx={{
                                    maxWidth: 440,

                                    color:
                                        '#69736e',

                                    fontSize:
                                        '0.8rem',

                                    lineHeight: 1.7,
                                }}
                            >
                                {t(
                                    `${baseKey}.overview.note`
                                )}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default IndustryOverviewSection;