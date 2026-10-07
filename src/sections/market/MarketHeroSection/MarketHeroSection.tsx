import {
    ArrowDownRight,
    ArrowUpRight,
    Circle,
    Factory,
    Layers3,
    Settings2,
} from 'lucide-react';

import {
    Box,
    Typography,
} from '@mui/material';

import {
    Link,
} from 'react-router-dom';

import {
    useEffect,
    useState,
} from 'react';

import {
    useTranslation,
} from 'react-i18next';

import {
    Container,
} from '../../../components/common/Container';

import {
    marketPageData,
} from '../../../data/market/market.data';

import heroImage
    from '../../../assets/images/hero/hero-manufacturing.jpeg';

/* =========================================================
   MARKET HERO
========================================================= */

export function MarketHeroSection() {
    const {
        t,
    } = useTranslation();

    const [
        scrollY,
        setScrollY,
    ] = useState(0);

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

    const handleScrollToMarkets =
        () => {
            const element =
                document.querySelector(
                    marketPageData
                        .hero
                        .segmentsAnchor
                );

            element?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        };

    const parallaxOffset =
        Math.min(
            scrollY * 0.15,
            115
        );

    const imageScale =
        1.07 +
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
                    xs: 780,
                    md: 830,
                    lg: 890,
                },

                display: 'flex',
                alignItems: 'center',

                overflow: 'hidden',

                bgcolor: '#06100c',

                color: '#fff',

                borderBottom:
                    '1px solid rgba(255,255,255,0.08)',
            }}
        >
            {/* =================================================
                BACKGROUND
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    inset: '-8% 0',

                    backgroundImage:
                        `url(${heroImage})`,

                    backgroundSize:
                        'cover',

                    backgroundPosition: {
                        xs: '58% center',
                        md: 'center center',
                        lg: 'center 48%',
                    },

                    transform:
                        `translate3d(0, ${parallaxOffset}px, 0) scale(${imageScale})`,

                    transformOrigin:
                        'center center',

                    willChange:
                        'transform',

                    filter:
                        'saturate(0.72) contrast(1.08)',

                    pointerEvents:
                        'none',
                }}
            />

            {/* =================================================
                MAIN OVERLAY
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',
                    inset: 0,

                    background: `
                        linear-gradient(
                            90deg,
                            rgba(3, 11, 8, 0.98) 0%,
                            rgba(3, 12, 8, 0.95) 27%,
                            rgba(4, 15, 10, 0.83) 52%,
                            rgba(4, 14, 10, 0.53) 75%,
                            rgba(4, 13, 9, 0.62) 100%
                        )
                    `,

                    pointerEvents:
                        'none',
                }}
            />

            {/* =================================================
                VERTICAL OVERLAY
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',
                    inset: 0,

                    background: `
                        linear-gradient(
                            180deg,
                            rgba(3,10,7,0.28) 0%,
                            rgba(3,10,7,0.02) 35%,
                            rgba(3,10,7,0.18) 70%,
                            rgba(3,10,7,0.82) 100%
                        )
                    `,

                    pointerEvents:
                        'none',
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

                    opacity: 0.085,

                    backgroundImage: `
                        linear-gradient(
                            rgba(255,255,255,0.13) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(255,255,255,0.13) 1px,
                            transparent 1px
                        )
                    `,

                    backgroundSize:
                        '76px 76px',

                    maskImage:
                        'linear-gradient(to bottom, black 0%, black 65%, transparent 100%)',

                    pointerEvents:
                        'none',
                }}
            />

            {/* =================================================
                RIGHT GLOW
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    width: {
                        xs: 500,
                        md: 900,
                    },

                    height: {
                        xs: 500,
                        md: 900,
                    },

                    top: -410,
                    right: -250,

                    borderRadius:
                        '50%',

                    background:
                        'radial-gradient(circle, rgba(53,154,108,0.27) 0%, rgba(35,110,77,0.1) 38%, transparent 70%)',

                    filter:
                        'blur(18px)',

                    pointerEvents:
                        'none',
                }}
            />

            {/* =================================================
                LEFT GLOW
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    width: 700,
                    height: 700,

                    left: -440,
                    bottom: -430,

                    borderRadius:
                        '50%',

                    background:
                        'radial-gradient(circle, rgba(70,162,116,0.15), transparent 68%)',

                    pointerEvents:
                        'none',
                }}
            />

            {/* =================================================
                TOP ACCENT
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    top: 0,
                    right: '11%',

                    width: {
                        xs: 280,
                        md: 560,
                    },

                    height: 1,

                    background:
                        'linear-gradient(90deg, transparent, rgba(111,196,155,0.7), transparent)',

                    boxShadow:
                        '0 0 60px rgba(87,180,134,0.28)',

                    pointerEvents:
                        'none',
                }}
            />

            {/* =================================================
                CONTENT
            ================================================= */}

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
                        EYEBROW
                    ================================================= */}

                    <Box
                        sx={{
                            display: 'flex',

                            alignItems:
                                'center',

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

                                bgcolor:
                                    '#57b486',

                                boxShadow:
                                    '0 0 18px rgba(87,180,134,0.45)',
                            }}
                        />

                        <Typography
                            sx={{
                                color:
                                    '#71c49c',

                                fontSize:
                                    '0.7rem',

                                fontWeight:
                                    800,

                                letterSpacing:
                                    '0.18em',

                                textTransform:
                                    'uppercase',

                                textShadow:
                                    '0 2px 18px rgba(0,0,0,0.45)',
                            }}
                        >
                            {t(
                                'marketPage.hero.eyebrow'
                            )}
                        </Typography>
                    </Box>

                    {/* =================================================
                        MAIN GRID
                    ================================================= */}

                    <Box
                        sx={{
                            display:
                                'grid',

                            gridTemplateColumns:
                                {
                                    xs:
                                        '1fr',

                                    md:
                                        'minmax(0, 1fr) 320px',

                                    lg:
                                        'minmax(0, 1fr) 390px',
                                },

                            gap: {
                                xs: 7,
                                md: 7,
                                lg: 12,
                            },

                            alignItems:
                                'end',
                        }}
                    >
                        {/* =================================================
                            LEFT CONTENT
                        ================================================= */}

                        <Box>
                            <Typography
                                component="h1"
                                sx={{
                                    maxWidth:
                                        980,

                                    fontSize: {
                                        xs:
                                            '3rem',

                                        sm:
                                            '4rem',

                                        md:
                                            '5rem',

                                        lg:
                                            '6.1rem',
                                    },

                                    lineHeight:
                                        0.95,

                                    fontWeight:
                                        500,

                                    letterSpacing:
                                        '-0.065em',

                                    color:
                                        '#fff',

                                    textShadow:
                                        '0 8px 38px rgba(0,0,0,0.34)',
                                }}
                            >
                                {t(
                                    'marketPage.hero.title'
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
                                            xs:
                                                '1fr',

                                            lg:
                                                'minmax(0, 570px) auto',
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
                                            'rgba(255,255,255,0.69)',

                                        fontSize: {
                                            xs:
                                                '0.98rem',

                                            md:
                                                '1.05rem',
                                        },

                                        lineHeight:
                                            1.8,

                                        textShadow:
                                            '0 3px 20px rgba(0,0,0,0.5)',
                                    }}
                                >
                                    {t(
                                        'marketPage.hero.description'
                                    )}
                                </Typography>

                                {/* =================================================
                                    ACTIONS
                                ================================================= */}

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
                                            handleScrollToMarkets
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

                                            '&:hover': {
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
                                            'marketPage.hero.primaryAction'
                                        )}

                                        <ArrowDownRight
                                            size={17}

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
                                            marketPageData
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

                                            '&:hover': {
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
                                            'marketPage.hero.secondaryAction'
                                        )}

                                        <ArrowUpRight
                                            size={17}

                                            strokeWidth={
                                                1.7
                                            }
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        {/* =================================================
                            MARKET STATS PANEL
                        ================================================= */}

                        <Box
                            sx={{
                                position:
                                    'relative',

                                display: {
                                    xs:
                                        'none',

                                    md:
                                        'block',
                                },

                                border:
                                    '1px solid rgba(255,255,255,0.16)',

                                bgcolor:
                                    'rgba(5,18,13,0.38)',

                                backdropFilter:
                                    'blur(20px)',

                                boxShadow: `
                                    0 24px 70px rgba(0,0,0,0.3),
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
                                        '48%',

                                    height: 2,

                                    background:
                                        'linear-gradient(90deg, #62bd92, transparent)',
                                },
                            }}
                        >
                            {/* HEADER */}

                            <Box
                                sx={{
                                    px: 3,
                                    pt: 3,
                                    pb: 2.5,

                                    display:
                                        'flex',

                                    alignItems:
                                        'center',

                                    justifyContent:
                                        'space-between',

                                    borderBottom:
                                        '1px solid rgba(255,255,255,0.1)',
                                }}
                            >
                                <Box>
                                    <Typography
                                        sx={{
                                            color:
                                                'rgba(255,255,255,0.4)',

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
                                        {t(
                                            'marketPage.hero.panel.eyebrow'
                                        )}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            mt: 0.8,

                                            color:
                                                '#fff',

                                            fontSize:
                                                '0.88rem',

                                            fontWeight:
                                                700,
                                        }}
                                    >
                                        {t(
                                            'marketPage.hero.panel.title'
                                        )}
                                    </Typography>
                                </Box>

                                <Factory
                                    size={19}

                                    strokeWidth={
                                        1.4
                                    }

                                    color="#69bd94"
                                />
                            </Box>

                            {/* STAT 01 */}

                            <MarketStat
                                icon={
                                    Layers3
                                }

                                value="02"

                                label={t(
                                    'marketPage.hero.panel.marketGroups'
                                )}
                            />

                            {/* STAT 02 */}

                            <MarketStat
                                icon={
                                    Settings2
                                }

                                value="17"

                                label={t(
                                    'marketPage.hero.panel.applicationAreas'
                                )}

                                last
                            />
                        </Box>
                    </Box>

                    {/* =================================================
                        BOTTOM MARKET STRIP
                    ================================================= */}

                    <Box
                        sx={{
                            mt: {
                                xs: 8,
                                md: 10,
                            },

                            pt: 3,

                            display:
                                'flex',

                            alignItems:
                                'center',

                            justifyContent:
                                'space-between',

                            gap: 4,

                            borderTop:
                                '1px solid rgba(255,255,255,0.12)',
                        }}
                    >
                        <Box
                            sx={{
                                display:
                                    'flex',

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
                                        'rgba(255,255,255,0.54)',

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
                                {t(
                                    'marketPage.hero.bottom.primary'
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
                                    'rgba(255,255,255,0.38)',

                                fontSize:
                                    '0.62rem',

                                letterSpacing:
                                    '0.13em',

                                textTransform:
                                    'uppercase',
                            }}
                        >
                            {t(
                                'marketPage.hero.bottom.secondary'
                            )}
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

/* =========================================================
   MARKET STAT
========================================================= */

interface MarketStatProps {
    icon: typeof Factory;
    value: string;
    label: string;
    last?: boolean;
}

function MarketStat({
    icon: Icon,
    value,
    label,
    last = false,
}: MarketStatProps) {
    return (
        <Box
            sx={{
                px: 3,

                py: 3.2,

                display:
                    'grid',

                gridTemplateColumns:
                    '48px 70px 1fr',

                gap: 2,

                alignItems:
                    'center',

                borderBottom:
                    last
                        ? 'none'
                        : '1px solid rgba(255,255,255,0.1)',
            }}
        >
            <Box
                sx={{
                    width: 46,
                    height: 46,

                    display:
                        'grid',

                    placeItems:
                        'center',

                    border:
                        '1px solid rgba(255,255,255,0.13)',

                    bgcolor:
                        'rgba(255,255,255,0.055)',
                }}
            >
                <Icon
                    size={18}

                    strokeWidth={
                        1.4
                    }

                    color="#69bd94"
                />
            </Box>

            <Typography
                sx={{
                    color:
                        '#fff',

                    fontSize:
                        '1.65rem',

                    lineHeight:
                        1,

                    fontWeight:
                        500,

                    letterSpacing:
                        '-0.04em',
                }}
            >
                {value}
            </Typography>

            <Typography
                sx={{
                    color:
                        'rgba(255,255,255,0.52)',

                    fontSize:
                        '0.68rem',

                    lineHeight:
                        1.5,

                    fontWeight:
                        700,

                    letterSpacing:
                        '0.08em',

                    textTransform:
                        'uppercase',
                }}
            >
                {label}
            </Typography>
        </Box>
    );
}

export default MarketHeroSection;