import {
    ArrowRight,
    CircleDot,
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
    IndustryProductionItem,
} from '../../../types/industry-detail.types';

/* =========================================================
   TYPES
========================================================= */

interface IndustryProductionSectionProps {
    industry: IndustryDetail;
}

interface ProductionRowProps {
    item: IndustryProductionItem;
    index: number;
    baseKey: string;
    isLast: boolean;
}

/* =========================================================
   PRODUCTION ROW
========================================================= */

function ProductionRow({
    item,
    index,
    baseKey,
    isLast,
}: ProductionRowProps) {
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
                          y: 28,
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
                duration: 0.65,
                delay: index * 0.07,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                ],
            }}
            sx={{
                position: 'relative',

                display: {
                    xs: 'block',
                    md: 'grid',
                },

                gridTemplateColumns:
                    'minmax(0,0.8fr) minmax(180px,0.4fr) minmax(0,0.8fr)',

                alignItems:
                    'stretch',

                minHeight: {
                    md: 142,
                },

                borderBottom:
                    isLast
                        ? 'none'
                        : '1px solid rgba(25,80,55,0.12)',

                '& .production-node': {
                    transition:
                        'all 350ms cubic-bezier(0.22,1,0.36,1)',
                },

                '& .production-line': {
                    transform:
                        'scaleX(0.45)',

                    transformOrigin:
                        'left center',

                    transition:
                        'transform 550ms cubic-bezier(0.22,1,0.36,1)',
                },

                '& .production-arrow': {
                    transform:
                        'translateX(0)',

                    transition:
                        'transform 400ms cubic-bezier(0.22,1,0.36,1)',
                },

                '& .production-solution': {
                    transition:
                        'transform 400ms cubic-bezier(0.22,1,0.36,1), color 300ms ease',
                },

                '& .production-need': {
                    transition:
                        'transform 400ms cubic-bezier(0.22,1,0.36,1)',
                },

                '&:hover .production-node': {
                    bgcolor:
                        '#216b4b',

                    color:
                        '#ffffff',

                    borderColor:
                        '#216b4b',

                    transform:
                        'scale(1.08)',

                    boxShadow:
                        '0 0 0 8px rgba(33,107,75,0.08)',
                },

                '&:hover .production-line': {
                    transform:
                        'scaleX(1)',
                },

                '&:hover .production-arrow': {
                    transform:
                        'translateX(5px)',
                },

                '&:hover .production-solution': {
                    transform:
                        'translateX(5px)',

                    color:
                        '#195d41',
                },

                '&:hover .production-need': {
                    transform:
                        'translateX(-3px)',
                },
            }}
        >
            {/* =================================================
                NEED
            ================================================= */}

            <Box
                sx={{
                    display: 'flex',

                    flexDirection:
                        'column',

                    justifyContent:
                        'center',

                    py: {
                        xs: 3,
                        md: 4,
                    },

                    pr: {
                        md: 5,
                    },
                }}
            >
                <Typography
                    sx={{
                        display: {
                            xs: 'block',
                            md: 'none',
                        },

                        mb: 1,

                        color:
                            '#277451',

                        fontSize:
                            '0.58rem',

                        fontWeight: 800,

                        letterSpacing:
                            '0.16em',

                        textTransform:
                            'uppercase',
                    }}
                >
                    {t(
                        `${baseKey}.productionSection.needLabel`
                    )}
                </Typography>

                <Typography
                    className="production-need"
                    sx={{
                        maxWidth: 390,

                        color:
                            '#17211b',

                        fontSize: {
                            xs: '1.3rem',
                            md: '1.5rem',
                        },

                        lineHeight: 1.25,

                        fontWeight: 500,

                        letterSpacing:
                            '-0.025em',
                    }}
                >
                    {t(
                        item.needKey
                    )}
                </Typography>
            </Box>

            {/* =================================================
                ROUTING
            ================================================= */}

            <Box
                sx={{
                    position: 'relative',

                    display: {
                        xs: 'none',
                        md: 'flex',
                    },

                    alignItems:
                        'center',

                    justifyContent:
                        'center',
                }}
            >
                {/* VERTICAL BACKBONE */}

                {!isLast && (
                    <Box
                        aria-hidden="true"
                        sx={{
                            position:
                                'absolute',

                            left: '50%',

                            top: '50%',

                            bottom: -72,

                            width: '1px',

                            bgcolor:
                                'rgba(33,107,75,0.16)',

                            transform:
                                'translateX(-50%)',

                            zIndex: 0,
                        }}
                    />
                )}

                {/* LEFT CONNECTION */}

                <Box
                    aria-hidden="true"
                    sx={{
                        position:
                            'absolute',

                        left: 0,

                        right: '50%',

                        top: '50%',

                        height: '1px',

                        bgcolor:
                            'rgba(33,107,75,0.15)',
                    }}
                />

                {/* ACTIVE LINE */}

                <Box
                    className="production-line"
                    aria-hidden="true"
                    sx={{
                        position:
                            'absolute',

                        left: 0,

                        right: '50%',

                        top: '50%',

                        height: '1px',

                        bgcolor:
                            '#2b805a',

                        zIndex: 1,
                    }}
                />

                {/* RIGHT CONNECTION */}

                <Box
                    aria-hidden="true"
                    sx={{
                        position:
                            'absolute',

                        left: '50%',

                        right: 0,

                        top: '50%',

                        height: '1px',

                        background:
                            'linear-gradient(to right, #2b805a, rgba(43,128,90,0.15))',
                    }}
                />

                {/* NODE */}

                <Box
                    className="production-node"
                    sx={{
                        position:
                            'relative',

                        zIndex: 3,

                        width: 42,
                        height: 42,

                        display: 'grid',

                        placeItems:
                            'center',

                        borderRadius:
                            '50%',

                        border:
                            '1px solid rgba(33,107,75,0.28)',

                        bgcolor:
                            '#ffffff',

                        color:
                            '#216b4b',
                    }}
                >
                    <CircleDot
                        size={17}
                        strokeWidth={
                            1.6
                        }
                    />
                </Box>

                {/* ARROW */}

                <Box
                    className="production-arrow"
                    sx={{
                        position:
                            'absolute',

                        right: 4,

                        top:
                            'calc(50% - 9px)',

                        color:
                            '#277451',

                        display:
                            'grid',

                        placeItems:
                            'center',
                    }}
                >
                    <ArrowRight
                        size={18}
                        strokeWidth={
                            1.6
                        }
                    />
                </Box>
            </Box>

            {/* =================================================
                SOLUTION
            ================================================= */}

            <Box
                sx={{
                    display: 'flex',

                    flexDirection:
                        'column',

                    justifyContent:
                        'center',

                    py: {
                        xs: 3,
                        md: 4,
                    },

                    pl: {
                        md: 5,
                    },

                    borderTop: {
                        xs:
                            '1px solid rgba(25,80,55,0.08)',
                        md: 'none',
                    },
                }}
            >
                <Typography
                    sx={{
                        display: {
                            xs: 'block',
                            md: 'none',
                        },

                        mb: 1,

                        color:
                            '#277451',

                        fontSize:
                            '0.58rem',

                        fontWeight: 800,

                        letterSpacing:
                            '0.16em',

                        textTransform:
                            'uppercase',
                    }}
                >
                    {t(
                        `${baseKey}.productionSection.solutionLabel`
                    )}
                </Typography>

                <Box
                    sx={{
                        display: 'flex',

                        alignItems:
                            'center',

                        gap: 1.5,
                    }}
                >
                    {/* MOBILE CONNECTION */}

                    <Box
                        sx={{
                            display: {
                                xs: 'block',
                                md: 'none',
                            },

                            width: 24,

                            height: '1px',

                            flexShrink: 0,

                            bgcolor:
                                '#2b805a',
                        }}
                    />

                    <Typography
                        className="production-solution"
                        sx={{
                            maxWidth:
                                430,

                            color:
                                '#1d6849',

                            fontSize: {
                                xs: '1.3rem',
                                md: '1.5rem',
                            },

                            lineHeight:
                                1.25,

                            fontWeight:
                                600,

                            letterSpacing:
                                '-0.025em',
                        }}
                    >
                        {t(
                            item.solutionKey
                        )}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

/* =========================================================
   SECTION
========================================================= */

export function IndustryProductionSection({
    industry,
}: IndustryProductionSectionProps) {
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

                bgcolor: '#ffffff',

                color: '#111713',

                py: {
                    xs: 10,
                    md: 13,
                    lg: 16,
                },
            }}
        >
            {/* =================================================
                BACKGROUND GLOW
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    width: 900,
                    height: 900,

                    right: -520,
                    top: -430,

                    borderRadius:
                        '50%',

                    background:
                        'radial-gradient(circle, rgba(38,123,84,0.095), transparent 67%)',

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

                    opacity: 0.42,

                    pointerEvents:
                        'none',

                    backgroundImage: `
                        linear-gradient(
                            rgba(25,84,57,0.028) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(25,84,57,0.028) 1px,
                            transparent 1px
                        )
                    `,

                    backgroundSize:
                        '80px 80px',

                    maskImage:
                        'linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)',
                }}
            />

            {/* =================================================
                DECORATIVE TEXT
            ================================================= */}

            <Typography
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    left: {
                        md: -30,
                        lg: -50,
                    },

                    bottom: {
                        md: 100,
                        lg: 60,
                    },

                    display: {
                        xs: 'none',
                        md: 'block',
                    },

                    color:
                        'rgba(30,105,72,0.024)',

                    fontSize: {
                        md: '8rem',
                        lg: '12rem',
                    },

                    fontWeight: 800,

                    lineHeight: 0.8,

                    letterSpacing:
                        '-0.075em',

                    writingMode:
                        'vertical-rl',

                    userSelect: 'none',

                    pointerEvents:
                        'none',
                }}
            >
                PROCESS
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
                                    'minmax(0,1fr) minmax(350px,0.68fr)',
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
                        <Box>
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
                                              x: -18,
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
                                            '#216b4b',
                                    }}
                                />

                                <Typography
                                    sx={{
                                        color:
                                            '#216b4b',

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
                                        `${baseKey}.productionSection.eyebrow`
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
                                        790,

                                    color:
                                        '#111713',

                                    fontSize: {
                                        xs:
                                            '2.65rem',
                                        sm:
                                            '3.3rem',
                                        md:
                                            '4rem',
                                        lg:
                                            '4.55rem',
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
                                    `${baseKey}.productionSection.title`
                                )}
                            </Typography>
                        </Box>

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
                                m: 0,

                                maxWidth:
                                    500,

                                justifySelf: {
                                    lg: 'end',
                                },

                                color:
                                    'rgba(17,23,19,0.60)',

                                fontSize: {
                                    xs:
                                        '0.96rem',
                                    md: '1rem',
                                },

                                lineHeight:
                                    1.85,
                            }}
                        >
                            {t(
                                `${baseKey}.productionSection.description`
                            )}
                        </Typography>
                    </Box>

                    {/* =================================================
                        COLUMN LABELS
                    ================================================= */}

                    <Box
                        sx={{
                            display: {
                                xs: 'none',
                                md: 'grid',
                            },

                            gridTemplateColumns:
                                'minmax(0,0.8fr) minmax(180px,0.4fr) minmax(0,0.8fr)',

                            alignItems:
                                'center',

                            pb: 2.5,

                            borderBottom:
                                '1px solid rgba(25,80,55,0.15)',
                        }}
                    >
                        <Typography
                            sx={{
                                color:
                                    '#216b4b',

                                fontSize:
                                    '0.62rem',

                                fontWeight:
                                    800,

                                letterSpacing:
                                    '0.16em',

                                textTransform:
                                    'uppercase',
                            }}
                        >
                            {t(
                                `${baseKey}.productionSection.needLabel`
                            )}
                        </Typography>

                        <Box />

                        <Typography
                            sx={{
                                color:
                                    '#216b4b',

                                fontSize:
                                    '0.62rem',

                                fontWeight:
                                    800,

                                letterSpacing:
                                    '0.16em',

                                textTransform:
                                    'uppercase',

                                pl: 5,
                            }}
                        >
                            {t(
                                `${baseKey}.productionSection.solutionLabel`
                            )}
                        </Typography>
                    </Box>

                    {/* =================================================
                        ROUTING ROWS
                    ================================================= */}

                    <Box>
                        {industry.productionItems.map(
                            (
                                item,
                                index
                            ) => (
                                <ProductionRow
                                    key={
                                        item.needKey
                                    }
                                    item={
                                        item
                                    }
                                    index={
                                        index
                                    }
                                    baseKey={
                                        baseKey
                                    }
                                    isLast={
                                        index ===
                                        industry
                                            .productionItems
                                            .length -
                                            1
                                    }
                                />
                            )
                        )}
                    </Box>

                    {/* =================================================
                        FOOT NOTE
                    ================================================= */}

                    <Box
                        component={
                            motion.div
                        }
                        initial={
                            reduceMotion
                                ? false
                                : {
                                      opacity: 0,
                                      y: 24,
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
                        }}
                        sx={{
                            mt: {
                                xs: 6,
                                md: 8,
                            },

                            display:
                                'grid',

                            gridTemplateColumns: {
                                xs: '1fr',

                                md:
                                    '220px minmax(0,1fr)',
                            },

                            gap: {
                                xs: 2,
                                md: 5,
                            },

                            alignItems:
                                'start',

                            pt: {
                                xs: 3,
                                md: 4,
                            },

                            borderTop:
                                '1px solid rgba(25,80,55,0.13)',
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
                                    `${baseKey}.productionSection.noteLabel`
                                )}
                            </Typography>
                        </Box>

                        <Typography
                            sx={{
                                maxWidth:
                                    850,

                                color:
                                    '#626f68',

                                fontSize: {
                                    xs:
                                        '0.91rem',
                                    md:
                                        '0.96rem',
                                },

                                lineHeight:
                                    1.8,
                            }}
                        >
                            {t(
                                `${baseKey}.productionSection.note`
                            )}
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}