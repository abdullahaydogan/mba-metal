import {
    Box,
    Typography,
} from '@mui/material';

import { motion } from 'motion/react';

import { useTranslation } from 'react-i18next';

import { Container } from '../../../components/common/Container';

import {
    qualityApproachData,
} from '../../../data/about/about.data';

const MotionBox = motion.create(Box);

export function QualityApproachSection() {
    const { t } = useTranslation();

    const {
        image,
        items,
    } = qualityApproachData;

    return (
        <Box
            component="section"
            sx={{
                bgcolor: '#f4f6f5',

                py: {
                    xs: 10,
                    md: 15,
                    lg: 18,
                },

                overflow: 'hidden',
            }}
        >
            <Container>
                {/* ========================================================= */}
                {/* HEADER                                                    */}
                {/* ========================================================= */}

                <Box
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',
                            lg: '0.95fr 1.05fr',
                        },

                        gap: {
                            xs: 5,
                            lg: 12,
                        },

                        alignItems: 'end',

                        mb: {
                            xs: 7,
                            md: 10,
                        },
                    }}
                >
                    <Box>
                        <Typography
                            variant="overline"
                            sx={{
                                display: 'block',

                                mb: 2.5,

                                color:
                                    'primary.main',
                            }}
                        >
                            {t(
                                'aboutPage.qualityApproach.eyebrow'
                            )}
                        </Typography>

                        <Typography
                            component="h2"
                            sx={{
                                maxWidth: 650,

                                fontSize: {
                                    xs: '2.7rem',
                                    sm: '3.4rem',
                                    md: '4rem',
                                    lg: '4.4rem',
                                },

                                fontWeight: 700,

                                lineHeight: 0.98,

                                letterSpacing:
                                    '-0.055em',

                                color: '#111714',
                            }}
                        >
                            {t(
                                'aboutPage.qualityApproach.title'
                            )}
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            maxWidth: 570,

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
                            'aboutPage.qualityApproach.description'
                        )}
                    </Typography>
                </Box>

                {/* ========================================================= */}
                {/* MAIN CONTENT                                              */}
                {/* ========================================================= */}

                <Box
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',
                            lg: '1.05fr 0.95fr',
                        },

                        minHeight: {
                            lg: 720,
                        },

                        bgcolor: '#fff',

                        border: '1px solid',

                        borderColor:
                            'divider',
                    }}
                >
                    {/* ===================================================== */}
                    {/* IMAGE                                                 */}
                    {/* ===================================================== */}

                    <MotionBox
                        initial={{
                            opacity: 0,
                            scale: 0.97,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        transition={{
                            duration: 0.9,

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
                                xs: 420,
                                md: 560,
                                lg: '100%',
                            },

                            overflow:
                                'hidden',
                        }}
                    >
                        <Box
                            component="img"
                            src={image}
                            alt={t(
                                'aboutPage.qualityApproach.imageAlt'
                            )}
                            sx={{
                                position:
                                    'absolute',

                                inset: 0,

                                width: '100%',

                                height: '100%',

                                objectFit:
                                    'cover',

                                display:
                                    'block',
                            }}
                        />

                        {/* SUBTLE OVERLAY */}

                        <Box
                            sx={{
                                position:
                                    'absolute',

                                inset: 0,

                                background:
                                    'linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.28) 100%)',

                                pointerEvents:
                                    'none',
                            }}
                        />

                        {/* IMAGE LABEL */}

                        <Box
                            sx={{
                                position:
                                    'absolute',

                                left: {
                                    xs: 24,
                                    md: 36,
                                },

                                bottom: {
                                    xs: 24,
                                    md: 36,
                                },

                                bgcolor:
                                    'rgba(17,23,20,0.92)',

                                color: '#fff',

                                px: 2.5,

                                py: 1.4,

                                backdropFilter:
                                    'blur(10px)',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize:
                                        '0.72rem',

                                    fontWeight: 700,

                                    letterSpacing:
                                        '0.14em',
                                }}
                            >
                                {t(
                                    'aboutPage.qualityApproach.imageLabel'
                                )}
                            </Typography>
                        </Box>
                    </MotionBox>

                    {/* ===================================================== */}
                    {/* QUALITY ITEMS                                         */}
                    {/* ===================================================== */}

                    <Box
                        sx={{
                            display: 'flex',

                            flexDirection:
                                'column',
                        }}
                    >
                        {items.map(
                            (
                                item,
                                index
                            ) => {
                                const translationKey =
                                    `aboutPage.qualityApproach.items.${item.id}`;

                                return (
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

                                            amount: 0.4,
                                        }}
                                        transition={{
                                            duration:
                                                0.65,

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
                                            flex: 1,

                                            display:
                                                'flex',

                                            alignItems:
                                                'center',

                                            px: {
                                                xs: 3,
                                                sm: 4,
                                                md: 5,
                                                lg: 6,
                                            },

                                            py: {
                                                xs: 4,
                                                lg: 3,
                                            },

                                            borderBottom:
                                                index <
                                                items.length -
                                                    1
                                                    ? '1px solid'
                                                    : 'none',

                                            borderColor:
                                                'divider',

                                            transition:
                                                'background-color 220ms ease',

                                            '&:hover':
                                                {
                                                    bgcolor:
                                                        '#f7f9f8',
                                                },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display:
                                                    'grid',

                                                gridTemplateColumns:
                                                    {
                                                        xs: '1fr',

                                                        sm: 'auto 1fr',
                                                    },

                                                gap: {
                                                    xs: 1.5,
                                                    sm: 3,
                                                },

                                                width:
                                                    '100%',

                                                alignItems:
                                                    'start',
                                            }}
                                        >
                                            {/* MARKER */}

                                            <Box
                                                sx={{
                                                    width: 10,

                                                    height: 10,

                                                    mt: {
                                                        sm: 1.1,
                                                    },

                                                    bgcolor:
                                                        'primary.main',

                                                    flexShrink: 0,
                                                }}
                                            />

                                            <Box>
                                                <Typography
                                                    component="h3"
                                                    sx={{
                                                        mb: 1.3,

                                                        color:
                                                            '#111714',

                                                        fontSize:
                                                            {
                                                                xs: '1.35rem',

                                                                md: '1.55rem',
                                                            },

                                                        fontWeight:
                                                            600,

                                                        lineHeight:
                                                            1.2,

                                                        letterSpacing:
                                                            '-0.025em',
                                                    }}
                                                >
                                                    {t(
                                                        `${translationKey}.title`
                                                    )}
                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        maxWidth: 460,

                                                        color:
                                                            'text.secondary',

                                                        fontSize:
                                                            {
                                                                xs: '0.95rem',

                                                                md: '1rem',
                                                            },

                                                        lineHeight:
                                                            1.75,
                                                    }}
                                                >
                                                    {t(
                                                        `${translationKey}.description`
                                                    )}
                                                </Typography>
                                            </Box>
                                        </Box>
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

export default QualityApproachSection;