import {
    Box,
    Button,
    Typography,
} from '@mui/material';

import {
    ArrowDownRight,
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
    useNavigate,
} from 'react-router-dom';

import { Container } from '../../../components/common/Container';

import {
    whyUsHeroData,
} from '../../../data/why-us/why-us.data';

import heroImage from '../../../assets/images/hero/hero-manufacturing.jpeg';

const MotionBox = motion.create(Box);

export function WhyUsHeroSection() {
    const navigate = useNavigate();

    const sectionRef =
        useRef<HTMLElement | null>(null);

    const {
        scrollYProgress,
    } = useScroll({
        target: sectionRef,

        offset: [
            'start start',
            'end start',
        ],
    });

    /*
     * Background image moves slightly slower
     * than the rest of the page.
     */
    const backgroundY = useTransform(
        scrollYProgress,
        [0, 1],
        ['0%', '16%']
    );

    /*
     * Content gets a subtle parallax movement.
     */
    const contentY = useTransform(
        scrollYProgress,
        [0, 1],
        ['0px', '55px']
    );

    const {
        eyebrow,
        title,
        description,
        primaryAction,
        secondaryAction,
        startingPoints,
    } = whyUsHeroData;

    return (
        <Box
            ref={sectionRef}
            component="section"
            sx={{
                position: 'relative',
                overflow: 'hidden',
                bgcolor: '#f5f7f5',
            }}
        >
            {/* ================================================= */}
            {/* MAIN HERO */}
            {/* ================================================= */}

            <Box
                sx={{
                    position: 'relative',

                    minHeight: {
                        xs: 'auto',
                        lg: 'calc(100vh - 88px)',
                    },

                    display: 'flex',
                    alignItems: 'center',

                    overflow: 'hidden',
                }}
            >
                {/* ================================================= */}
                {/* PARALLAX BACKGROUND IMAGE */}
                {/* ================================================= */}

                <MotionBox
                    style={{
                        y: backgroundY,
                    }}
                    sx={{
                        position: 'absolute',

                        top: '-12%',
                        right: 0,
                        bottom: '-12%',

                        width: {
                            xs: '100%',
                            lg: '55%',
                        },

                        backgroundImage:
                            `url(${heroImage})`,

                        backgroundSize: 'cover',

                        backgroundPosition: {
                            xs: 'center',
                            lg: 'center center',
                        },

                        zIndex: 0,

                        /*
                         * Main image overlay.
                         *
                         * The old version became almost
                         * transparent exactly where the
                         * right-side copy was rendered.
                         *
                         * This version keeps enough contrast
                         * behind the copy while still allowing
                         * the industrial image to remain visible.
                         */
                        '&::before': {
                            content: '""',

                            position: 'absolute',
                            inset: 0,

                            background: {
                                xs: `
                                    linear-gradient(
                                        180deg,
                                        rgba(245,247,245,0.90) 0%,
                                        rgba(245,247,245,0.78) 55%,
                                        rgba(245,247,245,0.88) 100%
                                    )
                                `,

                                lg: `
                                    linear-gradient(
                                        90deg,
                                        rgba(245,247,245,1) 0%,
                                        rgba(245,247,245,0.96) 12%,
                                        rgba(245,247,245,0.76) 32%,
                                        rgba(245,247,245,0.46) 56%,
                                        rgba(245,247,245,0.16) 82%,
                                        rgba(17,23,20,0.06) 100%
                                    )
                                `,
                            },

                            zIndex: 1,
                        },

                        /*
                         * Gives the photograph slightly more
                         * depth without making it too dark.
                         */
                        '&::after': {
                            content: '""',

                            position: 'absolute',
                            inset: 0,

                            background: `
                                linear-gradient(
                                    180deg,
                                    rgba(17,23,20,0.01) 0%,
                                    rgba(17,23,20,0.05) 52%,
                                    rgba(17,23,20,0.18) 100%
                                )
                            `,

                            zIndex: 2,
                        },
                    }}
                />

                {/* ================================================= */}
                {/* PAGE-WIDE TRANSITION GRADIENT */}
                {/* ================================================= */}

                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,

                        zIndex: 1,

                        pointerEvents: 'none',

                        background: {
                            xs: `
                                linear-gradient(
                                    180deg,
                                    rgba(245,247,245,0.80) 0%,
                                    rgba(245,247,245,0.56) 100%
                                )
                            `,

                            lg: `
                                linear-gradient(
                                    90deg,
                                    #f5f7f5 0%,
                                    #f5f7f5 45%,
                                    rgba(245,247,245,0.98) 50%,
                                    rgba(245,247,245,0.82) 57%,
                                    rgba(245,247,245,0.36) 69%,
                                    rgba(245,247,245,0.04) 86%
                                )
                            `,
                        },
                    }}
                />

                {/* ================================================= */}
                {/* DECORATIVE CIRCLE */}
                {/* ================================================= */}

                <Box
                    sx={{
                        position: 'absolute',

                        width: {
                            xs: 420,
                            lg: 680,
                        },

                        height: {
                            xs: 420,
                            lg: 680,
                        },

                        borderRadius: '50%',

                        border:
                            '1px solid rgba(22,91,65,0.07)',

                        left: {
                            xs: -300,
                            lg: -380,
                        },

                        bottom: {
                            xs: -250,
                            lg: -360,
                        },

                        zIndex: 1,

                        pointerEvents: 'none',
                    }}
                />

                {/* ================================================= */}
                {/* CONTENT */}
                {/* ================================================= */}

                <Container
                    sx={{
                        position: 'relative',

                        zIndex: 3,

                        width: '100%',
                    }}
                >
                    <MotionBox
                        style={{
                            y: contentY,
                        }}
                        sx={{
                            display: 'grid',

                            gridTemplateColumns: {
                                xs: '1fr',

                                lg:
                                    'minmax(0, 1.05fr) minmax(320px, 0.55fr)',
                            },

                            gap: {
                                xs: 6,
                                lg: 12,
                            },

                            alignItems: 'end',

                            py: {
                                xs: 11,
                                sm: 13,
                                md: 15,
                                lg: 16,
                            },
                        }}
                    >
                        {/* ================================================= */}
                        {/* LEFT CONTENT */}
                        {/* ================================================= */}

                        <Box>
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
                                    duration: 0.6,
                                }}
                                sx={{
                                    display: 'flex',

                                    alignItems:
                                        'center',

                                    gap: 1.5,

                                    mb: 3,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 8,
                                        height: 8,

                                        flexShrink: 0,

                                        borderRadius:
                                            '50%',

                                        bgcolor:
                                            'primary.main',
                                    }}
                                />

                                <Typography
                                    variant="overline"
                                    sx={{
                                        color:
                                            'primary.main',

                                        fontWeight: 700,

                                        letterSpacing:
                                            '0.16em',
                                    }}
                                >
                                    {eyebrow}
                                </Typography>
                            </MotionBox>

                            <MotionBox
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
                                        maxWidth: 920,

                                        color:
                                            '#111714',

                                        fontSize: {
                                            xs: '3.15rem',
                                            sm: '4.1rem',
                                            md: '5.1rem',
                                            lg: '5.7rem',
                                            xl: '6.1rem',
                                        },

                                        fontWeight: 700,

                                        lineHeight: 0.94,

                                        letterSpacing:
                                            '-0.065em',
                                    }}
                                >
                                    {title}
                                </Typography>
                            </MotionBox>
                        </Box>

                        {/* ================================================= */}
                        {/* RIGHT CONTENT */}
                        {/* ================================================= */}

                        <MotionBox
                            initial={{
                                opacity: 0,
                                x: 35,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
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
                            sx={{
                                position: 'relative',

                                maxWidth: 500,

                                pb: {
                                    lg: 1,
                                },

                                /*
                                 * Local contrast layer.
                                 *
                                 * This is intentionally not a
                                 * visible card. It softly lightens
                                 * only the region immediately behind
                                 * the text.
                                 */
                                '&::before': {
                                    content: '""',

                                    position:
                                        'absolute',

                                    zIndex: -1,

                                    pointerEvents:
                                        'none',

                                    inset: {
                                        xs:
                                            '-28px -20px',
                                        lg:
                                            '-70px -90px',
                                    },

                                    background: {
                                        xs:
                                            'rgba(245,247,245,0.72)',

                                        lg: `
                                            radial-gradient(
                                                ellipse at center,
                                                rgba(245,247,245,0.94) 0%,
                                                rgba(245,247,245,0.86) 32%,
                                                rgba(245,247,245,0.60) 54%,
                                                rgba(245,247,245,0.18) 72%,
                                                rgba(245,247,245,0) 82%
                                            )
                                        `,
                                    },

                                    borderRadius: {
                                        xs: 2,
                                        lg: 0,
                                    },
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    maxWidth: 470,

                                    color:
                                        '#37413c',

                                    fontSize: {
                                        xs: '0.98rem',
                                        md: '1.03rem',
                                    },

                                    fontWeight: 450,

                                    lineHeight: 1.9,

                                    textShadow:
                                        '0 1px 0 rgba(255,255,255,0.18)',
                                }}
                            >
                                {description}
                            </Typography>

                            <Box
                                sx={{
                                    display: 'flex',

                                    alignItems:
                                        'center',

                                    flexWrap: 'wrap',

                                    gap: {
                                        xs: 1,
                                        sm: 2,
                                    },

                                    mt: 4,
                                }}
                            >
                                {/* PRIMARY CTA */}

                                <Button
                                    variant="contained"

                                    endIcon={
                                        <ArrowRight
                                            size={17}
                                            strokeWidth={
                                                1.7
                                            }
                                        />
                                    }

                                    onClick={() =>
                                        navigate(
                                            primaryAction.href
                                        )
                                    }

                                    sx={{
                                        minHeight: 52,

                                        px: 3.2,

                                        borderRadius: 0,

                                        boxShadow:
                                            'none',

                                        textTransform:
                                            'none',

                                        fontWeight: 700,

                                        '&:hover': {
                                            boxShadow:
                                                'none',
                                        },
                                    }}
                                >
                                    {
                                        primaryAction.label
                                    }
                                </Button>

                                {/* SECONDARY CTA */}

                                <Button
                                    variant="text"

                                    endIcon={
                                        <ArrowDownRight
                                            size={17}
                                            strokeWidth={
                                                1.7
                                            }
                                        />
                                    }

                                    onClick={() =>
                                        navigate(
                                            secondaryAction.href
                                        )
                                    }

                                    sx={{
                                        minHeight: 52,

                                        px: {
                                            xs: 1.5,
                                            sm: 2,
                                        },

                                        color:
                                            '#111714',

                                        textTransform:
                                            'none',

                                        fontWeight: 700,

                                        '&:hover': {
                                            bgcolor:
                                                'rgba(245,247,245,0.52)',

                                            color:
                                                'primary.main',
                                        },
                                    }}
                                >
                                    {
                                        secondaryAction.label
                                    }
                                </Button>
                            </Box>
                        </MotionBox>
                    </MotionBox>
                </Container>
            </Box>

            {/* ================================================= */}
            {/* STARTING POINTS */}
            {/* ================================================= */}

            <Box
                sx={{
                    position: 'relative',

                    zIndex: 4,

                    bgcolor: '#fff',

                    borderTop:
                        '1px solid rgba(17,23,20,0.11)',

                    borderBottom:
                        '1px solid rgba(17,23,20,0.11)',
                }}
            >
                <Container>
                    <Box
                        sx={{
                            display: 'grid',

                            gridTemplateColumns: {
                                xs: '1fr',

                                sm:
                                    'repeat(2, minmax(0, 1fr))',

                                lg:
                                    `repeat(${startingPoints.length}, minmax(0, 1fr))`,
                            },
                        }}
                    >
                        {startingPoints.map(
                            (item, index) => {
                                const Icon =
                                    item.icon;

                                return (
                                    <MotionBox
                                        key={
                                            item.title
                                        }

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
                                            amount: 0.3,
                                        }}

                                        transition={{
                                            duration: 0.6,

                                            delay:
                                                index *
                                                0.06,

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

                                            minHeight: {
                                                xs: 230,
                                                md: 270,
                                            },

                                            py: {
                                                xs: 4.5,
                                                md: 5.5,
                                            },

                                            px: {
                                                xs: 0,
                                                sm: 4,
                                                lg: 4.5,
                                            },

                                            borderRight: {
                                                xs:
                                                    'none',

                                                sm:
                                                    index %
                                                        2 ===
                                                    0
                                                        ? '1px solid rgba(17,23,20,0.11)'
                                                        : 'none',

                                                lg:
                                                    index <
                                                    startingPoints.length -
                                                        1
                                                        ? '1px solid rgba(17,23,20,0.11)'
                                                        : 'none',
                                            },

                                            borderBottom: {
                                                xs:
                                                    index <
                                                    startingPoints.length -
                                                        1
                                                        ? '1px solid rgba(17,23,20,0.11)'
                                                        : 'none',

                                                sm:
                                                    index <
                                                    2
                                                        ? '1px solid rgba(17,23,20,0.11)'
                                                        : 'none',

                                                lg:
                                                    'none',
                                            },

                                            transition:
                                                'background-color 250ms ease',

                                            '&::before':
                                                {
                                                    content:
                                                        '""',

                                                    position:
                                                        'absolute',

                                                    top: 0,

                                                    left: {
                                                        xs: 0,
                                                        sm: 32,
                                                        lg: 36,
                                                    },

                                                    width: 0,

                                                    height:
                                                        '2px',

                                                    bgcolor:
                                                        'primary.main',

                                                    transition:
                                                        'width 300ms ease',
                                                },

                                            '&:hover':
                                                {
                                                    bgcolor:
                                                        'rgba(22,91,65,0.035)',
                                                },

                                            '&:hover::before':
                                                {
                                                    width:
                                                        '54px',
                                                },

                                            '&:hover .starting-point-icon':
                                                {
                                                    bgcolor:
                                                        'primary.main',

                                                    borderColor:
                                                        'primary.main',

                                                    color:
                                                        '#fff',

                                                    transform:
                                                        'translateY(-4px)',
                                                },
                                        }}
                                    >
                                        {/* ICON */}

                                        <Box
                                            className="starting-point-icon"

                                            sx={{
                                                width: 50,
                                                height: 50,

                                                display:
                                                    'flex',

                                                alignItems:
                                                    'center',

                                                justifyContent:
                                                    'center',

                                                borderRadius:
                                                    '50%',

                                                border:
                                                    '1px solid rgba(22,91,65,0.32)',

                                                color:
                                                    'primary.main',

                                                mb: 4,

                                                transition:
                                                    'all 250ms ease',
                                            }}
                                        >
                                            <Icon
                                                size={
                                                    20
                                                }

                                                strokeWidth={
                                                    1.6
                                                }
                                            />
                                        </Box>

                                        {/* TITLE */}

                                        <Typography
                                            component="h3"

                                            sx={{
                                                mb: 1.8,

                                                color:
                                                    '#111714',

                                                fontSize:
                                                    {
                                                        xs:
                                                            '1.35rem',

                                                        md:
                                                            '1.5rem',
                                                    },

                                                fontWeight: 650,

                                                lineHeight: 1.15,

                                                letterSpacing:
                                                    '-0.03em',
                                            }}
                                        >
                                            {
                                                item.title
                                            }
                                        </Typography>

                                        {/* DESCRIPTION */}

                                        <Typography
                                            sx={{
                                                maxWidth: 280,

                                                color:
                                                    'rgba(17,23,20,0.64)',

                                                fontSize:
                                                    '0.92rem',

                                                lineHeight: 1.75,
                                            }}
                                        >
                                            {
                                                item.description
                                            }
                                        </Typography>
                                    </MotionBox>
                                );
                            }
                        )}
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}