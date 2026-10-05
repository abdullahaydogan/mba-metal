import {
    Box,
    Typography,
} from '@mui/material';

import {
    ArrowDown,
    CheckCircle2,
    ClipboardCheck,
    Factory,
    PackageCheck,
    Ruler,
    type LucideIcon,
} from 'lucide-react';

import { motion } from 'motion/react';

import { useTranslation } from 'react-i18next';

import { Container } from '../../../components/common/Container';

import {
    productionApproachData,
} from '../../../data/about/about.data';

const MotionBox = motion.create(Box);

/* -------------------------------------------------------------------------- */
/*                                   ICONS                                    */
/* -------------------------------------------------------------------------- */

const stepIcons: Record<
    string,
    LucideIcon
> = {
    technicalNeed: Ruler,
    projectPlanning: ClipboardCheck,
    production: Factory,
    qualityControl: CheckCircle2,
    shipment: PackageCheck,
};

/* -------------------------------------------------------------------------- */
/*                              COMPONENT                                     */
/* -------------------------------------------------------------------------- */

export function ProductionApproachSection() {
    const { t } = useTranslation();

    const { steps } =
        productionApproachData;

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',

                overflow: 'hidden',

                bgcolor: '#12221B',

                color: '#fff',

                py: {
                    xs: 10,
                    md: 15,
                    lg: 18,
                },
            }}
        >
            {/* ============================================================ */}
            {/* BACKGROUND DECORATION                                        */}
            {/* ============================================================ */}

            <Box
                sx={{
                    position: 'absolute',

                    top: -320,
                    right: -260,

                    width: 700,
                    height: 700,

                    borderRadius: '50%',

                    border:
                        '1px solid rgba(255,255,255,0.05)',

                    pointerEvents: 'none',
                }}
            />

            <Box
                sx={{
                    position: 'absolute',

                    top: -210,
                    right: -150,

                    width: 480,
                    height: 480,

                    borderRadius: '50%',

                    border:
                        '1px solid rgba(255,255,255,0.04)',

                    pointerEvents: 'none',
                }}
            />

            <Box
                sx={{
                    position: 'absolute',

                    left: -200,
                    bottom: -300,

                    width: 600,
                    height: 600,

                    borderRadius: '50%',

                    border:
                        '1px solid rgba(255,255,255,0.035)',

                    pointerEvents: 'none',
                }}
            />

            <Container>
                {/* ======================================================== */}
                {/* HEADER                                                   */}
                {/* ======================================================== */}

                <Box
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',
                            lg: '1.05fr 0.95fr',
                        },

                        columnGap: {
                            lg: 12,
                        },

                        rowGap: 5,

                        alignItems: 'end',
                    }}
                >
                    {/* LEFT */}

                    <MotionBox
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
                            amount: 0.35,
                        }}
                        transition={{
                            duration: 0.75,

                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                    >
                        {/* EYEBROW */}

                        <Box
                            sx={{
                                display: 'flex',

                                alignItems: 'center',

                                gap: 2,

                                mb: 4,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 34,

                                    height: '1px',

                                    bgcolor:
                                        'primary.light',
                                }}
                            />

                            <Typography
                                sx={{
                                    color:
                                        'primary.light',

                                    fontSize:
                                        '0.72rem',

                                    fontWeight: 700,

                                    letterSpacing:
                                        '0.22em',

                                    textTransform:
                                        'uppercase',
                                }}
                            >
                                {t(
                                    'aboutPage.productionApproach.eyebrow'
                                )}
                            </Typography>
                        </Box>

                        {/* TITLE */}

                        <Typography
                            component="h2"
                            sx={{
                                maxWidth: 760,

                                color: '#fff',

                                fontSize: {
                                    xs: '2.8rem',
                                    sm: '3.8rem',
                                    md: '4.6rem',
                                    lg: '5rem',
                                },

                                fontWeight: 650,

                                lineHeight: 0.96,

                                letterSpacing:
                                    '-0.06em',
                            }}
                        >
                            {t(
                                'aboutPage.productionApproach.title'
                            )}
                        </Typography>
                    </MotionBox>

                    {/* RIGHT */}

                    <MotionBox
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
                            amount: 0.35,
                        }}
                        transition={{
                            duration: 0.75,

                            delay: 0.08,

                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                        sx={{
                            position: 'relative',

                            pl: {
                                lg: 6,
                            },

                            '&::before': {
                                content: '""',

                                display: {
                                    xs: 'none',
                                    lg: 'block',
                                },

                                position:
                                    'absolute',

                                left: 0,
                                top: 2,
                                bottom: 2,

                                width: '1px',

                                bgcolor:
                                    'rgba(255,255,255,0.14)',
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                maxWidth: 580,

                                color:
                                    'rgba(255,255,255,0.62)',

                                fontSize: {
                                    xs: '1rem',
                                    md: '1.08rem',
                                },

                                lineHeight: 1.8,
                            }}
                        >
                            {t(
                                'aboutPage.productionApproach.description'
                            )}
                        </Typography>
                    </MotionBox>
                </Box>

                {/* ======================================================== */}
                {/* PROCESS                                                  */}
                {/* ======================================================== */}

                <Box
                    sx={{
                        position: 'relative',

                        mt: {
                            xs: 8,
                            md: 12,
                        },

                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'repeat(5, minmax(0, 1fr))',
                        },

                        borderTop: {
                            xs: 'none',
                            md:
                                '1px solid rgba(255,255,255,0.14)',
                        },

                        borderLeft: {
                            xs:
                                '1px solid rgba(255,255,255,0.14)',
                            md: 'none',
                        },
                    }}
                >
                    {steps.map(
                        (step, index) => {
                            const Icon =
                                stepIcons[
                                    step.id
                                ] ?? Ruler;

                            const stepNumber =
                                String(
                                    index + 1
                                ).padStart(
                                    2,
                                    '0'
                                );

                            const isLast =
                                index ===
                                steps.length - 1;

                            return (
                                <MotionBox
                                    key={
                                        step.id
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
                                        amount: 0.3,
                                    }}
                                    transition={{
                                        duration:
                                            0.65,

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
                                    sx={{
                                        position:
                                            'relative',

                                        minHeight: {
                                            xs: 260,
                                            md: 390,
                                        },

                                        p: {
                                            xs: 3.5,
                                            md: 3,
                                            lg: 4,
                                        },

                                        display:
                                            'flex',

                                        flexDirection:
                                            'column',

                                        justifyContent:
                                            'space-between',

                                        borderRight: {
                                            xs: 'none',

                                            md:
                                                !isLast
                                                    ? '1px solid rgba(255,255,255,0.14)'
                                                    : 'none',
                                        },

                                        borderBottom: {
                                            xs:
                                                !isLast
                                                    ? '1px solid rgba(255,255,255,0.14)'
                                                    : 'none',

                                            md: 'none',
                                        },

                                        transition:
                                            'background-color 250ms ease',

                                        '&:hover': {
                                            bgcolor:
                                                'rgba(255,255,255,0.045)',

                                            '& .process-icon':
                                                {
                                                    borderColor:
                                                        'rgba(255,255,255,0.35)',

                                                    bgcolor:
                                                        'rgba(255,255,255,0.06)',
                                                },

                                            '& .process-number':
                                                {
                                                    color:
                                                        'rgba(255,255,255,0.72)',
                                                },
                                        },
                                    }}
                                >
                                    {/* TOP */}

                                    <Box>
                                        <Box
                                            sx={{
                                                display:
                                                    'flex',

                                                alignItems:
                                                    'center',

                                                justifyContent:
                                                    'space-between',

                                                gap: 2,

                                                mb: {
                                                    xs: 7,
                                                    md: 10,
                                                },
                                            }}
                                        >
                                            <Box
                                                className="process-icon"
                                                sx={{
                                                    width: 52,
                                                    height: 52,

                                                    display:
                                                        'grid',

                                                    placeItems:
                                                        'center',

                                                    color:
                                                        '#fff',

                                                    border:
                                                        '1px solid rgba(255,255,255,0.18)',

                                                    borderRadius:
                                                        '50%',

                                                    transition:
                                                        'all 250ms ease',
                                                }}
                                            >
                                                <Icon
                                                    size={
                                                        20
                                                    }
                                                    strokeWidth={
                                                        1.5
                                                    }
                                                />
                                            </Box>

                                            <Typography
                                                className="process-number"
                                                sx={{
                                                    color:
                                                        'rgba(255,255,255,0.3)',

                                                    fontSize:
                                                        '0.75rem',

                                                    fontWeight:
                                                        700,

                                                    letterSpacing:
                                                        '0.16em',

                                                    transition:
                                                        'color 250ms ease',
                                                }}
                                            >
                                                {
                                                    stepNumber
                                                }
                                            </Typography>
                                        </Box>

                                        <Typography
                                            component="h3"
                                            sx={{
                                                mb: 2,

                                                color:
                                                    '#fff',

                                                fontSize:
                                                    {
                                                        xs: '1.55rem',
                                                        md: '1.45rem',
                                                        lg: '1.7rem',
                                                    },

                                                fontWeight:
                                                    550,

                                                lineHeight:
                                                    1.1,

                                                letterSpacing:
                                                    '-0.035em',
                                            }}
                                        >
                                            {t(
                                                `aboutPage.productionApproach.steps.${step.id}.title`
                                            )}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                color:
                                                    'rgba(255,255,255,0.52)',

                                                fontSize:
                                                    {
                                                        xs: '0.95rem',
                                                        md: '0.9rem',
                                                    },

                                                lineHeight:
                                                    1.75,
                                            }}
                                        >
                                            {t(
                                                `aboutPage.productionApproach.steps.${step.id}.description`
                                            )}
                                        </Typography>
                                    </Box>

                                    {/* BOTTOM */}

                                    {!isLast && (
                                        <Box
                                            sx={{
                                                mt: 5,

                                                display:
                                                    {
                                                        xs: 'none',
                                                        md: 'flex',
                                                    },

                                                justifyContent:
                                                    'flex-end',
                                            }}
                                        >
                                            <ArrowDown
                                                size={
                                                    18
                                                }
                                                strokeWidth={
                                                    1.4
                                                }
                                                style={{
                                                    transform:
                                                        'rotate(-90deg)',
                                                    opacity:
                                                        0.35,
                                                }}
                                            />
                                        </Box>
                                    )}
                                </MotionBox>
                            );
                        }
                    )}
                </Box>

                {/* ======================================================== */}
                {/* BOTTOM MESSAGE                                           */}
                {/* ======================================================== */}

                <MotionBox
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
                        amount: 0.4,
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
                    sx={{
                        mt: {
                            xs: 8,
                            md: 10,
                        },

                        pt: {
                            xs: 5,
                            md: 6,
                        },

                        borderTop:
                            '1px solid rgba(255,255,255,0.12)',

                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'auto 1fr',
                        },

                        alignItems: 'center',

                        gap: {
                            xs: 3,
                            md: 5,
                        },
                    }}
                >
                    <Box
                        sx={{
                            width: 54,
                            height: 54,

                            display: 'grid',

                            placeItems: 'center',

                            borderRadius: '50%',

                            border:
                                '1px solid rgba(255,255,255,0.18)',

                            color: '#fff',
                        }}
                    >
                        <CheckCircle2
                            size={21}
                            strokeWidth={1.5}
                        />
                    </Box>

                    <Typography
                        sx={{
                            maxWidth: 900,

                            color:
                                'rgba(255,255,255,0.72)',

                            fontSize: {
                                xs: '1rem',
                                md: '1.12rem',
                            },

                            lineHeight: 1.75,
                        }}
                    >
                        {t(
                            'aboutPage.productionApproach.bottomMessage'
                        )}
                    </Typography>
                </MotionBox>
            </Container>
        </Box>
    );
}

export default ProductionApproachSection;