import {
    Box,
    Typography,
} from '@mui/material';

import {
    Camera,
    Check,
    FileSearch,
    PackageSearch,
    Ruler,
} from 'lucide-react';

import {
    motion,
} from 'motion/react';

import {
    useTranslation,
} from 'react-i18next';

import { Container } from '../../../components/common/Container';

import {
    capabilitiesPageData,
} from '../../../data/capabilities/capabilities.data';

/* =========================================================
   MOTION
========================================================= */

const MotionDiv = motion.div;

/* =========================================================
   COMPONENT
========================================================= */

export function OemProductionSection() {
    const { t } = useTranslation();

    const {
        id,
    } = capabilitiesPageData.oemProduction;

    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const evaluationItems = t(
        'capabilitiesPage.oemProduction.evaluation.items',
        {
            returnObjects: true,
        }
    ) as string[];

    const withoutDrawingInputs = t(
        'capabilitiesPage.oemProduction.withoutDrawing.inputs',
        {
            returnObjects: true,
        }
    ) as string[];

    const inputIcons = [
        PackageSearch,
        Camera,
        Ruler,
        FileSearch,
    ];

    return (
        <Box
            component="section"
            id={id}
            sx={{
                position: 'relative',

                overflow: 'hidden',

                bgcolor: '#F5F7F6',

                py: {
                    xs: 10,
                    md: 15,
                    lg: 18,
                },

                scrollMarginTop: {
                    xs: 72,
                    md: 88,
                },
            }}
        >
            {/* =================================================
                BACKGROUND DECORATION
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    top: -260,
                    right: -260,

                    width: 600,
                    height: 600,

                    borderRadius: '50%',

                    border:
                        '1px solid rgba(20,91,65,0.07)',

                    pointerEvents: 'none',
                }}
            />

            <Container>
                {/* =================================================
                    HEADER
                ================================================= */}

                <Box
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',

                            lg:
                                'minmax(0,1.05fr) minmax(320px,0.55fr)',
                        },

                        gap: {
                            xs: 4,
                            lg: 12,
                        },

                        alignItems: 'end',

                        mb: {
                            xs: 8,
                            md: 11,
                        },
                    }}
                >
                    {/* =============================================
                        HEADER LEFT
                    ============================================= */}

                    <MotionDiv
                        initial={{
                            opacity: 0,
                            y: 25,
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
                            duration: 0.65,

                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                    >
                        <Typography
                            variant="overline"
                            sx={{
                                display: 'block',

                                mb: 2.5,

                                color:
                                    'primary.main',

                                fontWeight: 700,

                                letterSpacing:
                                    '0.16em',
                            }}
                        >
                            {t(
                                'capabilitiesPage.oemProduction.eyebrow'
                            )}
                        </Typography>

                        <Typography
                            component="h2"
                            sx={{
                                maxWidth: 820,

                                color:
                                    'text.primary',

                                fontSize: {
                                    xs: '2.7rem',
                                    sm: '3.5rem',
                                    md: '4.3rem',
                                    lg: '4.7rem',
                                },

                                fontWeight: 700,

                                lineHeight: 0.98,

                                letterSpacing:
                                    '-0.055em',
                            }}
                        >
                            {t(
                                'capabilitiesPage.oemProduction.title'
                            )}
                        </Typography>
                    </MotionDiv>

                    {/* =============================================
                        HEADER RIGHT
                    ============================================= */}

                    <MotionDiv
                        initial={{
                            opacity: 0,
                            y: 25,
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
                            duration: 0.65,
                            delay: 0.1,
                        }}
                    >
                        <Typography
                            sx={{
                                maxWidth: 520,

                                color:
                                    'text.secondary',

                                fontSize: {
                                    xs: '1rem',
                                    md: '1.04rem',
                                },

                                lineHeight: 1.85,
                            }}
                        >
                            {t(
                                'capabilitiesPage.oemProduction.description'
                            )}
                        </Typography>
                    </MotionDiv>
                </Box>

                {/* =================================================
                    EVALUATION AREA
                ================================================= */}

                <Box
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',

                            lg:
                                'minmax(0,0.72fr) minmax(0,1.28fr)',
                        },

                        borderTop:
                            '1px solid',

                        borderLeft:
                            '1px solid',

                        borderColor:
                            'divider',

                        bgcolor:
                            'background.paper',
                    }}
                >
                    {/* =============================================
                        EVALUATION LEFT
                    ============================================= */}

                    <Box
                        sx={{
                            p: {
                                xs: 4,
                                md: 6,
                                lg: 7,
                            },

                            borderRight:
                                '1px solid',

                            borderBottom:
                                '1px solid',

                            borderColor:
                                'divider',
                        }}
                    >
                        <Box
                            sx={{
                                width: 58,
                                height: 58,

                                display: 'grid',

                                placeItems:
                                    'center',

                                mb: 6,

                                borderRadius:
                                    '50%',

                                bgcolor:
                                    'rgba(20,91,65,0.08)',

                                color:
                                    'primary.main',
                            }}
                        >
                            <FileSearch
                                size={23}
                                strokeWidth={1.5}
                            />
                        </Box>

                        <Typography
                            sx={{
                                mb: 2,

                                color:
                                    'primary.main',

                                fontSize:
                                    '0.72rem',

                                fontWeight: 700,

                                letterSpacing:
                                    '0.14em',

                                textTransform:
                                    'uppercase',
                            }}
                        >
                            {t(
                                'capabilitiesPage.oemProduction.evaluation.eyebrow'
                            )}
                        </Typography>

                        <Typography
                            component="h3"
                            sx={{
                                maxWidth: 420,

                                color:
                                    'text.primary',

                                fontSize: {
                                    xs: '2rem',
                                    md: '2.5rem',
                                },

                                fontWeight: 650,

                                lineHeight: 1.05,

                                letterSpacing:
                                    '-0.04em',
                            }}
                        >
                            {t(
                                'capabilitiesPage.oemProduction.evaluation.title'
                            )}
                        </Typography>
                    </Box>

                    {/* =============================================
                        EVALUATION RIGHT
                    ============================================= */}

                    <Box
                        sx={{
                            display: 'grid',

                            gridTemplateColumns: {
                                xs: '1fr',

                                sm:
                                    'repeat(2,minmax(0,1fr))',

                                md:
                                    'repeat(3,minmax(0,1fr))',
                            },
                        }}
                    >
                        {evaluationItems.map(
                            (
                                item,
                                index
                            ) => (
                                <MotionDiv
                                    key={`${item}-${index}`}
                                    initial={{
                                        opacity: 0,
                                        y: 18,
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
                                        duration:
                                            0.45,

                                        delay:
                                            index *
                                            0.035,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            minHeight:
                                                150,

                                            height:
                                                '100%',

                                            display:
                                                'flex',

                                            flexDirection:
                                                'column',

                                            justifyContent:
                                                'space-between',

                                            p: 3,

                                            borderRight:
                                                '1px solid',

                                            borderBottom:
                                                '1px solid',

                                            borderColor:
                                                'divider',

                                            transition:
                                                'background-color 200ms ease',

                                            '&:hover':
                                                {
                                                    bgcolor:
                                                        'rgba(20,91,65,0.035)',
                                                },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 28,
                                                height: 28,

                                                display:
                                                    'grid',

                                                placeItems:
                                                    'center',

                                                border:
                                                    '1px solid',

                                                borderColor:
                                                    'rgba(20,91,65,0.20)',

                                                borderRadius:
                                                    '50%',

                                                color:
                                                    'primary.main',
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
                                                mt: 4,

                                                color:
                                                    'text.primary',

                                                fontSize:
                                                    '0.92rem',

                                                fontWeight:
                                                    600,

                                                lineHeight:
                                                    1.4,
                                            }}
                                        >
                                            {item}
                                        </Typography>
                                    </Box>
                                </MotionDiv>
                            )
                        )}
                    </Box>
                </Box>

                {/* =================================================
                    WITHOUT DRAWING
                ================================================= */}

                <Box
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',

                            lg:
                                'minmax(0,0.9fr) minmax(0,1.1fr)',
                        },

                        mt: {
                            xs: 8,
                            md: 12,
                        },

                        bgcolor:
                            '#0B1D16',

                        color:
                            '#FFFFFF',
                    }}
                >
                    {/* =============================================
                        WITHOUT DRAWING TEXT
                    ============================================= */}

                    <Box
                        sx={{
                            p: {
                                xs: 4,
                                md: 6,
                                lg: 8,
                            },
                        }}
                    >
                        <Typography
                            variant="overline"
                            sx={{
                                display: 'block',

                                mb: 2.5,

                                color:
                                    'primary.light',

                                fontWeight: 700,

                                letterSpacing:
                                    '0.15em',
                            }}
                        >
                            {t(
                                'capabilitiesPage.oemProduction.withoutDrawing.eyebrow'
                            )}
                        </Typography>

                        <Typography
                            component="h3"
                            sx={{
                                maxWidth: 560,

                                mb: 3,

                                fontSize: {
                                    xs: '2.2rem',
                                    md: '3.1rem',
                                },

                                fontWeight: 650,

                                lineHeight: 1,

                                letterSpacing:
                                    '-0.045em',
                            }}
                        >
                            {t(
                                'capabilitiesPage.oemProduction.withoutDrawing.title'
                            )}
                        </Typography>

                        <Typography
                            sx={{
                                maxWidth: 560,

                                color:
                                    'rgba(255,255,255,0.60)',

                                lineHeight: 1.85,
                            }}
                        >
                            {t(
                                'capabilitiesPage.oemProduction.withoutDrawing.description'
                            )}
                        </Typography>
                    </Box>

                    {/* =============================================
                        INPUT OPTIONS
                    ============================================= */}

                    <Box
                        sx={{
                            display: 'grid',

                            gridTemplateColumns: {
                                xs: '1fr',

                                sm:
                                    'repeat(2,minmax(0,1fr))',
                            },

                            borderTop: {
                                xs:
                                    '1px solid rgba(255,255,255,0.12)',

                                lg: 'none',
                            },

                            borderLeft: {
                                lg:
                                    '1px solid rgba(255,255,255,0.12)',
                            },
                        }}
                    >
                        {withoutDrawingInputs.map(
                            (
                                item,
                                index
                            ) => {
                                const Icon =
                                    inputIcons[
                                        index
                                    ] ??
                                    FileSearch;

                                return (
                                    <MotionDiv
                                        key={`${item}-${index}`}
                                        initial={{
                                            opacity: 0,
                                            y: 18,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.25,
                                        }}
                                        transition={{
                                            duration:
                                                0.45,

                                            delay:
                                                index *
                                                0.06,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                minHeight:
                                                    200,

                                                height:
                                                    '100%',

                                                p: 4,

                                                borderRight:
                                                    '1px solid rgba(255,255,255,0.12)',

                                                borderBottom:
                                                    '1px solid rgba(255,255,255,0.12)',

                                                transition:
                                                    'background-color 200ms ease',

                                                '&:hover':
                                                    {
                                                        bgcolor:
                                                            'rgba(255,255,255,0.035)',
                                                    },
                                            }}
                                        >
                                            <Icon
                                                size={
                                                    22
                                                }
                                                strokeWidth={
                                                    1.4
                                                }
                                            />

                                            <Typography
                                                sx={{
                                                    mt: 7,

                                                    maxWidth:
                                                        190,

                                                    color:
                                                        'rgba(255,255,255,0.86)',

                                                    fontWeight:
                                                        600,

                                                    lineHeight:
                                                        1.4,
                                                }}
                                            >
                                                {item}
                                            </Typography>
                                        </Box>
                                    </MotionDiv>
                                );
                            }
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default OemProductionSection;