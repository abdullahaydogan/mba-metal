import {
    Box,
    Container,
    Typography,
} from '@mui/material';

import {
    ArrowDownRight,
    Check,
} from 'lucide-react';

import { motion } from 'motion/react';

import { useTranslation } from 'react-i18next';

import {
    workingApproachData,
} from '../../../data/about/about.data';

const MotionBox = motion.create(Box);

export function WorkingApproachSection() {
    const { t } = useTranslation();

    const { items } = workingApproachData;

    return (
        <Box
            component="section"
            sx={{
                bgcolor: '#101D17',
                color: '#fff',
                overflow: 'hidden',
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    maxWidth: '1280px',

                    py: {
                        xs: 10,
                        md: 16,
                        lg: 20,
                    },
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
                            md: '0.9fr 1.1fr',
                        },

                        gap: {
                            xs: 4,
                            md: 10,
                        },

                        mb: {
                            xs: 9,
                            md: 14,
                        },
                    }}
                >
                    {/* LEFT */}

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
                            sx={{
                                fontSize: '0.72rem',

                                fontWeight: 700,

                                letterSpacing:
                                    '0.16em',

                                textTransform:
                                    'uppercase',

                                color: '#9BC5AE',

                                mb: 2.5,
                            }}
                        >
                            {t(
                                'aboutPage.workingApproach.eyebrow'
                            )}
                        </Typography>

                        <Typography
                            component="h2"
                            sx={{
                                maxWidth:
                                    '600px',

                                fontSize: {
                                    xs: '2.6rem',
                                    sm: '3.4rem',
                                    md: '4.4rem',
                                },

                                lineHeight: 0.98,

                                letterSpacing:
                                    '-0.055em',

                                fontWeight: 650,
                            }}
                        >
                            {t(
                                'aboutPage.workingApproach.title'
                            )}
                        </Typography>
                    </MotionBox>

                    {/* RIGHT */}

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
                            display: 'flex',

                            alignItems:
                                'flex-end',
                        }}
                    >
                        <Typography
                            sx={{
                                maxWidth:
                                    '620px',

                                color:
                                    'rgba(255,255,255,0.65)',

                                fontSize: {
                                    xs: '1rem',
                                    md: '1.08rem',
                                },

                                lineHeight: 1.8,
                            }}
                        >
                            {t(
                                'aboutPage.workingApproach.description'
                            )}
                        </Typography>
                    </MotionBox>
                </Box>

                {/* ========================================================= */}
                {/* STEPS                                                     */}
                {/* ========================================================= */}

                <Box>
                    {items.map(
                        (step, index) => {
                            const translationKey =
                                `aboutPage.workingApproach.items.${step.id}`;

                            const label = t(
                                `${translationKey}.label`
                            );

                            const title = t(
                                `${translationKey}.title`
                            );

                            const description =
                                t(
                                    `${translationKey}.description`
                                );

                            const details = t(
                                `${translationKey}.details`,
                                {
                                    returnObjects:
                                        true,
                                }
                            ) as string[];

                            return (
                                <MotionBox
                                    key={step.id}
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
                                        duration:
                                            0.7,
                                    }}
                                    sx={{
                                        position:
                                            'relative',

                                        display:
                                            'grid',

                                        gridTemplateColumns:
                                        {
                                            xs: '1fr',
                                            md: '0.75fr 1.25fr',
                                        },

                                        gap: {
                                            xs: 4,
                                            md: 10,
                                        },

                                        py: {
                                            xs: 6,
                                            md: 8,
                                        },

                                        borderTop:
                                            '1px solid',

                                        borderColor:
                                            'rgba(255,255,255,0.16)',

                                        '&:last-of-type':
                                        {
                                            borderBottom:
                                                '1px solid',

                                            borderBottomColor:
                                                'rgba(255,255,255,0.16)',
                                        },
                                    }}
                                >
                                    {/* ===================================== */}
                                    {/* STEP LABEL                            */}
                                    {/* ===================================== */}

                                    <Box>
                                        <Box
                                            sx={{
                                                display:
                                                    'flex',

                                                alignItems:
                                                    'center',

                                                gap: 1.5,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 8,
                                                    height: 8,

                                                    borderRadius:
                                                        '50%',

                                                    bgcolor:
                                                        '#9BC5AE',

                                                    flexShrink: 0,
                                                }}
                                            />

                                            <Typography
                                                sx={{
                                                    fontSize:
                                                        '0.76rem',

                                                    fontWeight: 700,

                                                    letterSpacing:
                                                        '0.13em',

                                                    textTransform:
                                                        'uppercase',

                                                    color:
                                                        '#9BC5AE',
                                                }}
                                            >
                                                {
                                                    label
                                                }
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* ===================================== */}
                                    {/* STEP CONTENT                          */}
                                    {/* ===================================== */}

                                    <Box>
                                        <Box
                                            sx={{
                                                display:
                                                    'flex',

                                                justifyContent:
                                                    'space-between',

                                                alignItems:
                                                    'flex-start',

                                                gap: 3,
                                            }}
                                        >
                                            <Typography
                                                component="h3"
                                                sx={{
                                                    maxWidth:
                                                        '700px',

                                                    fontSize:
                                                    {
                                                        xs: '1.8rem',
                                                        md: '2.6rem',
                                                    },

                                                    lineHeight:
                                                        1.08,

                                                    letterSpacing:
                                                        '-0.04em',

                                                    fontWeight:
                                                        600,

                                                    mb: 3,
                                                }}
                                            >
                                                {
                                                    title
                                                }
                                            </Typography>

                                            <Box
                                                sx={{
                                                    display:
                                                    {
                                                        xs: 'none',
                                                        sm: 'flex',
                                                    },

                                                    width: 46,
                                                    height: 46,

                                                    alignItems:
                                                        'center',

                                                    justifyContent:
                                                        'center',

                                                    border:
                                                        '1px solid',

                                                    borderColor:
                                                        'rgba(255,255,255,0.2)',

                                                    borderRadius:
                                                        '50%',

                                                    flexShrink: 0,
                                                }}
                                            >
                                                <ArrowDownRight
                                                    size={
                                                        19
                                                    }
                                                    strokeWidth={
                                                        1.6
                                                    }
                                                />
                                            </Box>
                                        </Box>

                                        {/* DESCRIPTION */}

                                        <Typography
                                            sx={{
                                                maxWidth:
                                                    '720px',

                                                color:
                                                    'rgba(255,255,255,0.62)',

                                                fontSize:
                                                {
                                                    xs: '0.98rem',
                                                    md: '1.05rem',
                                                },

                                                lineHeight:
                                                    1.8,
                                            }}
                                        >
                                            {
                                                description
                                            }
                                        </Typography>

                                        {/* ================================= */}
                                        {/* DETAILS                           */}
                                        {/* ================================= */}

                                        <Box
                                            sx={{
                                                display:
                                                    'flex',

                                                flexWrap:
                                                    'wrap',

                                                gap: {
                                                    xs: 2,
                                                    md: 3,
                                                },

                                                mt: 4,
                                            }}
                                        >
                                            {details.map(
                                                (
                                                    detail
                                                ) => (
                                                    <Box
                                                        key={
                                                            detail
                                                        }
                                                        sx={{
                                                            display:
                                                                'flex',

                                                            alignItems:
                                                                'center',

                                                            gap: 1,
                                                        }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                width: 22,

                                                                height: 22,

                                                                display:
                                                                    'flex',

                                                                alignItems:
                                                                    'center',

                                                                justifyContent:
                                                                    'center',

                                                                borderRadius:
                                                                    '50%',

                                                                bgcolor:
                                                                    'rgba(155,197,174,0.12)',

                                                                color:
                                                                    '#9BC5AE',
                                                            }}
                                                        >
                                                            <Check
                                                                size={
                                                                    12
                                                                }
                                                                strokeWidth={
                                                                    2
                                                                }
                                                            />
                                                        </Box>

                                                        <Typography
                                                            sx={{
                                                                fontSize:
                                                                    '0.8rem',

                                                                color:
                                                                    'rgba(255,255,255,0.72)',
                                                            }}
                                                        >
                                                            {
                                                                detail
                                                            }
                                                        </Typography>
                                                    </Box>
                                                )
                                            )}
                                        </Box>
                                    </Box>

                                    {/* ===================================== */}
                                    {/* SEPARATOR ACCENT                      */}
                                    {/* ===================================== */}

                                    {index !==
                                        items.length -
                                        1 && (
                                            <Box
                                                sx={{
                                                    position:
                                                        'absolute',

                                                    left: {
                                                        xs: 3,
                                                        md: 3,
                                                    },

                                                    bottom: -1,

                                                    width:
                                                        '60px',

                                                    height:
                                                        '1px',

                                                    bgcolor:
                                                        '#9BC5AE',

                                                    opacity:
                                                        0.8,
                                                }}
                                            />
                                        )}
                                </MotionBox>
                            );
                        }
                    )}
                </Box>
            </Container>
        </Box>
    );
}

export default WorkingApproachSection;