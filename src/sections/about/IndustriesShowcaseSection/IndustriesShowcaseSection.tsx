import {
    Box,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { ArrowUpRight } from 'lucide-react';

import {
    AnimatePresence,
    motion,
} from 'motion/react';

import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { Container } from '../../../components/common/Container';

import {
    industriesShowcaseData,
} from '../../../data/about/about.data';

const MotionBox = motion.create(Box);
const MotionImage = motion.img;

export function IndustriesShowcaseSection() {
    const { t } = useTranslation();

    const theme = useTheme();

    const isDesktop = useMediaQuery(
        theme.breakpoints.up('lg')
    );

    const { items } =
        industriesShowcaseData;

    const [activeIndustryId, setActiveIndustryId] =
        useState(items[0]?.id ?? '');

    const activeIndustry =
        items.find(
            (industry) =>
                industry.id ===
                activeIndustryId
        ) ?? items[0];

    if (!activeIndustry) {
        return null;
    }

    const getIndustryTranslationKey = (
        industryId: string
    ) =>
        `aboutPage.industriesShowcase.items.${industryId}`;

    const activeTranslationKey =
        getIndustryTranslationKey(
            activeIndustry.id
        );

    return (
        <Box
            component="section"
            sx={{
                bgcolor:
                    'background.default',

                color: 'text.primary',

                overflow: 'hidden',

                py: {
                    xs: 10,
                    md: 15,
                    lg: 18,
                },
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
                            lg: '0.9fr 1.1fr',
                        },

                        gap: {
                            xs: 4,
                            lg: 12,
                        },

                        alignItems: 'end',

                        mb: {
                            xs: 8,
                            md: 11,
                            lg: 14,
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
                        <Typography
                            variant="overline"
                            sx={{
                                display:
                                    'block',

                                mb: 3,

                                color:
                                    'primary.main',
                            }}
                        >
                            {t(
                                'aboutPage.industriesShowcase.eyebrow'
                            )}
                        </Typography>

                        <Typography
                            component="h2"
                            sx={{
                                maxWidth: 650,

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
                            {t(
                                'aboutPage.industriesShowcase.title'
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
                    >
                        <Typography
                            sx={{
                                maxWidth: 590,

                                color:
                                    'text.secondary',

                                fontSize: {
                                    xs: '1rem',
                                    md: '1.08rem',
                                },

                                lineHeight: 1.8,
                            }}
                        >
                            {t(
                                'aboutPage.industriesShowcase.description'
                            )}
                        </Typography>
                    </MotionBox>
                </Box>

                {/* ========================================================= */}
                {/* DESKTOP                                                   */}
                {/* ========================================================= */}

                {isDesktop && (
                    <Box
                        sx={{
                            display: 'grid',

                            gridTemplateColumns:
                                '0.82fr 1.18fr',

                            gap: 10,

                            alignItems:
                                'stretch',
                        }}
                    >
                        {/* ================================================= */}
                        {/* INDUSTRY NAVIGATION                               */}
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
                                (
                                    industry,
                                    index
                                ) => {
                                    const isActive =
                                        industry.id ===
                                        activeIndustry.id;

                                    const translationKey =
                                        getIndustryTranslationKey(
                                            industry.id
                                        );

                                    return (
                                        <MotionBox
                                            key={
                                                industry.id
                                            }
                                            initial={{
                                                opacity: 0,
                                                x: -20,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.5,
                                            }}
                                            transition={{
                                                duration:
                                                    0.55,

                                                delay:
                                                    index *
                                                    0.05,
                                            }}
                                            onMouseEnter={() =>
                                                setActiveIndustryId(
                                                    industry.id
                                                )
                                            }
                                            sx={{
                                                position:
                                                    'relative',

                                                display:
                                                    'flex',

                                                alignItems:
                                                    'center',

                                                justifyContent:
                                                    'space-between',

                                                gap: 3,

                                                py: 3.8,

                                                borderBottom:
                                                    '1px solid',

                                                borderColor:
                                                    'divider',

                                                cursor:
                                                    'pointer',

                                                transition:
                                                    'padding 300ms ease',

                                                pl: isActive
                                                    ? 2
                                                    : 0,

                                                '&::before':
                                                    {
                                                        content:
                                                            '""',

                                                        position:
                                                            'absolute',

                                                        left: 0,

                                                        top: 0,

                                                        bottom: 0,

                                                        width:
                                                            '2px',

                                                        bgcolor:
                                                            'primary.main',

                                                        transform:
                                                            isActive
                                                                ? 'scaleY(1)'
                                                                : 'scaleY(0)',

                                                        transformOrigin:
                                                            'center',

                                                        transition:
                                                            'transform 300ms ease',
                                                    },
                                            }}
                                        >
                                            <Typography
                                                component="h3"
                                                sx={{
                                                    fontSize:
                                                        {
                                                            lg: '1.75rem',
                                                            xl: '2rem',
                                                        },

                                                    fontWeight:
                                                        isActive
                                                            ? 650
                                                            : 500,

                                                    letterSpacing:
                                                        '-0.03em',

                                                    color:
                                                        isActive
                                                            ? 'text.primary'
                                                            : 'text.secondary',

                                                    transition:
                                                        'color 250ms ease',
                                                }}
                                            >
                                                {t(
                                                    `${translationKey}.title`
                                                )}
                                            </Typography>

                                            <Box
                                                sx={{
                                                    width: 42,

                                                    height: 42,

                                                    display:
                                                        'flex',

                                                    alignItems:
                                                        'center',

                                                    justifyContent:
                                                        'center',

                                                    flexShrink: 0,

                                                    border:
                                                        '1px solid',

                                                    borderColor:
                                                        isActive
                                                            ? 'primary.main'
                                                            : 'divider',

                                                    borderRadius:
                                                        '50%',

                                                    color:
                                                        isActive
                                                            ? 'primary.main'
                                                            : 'text.secondary',

                                                    transform:
                                                        isActive
                                                            ? 'rotate(45deg)'
                                                            : 'rotate(0deg)',

                                                    transition:
                                                        'all 300ms ease',
                                                }}
                                            >
                                                <ArrowUpRight
                                                    size={
                                                        17
                                                    }
                                                    strokeWidth={
                                                        1.7
                                                    }
                                                />
                                            </Box>
                                        </MotionBox>
                                    );
                                }
                            )}
                        </Box>

                        {/* ================================================= */}
                        {/* ACTIVE CONTENT                                    */}
                        {/* ================================================= */}

                        <Box>
                            <Box
                                sx={{
                                    position:
                                        'relative',

                                    height: 560,

                                    overflow:
                                        'hidden',

                                    borderRadius:
                                        '32px',

                                    bgcolor:
                                        '#111714',
                                }}
                            >
                                {/* IMAGE */}

                                <AnimatePresence mode="wait">
                                    <MotionImage
                                        key={
                                            activeIndustry.id
                                        }
                                        src={
                                            activeIndustry.image
                                        }
                                        alt={t(
                                            `${activeTranslationKey}.imageAlt`
                                        )}
                                        initial={{
                                            opacity: 0,

                                            scale: 1.04,
                                        }}
                                        animate={{
                                            opacity: 1,

                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,

                                            scale: 1.015,
                                        }}
                                        transition={{
                                            duration:
                                                0.55,

                                            ease: [
                                                0.22,
                                                1,
                                                0.36,
                                                1,
                                            ],
                                        }}
                                        style={{
                                            position:
                                                'absolute',

                                            inset: 0,

                                            width:
                                                '100%',

                                            height:
                                                '100%',

                                            objectFit:
                                                'cover',

                                            display:
                                                'block',
                                        }}
                                    />
                                </AnimatePresence>

                                {/* IMAGE OVERLAY */}

                                <Box
                                    sx={{
                                        position:
                                            'absolute',

                                        inset: 0,

                                        background:
                                            'linear-gradient(180deg, rgba(7,16,12,0.02) 35%, rgba(7,16,12,0.72) 100%)',

                                        pointerEvents:
                                            'none',
                                    }}
                                />

                                {/* CONTENT */}

                                <Box
                                    sx={{
                                        position:
                                            'absolute',

                                        left: 0,

                                        right: 0,

                                        bottom: 0,

                                        p: {
                                            lg: 5,
                                            xl: 6,
                                        },

                                        color: '#fff',
                                    }}
                                >
                                    <AnimatePresence mode="wait">
                                        <MotionBox
                                            key={`${activeIndustry.id}-content`}
                                            initial={{
                                                opacity: 0,

                                                y: 16,
                                            }}
                                            animate={{
                                                opacity: 1,

                                                y: 0,
                                            }}
                                            exit={{
                                                opacity: 0,

                                                y: -10,
                                            }}
                                            transition={{
                                                duration:
                                                    0.4,
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    mb: 1.5,

                                                    fontSize:
                                                        '0.72rem',

                                                    fontWeight: 700,

                                                    textTransform:
                                                        'uppercase',

                                                    letterSpacing:
                                                        '0.14em',

                                                    color:
                                                        'rgba(255,255,255,0.66)',
                                                }}
                                            >
                                                {t(
                                                    'aboutPage.industriesShowcase.eyebrow'
                                                )}
                                            </Typography>

                                            <Typography
                                                component="h3"
                                                sx={{
                                                    mb: 2,

                                                    fontSize:
                                                        '2.5rem',

                                                    fontWeight:
                                                        650,

                                                    lineHeight:
                                                        1.05,

                                                    letterSpacing:
                                                        '-0.04em',
                                                }}
                                            >
                                                {t(
                                                    `${activeTranslationKey}.title`
                                                )}
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    maxWidth: 600,

                                                    color:
                                                        'rgba(255,255,255,0.78)',

                                                    lineHeight:
                                                        1.75,

                                                    fontSize:
                                                        '1rem',
                                                }}
                                            >
                                                {t(
                                                    `${activeTranslationKey}.description`
                                                )}
                                            </Typography>
                                        </MotionBox>
                                    </AnimatePresence>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                )}

                {/* ========================================================= */}
                {/* MOBILE / TABLET                                           */}
                {/* ========================================================= */}

                {!isDesktop && (
                    <Box
                        sx={{
                            display: 'grid',

                            gap: {
                                xs: 7,
                                md: 9,
                            },
                        }}
                    >
                        {items.map(
                            (
                                industry,
                                index
                            ) => {
                                const translationKey =
                                    getIndustryTranslationKey(
                                        industry.id
                                    );

                                return (
                                    <MotionBox
                                        key={
                                            industry.id
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
                                            amount: 0.15,
                                        }}
                                        transition={{
                                            duration:
                                                0.65,

                                            delay:
                                                index *
                                                0.04,
                                        }}
                                    >
                                        {/* IMAGE */}

                                        <Box
                                            sx={{
                                                height: {
                                                    xs: 300,
                                                    sm: 430,
                                                    md: 500,
                                                },

                                                overflow:
                                                    'hidden',

                                                borderRadius:
                                                    {
                                                        xs: '22px',
                                                        md: '30px',
                                                    },

                                                mb: 3,
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={
                                                    industry.image
                                                }
                                                alt={t(
                                                    `${translationKey}.imageAlt`
                                                )}
                                                loading="lazy"
                                                sx={{
                                                    width:
                                                        '100%',

                                                    height:
                                                        '100%',

                                                    display:
                                                        'block',

                                                    objectFit:
                                                        'cover',
                                                }}
                                            />
                                        </Box>

                                        {/* TITLE */}

                                        <Typography
                                            component="h3"
                                            sx={{
                                                mb: 1.5,

                                                fontSize:
                                                    {
                                                        xs: '1.8rem',
                                                        sm: '2.2rem',
                                                    },

                                                fontWeight:
                                                    650,

                                                lineHeight:
                                                    1.1,

                                                letterSpacing:
                                                    '-0.035em',
                                            }}
                                        >
                                            {t(
                                                `${translationKey}.title`
                                            )}
                                        </Typography>

                                        {/* DESCRIPTION */}

                                        <Typography
                                            sx={{
                                                maxWidth: 650,

                                                color:
                                                    'text.secondary',

                                                fontSize:
                                                    '0.98rem',

                                                lineHeight:
                                                    1.75,
                                            }}
                                        >
                                            {t(
                                                `${translationKey}.description`
                                            )}
                                        </Typography>
                                    </MotionBox>
                                );
                            }
                        )}
                    </Box>
                )}
            </Container>
        </Box>
    );
}

export default IndustriesShowcaseSection;