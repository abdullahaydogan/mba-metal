import {
    ArrowDownRight,
    Check,
} from 'lucide-react';

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

/* =========================================================
   TYPES
========================================================= */

interface IndustryDetailHeroSectionProps {
    industry: IndustryDetail;
}

/* =========================================================
   CONSTANTS
========================================================= */

const capabilities = [
    'wireForm',
    'metalForm',
    'welding',
    'repeatProduction',
] as const;

/* =========================================================
   SECTION
========================================================= */

export function IndustryDetailHeroSection({
    industry,
}: IndustryDetailHeroSectionProps) {
    const {
        t,
    } = useTranslation();

    const sectionRef =
        useRef<HTMLElement | null>(
            null
        );

    const reduceMotion =
        useReducedMotion();

    const {
        scrollYProgress,
    } = useScroll({
        target: sectionRef,

        offset: [
            'start start',
            'end start',
        ],
    });

    /* =====================================================
       PARALLAX
    ===================================================== */

    const imageY =
        useTransform(
            scrollYProgress,
            [0, 1],
            ['0%', '14%']
        );

    const imageScale =
        useTransform(
            scrollYProgress,
            [0, 1],
            [1.04, 1.12]
        );

    const contentY =
        useTransform(
            scrollYProgress,
            [0, 1],
            ['0%', '5%']
        );

    const baseKey =
        industry.translationKey;

    return (
        <Box
            ref={sectionRef}
            component="section"
            sx={{
                position:
                    'relative',

                overflow:
                    'hidden',

                pt: {
                    xs: 15,
                    md: 18,
                    lg: 20,
                },

                pb: {
                    xs: 9,
                    md: 12,
                    lg: 14,
                },

                bgcolor:
                    '#f4f7f5',
            }}
        >
            {/* =================================================
                BACKGROUND GRID
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position:
                        'absolute',

                    inset: 0,

                    pointerEvents:
                        'none',

                    opacity: 0.55,

                    backgroundImage: `
                        linear-gradient(
                            rgba(18,54,40,0.045) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(18,54,40,0.045) 1px,
                            transparent 1px
                        )
                    `,

                    backgroundSize:
                        '72px 72px',

                    maskImage:
                        'linear-gradient(to bottom, black 0%, black 62%, transparent 100%)',
                }}
            />

            {/* =================================================
                AMBIENT LIGHT
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position:
                        'absolute',

                    width: 760,
                    height: 760,

                    right: -330,
                    top: -280,

                    borderRadius:
                        '50%',

                    background:
                        'radial-gradient(circle, rgba(44,132,91,0.13), transparent 68%)',

                    pointerEvents:
                        'none',
                }}
            />

            <Box
                aria-hidden="true"
                sx={{
                    position:
                        'absolute',

                    width: 620,
                    height: 620,

                    left: -420,
                    bottom: -430,

                    borderRadius:
                        '50%',

                    background:
                        'radial-gradient(circle, rgba(55,143,101,0.07), transparent 70%)',

                    pointerEvents:
                        'none',
                }}
            />

            {/* =================================================
                LARGE BACKGROUND WORD
            ================================================= */}

            <Typography
                aria-hidden="true"
                sx={{
                    position:
                        'absolute',

                    left: {
                        md: -15,
                        lg: -25,
                    },

                    bottom: {
                        md: 40,
                        lg: 15,
                    },

                    display: {
                        xs: 'none',
                        md: 'block',
                    },

                    maxWidth:
                        '60vw',

                    overflow:
                        'hidden',

                    color:
                        'rgba(24,91,62,0.026)',

                    fontSize: {
                        md: '8rem',
                        lg: '11rem',
                        xl: '13rem',
                    },

                    lineHeight:
                        0.8,

                    fontWeight:
                        800,

                    letterSpacing:
                        '-0.075em',

                    textTransform:
                        'uppercase',

                    whiteSpace:
                        'nowrap',

                    userSelect:
                        'none',

                    pointerEvents:
                        'none',
                }}
            >
                {t(
                    `${baseKey}.name`
                )}
            </Typography>

            <Container>
                <Box
                    sx={{
                        position:
                            'relative',

                        zIndex: 2,

                        display:
                            'grid',

                        gridTemplateColumns: {
                            xs: '1fr',

                            lg:
                                'minmax(0,0.9fr) minmax(500px,1.1fr)',
                        },

                        gap: {
                            xs: 7,
                            md: 8,
                            lg: 9,
                        },

                        alignItems:
                            'center',
                    }}
                >
                    {/* =================================================
                        LEFT
                    ================================================= */}

                    <Box
                        component={
                            motion.div
                        }
                        initial={
                            reduceMotion
                                ? false
                                : {
                                      opacity: 0,
                                      y: 32,
                                  }
                        }
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,

                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                        style={{
                            y:
                                reduceMotion
                                    ? 0
                                    : contentY,
                        }}
                    >
                        {/* EYEBROW */}

                        <Box
                            sx={{
                                display:
                                    'flex',

                                alignItems:
                                    'center',

                                gap: 1.5,

                                mb: 3,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 34,

                                    height:
                                        '1px',

                                    bgcolor:
                                        '#1d6b4b',
                                }}
                            />

                            <Typography
                                sx={{
                                    color:
                                        '#1d6b4b',

                                    fontSize:
                                        '0.68rem',

                                    fontWeight:
                                        800,

                                    letterSpacing:
                                        '0.18em',

                                    textTransform:
                                        'uppercase',
                                }}
                            >
                                {t(
                                    `${baseKey}.hero.eyebrow`
                                )}
                            </Typography>
                        </Box>

                        {/* TITLE */}

                        <Typography
                            component="h1"
                            sx={{
                                maxWidth:
                                    690,

                                color:
                                    '#101713',

                                fontSize: {
                                    xs: '3rem',
                                    sm: '3.8rem',
                                    md: '4.6rem',
                                    lg: '4.95rem',
                                },

                                lineHeight:
                                    0.97,

                                fontWeight:
                                    500,

                                letterSpacing:
                                    '-0.057em',
                            }}
                        >
                            {t(
                                `${baseKey}.hero.title`
                            )}
                        </Typography>

                        {/* DESCRIPTION */}

                        <Typography
                            sx={{
                                mt: {
                                    xs: 3,
                                    md: 4,
                                },

                                maxWidth:
                                    575,

                                color:
                                    '#5e6862',

                                fontSize: {
                                    xs: '0.98rem',
                                    md: '1.04rem',
                                },

                                lineHeight:
                                    1.82,
                            }}
                        >
                            {t(
                                `${baseKey}.hero.description`
                            )}
                        </Typography>

                        {/* =================================================
                            CAPABILITY SYSTEM
                        ================================================= */}

                        <Box
                            sx={{
                                mt: {
                                    xs: 5,
                                    md: 6,
                                },

                                maxWidth:
                                    590,

                                borderTop:
                                    '1px solid rgba(24,92,62,0.14)',

                                borderBottom:
                                    '1px solid rgba(24,92,62,0.14)',
                            }}
                        >
                            {capabilities.map(
                                (
                                    capability,
                                    index
                                ) => (
                                    <Box
                                        key={
                                            capability
                                        }
                                        component={
                                            motion.div
                                        }
                                        initial={
                                            reduceMotion
                                                ? false
                                                : {
                                                      opacity: 0,
                                                      x: -18,
                                                  }
                                        }
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        transition={{
                                            duration:
                                                0.55,

                                            delay:
                                                0.25 +
                                                index *
                                                    0.07,
                                        }}
                                        sx={{
                                            display:
                                                'grid',

                                            gridTemplateColumns:
                                                '32px minmax(0,1fr) 22px',

                                            alignItems:
                                                'center',

                                            gap: {
                                                xs: 1.5,
                                                md: 2,
                                            },

                                            minHeight: {
                                                xs: 54,
                                                md: 58,
                                            },

                                            borderBottom:
                                                index <
                                                capabilities.length -
                                                    1
                                                    ? '1px solid rgba(24,92,62,0.09)'
                                                    : 'none',

                                            transition:
                                                'padding 300ms ease, background-color 300ms ease',

                                            '& .capability-check': {
                                                transition:
                                                    'all 300ms ease',
                                            },

                                            '& .capability-arrow': {
                                                opacity:
                                                    0.25,

                                                transform:
                                                    'translate(-4px, 4px)',

                                                transition:
                                                    'all 300ms ease',
                                            },

                                            '&:hover': {
                                                px: 1.5,

                                                bgcolor:
                                                    'rgba(35,115,79,0.035)',
                                            },

                                            '&:hover .capability-check': {
                                                bgcolor:
                                                    '#216e4d',

                                                color:
                                                    '#ffffff',

                                                borderColor:
                                                    '#216e4d',
                                            },

                                            '&:hover .capability-arrow': {
                                                opacity:
                                                    1,

                                                transform:
                                                    'translate(0,0)',

                                                color:
                                                    '#216e4d',
                                            },
                                        }}
                                    >
                                        <Box
                                            className="capability-check"
                                            sx={{
                                                width: 25,
                                                height: 25,

                                                display:
                                                    'grid',

                                                placeItems:
                                                    'center',

                                                border:
                                                    '1px solid rgba(33,110,77,0.22)',

                                                borderRadius:
                                                    '50%',

                                                color:
                                                    '#216e4d',

                                                bgcolor:
                                                    'rgba(255,255,255,0.62)',
                                            }}
                                        >
                                            <Check
                                                size={
                                                    13
                                                }
                                                strokeWidth={
                                                    1.8
                                                }
                                            />
                                        </Box>

                                        <Typography
                                            sx={{
                                                color:
                                                    '#2e3d35',

                                                fontSize: {
                                                    xs:
                                                        '0.72rem',
                                                    md:
                                                        '0.75rem',
                                                },

                                                fontWeight:
                                                    800,

                                                letterSpacing:
                                                    '0.115em',

                                                textTransform:
                                                    'uppercase',
                                            }}
                                        >
                                            {t(
                                                `${baseKey}.hero.capabilities.${capability}`
                                            )}
                                        </Typography>

                                        <Box
                                            className="capability-arrow"
                                            sx={{
                                                display:
                                                    'grid',

                                                placeItems:
                                                    'center',
                                            }}
                                        >
                                            <ArrowDownRight
                                                size={
                                                    15
                                                }
                                                strokeWidth={
                                                    1.5
                                                }
                                            />
                                        </Box>
                                    </Box>
                                )
                            )}
                        </Box>
                    </Box>

                    {/* =================================================
                        RIGHT / INDUSTRIAL SHOWCASE
                    ================================================= */}

                    <Box
                        component={
                            motion.div
                        }
                        initial={
                            reduceMotion
                                ? false
                                : {
                                      opacity: 0,
                                      x: 45,
                                  }
                        }
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.9,

                            delay: 0.1,

                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                        sx={{
                            position:
                                'relative',

                            pl: {
                                lg: 2,
                            },

                            pb: {
                                xs: 3,
                                md: 4,
                            },
                        }}
                    >
                        {/* OFFSET FRAME */}

                        <Box
                            aria-hidden="true"
                            sx={{
                                position:
                                    'absolute',

                                top: {
                                    xs: 18,
                                    md: 22,
                                },

                                right: {
                                    xs: -14,
                                    md: -20,
                                },

                                bottom: {
                                    xs: 4,
                                    md: 8,
                                },

                                left: {
                                    xs: 14,
                                    md: 38,
                                },

                                border:
                                    '1px solid rgba(31,105,73,0.17)',

                                pointerEvents:
                                    'none',
                            }}
                        />

                        {/* IMAGE FRAME */}

                        <Box
                            sx={{
                                position:
                                    'relative',

                                minHeight: {
                                    xs: 450,
                                    sm: 510,
                                    md: 580,
                                    lg: 650,
                                },

                                overflow:
                                    'hidden',

                                bgcolor:
                                    '#10261c',

                                boxShadow:
                                    '0 38px 90px rgba(18,54,40,0.13)',

                                isolation:
                                    'isolate',

                                '& .hero-production-image': {
                                    filter:
                                        'saturate(0.92) contrast(1.02)',

                                    transition:
                                        'filter 700ms ease',
                                },

                                '&:hover .hero-production-image': {
                                    filter:
                                        'saturate(1.05) contrast(1.04)',
                                },
                            }}
                        >
                            {/* IMAGE */}

                            <Box
                                className="hero-production-image"
                                component={
                                    motion.img
                                }
                                src={
                                    industry.heroImage
                                }
                                alt={t(
                                    `${baseKey}.hero.imageAlt`
                                )}
                                style={{
                                    y:
                                        reduceMotion
                                            ? 0
                                            : imageY,

                                    scale:
                                        reduceMotion
                                            ? 1
                                            : imageScale,
                                }}
                                sx={{
                                    position:
                                        'absolute',

                                    inset:
                                        '-8% 0',

                                    width:
                                        '100%',

                                    height:
                                        '116%',

                                    objectFit:
                                        'cover',

                                    zIndex:
                                        -4,
                                }}
                            />

                            {/* OVERLAY */}

                            <Box
                                aria-hidden="true"
                                sx={{
                                    position:
                                        'absolute',

                                    inset: 0,

                                    zIndex:
                                        -3,

                                    background: `
                                        linear-gradient(
                                            180deg,
                                            rgba(5,17,11,0.04) 15%,
                                            rgba(5,17,11,0.18) 46%,
                                            rgba(5,17,11,0.86) 100%
                                        ),
                                        linear-gradient(
                                            90deg,
                                            rgba(5,17,11,0.25),
                                            transparent 48%
                                        )
                                    `,
                                }}
                            />

                            {/* SUBTLE GRID ON IMAGE */}

                            <Box
                                aria-hidden="true"
                                sx={{
                                    position:
                                        'absolute',

                                    inset: 0,

                                    zIndex:
                                        -2,

                                    opacity:
                                        0.18,

                                    backgroundImage: `
                                        linear-gradient(
                                            rgba(255,255,255,0.11) 1px,
                                            transparent 1px
                                        ),
                                        linear-gradient(
                                            90deg,
                                            rgba(255,255,255,0.11) 1px,
                                            transparent 1px
                                        )
                                    `,

                                    backgroundSize:
                                        '86px 86px',

                                    maskImage:
                                        'linear-gradient(to bottom, black, transparent 72%)',

                                    pointerEvents:
                                        'none',
                                }}
                            />

                            {/* =========================================
                                TOP INFORMATION BAR
                            ========================================= */}

                            <Box
                                sx={{
                                    position:
                                        'absolute',

                                    top: {
                                        xs: 22,
                                        md: 28,
                                    },

                                    left: {
                                        xs: 22,
                                        md: 30,
                                    },

                                    right: {
                                        xs: 22,
                                        md: 30,
                                    },

                                    display:
                                        'flex',

                                    alignItems:
                                        'center',

                                    justifyContent:
                                        'space-between',

                                    gap: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        display:
                                            'flex',

                                        alignItems:
                                            'center',

                                        gap: 1.3,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position:
                                                'relative',

                                            width: 8,
                                            height: 8,

                                            bgcolor:
                                                '#65c493',

                                            '&::after': {
                                                content:
                                                    '""',

                                                position:
                                                    'absolute',

                                                inset:
                                                    -5,

                                                border:
                                                    '1px solid rgba(101,196,147,0.30)',
                                            },
                                        }}
                                    />

                                    <Typography
                                        sx={{
                                            color:
                                                'rgba(255,255,255,0.86)',

                                            fontSize:
                                                '0.6rem',

                                            fontWeight:
                                                800,

                                            letterSpacing:
                                                '0.16em',

                                            textTransform:
                                                'uppercase',
                                        }}
                                    >
                                        MBA METAL /{' '}
                                        {t(
                                            `${baseKey}.name`
                                        )}
                                    </Typography>
                                </Box>

                                <Typography
                                    sx={{
                                        display: {
                                            xs:
                                                'none',
                                            sm:
                                                'block',
                                        },

                                        color:
                                            'rgba(255,255,255,0.48)',

                                        fontSize:
                                            '0.56rem',

                                        fontWeight:
                                            700,

                                        letterSpacing:
                                            '0.15em',

                                        textTransform:
                                            'uppercase',
                                    }}
                                >
                                    {t(
                                        `${baseKey}.hero.visualLabel`
                                    )}
                                </Typography>
                            </Box>

                            {/* =========================================
                                SIDE TECHNICAL LINE
                            ========================================= */}

                            <Box
                                aria-hidden="true"
                                sx={{
                                    position:
                                        'absolute',

                                    top: 92,

                                    right: {
                                        xs: 22,
                                        md: 30,
                                    },

                                    bottom:
                                        120,

                                    width:
                                        '1px',

                                    background:
                                        'linear-gradient(to bottom, rgba(101,196,147,0.58), rgba(255,255,255,0.05))',

                                    '&::before': {
                                        content:
                                            '""',

                                        position:
                                            'absolute',

                                        top: 0,
                                        left: -3,

                                        width: 7,
                                        height: 7,

                                        bgcolor:
                                            '#65c493',
                                    },

                                    '&::after': {
                                        content:
                                            '""',

                                        position:
                                            'absolute',

                                        bottom: 0,
                                        left: -3,

                                        width: 7,
                                        height: 7,

                                        border:
                                            '1px solid rgba(255,255,255,0.5)',
                                    },
                                }}
                            />

                            {/* =========================================
                                BOTTOM CONTENT
                            ========================================= */}

                            <Box
                                sx={{
                                    position:
                                        'absolute',

                                    left: {
                                        xs: 24,
                                        md: 34,
                                    },

                                    right: {
                                        xs: 46,
                                        md: 68,
                                    },

                                    bottom: {
                                        xs: 27,
                                        md: 36,
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display:
                                            'flex',

                                        alignItems:
                                            'center',

                                        gap: 1.4,

                                        mb: 2.2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 44,

                                            height:
                                                '2px',

                                            bgcolor:
                                                '#65c493',
                                        }}
                                    />

                                    <Typography
                                        sx={{
                                            color:
                                                '#65c493',

                                            fontSize:
                                                '0.57rem',

                                            fontWeight:
                                                800,

                                            letterSpacing:
                                                '0.16em',

                                            textTransform:
                                                'uppercase',
                                        }}
                                    >
                                        {t(
                                            `${baseKey}.hero.productionLabel`
                                        )}
                                    </Typography>
                                </Box>

                                <Typography
                                    sx={{
                                        maxWidth:
                                            430,

                                        color:
                                            '#ffffff',

                                        fontSize: {
                                            xs:
                                                '1.35rem',
                                            md:
                                                '1.7rem',
                                        },

                                        lineHeight:
                                            1.2,

                                        fontWeight:
                                            500,

                                        letterSpacing:
                                            '-0.03em',
                                    }}
                                >
                                    {t(
                                        `${baseKey}.hero.imageCaption`
                                    )}
                                </Typography>

                                <Typography
                                    sx={{
                                        mt: 1.5,

                                        color:
                                            'rgba(255,255,255,0.54)',

                                        fontSize:
                                            '0.61rem',

                                        fontWeight:
                                            700,

                                        letterSpacing:
                                            '0.14em',

                                        textTransform:
                                            'uppercase',
                                    }}
                                >
                                    {t(
                                        `${baseKey}.hero.productionMeta`
                                    )}
                                </Typography>
                            </Box>

                            {/* =========================================
                                CORNERS
                            ========================================= */}

                            <Box
                                aria-hidden="true"
                                sx={{
                                    position:
                                        'absolute',

                                    right: 0,
                                    top: 0,

                                    width: 78,
                                    height: 78,

                                    borderTop:
                                        '1px solid rgba(255,255,255,0.42)',

                                    borderRight:
                                        '1px solid rgba(255,255,255,0.42)',
                                }}
                            />

                            <Box
                                aria-hidden="true"
                                sx={{
                                    position:
                                        'absolute',

                                    left: 0,
                                    bottom: 0,

                                    width: 52,
                                    height: 52,

                                    borderLeft:
                                        '1px solid rgba(101,196,147,0.50)',

                                    borderBottom:
                                        '1px solid rgba(101,196,147,0.50)',
                                }}
                            />
                        </Box>

                        {/* =============================================
                            FLOATING IDENTIFIER
                        ============================================= */}

                        <Box
                            component={
                                motion.div
                            }
                            initial={
                                reduceMotion
                                    ? false
                                    : {
                                          opacity: 0,
                                          y: 16,
                                      }
                            }
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.65,
                            }}
                            sx={{
                                position:
                                    'absolute',

                                left: {
                                    xs: 16,
                                    md: 8,
                                    lg: -20,
                                },

                                bottom: {
                                    xs: -5,
                                    md: 0,
                                    lg: 2,
                                },

                                display:
                                    'flex',

                                alignItems:
                                    'center',

                                gap: 1.4,

                                px: 2.1,
                                py: 1.35,

                                bgcolor:
                                    '#ffffff',

                                border:
                                    '1px solid rgba(25,91,62,0.12)',

                                boxShadow:
                                    '0 18px 50px rgba(17,53,37,0.12)',
                            }}
                        >
                            <Box
                                sx={{
                                    width: 8,
                                    height: 8,

                                    bgcolor:
                                        '#247653',
                                }}
                            />

                            <Typography
                                sx={{
                                    color:
                                        '#304039',

                                    fontSize:
                                        '0.59rem',

                                    fontWeight:
                                        800,

                                    letterSpacing:
                                        '0.14em',

                                    textTransform:
                                        'uppercase',
                                }}
                            >
                                {t(
                                    `${baseKey}.hero.badge`
                                )}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default IndustryDetailHeroSection;