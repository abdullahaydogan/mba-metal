import {
    ArrowUpRight,
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
    IndustryApplication,
    IndustryDetail,
} from '../../../types/industry-detail.types';

/* =========================================================
   TYPES
========================================================= */

interface IndustryApplicationsSectionProps {
    industry: IndustryDetail;
}

interface ApplicationCardProps {
    application: IndustryApplication;
    variant:
        | 'hero'
        | 'standard'
        | 'horizontal'
        | 'compact';
    index: number;
}

/* =========================================================
   CARD
========================================================= */

function ApplicationCard({
    application,
    variant,
    index,
}: ApplicationCardProps) {
    const {
        t,
    } = useTranslation();

    const reduceMotion =
        useReducedMotion();

    const height = {
        hero: {
            xs: 420,
            md: 620,
        },

        standard: {
            xs: 360,
            md: 300,
        },

        horizontal: {
            xs: 360,
            md: 360,
        },

        compact: {
            xs: 360,
            md: 300,
        },
    }[variant];

    return (
        <Box
            component={motion.article}
            initial={
                reduceMotion
                    ? false
                    : {
                          opacity: 0,
                          y: 42,
                      }
            }
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.18,
            }}
            transition={{
                duration: 0.75,
                delay:
                    index * 0.07,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                ],
            }}
            sx={{
                position: 'relative',

                height,

                overflow: 'hidden',

                bgcolor: '#142119',

                isolation: 'isolate',

                cursor: 'default',

                '& .application-image': {
                    transform:
                        'scale(1.03)',

                    transition:
                        'transform 900ms cubic-bezier(0.22, 1, 0.36, 1)',
                },

                '& .application-overlay': {
                    opacity: 0.78,

                    transition:
                        'opacity 600ms ease',
                },

                '& .application-line': {
                    width: 34,

                    transition:
                        'width 500ms cubic-bezier(0.22, 1, 0.36, 1)',
                },

                '& .application-arrow': {
                    transform:
                        'translate(0, 0)',

                    transition:
                        'transform 450ms cubic-bezier(0.22, 1, 0.36, 1)',
                },

                '&:hover .application-image': {
                    transform:
                        'scale(1.09)',
                },

                '&:hover .application-overlay': {
                    opacity: 0.65,
                },

                '&:hover .application-line': {
                    width: 62,
                },

                '&:hover .application-arrow': {
                    transform:
                        'translate(4px, -4px)',
                },
            }}
        >
            {/* IMAGE */}

            <Box
                className="application-image"
                component="img"
                src={
                    application.image
                }
                alt={t(
                    application.titleKey
                )}
                sx={{
                    position: 'absolute',

                    inset: 0,

                    width: '100%',
                    height: '100%',

                    objectFit: 'cover',

                    zIndex: -3,
                }}
            />

            {/* DARK OVERLAY */}

            <Box
                className="application-overlay"
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    inset: 0,

                    zIndex: -2,

                    background: `
                        linear-gradient(
                            180deg,
                            rgba(7,15,11,0.12) 0%,
                            rgba(7,15,11,0.30) 38%,
                            rgba(7,15,11,0.94) 100%
                        )
                    `,
                }}
            />

            {/* GREEN AMBIENT LIGHT */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    width: 320,
                    height: 320,

                    right: -180,
                    top: -190,

                    borderRadius:
                        '50%',

                    background:
                        'radial-gradient(circle, rgba(69,181,125,0.25), transparent 68%)',

                    zIndex: -1,

                    pointerEvents:
                        'none',
                }}
            />

            {/* TOP TECHNICAL DETAIL */}

            <Box
                sx={{
                    position: 'absolute',

                    top: {
                        xs: 22,
                        md: 26,
                    },

                    left: {
                        xs: 22,
                        md: 28,
                    },

                    right: {
                        xs: 22,
                        md: 28,
                    },

                    display: 'flex',

                    alignItems:
                        'center',

                    justifyContent:
                        'space-between',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',

                        alignItems:
                            'center',

                        gap: 1.2,
                    }}
                >
                    <Box
                        sx={{
                            width: 6,
                            height: 6,

                            bgcolor:
                                '#65c493',
                        }}
                    />

                    <Typography
                        sx={{
                            color:
                                'rgba(255,255,255,0.72)',

                            fontSize:
                                '0.61rem',

                            fontWeight: 800,

                            letterSpacing:
                                '0.15em',

                            textTransform:
                                'uppercase',
                        }}
                    >
                        MBA METAL
                    </Typography>
                </Box>

                <Typography
                    aria-hidden="true"
                    sx={{
                        color:
                            'rgba(255,255,255,0.38)',

                        fontSize:
                            '0.6rem',

                        fontWeight: 700,

                        letterSpacing:
                            '0.14em',
                    }}
                >
                    APPLICATION
                </Typography>
            </Box>

            {/* CONTENT */}

            <Box
                sx={{
                    position: 'absolute',

                    left: {
                        xs: 22,
                        md: 30,
                    },

                    right: {
                        xs: 22,
                        md: 30,
                    },

                    bottom: {
                        xs: 24,
                        md: 30,
                    },
                }}
            >
                <Box
                    className="application-line"
                    sx={{
                        height: '2px',

                        bgcolor:
                            '#62c28f',

                        mb: 2.2,
                    }}
                />

                <Box
                    sx={{
                        display: 'flex',

                        alignItems:
                            'flex-start',

                        justifyContent:
                            'space-between',

                        gap: 3,
                    }}
                >
                    <Box
                        sx={{
                            maxWidth:
                                variant ===
                                'hero'
                                    ? 500
                                    : 390,
                        }}
                    >
                        <Typography
                            component="h3"
                            sx={{
                                color:
                                    '#ffffff',

                                fontSize: {
                                    xs:
                                        variant ===
                                        'hero'
                                            ? '1.8rem'
                                            : '1.45rem',

                                    md:
                                        variant ===
                                        'hero'
                                            ? '2.35rem'
                                            : '1.65rem',
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
                                application.titleKey
                            )}
                        </Typography>

                        <Typography
                            sx={{
                                mt: 1.6,

                                maxWidth:
                                    430,

                                color:
                                    'rgba(255,255,255,0.62)',

                                fontSize: {
                                    xs:
                                        '0.88rem',
                                    md:
                                        '0.92rem',
                                },

                                lineHeight:
                                    1.7,
                            }}
                        >
                            {t(
                                application.descriptionKey
                            )}
                        </Typography>
                    </Box>

                    <Box
                        className="application-arrow"
                        sx={{
                            flexShrink: 0,

                            mt: 0.4,

                            width: 38,
                            height: 38,

                            display:
                                'grid',

                            placeItems:
                                'center',

                            border:
                                '1px solid rgba(255,255,255,0.24)',

                            color:
                                '#ffffff',

                            backdropFilter:
                                'blur(8px)',

                            bgcolor:
                                'rgba(255,255,255,0.04)',
                        }}
                    >
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
    );
}

/* =========================================================
   SECTION
========================================================= */

export function IndustryApplicationsSection({
    industry,
}: IndustryApplicationsSectionProps) {
    const {
        t,
    } = useTranslation();

    const reduceMotion =
        useReducedMotion();

    const baseKey =
        industry.translationKey;

    const applications =
        industry.applications;

    const [
        firstApplication,
        secondApplication,
        thirdApplication,
        fourthApplication,
    ] = applications;

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',

                overflow: 'hidden',

                bgcolor: '#0b1510',

                color: '#ffffff',

                py: {
                    xs: 10,
                    md: 13,
                    lg: 16,
                },
            }}
        >
            {/* =================================================
                TECHNICAL BACKGROUND GRID
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    inset: 0,

                    pointerEvents:
                        'none',

                    opacity: 0.5,

                    backgroundImage: `
                        linear-gradient(
                            rgba(255,255,255,0.026) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(255,255,255,0.026) 1px,
                            transparent 1px
                        )
                    `,

                    backgroundSize:
                        '78px 78px',

                    maskImage:
                        'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
                }}
            />

            {/* =================================================
                AMBIENT LIGHT
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    width: 900,
                    height: 900,

                    right: -520,
                    top: -500,

                    borderRadius:
                        '50%',

                    background:
                        'radial-gradient(circle, rgba(57,160,105,0.16), transparent 68%)',

                    pointerEvents:
                        'none',
                }}
            />

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    width: 650,
                    height: 650,

                    left: -420,
                    bottom: -420,

                    borderRadius:
                        '50%',

                    background:
                        'radial-gradient(circle, rgba(38,120,77,0.10), transparent 70%)',

                    pointerEvents:
                        'none',
                }}
            />

            {/* =================================================
                LARGE INDUSTRY TYPOGRAPHY
            ================================================= */}

            <Typography
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    right: {
                        md: -30,
                        lg: -50,
                    },

                    top: {
                        md: 120,
                        lg: 90,
                    },

                    display: {
                        xs: 'none',
                        md: 'block',
                    },

                    color:
                        'rgba(255,255,255,0.022)',

                    fontSize: {
                        md: '8rem',
                        lg: '11rem',
                    },

                    lineHeight:
                        0.82,

                    fontWeight: 800,

                    letterSpacing:
                        '-0.075em',

                    writingMode:
                        'vertical-rl',

                    userSelect:
                        'none',

                    pointerEvents:
                        'none',

                    textTransform:
                        'uppercase',
                }}
            >
                {t(
                    `${baseKey}.name`
                )}
            </Typography>

            <Container>
                <Box
                    sx={{
                        position:
                            'relative',

                        zIndex: 2,
                    }}
                >
                    {/* =================================================
                        HEADER
                    ================================================= */}

                    <Box
                        sx={{
                            display:
                                'grid',

                            gridTemplateColumns: {
                                xs: '1fr',

                                lg:
                                    'minmax(0,1fr) minmax(360px,0.65fr)',
                            },

                            gap: {
                                xs: 3,
                                lg: 10,
                            },

                            alignItems:
                                'end',

                            mb: {
                                xs: 7,
                                md: 9,
                                lg: 11,
                            },
                        }}
                    >
                        {/* LEFT */}

                        <Box>
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
                                            '#65c493',
                                    }}
                                />

                                <Typography
                                    sx={{
                                        color:
                                            '#65c493',

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
                                        `${baseKey}.applicationsSection.eyebrow`
                                    )}
                                </Typography>
                            </Box>

                            <Typography
                                component={
                                    motion.h2
                                }
                                initial={
                                    reduceMotion
                                        ? false
                                        : {
                                              opacity: 0,
                                              y: 34,
                                          }
                                }
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.35,
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

                                    maxWidth:
                                        800,

                                    color:
                                        '#ffffff',

                                    fontSize: {
                                        xs:
                                            '2.7rem',

                                        sm:
                                            '3.4rem',

                                        md:
                                            '4.2rem',

                                        lg:
                                            '4.7rem',
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
                                    `${baseKey}.applicationsSection.title`
                                )}
                            </Typography>
                        </Box>

                        {/* RIGHT */}

                        <Typography
                            component={
                                motion.p
                            }
                            initial={
                                reduceMotion
                                    ? false
                                    : {
                                          opacity: 0,
                                          y: 25,
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
                                m: 0,

                                maxWidth:
                                    500,

                                justifySelf: {
                                    lg: 'end',
                                },

                                color:
                                    'rgba(255,255,255,0.57)',

                                fontSize: {
                                    xs:
                                        '0.96rem',

                                    md:
                                        '1rem',
                                },

                                lineHeight:
                                    1.85,
                            }}
                        >
                            {t(
                                `${baseKey}.applicationsSection.description`
                            )}
                        </Typography>
                    </Box>

                    {/* =================================================
                        MOSAIC
                    ================================================= */}

                    <Box
                        sx={{
                            display:
                                'grid',

                            gridTemplateColumns: {
                                xs: '1fr',

                                md:
                                    'minmax(0,1.08fr) minmax(0,0.92fr)',
                            },

                            gap: {
                                xs: 2,
                                md: 2.2,
                            },
                        }}
                    >
                        {/* LARGE LEFT */}

                        {firstApplication && (
                            <ApplicationCard
                                application={
                                    firstApplication
                                }
                                variant="hero"
                                index={0}
                            />
                        )}

                        {/* RIGHT STACK */}

                        <Box
                            sx={{
                                display:
                                    'grid',

                                gridTemplateRows: {
                                    xs: 'auto',

                                    md:
                                        '1fr 1fr',
                                },

                                gap: {
                                    xs: 2,
                                    md: 2.2,
                                },
                            }}
                        >
                            {secondApplication && (
                                <ApplicationCard
                                    application={
                                        secondApplication
                                    }
                                    variant="standard"
                                    index={1}
                                />
                            )}

                            {thirdApplication && (
                                <ApplicationCard
                                    application={
                                        thirdApplication
                                    }
                                    variant="standard"
                                    index={2}
                                />
                            )}
                        </Box>
                    </Box>

                    {/* FOURTH / WIDE */}

                    {fourthApplication && (
                        <Box
                            sx={{
                                mt: {
                                    xs: 2,
                                    md: 2.2,
                                },

                                display:
                                    'grid',

                                gridTemplateColumns: {
                                    xs: '1fr',

                                    lg:
                                        '0.36fr 0.64fr',
                                },

                                gap: {
                                    xs: 2,
                                    md: 2.2,
                                },
                            }}
                        >
                            {/* TECHNICAL STATEMENT */}

                            <Box
                                component={
                                    motion.div
                                }
                                initial={
                                    reduceMotion
                                        ? false
                                        : {
                                              opacity: 0,
                                              x: -25,
                                          }
                                }
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.3,
                                }}
                                transition={{
                                    duration: 0.7,
                                }}
                                sx={{
                                    minHeight: {
                                        xs: 250,
                                        lg: 360,
                                    },

                                    display:
                                        'flex',

                                    flexDirection:
                                        'column',

                                    justifyContent:
                                        'space-between',

                                    p: {
                                        xs: 3,
                                        md: 4,
                                        lg: 4.5,
                                    },

                                    border:
                                        '1px solid rgba(255,255,255,0.10)',

                                    bgcolor:
                                        'rgba(255,255,255,0.025)',

                                    backdropFilter:
                                        'blur(10px)',
                                }}
                            >
                                <Box
                                    sx={{
                                        display:
                                            'flex',

                                        alignItems:
                                            'center',

                                        gap: 1.2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 7,
                                            height: 7,

                                            bgcolor:
                                                '#65c493',
                                        }}
                                    />

                                    <Typography
                                        sx={{
                                            color:
                                                '#65c493',

                                            fontSize:
                                                '0.62rem',

                                            fontWeight:
                                                800,

                                            letterSpacing:
                                                '0.17em',

                                            textTransform:
                                                'uppercase',
                                        }}
                                    >
                                        {t(
                                            `${baseKey}.applicationsSection.noteLabel`
                                        )}
                                    </Typography>
                                </Box>

                                <Typography
                                    sx={{
                                        mt: 5,

                                        maxWidth:
                                            430,

                                        color:
                                            'rgba(255,255,255,0.72)',

                                        fontSize: {
                                            xs:
                                                '1.1rem',

                                            md:
                                                '1.25rem',
                                        },

                                        lineHeight:
                                            1.65,

                                        letterSpacing:
                                            '-0.015em',
                                    }}
                                >
                                    {t(
                                        `${baseKey}.applicationsSection.note`
                                    )}
                                </Typography>

                                <Box
                                    sx={{
                                        mt: 5,

                                        width: 42,

                                        height:
                                            '1px',

                                        bgcolor:
                                            'rgba(101,196,147,0.8)',
                                    }}
                                />
                            </Box>

                            <ApplicationCard
                                application={
                                    fourthApplication
                                }
                                variant="horizontal"
                                index={3}
                            />
                        </Box>
                    )}
                </Box>
            </Container>
        </Box>
    );
}