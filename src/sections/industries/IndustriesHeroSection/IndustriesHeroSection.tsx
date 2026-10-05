import {
    ArrowDownRight,
    ArrowUpRight,
    Circle,
    Factory,
    GitBranch,
    Ruler,
    Sparkles,
} from 'lucide-react';

import {
    Box,
    Typography,
} from '@mui/material';

import {
    Link,
} from 'react-router-dom';

import {
    useTranslation,
} from 'react-i18next';

import {
    useEffect,
    useState,
} from 'react';

import {
    Container,
} from '../../../components/common/Container';

import {
    industriesPageData,
} from '../../../data/industries/industries.data';

import heroImage from '../../../assets/images/industries/solutions-production1.jpg';

/* =========================================================
   HERO
========================================================= */

export function IndustriesHeroSection() {
    const { t } = useTranslation();

    const [scrollY, setScrollY] =
        useState(0);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (ticking) {
                return;
            }

            ticking = true;

            window.requestAnimationFrame(() => {
                setScrollY(
                    window.scrollY
                );

                ticking = false;
            });
        };

        handleScroll();

        window.addEventListener(
            'scroll',
            handleScroll,
            {
                passive: true,
            }
        );

        return () => {
            window.removeEventListener(
                'scroll',
                handleScroll
            );
        };
    }, []);

    const handleScrollToIndustries =
        () => {
            const element =
                document.querySelector(
                    industriesPageData
                        .hero
                        .industriesAnchor
                );

            element?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        };

    const parallaxOffset =
        Math.min(
            scrollY * 0.16,
            110
        );

    const imageScale =
        1.06 +
        Math.min(
            scrollY * 0.00004,
            0.025
        );

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',

                minHeight: {
                    xs: 760,
                    md: 820,
                    lg: 880,
                },

                display: 'flex',
                alignItems: 'center',

                overflow: 'hidden',

                bgcolor: '#07110d',

                color: '#fff',

                borderBottom:
                    '1px solid rgba(255,255,255,0.08)',
            }}
        >
            {/* =================================================
                BACKGROUND IMAGE
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    inset: '-8% 0',

                    backgroundImage:
                        `url(${heroImage})`,

                    backgroundSize: 'cover',

                    backgroundPosition: {
                        xs: '62% center',
                        md: 'center center',
                        lg: 'center 46%',
                    },

                    transform:
                        `translate3d(0, ${parallaxOffset}px, 0) scale(${imageScale})`,

                    transformOrigin:
                        'center center',

                    willChange:
                        'transform',

                    filter:
                        'saturate(0.82) contrast(1.06)',

                    pointerEvents: 'none',
                }}
            />

            {/* =================================================
                GLOBAL DARK OVERLAY
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',
                    inset: 0,

                    background:
                        `
                        linear-gradient(
                            90deg,
                            rgba(3, 11, 8, 0.97) 0%,
                            rgba(3, 11, 8, 0.94) 26%,
                            rgba(4, 14, 10, 0.78) 51%,
                            rgba(4, 14, 10, 0.47) 72%,
                            rgba(4, 14, 10, 0.54) 100%
                        )
                        `,

                    pointerEvents: 'none',
                }}
            />

            {/* =================================================
                VERTICAL CINEMATIC OVERLAY
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',
                    inset: 0,

                    background:
                        `
                        linear-gradient(
                            180deg,
                            rgba(3,10,7,0.28) 0%,
                            rgba(3,10,7,0.03) 38%,
                            rgba(3,10,7,0.16) 68%,
                            rgba(3,10,7,0.74) 100%
                        )
                        `,

                    pointerEvents: 'none',
                }}
            />

            {/* =================================================
                TECHNICAL GRID
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',
                    inset: 0,

                    opacity: 0.095,

                    backgroundImage: `
                        linear-gradient(
                            rgba(255,255,255,0.12) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(255,255,255,0.12) 1px,
                            transparent 1px
                        )
                    `,

                    backgroundSize:
                        '74px 74px',

                    maskImage:
                        'linear-gradient(to bottom, black 0%, black 62%, transparent 100%)',

                    pointerEvents: 'none',
                }}
            />

            {/* =================================================
                GREEN AMBIENT GLOW
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

                    top: -370,
                    right: -210,

                    borderRadius: '50%',

                    background:
                        'radial-gradient(circle, rgba(47,143,101,0.25) 0%, rgba(30,105,74,0.09) 38%, transparent 70%)',

                    filter: 'blur(16px)',

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

                    width: 650,
                    height: 650,

                    left: -400,
                    bottom: -390,

                    borderRadius: '50%',

                    background:
                        'radial-gradient(circle, rgba(63,150,108,0.16), transparent 68%)',

                    pointerEvents: 'none',
                }}
            />

            {/* =================================================
                TOP LIGHT
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    top: 0,
                    right: '14%',

                    width: {
                        xs: 260,
                        md: 520,
                    },

                    height: 1,

                    background:
                        'linear-gradient(90deg, transparent, rgba(111,196,155,0.65), transparent)',

                    boxShadow:
                        '0 0 60px rgba(87,180,134,0.25)',

                    pointerEvents: 'none',
                }}
            />

            <Container>
                <Box
                    sx={{
                        position: 'relative',

                        zIndex: 2,

                        width: '100%',

                        py: {
                            xs: 13,
                            md: 16,
                        },
                    }}
                >
                    {/* =================================================
                        TOP LABEL
                    ================================================= */}

                    <Box
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
                                width: 38,
                                height: 1,

                                bgcolor: '#57b486',

                                boxShadow:
                                    '0 0 18px rgba(87,180,134,0.45)',
                            }}
                        />

                        <Typography
                            sx={{
                                color: '#71c49c',

                                fontSize:
                                    '0.7rem',

                                fontWeight: 800,

                                letterSpacing:
                                    '0.18em',

                                textTransform:
                                    'uppercase',

                                textShadow:
                                    '0 2px 18px rgba(0,0,0,0.45)',
                            }}
                        >
                            {t(
                                'industriesPage.hero.eyebrow'
                            )}
                        </Typography>
                    </Box>

                    {/* =================================================
                        MAIN CONTENT
                    ================================================= */}

                    <Box
                        sx={{
                            display: 'grid',

                            gridTemplateColumns:
                                {
                                    xs: '1fr',

                                    md: 'minmax(0, 1fr) 310px',

                                    lg: 'minmax(0, 1fr) 390px',
                                },

                            gap: {
                                xs: 7,
                                md: 7,
                                lg: 12,
                            },

                            alignItems: 'end',
                        }}
                    >
                        {/* LEFT */}

                        <Box>
                            <Typography
                                component="h1"
                                sx={{
                                    maxWidth: 980,

                                    fontSize: {
                                        xs: '3.15rem',
                                        sm: '4.2rem',
                                        md: '5.25rem',
                                        lg: '6.4rem',
                                    },

                                    lineHeight:
                                        0.94,

                                    fontWeight:
                                        500,

                                    letterSpacing:
                                        '-0.065em',

                                    color: '#fff',

                                    textShadow:
                                        '0 8px 38px rgba(0,0,0,0.34)',
                                }}
                            >
                                {t(
                                    'industriesPage.hero.title'
                                )}
                            </Typography>

                            <Box
                                sx={{
                                    mt: {
                                        xs: 5,
                                        md: 6,
                                    },

                                    display:
                                        'grid',

                                    gridTemplateColumns:
                                        {
                                            xs: '1fr',

                                            lg: 'minmax(0, 570px) auto',
                                        },

                                    gap: {
                                        xs: 4,
                                        lg: 6,
                                    },

                                    alignItems:
                                        'end',
                                }}
                            >
                                <Typography
                                    sx={{
                                        maxWidth:
                                            580,

                                        color:
                                            'rgba(255,255,255,0.68)',

                                        fontSize: {
                                            xs: '0.98rem',
                                            md: '1.05rem',
                                        },

                                        lineHeight:
                                            1.8,

                                        textShadow:
                                            '0 3px 20px rgba(0,0,0,0.5)',
                                    }}
                                >
                                    {t(
                                        'industriesPage.hero.description'
                                    )}
                                </Typography>

                                {/* ACTIONS */}

                                <Box
                                    sx={{
                                        display:
                                            'flex',

                                        flexWrap:
                                            'wrap',

                                        gap: 1.2,
                                    }}
                                >
                                    <Box
                                        component="button"
                                        type="button"

                                        onClick={
                                            handleScrollToIndustries
                                        }

                                        sx={{
                                            minHeight:
                                                58,

                                            px: 2.7,

                                            display:
                                                'inline-flex',

                                            alignItems:
                                                'center',

                                            justifyContent:
                                                'center',

                                            gap: 2,

                                            border:
                                                'none',

                                            bgcolor:
                                                '#fff',

                                            color:
                                                '#07110d',

                                            fontFamily:
                                                'inherit',

                                            fontSize:
                                                '0.78rem',

                                            fontWeight:
                                                800,

                                            cursor:
                                                'pointer',

                                            boxShadow:
                                                '0 12px 34px rgba(0,0,0,0.18)',

                                            transition:
                                                'transform 220ms ease, background-color 220ms ease, box-shadow 220ms ease',

                                            '&:hover':
                                                {
                                                    transform:
                                                        'translateY(-3px)',

                                                    bgcolor:
                                                        '#dff2e8',

                                                    boxShadow:
                                                        '0 18px 44px rgba(0,0,0,0.26)',
                                                },
                                        }}
                                    >
                                        {t(
                                            'industriesPage.hero.primaryAction'
                                        )}

                                        <ArrowDownRight
                                            size={
                                                17
                                            }
                                            strokeWidth={
                                                1.7
                                            }
                                        />
                                    </Box>

                                    <Box
                                        component={
                                            Link
                                        }

                                        to={
                                            industriesPageData
                                                .hero
                                                .contactHref
                                        }

                                        sx={{
                                            minHeight:
                                                58,

                                            px: 2.7,

                                            display:
                                                'inline-flex',

                                            alignItems:
                                                'center',

                                            justifyContent:
                                                'center',

                                            gap: 2,

                                            border:
                                                '1px solid rgba(255,255,255,0.22)',

                                            bgcolor:
                                                'rgba(5,18,13,0.32)',

                                            color:
                                                '#fff',

                                            textDecoration:
                                                'none',

                                            fontSize:
                                                '0.78rem',

                                            fontWeight:
                                                700,

                                            backdropFilter:
                                                'blur(14px)',

                                            boxShadow:
                                                'inset 0 1px 0 rgba(255,255,255,0.06)',

                                            transition:
                                                'transform 220ms ease, border-color 220ms ease, background-color 220ms ease',

                                            '&:hover':
                                                {
                                                    transform:
                                                        'translateY(-3px)',

                                                    borderColor:
                                                        'rgba(111,200,157,0.62)',

                                                    bgcolor:
                                                        'rgba(88,180,134,0.13)',
                                                },
                                        }}
                                    >
                                        {t(
                                            'industriesPage.hero.secondaryAction'
                                        )}

                                        <ArrowUpRight
                                            size={
                                                17
                                            }
                                            strokeWidth={
                                                1.7
                                            }
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        {/* =================================================
                            RIGHT TECH PANEL
                        ================================================= */}

                        <Box
                            sx={{
                                position:
                                    'relative',

                                display: {
                                    xs: 'none',
                                    md: 'block',
                                },

                                p: 3,

                                border:
                                    '1px solid rgba(255,255,255,0.16)',

                                bgcolor:
                                    'rgba(5,18,13,0.34)',

                                backdropFilter:
                                    'blur(18px)',

                                boxShadow:
                                    `
                                    0 24px 70px rgba(0,0,0,0.28),
                                    inset 0 1px 0 rgba(255,255,255,0.07)
                                    `,

                                overflow:
                                    'hidden',

                                '&::before': {
                                    content:
                                        '""',

                                    position:
                                        'absolute',

                                    top: 0,
                                    left: 0,

                                    width:
                                        '42%',

                                    height: 2,

                                    background:
                                        'linear-gradient(90deg, #62bd92, transparent)',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display:
                                        'flex',

                                    alignItems:
                                        'center',

                                    justifyContent:
                                        'space-between',

                                    mb: 4,
                                }}
                            >
                                <Typography
                                    sx={{
                                        color:
                                            'rgba(255,255,255,0.48)',

                                        fontSize:
                                            '0.62rem',

                                        fontWeight:
                                            800,

                                        letterSpacing:
                                            '0.15em',

                                        textTransform:
                                            'uppercase',
                                    }}
                                >
                                    MBA METAL
                                </Typography>

                                <Sparkles
                                    size={16}
                                    strokeWidth={
                                        1.4
                                    }
                                    color="#6fc49b"
                                />
                            </Box>

                            <TechItem
                                icon={
                                    GitBranch
                                }
                                title="2D / 3D"
                                description="Wire Forming"
                            />

                            <TechItem
                                icon={Ruler}
                                title="Technical"
                                description="Drawing Based"
                            />

                            <TechItem
                                icon={
                                    Factory
                                }
                                title="Prototype"
                                description="to Serial"
                                last
                            />
                        </Box>
                    </Box>

                    {/* =================================================
                        BOTTOM STRIP
                    ================================================= */}

                    <Box
                        sx={{
                            mt: {
                                xs: 8,
                                md: 10,
                            },

                            pt: 3,

                            display: 'flex',

                            alignItems: 'center',

                            justifyContent:
                                'space-between',

                            gap: 4,

                            borderTop:
                                '1px solid rgba(255,255,255,0.12)',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',

                                alignItems:
                                    'center',

                                gap: 1.5,
                            }}
                        >
                            <Circle
                                size={7}
                                fill="#59b98d"
                                color="#59b98d"
                            />

                            <Typography
                                sx={{
                                    color:
                                        'rgba(255,255,255,0.52)',

                                    fontSize:
                                        '0.65rem',

                                    fontWeight:
                                        700,

                                    letterSpacing:
                                        '0.12em',

                                    textTransform:
                                        'uppercase',

                                    textShadow:
                                        '0 2px 14px rgba(0,0,0,0.5)',
                                }}
                            >
                                Wire · Tube ·
                                Welding · Custom
                                Manufacturing
                            </Typography>
                        </Box>

                        <Typography
                            sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'block',
                                },

                                color:
                                    'rgba(255,255,255,0.36)',

                                fontSize:
                                    '0.62rem',

                                letterSpacing:
                                    '0.13em',

                                textTransform:
                                    'uppercase',
                            }}
                        >
                            Engineering /
                            Manufacturing
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

/* =========================================================
   TECH ITEM
========================================================= */

interface TechItemProps {
    icon: typeof Factory;
    title: string;
    description: string;
    last?: boolean;
}

function TechItem({
    icon: Icon,
    title,
    description,
    last = false,
}: TechItemProps) {
    return (
        <Box
            sx={{
                display: 'grid',

                gridTemplateColumns:
                    '42px 1fr',

                gap: 2,

                alignItems: 'center',

                py: 2.2,

                borderBottom:
                    last
                        ? 'none'
                        : '1px solid rgba(255,255,255,0.1)',
            }}
        >
            <Box
                sx={{
                    width: 42,
                    height: 42,

                    display: 'grid',

                    placeItems: 'center',

                    border:
                        '1px solid rgba(255,255,255,0.13)',

                    bgcolor:
                        'rgba(255,255,255,0.055)',

                    backdropFilter:
                        'blur(8px)',
                }}
            >
                <Icon
                    size={17}
                    strokeWidth={1.4}
                    color="#69bd94"
                />
            </Box>

            <Box>
                <Typography
                    sx={{
                        color: '#fff',

                        fontSize:
                            '0.82rem',

                        fontWeight: 700,
                    }}
                >
                    {title}
                </Typography>

                <Typography
                    sx={{
                        mt: 0.3,

                        color:
                            'rgba(255,255,255,0.44)',

                        fontSize:
                            '0.68rem',
                    }}
                >
                    {description}
                </Typography>
            </Box>
        </Box>
    );
}

export default IndustriesHeroSection;