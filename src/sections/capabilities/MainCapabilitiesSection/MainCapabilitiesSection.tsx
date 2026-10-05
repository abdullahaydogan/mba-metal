import {
    useRef,
} from 'react';

import {
    Box,
    Button,
    Typography,
} from '@mui/material';

import {
    ArrowUpRight,
    Check,
} from 'lucide-react';

import {
    motion,
    useScroll,
    useTransform,
} from 'motion/react';

import {
    useTranslation,
} from 'react-i18next';

import {
    useNavigate,
} from 'react-router-dom';

import { Container } from '../../../components/common/Container';

import {
    capabilitiesPageData,
} from '../../../data/capabilities/capabilities.data';

const MotionDiv = motion.div;
const MotionImg = motion.img;

type CapabilityItem =
    (typeof capabilitiesPageData.mainCapabilities.items)[number];

interface CapabilityRowProps {
    item: CapabilityItem;
    index: number;
}

function CapabilityRow({
    item,
    index,
}: CapabilityRowProps) {
    const navigate = useNavigate();

    const { t } = useTranslation();

    const imageWrapperRef =
        useRef<HTMLDivElement | null>(null);

    const imageOnRight =
        index % 2 === 0;

    const Icon = item.icon;

    const translationBase =
        `capabilitiesPage.mainCapabilities.items.${item.slug}`;

    const title = t(
        `${translationBase}.title`
    );

    const description = t(
        `${translationBase}.description`
    );

    const actionLabel = t(
        `${translationBase}.actionLabel`
    );

    const imageAlt = t(
        `${translationBase}.imageAlt`
    );

    const features = t(
        `${translationBase}.features`,
        {
            returnObjects: true,
        }
    ) as string[];

    const {
        scrollYProgress,
    } = useScroll({
        target: imageWrapperRef,

        offset: [
            'start end',
            'end start',
        ],
    });

    const imageY = useTransform(
        scrollYProgress,
        [0, 1],
        ['-5%', '5%']
    );

    const imageScale = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [1.08, 1.03, 1.08]
    );

    return (
        <Box
            sx={{
                display: 'grid',

                gridTemplateColumns: {
                    xs: '1fr',

                    lg:
                        'minmax(0, 1.08fr) minmax(0, 0.92fr)',
                },

                minHeight: {
                    lg: 600,
                },

                bgcolor: '#FFFFFF',

                border: '1px solid',

                borderColor: 'divider',

                overflow: 'hidden',
            }}
        >
            {/* ========================================
                CONTENT
            ======================================== */}

            <MotionDiv
                initial={{
                    opacity: 0,

                    x: imageOnRight
                        ? -35
                        : 35,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{
                    once: true,
                    amount: 0.2,
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
                style={{
                    order: imageOnRight
                        ? 1
                        : 2,
                }}
            >
                <Box
                    sx={{
                        height: '100%',

                        display: 'flex',

                        flexDirection:
                            'column',

                        justifyContent:
                            'center',

                        p: {
                            xs: 3.5,
                            sm: 5,
                            md: 6,
                            lg: 7,
                        },
                    }}
                >
                    {/* ICON */}

                    <Box
                        sx={{
                            width: 58,
                            height: 58,

                            display: 'grid',

                            placeItems:
                                'center',

                            mb: {
                                xs: 5,
                                md: 6,
                            },

                            borderRadius:
                                '50%',

                            bgcolor:
                                'rgba(20, 91, 65, 0.08)',

                            color:
                                'primary.main',
                        }}
                    >
                        <Icon
                            size={23}
                            strokeWidth={1.5}
                        />
                    </Box>

                    {/* TITLE */}

                    <Typography
                        component="h3"
                        sx={{
                            maxWidth: 580,

                            mb: 2.5,

                            fontSize: {
                                xs: '2rem',
                                sm: '2.35rem',
                                md: '2.7rem',
                            },

                            fontWeight: 650,

                            lineHeight: 1.05,

                            letterSpacing:
                                '-0.045em',

                            color:
                                'text.primary',
                        }}
                    >
                        {title}
                    </Typography>

                    {/* DESCRIPTION */}

                    <Typography
                        sx={{
                            maxWidth: 560,

                            mb: 5,

                            color:
                                'text.secondary',

                            fontSize: {
                                xs: '0.96rem',
                                md: '1rem',
                            },

                            lineHeight: 1.8,
                        }}
                    >
                        {description}
                    </Typography>

                    {/* FEATURES */}

                    <Box
                        sx={{
                            display: 'flex',

                            flexDirection:
                                'column',

                            gap: 1.6,

                            mb: {
                                xs: 5,
                                md: 6,
                            },
                        }}
                    >
                        {features.map(
                            (
                                feature,
                                featureIndex
                            ) => (
                                <Box
                                    key={`${item.slug}-${featureIndex}`}
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
                                            width: 24,
                                            height: 24,

                                            flexShrink: 0,

                                            display:
                                                'grid',

                                            placeItems:
                                                'center',

                                            border:
                                                '1px solid',

                                            borderColor:
                                                'rgba(20, 91, 65, 0.22)',

                                            borderRadius:
                                                '50%',

                                            color:
                                                'primary.main',
                                        }}
                                    >
                                        <Check
                                            size={
                                                13
                                            }
                                            strokeWidth={
                                                1.8
                                            }
                                        />
                                    </Box>

                                    <Typography
                                        sx={{
                                            color:
                                                'text.primary',

                                            fontSize:
                                                '0.92rem',

                                            lineHeight:
                                                1.5,
                                        }}
                                    >
                                        {
                                            feature
                                        }
                                    </Typography>
                                </Box>
                            )
                        )}
                    </Box>

                    {/* CTA */}

                    <Box>
                        <Button
                            variant="text"
                            onClick={() =>
                                navigate(
                                    item.href
                                )
                            }
                            endIcon={
                                <ArrowUpRight
                                    size={17}
                                    strokeWidth={
                                        1.5
                                    }
                                />
                            }
                            sx={{
                                px: 0,

                                color:
                                    'primary.main',

                                fontWeight: 700,

                                textTransform:
                                    'none',

                                fontSize:
                                    '0.9rem',

                                '& .MuiButton-endIcon':
                                    {
                                        transition:
                                            'transform 200ms ease',
                                    },

                                '&:hover': {
                                    bgcolor:
                                        'transparent',

                                    '& .MuiButton-endIcon':
                                        {
                                            transform:
                                                'translate(3px, -3px)',
                                        },
                                },
                            }}
                        >
                            {actionLabel}
                        </Button>
                    </Box>
                </Box>
            </MotionDiv>

            {/* ========================================
                IMAGE
            ======================================== */}

            <MotionDiv
                initial={{
                    opacity: 0,
                    scale: 0.97,
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                }}
                viewport={{
                    once: true,
                    amount: 0.2,
                }}
                transition={{
                    duration: 0.8,

                    ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                    ],
                }}
                style={{
                    order: imageOnRight
                        ? 2
                        : 1,

                    minWidth: 0,
                }}
            >
                <Box
                    ref={imageWrapperRef}
                    sx={{
                        position:
                            'relative',

                        height: {
                            xs: 360,
                            sm: 460,
                            lg: '100%',
                        },

                        minHeight: {
                            lg: 600,
                        },

                        overflow:
                            'hidden',

                        bgcolor:
                            '#DDE3DF',

                        isolation:
                            'isolate',

                        '&:hover img':
                            {
                                filter:
                                    'saturate(1.05) contrast(1.03)',
                            },
                    }}
                >
                    {/* PARALLAX IMAGE */}

                    <MotionImg
                        src={item.image}
                        alt={imageAlt}
                        draggable={false}
                        loading="lazy"
                        style={{
                            position:
                                'absolute',

                            left: 0,

                            top: '-7%',

                            width: '100%',
                            height: '114%',

                            display:
                                'block',

                            objectFit:
                                'cover',

                            y: imageY,

                            scale:
                                imageScale,

                            willChange:
                                'transform',

                            transition:
                                'filter 500ms ease',
                        }}
                    />

                    {/* IMAGE DARK GRADIENT */}

                    <Box
                        aria-hidden="true"
                        sx={{
                            position:
                                'absolute',

                            inset: 0,

                            zIndex: 1,

                            background:
                                'linear-gradient(180deg, rgba(4, 17, 12, 0.01) 20%, rgba(4, 17, 12, 0.32) 100%)',

                            pointerEvents:
                                'none',
                        }}
                    />

                    {/* SUBTLE GREEN ATMOSPHERE */}

                    <Box
                        aria-hidden="true"
                        sx={{
                            position:
                                'absolute',

                            inset: 0,

                            zIndex: 1,

                            background:
                                'linear-gradient(120deg, rgba(16, 73, 53, 0.10) 0%, transparent 48%, rgba(0,0,0,0.04) 100%)',

                            pointerEvents:
                                'none',
                        }}
                    />

                    {/* TOP DECORATIVE LINE */}

                    <Box
                        aria-hidden="true"
                        sx={{
                            position:
                                'absolute',

                            top: 0,
                            left: 0,

                            zIndex: 2,

                            width: {
                                xs: 70,
                                md: 100,
                            },

                            height: 3,

                            bgcolor:
                                'primary.main',
                        }}
                    />

                    {/* IMAGE LABEL */}

                    <Box
                        sx={{
                            position:
                                'absolute',

                            left: {
                                xs: 22,
                                md: 30,
                            },

                            bottom: {
                                xs: 22,
                                md: 30,
                            },

                            zIndex: 3,

                            display: 'flex',

                            alignItems:
                                'center',

                            gap: 1.2,

                            px: 2,
                            py: 1.2,

                            bgcolor:
                                'rgba(8, 25, 18, 0.76)',

                            backdropFilter:
                                'blur(10px)',

                            color:
                                '#FFFFFF',
                        }}
                    >
                        <Box
                            aria-hidden="true"
                            sx={{
                                width: 6,
                                height: 6,

                                borderRadius:
                                    '50%',

                                bgcolor:
                                    '#78C79C',
                            }}
                        />

                        <Typography
                            sx={{
                                fontSize:
                                    '0.72rem',

                                fontWeight: 700,

                                letterSpacing:
                                    '0.1em',

                                textTransform:
                                    'uppercase',
                            }}
                        >
                            MBA Metal
                        </Typography>
                    </Box>

                    {/* PROCESS LABEL */}

                    <Box
                        sx={{
                            position:
                                'absolute',

                            right: {
                                xs: 22,
                                md: 30,
                            },

                            top: {
                                xs: 22,
                                md: 30,
                            },

                            zIndex: 3,

                            px: 1.8,
                            py: 1,

                            border:
                                '1px solid rgba(255,255,255,0.30)',

                            bgcolor:
                                'rgba(5, 18, 13, 0.32)',

                            backdropFilter:
                                'blur(10px)',

                            color:
                                '#FFFFFF',
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize:
                                    '0.67rem',

                                fontWeight: 700,

                                letterSpacing:
                                    '0.12em',

                                textTransform:
                                    'uppercase',
                            }}
                        >
                            {t(
                                'capabilitiesPage.mainCapabilities.processLabel'
                            )}
                        </Typography>
                    </Box>
                </Box>
            </MotionDiv>
        </Box>
    );
}

export function MainCapabilitiesSection() {
    const { t } = useTranslation();

    const {
        id,
        items,
    } =
        capabilitiesPageData.mainCapabilities;

    return (
        <Box
            component="section"
            id={id}
            sx={{
                position: 'relative',

                overflow: 'hidden',

                bgcolor: '#F5F7F6',

                scrollMarginTop: {
                    xs: 72,
                    md: 88,
                },

                py: {
                    xs: 10,
                    md: 14,
                    lg: 18,
                },
            }}
        >
            {/* ========================================
                DECORATIVE BACKGROUND
            ======================================== */}

            <Box
                aria-hidden="true"
                sx={{
                    position:
                        'absolute',

                    width: 520,
                    height: 520,

                    right: -260,
                    top: 120,

                    borderRadius:
                        '50%',

                    border:
                        '1px solid rgba(20, 91, 65, 0.07)',

                    pointerEvents:
                        'none',

                    display: {
                        xs: 'none',
                        lg: 'block',
                    },
                }}
            />

            <Container>
                {/* ====================================
                    SECTION HEADER
                ==================================== */}

                <Box
                    sx={{
                        position:
                            'relative',

                        zIndex: 1,

                        display: 'grid',

                        gridTemplateColumns:
                            {
                                xs:
                                    '1fr',

                                lg:
                                    'minmax(0, 1.1fr) minmax(300px, 0.55fr)',
                            },

                        gap: {
                            xs: 4,
                            lg: 10,
                        },

                        alignItems:
                            'end',

                        mb: {
                            xs: 8,
                            md: 12,
                            lg: 14,
                        },
                    }}
                >
                    <MotionDiv
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
                            duration: 0.6,

                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                    >
                        <Box>
                            <Box
                                sx={{
                                    display:
                                        'flex',

                                    alignItems:
                                        'center',

                                    gap: 1.5,

                                    mb: 3,
                                }}
                            >
                                <Box
                                    aria-hidden="true"
                                    sx={{
                                        width: 34,
                                        height: 2,

                                        bgcolor:
                                            'primary.main',
                                    }}
                                />

                                <Typography
                                    variant="overline"
                                    sx={{
                                        color:
                                            'primary.main',

                                        fontWeight:
                                            700,

                                        letterSpacing:
                                            '0.16em',
                                    }}
                                >
                                    {t(
                                        'capabilitiesPage.mainCapabilities.eyebrow'
                                    )}
                                </Typography>
                            </Box>

                            <Typography
                                component="h2"
                                sx={{
                                    maxWidth: 800,

                                    fontSize: {
                                        xs:
                                            '2.7rem',

                                        sm:
                                            '3.5rem',

                                        md:
                                            '4.3rem',

                                        lg:
                                            '4.7rem',
                                    },

                                    fontWeight: 700,

                                    lineHeight:
                                        0.98,

                                    letterSpacing:
                                        '-0.055em',

                                    color:
                                        'text.primary',
                                }}
                            >
                                {t(
                                    'capabilitiesPage.mainCapabilities.title'
                                )}
                            </Typography>
                        </Box>
                    </MotionDiv>

                    <MotionDiv
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
                            duration: 0.6,

                            delay: 0.1,

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
                                maxWidth: 500,

                                color:
                                    'text.secondary',

                                fontSize: {
                                    xs: '1rem',
                                    md: '1.05rem',
                                },

                                lineHeight: 1.85,
                            }}
                        >
                            {t(
                                'capabilitiesPage.mainCapabilities.description'
                            )}
                        </Typography>
                    </MotionDiv>
                </Box>

                {/* ====================================
                    CAPABILITIES
                ==================================== */}

                <Box
                    sx={{
                        position:
                            'relative',

                        zIndex: 1,

                        display: 'flex',

                        flexDirection:
                            'column',

                        gap: {
                            xs: 8,
                            md: 11,
                            lg: 14,
                        },
                    }}
                >
                    {items.map(
                        (item, index) => (
                            <CapabilityRow
                                key={
                                    item.slug
                                }
                                item={
                                    item
                                }
                                index={
                                    index
                                }
                            />
                        )
                    )}
                </Box>
            </Container>
        </Box>
    );
}

export default MainCapabilitiesSection;