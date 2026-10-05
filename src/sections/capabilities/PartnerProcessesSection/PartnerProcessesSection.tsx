import {
    useRef,
} from 'react';

import {
    Box,
    Typography,
} from '@mui/material';

import {
    ArrowRight,
    Check,
    Factory,
    Network,
    ShieldCheck,
} from 'lucide-react';

import {
    motion,
    useScroll,
    useTransform,
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

interface PartnerProcessTranslation {
    title: string;
    description: string;
    items: string[];
}

interface CoordinationStepTranslation {
    title: string;
    description: string;
}

/* =========================================================
   MOTION
========================================================= */

const MotionDiv = motion.div;
const MotionImg = motion.img;

/* =========================================================
   COMPONENT
========================================================= */

export function PartnerProcessesSection() {
    const { t } = useTranslation();

    const imageRef =
        useRef<HTMLDivElement | null>(null);

    const {
        id,
        image,
        groups,
        coordination,
    } = capabilitiesPageData.partnerProcesses;

    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const eyebrow = t(
        'capabilitiesPage.partnerProcesses.eyebrow'
    );

    const title = t(
        'capabilitiesPage.partnerProcesses.title'
    );

    const description = t(
        'capabilitiesPage.partnerProcesses.description'
    );

    const note = t(
        'capabilitiesPage.partnerProcesses.note'
    );

    const imageAlt = t(
        'capabilitiesPage.partnerProcesses.imageAlt'
    );

    const imageLabel = t(
        'capabilitiesPage.partnerProcesses.imageLabel'
    );

    /* =====================================================
       PARALLAX
    ===================================================== */

    const {
        scrollYProgress,
    } = useScroll({
        target: imageRef,

        offset: [
            'start end',
            'end start',
        ],
    });

    const imageY = useTransform(
        scrollYProgress,
        [0, 1],
        ['-7%', '7%']
    );

    const imageScale = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [1.1, 1.04, 1.1]
    );

    return (
        <Box
            component="section"
            id={id}
            sx={{
                position: 'relative',

                overflow: 'hidden',

                bgcolor: '#081B14',

                color: '#FFFFFF',

                py: {
                    xs: 10,
                    md: 14,
                    lg: 18,
                },
            }}
        >
            {/* =================================================
                BACKGROUND ATMOSPHERE
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    width: 700,
                    height: 700,

                    top: -350,
                    right: -250,

                    borderRadius: '50%',

                    background:
                        'radial-gradient(circle, rgba(43, 122, 88, 0.17) 0%, rgba(43, 122, 88, 0.04) 45%, transparent 70%)',

                    pointerEvents: 'none',
                }}
            />

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    width: 500,
                    height: 500,

                    left: -300,
                    bottom: 100,

                    borderRadius: '50%',

                    border:
                        '1px solid rgba(255,255,255,0.05)',

                    pointerEvents: 'none',
                }}
            />

            <Container>
                {/* =============================================
                    HEADER
                ============================================= */}

                <Box
                    sx={{
                        position: 'relative',

                        zIndex: 2,

                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',

                            lg:
                                'minmax(0, 1.15fr) minmax(340px, 0.55fr)',
                        },

                        gap: {
                            xs: 5,
                            lg: 12,
                        },

                        alignItems: 'end',

                        mb: {
                            xs: 8,
                            md: 11,
                        },
                    }}
                >
                    <MotionDiv
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
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.7,

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

                                    alignItems:
                                        'center',

                                    gap: 1.5,

                                    mb: 3,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 34,
                                        height: 2,

                                        bgcolor:
                                            'primary.light',
                                    }}
                                />

                                <Typography
                                    variant="overline"
                                    sx={{
                                        color:
                                            'primary.light',

                                        fontWeight: 700,

                                        letterSpacing:
                                            '0.16em',
                                    }}
                                >
                                    {eyebrow}
                                </Typography>
                            </Box>

                            <Typography
                                component="h2"
                                sx={{
                                    maxWidth: 850,

                                    fontSize: {
                                        xs: '2.7rem',
                                        sm: '3.5rem',
                                        md: '4.3rem',
                                        lg: '4.8rem',
                                    },

                                    fontWeight: 700,

                                    lineHeight: 0.98,

                                    letterSpacing:
                                        '-0.055em',
                                }}
                            >
                                {title}
                            </Typography>
                        </Box>
                    </MotionDiv>

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
                            duration: 0.7,
                            delay: 0.1,

                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    mb: 3,

                                    color:
                                        'rgba(255,255,255,0.68)',

                                    fontSize: {
                                        xs: '1rem',
                                        md: '1.05rem',
                                    },

                                    lineHeight: 1.85,
                                }}
                            >
                                {description}
                            </Typography>

                            <Box
                                sx={{
                                    display: 'flex',

                                    gap: 1.5,

                                    alignItems:
                                        'flex-start',

                                    pt: 3,

                                    borderTop:
                                        '1px solid rgba(255,255,255,0.13)',
                                }}
                            >
                                <ShieldCheck
                                    size={19}
                                    strokeWidth={1.5}
                                />

                                <Typography
                                    sx={{
                                        color:
                                            'rgba(255,255,255,0.52)',

                                        fontSize:
                                            '0.82rem',

                                        lineHeight: 1.7,
                                    }}
                                >
                                    {note}
                                </Typography>
                            </Box>
                        </Box>
                    </MotionDiv>
                </Box>

                {/* =============================================
                    LARGE PARALLAX IMAGE
                ============================================= */}

                <Box
                    ref={imageRef}
                    sx={{
                        position: 'relative',

                        zIndex: 2,

                        height: {
                            xs: 380,
                            sm: 480,
                            md: 600,
                            lg: 680,
                        },

                        overflow: 'hidden',

                        mb: {
                            xs: 0,
                            md: 0,
                        },

                        bgcolor: '#10251D',
                    }}
                >
                    <MotionImg
                        src={image}
                        alt={imageAlt}
                        draggable={false}
                        loading="lazy"
                        style={{
                            position: 'absolute',

                            top: '-10%',
                            left: 0,

                            width: '100%',
                            height: '120%',

                            objectFit: 'cover',

                            y: imageY,
                            scale: imageScale,

                            willChange:
                                'transform',
                        }}
                    />

                    <Box
                        aria-hidden="true"
                        sx={{
                            position: 'absolute',

                            inset: 0,

                            background:
                                'linear-gradient(180deg, rgba(3,15,10,0.05) 0%, rgba(3,15,10,0.14) 45%, rgba(3,15,10,0.80) 100%)',

                            pointerEvents: 'none',
                        }}
                    />

                    <Box
                        aria-hidden="true"
                        sx={{
                            position: 'absolute',

                            inset: 0,

                            background:
                                'linear-gradient(90deg, rgba(5,22,15,0.30) 0%, transparent 45%, rgba(5,22,15,0.12) 100%)',

                            pointerEvents: 'none',
                        }}
                    />

                    {/* IMAGE LABEL */}

                    <Box
                        sx={{
                            position: 'absolute',

                            left: {
                                xs: 22,
                                md: 38,
                            },

                            bottom: {
                                xs: 22,
                                md: 34,
                            },

                            display: 'flex',

                            alignItems: 'center',

                            gap: 1.3,

                            px: 2,
                            py: 1.2,

                            bgcolor:
                                'rgba(5,22,15,0.72)',

                            backdropFilter:
                                'blur(12px)',

                            border:
                                '1px solid rgba(255,255,255,0.12)',
                        }}
                    >
                        <Network
                            size={15}
                            strokeWidth={1.5}
                        />

                        <Typography
                            sx={{
                                fontSize: '0.7rem',

                                fontWeight: 700,

                                letterSpacing:
                                    '0.12em',

                                textTransform:
                                    'uppercase',
                            }}
                        >
                            {imageLabel}
                        </Typography>
                    </Box>
                </Box>

                {/* =============================================
                    PROCESS GROUPS
                ============================================= */}

                <Box
                    sx={{
                        position: 'relative',

                        zIndex: 3,

                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',

                            lg:
                                'repeat(2, minmax(0, 1fr))',
                        },

                        borderLeft:
                            '1px solid rgba(255,255,255,0.12)',

                        borderTop:
                            '1px solid rgba(255,255,255,0.12)',
                    }}
                >
                    {groups.map(
                        (group, index) => {
                            const Icon =
                                index === 0
                                    ? Factory
                                    : Network;

                            const groupTranslation =
                                t(
                                    `capabilitiesPage.partnerProcesses.groups.${group.key}`,
                                    {
                                        returnObjects:
                                            true,
                                    }
                                ) as PartnerProcessTranslation;

                            return (
                                <MotionDiv
                                    key={group.key}
                                    initial={{
                                        opacity: 0,
                                        y: 35,
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
                                            height:
                                                '100%',

                                            p: {
                                                xs: 3.5,
                                                md: 5,
                                                lg: 6,
                                            },

                                            borderRight:
                                                '1px solid rgba(255,255,255,0.12)',

                                            borderBottom:
                                                '1px solid rgba(255,255,255,0.12)',

                                            transition:
                                                'background-color 250ms ease',

                                            '&:hover':
                                                {
                                                    bgcolor:
                                                        'rgba(255,255,255,0.035)',
                                                },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 54,
                                                height: 54,

                                                display:
                                                    'grid',

                                                placeItems:
                                                    'center',

                                                mb: 5,

                                                border:
                                                    '1px solid rgba(255,255,255,0.16)',

                                                borderRadius:
                                                    '50%',

                                                color:
                                                    'primary.light',
                                            }}
                                        >
                                            <Icon
                                                size={
                                                    21
                                                }
                                                strokeWidth={
                                                    1.4
                                                }
                                            />
                                        </Box>

                                        <Typography
                                            component="h3"
                                            sx={{
                                                mb: 2,

                                                maxWidth:
                                                    480,

                                                fontSize:
                                                    {
                                                        xs: '1.7rem',
                                                        md: '2.1rem',
                                                    },

                                                fontWeight:
                                                    650,

                                                lineHeight:
                                                    1.1,

                                                letterSpacing:
                                                    '-0.035em',
                                            }}
                                        >
                                            {
                                                groupTranslation.title
                                            }
                                        </Typography>

                                        <Typography
                                            sx={{
                                                maxWidth:
                                                    520,

                                                mb: 5,

                                                color:
                                                    'rgba(255,255,255,0.58)',

                                                fontSize:
                                                    '0.95rem',

                                                lineHeight:
                                                    1.8,
                                            }}
                                        >
                                            {
                                                groupTranslation.description
                                            }
                                        </Typography>

                                        <Box
                                            sx={{
                                                display:
                                                    'grid',

                                                gridTemplateColumns:
                                                    {
                                                        xs: '1fr',
                                                        sm: 'repeat(2, minmax(0, 1fr))',
                                                    },

                                                gap: 1.4,
                                            }}
                                        >
                                            {groupTranslation.items.map(
                                                (
                                                    item
                                                ) => (
                                                    <Box
                                                        key={
                                                            item
                                                        }
                                                        sx={{
                                                            display:
                                                                'flex',

                                                            alignItems:
                                                                'center',

                                                            gap: 1.2,

                                                            minHeight:
                                                                46,

                                                            px: 1.5,

                                                            borderBottom:
                                                                '1px solid rgba(255,255,255,0.09)',
                                                        }}
                                                    >
                                                        <Check
                                                            size={
                                                                14
                                                            }
                                                            strokeWidth={
                                                                1.7
                                                            }
                                                            color="#78C79C"
                                                        />

                                                        <Typography
                                                            sx={{
                                                                color:
                                                                    'rgba(255,255,255,0.82)',

                                                                fontSize:
                                                                    '0.84rem',

                                                                lineHeight:
                                                                    1.5,
                                                            }}
                                                        >
                                                            {
                                                                item
                                                            }
                                                        </Typography>
                                                    </Box>
                                                )
                                            )}
                                        </Box>
                                    </Box>
                                </MotionDiv>
                            );
                        }
                    )}
                </Box>

                {/* =============================================
                    COORDINATION
                ============================================= */}

                <Box
                    sx={{
                        position: 'relative',

                        zIndex: 2,

                        mt: {
                            xs: 10,
                            md: 14,
                        },

                        pt: {
                            xs: 8,
                            md: 10,
                        },

                        borderTop:
                            '1px solid rgba(255,255,255,0.13)',
                    }}
                >
                    <Box
                        sx={{
                            display: 'grid',

                            gridTemplateColumns: {
                                xs: '1fr',

                                lg:
                                    'minmax(0, 0.8fr) minmax(0, 1.2fr)',
                            },

                            gap: {
                                xs: 6,
                                lg: 12,
                            },
                        }}
                    >
                        {/* LEFT */}

                        <Box>
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
                                    'capabilitiesPage.partnerProcesses.coordination.eyebrow'
                                )}
                            </Typography>

                            <Typography
                                component="h3"
                                sx={{
                                    maxWidth: 580,

                                    mb: 3,

                                    fontSize: {
                                        xs: '2.3rem',
                                        md: '3.2rem',
                                    },

                                    fontWeight: 650,

                                    lineHeight: 1,

                                    letterSpacing:
                                        '-0.045em',
                                }}
                            >
                                {t(
                                    'capabilitiesPage.partnerProcesses.coordination.title'
                                )}
                            </Typography>

                            <Typography
                                sx={{
                                    maxWidth: 520,

                                    color:
                                        'rgba(255,255,255,0.58)',

                                    lineHeight: 1.85,
                                }}
                            >
                                {t(
                                    'capabilitiesPage.partnerProcesses.coordination.description'
                                )}
                            </Typography>
                        </Box>

                        {/* RIGHT / FLOW */}

                        <Box>
                            {coordination.steps.map(
                                (
                                    stepKey,
                                    index
                                ) => {
                                    const step =
                                        t(
                                            `capabilitiesPage.partnerProcesses.coordination.steps.${stepKey}`,
                                            {
                                                returnObjects:
                                                    true,
                                            }
                                        ) as CoordinationStepTranslation;

                                    return (
                                        <MotionDiv
                                            key={
                                                stepKey
                                            }
                                            initial={{
                                                opacity: 0,
                                                x: 25,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.4,
                                            }}
                                            transition={{
                                                duration:
                                                    0.55,

                                                delay:
                                                    index *
                                                    0.06,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    position:
                                                        'relative',

                                                    display:
                                                        'grid',

                                                    gridTemplateColumns:
                                                        {
                                                            xs: '48px minmax(0, 1fr)',
                                                            md: '60px minmax(0, 1fr)',
                                                        },

                                                    gap: {
                                                        xs: 2,
                                                        md: 3,
                                                    },

                                                    py: {
                                                        xs: 3,
                                                        md: 3.5,
                                                    },

                                                    borderTop:
                                                        '1px solid rgba(255,255,255,0.12)',

                                                    '&:last-of-type':
                                                        {
                                                            borderBottom:
                                                                '1px solid rgba(255,255,255,0.12)',
                                                        },
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 42,
                                                        height: 42,

                                                        display:
                                                            'grid',

                                                        placeItems:
                                                            'center',

                                                        border:
                                                            '1px solid rgba(255,255,255,0.16)',

                                                        borderRadius:
                                                            '50%',

                                                        color:
                                                            'primary.light',
                                                    }}
                                                >
                                                    {index <
                                                    coordination
                                                        .steps
                                                        .length -
                                                        1 ? (
                                                        <ArrowRight
                                                            size={
                                                                16
                                                            }
                                                            strokeWidth={
                                                                1.4
                                                            }
                                                        />
                                                    ) : (
                                                        <Check
                                                            size={
                                                                16
                                                            }
                                                            strokeWidth={
                                                                1.5
                                                            }
                                                        />
                                                    )}
                                                </Box>

                                                <Box>
                                                    <Typography
                                                        component="h4"
                                                        sx={{
                                                            mb: 0.8,

                                                            fontSize:
                                                                '1.1rem',

                                                            fontWeight:
                                                                650,
                                                        }}
                                                    >
                                                        {
                                                            step.title
                                                        }
                                                    </Typography>

                                                    <Typography
                                                        sx={{
                                                            maxWidth:
                                                                520,

                                                            color:
                                                                'rgba(255,255,255,0.52)',

                                                            fontSize:
                                                                '0.88rem',

                                                            lineHeight:
                                                                1.65,
                                                        }}
                                                    >
                                                        {
                                                            step.description
                                                        }
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </MotionDiv>
                                    );
                                }
                            )}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}