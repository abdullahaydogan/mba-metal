import {
    Box,
    Button,
    Typography,
} from '@mui/material';

import {
    ArrowDown,
    ArrowRight,
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
    useNavigate,
} from 'react-router-dom';

import { Container } from '../../../components/common/Container';

import {
    capabilitiesPageData,
} from '../../../data/capabilities/capabilities.data';

const MotionDiv = motion.div;

export function CapabilitiesHeroSection() {
    const navigate = useNavigate();

    const { t } = useTranslation();

    const sectionRef =
        useRef<HTMLElement | null>(null);

    const {
        primaryAction,
        secondaryAction,
        image,
    } = capabilitiesPageData.hero;

    /*
     * Section viewport içerisinden geçerken
     * background görselini içerikten daha
     * yavaş hareket ettiriyoruz.
     */
    const { scrollYProgress } = useScroll({
        target: sectionRef,

        offset: [
            'start start',
            'end start',
        ],
    });

    const backgroundY = useTransform(
        scrollYProgress,
        [0, 1],
        ['0%', '18%']
    );

    const backgroundScale = useTransform(
        scrollYProgress,
        [0, 1],
        [1.08, 1.14]
    );

    const contentY = useTransform(
        scrollYProgress,
        [0, 1],
        ['0%', '6%']
    );

    const contentOpacity = useTransform(
        scrollYProgress,
        [0, 0.75],
        [1, 0.25]
    );

    const handleNavigate = (
        href: string
    ) => {
        if (href.startsWith('#')) {
            const element =
                document.querySelector(href);

            element?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

            return;
        }

        navigate(href);
    };

    return (
        <Box
            ref={sectionRef}
            component="section"
            sx={{
                position: 'relative',

                minHeight: {
                    xs: '820px',
                    md: '900px',
                    lg: '100svh',
                },

                overflow: 'hidden',

                bgcolor: '#06110D',

                color: '#FFFFFF',
            }}
        >
            {/* =========================================
                PARALLAX BACKGROUND
            ========================================= */}

            <MotionDiv
                aria-hidden="true"
                style={{
                    position: 'absolute',

                    inset: '-12% 0',

                    y: backgroundY,
                    scale: backgroundScale,

                    zIndex: 0,
                }}
            >
                <Box
                    component="img"
                    src={image}
                    alt=""
                    draggable={false}
                    sx={{
                        width: '100%',
                        height: '100%',

                        display: 'block',

                        objectFit: 'cover',

                        objectPosition: {
                            xs: '60% center',
                            md: 'center center',
                        },

                        userSelect: 'none',
                    }}
                />
            </MotionDiv>

            {/* =========================================
                MAIN DARK OVERLAY
            ========================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    inset: 0,

                    zIndex: 1,

                    background: {
                        xs:
                            'linear-gradient(180deg, rgba(3, 14, 10, 0.90) 0%, rgba(3, 14, 10, 0.78) 55%, rgba(3, 14, 10, 0.94) 100%)',

                        md:
                            'linear-gradient(90deg, rgba(3, 14, 10, 0.97) 0%, rgba(3, 14, 10, 0.90) 38%, rgba(3, 14, 10, 0.69) 67%, rgba(3, 14, 10, 0.79) 100%)',
                    },
                }}
            />

            {/* =========================================
                GREEN ATMOSPHERIC OVERLAY
            ========================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    inset: 0,

                    zIndex: 2,

                    background:
                        'radial-gradient(circle at 78% 42%, rgba(25, 107, 75, 0.17) 0%, rgba(25, 107, 75, 0.04) 30%, transparent 55%)',

                    pointerEvents: 'none',
                }}
            />

            {/* =========================================
                SUBTLE BOTTOM GRADIENT
            ========================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    left: 0,
                    right: 0,
                    bottom: 0,

                    height: '32%',

                    zIndex: 3,

                    background:
                        'linear-gradient(180deg, transparent 0%, rgba(2, 10, 7, 0.56) 100%)',

                    pointerEvents: 'none',
                }}
            />

            {/* =========================================
                DECORATIVE VERTICAL LINE
            ========================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    display: {
                        xs: 'none',
                        lg: 'block',
                    },

                    position: 'absolute',

                    top: 0,
                    bottom: 0,

                    left: '66.5%',

                    width: '1px',

                    zIndex: 4,

                    bgcolor:
                        'rgba(255,255,255,0.11)',

                    pointerEvents: 'none',
                }}
            />

            {/* =========================================
                CONTENT
            ========================================= */}

            <MotionDiv
                style={{
                    y: contentY,
                    opacity: contentOpacity,

                    position: 'relative',

                    zIndex: 5,

                    height: '100%',
                }}
            >
                <Container>
                    <Box
                        sx={{
                            minHeight: {
                                xs: '820px',
                                md: '900px',
                                lg: '100svh',
                            },

                            display: 'grid',

                            gridTemplateColumns: {
                                xs: '1fr',

                                lg:
                                    'minmax(0, 1.55fr) minmax(360px, 0.65fr)',
                            },

                            columnGap: {
                                lg: 10,
                            },

                            alignItems: {
                                xs: 'center',
                                lg: 'center',
                            },

                            pt: {
                                xs: 15,
                                md: 17,
                                lg: 11,
                            },

                            pb: {
                                xs: 10,
                                md: 12,
                                lg: 8,
                            },
                        }}
                    >
                        {/* =================================
                            LEFT
                        ================================= */}

                        <Box
                            sx={{
                                alignSelf: 'center',

                                maxWidth: {
                                    xs: '100%',
                                    lg: 900,
                                },
                            }}
                        >
                            <MotionDiv
                                initial={{
                                    opacity: 0,
                                    y: 18,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.6,

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
                                        display: 'flex',

                                        alignItems:
                                            'center',

                                        gap: 1.4,

                                        mb: 3.5,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 7,
                                            height: 7,

                                            borderRadius:
                                                '50%',

                                            bgcolor:
                                                '#55B487',

                                            boxShadow:
                                                '0 0 0 6px rgba(85, 180, 135, 0.10)',
                                        }}
                                    />

                                    <Typography
                                        variant="overline"
                                        sx={{
                                            color:
                                                'rgba(255,255,255,0.78)',

                                            fontWeight: 700,

                                            letterSpacing:
                                                '0.18em',
                                        }}
                                    >
                                        {t(
                                            'capabilitiesPage.hero.eyebrow'
                                        )}
                                    </Typography>
                                </Box>
                            </MotionDiv>

                            <MotionDiv
                                initial={{
                                    opacity: 0,
                                    y: 35,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.8,

                                    delay: 0.08,

                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1,
                                    ],
                                }}
                            >
                                <Typography
                                    component="h1"
                                    sx={{
                                        maxWidth: 820,

                                        color: '#FFFFFF',

                                        fontSize: {
                                            xs: '3.3rem',
                                            sm: '4.6rem',
                                            md: '5.6rem',

                                            lg:
                                                'clamp(5rem, 5.8vw, 7rem)',
                                        },

                                        fontWeight: 700,

                                        lineHeight: 0.93,

                                        letterSpacing:
                                            '-0.065em',

                                        textShadow:
                                            '0 8px 35px rgba(0,0,0,0.20)',
                                    }}
                                >
                                    {t(
                                        'capabilitiesPage.hero.title'
                                    )}
                                </Typography>
                            </MotionDiv>
                        </Box>

                        {/* =================================
                            RIGHT
                        ================================= */}

                        <MotionDiv
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

                                delay: 0.2,

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
                                    mt: {
                                        xs: 7,
                                        lg: 8,
                                    },

                                    maxWidth: 430,
                                }}
                            >
                                <Typography
                                    sx={{
                                        mb: 4,

                                        color:
                                            'rgba(255,255,255,0.75)',

                                        fontSize: {
                                            xs: '1rem',
                                            md: '1.04rem',
                                        },

                                        lineHeight: 1.95,

                                        textShadow:
                                            '0 3px 15px rgba(0,0,0,0.45)',
                                    }}
                                >
                                    {t(
                                        'capabilitiesPage.hero.description'
                                    )}
                                </Typography>

                                <Box
                                    sx={{
                                        display: 'flex',

                                        flexDirection:
                                            'column',

                                        alignItems:
                                            'flex-start',

                                        gap: 1.5,
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        onClick={() =>
                                            handleNavigate(
                                                primaryAction.href
                                            )
                                        }
                                        endIcon={
                                            <ArrowRight
                                                size={
                                                    17
                                                }
                                            />
                                        }
                                        sx={{
                                            minHeight: 54,

                                            px: 3.5,

                                            borderRadius: 0,

                                            boxShadow:
                                                'none',

                                            textTransform:
                                                'none',

                                            fontWeight: 700,

                                            bgcolor:
                                                'primary.main',

                                            '&:hover': {
                                                boxShadow:
                                                    'none',

                                                bgcolor:
                                                    'primary.dark',

                                                '& .MuiButton-endIcon':
                                                    {
                                                        transform:
                                                            'translateX(4px)',
                                                    },
                                            },

                                            '& .MuiButton-endIcon':
                                                {
                                                    transition:
                                                        'transform 200ms ease',
                                                },
                                        }}
                                    >
                                        {t(
                                            'capabilitiesPage.hero.primaryAction'
                                        )}
                                    </Button>

                                    <Button
                                        variant="text"
                                        onClick={() =>
                                            handleNavigate(
                                                secondaryAction.href
                                            )
                                        }
                                        endIcon={
                                            <ArrowDown
                                                size={
                                                    16
                                                }
                                            />
                                        }
                                        sx={{
                                            px: 2.5,
                                            py: 1.5,

                                            color:
                                                '#FFFFFF',

                                            textTransform:
                                                'none',

                                            fontWeight: 700,

                                            '&:hover': {
                                                bgcolor:
                                                    'rgba(255,255,255,0.06)',

                                                '& .MuiButton-endIcon':
                                                    {
                                                        transform:
                                                            'translateY(3px)',
                                                    },
                                            },

                                            '& .MuiButton-endIcon':
                                                {
                                                    transition:
                                                        'transform 200ms ease',
                                                },
                                        }}
                                    >
                                        {t(
                                            'capabilitiesPage.hero.secondaryAction'
                                        )}
                                    </Button>
                                </Box>
                            </Box>
                        </MotionDiv>
                    </Box>
                </Container>
            </MotionDiv>

            {/* =========================================
                EXPLORE
            ========================================= */}

            <Box
                sx={{
                    display: {
                        xs: 'none',
                        md: 'flex',
                    },

                    position: 'absolute',

                    left: {
                        md: 32,
                        lg: 42,
                    },

                    bottom: 32,

                    zIndex: 6,

                    alignItems: 'center',

                    gap: 1.5,

                    color:
                        'rgba(255,255,255,0.72)',
                }}
            >
                <Box
                    sx={{
                        width: 36,
                        height: 36,

                        display: 'grid',

                        placeItems: 'center',

                        border: '1px solid',

                        borderColor:
                            'rgba(255,255,255,0.22)',

                        borderRadius: '50%',
                    }}
                >
                    <ArrowDown
                        size={15}
                        strokeWidth={1.4}
                    />
                </Box>

                <Typography
                    sx={{
                        fontSize: '0.7rem',

                        fontWeight: 700,

                        letterSpacing:
                            '0.14em',

                        textTransform:
                            'uppercase',
                    }}
                >
                    {t(
                        'capabilitiesPage.hero.explore'
                    )}
                </Typography>
            </Box>
        </Box>
    );
}

export default CapabilitiesHeroSection;