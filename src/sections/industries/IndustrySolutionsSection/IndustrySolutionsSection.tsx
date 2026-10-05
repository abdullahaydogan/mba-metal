import {
    useRef,
    type MouseEvent,
} from 'react';

import {
    Box,
    Typography,
} from '@mui/material';

import {
    ArrowUpRight,
    Factory,
    GitBranch,
    Layers3,
    PackageCheck,
    Ruler,
    Sparkles,
    Wrench,
    type LucideIcon,
} from 'lucide-react';

import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from 'motion/react';

import {
    useTranslation,
} from 'react-i18next';

import {
    Container,
} from '../../../components/common/Container';

import {
    industriesPageData,
} from '../../../data/industries/industries.data';

import solutionsProductionImage
    from '../../../assets/images/industries/solutions-production.jpg';

/* =========================================================
   ICON MAP
========================================================= */

const solutionIcons: Record<
    string,
    LucideIcon
> = {
    wireForming: GitBranch,
    weldedComponents: Sparkles,
    tubeComponents: Layers3,
    customProduction: Wrench,
    prototype: Ruler,
    serialProduction: Factory,
    packaging: PackageCheck,
};

/* =========================================================
   SECTION
========================================================= */

export function IndustrySolutionsSection() {
    const { t } = useTranslation();

    const sectionRef =
        useRef<HTMLElement | null>(null);

    const prefersReducedMotion =
        useReducedMotion();

    const {
        scrollYProgress,
    } = useScroll({
        target: sectionRef,

        offset: [
            'start end',
            'end start',
        ],
    });

    /*
     * Background görsel:
     *
     * section ekrana yaklaşırken aşağıdan gelir,
     * section ortasında normal konuma ulaşır,
     * çıkarken yukarı doğru devam eder.
     */
    const imageY =
        useTransform(
            scrollYProgress,
            [0, 1],
            ['-7%', '7%']
        );

    /*
     * Section ekrana girerken görsel belirir,
     * ortada tamamen görünür,
     * section çıkarken tekrar kaybolur.
     */
    const imageOpacity =
        useTransform(
            scrollYProgress,
            [
                0,
                0.14,
                0.28,
                0.72,
                0.88,
                1,
            ],
            [
                0,
                0.45,
                1,
                1,
                0.45,
                0,
            ]
        );

    /*
     * Çok hafif cinematic zoom.
     */
    const imageScale =
        useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            [1.12, 1.06, 1.02]
        );

    /*
     * İçerik background'dan farklı hızda
     * hareket ediyor.
     *
     * Parallax hissini güçlendiriyor.
     */
    const contentY =
        useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            [35, 0, -35]
        );

    return (
        <Box
            ref={sectionRef}
            component="section"
            id={
                industriesPageData
                    .solutions
                    .id
            }
            sx={{
                position: 'relative',

                overflow: 'hidden',

                isolation: 'isolate',

                bgcolor: '#07110d',

                color: '#fff',

                py: {
                    xs: 10,
                    sm: 12,
                    md: 15,
                    lg: 17,
                },
            }}
        >
            {/* =====================================================
                PARALLAX BACKGROUND IMAGE
            ===================================================== */}

            <Box
                component={motion.div}
                aria-hidden="true"
                style={
                    prefersReducedMotion
                        ? {
                              opacity: 1,
                          }
                        : {
                              y: imageY,
                              scale:
                                  imageScale,
                              opacity:
                                  imageOpacity,
                          }
                }
                sx={{
                    position: 'absolute',

                    zIndex: -5,

                    inset: {
                        xs: '-7% 0',
                        md: '-10% 0',
                    },

                    backgroundImage:
                        `url(${solutionsProductionImage})`,

                    backgroundSize:
                        'cover',

                    backgroundPosition:
                        {
                            xs: '58% center',
                            md: 'center center',
                        },

                    willChange:
                        'transform, opacity',
                }}
            />

            {/* =====================================================
                DARK IMAGE TREATMENT
            ===================================================== */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    zIndex: -4,

                    inset: 0,

                    background: `
                        linear-gradient(
                            90deg,
                            rgba(5, 15, 10, 0.96) 0%,
                            rgba(5, 15, 10, 0.88) 34%,
                            rgba(5, 15, 10, 0.67) 64%,
                            rgba(5, 15, 10, 0.78) 100%
                        ),
                        linear-gradient(
                            180deg,
                            rgba(5, 15, 10, 0.90) 0%,
                            rgba(5, 15, 10, 0.42) 36%,
                            rgba(5, 15, 10, 0.55) 67%,
                            rgba(5, 15, 10, 0.96) 100%
                        )
                    `,
                }}
            />

            {/* =====================================================
                GREEN AMBIENT LIGHT
            ===================================================== */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    zIndex: -3,

                    width: {
                        xs: 420,
                        md: 760,
                    },

                    height: {
                        xs: 420,
                        md: 760,
                    },

                    top: {
                        xs: '20%',
                        md: '3%',
                    },

                    right: {
                        xs: -280,
                        md: -230,
                    },

                    borderRadius: '50%',

                    background:
                        'radial-gradient(circle, rgba(58, 160, 110, 0.23) 0%, rgba(35, 113, 77, 0.08) 43%, transparent 72%)',

                    filter:
                        'blur(25px)',

                    pointerEvents:
                        'none',
                }}
            />

            {/* =====================================================
                TECHNICAL GRID
            ===================================================== */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    zIndex: -2,

                    inset: 0,

                    opacity: 0.075,

                    backgroundImage: `
                        linear-gradient(
                            rgba(255,255,255,0.18) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(255,255,255,0.18) 1px,
                            transparent 1px
                        )
                    `,

                    backgroundSize:
                        '72px 72px',

                    maskImage:
                        'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',

                    pointerEvents:
                        'none',
                }}
            />

            {/* =====================================================
                TOP / BOTTOM VIGNETTE
            ===================================================== */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    zIndex: -1,

                    inset: 0,

                    background: `
                        linear-gradient(
                            180deg,
                            #07110d 0%,
                            transparent 13%,
                            transparent 84%,
                            #07110d 100%
                        )
                    `,

                    pointerEvents:
                        'none',
                }}
            />

            {/* =====================================================
                CONTENT
            ===================================================== */}

            <Container>
                <Box
                    component={
                        motion.div
                    }
                    style={
                        prefersReducedMotion
                            ? undefined
                            : {
                                  y: contentY,
                              }
                    }
                    sx={{
                        position:
                            'relative',

                        zIndex: 2,
                    }}
                >
                    {/* =================================================
                        SECTION INTRO
                    ================================================= */}

                    <Box
                        sx={{
                            display: 'grid',

                            gridTemplateColumns:
                                {
                                    xs: '1fr',

                                    md: 'minmax(0, 1.2fr) minmax(300px, 0.65fr)',
                                },

                            gap: {
                                xs: 4,
                                md: 8,
                                lg: 13,
                            },

                            alignItems:
                                'end',

                            mb: {
                                xs: 7,
                                md: 9,
                            },
                        }}
                    >
                        {/* LEFT */}

                        <Box>
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
                                        width: 36,
                                        height: 1,

                                        bgcolor:
                                            '#65bd91',
                                    }}
                                />

                                <Typography
                                    sx={{
                                        color:
                                            '#79c9a3',

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
                                        'industriesPage.solutions.eyebrow'
                                    )}
                                </Typography>
                            </Box>

                            <Typography
                                component="h2"
                                sx={{
                                    maxWidth:
                                        820,

                                    color: '#fff',

                                    fontSize: {
                                        xs: '2.65rem',
                                        sm: '3.5rem',
                                        md: '4.4rem',
                                        lg: '5rem',
                                    },

                                    lineHeight:
                                        0.98,

                                    fontWeight:
                                        500,

                                    letterSpacing:
                                        '-0.055em',
                                }}
                            >
                                {t(
                                    'industriesPage.solutions.title'
                                )}
                            </Typography>
                        </Box>

                        {/* RIGHT */}

                        <Box
                            sx={{
                                pb: {
                                    md: 0.8,
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    color:
                                        'rgba(255,255,255,0.62)',

                                    fontSize: {
                                        xs: '0.96rem',
                                        md: '1.02rem',
                                    },

                                    lineHeight:
                                        1.8,

                                    maxWidth:
                                        460,
                                }}
                            >
                                {t(
                                    'industriesPage.solutions.description'
                                )}
                            </Typography>

                            <Box
                                sx={{
                                    mt: 3.5,

                                    display:
                                        'flex',

                                    alignItems:
                                        'center',

                                    gap: 1.5,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 7,
                                        height: 7,

                                        borderRadius:
                                            '50%',

                                        bgcolor:
                                            '#6bc197',

                                        boxShadow:
                                            '0 0 20px rgba(107,193,151,0.75)',
                                    }}
                                />

                                <Typography
                                    sx={{
                                        color:
                                            'rgba(255,255,255,0.4)',

                                        fontSize:
                                            '0.62rem',

                                        fontWeight:
                                            700,

                                        letterSpacing:
                                            '0.13em',

                                        textTransform:
                                            'uppercase',
                                    }}
                                >
                                    MBA METAL /
                                    MANUFACTURING
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* =================================================
                        SOLUTION GRID
                    ================================================= */}

                    <Box
                        sx={{
                            display: 'grid',

                            gridTemplateColumns:
                                {
                                    xs: '1fr',

                                    sm: 'repeat(2, minmax(0, 1fr))',

                                    lg: 'repeat(3, minmax(0, 1fr))',
                                },

                            borderTop:
                                '1px solid rgba(255,255,255,0.16)',

                            borderLeft:
                                '1px solid rgba(255,255,255,0.16)',
                        }}
                    >
                        {industriesPageData
                            .solutions
                            .items
                            .map(
                                (
                                    item,
                                    index
                                ) => {
                                    const Icon =
                                        solutionIcons[
                                            item.id
                                        ] ??
                                        Factory;

                                    return (
                                        <SolutionCard
                                            key={
                                                item.id
                                            }
                                            id={
                                                item.id
                                            }
                                            icon={
                                                Icon
                                            }
                                            index={
                                                index
                                            }
                                        />
                                    );
                                }
                            )}
                    </Box>

                    {/* =================================================
                        BOTTOM INFORMATION
                    ================================================= */}

                    <Box
                        sx={{
                            mt: {
                                xs: 5,
                                md: 6,
                            },

                            pt: 3,

                            display: 'flex',

                            flexDirection: {
                                xs: 'column',
                                sm: 'row',
                            },

                            justifyContent:
                                'space-between',

                            alignItems: {
                                xs: 'flex-start',
                                sm: 'center',
                            },

                            gap: 2,

                            borderTop:
                                '1px solid rgba(255,255,255,0.1)',
                        }}
                    >
                        <Typography
                            sx={{
                                maxWidth: 720,

                                color:
                                    'rgba(255,255,255,0.44)',

                                fontSize:
                                    '0.76rem',

                                lineHeight:
                                    1.7,
                            }}
                        >
                            {t(
                                'industriesPage.solutions.note'
                            )}
                        </Typography>

                        <Box
                            sx={{
                                display:
                                    'flex',

                                alignItems:
                                    'center',

                                gap: 1.2,

                                flexShrink: 0,
                            }}
                        >
                            <Typography
                                sx={{
                                    color:
                                        '#72c39c',

                                    fontSize:
                                        '0.62rem',

                                    fontWeight:
                                        800,

                                    letterSpacing:
                                        '0.14em',

                                    textTransform:
                                        'uppercase',
                                }}
                            >
                                Engineering
                                Driven
                            </Typography>

                            <ArrowUpRight
                                size={15}
                                strokeWidth={
                                    1.5
                                }
                                color="#72c39c"
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

/* =========================================================
   SOLUTION CARD
========================================================= */

interface SolutionCardProps {
    id: string;

    icon: LucideIcon;

    index: number;
}

function SolutionCard({
    id,
    icon: Icon,
    index,
}: SolutionCardProps) {
    const { t } = useTranslation();

    const cardRef =
        useRef<HTMLDivElement | null>(
            null
        );

    const handleMouseMove = (
        event: MouseEvent<HTMLDivElement>
    ) => {
        const element =
            cardRef.current;

        if (!element) {
            return;
        }

        const rect =
            element.getBoundingClientRect();

        const x =
            event.clientX -
            rect.left;

        const y =
            event.clientY -
            rect.top;

        element.style.setProperty(
            '--mouse-x',
            `${x}px`
        );

        element.style.setProperty(
            '--mouse-y',
            `${y}px`
        );
    };

    return (
        <Box
            ref={cardRef}
            component={motion.div}
            initial={{
                opacity: 0,
                y: 28,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.65,
                delay:
                    Math.min(
                        index * 0.07,
                        0.28
                    ),
                ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                ],
            }}
            onMouseMove={
                handleMouseMove
            }
            sx={{
                '--mouse-x': '50%',
                '--mouse-y': '50%',

                position: 'relative',

                minHeight: {
                    xs: 245,
                    md: 285,
                },

                p: {
                    xs: 3,
                    md: 3.7,
                    lg: 4,
                },

                display: 'flex',

                flexDirection:
                    'column',

                justifyContent:
                    'space-between',

                overflow: 'hidden',

                borderRight:
                    '1px solid rgba(255,255,255,0.16)',

                borderBottom:
                    '1px solid rgba(255,255,255,0.16)',

                background:
                    'rgba(8, 24, 17, 0.48)',

                backdropFilter:
                    'blur(13px)',

                WebkitBackdropFilter:
                    'blur(13px)',

                transition:
                    'background-color 280ms ease, transform 280ms ease',

                /*
                 * Mouse-following spotlight.
                 */
                '&::before': {
                    content: '""',

                    position:
                        'absolute',

                    inset: 0,

                    opacity: 0,

                    pointerEvents:
                        'none',

                    background: `
                        radial-gradient(
                            340px circle at var(--mouse-x) var(--mouse-y),
                            rgba(104, 201, 153, 0.18),
                            transparent 58%
                        )
                    `,

                    transition:
                        'opacity 280ms ease',
                },

                /*
                 * Bottom green glow.
                 */
                '&::after': {
                    content: '""',

                    position:
                        'absolute',

                    left: 0,
                    right: 0,
                    bottom: 0,

                    height: 2,

                    transform:
                        'scaleX(0)',

                    transformOrigin:
                        'left',

                    bgcolor:
                        '#62bb8e',

                    transition:
                        'transform 320ms cubic-bezier(0.22, 1, 0.36, 1)',
                },

                '&:hover': {
                    background:
                        'rgba(11, 38, 26, 0.67)',

                    '&::before':
                        {
                            opacity: 1,
                        },

                    '&::after': {
                        transform:
                            'scaleX(1)',
                    },

                    '& .solution-icon':
                        {
                            bgcolor:
                                '#68be92',

                            color:
                                '#06110c',

                            borderColor:
                                '#68be92',

                            transform:
                                'translateY(-3px)',
                        },

                    '& .solution-arrow':
                        {
                            transform:
                                'translate(3px, -3px)',
                            color:
                                '#7acaa3',
                        },
                },
            }}
        >
            {/* TOP */}

            <Box
                sx={{
                    position: 'relative',

                    zIndex: 2,

                    display: 'flex',

                    alignItems:
                        'flex-start',

                    justifyContent:
                        'space-between',

                    gap: 2,
                }}
            >
                <Box
                    className="solution-icon"
                    sx={{
                        width: 48,
                        height: 48,

                        display: 'grid',

                        placeItems:
                            'center',

                        border:
                            '1px solid rgba(255,255,255,0.18)',

                        bgcolor:
                            'rgba(255,255,255,0.05)',

                        color:
                            '#77c69f',

                        transition:
                            'transform 280ms ease, background-color 280ms ease, color 280ms ease, border-color 280ms ease',
                    }}
                >
                    <Icon
                        size={19}
                        strokeWidth={
                            1.5
                        }
                    />
                </Box>

                <ArrowUpRight
                    className="solution-arrow"
                    size={18}
                    strokeWidth={
                        1.35
                    }
                    color="rgba(255,255,255,0.32)"
                    style={{
                        transition:
                            'transform 280ms ease, color 280ms ease',
                    }}
                />
            </Box>

            {/* CONTENT */}

            <Box
                sx={{
                    position: 'relative',

                    zIndex: 2,

                    mt: 5,
                }}
            >
                <Typography
                    component="h3"
                    sx={{
                        maxWidth: 300,

                        color: '#fff',

                        fontSize: {
                            xs: '1.25rem',
                            md: '1.38rem',
                        },

                        fontWeight: 650,

                        lineHeight: 1.18,

                        letterSpacing:
                            '-0.025em',
                    }}
                >
                    {t(
                        `industriesPage.solutions.items.${id}.title`
                    )}
                </Typography>

                <Typography
                    sx={{
                        mt: 1.5,

                        maxWidth: 330,

                        color:
                            'rgba(255,255,255,0.55)',

                        fontSize:
                            '0.84rem',

                        lineHeight:
                            1.72,
                    }}
                >
                    {t(
                        `industriesPage.solutions.items.${id}.description`
                    )}
                </Typography>
            </Box>
        </Box>
    );
}

export default IndustrySolutionsSection;