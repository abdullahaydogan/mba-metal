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

import { Container } from '../../../components/common/Container';

import {
    capabilitiesPageData,
} from '../../../data/capabilities/capabilities.data';

const MotionBox = motion.create(Box);

export function ProductionApproachSection() {
    const { t } = useTranslation();

    const {
        id,
        items,
    } = capabilitiesPageData.productionApproach;

    return (
        <Box
            id={id}
            component="section"
            sx={{
                position: 'relative',

                bgcolor: '#f5f7f5',

                scrollMarginTop: {
                    xs: 72,
                    md: 88,
                },

                py: {
                    xs: 10,
                    md: 15,
                    lg: 18,
                },

                overflow: 'hidden',
            }}
        >
            {/* ========================================
                BACKGROUND DECORATION
            ======================================== */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    width: 620,
                    height: 620,

                    left: -420,
                    bottom: -310,

                    border:
                        '1px solid rgba(22,91,65,0.07)',

                    borderRadius: '50%',

                    pointerEvents: 'none',
                }}
            />

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    width: 340,
                    height: 340,

                    top: -180,
                    right: -180,

                    border:
                        '1px solid rgba(22,91,65,0.05)',

                    borderRadius: '50%',

                    pointerEvents: 'none',
                }}
            />

            <Container>
                <Box
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',

                            lg:
                                'minmax(0, 0.78fr) minmax(0, 1.22fr)',
                        },

                        gap: {
                            xs: 7,
                            md: 9,
                            lg: 14,
                        },

                        alignItems: 'start',
                    }}
                >
                    {/* ========================================
                        LEFT
                    ======================================== */}

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
                                y: 24,
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
                                duration: 0.65,

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

                                    gap: 1.5,

                                    mb: 3,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 7,
                                        height: 7,

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
                                        'capabilitiesPage.productionApproach.eyebrow'
                                    )}
                                </Typography>
                            </Box>

                            {/* TITLE */}

                            <Typography
                                component="h2"
                                sx={{
                                    maxWidth: 590,

                                    color: '#111714',

                                    fontSize: {
                                        xs: '2.7rem',
                                        sm: '3.4rem',
                                        md: '4rem',
                                        lg: '4.5rem',
                                    },

                                    fontWeight: 700,

                                    lineHeight: 0.98,

                                    letterSpacing:
                                        '-0.055em',
                                }}
                            >
                                {t(
                                    'capabilitiesPage.productionApproach.title'
                                )}
                            </Typography>

                            {/* DECORATIVE LINE */}

                            <Box
                                aria-hidden="true"
                                sx={{
                                    width: {
                                        xs: 64,
                                        md: 82,
                                    },

                                    height: 2,

                                    mt: 5,

                                    bgcolor:
                                        'primary.main',
                                }}
                            />
                        </MotionBox>
                    </Box>

                    {/* ========================================
                        RIGHT
                    ======================================== */}

                    <Box
                        sx={{
                            borderTop:
                                '1px solid rgba(17,23,20,0.14)',
                        }}
                    >
                        {items.map(
                            (item, index) => {
                                const Icon =
                                    item.icon;

                                const title = t(
                                    `capabilitiesPage.productionApproach.items.${item.key}`
                                );

                                return (
                                    <MotionBox
                                        key={
                                            item.key
                                        }
                                        initial={{
                                            opacity: 0,
                                            y: 32,
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
                                            duration: 0.65,

                                            delay:
                                                index *
                                                0.04,

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
                                                        '54px minmax(0, 1fr)',

                                                    md:
                                                        '70px minmax(0, 1fr) 36px',
                                                },

                                            alignItems:
                                                'center',

                                            gap: {
                                                xs: 2,
                                                md: 3,
                                            },

                                            minHeight: {
                                                xs: 130,
                                                md: 155,
                                            },

                                            px: {
                                                xs: 0,
                                                md: 0,
                                            },

                                            py: {
                                                xs: 3.5,
                                                md: 4,
                                            },

                                            borderBottom:
                                                '1px solid rgba(17,23,20,0.14)',

                                            transition:
                                                'padding 300ms ease, background-color 300ms ease',

                                            '&::before':
                                                {
                                                    content:
                                                        '""',

                                                    position:
                                                        'absolute',

                                                    top: 0,
                                                    bottom: 0,
                                                    left: 0,

                                                    width:
                                                        '2px',

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
                                                    px: {
                                                        xs: 2,
                                                        md: 3,
                                                    },

                                                    bgcolor:
                                                        'rgba(22,91,65,0.035)',
                                                },

                                            '&:hover::before':
                                                {
                                                    transform:
                                                        'scaleY(1)',
                                                },

                                            '&:hover .approach-icon':
                                                {
                                                    color:
                                                        '#fff',

                                                    bgcolor:
                                                        'primary.main',

                                                    borderColor:
                                                        'primary.main',

                                                    transform:
                                                        'rotate(-6deg)',
                                                },

                                            '&:hover .approach-arrow':
                                                {
                                                    color:
                                                        'primary.main',

                                                    transform:
                                                        'translate(4px, 4px)',
                                                },
                                        }}
                                    >
                                        {/* =========================
                                            ICON
                                        ========================= */}

                                        <Box
                                            className="approach-icon"
                                            sx={{
                                                width: {
                                                    xs: 48,
                                                    md: 56,
                                                },

                                                height: {
                                                    xs: 48,
                                                    md: 56,
                                                },

                                                display:
                                                    'grid',

                                                placeItems:
                                                    'center',

                                                flexShrink: 0,

                                                color:
                                                    'primary.main',

                                                border:
                                                    '1px solid rgba(22,91,65,0.28)',

                                                borderRadius:
                                                    '50%',

                                                transition:
                                                    'all 300ms cubic-bezier(0.22, 1, 0.36, 1)',
                                            }}
                                        >
                                            <Icon
                                                size={
                                                    20
                                                }
                                                strokeWidth={
                                                    1.5
                                                }
                                            />
                                        </Box>

                                        {/* =========================
                                            TITLE
                                        ========================= */}

                                        <Typography
                                            component="h3"
                                            sx={{
                                                maxWidth:
                                                    560,

                                                color:
                                                    '#111714',

                                                fontSize:
                                                    {
                                                        xs:
                                                            '1.3rem',

                                                        sm:
                                                            '1.45rem',

                                                        md:
                                                            '1.65rem',
                                                    },

                                                fontWeight: 650,

                                                lineHeight: 1.22,

                                                letterSpacing:
                                                    '-0.035em',
                                            }}
                                        >
                                            {
                                                title
                                            }
                                        </Typography>

                                        {/* =========================
                                            ARROW
                                        ========================= */}

                                        <Box
                                            className="approach-arrow"
                                            aria-hidden="true"
                                            sx={{
                                                display:
                                                    {
                                                        xs:
                                                            'none',

                                                        md:
                                                            'grid',
                                                    },

                                                placeItems:
                                                    'center',

                                                color:
                                                    'rgba(17,23,20,0.28)',

                                                transition:
                                                    'all 300ms cubic-bezier(0.22, 1, 0.36, 1)',
                                            }}
                                        >
                                            <ArrowDownRight
                                                size={
                                                    20
                                                }
                                                strokeWidth={
                                                    1.4
                                                }
                                            />
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

export default ProductionApproachSection;