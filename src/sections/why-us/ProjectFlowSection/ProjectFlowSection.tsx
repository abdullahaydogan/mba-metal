import {
    Box,
    Typography,
} from '@mui/material';

import {
    ArrowRight,
    Check,
} from 'lucide-react';

import {
    motion,
} from 'motion/react';

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

export function ProjectFlowSection() {
    const { t } = useTranslation();

    const {
        items,
    } = whyUsPageData.projectFlow;

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                overflow: 'hidden',

                bgcolor: '#f5f7f5',

                py: {
                    xs: 10,
                    md: 15,
                    lg: 18,
                },
            }}
        >
            {/* ================================================= */}
            {/* DECORATIVE BACKGROUND */}
            {/* ================================================= */}

            <Box
                sx={{
                    position: 'absolute',

                    width: {
                        xs: 360,
                        md: 620,
                    },

                    height: {
                        xs: 360,
                        md: 620,
                    },

                    borderRadius: '50%',

                    border:
                        '1px solid rgba(22, 91, 65, 0.07)',

                    top: {
                        xs: -180,
                        md: -300,
                    },

                    right: {
                        xs: -220,
                        md: -250,
                    },

                    pointerEvents: 'none',
                }}
            />

            <Box
                sx={{
                    position: 'absolute',

                    width: {
                        xs: 220,
                        md: 390,
                    },

                    height: {
                        xs: 220,
                        md: 390,
                    },

                    borderRadius: '50%',

                    border:
                        '1px solid rgba(22, 91, 65, 0.06)',

                    top: {
                        xs: -80,
                        md: -160,
                    },

                    right: {
                        xs: -110,
                        md: -70,
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
                {/* ================================================= */}
                {/* HEADER */}
                {/* ================================================= */}

                <Box
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',

                            lg:
                                'minmax(0, 1.05fr) minmax(320px, 0.65fr)',
                        },

                        gap: {
                            xs: 4,
                            lg: 12,
                        },

                        alignItems: 'end',

                        mb: {
                            xs: 8,
                            md: 11,
                            lg: 13,
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
                                        '0.16em',
                                }}
                            >
                                {t(
                                    'whyUsPage.projectFlow.eyebrow'
                                )}
                            </Typography>
                        </Box>

                        <Typography
                            component="h2"
                            sx={{
                                maxWidth: 820,

                                color:
                                    '#111714',

                                fontSize: {
                                    xs: '2.8rem',
                                    sm: '3.6rem',
                                    md: '4.4rem',
                                    lg: '4.9rem',
                                },

                                fontWeight: 700,

                                lineHeight: 0.98,

                                letterSpacing:
                                    '-0.055em',
                            }}
                        >
                            {t(
                                'whyUsPage.projectFlow.title'
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
                    >
                        <Typography
                            sx={{
                                maxWidth: 520,

                                justifySelf: {
                                    xs: 'start',
                                    lg: 'end',
                                },

                                color:
                                    'rgba(17,23,20,0.62)',

                                fontSize: {
                                    xs: '0.96rem',
                                    md: '1rem',
                                },

                                lineHeight: 1.85,
                            }}
                        >
                            {t(
                                'whyUsPage.projectFlow.description'
                            )}
                        </Typography>
                    </MotionBox>
                </Box>

                {/* ================================================= */}
                {/* FLOW */}
                {/* ================================================= */}

                <Box
                    sx={{
                        position: 'relative',

                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',

                            md:
                                'repeat(2, minmax(0, 1fr))',

                            lg:
                                'repeat(4, minmax(0, 1fr))',
                        },

                        borderTop:
                            '1px solid rgba(17,23,20,0.12)',

                        borderLeft: {
                            xs: 'none',

                            md:
                                '1px solid rgba(17,23,20,0.12)',
                        },
                    }}
                >
                    {items.map(
                        (item, index) => {
                            const Icon =
                                item.icon;

                            const basePath =
                                `whyUsPage.projectFlow.items.${item.id}`;

                            const number =
                                String(
                                    index + 1
                                ).padStart(
                                    2,
                                    '0'
                                );

                            return (
                                <MotionBox
                                    key={
                                        item.id
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
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        duration: 0.65,

                                        delay:
                                            index *
                                            0.07,

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
                                            xs: 390,
                                            md: 430,
                                            lg: 500,
                                        },

                                        display:
                                            'flex',

                                        flexDirection:
                                            'column',

                                        p: {
                                            xs: 4,
                                            sm: 5,
                                            lg: 4.5,
                                            xl: 5,
                                        },

                                        borderRight:
                                            '1px solid rgba(17,23,20,0.12)',

                                        borderBottom:
                                            '1px solid rgba(17,23,20,0.12)',

                                        transition:
                                            'background-color 280ms ease',

                                        '&::before':
                                            {
                                                content:
                                                    '""',

                                                position:
                                                    'absolute',

                                                top: 0,
                                                left: 0,

                                                width:
                                                    '100%',

                                                height: 2,

                                                bgcolor:
                                                    'primary.main',

                                                transform:
                                                    'scaleX(0)',

                                                transformOrigin:
                                                    'left',

                                                transition:
                                                    'transform 320ms ease',
                                            },

                                        '&:hover':
                                            {
                                                bgcolor:
                                                    '#ffffff',
                                            },

                                        '&:hover::before':
                                            {
                                                transform:
                                                    'scaleX(1)',
                                            },

                                        '&:hover .flow-icon':
                                            {
                                                bgcolor:
                                                    'primary.main',

                                                borderColor:
                                                    'primary.main',

                                                color:
                                                    '#fff',

                                                transform:
                                                    'translateY(-4px)',
                                            },
                                    }}
                                >
                                    {/* ================================= */}
                                    {/* TOP */}
                                    {/* ================================= */}

                                    <Box
                                        sx={{
                                            display:
                                                'flex',

                                            alignItems:
                                                'flex-start',

                                            justifyContent:
                                                'space-between',

                                            gap: 2,

                                            mb: {
                                                xs: 5,
                                                lg: 7,
                                            },
                                        }}
                                    >
                                        <Box
                                            className="flow-icon"
                                            sx={{
                                                width: 52,
                                                height: 52,

                                                display:
                                                    'flex',

                                                alignItems:
                                                    'center',

                                                justifyContent:
                                                    'center',

                                                borderRadius:
                                                    '50%',

                                                border:
                                                    '1px solid rgba(22,91,65,0.25)',

                                                color:
                                                    'primary.main',

                                                transition:
                                                    'all 280ms ease',
                                            }}
                                        >
                                            <Icon
                                                size={
                                                    20
                                                }
                                                strokeWidth={
                                                    1.6
                                                }
                                            />
                                        </Box>

                                        <Typography
                                            sx={{
                                                color:
                                                    'rgba(17,23,20,0.22)',

                                                fontSize:
                                                    '0.78rem',

                                                fontWeight:
                                                    700,

                                                letterSpacing:
                                                    '0.14em',
                                            }}
                                        >
                                            {number}
                                        </Typography>
                                    </Box>

                                    {/* ================================= */}
                                    {/* TITLE */}
                                    {/* ================================= */}

                                    <Typography
                                        component="h3"
                                        sx={{
                                            mb: 2.5,

                                            color:
                                                '#111714',

                                            fontSize: {
                                                xs:
                                                    '1.55rem',

                                                md:
                                                    '1.7rem',

                                                lg:
                                                    '1.55rem',

                                                xl:
                                                    '1.7rem',
                                            },

                                            fontWeight:
                                                650,

                                            lineHeight:
                                                1.12,

                                            letterSpacing:
                                                '-0.035em',
                                        }}
                                    >
                                        {t(
                                            `${basePath}.title`
                                        )}
                                    </Typography>

                                    {/* ================================= */}
                                    {/* DESCRIPTION */}
                                    {/* ================================= */}

                                    <Typography
                                        sx={{
                                            color:
                                                'rgba(17,23,20,0.64)',

                                            fontSize:
                                                '0.93rem',

                                            lineHeight:
                                                1.75,
                                        }}
                                    >
                                        {t(
                                            `${basePath}.description`
                                        )}
                                    </Typography>

                                    {/* ================================= */}
                                    {/* DETAIL */}
                                    {/* ================================= */}

                                    <Box
                                        sx={{
                                            mt: 'auto',
                                            pt: 5,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display:
                                                    'flex',

                                                alignItems:
                                                    'flex-start',

                                                gap: 1.5,

                                                pt: 3,

                                                borderTop:
                                                    '1px solid rgba(17,23,20,0.1)',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 24,
                                                    height: 24,

                                                    flexShrink: 0,

                                                    mt: 0.1,

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
                                                        13
                                                    }
                                                    strokeWidth={
                                                        2
                                                    }
                                                />
                                            </Box>

                                            <Typography
                                                sx={{
                                                    color:
                                                        'rgba(17,23,20,0.58)',

                                                    fontSize:
                                                        '0.84rem',

                                                    lineHeight:
                                                        1.65,
                                                }}
                                            >
                                                {t(
                                                    `${basePath}.detail`
                                                )}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* ================================= */}
                                    {/* CONNECTOR */}
                                    {/* ================================= */}

                                    {index <
                                        items.length -
                                            1 && (
                                        <Box
                                            sx={{
                                                position:
                                                    'absolute',

                                                display:
                                                    {
                                                        xs:
                                                            'none',

                                                        lg:
                                                            'flex',
                                                    },

                                                alignItems:
                                                    'center',

                                                justifyContent:
                                                    'center',

                                                width: 34,
                                                height: 34,

                                                borderRadius:
                                                    '50%',

                                                bgcolor:
                                                    '#f5f7f5',

                                                border:
                                                    '1px solid rgba(17,23,20,0.12)',

                                                color:
                                                    'primary.main',

                                                top: 90,
                                                right:
                                                    -17,

                                                zIndex: 3,
                                            }}
                                        >
                                            <ArrowRight
                                                size={
                                                    15
                                                }
                                                strokeWidth={
                                                    1.6
                                                }
                                            />
                                        </Box>
                                    )}
                                </MotionBox>
                            );
                        }
                    )}
                </Box>

                {/* ================================================= */}
                {/* FOOTER */}
                {/* ================================================= */}

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
                    }}
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',

                            md:
                                'minmax(180px, 0.35fr) minmax(0, 1fr)',
                        },

                        gap: {
                            xs: 2,
                            md: 6,
                        },

                        mt: {
                            xs: 6,
                            md: 8,
                        },

                        pt: {
                            xs: 4,
                            md: 5,
                        },

                        borderTop:
                            '1px solid rgba(17,23,20,0.12)',
                    }}
                >
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
                            'whyUsPage.projectFlow.footer.eyebrow'
                        )}
                    </Typography>

                    <Typography
                        sx={{
                            maxWidth: 760,

                            color:
                                'rgba(17,23,20,0.62)',

                            fontSize: {
                                xs: '0.95rem',
                                md: '1rem',
                            },

                            lineHeight: 1.85,
                        }}
                    >
                        {t(
                            'whyUsPage.projectFlow.footer.description'
                        )}
                    </Typography>
                </MotionBox>
            </Container>
        </Box>
    );
}