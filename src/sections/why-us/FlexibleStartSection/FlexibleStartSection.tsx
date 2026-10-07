import {
    Box,
    Typography,
} from '@mui/material';

import {
    ArrowUpRight,
    Check,
} from 'lucide-react';

import {
    motion,
} from 'motion/react';

import {
    Link,
} from 'react-router-dom';

import {
    useTranslation,
} from 'react-i18next';

import {
    Container,
} from '../../../components/common/Container';

import {
    whyUsPageData,
} from '../../../data/why-us/why-us.data';

const MotionBox = motion.create(Box);

export function FlexibleStartSection() {
    const { t } = useTranslation();

    const {
        paragraphIds,
        namingExample,
        existingProduct,
        relatedCapabilities,
    } = whyUsPageData.flexibleStart;

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                overflow: 'hidden',
                bgcolor: '#f5f7f5',
            }}
        >
            {/* ================================================= */}
            {/* INTRO */}
            {/* ================================================= */}

            <Box
                sx={{
                    py: {
                        xs: 10,
                        md: 15,
                        lg: 18,
                    },
                }}
            >
                <Container>
                    <Box
                        sx={{
                            display: 'grid',

                            gridTemplateColumns: {
                                xs: '1fr',
                                lg:
                                    'minmax(0, 0.9fr) minmax(0, 1.1fr)',
                            },

                            gap: {
                                xs: 6,
                                lg: 12,
                                xl: 16,
                            },

                            alignItems: 'start',
                        }}
                    >
                        {/* ===================================== */}
                        {/* LEFT */}
                        {/* ===================================== */}

                        <MotionBox
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
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5,
                                    mb: 3,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 8,
                                        height: 8,

                                        flexShrink: 0,

                                        borderRadius:
                                            '50%',

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
                                            '0.15em',
                                    }}
                                >
                                    {t(
                                        'whyUsPage.flexibleStart.eyebrow'
                                    )}
                                </Typography>
                            </Box>

                            <Typography
                                component="h2"
                                sx={{
                                    maxWidth: 720,

                                    color:
                                        'text.primary',

                                    fontSize: {
                                        xs: '2.8rem',
                                        sm: '3.6rem',
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
                                    'whyUsPage.flexibleStart.title'
                                )}
                            </Typography>
                        </MotionBox>

                        {/* ===================================== */}
                        {/* RIGHT / PARAGRAPHS */}
                        {/* ===================================== */}

                        <Box
                            sx={{
                                pt: {
                                    lg: 8,
                                },
                            }}
                        >
                            {paragraphIds.map(
                                (
                                    paragraphId,
                                    index
                                ) => (
                                    <MotionBox
                                        key={
                                            paragraphId
                                        }
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
                                            amount: 0.5,
                                        }}
                                        transition={{
                                            duration: 0.6,

                                            delay:
                                                index *
                                                0.06,
                                        }}
                                        sx={{
                                            display:
                                                'grid',

                                            gridTemplateColumns:
                                                '20px minmax(0, 1fr)',

                                            gap: 2.5,

                                            py: 3,

                                            borderTop:
                                                '1px solid',

                                            borderColor:
                                                'divider',

                                            '&:last-of-type':
                                                {
                                                    borderBottom:
                                                        '1px solid',

                                                    borderColor:
                                                        'divider',
                                                },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 6,
                                                height: 6,

                                                mt: 1.15,

                                                borderRadius:
                                                    '50%',

                                                bgcolor:
                                                    'primary.main',
                                            }}
                                        />

                                        <Typography
                                            sx={{
                                                maxWidth:
                                                    700,

                                                color:
                                                    'text.secondary',

                                                fontSize:
                                                    {
                                                        xs:
                                                            '0.97rem',

                                                        md:
                                                            '1.04rem',
                                                    },

                                                lineHeight:
                                                    1.9,
                                            }}
                                        >
                                            {t(
                                                `whyUsPage.flexibleStart.paragraphs.${paragraphId}`
                                            )}
                                        </Typography>
                                    </MotionBox>
                                )
                            )}
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* ================================================= */}
            {/* SAME PART / DIFFERENT NAMES */}
            {/* ================================================= */}

            <Box
                sx={{
                    position: 'relative',

                    bgcolor: '#111714',

                    color: '#fff',

                    py: {
                        xs: 10,
                        md: 13,
                        lg: 15,
                    },

                    overflow: 'hidden',
                }}
            >
                {/* Decorative circle */}

                <Box
                    sx={{
                        position: 'absolute',

                        width: {
                            xs: 420,
                            md: 700,
                        },

                        height: {
                            xs: 420,
                            md: 700,
                        },

                        borderRadius: '50%',

                        border:
                            '1px solid rgba(255,255,255,0.06)',

                        top: {
                            xs: -250,
                            md: -390,
                        },

                        right: {
                            xs: -250,
                            md: -260,
                        },

                        pointerEvents: 'none',
                    }}
                />

                <Box
                    sx={{
                        position: 'absolute',

                        width: {
                            xs: 260,
                            md: 450,
                        },

                        height: {
                            xs: 260,
                            md: 450,
                        },

                        borderRadius: '50%',

                        border:
                            '1px solid rgba(255,255,255,0.045)',

                        top: {
                            xs: -130,
                            md: -230,
                        },

                        right: {
                            xs: -140,
                            md: -60,
                        },

                        pointerEvents: 'none',
                    }}
                />

                <Container
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

                                lg:
                                    'minmax(0, 0.75fr) minmax(0, 1.25fr)',
                            },

                            gap: {
                                xs: 7,
                                lg: 14,
                            },

                            alignItems: 'start',
                        }}
                    >
                        {/* ===================================== */}
                        {/* TEXT */}
                        {/* ===================================== */}

                        <MotionBox
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
                                amount: 0.35,
                            }}
                            transition={{
                                duration: 0.7,
                            }}
                        >
                            <Typography
                                variant="overline"
                                sx={{
                                    display: 'block',

                                    mb: 3,

                                    color:
                                        'primary.light',

                                    fontWeight: 700,

                                    letterSpacing:
                                        '0.15em',
                                }}
                            >
                                {t(
                                    'whyUsPage.flexibleStart.namingExample.eyebrow'
                                )}
                            </Typography>

                            <Typography
                                component="h3"
                                sx={{
                                    maxWidth: 560,

                                    fontSize: {
                                        xs: '2.5rem',
                                        sm: '3.1rem',
                                        md: '3.6rem',
                                    },

                                    fontWeight: 700,

                                    lineHeight: 1,

                                    letterSpacing:
                                        '-0.05em',
                                }}
                            >
                                {t(
                                    'whyUsPage.flexibleStart.namingExample.titleLine1'
                                )}

                                <br />

                                {t(
                                    'whyUsPage.flexibleStart.namingExample.titleLine2'
                                )}
                            </Typography>

                            <Typography
                                sx={{
                                    maxWidth: 500,

                                    mt: 4,

                                    color:
                                        'rgba(255,255,255,0.58)',

                                    fontSize:
                                        '0.98rem',

                                    lineHeight: 1.85,
                                }}
                            >
                                {t(
                                    'whyUsPage.flexibleStart.namingExample.description'
                                )}
                            </Typography>
                        </MotionBox>

                        {/* ===================================== */}
                        {/* NAMES */}
                        {/* ===================================== */}

                        <Box
                            sx={{
                                borderTop:
                                    '1px solid rgba(255,255,255,0.15)',
                            }}
                        >
                            {namingExample.items.map(
                                (
                                    item,
                                    index
                                ) => (
                                    <MotionBox
                                        key={
                                            item.id
                                        }
                                        initial={{
                                            opacity: 0,
                                            x: 30,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.5,
                                        }}
                                        transition={{
                                            duration: 0.6,

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
                                        sx={{
                                            position:
                                                'relative',

                                            display:
                                                'flex',

                                            alignItems:
                                                'center',

                                            justifyContent:
                                                'space-between',

                                            gap: 3,

                                            py: {
                                                xs: 3.5,
                                                md: 4.5,
                                            },

                                            borderBottom:
                                                '1px solid rgba(255,255,255,0.15)',

                                            transition:
                                                'padding 250ms ease',

                                            '&::before':
                                                {
                                                    content:
                                                        '""',

                                                    position:
                                                        'absolute',

                                                    left: 0,
                                                    bottom:
                                                        -1,

                                                    width: 0,
                                                    height: 1,

                                                    bgcolor:
                                                        'primary.light',

                                                    transition:
                                                        'width 350ms ease',
                                                },

                                            '&:hover::before':
                                                {
                                                    width:
                                                        '100%',
                                                },

                                            '&:hover .name-arrow':
                                                {
                                                    transform:
                                                        'translate(4px, -4px)',

                                                    color:
                                                        'primary.light',
                                                },
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color:
                                                    '#fff',

                                                fontSize:
                                                    {
                                                        xs:
                                                            '1.65rem',

                                                        md:
                                                            '2.15rem',
                                                    },

                                                fontWeight:
                                                    500,

                                                lineHeight:
                                                    1.1,

                                                letterSpacing:
                                                    '-0.035em',
                                            }}
                                        >
                                            {t(
                                                `whyUsPage.flexibleStart.namingExample.items.${item.id}`
                                            )}
                                        </Typography>

                                        <ArrowUpRight
                                            className="name-arrow"
                                            size={22}
                                            strokeWidth={
                                                1.4
                                            }
                                            style={{
                                                flexShrink: 0,

                                                transition:
                                                    'all 250ms ease',
                                            }}
                                        />
                                    </MotionBox>
                                )
                            )}
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* ================================================= */}
            {/* EXISTING PRODUCT */}
            {/* ================================================= */}

            <Box
                sx={{
                    bgcolor:
                        'background.paper',

                    py: {
                        xs: 10,
                        md: 14,
                        lg: 16,
                    },
                }}
            >
                <Container>
                    <Box
                        sx={{
                            display: 'grid',

                            gridTemplateColumns: {
                                xs: '1fr',

                                lg:
                                    'minmax(0, 1fr) minmax(0, 0.85fr)',
                            },

                            gap: {
                                xs: 7,
                                lg: 12,
                            },

                            alignItems: 'start',
                        }}
                    >
                        {/* ===================================== */}
                        {/* LEFT */}
                        {/* ===================================== */}

                        <MotionBox
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
                                        '0.15em',
                                }}
                            >
                                {t(
                                    'whyUsPage.flexibleStart.existingProduct.eyebrow'
                                )}
                            </Typography>

                            <Typography
                                component="h3"
                                sx={{
                                    maxWidth: 700,

                                    color:
                                        'text.primary',

                                    fontSize: {
                                        xs: '2.5rem',
                                        sm: '3.2rem',
                                        md: '3.8rem',
                                    },

                                    fontWeight: 700,

                                    lineHeight: 1,

                                    letterSpacing:
                                        '-0.05em',
                                }}
                            >
                                {t(
                                    'whyUsPage.flexibleStart.existingProduct.title'
                                )}
                            </Typography>

                            <Typography
                                sx={{
                                    maxWidth: 650,

                                    mt: 4,

                                    color:
                                        'text.secondary',

                                    fontSize: '1rem',

                                    lineHeight: 1.85,
                                }}
                            >
                                {t(
                                    'whyUsPage.flexibleStart.existingProduct.description'
                                )}
                            </Typography>
                        </MotionBox>

                        {/* ===================================== */}
                        {/* CHECKLIST */}
                        {/* ===================================== */}

                        <MotionBox
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
                                delay: 0.1,
                            }}
                            sx={{
                                borderTop:
                                    '1px solid',

                                borderColor:
                                    'divider',
                            }}
                        >
                            {existingProduct.checklist.map(
                                (item) => (
                                    <Box
                                        key={
                                            item.id
                                        }
                                        sx={{
                                            display:
                                                'grid',

                                            gridTemplateColumns:
                                                '34px minmax(0, 1fr)',

                                            gap: 2,

                                            alignItems:
                                                'center',

                                            py: 2.6,

                                            borderBottom:
                                                '1px solid',

                                            borderColor:
                                                'divider',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 28,
                                                height: 28,

                                                display:
                                                    'flex',

                                                alignItems:
                                                    'center',

                                                justifyContent:
                                                    'center',

                                                borderRadius:
                                                    '50%',

                                                bgcolor:
                                                    'rgba(22,91,65,0.08)',

                                                color:
                                                    'primary.main',
                                            }}
                                        >
                                            <Check
                                                size={
                                                    14
                                                }
                                                strokeWidth={
                                                    2
                                                }
                                            />
                                        </Box>

                                        <Typography
                                            sx={{
                                                color:
                                                    'text.primary',

                                                fontSize:
                                                    '0.95rem',

                                                fontWeight:
                                                    500,

                                                lineHeight:
                                                    1.5,
                                            }}
                                        >
                                            {t(
                                                `whyUsPage.flexibleStart.existingProduct.checklist.${item.id}`
                                            )}
                                        </Typography>
                                    </Box>
                                )
                            )}
                        </MotionBox>
                    </Box>
                </Container>
            </Box>

            {/* ================================================= */}
            {/* RELATED CAPABILITIES */}
            {/* ================================================= */}

            <Box
                sx={{
                    bgcolor: '#eef2ef',

                    borderTop:
                        '1px solid rgba(17,23,20,0.08)',

                    py: {
                        xs: 8,
                        md: 10,
                    },
                }}
            >
                <Container>
                    <Box
                        sx={{
                            display: 'grid',

                            gridTemplateColumns: {
                                xs: '1fr',

                                lg:
                                    'minmax(260px, 0.55fr) minmax(0, 1.45fr)',
                            },

                            gap: {
                                xs: 5,
                                lg: 10,
                            },

                            alignItems: 'start',
                        }}
                    >
                        {/* TITLE */}

                        <Typography
                            sx={{
                                maxWidth: 390,

                                color:
                                    'text.secondary',

                                fontSize:
                                    '0.95rem',

                                lineHeight: 1.8,
                            }}
                        >
                            {t(
                                'whyUsPage.flexibleStart.relatedCapabilitiesTitle'
                            )}
                        </Typography>

                        {/* CARDS */}

                        <Box
                            sx={{
                                display: 'grid',

                                gridTemplateColumns: {
                                    xs: '1fr',

                                    md:
                                        'repeat(2, minmax(0, 1fr))',
                                },

                                borderTop:
                                    '1px solid',

                                borderColor:
                                    'divider',
                            }}
                        >
                            {relatedCapabilities.map(
                                (
                                    capability,
                                    index
                                ) => {
                                    const Icon =
                                        capability.icon;

                                    const basePath =
                                        `whyUsPage.flexibleStart.relatedCapabilities.${capability.id}`;

                                    return (
                                        <Box
                                            key={
                                                capability.id
                                            }
                                            component={
                                                Link
                                            }
                                            to={
                                                capability.href
                                            }
                                            sx={{
                                                position:
                                                    'relative',

                                                display:
                                                    'block',

                                                minHeight:
                                                    280,

                                                p: {
                                                    xs: 4,
                                                    md: 4.5,
                                                },

                                                color:
                                                    'inherit',

                                                textDecoration:
                                                    'none',

                                                borderBottom:
                                                    '1px solid',

                                                borderLeft:
                                                    {
                                                        xs:
                                                            'none',

                                                        md:
                                                            index >
                                                            0
                                                                ? '1px solid'
                                                                : 'none',
                                                    },

                                                borderColor:
                                                    'divider',

                                                transition:
                                                    'background-color 250ms ease',

                                                '&:hover':
                                                    {
                                                        bgcolor:
                                                            'background.paper',
                                                    },

                                                '&:hover .capability-arrow':
                                                    {
                                                        transform:
                                                            'translate(4px, -4px)',

                                                        color:
                                                            'primary.main',
                                                    },

                                                '&:hover .capability-icon':
                                                    {
                                                        bgcolor:
                                                            'primary.main',

                                                        color:
                                                            'primary.contrastText',

                                                        borderColor:
                                                            'primary.main',
                                                    },
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display:
                                                        'flex',

                                                    justifyContent:
                                                        'space-between',

                                                    alignItems:
                                                        'flex-start',

                                                    gap: 3,

                                                    mb: 5,
                                                }}
                                            >
                                                <Box
                                                    className="capability-icon"
                                                    sx={{
                                                        width: 48,
                                                        height: 48,

                                                        display:
                                                            'flex',

                                                        alignItems:
                                                            'center',

                                                        justifyContent:
                                                            'center',

                                                        borderRadius:
                                                            '50%',

                                                        border:
                                                            '1px solid',

                                                        borderColor:
                                                            'divider',

                                                        color:
                                                            'primary.main',

                                                        transition:
                                                            'all 250ms ease',
                                                    }}
                                                >
                                                    <Icon
                                                        size={
                                                            19
                                                        }
                                                        strokeWidth={
                                                            1.5
                                                        }
                                                    />
                                                </Box>

                                                <ArrowUpRight
                                                    className="capability-arrow"
                                                    size={
                                                        20
                                                    }
                                                    strokeWidth={
                                                        1.4
                                                    }
                                                    style={{
                                                        transition:
                                                            'all 250ms ease',
                                                    }}
                                                />
                                            </Box>

                                            <Typography
                                                component="h4"
                                                sx={{
                                                    mb: 2,

                                                    color:
                                                        'text.primary',

                                                    fontSize:
                                                        '1.45rem',

                                                    fontWeight:
                                                        650,

                                                    lineHeight:
                                                        1.15,

                                                    letterSpacing:
                                                        '-0.03em',
                                                }}
                                            >
                                                {t(
                                                    `${basePath}.title`
                                                )}
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    maxWidth:
                                                        420,

                                                    color:
                                                        'text.secondary',

                                                    fontSize:
                                                        '0.92rem',

                                                    lineHeight:
                                                        1.75,
                                                }}
                                            >
                                                {t(
                                                    `${basePath}.description`
                                                )}
                                            </Typography>
                                        </Box>
                                    );
                                }
                            )}
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}