import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Container,
    Typography,
} from '@mui/material';

import {
    motion,
} from 'motion/react';

import {
    ChevronDown,
    CircleHelp,
} from 'lucide-react';

import {
    useTranslation,
} from 'react-i18next';

import {
    capabilitiesPageData,
} from '../../../data/capabilities/capabilities.data';

/* =========================================================
   MOTION
========================================================= */

const MotionBox = motion.div;

/* =========================================================
   COMPONENT
========================================================= */

export function CapabilitiesFaqSection() {
    const { t } = useTranslation();

    const {
        id,
        items,
    } = capabilitiesPageData.faq;

    return (
        <Box
            component="section"
            id={id}
            sx={{
                position: 'relative',

                overflow: 'hidden',

                bgcolor: '#F7F9F7',

                py: {
                    xs: 9,
                    md: 13,
                    lg: 15,
                },

                scrollMarginTop: {
                    xs: 72,
                    md: 88,
                },
            }}
        >
            {/* =================================================
                TOP RIGHT DECORATION
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    top: {
                        xs: -120,
                        md: -180,
                    },

                    right: {
                        xs: -160,
                        md: -120,
                    },

                    width: {
                        xs: 320,
                        md: 520,
                    },

                    height: {
                        xs: 320,
                        md: 520,
                    },

                    borderRadius: '50%',

                    background:
                        'radial-gradient(circle, rgba(31, 92, 67, 0.08) 0%, rgba(31, 92, 67, 0) 70%)',

                    pointerEvents: 'none',
                }}
            />

            {/* =================================================
                BOTTOM LEFT DECORATION
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    bottom: -220,
                    left: -180,

                    width: 460,
                    height: 460,

                    borderRadius: '50%',

                    background:
                        'radial-gradient(circle, rgba(31, 92, 67, 0.06) 0%, rgba(31, 92, 67, 0) 72%)',

                    pointerEvents: 'none',
                }}
            />

            <Container
                maxWidth="xl"
                sx={{
                    position: 'relative',

                    zIndex: 1,
                }}
            >
                <Box
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',
                            lg: '0.8fr 1.2fr',
                        },

                        gap: {
                            xs: 6,
                            md: 8,
                            lg: 12,
                        },

                        alignItems: 'start',
                    }}
                >
                    {/* =================================================
                        LEFT CONTENT
                    ================================================= */}

                    <MotionBox
                        initial={{
                            opacity: 0,
                            y: 32,
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
                        <Box
                            sx={{
                                position: {
                                    xs: 'relative',
                                    lg: 'sticky',
                                },

                                top: {
                                    lg: 120,
                                },
                            }}
                        >
                            {/* =========================================
                                EYEBROW
                            ========================================= */}

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
                                    aria-hidden="true"
                                    sx={{
                                        width: 42,
                                        height: 42,

                                        flexShrink: 0,

                                        borderRadius:
                                            '50%',

                                        display: 'flex',

                                        alignItems:
                                            'center',

                                        justifyContent:
                                            'center',

                                        bgcolor:
                                            'rgba(31, 92, 67, 0.09)',

                                        color:
                                            '#1F5C43',
                                    }}
                                >
                                    <CircleHelp
                                        size={19}
                                        strokeWidth={
                                            1.8
                                        }
                                    />
                                </Box>

                                <Typography
                                    component="span"
                                    sx={{
                                        color:
                                            '#1F5C43',

                                        fontSize: {
                                            xs: '0.75rem',
                                            md: '0.8rem',
                                        },

                                        fontWeight:
                                            700,

                                        letterSpacing:
                                            '0.16em',
                                    }}
                                >
                                    {t(
                                        'capabilitiesPage.faq.eyebrow'
                                    )}
                                </Typography>
                            </Box>

                            {/* =========================================
                                TITLE
                            ========================================= */}

                            <Typography
                                component="h2"
                                sx={{
                                    maxWidth: 560,

                                    color:
                                        '#12251C',

                                    fontSize: {
                                        xs: '2.25rem',
                                        sm: '2.8rem',
                                        md: '3.4rem',
                                        lg: '4rem',
                                    },

                                    lineHeight: {
                                        xs: 1.08,
                                        md: 1.03,
                                    },

                                    fontWeight: 600,

                                    letterSpacing:
                                        '-0.045em',
                                }}
                            >
                                {t(
                                    'capabilitiesPage.faq.title'
                                )}
                            </Typography>

                            {/* =========================================
                                DESCRIPTION
                            ========================================= */}

                            <Typography
                                sx={{
                                    mt: 3,

                                    maxWidth: 500,

                                    color:
                                        '#637169',

                                    fontSize: {
                                        xs: '1rem',
                                        md: '1.08rem',
                                    },

                                    lineHeight: 1.8,
                                }}
                            >
                                {t(
                                    'capabilitiesPage.faq.description'
                                )}
                            </Typography>

                            {/* =========================================
                                DIVIDER
                            ========================================= */}

                            <Box
                                aria-hidden="true"
                                sx={{
                                    mt: {
                                        xs: 4,
                                        lg: 6,
                                    },

                                    width: {
                                        xs: '100%',
                                        sm: 160,
                                    },

                                    height: '1px',

                                    bgcolor:
                                        'rgba(31, 92, 67, 0.24)',
                                }}
                            />
                        </Box>
                    </MotionBox>

                    {/* =================================================
                        RIGHT / FAQ
                    ================================================= */}

                    <Box
                        sx={{
                            display: 'flex',

                            flexDirection:
                                'column',

                            gap: 1.5,
                        }}
                    >
                        {items.map(
                            (
                                itemKey,
                                index
                            ) => {
                                const translationBase =
                                    `capabilitiesPage.faq.items.${itemKey}`;

                                return (
                                    <MotionBox
                                        key={
                                            itemKey
                                        }
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
                                            amount: 0.15,
                                        }}
                                        transition={{
                                            duration:
                                                0.55,

                                            delay:
                                                index *
                                                0.06,

                                            ease: [
                                                0.22,
                                                1,
                                                0.36,
                                                1,
                                            ],
                                        }}
                                    >
                                        <Accordion
                                            disableGutters
                                            elevation={
                                                0
                                            }
                                            square={
                                                false
                                            }
                                            sx={{
                                                bgcolor:
                                                    '#FFFFFF',

                                                border:
                                                    '1px solid rgba(18, 37, 28, 0.10)',

                                                borderRadius:
                                                    '18px !important',

                                                overflow:
                                                    'hidden',

                                                transition:
                                                    'border-color 220ms ease, box-shadow 220ms ease',

                                                '&::before':
                                                    {
                                                        display:
                                                            'none',
                                                    },

                                                '&:hover':
                                                    {
                                                        borderColor:
                                                            'rgba(31, 92, 67, 0.30)',

                                                        boxShadow:
                                                            '0 18px 50px rgba(18, 37, 28, 0.06)',
                                                    },

                                                '&.Mui-expanded':
                                                    {
                                                        margin: 0,

                                                        borderColor:
                                                            'rgba(31, 92, 67, 0.34)',

                                                        boxShadow:
                                                            '0 22px 60px rgba(18, 37, 28, 0.07)',
                                                    },
                                            }}
                                        >
                                            {/* =================================
                                                QUESTION
                                            ================================= */}

                                            <AccordionSummary
                                                expandIcon={
                                                    <Box
                                                        sx={{
                                                            width: 38,
                                                            height: 38,

                                                            flexShrink: 0,

                                                            borderRadius:
                                                                '50%',

                                                            display:
                                                                'flex',

                                                            alignItems:
                                                                'center',

                                                            justifyContent:
                                                                'center',

                                                            bgcolor:
                                                                'rgba(31, 92, 67, 0.08)',

                                                            color:
                                                                '#1F5C43',
                                                        }}
                                                    >
                                                        <ChevronDown
                                                            size={
                                                                19
                                                            }
                                                            strokeWidth={
                                                                1.8
                                                            }
                                                        />
                                                    </Box>
                                                }
                                                sx={{
                                                    minHeight:
                                                        {
                                                            xs: 82,
                                                            md: 92,
                                                        },

                                                    px: {
                                                        xs: 2.5,
                                                        sm: 3,
                                                        md: 4,
                                                    },

                                                    py: {
                                                        xs: 1,
                                                        md: 1.25,
                                                    },

                                                    '&.Mui-expanded':
                                                        {
                                                            minHeight:
                                                                {
                                                                    xs: 82,
                                                                    md: 92,
                                                                },
                                                        },

                                                    '& .MuiAccordionSummary-content':
                                                        {
                                                            my: 0,

                                                            pr: {
                                                                xs: 2,
                                                                md: 4,
                                                            },
                                                        },

                                                    '& .MuiAccordionSummary-content.Mui-expanded':
                                                        {
                                                            my: 0,
                                                        },

                                                    '& .MuiAccordionSummary-expandIconWrapper':
                                                        {
                                                            transition:
                                                                'transform 260ms cubic-bezier(0.22, 1, 0.36, 1)',
                                                        },

                                                    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded':
                                                        {
                                                            transform:
                                                                'rotate(180deg)',
                                                        },
                                                }}
                                            >
                                                <Typography
                                                    component="h3"
                                                    sx={{
                                                        color:
                                                            '#17291F',

                                                        fontSize:
                                                            {
                                                                xs: '1rem',
                                                                sm: '1.08rem',
                                                                md: '1.16rem',
                                                            },

                                                        fontWeight:
                                                            600,

                                                        lineHeight:
                                                            1.5,

                                                        letterSpacing:
                                                            '-0.015em',
                                                    }}
                                                >
                                                    {t(
                                                        `${translationBase}.question`
                                                    )}
                                                </Typography>
                                            </AccordionSummary>

                                            {/* =================================
                                                ANSWER
                                            ================================= */}

                                            <AccordionDetails
                                                sx={{
                                                    px: {
                                                        xs: 2.5,
                                                        sm: 3,
                                                        md: 4,
                                                    },

                                                    pt: 0,

                                                    pb: {
                                                        xs: 3,
                                                        md: 3.5,
                                                    },
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        pt: 2.5,

                                                        borderTop:
                                                            '1px solid rgba(18, 37, 28, 0.08)',
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            maxWidth:
                                                                760,

                                                            color:
                                                                '#68756E',

                                                            fontSize:
                                                                {
                                                                    xs: '0.95rem',
                                                                    md: '1rem',
                                                                },

                                                            lineHeight:
                                                                1.85,
                                                        }}
                                                    >
                                                        {t(
                                                            `${translationBase}.answer`
                                                        )}
                                                    </Typography>
                                                </Box>
                                            </AccordionDetails>
                                        </Accordion>
                                    </MotionBox>
                                );
                            }
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default CapabilitiesFaqSection;