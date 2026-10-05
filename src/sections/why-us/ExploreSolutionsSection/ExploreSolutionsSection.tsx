import {
    Box,
    Typography,
} from '@mui/material';

import {
    ArrowUpRight,
} from 'lucide-react';

import {
    motion,
} from 'motion/react';

import {
    Link,
} from 'react-router-dom';

import {
    Container,
} from '../../../components/common/Container';

import {
    exploreSolutionsData,
} from '../../../data/why-us/why-us.data';

const MotionBox = motion.create(Box);

export function ExploreSolutionsSection() {
    const {
        eyebrow,
        title,
        description,
        items,
    } = exploreSolutionsData;

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                overflow: 'hidden',

                bgcolor: '#f4f6f4',

                py: {
                    xs: 10,
                    md: 14,
                    lg: 17,
                },
            }}
        >
            {/* ================================================= */}
            {/* BACKGROUND DECORATION */}
            {/* ================================================= */}

            <Box
                sx={{
                    position: 'absolute',

                    width: {
                        xs: 420,
                        md: 720,
                    },

                    height: {
                        xs: 420,
                        md: 720,
                    },

                    borderRadius: '50%',

                    border:
                        '1px solid rgba(22,91,65,0.055)',

                    right: {
                        xs: -320,
                        md: -420,
                    },

                    top: {
                        xs: -220,
                        md: -380,
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
                                'minmax(0, 1.1fr) minmax(320px, 0.65fr)',
                        },

                        gap: {
                            xs: 4,
                            lg: 12,
                        },

                        alignItems: 'end',

                        mb: {
                            xs: 7,
                            md: 10,
                        },
                    }}
                >
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
                            duration: 0.65,
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
                                {eyebrow}
                            </Typography>
                        </Box>

                        <Typography
                            component="h2"
                            sx={{
                                maxWidth: 760,

                                color:
                                    'text.primary',

                                fontSize: {
                                    xs: '2.7rem',
                                    sm: '3.5rem',
                                    md: '4.2rem',
                                    lg: '4.7rem',
                                },

                                fontWeight: 700,

                                lineHeight: 0.98,

                                letterSpacing:
                                    '-0.055em',
                            }}
                        >
                            {title}
                        </Typography>
                    </MotionBox>

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
                            duration: 0.65,
                            delay: 0.08,
                        }}
                    >
                        <Typography
                            sx={{
                                maxWidth: 520,

                                color:
                                    'text.secondary',

                                fontSize: {
                                    xs: '0.96rem',
                                    md: '1rem',
                                },

                                lineHeight: 1.85,
                            }}
                        >
                            {description}
                        </Typography>
                    </MotionBox>
                </Box>

                {/* ================================================= */}
                {/* SOLUTIONS */}
                {/* ================================================= */}

                <Box
                    sx={{
                        borderTop: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    {items.map(
                        (solution, index) => {
                            const Icon =
                                solution.icon;

                            return (
                                <MotionBox
                                    key={
                                        solution.title
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
                                        amount: 0.25,
                                    }}
                                    transition={{
                                        duration: 0.65,

                                        delay:
                                            Math.min(
                                                index *
                                                    0.04,
                                                0.16
                                            ),

                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1,
                                        ],
                                    }}
                                >
                                    <Box
                                        component={Link}
                                        to={
                                            solution.href
                                        }
                                        sx={{
                                            position:
                                                'relative',

                                            display:
                                                'grid',

                                            gridTemplateColumns:
                                                {
                                                    xs:
                                                        '1fr',

                                                    md:
                                                        '80px minmax(180px, 0.45fr) minmax(0, 1fr) 54px',
                                                },

                                            gap: {
                                                xs: 2.5,
                                                md: 4,
                                                lg: 6,
                                            },

                                            alignItems:
                                                'center',

                                            py: {
                                                xs: 4.5,
                                                md: 5,
                                            },

                                            px: {
                                                xs: 0,
                                                md: 2,
                                            },

                                            color:
                                                'inherit',

                                            textDecoration:
                                                'none',

                                            borderBottom:
                                                '1px solid',

                                            borderColor:
                                                'divider',

                                            transition:
                                                'background-color 250ms ease, padding 250ms ease',

                                            '&::before':
                                                {
                                                    content:
                                                        '""',

                                                    position:
                                                        'absolute',

                                                    left: 0,
                                                    top: 0,
                                                    bottom: 0,

                                                    width: 3,

                                                    bgcolor:
                                                        'primary.main',

                                                    transform:
                                                        'scaleY(0)',

                                                    transformOrigin:
                                                        'center',

                                                    transition:
                                                        'transform 300ms ease',
                                                },

                                            '&:hover':
                                                {
                                                    bgcolor:
                                                        'background.paper',

                                                    px: {
                                                        md: 3,
                                                    },
                                                },

                                            '&:hover::before':
                                                {
                                                    transform:
                                                        'scaleY(1)',
                                                },

                                            '&:hover .explore-icon':
                                                {
                                                    bgcolor:
                                                        'primary.main',

                                                    borderColor:
                                                        'primary.main',

                                                    color:
                                                        '#fff',

                                                    transform:
                                                        'translateY(-3px)',
                                                },

                                            '&:hover .explore-arrow':
                                                {
                                                    color:
                                                        'primary.main',

                                                    transform:
                                                        'translate(4px, -4px)',
                                                },
                                        }}
                                    >
                                        {/* ICON */}

                                        <Box
                                            className="explore-icon"
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
                                                size={20}
                                                strokeWidth={
                                                    1.5
                                                }
                                            />
                                        </Box>

                                        {/* CATEGORY + TITLE */}

                                        <Box>
                                            <Typography
                                                variant="overline"
                                                sx={{
                                                    display:
                                                        'block',

                                                    mb: 1,

                                                    color:
                                                        'primary.main',

                                                    fontSize:
                                                        '0.69rem',

                                                    fontWeight: 700,

                                                    letterSpacing:
                                                        '0.13em',
                                                }}
                                            >
                                                {
                                                    solution.category
                                                }
                                            </Typography>

                                            <Typography
                                                component="h3"
                                                sx={{
                                                    color:
                                                        'text.primary',

                                                    fontSize: {
                                                        xs:
                                                            '1.55rem',

                                                        md:
                                                            '1.75rem',
                                                    },

                                                    fontWeight: 650,

                                                    lineHeight: 1.15,

                                                    letterSpacing:
                                                        '-0.035em',
                                                }}
                                            >
                                                {
                                                    solution.title
                                                }
                                            </Typography>
                                        </Box>

                                        {/* DESCRIPTION */}

                                        <Typography
                                            sx={{
                                                maxWidth: 620,

                                                color:
                                                    'text.secondary',

                                                fontSize:
                                                    '0.94rem',

                                                lineHeight: 1.75,
                                            }}
                                        >
                                            {
                                                solution.description
                                            }
                                        </Typography>

                                        {/* ARROW */}

                                        <Box
                                            sx={{
                                                display:
                                                    'flex',

                                                justifyContent:
                                                    {
                                                        xs:
                                                            'flex-start',

                                                        md:
                                                            'flex-end',
                                                    },

                                                pt: {
                                                    xs: 1,
                                                    md: 0,
                                                },
                                            }}
                                        >
                                            <ArrowUpRight
                                                className="explore-arrow"
                                                size={
                                                    21
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