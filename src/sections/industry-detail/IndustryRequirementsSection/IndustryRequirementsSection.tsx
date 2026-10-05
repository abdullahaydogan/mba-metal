import {
    CheckCircle2,
    Crosshair,
    RefreshCw,
    Settings2,
    type LucideIcon,
} from 'lucide-react';

import {
    Box,
    Typography,
} from '@mui/material';

import {
    motion,
    useReducedMotion,
} from 'motion/react';

import {
    useTranslation,
} from 'react-i18next';

import {
    Container,
} from '../../../components/common/Container';

import type {
    IndustryDetail,
    IndustryRequirement,
} from '../../../types/industry-detail.types';

/* =========================================================
   TYPES
========================================================= */

interface IndustryRequirementsSectionProps {
    industry: IndustryDetail;
}

interface RequirementItemProps {
    requirement: IndustryRequirement;
    icon: LucideIcon;
    index: number;
}

/* =========================================================
   ICONS
========================================================= */

const requirementIcons: LucideIcon[] = [
    RefreshCw,
    Crosshair,
    Settings2,
    CheckCircle2,
];

/* =========================================================
   REQUIREMENT ITEM
========================================================= */

function RequirementItem({
    requirement,
    icon: Icon,
    index,
}: RequirementItemProps) {
    const { t } =
        useTranslation();

    const reduceMotion =
        useReducedMotion();

    return (
        <Box
            component={motion.article}
            initial={
                reduceMotion
                    ? false
                    : {
                          opacity: 0,
                          x: 38,
                      }
            }
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{
                once: true,
                amount: 0.35,
            }}
            transition={{
                duration: 0.7,
                delay: index * 0.08,
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
                    xs: 6.5,
                    md: 8,
                },

                pb: {
                    xs: 6,
                    md: 7,
                },

                '&:last-of-type': {
                    pb: 0,
                },

                '& .requirement-icon': {
                    color: '#247653',

                    bgcolor: '#f4f7f5',

                    borderColor:
                        'rgba(31,111,76,0.22)',

                    transition:
                        'all 350ms ease',
                },

                '& .requirement-title': {
                    transition:
                        'color 350ms ease, transform 350ms ease',
                },

                '& .requirement-description': {
                    transition:
                        'transform 350ms ease',
                },

                '& .requirement-rule': {
                    width: 32,

                    transition:
                        'width 400ms cubic-bezier(0.22,1,0.36,1)',
                },

                '&:hover .requirement-icon': {
                    color: '#ffffff',

                    bgcolor: '#1f704d',

                    borderColor:
                        '#1f704d',

                    transform:
                        'scale(1.06)',
                },

                '&:hover .requirement-title': {
                    color: '#1d6c4b',

                    transform:
                        'translateX(5px)',
                },

                '&:hover .requirement-description': {
                    transform:
                        'translateX(5px)',
                },

                '&:hover .requirement-rule': {
                    width: 64,
                },
            }}
        >
            {/* =============================================
                TIMELINE ICON
            ============================================= */}

            <Box
                className="requirement-icon"
                sx={{
                    position: 'absolute',

                    left: {
                        xs: 0,
                        md: 2,
                    },

                    top: 0,

                    zIndex: 3,

                    width: {
                        xs: 42,
                        md: 48,
                    },

                    height: {
                        xs: 42,
                        md: 48,
                    },

                    display: 'grid',

                    placeItems: 'center',

                    border:
                        '1px solid',

                    borderRadius:
                        '50%',

                    boxShadow:
                        '0 0 0 8px #f3f6f4',
                }}
            >
                <Icon
                    size={19}
                    strokeWidth={1.7}
                />
            </Box>

            {/* =============================================
                CONTENT
            ============================================= */}

            <Box
                sx={{
                    pt: 0.25,

                    borderBottom:
                        index < 3
                            ? '1px solid rgba(18,68,46,0.11)'
                            : 'none',

                    pb: {
                        xs: 5,
                        md: 6,
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',

                        alignItems:
                            'center',

                        gap: 1.5,

                        mb: 1.8,
                    }}
                >
                    <Box
                        className="requirement-rule"
                        sx={{
                            height: '1px',

                            bgcolor:
                                '#31835f',
                        }}
                    />

                    <Typography
                        sx={{
                            color:
                                '#708078',

                            fontSize:
                                '0.59rem',

                            fontWeight:
                                800,

                            letterSpacing:
                                '0.16em',

                            textTransform:
                                'uppercase',
                        }}
                    >
                        TECHNICAL REQUIREMENT
                    </Typography>
                </Box>

                <Typography
                    className="requirement-title"
                    component="h3"
                    sx={{
                        color:
                            '#111914',

                        fontSize: {
                            xs: '1.65rem',
                            md: '2rem',
                        },

                        lineHeight:
                            1.08,

                        fontWeight:
                            500,

                        letterSpacing:
                            '-0.035em',
                    }}
                >
                    {t(
                        requirement.titleKey
                    )}
                </Typography>

                <Typography
                    className="requirement-description"
                    sx={{
                        mt: 1.6,

                        maxWidth: 570,

                        color:
                            '#65716b',

                        fontSize: {
                            xs: '0.92rem',
                            md: '0.98rem',
                        },

                        lineHeight:
                            1.8,
                    }}
                >
                    {t(
                        requirement.descriptionKey
                    )}
                </Typography>
            </Box>
        </Box>
    );
}

/* =========================================================
   SECTION
========================================================= */

export function IndustryRequirementsSection({
    industry,
}: IndustryRequirementsSectionProps) {
    const { t } =
        useTranslation();

    const reduceMotion =
        useReducedMotion();

    const baseKey =
        industry.translationKey;

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',

                overflow: 'hidden',

                bgcolor: '#f3f6f4',

                color: '#101713',

                py: {
                    xs: 10,
                    md: 13,
                    lg: 16,
                },

                borderTop:
                    '1px solid rgba(15,55,38,0.07)',

                borderBottom:
                    '1px solid rgba(15,55,38,0.07)',
            }}
        >
            {/* =================================================
                BACKGROUND GRID
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    inset: 0,

                    pointerEvents:
                        'none',

                    opacity: 0.52,

                    backgroundImage: `
                        linear-gradient(
                            rgba(20,75,51,0.032) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(20,75,51,0.032) 1px,
                            transparent 1px
                        )
                    `,

                    backgroundSize:
                        '76px 76px',

                    maskImage:
                        'linear-gradient(to right, black 0%, transparent 90%)',
                }}
            />

            {/* =================================================
                AMBIENT LIGHT
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    width: 760,
                    height: 760,

                    left: -450,
                    bottom: -450,

                    borderRadius:
                        '50%',

                    background:
                        'radial-gradient(circle, rgba(45,139,98,0.12), transparent 68%)',

                    pointerEvents:
                        'none',
                }}
            />

            {/* =================================================
                LARGE TYPOGRAPHY
            ================================================= */}

            <Typography
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    right: {
                        md: -40,
                        lg: -70,
                    },

                    top: {
                        md: 80,
                        lg: 50,
                    },

                    display: {
                        xs: 'none',
                        md: 'block',
                    },

                    color:
                        'rgba(25,102,69,0.025)',

                    fontSize: {
                        md: '8rem',
                        lg: '12rem',
                        xl: '14rem',
                    },

                    fontWeight: 800,

                    lineHeight: 0.8,

                    letterSpacing:
                        '-0.075em',

                    userSelect: 'none',

                    pointerEvents:
                        'none',
                }}
            >
                CONTROL
            </Typography>

            <Container>
                <Box
                    sx={{
                        position:
                            'relative',

                        zIndex: 2,

                        display:
                            'grid',

                        gridTemplateColumns: {
                            xs: '1fr',

                            lg:
                                'minmax(0,0.82fr) minmax(500px,1.18fr)',
                        },

                        gap: {
                            xs: 8,
                            md: 10,
                            lg: 13,
                        },

                        alignItems:
                            'start',
                    }}
                >
                    {/* =================================================
                        LEFT / STICKY CONTENT
                    ================================================= */}

                    <Box
                        sx={{
                            position: {
                                lg: 'sticky',
                            },

                            top: {
                                lg: 150,
                            },
                        }}
                    >
                        {/* EYEBROW */}

                        <Box
                            component={
                                motion.div
                            }
                            initial={
                                reduceMotion
                                    ? false
                                    : {
                                          opacity: 0,
                                          x: -22,
                                      }
                            }
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.6,
                            }}
                            transition={{
                                duration: 0.6,
                            }}
                            sx={{
                                display:
                                    'flex',

                                alignItems:
                                    'center',

                                gap: 1.5,

                                mb: 2.5,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 36,

                                    height:
                                        '1px',

                                    bgcolor:
                                        '#21734f',
                                }}
                            />

                            <Typography
                                sx={{
                                    color:
                                        '#21734f',

                                    fontSize:
                                        '0.66rem',

                                    fontWeight:
                                        800,

                                    letterSpacing:
                                        '0.18em',

                                    textTransform:
                                        'uppercase',
                                }}
                            >
                                {t(
                                    `${baseKey}.requirementsSection.eyebrow`
                                )}
                            </Typography>
                        </Box>

                        {/* TITLE */}

                        <Typography
                            component={
                                motion.h2
                            }
                            initial={
                                reduceMotion
                                    ? false
                                    : {
                                          opacity: 0,
                                          y: 32,
                                      }
                            }
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}
                            transition={{
                                duration: 0.8,

                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1,
                                ],
                            }}
                            sx={{
                                m: 0,

                                maxWidth: 650,

                                color:
                                    '#101713',

                                fontSize: {
                                    xs: '2.7rem',
                                    sm: '3.35rem',
                                    md: '4rem',
                                    lg: '4.45rem',
                                },

                                lineHeight:
                                    0.99,

                                fontWeight:
                                    500,

                                letterSpacing:
                                    '-0.055em',
                            }}
                        >
                            {t(
                                `${baseKey}.requirementsSection.title`
                            )}
                        </Typography>

                        {/* DESCRIPTION */}

                        <Typography
                            component={
                                motion.p
                            }
                            initial={
                                reduceMotion
                                    ? false
                                    : {
                                          opacity: 0,
                                          y: 20,
                                      }
                            }
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.5,
                            }}
                            transition={{
                                duration: 0.7,

                                delay: 0.1,
                            }}
                            sx={{
                                mt: 3.5,

                                maxWidth: 520,

                                color:
                                    '#65716b',

                                fontSize: {
                                    xs: '0.96rem',
                                    md: '1rem',
                                },

                                lineHeight:
                                    1.85,
                            }}
                        >
                            {t(
                                `${baseKey}.requirementsSection.description`
                            )}
                        </Typography>

                        {/* =============================================
                            STATEMENT
                        ============================================= */}

                        <Box
                            component={
                                motion.div
                            }
                            initial={
                                reduceMotion
                                    ? false
                                    : {
                                          opacity: 0,
                                          y: 30,
                                      }
                            }
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.4,
                            }}
                            transition={{
                                duration: 0.75,

                                delay: 0.15,
                            }}
                            sx={{
                                position:
                                    'relative',

                                mt: {
                                    xs: 5,
                                    md: 6,
                                },

                                maxWidth: 520,

                                p: {
                                    xs: 3,
                                    md: 3.5,
                                },

                                border:
                                    '1px solid rgba(29,108,75,0.14)',

                                bgcolor:
                                    'rgba(255,255,255,0.58)',

                                backdropFilter:
                                    'blur(10px)',

                                boxShadow:
                                    '0 22px 60px rgba(20,61,43,0.055)',

                                overflow:
                                    'hidden',
                            }}
                        >
                            {/* LEFT ACCENT */}

                            <Box
                                aria-hidden="true"
                                sx={{
                                    position:
                                        'absolute',

                                    left: 0,
                                    top: 0,
                                    bottom: 0,

                                    width: 3,

                                    bgcolor:
                                        '#247653',
                                }}
                            />

                            <Box
                                sx={{
                                    display:
                                        'flex',

                                    alignItems:
                                        'center',

                                    gap: 1.2,

                                    mb: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 7,
                                        height: 7,

                                        bgcolor:
                                            '#247653',
                                    }}
                                />

                                <Typography
                                    sx={{
                                        color:
                                            '#247653',

                                        fontSize:
                                            '0.61rem',

                                        fontWeight:
                                            800,

                                        letterSpacing:
                                            '0.17em',

                                        textTransform:
                                            'uppercase',
                                    }}
                                >
                                    {t(
                                        `${baseKey}.requirementsSection.statementLabel`
                                    )}
                                </Typography>
                            </Box>

                            <Typography
                                sx={{
                                    color:
                                        '#39463f',

                                    fontSize: {
                                        xs: '0.93rem',
                                        md: '0.98rem',
                                    },

                                    lineHeight:
                                        1.8,
                                }}
                            >
                                {t(
                                    `${baseKey}.requirementsSection.statement`
                                )}
                            </Typography>
                        </Box>
                    </Box>

                    {/* =================================================
                        RIGHT / TECHNICAL TIMELINE
                    ================================================= */}

                    <Box
                        sx={{
                            position:
                                'relative',

                            pt: {
                                lg: 2,
                            },

                            '&::before': {
                                content:
                                    '""',

                                position:
                                    'absolute',

                                left: {
                                    xs: 20,
                                    md: 39,
                                },

                                top: 23,

                                bottom: 28,

                                width: '1px',

                                background:
                                    'linear-gradient(to bottom, #2b7d59 0%, rgba(43,125,89,0.12) 100%)',
                            },
                        }}
                    >
                        {industry.requirements.map(
                            (
                                requirement,
                                index
                            ) => {
                                const Icon =
                                    requirementIcons[
                                        index %
                                            requirementIcons.length
                                    ];

                                return (
                                    <RequirementItem
                                        key={
                                            requirement.titleKey
                                        }
                                        requirement={
                                            requirement
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
                </Box>
            </Container>
        </Box>
    );
}