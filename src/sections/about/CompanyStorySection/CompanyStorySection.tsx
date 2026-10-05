import {
    Box,
    Typography,
} from '@mui/material';

import {
    ArrowUpRight,
    FileText,
    Image as ImageIcon,
    Package,
    Settings,
} from 'lucide-react';

import { motion } from 'motion/react';

import { useTranslation } from 'react-i18next';

import { Container } from '../../../components/common/Container';

import {
    companyStoryData,
} from '../../../data/about/about.data';

const MotionBox = motion.create(Box);

const inputIcons = [
    FileText,
    Package,
    ImageIcon,
    Settings,
];

export function CompanyStorySection() {
    const { t } = useTranslation();

    const { image } = companyStoryData;

    const secondaryParagraphs = t(
        'aboutPage.companyStory.secondaryStory.paragraphs',
        {
            returnObjects: true,
        }
    ) as string[];

    const inputTypes = t(
        'aboutPage.companyStory.inputs.items',
        {
            returnObjects: true,
        }
    ) as string[];

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                overflow: 'hidden',
                bgcolor: '#F7F8F5',

                py: {
                    xs: 10,
                    md: 15,
                    lg: 18,
                },
            }}
        >
            {/* ---------------------------------------------------------------- */}
            {/* BACKGROUND DECORATION                                            */}
            {/* ---------------------------------------------------------------- */}

            <Box
                sx={{
                    position: 'absolute',

                    top: -260,
                    right: -260,

                    width: 620,
                    height: 620,

                    borderRadius: '50%',

                    border:
                        '1px solid rgba(17, 23, 20, 0.05)',

                    pointerEvents: 'none',
                }}
            />

            <Box
                sx={{
                    position: 'absolute',

                    top: -170,
                    right: -170,

                    width: 440,
                    height: 440,

                    borderRadius: '50%',

                    border:
                        '1px solid rgba(17, 23, 20, 0.04)',

                    pointerEvents: 'none',
                }}
            />

            <Container>
                {/* ============================================================ */}
                {/* INTRO                                                        */}
                {/* ============================================================ */}

                <Box
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',
                            lg: '1.05fr 0.95fr',
                        },

                        columnGap: {
                            lg: 12,
                        },

                        rowGap: 6,

                        alignItems: 'end',
                    }}
                >
                    {/* LEFT */}

                    <MotionBox
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
                            amount: 0.35,
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
                    >
                        {/* EYEBROW */}

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                mb: 4,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 34,
                                    height: '1px',
                                    bgcolor:
                                        'primary.main',
                                }}
                            />

                            <Typography
                                sx={{
                                    color:
                                        'primary.main',

                                    fontSize:
                                        '0.72rem',

                                    fontWeight: 700,

                                    letterSpacing:
                                        '0.22em',

                                    textTransform:
                                        'uppercase',
                                }}
                            >
                                {t(
                                    'aboutPage.companyStory.eyebrow'
                                )}
                            </Typography>
                        </Box>

                        {/* TITLE */}

                        <Typography
                            component="h2"
                            sx={{
                                maxWidth: 700,

                                color: '#111714',

                                fontSize: {
                                    xs: '2.8rem',
                                    sm: '3.8rem',
                                    md: '4.7rem',
                                    lg: '5.2rem',
                                },

                                fontWeight: 650,

                                lineHeight: 0.94,

                                letterSpacing:
                                    '-0.065em',
                            }}
                        >
                            {t(
                                'aboutPage.companyStory.title'
                            )}
                        </Typography>
                    </MotionBox>

                    {/* RIGHT */}

                    <MotionBox
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
                            amount: 0.35,
                        }}
                        transition={{
                            duration: 0.75,
                            delay: 0.08,

                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                        sx={{
                            position: 'relative',

                            pl: {
                                lg: 6,
                            },

                            '&::before': {
                                content: '""',

                                display: {
                                    xs: 'none',
                                    lg: 'block',
                                },

                                position:
                                    'absolute',

                                left: 0,
                                top: 2,
                                bottom: 2,

                                width: '1px',

                                bgcolor:
                                    'rgba(17, 23, 20, 0.12)',
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                maxWidth: 580,

                                mb: 3,

                                color: '#111714',

                                fontSize: {
                                    xs: '1.05rem',
                                    md: '1.15rem',
                                },

                                lineHeight: 1.75,
                            }}
                        >
                            {t(
                                'aboutPage.companyStory.description'
                            )}
                        </Typography>

                        <Typography
                            sx={{
                                maxWidth: 580,

                                color:
                                    'rgba(17, 23, 20, 0.58)',

                                fontSize: {
                                    xs: '0.95rem',
                                    md: '1rem',
                                },

                                lineHeight: 1.85,
                            }}
                        >
                            {t(
                                'aboutPage.companyStory.secondaryDescription'
                            )}
                        </Typography>
                    </MotionBox>
                </Box>

                {/* ============================================================ */}
                {/* HERO IMAGE                                                   */}
                {/* ============================================================ */}

                <MotionBox
                    initial={{
                        opacity: 0,
                        y: 45,
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
                        duration: 0.85,

                        ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                        ],
                    }}
                    sx={{
                        position: 'relative',

                        mt: {
                            xs: 8,
                            md: 12,
                        },
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',

                            overflow: 'hidden',

                            height: {
                                xs: 380,
                                sm: 500,
                                md: 620,
                                lg: 680,
                            },

                            borderRadius: {
                                xs: '22px',
                                md: '34px',
                            },
                        }}
                    >
                        <Box
                            component="img"
                            src={image}
                            alt={t(
                                'aboutPage.companyStory.imageAlt'
                            )}
                            sx={{
                                display: 'block',

                                width: '100%',
                                height: '100%',

                                objectFit: 'cover',

                                objectPosition:
                                    'center',

                                transition:
                                    'transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)',

                                '&:hover': {
                                    transform:
                                        'scale(1.025)',
                                },
                            }}
                        />

                        <Box
                            sx={{
                                position: 'absolute',
                                inset: 0,

                                background:
                                    'linear-gradient(90deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0) 55%)',

                                pointerEvents:
                                    'none',
                            }}
                        />
                    </Box>

                    {/* ======================================================== */}
                    {/* FLOATING PANEL                                           */}
                    {/* ======================================================== */}

                    <Box
                        sx={{
                            position: {
                                xs: 'relative',
                                lg: 'absolute',
                            },

                            right: {
                                lg: 32,
                            },

                            bottom: {
                                lg: 32,
                            },

                            width: {
                                xs: '100%',
                                lg: 390,
                            },

                            mt: {
                                xs: 2,
                                lg: 0,
                            },

                            p: {
                                xs: 4,
                                md: 5,
                            },

                            bgcolor: '#12221B',

                            color: '#fff',

                            borderRadius: {
                                xs: '20px',
                                md: '26px',
                            },

                            boxShadow:
                                '0 24px 70px rgba(0, 0, 0, 0.18)',
                        }}
                    >
                        <Typography
                            sx={{
                                mb: 5,

                                color:
                                    'rgba(255,255,255,0.55)',

                                fontSize:
                                    '0.7rem',

                                fontWeight: 700,

                                letterSpacing:
                                    '0.22em',

                                textTransform:
                                    'uppercase',
                            }}
                        >
                            {t(
                                'aboutPage.companyStory.approach.eyebrow'
                            )}
                        </Typography>

                        {/* PROJECT BASED */}

                        <Box
                            sx={{
                                pb: 3.5,
                                mb: 3.5,

                                borderBottom:
                                    '1px solid rgba(255,255,255,0.14)',
                            }}
                        >
                            <Typography
                                sx={{
                                    mb: 0.8,

                                    color: '#fff',

                                    fontSize: {
                                        xs: '1.8rem',
                                        md: '2.2rem',
                                    },

                                    fontWeight: 500,

                                    letterSpacing:
                                        '-0.04em',
                                }}
                            >
                                {t(
                                    'aboutPage.companyStory.approach.projectBased.title'
                                )}
                            </Typography>

                            <Typography
                                sx={{
                                    color:
                                        'rgba(255,255,255,0.55)',

                                    fontSize:
                                        '0.92rem',

                                    lineHeight: 1.65,
                                }}
                            >
                                {t(
                                    'aboutPage.companyStory.approach.projectBased.description'
                                )}
                            </Typography>
                        </Box>

                        {/* FLEXIBLE PRODUCTION */}

                        <Box
                            sx={{
                                pb: 3.5,
                                mb: 3.5,

                                borderBottom:
                                    '1px solid rgba(255,255,255,0.14)',
                            }}
                        >
                            <Typography
                                sx={{
                                    mb: 0.8,

                                    color: '#fff',

                                    fontSize: {
                                        xs: '1.8rem',
                                        md: '2.2rem',
                                    },

                                    fontWeight: 500,

                                    letterSpacing:
                                        '-0.04em',
                                }}
                            >
                                {t(
                                    'aboutPage.companyStory.approach.flexibleProduction.title'
                                )}
                            </Typography>

                            <Typography
                                sx={{
                                    color:
                                        'rgba(255,255,255,0.55)',

                                    fontSize:
                                        '0.92rem',

                                    lineHeight: 1.65,
                                }}
                            >
                                {t(
                                    'aboutPage.companyStory.approach.flexibleProduction.description'
                                )}
                            </Typography>
                        </Box>

                        {/* BRAND */}

                        <Box
                            sx={{
                                display: 'flex',

                                alignItems:
                                    'center',

                                justifyContent:
                                    'space-between',
                            }}
                        >
                            <Typography
                                sx={{
                                    color:
                                        'rgba(255,255,255,0.75)',

                                    fontSize:
                                        '0.9rem',

                                    fontWeight: 500,
                                }}
                            >
                                {t(
                                    'aboutPage.companyStory.approach.brand'
                                )}
                            </Typography>

                            <Box
                                sx={{
                                    width: 44,
                                    height: 44,

                                    display: 'grid',

                                    placeItems:
                                        'center',

                                    border:
                                        '1px solid rgba(255,255,255,0.2)',

                                    borderRadius:
                                        '50%',
                                }}
                            >
                                <ArrowUpRight
                                    size={18}
                                    strokeWidth={
                                        1.7
                                    }
                                />
                            </Box>
                        </Box>
                    </Box>
                </MotionBox>

                {/* ============================================================ */}
                {/* SECONDARY STORY                                              */}
                {/* ============================================================ */}

                <Box
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',
                            lg: '0.9fr 1.1fr',
                        },

                        gap: {
                            xs: 6,
                            lg: 14,
                        },

                        mt: {
                            xs: 11,
                            md: 16,
                        },

                        pt: {
                            xs: 7,
                            md: 10,
                        },

                        borderTop:
                            '1px solid rgba(17, 23, 20, 0.12)',
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
                            amount: 0.4,
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

                                alignItems:
                                    'center',

                                gap: 2,

                                mb: 4,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 34,

                                    height: '1px',

                                    bgcolor:
                                        'primary.main',
                                }}
                            />

                            <Typography
                                sx={{
                                    color:
                                        'primary.main',

                                    fontSize:
                                        '0.7rem',

                                    fontWeight: 700,

                                    letterSpacing:
                                        '0.2em',

                                    textTransform:
                                        'uppercase',
                                }}
                            >
                                {t(
                                    'aboutPage.companyStory.secondaryStory.eyebrow'
                                )}
                            </Typography>
                        </Box>

                        <Typography
                            component="h3"
                            sx={{
                                maxWidth: 570,

                                color: '#111714',

                                fontSize: {
                                    xs: '2.5rem',
                                    sm: '3.2rem',
                                    md: '3.8rem',
                                },

                                fontWeight: 650,

                                lineHeight: 0.98,

                                letterSpacing:
                                    '-0.055em',
                            }}
                        >
                            {t(
                                'aboutPage.companyStory.secondaryStory.title'
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
                            amount: 0.4,
                        }}
                        transition={{
                            duration: 0.7,

                            delay: 0.08,

                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                        sx={{
                            pt: {
                                lg: 5,
                            },
                        }}
                    >
                        {secondaryParagraphs.map(
                            (
                                paragraph,
                                index
                            ) => (
                                <Typography
                                    key={`${index}-${paragraph}`}
                                    sx={{
                                        maxWidth:
                                            650,

                                        mb:
                                            index !==
                                            secondaryParagraphs.length -
                                                1
                                                ? 3
                                                : 0,

                                        color:
                                            index ===
                                            0
                                                ? '#111714'
                                                : 'rgba(17, 23, 20, 0.58)',

                                        fontSize:
                                            {
                                                xs: '1rem',

                                                md:
                                                    index ===
                                                    0
                                                        ? '1.1rem'
                                                        : '1rem',
                                            },

                                        lineHeight:
                                            1.8,
                                    }}
                                >
                                    {
                                        paragraph
                                    }
                                </Typography>
                            )
                        )}
                    </MotionBox>
                </Box>

                {/* ============================================================ */}
                {/* INPUT TYPES                                                  */}
                {/* ============================================================ */}

                <Box
                    sx={{
                        mt: {
                            xs: 8,
                            md: 11,
                        },
                    }}
                >
                    <Typography
                        sx={{
                            mb: 3,

                            color:
                                'rgba(17,23,20,0.45)',

                            fontSize:
                                '0.68rem',

                            fontWeight: 700,

                            letterSpacing:
                                '0.2em',

                            textTransform:
                                'uppercase',
                        }}
                    >
                        {t(
                            'aboutPage.companyStory.inputs.eyebrow'
                        )}
                    </Typography>

                    <Box
                        sx={{
                            display: 'grid',

                            gridTemplateColumns:
                                {
                                    xs: '1fr',
                                    sm: 'repeat(2, 1fr)',
                                    lg: 'repeat(4, 1fr)',
                                },

                            borderTop:
                                '1px solid rgba(17,23,20,0.12)',

                            borderLeft:
                                '1px solid rgba(17,23,20,0.12)',
                        }}
                    >
                        {inputTypes.map(
                            (item, index) => {
                                const Icon =
                                    inputIcons[
                                        index
                                    ] ??
                                    FileText;

                                return (
                                    <MotionBox
                                        key={item}
                                        initial={{
                                            opacity: 0,
                                            y: 20,
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
                                            duration:
                                                0.55,

                                            delay:
                                                index *
                                                0.06,
                                        }}
                                        sx={{
                                            minHeight:
                                                {
                                                    xs: 170,
                                                    md: 210,
                                                },

                                            p: {
                                                xs: 3.5,
                                                md: 4,
                                            },

                                            display:
                                                'flex',

                                            flexDirection:
                                                'column',

                                            justifyContent:
                                                'space-between',

                                            bgcolor:
                                                '#fff',

                                            borderRight:
                                                '1px solid rgba(17,23,20,0.12)',

                                            borderBottom:
                                                '1px solid rgba(17,23,20,0.12)',

                                            transition:
                                                'background-color 250ms ease, color 250ms ease',

                                            '&:hover':
                                                {
                                                    bgcolor:
                                                        '#12221B',

                                                    color:
                                                        '#fff',

                                                    '& .input-icon':
                                                        {
                                                            color:
                                                                '#fff',

                                                            borderColor:
                                                                'rgba(255,255,255,0.25)',
                                                        },

                                                    '& .input-title':
                                                        {
                                                            color:
                                                                '#fff',
                                                        },
                                                },
                                        }}
                                    >
                                        <Box
                                            className="input-icon"
                                            sx={{
                                                width: 46,
                                                height: 46,

                                                display:
                                                    'grid',

                                                placeItems:
                                                    'center',

                                                color:
                                                    '#12221B',

                                                border:
                                                    '1px solid rgba(17,23,20,0.14)',

                                                borderRadius:
                                                    '50%',

                                                transition:
                                                    'all 250ms ease',
                                            }}
                                        >
                                            <Icon
                                                size={
                                                    19
                                                }
                                                strokeWidth={
                                                    1.6
                                                }
                                            />
                                        </Box>

                                        <Box>
                                            <Typography
                                                className="input-title"
                                                sx={{
                                                    color:
                                                        '#111714',

                                                    fontSize:
                                                        {
                                                            xs: '1.05rem',
                                                            md: '1.15rem',
                                                        },

                                                    fontWeight: 600,

                                                    transition:
                                                        'color 250ms ease',
                                                }}
                                            >
                                                {
                                                    item
                                                }
                                            </Typography>
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

export default CompanyStorySection;