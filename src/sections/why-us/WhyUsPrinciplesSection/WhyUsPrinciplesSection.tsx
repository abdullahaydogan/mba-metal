import {
    Box,
    Typography,
} from '@mui/material';

import {
    ArrowDownRight,
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

export function WhyUsPrinciplesSection() {
    const { t } = useTranslation();

const {
    items,
} = whyUsPageData.principles;
    return (
        <Box
            component="section"
            sx={{
                position: 'relative',

                bgcolor: 'background.default',

                py: {
                    xs: 10,
                    md: 15,
                    lg: 18,
                },

                overflow: 'hidden',
            }}
        >
            {/* ================================================= */}
            {/* BACKGROUND DECORATION */}
            {/* ================================================= */}

            <Box
                sx={{
                    position: 'absolute',

                    top: {
                        xs: -180,
                        lg: -320,
                    },

                    left: {
                        xs: -250,
                        lg: -420,
                    },

                    width: {
                        xs: 480,
                        lg: 760,
                    },

                    height: {
                        xs: 480,
                        lg: 760,
                    },

                    borderRadius: '50%',

                    border:
                        '1px solid rgba(22, 91, 65, 0.055)',

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
                                'minmax(300px, 0.72fr) minmax(0, 1.28fr)',
                        },

                        gap: {
                            xs: 8,
                            lg: 12,
                            xl: 16,
                        },

                        alignItems: 'start',
                    }}
                >
                    {/* ================================================= */}
                    {/* LEFT / STICKY INTRO */}
                    {/* ================================================= */}

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
                        <MotionBox
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
                                amount: 0.5,
                            }}
                            transition={{
                                duration: 0.6,
                            }}
                        >
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
                                        'whyUsPage.principles.eyebrow'
                                    )}
                                </Typography>
                            </Box>

                            <Typography
                                component="h2"
                                sx={{
                                    maxWidth: 560,

                                    color:
                                        'text.primary',

                                    fontSize: {
                                        xs: '2.8rem',
                                        sm: '3.5rem',
                                        md: '4.15rem',
                                        lg: '4.5rem',
                                    },

                                    fontWeight: 700,

                                    lineHeight: 0.98,

                                    letterSpacing:
                                        '-0.055em',
                                }}
                            >
                                {t(
                                    'whyUsPage.principles.title'
                                )}
                            </Typography>

                            <Typography
                                sx={{
                                    maxWidth: 470,

                                    mt: 4,

                                    color:
                                        'text.secondary',

                                    fontSize: {
                                        xs: '0.96rem',
                                        md: '1rem',
                                    },

                                    lineHeight: 1.85,
                                }}
                            >
                                {t(
                                    'whyUsPage.principles.description'
                                )}
                            </Typography>

                            {/* Small visual cue */}

                            <Box
                                sx={{
                                    display: {
                                        xs: 'none',
                                        lg: 'flex',
                                    },

                                    alignItems: 'center',

                                    gap: 1.2,

                                    mt: 6,

                                    color:
                                        'text.secondary',
                                }}
                            >
                                <ArrowDownRight
                                    size={18}
                                    strokeWidth={1.4}
                                />

                                <Typography
                                    sx={{
                                        fontSize:
                                            '0.76rem',

                                        fontWeight: 600,

                                        letterSpacing:
                                            '0.08em',

                                        textTransform:
                                            'uppercase',
                                    }}
                                >
                                    {t(
                                        'whyUsPage.principles.approachLabel'
                                    )}
                                </Typography>
                            </Box>
                        </MotionBox>
                    </Box>

                    {/* ================================================= */}
                    {/* RIGHT / PRINCIPLES */}
                    {/* ================================================= */}

                    <Box
                        sx={{
                            borderTop:
                                '1px solid',

                            borderColor:
                                'divider',
                        }}
                    >
{items.map(
    (item, index) => {
        const Icon =
            item.icon;

        const basePath =
            `whyUsPage.principles.items.${item.id}`;

        return (
            <MotionBox
                key={item.id}
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
                                                Math.min(
                                                    index *
                                                        0.04,
                                                    0.15
                                                ),

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
                                                'grid',

                                            gridTemplateColumns:
                                                {
                                                    xs:
                                                        '1fr',

                                                    sm:
                                                        '72px minmax(0, 1fr)',
                                                },

                                            gap: {
                                                xs: 3,
                                                sm: 4,
                                                md: 5,
                                            },

                                            py: {
                                                xs: 5,
                                                md: 6.5,
                                            },

                                            borderBottom:
                                                '1px solid',

                                            borderColor:
                                                'divider',

                                            transition:
                                                'padding 300ms ease',

                                            '&::before':
                                                {
                                                    content:
                                                        '""',

                                                    position:
                                                        'absolute',

                                                    top: 0,
                                                    bottom: 0,

                                                    left: {
                                                        xs: -16,
                                                        md: -24,
                                                    },

                                                    right: {
                                                        xs: -16,
                                                        md: -24,
                                                    },

                                                    bgcolor:
                                                        'primary.main',

                                                    opacity: 0,

                                                    transform:
                                                        'scaleY(0.88)',

                                                    transition:
                                                        'opacity 300ms ease, transform 300ms ease',

                                                    zIndex:
                                                        -1,
                                                },

                                            '&:hover::before':
                                                {
                                                    opacity:
                                                        0.045,

                                                    transform:
                                                        'scaleY(1)',
                                                },

                                            '&:hover .principle-icon':
                                                {
                                                    bgcolor:
                                                        'primary.main',

                                                    borderColor:
                                                        'primary.main',

                                                    color:
                                                        'primary.contrastText',

                                                    transform:
                                                        'translateY(-4px)',
                                                },

                                            '&:hover .principle-title':
                                                {
                                                    color:
                                                        'primary.main',
                                                },
                                        }}
                                    >
                                        {/* ================================= */}
                                        {/* ICON */}
                                        {/* ================================= */}

                                        <Box>
                                            <Box
                                                className="principle-icon"
                                                sx={{
                                                    width: 56,
                                                    height: 56,

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
                                                        'all 300ms ease',
                                                }}
                                            >
                                                <Icon
                                                    size={
                                                        21
                                                    }
                                                    strokeWidth={
                                                        1.5
                                                    }
                                                />
                                            </Box>
                                        </Box>

                                        {/* ================================= */}
                                        {/* CONTENT */}
                                        {/* ================================= */}

                                        <Box>
                                            <Typography
                                                variant="overline"
                                                sx={{
                                                    display:
                                                        'block',

                                                    mb: 1.5,

                                                    color:
                                                        'primary.main',

                                                    fontSize:
                                                        '0.7rem',

                                                    fontWeight: 700,

                                                    letterSpacing:
                                                        '0.13em',
                                                }}
                                            >
                                                {t(
                                                    `${basePath}.category`
                                                )}
                                            </Typography>

                                            <Typography
                                                className="principle-title"
                                                component="h3"
                                                sx={{
                                                    maxWidth:
                                                        650,

                                                    mb: 2.2,

                                                    color:
                                                        'text.primary',

                                                    fontSize: {
                                                        xs:
                                                            '1.7rem',

                                                        md:
                                                            '2rem',

                                                        lg:
                                                            '2.15rem',
                                                    },

                                                    fontWeight: 650,

                                                    lineHeight: 1.12,

                                                    letterSpacing:
                                                        '-0.04em',

                                                    transition:
                                                        'color 250ms ease',
                                                }}
                                            >
                                                {t(
                                                    `${basePath}.title`
                                                )}
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    maxWidth:
                                                        720,

                                                    color:
                                                        'text.secondary',

                                                    fontSize: {
                                                        xs:
                                                            '0.95rem',

                                                        md:
                                                            '1rem',
                                                    },

                                                    lineHeight: 1.85,
                                                }}
                                            >
                                                {t(
                                                    `${basePath}.description`
                                                )}
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