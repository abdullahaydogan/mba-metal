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
    useTranslation,
} from 'react-i18next';

import {
    Container,
} from '../../../components/common/Container';

import {
    whyUsPageData,
} from '../../../data/why-us/why-us.data';

const MotionBox = motion.create(Box);

const detailIds = [
    'detail1',
    'detail2',
    'detail3',
    'detail4',
] as const;

export function SolutionExamplesSection() {
    const { t } = useTranslation();

    const {
        examples,
    } = whyUsPageData.solutionExamples;

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                overflow: 'hidden',
                bgcolor: '#111714',
                color: '#fff',

                py: {
                    xs: 10,
                    md: 14,
                    lg: 18,
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
                        xs: 400,
                        md: 700,
                    },

                    height: {
                        xs: 400,
                        md: 700,
                    },

                    borderRadius: '50%',

                    border:
                        '1px solid rgba(255,255,255,0.035)',

                    top: -260,
                    right: -220,

                    pointerEvents: 'none',
                }}
            />

            <Box
                sx={{
                    position: 'absolute',

                    width: {
                        xs: 260,
                        md: 430,
                    },

                    height: {
                        xs: 260,
                        md: 430,
                    },

                    borderRadius: '50%',

                    border:
                        '1px solid rgba(255,255,255,0.035)',

                    top: -100,
                    right: -60,

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
                            lg: '1.1fr 0.9fr',
                        },

                        gap: {
                            xs: 4,
                            lg: 12,
                        },

                        alignItems: 'end',

                        mb: {
                            xs: 7,
                            md: 10,
                            lg: 12,
                        },
                    }}
                >
                    {/* HEADER LEFT */}

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

                                    borderRadius:
                                        '50%',

                                    bgcolor:
                                        'primary.light',
                                }}
                            />

                            <Typography
                                variant="overline"
                                sx={{
                                    color:
                                        'primary.light',

                                    fontWeight: 700,

                                    letterSpacing:
                                        '0.16em',
                                }}
                            >
                                {t(
                                    'whyUsPage.solutionExamples.eyebrow'
                                )}
                            </Typography>
                        </Box>

                        <Typography
                            component="h2"
                            sx={{
                                maxWidth: 760,

                                fontSize: {
                                    xs: '2.8rem',
                                    sm: '3.5rem',
                                    md: '4.3rem',
                                    lg: '4.8rem',
                                },

                                fontWeight: 700,

                                lineHeight: 0.98,

                                letterSpacing:
                                    '-0.055em',
                            }}
                        >
                            {t(
                                'whyUsPage.solutionExamples.title'
                            )}
                        </Typography>
                    </Box>

                    {/* HEADER RIGHT */}

                    <Typography
                        sx={{
                            maxWidth: 520,

                            justifySelf: {
                                xs: 'start',
                                lg: 'end',
                            },

                            color:
                                'rgba(255,255,255,0.56)',

                            fontSize: {
                                xs: '0.96rem',
                                md: '1rem',
                            },

                            lineHeight: 1.85,
                        }}
                    >
                        {t(
                            'whyUsPage.solutionExamples.description'
                        )}
                    </Typography>
                </Box>

                {/* ================================================= */}
                {/* SOLUTION GRID */}
                {/* ================================================= */}

                <Box
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'repeat(2, 1fr)',
                        },

                        borderTop:
                            '1px solid rgba(255,255,255,0.14)',

                        borderLeft: {
                            xs: 'none',

                            md:
                                '1px solid rgba(255,255,255,0.14)',
                        },
                    }}
                >
                    {examples.map(
                        (example, index) => {
                            const Icon =
                                example.icon;

                            const basePath =
                                `whyUsPage.solutionExamples.examples.${example.id}`;

                            return (
                                <MotionBox
                                    key={
                                        example.id
                                    }
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
                                        duration: 0.7,

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

                                        minHeight: {
                                            xs: 'auto',
                                            md: 520,
                                        },

                                        p: {
                                            xs: 4,
                                            sm: 5,
                                            md: 6,
                                            lg: 7,
                                        },

                                        borderRight:
                                            '1px solid rgba(255,255,255,0.14)',

                                        borderBottom:
                                            '1px solid rgba(255,255,255,0.14)',

                                        transition:
                                            'background-color 300ms ease',

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

                                                height:
                                                    '2px',

                                                bgcolor:
                                                    'primary.main',

                                                transform:
                                                    'scaleX(0)',

                                                transformOrigin:
                                                    'left',

                                                transition:
                                                    'transform 350ms ease',
                                            },

                                        '&:hover':
                                            {
                                                bgcolor:
                                                    'rgba(255,255,255,0.035)',
                                            },

                                        '&:hover::before':
                                            {
                                                transform:
                                                    'scaleX(1)',
                                            },

                                        '&:hover .solution-icon':
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

                                        '&:hover .solution-arrow':
                                            {
                                                color:
                                                    'primary.light',

                                                transform:
                                                    'translate(4px, -4px)',
                                            },
                                    }}
                                >
                                    {/* TOP */}

                                    <Box
                                        sx={{
                                            display:
                                                'flex',

                                            justifyContent:
                                                'space-between',

                                            alignItems:
                                                'flex-start',

                                            mb: {
                                                xs: 5,
                                                md: 7,
                                            },
                                        }}
                                    >
                                        {/* ICON */}

                                        <Box
                                            className="solution-icon"
                                            sx={{
                                                width: 56,
                                                height: 56,

                                                borderRadius:
                                                    '50%',

                                                display:
                                                    'flex',

                                                alignItems:
                                                    'center',

                                                justifyContent:
                                                    'center',

                                                border:
                                                    '1px solid rgba(255,255,255,0.28)',

                                                color:
                                                    'rgba(255,255,255,0.88)',

                                                transition:
                                                    'all 300ms ease',
                                            }}
                                        >
                                            <Icon
                                                size={
                                                    22
                                                }
                                                strokeWidth={
                                                    1.6
                                                }
                                            />
                                        </Box>

                                        {/* ARROW */}

                                        <ArrowUpRight
                                            className="solution-arrow"
                                            size={23}
                                            strokeWidth={
                                                1.5
                                            }
                                            style={{
                                                transition:
                                                    'all 300ms ease',
                                            }}
                                        />
                                    </Box>

                                    {/* EYEBROW */}

                                    <Typography
                                        variant="overline"
                                        sx={{
                                            display:
                                                'block',

                                            mb: 2,

                                            color:
                                                'primary.light',

                                            fontWeight:
                                                700,

                                            letterSpacing:
                                                '0.14em',
                                        }}
                                    >
                                        {t(
                                            `${basePath}.eyebrow`
                                        )}
                                    </Typography>

                                    {/* TITLE */}

                                    <Typography
                                        component="h3"
                                        sx={{
                                            maxWidth: 500,

                                            mb: 3,

                                            fontSize: {
                                                xs:
                                                    '1.8rem',

                                                sm:
                                                    '2rem',

                                                md:
                                                    '2.3rem',
                                            },

                                            fontWeight:
                                                650,

                                            lineHeight:
                                                1.08,

                                            letterSpacing:
                                                '-0.04em',
                                        }}
                                    >
                                        {t(
                                            `${basePath}.title`
                                        )}
                                    </Typography>

                                    {/* DESCRIPTION */}

                                    <Typography
                                        sx={{
                                            maxWidth: 520,

                                            color:
                                                'rgba(255,255,255,0.55)',

                                            fontSize: {
                                                xs:
                                                    '0.94rem',

                                                md:
                                                    '0.97rem',
                                            },

                                            lineHeight:
                                                1.8,
                                        }}
                                    >
                                        {t(
                                            `${basePath}.description`
                                        )}
                                    </Typography>

                                    {/* DETAILS */}

                                    <Box
                                        sx={{
                                            mt: {
                                                xs: 4,
                                                md: 5,
                                            },

                                            pt: {
                                                xs: 3,
                                                md: 4,
                                            },

                                            borderTop:
                                                '1px solid rgba(255,255,255,0.12)',

                                            display:
                                                'grid',

                                            gridTemplateColumns:
                                                {
                                                    xs:
                                                        '1fr',

                                                    sm:
                                                        'repeat(2, minmax(0, 1fr))',
                                                },

                                            gap: {
                                                xs: 1.8,
                                                sm: 2,
                                            },
                                        }}
                                    >
                                        {detailIds.map(
                                            (
                                                detailId
                                            ) => (
                                                <Box
                                                    key={
                                                        detailId
                                                    }
                                                    sx={{
                                                        display:
                                                            'flex',

                                                        alignItems:
                                                            'center',

                                                        gap: 1.4,
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            width: 24,
                                                            height: 24,

                                                            flexShrink: 0,

                                                            display:
                                                                'flex',

                                                            alignItems:
                                                                'center',

                                                            justifyContent:
                                                                'center',

                                                            borderRadius:
                                                                '50%',

                                                            bgcolor:
                                                                'rgba(255,255,255,0.06)',

                                                            color:
                                                                'primary.light',
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
                                                                'rgba(255,255,255,0.72)',

                                                            fontSize:
                                                                '0.9rem',

                                                            lineHeight:
                                                                1.5,
                                                        }}
                                                    >
                                                        {t(
                                                            `${basePath}.details.${detailId}`
                                                        )}
                                                    </Typography>
                                                </Box>
                                            )
                                        )}
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