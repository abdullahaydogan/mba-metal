import {
    Box,
    Typography,
} from '@mui/material';

import {
    FileText,
    Layers3,
    MapPin,
    Package,
    Ruler,
    Settings,
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

/* =========================================================
   MOTION
========================================================= */

const MotionDiv = motion.div;

/* =========================================================
   ICONS
========================================================= */

const icons = [
    FileText,
    Layers3,
    Ruler,
    Package,
    Settings,
    MapPin,
];

/* =========================================================
   COMPONENT
========================================================= */

export function QuoteRequirementsSection() {
    const { t } = useTranslation();

    const {
        id,
        items,
    } = capabilitiesPageData.quoteRequirements;

    return (
        <Box
            component="section"
            id={id}
            sx={{
                position: 'relative',

                bgcolor:
                    'background.paper',

                py: {
                    xs: 10,
                    md: 14,
                    lg: 17,
                },

                scrollMarginTop: {
                    xs: 72,
                    md: 88,
                },
            }}
        >
            <Container>
                {/* =================================================
                    HEADER
                ================================================= */}

                <Box
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',

                            lg:
                                'minmax(0,1fr) minmax(300px,0.55fr)',
                        },

                        gap: {
                            xs: 4,
                            lg: 10,
                        },

                        alignItems: 'end',

                        mb: {
                            xs: 8,
                            md: 11,
                        },
                    }}
                >
                    {/* =============================================
                        HEADER LEFT
                    ============================================= */}

                    <MotionDiv
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
                            amount: 0.3,
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
                        <Typography
                            variant="overline"
                            sx={{
                                display: 'block',

                                mb: 2.5,

                                color:
                                    'primary.main',

                                fontWeight: 700,

                                letterSpacing:
                                    '0.16em',
                            }}
                        >
                            {t(
                                'capabilitiesPage.quoteRequirements.eyebrow'
                            )}
                        </Typography>

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
                                },

                                fontWeight: 700,

                                lineHeight: 0.98,

                                letterSpacing:
                                    '-0.055em',
                            }}
                        >
                            {t(
                                'capabilitiesPage.quoteRequirements.title'
                            )}
                        </Typography>
                    </MotionDiv>

                    {/* =============================================
                        HEADER RIGHT
                    ============================================= */}

                    <MotionDiv
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
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.65,
                            delay: 0.1,
                        }}
                    >
                        <Typography
                            sx={{
                                maxWidth: 500,

                                color:
                                    'text.secondary',

                                fontSize: {
                                    xs: '0.98rem',
                                    md: '1rem',
                                },

                                lineHeight: 1.85,
                            }}
                        >
                            {t(
                                'capabilitiesPage.quoteRequirements.description'
                            )}
                        </Typography>
                    </MotionDiv>
                </Box>

                {/* =================================================
                    REQUIREMENT ITEMS
                ================================================= */}

                <Box
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',

                            sm:
                                'repeat(2,minmax(0,1fr))',

                            lg:
                                'repeat(3,minmax(0,1fr))',
                        },

                        borderTop:
                            '1px solid',

                        borderLeft:
                            '1px solid',

                        borderColor:
                            'divider',
                    }}
                >
                    {items.map(
                        (
                            item,
                            index
                        ) => {
                            const Icon =
                                icons[
                                index
                                ] ??
                                FileText;

                            const translationBase =
                                `capabilitiesPage.quoteRequirements.items.${item.key}`;

                            return (
                                <MotionDiv
                                    key={
                                        item.key
                                    }
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
                                        amount: 0.3,
                                    }}
                                    transition={{
                                        duration:
                                            0.55,

                                        delay:
                                            index *
                                            0.05,

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
                                            minHeight:
                                                310,

                                            height:
                                                '100%',

                                            display:
                                                'flex',

                                            flexDirection:
                                                'column',

                                            p: {
                                                xs: 3.5,
                                                md: 4.5,
                                            },

                                            borderRight:
                                                '1px solid',

                                            borderBottom:
                                                '1px solid',

                                            borderColor:
                                                'divider',

                                            transition:
                                                'background-color 200ms ease',

                                            '&:hover':
                                            {
                                                bgcolor:
                                                    'rgba(20,91,65,0.035)',
                                            },
                                        }}
                                    >
                                        {/* =================================
                                            ICON
                                        ================================= */}

                                        <Box
                                            sx={{
                                                width: 52,
                                                height: 52,

                                                display:
                                                    'grid',

                                                placeItems:
                                                    'center',

                                                mb: 7,

                                                border:
                                                    '1px solid',

                                                borderColor:
                                                    'divider',

                                                borderRadius:
                                                    '50%',

                                                color:
                                                    'primary.main',
                                            }}
                                        >
                                            <Icon
                                                size={
                                                    20
                                                }
                                                strokeWidth={
                                                    1.4
                                                }
                                            />
                                        </Box>

                                        {/* =================================
                                            TITLE
                                        ================================= */}

                                        <Typography
                                            component="h3"
                                            sx={{
                                                mb: 1.8,

                                                color:
                                                    'text.primary',

                                                fontSize:
                                                    '1.35rem',

                                                fontWeight:
                                                    650,

                                                letterSpacing:
                                                    '-0.025em',
                                            }}
                                        >
                                            {t(
                                                `${translationBase}.title`
                                            )}
                                        </Typography>

                                        {/* =================================
                                            DESCRIPTION
                                        ================================= */}

                                        <Typography
                                            sx={{
                                                maxWidth:
                                                    330,

                                                color:
                                                    'text.secondary',

                                                fontSize:
                                                    '0.91rem',

                                                lineHeight:
                                                    1.75,
                                            }}
                                        >
                                            {t(
                                                `${translationBase}.description`
                                            )}
                                        </Typography>
                                    </Box>
                                </MotionDiv>
                            );
                        }
                    )}
                </Box>
            </Container>
        </Box>
    );
}

export default QuoteRequirementsSection;