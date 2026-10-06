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

                bgcolor: '#07110c',
            }}
        >
            {/* =====================================================
                FULL BACKGROUND IMAGE
            ===================================================== */}

            <MotionBox
                initial={{
                    opacity: 0,
                    scale: 1.05,
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
                                    rgba(7, 17, 12, 0.95) 0%,
                                    rgba(7, 17, 12, 0.86) 55%,
                                    rgba(7, 17, 12, 0.55) 100%
                                )
                            `,

                            md: `
                                linear-gradient(
                                    90deg,
                                    rgba(7, 17, 12, 0.96) 0%,
                                    rgba(7, 17, 12, 0.90) 30%,
                                    rgba(7, 17, 12, 0.66) 58%,
                                    rgba(7, 17, 12, 0.28) 100%
                                )
                            `,

                            lg: `
                                linear-gradient(
                                    90deg,
                                    rgba(7, 17, 12, 0.97) 0%,
                                    rgba(7, 17, 12, 0.91) 28%,
                                    rgba(7, 17, 12, 0.62) 52%,
                                    rgba(7, 17, 12, 0.18) 78%,
                                    rgba(7, 17, 12, 0.08) 100%
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
                                rgba(0, 0, 0, 0.18) 0%,
                                rgba(0, 0, 0, 0.03) 42%,
                                rgba(0, 0, 0, 0.16) 68%,
                                rgba(0, 0, 0, 0.58) 100%
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
                            xs: '62% center',
                            md: '58% center',
                            lg: 'center center',
                        },

                        display: 'block',
                    }}
                />
            </MotionBox>

            {/* =====================================================
                SUBTLE TECHNICAL GRID
            ===================================================== */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',
                    inset: 0,

                    zIndex: 1,

                    pointerEvents: 'none',

                    opacity: {
                        xs: 0.12,
                        md: 0.16,
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
                            lg: '58%',
                            xl: '54%',
                        },
                    }}
                >
                    {/* =====================================================
                        EYEBROW
                    ===================================================== */}

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

                                color: 'common.white',

                                maxWidth: 900,

                                textShadow:
                                    '0 8px 32px rgba(0,0,0,0.16)',
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

                                color:
                                    'rgba(255,255,255,0.78)',

                                textShadow:
                                    '0 4px 18px rgba(0,0,0,0.18)',
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

                                    minHeight: 54,

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

                                    minHeight: 54,

                                    borderColor:
                                        'rgba(255,255,255,0.34)',

                                    color: 'common.white',

                                    bgcolor:
                                        'rgba(7,17,12,0.14)',

                                    backdropFilter:
                                        'blur(8px)',

                                    '&:hover': {
                                        borderColor:
                                            'primary.main',

                                        bgcolor:
                                            'rgba(255,255,255,0.07)',
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
                                                'rgba(255,255,255,0.62)',
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
                            'rgba(7,17,12,0.28)',

                        backdropFilter:
                            'blur(12px)',

                        transition:
                            'all 220ms ease',

                        '&:hover': {
                            bgcolor: 'primary.main',

                            borderColor:
                                'primary.main',

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