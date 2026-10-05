import {
    Box,
    Typography,
} from '@mui/material';

import {
    ArrowRight,
    Check,
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
   TYPES
========================================================= */

interface ProjectFlowItemTranslation {
    title: string;
    description: string;
}

/* =========================================================
   MOTION
========================================================= */

const MotionDiv = motion.div;

/* =========================================================
   COMPONENT
========================================================= */

export function ProjectFlowSection() {
    const { t } = useTranslation();

    const {
        id,
        items,
    } = capabilitiesPageData.projectFlow;

    return (
        <Box
            component="section"
            id={id}
            sx={{
                position: 'relative',

                bgcolor: 'background.paper',

                py: {
                    xs: 10,
                    md: 14,
                    lg: 17,
                },

                scrollMarginTop: {
                    xs: 72,
                    md: 88,
                },

                overflow: 'hidden',
            }}
        >
            {/* =================================================
                BACKGROUND DECORATION
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    width: 520,
                    height: 520,

                    right: -300,
                    top: -260,

                    borderRadius: '50%',

                    border:
                        '1px solid rgba(20, 91, 65, 0.06)',

                    pointerEvents: 'none',

                    display: {
                        xs: 'none',
                        lg: 'block',
                    },
                }}
            />

            <Container>
                {/* =============================================
                    HEADER
                ============================================= */}

                <Box
                    sx={{
                        position: 'relative',

                        zIndex: 1,

                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',

                            lg:
                                'minmax(0, 1fr) minmax(300px, 0.65fr)',
                        },

                        gap: {
                            xs: 4,
                            lg: 10,
                        },

                        alignItems: 'end',

                        mb: {
                            xs: 7,
                            md: 10,
                        },
                    }}
                >
                    {/* =========================================
                        HEADER LEFT
                    ========================================= */}

                    <MotionDiv
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
                            duration: 0.65,

                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                    >
                        <Box>
                            <Box
                                sx={{
                                    display: 'flex',

                                    alignItems: 'center',

                                    gap: 1.5,

                                    mb: 3,
                                }}
                            >
                                <Box
                                    aria-hidden="true"
                                    sx={{
                                        width: 34,
                                        height: 2,

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
                                    {t(
                                        'capabilitiesPage.projectFlow.eyebrow'
                                    )}
                                </Typography>
                            </Box>

                            <Typography
                                component="h2"
                                sx={{
                                    maxWidth: 760,

                                    fontSize: {
                                        xs: '2.7rem',
                                        sm: '3.5rem',
                                        md: '4.3rem',
                                    },

                                    fontWeight: 700,

                                    lineHeight: 0.98,

                                    letterSpacing:
                                        '-0.055em',

                                    color:
                                        'text.primary',
                                }}
                            >
                                {t(
                                    'capabilitiesPage.projectFlow.title'
                                )}
                            </Typography>
                        </Box>
                    </MotionDiv>

                    {/* =========================================
                        HEADER RIGHT
                    ========================================= */}

                    <MotionDiv
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
                            duration: 0.65,

                            delay: 0.1,

                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                    >
                        <Typography
                            sx={{
                                maxWidth: 500,

                                color:
                                    'text.secondary',

                                fontSize: {
                                    xs: '1rem',
                                    md: '1.05rem',
                                },

                                lineHeight: 1.85,
                            }}
                        >
                            {t(
                                'capabilitiesPage.projectFlow.description'
                            )}
                        </Typography>
                    </MotionDiv>
                </Box>

                {/* =============================================
                    PROJECT FLOW
                ============================================= */}

                <Box
                    sx={{
                        position: 'relative',

                        zIndex: 1,

                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'repeat(2, minmax(0, 1fr))',
                            lg: `repeat(${items.length}, minmax(0, 1fr))`,
                        },

                        borderTop:
                            '1px solid',

                        borderBottom:
                            '1px solid',

                        borderColor:
                            'divider',
                    }}
                >
                    {items.map(
                        (item, index) => {
                            const Icon =
                                item.icon;

                            const translation =
                                t(
                                    `capabilitiesPage.projectFlow.items.${item.key}`,
                                    {
                                        returnObjects:
                                            true,
                                    }
                                ) as ProjectFlowItemTranslation;

                            const isLast =
                                index ===
                                items.length -
                                    1;

                            return (
                                <MotionDiv
                                    key={
                                        item.key
                                    }
                                    initial={{
                                        opacity: 0,
                                        y: 30,
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
                                        duration: 0.55,

                                        delay:
                                            index *
                                            0.08,

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
                                            position:
                                                'relative',

                                            height:
                                                '100%',

                                            minHeight: {
                                                xs: 270,
                                                md: 310,
                                                lg: 350,
                                            },

                                            display:
                                                'flex',

                                            flexDirection:
                                                'column',

                                            px: {
                                                xs: 0,
                                                md: 3,
                                                lg: 3.5,
                                            },

                                            py: {
                                                xs: 4,
                                                md: 5,
                                            },

                                            borderRight:
                                                {
                                                    xs: 'none',

                                                    lg:
                                                        !isLast
                                                            ? '1px solid'
                                                            : 'none',
                                                },

                                            borderBottom:
                                                {
                                                    xs:
                                                        !isLast
                                                            ? '1px solid'
                                                            : 'none',

                                                    lg: 'none',
                                                },

                                            borderColor:
                                                'divider',

                                            transition:
                                                'background-color 220ms ease',

                                            '&:hover':
                                                {
                                                    bgcolor:
                                                        'rgba(20, 91, 65, 0.035)',
                                                },

                                            '&:hover .project-flow-icon':
                                                {
                                                    bgcolor:
                                                        'primary.main',

                                                    color:
                                                        '#FFFFFF',
                                                },
                                        }}
                                    >
                                        {/* =============================
                                            NUMBER
                                        ============================= */}

                                        <Typography
                                            aria-hidden="true"
                                            sx={{
                                                position:
                                                    'absolute',

                                                top: {
                                                    xs: 20,
                                                    md: 24,
                                                },

                                                right: {
                                                    xs: 0,
                                                    md: 20,
                                                },

                                                color:
                                                    'rgba(20, 91, 65, 0.13)',

                                                fontSize:
                                                    '0.72rem',

                                                fontWeight:
                                                    700,

                                                letterSpacing:
                                                    '0.12em',
                                            }}
                                        >
                                            {String(
                                                index +
                                                    1
                                            ).padStart(
                                                2,
                                                '0'
                                            )}
                                        </Typography>

                                        {/* =============================
                                            ICON
                                        ============================= */}

                                        <Box
                                            className="project-flow-icon"
                                            sx={{
                                                width: 52,
                                                height: 52,

                                                display:
                                                    'grid',

                                                placeItems:
                                                    'center',

                                                mb: 5,

                                                border:
                                                    '1px solid',

                                                borderColor:
                                                    'primary.main',

                                                borderRadius:
                                                    '50%',

                                                color:
                                                    'primary.main',

                                                transition:
                                                    'background-color 220ms ease, color 220ms ease',
                                            }}
                                        >
                                            <Icon
                                                size={
                                                    21
                                                }
                                                strokeWidth={
                                                    1.5
                                                }
                                            />
                                        </Box>

                                        {/* =============================
                                            TITLE
                                        ============================= */}

                                        <Typography
                                            component="h3"
                                            sx={{
                                                mb: 2,

                                                maxWidth:
                                                    250,

                                                color:
                                                    'text.primary',

                                                fontSize:
                                                    {
                                                        xs: '1.4rem',
                                                        md: '1.55rem',
                                                    },

                                                fontWeight:
                                                    650,

                                                lineHeight:
                                                    1.15,

                                                letterSpacing:
                                                    '-0.03em',
                                            }}
                                        >
                                            {
                                                translation.title
                                            }
                                        </Typography>

                                        {/* =============================
                                            DESCRIPTION
                                        ============================= */}

                                        <Typography
                                            sx={{
                                                maxWidth:
                                                    270,

                                                color:
                                                    'text.secondary',

                                                fontSize:
                                                    '0.92rem',

                                                lineHeight:
                                                    1.75,
                                            }}
                                        >
                                            {
                                                translation.description
                                            }
                                        </Typography>

                                        {/* =============================
                                            STATUS
                                        ============================= */}

                                        <Box
                                            sx={{
                                                display:
                                                    'flex',

                                                alignItems:
                                                    'center',

                                                gap: 1,

                                                mt: 'auto',

                                                pt: 4,

                                                color:
                                                    'primary.main',
                                            }}
                                        >
                                            <Check
                                                size={
                                                    15
                                                }
                                                strokeWidth={
                                                    1.7
                                                }
                                            />

                                            <Typography
                                                sx={{
                                                    fontSize:
                                                        '0.7rem',

                                                    fontWeight:
                                                        700,

                                                    letterSpacing:
                                                        '0.08em',

                                                    textTransform:
                                                        'uppercase',
                                                }}
                                            >
                                                {t(
                                                    'capabilitiesPage.projectFlow.completedLabel'
                                                )}
                                            </Typography>
                                        </Box>

                                        {/* =============================
                                            CONNECTION ARROW
                                        ============================= */}

                                        {!isLast && (
                                            <Box
                                                aria-hidden="true"
                                                sx={{
                                                    display:
                                                        {
                                                            xs: 'none',
                                                            lg: 'grid',
                                                        },

                                                    placeItems:
                                                        'center',

                                                    position:
                                                        'absolute',

                                                    top: 65,

                                                    right: -15,

                                                    width: 30,
                                                    height: 30,

                                                    zIndex: 3,

                                                    bgcolor:
                                                        'background.paper',

                                                    border:
                                                        '1px solid',

                                                    borderColor:
                                                        'divider',

                                                    borderRadius:
                                                        '50%',
                                                }}
                                            >
                                                <ArrowRight
                                                    size={
                                                        14
                                                    }
                                                    strokeWidth={
                                                        1.5
                                                    }
                                                />
                                            </Box>
                                        )}
                                    </Box>
                                </MotionDiv>
                            );
                        }
                    )}
                </Box>
            </Container>
        </Box>
    );
}

export default ProjectFlowSection;