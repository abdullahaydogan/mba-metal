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

                height: {
                    xs: 'auto',
                    md: '100svh',
                },

                minHeight: {
                    xs: 720,
                    md: 760,
                },

                display: 'flex',
                alignItems: 'stretch',

                overflow: 'hidden',

                bgcolor: '#07110c',
            }}
        >
            {/* =====================================================
                FULL BACKGROUND IMAGE
            ===================================================== */}

            <MotionBox
                initial={{
                    opacity: 0,
                    scale: 1.03,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                }}
                sx={{
                    position: 'absolute',
                    inset: 0,

                    width: '100%',
                    height: '100%',

                    overflow: 'hidden',

                    zIndex: 0,

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
                                    rgba(7, 17, 12, 0.82) 58%,
                                    rgba(7, 17, 12, 0.52) 100%
                                )
                            `,

                            md: `
                                linear-gradient(
                                    90deg,
                                    rgba(7, 17, 12, 0.94) 0%,
                                    rgba(7, 17, 12, 0.84) 30%,
                                    rgba(7, 17, 12, 0.55) 58%,
                                    rgba(7, 17, 12, 0.20) 100%
                                )
                            `,

                            lg: `
                                linear-gradient(
                                    90deg,
                                    rgba(7, 17, 12, 0.95) 0%,
                                    rgba(7, 17, 12, 0.86) 25%,
                                    rgba(7, 17, 12, 0.54) 50%,
                                    rgba(7, 17, 12, 0.16) 76%,
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
                                rgba(0, 0, 0, 0.12) 0%,
                                rgba(0, 0, 0, 0.02) 40%,
                                rgba(0, 0, 0, 0.10) 68%,
                                rgba(0, 0, 0, 0.48) 100%
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
                        position: 'absolute',
                        inset: 0,

                        width: '100%',
                        height: '100%',

                        objectFit: 'cover',

                        objectPosition: {
                            xs: '60% center',
                            md: 'center center',
                            lg: 'center center',
                        },

                        display: 'block',
                    }}
                />
            </MotionBox>

            {/* =====================================================
                TECHNICAL GRID
            ===================================================== */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',
                    inset: 0,

                    zIndex: 1,

                    pointerEvents: 'none',

                    opacity: {
                        xs: 0.1,
                        md: 0.14,
                    },

                    backgroundImage: `
                        linear-gradient(
                            rgba(255,255,255,0.06) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(255,255,255,0.06) 1px,
                            transparent 1px
                        )
                    `,

                    backgroundSize: {
                        xs: '48px 48px',
                        md: '72px 72px',
                    },

                    maskImage: `
                        linear-gradient(
                            90deg,
                            rgba(0,0,0,0.8),
                            rgba(0,0,0,0.15) 70%,
                            transparent
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

                    width: '100%',

                    py: {
                        xs: 11,
                        sm: 12,
                        md: 10,
                        lg: 9,
                    },
                }}
            >
                <Box
                    sx={{
                        width: {
                            xs: '100%',
                            md: '82%',
                            lg: '62%',
                            xl: '60%',
                        },

                        pt: {
                            xs: 5,
                            md: 3,
                            lg: 2,
                        },

                        pb: {
                            xs: 5,
                            md: 3,
                        },
                    }}
                >
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
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <Typography
                            component="h1"
                            sx={{
                                fontSize: {
                                    xs: 'clamp(2.7rem, 10vw, 4rem)',
                                    sm: 'clamp(3rem, 8vw, 4.5rem)',
                                    md: 'clamp(3.5rem, 5.2vw, 5rem)',
                                    lg: 'clamp(3.8rem, 4.6vw, 5.2rem)',
                                    xl: '5.4rem',
                                },

                                lineHeight: 0.98,

                                letterSpacing: '-0.045em',

                                fontWeight: 600,

                                color: 'common.white',

                                maxWidth: {
                                    xs: 650,
                                    md: 850,
                                    lg: 1000,
                                },

                                textShadow:
                                    '0 8px 32px rgba(0,0,0,0.24)',
                            }}
                        >
                            {t('home.hero.titleLine1')}

                            <br />

                            <Box
                                component="span"
                                sx={{
                                    color: 'common.white',
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
                            delay: 0.35,
                        }}
                    >
                        <Typography
                            sx={{
                                mt: {
                                    xs: 3,
                                    md: 3.5,
                                },

                                maxWidth: 680,

                                fontSize: {
                                    xs: '0.95rem',
                                    md: '1.05rem',
                                },

                                lineHeight: 1.7,

                                color: 'common.white',

                                textShadow:
                                    '0 4px 18px rgba(0,0,0,0.28)',
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
                            delay: 0.48,
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
                                    xs: 3.5,
                                    md: 4,
                                },

                                alignItems: {
                                    xs: 'stretch',
                                    sm: 'center',
                                },
                            }}
                        >
                            <Button
                                component={Link}
                                to={routes.contact}
                                variant="contained"
                                size="large"
                                endIcon={
                                    <ArrowUpRight
                                        size={18}
                                    />
                                }
                                sx={{
                                    px: 3.5,

                                    minHeight: 52,

                                    boxShadow:
                                        '0 12px 32px rgba(0,0,0,0.18)',

                                    '&:hover': {
                                        boxShadow:
                                            '0 16px 40px rgba(0,0,0,0.26)',
                                    },
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

                                    minHeight: 52,

                                    borderColor:
                                        'rgba(255,255,255,0.42)',

                                    color: 'common.white',

                                    bgcolor:
                                        'rgba(7,17,12,0.14)',

                                    backdropFilter:
                                        'blur(8px)',

                                    '&:hover': {
                                        borderColor:
                                            'common.white',

                                        bgcolor:
                                            'rgba(255,255,255,0.08)',
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
                            delay: 0.62,
                        }}
                    >
                        <Stack
                            direction="row"
                            sx={{
                                mt: {
                                    xs: 4.5,
                                    md: 5,
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
                                        key={
                                            industryKey
                                        }
                                        variant="caption"
                                        sx={{
                                            fontWeight: 600,

                                            letterSpacing:
                                                '0.08em',

                                            textTransform:
                                                'uppercase',

                                            color:
                                                'common.white',

                                            textShadow:
                                                '0 2px 12px rgba(0,0,0,0.32)',
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
                BOTTOM ACCENT LINE
            ===================================================== */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    left: 0,
                    right: 0,
                    bottom: 0,

                    height: '1px',

                    zIndex: 4,

                    background: `
                        linear-gradient(
                            90deg,
                            transparent 0%,
                            rgba(255,255,255,0.18) 20%,
                            rgba(255,255,255,0.08) 75%,
                            transparent 100%
                        )
                    `,
                }}
            />

            {/* =====================================================
                SCROLL INDICATOR
            ===================================================== */}

            <Box
                sx={{
                    position: 'absolute',

                    zIndex: 5,

                    bottom: {
                        xs: 24,
                        md: 28,
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

                        width: 46,
                        height: 46,

                        borderRadius: '50%',

                        color: 'common.white',

                        border: '1px solid',

                        borderColor:
                            'rgba(255,255,255,0.3)',

                        bgcolor:
                            'rgba(7,17,12,0.28)',

                        backdropFilter:
                            'blur(12px)',

                        transition:
                            'all 220ms ease',

                        '&:hover': {
                            bgcolor:
                                'rgba(255,255,255,0.12)',

                            borderColor:
                                'common.white',

                            transform:
                                'translateY(2px)',
                        },
                    }}
                >
                    <ArrowDown size={19} />
                </Button>
            </Box>
        </Box>
    );
}