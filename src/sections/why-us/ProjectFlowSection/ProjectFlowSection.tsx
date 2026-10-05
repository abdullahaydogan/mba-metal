import {
    Box,
    Typography,
} from '@mui/material';

import {
    ArrowRight,
    Check,
} from 'lucide-react';

import { motion } from 'motion/react';

import { Container } from '../../../components/common/Container';

import {
    projectFlowData,
} from '../../../data/why-us/why-us.data';

const MotionBox = motion.create(Box);

export function ProjectFlowSection() {
    const {
        eyebrow,
        title,
        description,
        items,
    } = projectFlowData;

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
            {/* Decorative background */}
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
                            lg: '1.15fr 0.65fr',
                        },

                        gap: {
                            xs: 4,
                            lg: 12,
                        },

                        alignItems: 'end',
                    }}
                >
                    {/* LEFT */}
                    <Box>
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
                                    width: 7,
                                    height: 7,

                                    borderRadius: '50%',

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
                                {eyebrow}
                            </Typography>
                        </Box>

                        <Typography
                            component="h2"
                            sx={{
                                maxWidth: 780,

                                fontSize: {
                                    xs: '2.8rem',
                                    sm: '3.5rem',
                                    md: '4.2rem',
                                    lg: '4.7rem',
                                },

                                fontWeight: 700,

                                lineHeight: 0.98,

                                letterSpacing:
                                    '-0.055em',

                                color: '#111714',
                            }}
                        >
                            {title}
                        </Typography>
                    </Box>

                    {/* RIGHT */}
                    <Typography
                        sx={{
                            maxWidth: 500,

                            justifySelf: {
                                xs: 'start',
                                lg: 'end',
                            },

                            color:
                                'rgba(17, 23, 20, 0.60)',

                            fontSize: {
                                xs: '0.96rem',
                                md: '1rem',
                            },

                            lineHeight: 1.85,
                        }}
                    >
                        {description}
                    </Typography>
                </Box>

                {/* ================================================= */}
                {/* FLOW */}
                {/* ================================================= */}

                <Box
                    sx={{
                        position: 'relative',

                        mt: {
                            xs: 8,
                            md: 11,
                            lg: 13,
                        },
                    }}
                >
                    {/* DESKTOP MAIN LINE */}
                    <Box
                        sx={{
                            display: {
                                xs: 'none',
                                lg: 'block',
                            },

                            position: 'absolute',

                            top: 30,

                            left: 30,
                            right: 30,

                            height: '1px',

                            bgcolor:
                                'rgba(17, 23, 20, 0.16)',
                        }}
                    />

                    {/* Animated progress line */}
                    <MotionBox
                        initial={{
                            scaleX: 0,
                        }}
                        whileInView={{
                            scaleX: 1,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.4,
                        }}
                        transition={{
                            duration: 1.4,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                        sx={{
                            display: {
                                xs: 'none',
                                lg: 'block',
                            },

                            position: 'absolute',

                            top: 30,

                            left: 30,
                            right: 30,

                            height: '1px',

                            bgcolor:
                                'primary.main',

                            transformOrigin: 'left',

                            zIndex: 1,
                        }}
                    />

                    {/* MOBILE VERTICAL LINE */}
                    <Box
                        sx={{
                            display: {
                                xs: 'block',
                                lg: 'none',
                            },

                            position: 'absolute',

                            top: 30,
                            bottom: 30,
                            left: 29,

                            width: '1px',

                            bgcolor:
                                'rgba(17, 23, 20, 0.14)',
                        }}
                    />

                    {/* ITEMS */}
                    <Box
                        sx={{
                            display: 'grid',

                            gridTemplateColumns: {
                                xs: '1fr',
                                lg: `repeat(${items.length}, minmax(0, 1fr))`,
                            },

                            gap: {
                                xs: 0,
                                lg: 0,
                            },
                        }}
                    >
                        {items.map(
                            (item, index) => (
                                <MotionBox
                                    key={item.title}
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
                                        amount: 0.25,
                                    }}
                                    transition={{
                                        duration: 0.65,

                                        delay:
                                            index *
                                            0.1,

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

                                        display: {
                                            xs: 'grid',
                                            lg: 'block',
                                        },

                                        gridTemplateColumns:
                                            {
                                                xs:
                                                    '60px 1fr',
                                                lg: '1fr',
                                            },

                                        gap: {
                                            xs: 3,
                                            lg: 0,
                                        },

                                        pb: {
                                            xs: 6,
                                            lg: 0,
                                        },

                                        pr: {
                                            lg:
                                                index ===
                                                items.length -
                                                    1
                                                    ? 0
                                                    : 3,
                                        },

                                        '&:hover .flow-node':
                                            {
                                                bgcolor:
                                                    'primary.main',

                                                borderColor:
                                                    'primary.main',

                                                transform:
                                                    'scale(1.08)',
                                            },

                                        '&:hover .flow-node-dot':
                                            {
                                                bgcolor:
                                                    '#fff',

                                                transform:
                                                    'scale(0.75)',
                                            },

                                        '&:hover .flow-card':
                                            {
                                                transform:
                                                    'translateY(-8px)',

                                                borderColor:
                                                    'rgba(22, 91, 65, 0.25)',

                                                boxShadow:
                                                    '0 22px 60px rgba(17, 23, 20, 0.08)',
                                            },

                                        '&:hover .flow-arrow':
                                            {
                                                transform:
                                                    'translateX(5px)',

                                                color:
                                                    'primary.main',
                                            },
                                    }}
                                >
                                    {/* ========================= */}
                                    {/* NODE */}
                                    {/* ========================= */}

                                    <Box
                                        className="flow-node"
                                        sx={{
                                            position:
                                                'relative',

                                            zIndex: 3,

                                            width: 60,
                                            height: 60,

                                            display:
                                                'flex',

                                            alignItems:
                                                'center',

                                            justifyContent:
                                                'center',

                                            borderRadius:
                                                '50%',

                                            bgcolor:
                                                '#f5f7f5',

                                            border:
                                                '1px solid rgba(22, 91, 65, 0.45)',

                                            transition:
                                                'all 300ms ease',
                                        }}
                                    >
                                        <Box
                                            className="flow-node-dot"
                                            sx={{
                                                width: 9,
                                                height: 9,

                                                borderRadius:
                                                    '50%',

                                                bgcolor:
                                                    'primary.main',

                                                transition:
                                                    'all 300ms ease',
                                            }}
                                        />
                                    </Box>

                                    {/* ========================= */}
                                    {/* CONTENT CARD */}
                                    {/* ========================= */}

                                    <Box
                                        className="flow-card"
                                        sx={{
                                            position:
                                                'relative',

                                            mt: {
                                                xs: 0,
                                                lg: 5,
                                            },

                                            minHeight: {
                                                xs: 'auto',
                                                lg: 330,
                                            },

                                            p: {
                                                xs:
                                                    '0 0 0 0',
                                                lg: 4,
                                            },

                                            bgcolor: {
                                                xs:
                                                    'transparent',
                                                lg: '#fff',
                                            },

                                            border: {
                                                xs: 'none',
                                                lg:
                                                    '1px solid rgba(17, 23, 20, 0.10)',
                                            },

                                            transition:
                                                'transform 300ms ease, border-color 300ms ease, box-shadow 300ms ease',
                                        }}
                                    >
                                        {/* small accent */}
                                        <Box
                                            sx={{
                                                display: {
                                                    xs: 'none',
                                                    lg:
                                                        'block',
                                                },

                                                position:
                                                    'absolute',

                                                top: 0,
                                                left: 0,

                                                width: 46,
                                                height: 2,

                                                bgcolor:
                                                    'primary.main',
                                            }}
                                        />

                                        <Typography
                                            component="h3"
                                            sx={{
                                                mb: 2.5,

                                                color:
                                                    '#111714',

                                                fontSize: {
                                                    xs:
                                                        '1.5rem',
                                                    md:
                                                        '1.65rem',
                                                },

                                                fontWeight: 650,

                                                lineHeight: 1.15,

                                                letterSpacing:
                                                    '-0.035em',
                                            }}
                                        >
                                            {item.title}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                maxWidth: 300,

                                                color:
                                                    'rgba(17, 23, 20, 0.60)',

                                                fontSize:
                                                    '0.94rem',

                                                lineHeight: 1.75,
                                            }}
                                        >
                                            {
                                                item.description
                                            }
                                        </Typography>

                                        {/* BOTTOM */}
                                        <Box
                                            sx={{
                                                display: {
                                                    xs: 'none',
                                                    lg:
                                                        'flex',
                                                },

                                                position:
                                                    'absolute',

                                                left: 32,
                                                right: 32,
                                                bottom: 30,

                                                alignItems:
                                                    'center',

                                                justifyContent:
                                                    'space-between',

                                                pt: 2.5,

                                                borderTop:
                                                    '1px solid rgba(17, 23, 20, 0.08)',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display:
                                                        'flex',

                                                    alignItems:
                                                        'center',

                                                    gap: 1,
                                                }}
                                            >
                                                <Check
                                                    size={
                                                        15
                                                    }
                                                    strokeWidth={
                                                        1.8
                                                    }
                                                />

                                                <Typography
                                                    sx={{
                                                        fontSize:
                                                            '0.76rem',

                                                        fontWeight: 600,

                                                        letterSpacing:
                                                            '0.04em',

                                                        color:
                                                            'rgba(17, 23, 20, 0.55)',
                                                    }}
                                                >
                                                    Süreç
                                                    adımı
                                                </Typography>
                                            </Box>

                                            {index <
                                                items.length -
                                                    1 && (
                                                <ArrowRight
                                                    className="flow-arrow"
                                                    size={
                                                        18
                                                    }
                                                    strokeWidth={
                                                        1.5
                                                    }
                                                    style={{
                                                        transition:
                                                            'all 250ms ease',
                                                    }}
                                                />
                                            )}
                                        </Box>
                                    </Box>
                                </MotionBox>
                            )
                        )}
                    </Box>
                </Box>

                {/* ================================================= */}
                {/* BOTTOM STATEMENT */}
                {/* ================================================= */}

                <Box
                    sx={{
                        mt: {
                            xs: 7,
                            md: 10,
                            lg: 12,
                        },

                        pt: {
                            xs: 4,
                            md: 5,
                        },

                        borderTop:
                            '1px solid rgba(17, 23, 20, 0.12)',

                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',
                            md:
                                'auto minmax(0, 1fr)',
                        },

                        gap: {
                            xs: 2,
                            md: 5,
                        },

                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                        }}
                    >
                        <Box
                            sx={{
                                width: 34,
                                height: 34,

                                display: 'flex',
                                alignItems:
                                    'center',
                                justifyContent:
                                    'center',

                                borderRadius: '50%',

                                bgcolor:
                                    'primary.main',

                                color: '#fff',
                            }}
                        >
                            <Check
                                size={16}
                                strokeWidth={2}
                            />
                        </Box>

                        <Typography
                            sx={{
                                fontSize:
                                    '0.82rem',

                                fontWeight: 700,

                                letterSpacing:
                                    '0.08em',

                                textTransform:
                                    'uppercase',

                                color:
                                    'primary.main',

                                whiteSpace:
                                    'nowrap',
                            }}
                        >
                            Kontrollü üretim
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            maxWidth: 700,

                            color:
                                'rgba(17, 23, 20, 0.55)',

                            fontSize:
                                '0.92rem',

                            lineHeight: 1.7,
                        }}
                    >
                        Her proje kendi teknik
                        gereksinimleri doğrultusunda
                        değerlendirilir ve üretimin
                        her aşaması kontrollü bir
                        süreç içerisinde ilerletilir.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}