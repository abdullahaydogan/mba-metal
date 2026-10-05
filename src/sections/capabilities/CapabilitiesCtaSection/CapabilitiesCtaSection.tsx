import {
    Box,
    Button,
    Container,
    Typography,
} from '@mui/material';

import {
    ArrowUpRight,
    MessageCircle,
} from 'lucide-react';

import {
    motion,
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
    Link as RouterLink,
} from 'react-router-dom';

import {
    capabilitiesPageData,
} from '../../../data/capabilities/capabilities.data';

import manufacturingWorkerImage from '../../../assets/images/capabilities/manufacturing-worker.jpg';

/* =========================================================
   MOTION
========================================================= */

const MotionBox = motion.div;

/* =========================================================
   COMPONENT
========================================================= */

export function CapabilitiesCtaSection() {
    const { t } = useTranslation();

    const sectionRef =
        useRef<HTMLElement | null>(null);

    const {
        id,
        primaryAction,
        secondaryAction,
    } = capabilitiesPageData.finalCta;

    /* =====================================================
       PARALLAX
    ===================================================== */

    const {
        scrollYProgress,
    } = useScroll({
        target: sectionRef,

        offset: [
            'start end',
            'end start',
        ],
    });

    const imageY = useTransform(
        scrollYProgress,
        [0, 1],
        ['-8%', '8%']
    );

    const contentY = useTransform(
        scrollYProgress,
        [0, 1],
        [30, -30]
    );

    return (
        <Box
            ref={sectionRef}
            component="section"
            id={id}
            sx={{
                position: 'relative',

                minHeight: {
                    xs: 680,
                    md: 720,
                    lg: 760,
                },

                display: 'flex',

                alignItems: 'center',

                overflow: 'hidden',

                bgcolor: '#0B2117',

                scrollMarginTop: {
                    xs: 72,
                    md: 88,
                },
            }}
        >
            {/* =================================================
                PARALLAX BACKGROUND
            ================================================= */}

            <MotionBox
                style={{
                    position: 'absolute',

                    inset: '-12% 0',

                    y: imageY,

                    willChange:
                        'transform',
                }}
                aria-hidden="true"
            >
                <Box
                    sx={{
                        position:
                            'absolute',

                        inset: 0,

                        backgroundImage:
                            `url(${manufacturingWorkerImage})`,

                        backgroundSize:
                            'cover',

                        backgroundPosition:
                            'center',

                        backgroundRepeat:
                            'no-repeat',
                    }}
                />
            </MotionBox>

            {/* =================================================
                MAIN DARK GREEN OVERLAY
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    inset: 0,

                    background: `
                        linear-gradient(
                            90deg,
                            rgba(6, 27, 18, 0.97) 0%,
                            rgba(8, 35, 23, 0.94) 34%,
                            rgba(10, 44, 29, 0.82) 62%,
                            rgba(8, 33, 22, 0.62) 100%
                        )
                    `,

                    pointerEvents:
                        'none',
                }}
            />

            {/* =================================================
                VERTICAL DEPTH OVERLAY
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    inset: 0,

                    background: `
                        linear-gradient(
                            180deg,
                            rgba(5, 20, 14, 0.25) 0%,
                            rgba(5, 20, 14, 0.02) 45%,
                            rgba(5, 20, 14, 0.48) 100%
                        )
                    `,

                    pointerEvents:
                        'none',
                }}
            />

            {/* =================================================
                AMBIENT GREEN GLOW
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    top: '-30%',

                    right: '-8%',

                    width: {
                        xs: 400,
                        md: 700,
                    },

                    height: {
                        xs: 400,
                        md: 700,
                    },

                    borderRadius: '50%',

                    background:
                        'radial-gradient(circle, rgba(81, 165, 117, 0.20) 0%, rgba(81, 165, 117, 0) 70%)',

                    pointerEvents:
                        'none',
                }}
            />

            {/* =================================================
                DECORATIVE VERTICAL LINE
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    top: 0,

                    left: {
                        xs: 24,
                        md: 48,
                        lg: '8%',
                    },

                    width: '1px',

                    height: '100%',

                    bgcolor:
                        'rgba(255,255,255,0.08)',

                    pointerEvents:
                        'none',
                }}
            />

            {/* =================================================
                CONTENT
            ================================================= */}

            <Container
                maxWidth="xl"
                sx={{
                    position: 'relative',

                    zIndex: 2,

                    py: {
                        xs: 10,
                        md: 13,
                    },
                }}
            >
                <MotionBox
                    style={{
                        y: contentY,
                    }}
                >
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 36,
                        }}
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
                        <Box
                            sx={{
                                maxWidth: {
                                    xs: '100%',
                                    md: 900,
                                    lg: 1000,
                                },
                            }}
                        >
                            {/* =====================================
                                EYEBROW
                            ===================================== */}

                            <Box
                                sx={{
                                    display: 'flex',

                                    alignItems:
                                        'center',

                                    gap: 2,

                                    mb: {
                                        xs: 3,
                                        md: 4,
                                    },
                                }}
                            >
                                <Box
                                    aria-hidden="true"
                                    sx={{
                                        width: 46,

                                        height:
                                            '1px',

                                        bgcolor:
                                            'rgba(171, 222, 190, 0.85)',
                                    }}
                                />

                                <Typography
                                    component="span"
                                    sx={{
                                        color:
                                            '#B9DCC6',

                                        fontSize: {
                                            xs: '0.72rem',
                                            md: '0.78rem',
                                        },

                                        fontWeight:
                                            700,

                                        letterSpacing:
                                            '0.18em',

                                        textTransform:
                                            'uppercase',
                                    }}
                                >
                                    {t(
                                        'capabilitiesPage.finalCta.eyebrow'
                                    )}
                                </Typography>
                            </Box>

                            {/* =====================================
                                TITLE
                            ===================================== */}

                            <Typography
                                component="h2"
                                sx={{
                                    maxWidth: 950,

                                    color:
                                        '#FFFFFF',

                                    fontSize: {
                                        xs: '2.6rem',
                                        sm: '3.4rem',
                                        md: '4.5rem',
                                        lg: '5.25rem',
                                    },

                                    lineHeight: {
                                        xs: 1.06,
                                        md: 1.01,
                                    },

                                    fontWeight:
                                        500,

                                    letterSpacing:
                                        '-0.055em',
                                }}
                            >
                                {t(
                                    'capabilitiesPage.finalCta.title'
                                )}
                            </Typography>

                            {/* =====================================
                                DESCRIPTION
                            ===================================== */}

                            <Typography
                                sx={{
                                    mt: {
                                        xs: 3,
                                        md: 4,
                                    },

                                    maxWidth: 690,

                                    color:
                                        'rgba(255,255,255,0.70)',

                                    fontSize: {
                                        xs: '1rem',
                                        md: '1.15rem',
                                    },

                                    lineHeight: 1.8,
                                }}
                            >
                                {t(
                                    'capabilitiesPage.finalCta.description'
                                )}
                            </Typography>

                            {/* =====================================
                                ACTIONS
                            ===================================== */}

                            <Box
                                sx={{
                                    display: 'flex',

                                    flexDirection:
                                        {
                                            xs: 'column',
                                            sm: 'row',
                                        },

                                    alignItems: {
                                        xs: 'stretch',
                                        sm: 'center',
                                    },

                                    gap: 2,

                                    mt: {
                                        xs: 5,
                                        md: 6,
                                    },
                                }}
                            >
                                {/* =============================
                                    PRIMARY
                                ============================= */}

                                <Button
                                    component={
                                        RouterLink
                                    }
                                    to={
                                        primaryAction.href
                                    }
                                    variant="contained"
                                    endIcon={
                                        <ArrowUpRight
                                            size={
                                                18
                                            }
                                            strokeWidth={
                                                1.8
                                            }
                                        />
                                    }
                                    sx={{
                                        minHeight:
                                            58,

                                        px: {
                                            xs: 3,
                                            md: 4,
                                        },

                                        borderRadius:
                                            0,

                                        bgcolor:
                                            '#FFFFFF',

                                        color:
                                            '#123424',

                                        fontSize:
                                            '0.9rem',

                                        fontWeight:
                                            700,

                                        letterSpacing:
                                            '0.02em',

                                        textTransform:
                                            'none',

                                        boxShadow:
                                            'none',

                                        transition:
                                            'background-color 220ms ease, color 220ms ease, transform 220ms ease',

                                        '&:hover':
                                            {
                                                bgcolor:
                                                    '#DDEBE2',

                                                color:
                                                    '#0D2A1C',

                                                boxShadow:
                                                    'none',

                                                transform:
                                                    'translateY(-2px)',
                                            },
                                    }}
                                >
                                    {t(
                                        'capabilitiesPage.finalCta.primaryAction'
                                    )}
                                </Button>

                                {/* =============================
                                    SECONDARY
                                ============================= */}

                                <Button
                                    component={
                                        RouterLink
                                    }
                                    to={
                                        secondaryAction.href
                                    }
                                    variant="outlined"
                                    startIcon={
                                        <MessageCircle
                                            size={
                                                18
                                            }
                                            strokeWidth={
                                                1.8
                                            }
                                        />
                                    }
                                    sx={{
                                        minHeight:
                                            58,

                                        px: {
                                            xs: 3,
                                            md: 4,
                                        },

                                        borderRadius:
                                            0,

                                        borderColor:
                                            'rgba(255,255,255,0.30)',

                                        color:
                                            '#FFFFFF',

                                        fontSize:
                                            '0.9rem',

                                        fontWeight:
                                            600,

                                        letterSpacing:
                                            '0.02em',

                                        textTransform:
                                            'none',

                                        transition:
                                            'background-color 220ms ease, border-color 220ms ease, transform 220ms ease',

                                        '&:hover':
                                            {
                                                borderColor:
                                                    'rgba(255,255,255,0.70)',

                                                bgcolor:
                                                    'rgba(255,255,255,0.08)',

                                                transform:
                                                    'translateY(-2px)',
                                            },
                                    }}
                                >
                                    {t(
                                        'capabilitiesPage.finalCta.secondaryAction'
                                    )}
                                </Button>
                            </Box>
                        </Box>
                    </motion.div>
                </MotionBox>
            </Container>

            {/* =================================================
                BOTTOM FADE
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    bottom: 0,
                    left: 0,
                    right: 0,

                    height: 100,

                    background:
                        'linear-gradient(180deg, rgba(5, 20, 14, 0) 0%, rgba(5, 20, 14, 0.30) 100%)',

                    pointerEvents:
                        'none',
                }}
            />
        </Box>
    );
}

export default CapabilitiesCtaSection;