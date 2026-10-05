import {
    Box,
    Container,
    Typography,
} from '@mui/material';

import {
    ArrowUpRight,
    CircleDot,
} from 'lucide-react';

import { motion } from 'motion/react';

import { useTranslation } from 'react-i18next';

import {
    manufacturingCapabilitiesData,
} from '../../../data/about/about.data';

const MotionBox = motion.create(Box);

export function ManufacturingCapabilitiesSection() {
    const { t } = useTranslation();

    const { items } =
        manufacturingCapabilitiesData;

    return (
        <Box
            component="section"
            sx={{
                py: {
                    xs: 10,
                    md: 16,
                    lg: 20,
                },

                bgcolor: '#F7F8F6',

                borderTop: '1px solid',

                borderColor: 'divider',
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    maxWidth: '1280px',
                }}
            >
                {/* ========================================================= */}
                {/* HEADER                                                    */}
                {/* ========================================================= */}

                <Box
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',
                            md: '0.85fr 1.15fr',
                        },

                        gap: {
                            xs: 4,
                            md: 10,
                        },

                        mb: {
                            xs: 8,
                            md: 12,
                        },
                    }}
                >
                    {/* LEFT */}

                    <MotionBox
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
                            duration: 0.7,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize:
                                    '0.72rem',

                                fontWeight: 700,

                                letterSpacing:
                                    '0.16em',

                                textTransform:
                                    'uppercase',

                                color:
                                    'primary.main',

                                mb: 2.5,
                            }}
                        >
                            {t(
                                'aboutPage.manufacturingCapabilities.eyebrow'
                            )}
                        </Typography>

                        <Typography
                            component="h2"
                            sx={{
                                fontSize: {
                                    xs: '2.5rem',
                                    sm: '3.2rem',
                                    md: '4rem',
                                },

                                lineHeight: 0.98,

                                letterSpacing:
                                    '-0.055em',

                                fontWeight: 700,

                                maxWidth:
                                    '560px',
                            }}
                        >
                            {t(
                                'aboutPage.manufacturingCapabilities.title'
                            )}
                        </Typography>
                    </MotionBox>

                    {/* RIGHT */}

                    <MotionBox
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
                            duration: 0.7,
                            delay: 0.1,
                        }}
                        sx={{
                            display: 'flex',

                            alignItems:
                                'flex-end',

                            pb: {
                                md: 1,
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                maxWidth:
                                    '620px',

                                fontSize: {
                                    xs: '1rem',
                                    md: '1.08rem',
                                },

                                lineHeight: 1.8,

                                color:
                                    'text.secondary',
                            }}
                        >
                            {t(
                                'aboutPage.manufacturingCapabilities.description'
                            )}
                        </Typography>
                    </MotionBox>
                </Box>

                {/* ========================================================= */}
                {/* CAPABILITIES                                              */}
                {/* ========================================================= */}

                <Box>
                    {items.map(
                        (
                            capability,
                            index
                        ) => {
                            const translationKey =
                                `aboutPage.manufacturingCapabilities.items.${capability.id}`;

                            const tags = t(
                                `${translationKey}.tags`,
                                {
                                    returnObjects:
                                        true,
                                }
                            ) as string[];

                            const title = t(
                                `${translationKey}.title`
                            );

                            const description =
                                t(
                                    `${translationKey}.description`
                                );

                            const imageAlt =
                                t(
                                    `${translationKey}.imageAlt`
                                );

                            return (
                                <MotionBox
                                    key={
                                        capability.id
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
                                        amount: 0.15,
                                    }}
                                    transition={{
                                        duration:
                                            0.65,

                                        delay:
                                            index *
                                            0.05,
                                    }}
                                    sx={{
                                        position:
                                            'relative',

                                        display:
                                            'grid',

                                        gridTemplateColumns:
                                            {
                                                xs: '1fr',
                                                md: '0.9fr 1.1fr',
                                            },

                                        gap: {
                                            xs: 4,
                                            md: 8,
                                        },

                                        py: {
                                            xs: 6,
                                            md: 7,
                                        },

                                        borderTop:
                                            '1px solid',

                                        borderColor:
                                            'rgba(15, 23, 18, 0.18)',

                                        '&:last-of-type':
                                            {
                                                borderBottom:
                                                    '1px solid',

                                                borderBottomColor:
                                                    'rgba(15, 23, 18, 0.18)',
                                            },

                                        '& .capability-image':
                                            {
                                                transform:
                                                    'scale(1)',
                                            },

                                        '& .capability-arrow':
                                            {
                                                transform:
                                                    'translate(0, 0)',
                                            },

                                        '&:hover .capability-image':
                                            {
                                                transform:
                                                    'scale(1.045)',
                                            },

                                        '&:hover .capability-arrow':
                                            {
                                                transform:
                                                    'translate(4px, -4px)',
                                            },
                                    }}
                                >
                                    {/* ===================================== */}
                                    {/* CONTENT                               */}
                                    {/* ===================================== */}

                                    <Box
                                        sx={{
                                            display:
                                                'flex',

                                            flexDirection:
                                                'column',

                                            justifyContent:
                                                'space-between',

                                            minHeight:
                                                {
                                                    md: '340px',
                                                },

                                            order: {
                                                xs: 2,
                                                md: 1,
                                            },
                                        }}
                                    >
                                        <Box>
                                            {/* ITEM LABEL */}

                                            <Box
                                                sx={{
                                                    display:
                                                        'flex',

                                                    alignItems:
                                                        'center',

                                                    gap: 1,

                                                    mb: 3,
                                                }}
                                            >
                                                <CircleDot
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
                                                            '0.72rem',

                                                        fontWeight: 700,

                                                        textTransform:
                                                            'uppercase',

                                                        letterSpacing:
                                                            '0.14em',

                                                        color:
                                                            'text.secondary',
                                                    }}
                                                >
                                                    {t(
                                                        'aboutPage.manufacturingCapabilities.itemLabel'
                                                    )}
                                                </Typography>
                                            </Box>

                                            {/* TITLE */}

                                            <Typography
                                                component="h3"
                                                sx={{
                                                    fontSize:
                                                        {
                                                            xs: '2rem',
                                                            md: '2.8rem',
                                                        },

                                                    lineHeight:
                                                        1.05,

                                                    fontWeight:
                                                        650,

                                                    letterSpacing:
                                                        '-0.04em',

                                                    mb: 3,
                                                }}
                                            >
                                                {
                                                    title
                                                }
                                            </Typography>

                                            {/* DESCRIPTION */}

                                            <Typography
                                                sx={{
                                                    maxWidth:
                                                        '520px',

                                                    fontSize:
                                                        {
                                                            xs: '0.98rem',
                                                            md: '1.05rem',
                                                        },

                                                    lineHeight:
                                                        1.75,

                                                    color:
                                                        'text.secondary',
                                                }}
                                            >
                                                {
                                                    description
                                                }
                                            </Typography>
                                        </Box>

                                        {/* ================================= */}
                                        {/* TAGS + ACTION                     */}
                                        {/* ================================= */}

                                        <Box
                                            sx={{
                                                mt: {
                                                    xs: 4,
                                                    md: 6,
                                                },
                                            }}
                                        >
                                            {/* TAGS */}

                                            <Box
                                                sx={{
                                                    display:
                                                        'flex',

                                                    flexWrap:
                                                        'wrap',

                                                    gap: 1,

                                                    mb: 4,
                                                }}
                                            >
                                                {tags.map(
                                                    (
                                                        tag
                                                    ) => (
                                                        <Box
                                                            key={
                                                                tag
                                                            }
                                                            sx={{
                                                                px: 1.6,

                                                                py: 0.75,

                                                                border:
                                                                    '1px solid',

                                                                borderColor:
                                                                    'rgba(15, 23, 18, 0.15)',

                                                                borderRadius:
                                                                    '999px',
                                                            }}
                                                        >
                                                            <Typography
                                                                sx={{
                                                                    fontSize:
                                                                        '0.75rem',

                                                                    fontWeight:
                                                                        500,

                                                                    color:
                                                                        'text.secondary',
                                                                }}
                                                            >
                                                                {
                                                                    tag
                                                                }
                                                            </Typography>
                                                        </Box>
                                                    )
                                                )}
                                            </Box>

                                            {/* ACTION */}

                                            <Box
                                                sx={{
                                                    display:
                                                        'inline-flex',

                                                    alignItems:
                                                        'center',

                                                    gap: 1.2,

                                                    cursor:
                                                        'pointer',
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize:
                                                            '0.85rem',

                                                        fontWeight:
                                                            650,
                                                    }}
                                                >
                                                    {t(
                                                        'aboutPage.manufacturingCapabilities.actionLabel'
                                                    )}
                                                </Typography>

                                                <Box
                                                    className="capability-arrow"
                                                    sx={{
                                                        display:
                                                            'flex',

                                                        transition:
                                                            'transform 250ms ease',
                                                    }}
                                                >
                                                    <ArrowUpRight
                                                        size={
                                                            17
                                                        }
                                                        strokeWidth={
                                                            1.8
                                                        }
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>

                                    {/* ===================================== */}
                                    {/* IMAGE                                 */}
                                    {/* ===================================== */}

                                    <Box
                                        sx={{
                                            position:
                                                'relative',

                                            height: {
                                                xs: '280px',
                                                sm: '380px',
                                                md: '440px',
                                            },

                                            overflow:
                                                'hidden',

                                            borderRadius:
                                                {
                                                    xs: '22px',
                                                    md: '30px',
                                                },

                                            order: {
                                                xs: 1,
                                                md: 2,
                                            },

                                            bgcolor:
                                                '#111',
                                        }}
                                    >
                                        <Box
                                            className="capability-image"
                                            component="img"
                                            src={
                                                capability.image
                                            }
                                            alt={
                                                imageAlt
                                            }
                                            loading="lazy"
                                            sx={{
                                                width:
                                                    '100%',

                                                height:
                                                    '100%',

                                                display:
                                                    'block',

                                                objectFit:
                                                    'cover',

                                                transition:
                                                    'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
                                            }}
                                        />

                                        <Box
                                            sx={{
                                                position:
                                                    'absolute',

                                                inset: 0,

                                                background:
                                                    'linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.25) 100%)',

                                                pointerEvents:
                                                    'none',
                                            }}
                                        />
                                    </Box>
                                </MotionBox>
                            );
                        }
                    )}
                </Box>
            </Container>
        </Box>
    );
}

export default ManufacturingCapabilitiesSection;