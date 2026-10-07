import {
    ArrowUpRight,
} from 'lucide-react';

import {
    Box,
    Typography,
} from '@mui/material';

import {
    useTranslation,
} from 'react-i18next';

import {
    Container,
} from '../../../components/common/Container';

import {
    marketPageData,
    type MarketSegmentItem,
} from '../../../data/market/market.data';

/* =========================================================
   MARKET SEGMENTS SECTION
========================================================= */

export function MarketSegmentsSection() {
    const {
        t,
    } = useTranslation();

    return (
        <Box
            component="section"
            id={
                marketPageData
                    .segments
                    .id
            }
            sx={{
                position:
                    'relative',

                overflow:
                    'hidden',

                bgcolor:
                    '#f4f6f3',

                py: {
                    xs:
                        9,

                    sm:
                        10,

                    md:
                        12,

                    lg:
                        18,
                },
            }}
        >
            {/* =================================================
                BACKGROUND GRID
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position:
                        'absolute',

                    inset:
                        0,

                    opacity:
                        0.42,

                    backgroundImage: `
                        linear-gradient(
                            rgba(12, 32, 23, 0.035) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(12, 32, 23, 0.035) 1px,
                            transparent 1px
                        )
                    `,

                    backgroundSize: {
                        xs:
                            '48px 48px',

                        md:
                            '64px 64px',

                        lg:
                            '80px 80px',
                    },

                    pointerEvents:
                        'none',
                }}
            />

            {/* =================================================
                AMBIENT GLOW
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position:
                        'absolute',

                    width: {
                        xs:
                            420,

                        md:
                            600,

                        lg:
                            700,
                    },

                    height: {
                        xs:
                            420,

                        md:
                            600,

                        lg:
                            700,
                    },

                    top: {
                        xs:
                            -260,

                        md:
                            -350,

                        lg:
                            -420,
                    },

                    right: {
                        xs:
                            -260,

                        md:
                            -300,

                        lg:
                            -360,
                    },

                    borderRadius:
                        '50%',

                    background:
                        'radial-gradient(circle, rgba(77,156,116,0.12), transparent 68%)',

                    pointerEvents:
                        'none',
                }}
            />

            <Container>
                <Box
                    sx={{
                        position:
                            'relative',

                        zIndex:
                            1,
                    }}
                >
                    {/* =================================================
                        SECTION HEADER
                    ================================================= */}

                    <Box
                        sx={{
                            display:
                                'grid',

                            gridTemplateColumns: {
                                xs:
                                    '1fr',

                                md:
                                    'minmax(0, 1fr) minmax(280px, 380px)',

                                lg:
                                    'minmax(0, 0.72fr) minmax(340px, 0.5fr)',
                            },

                            gap: {
                                xs:
                                    3,

                                md:
                                    6,

                                lg:
                                    8,
                            },

                            alignItems:
                                'end',

                            mb: {
                                xs:
                                    7,

                                md:
                                    9,

                                lg:
                                    12,
                            },
                        }}
                    >
                        {/* =================================================
                            TITLE
                        ================================================= */}

                        <Box
                            sx={{
                                minWidth:
                                    0,
                            }}
                        >
                            <Typography
                                component="h2"
                                sx={{
                                    maxWidth:
                                        820,

                                    color:
                                        '#0b1711',

                                    fontSize: {
                                        xs:
                                            '2.35rem',

                                        sm:
                                            '2.9rem',

                                        md:
                                            '3.45rem',

                                        lg:
                                            '4.15rem',
                                    },

                                    lineHeight: {
                                        xs:
                                            1.05,

                                        lg:
                                            1.02,
                                    },

                                    fontWeight:
                                        500,

                                    letterSpacing:
                                        '-0.055em',

                                    overflowWrap:
                                        'break-word',
                                }}
                            >
                                {t(
                                    'marketPage.segments.title'
                                )}
                            </Typography>
                        </Box>

                        {/* =================================================
                            DESCRIPTION
                        ================================================= */}

                        <Typography
                            sx={{
                                maxWidth:
                                    540,

                                color:
                                    'rgba(11,23,17,0.62)',

                                fontSize: {
                                    xs:
                                        '0.92rem',

                                    md:
                                        '0.96rem',

                                    lg:
                                        '1rem',
                                },

                                lineHeight:
                                    1.8,

                                overflowWrap:
                                    'break-word',
                            }}
                        >
                            {t(
                                'marketPage.segments.description'
                            )}
                        </Typography>
                    </Box>

                    {/* =================================================
                        MARKET SEGMENTS
                    ================================================= */}

                    <Box
                        sx={{
                            display:
                                'flex',

                            flexDirection:
                                'column',

                            gap: {
                                xs:
                                    4,

                                sm:
                                    5,

                                md:
                                    6,

                                lg:
                                    7,
                            },
                        }}
                    >
                        {marketPageData
                            .segments
                            .items
                            .map(
                                (
                                    item,
                                    index
                                ) => (
                                    <MarketSegment
                                        key={
                                            item.id
                                        }

                                        item={
                                            item
                                        }

                                        reverse={
                                            index % 2 !== 0
                                        }
                                    />
                                )
                            )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

/* =========================================================
   MARKET SEGMENT
========================================================= */

interface MarketSegmentProps {
    item: MarketSegmentItem;
    reverse: boolean;
}

function MarketSegment({
    item,
    reverse,
}: MarketSegmentProps) {
    const {
        t,
    } = useTranslation();

    const basePath =
        `marketPage.segments.items.${item.id}`;

    return (
        <Box
            sx={{
                position:
                    'relative',

                display:
                    'grid',

                gridTemplateColumns: {
                    xs:
                        '1fr',

                    lg:
                        'minmax(0, 0.92fr) minmax(0, 1.08fr)',
                },

                minHeight: {
                    lg:
                        690,
                },

                bgcolor:
                    '#ffffff',

                border:
                    '1px solid rgba(13,34,24,0.1)',

                boxShadow: {
                    xs:
                        '0 18px 50px rgba(12,34,23,0.055)',

                    lg:
                        '0 26px 80px rgba(12,34,23,0.07)',
                },

                overflow:
                    'hidden',
            }}
        >
            {/* =================================================
                IMAGE
            ================================================= */}

            <Box
                sx={{
                    position:
                        'relative',

                    minWidth:
                        0,

                    minHeight: {
                        xs:
                            280,

                        sm:
                            360,

                        md:
                            430,

                        lg:
                            '100%',
                    },

                    order: {
                        xs:
                            1,

                        lg:
                            reverse
                                ? 2
                                : 1,
                    },

                    overflow:
                        'hidden',

                    '&::after': {
                        content:
                            '""',

                        position:
                            'absolute',

                        inset:
                            0,

                        zIndex:
                            1,

                        background: `
                            linear-gradient(
                                180deg,
                                rgba(3,12,8,0.02) 20%,
                                rgba(3,12,8,0.7) 100%
                            )
                        `,

                        pointerEvents:
                            'none',
                    },

                    '&:hover img': {
                        transform:
                            'scale(1.035)',
                    },
                }}
            >
                <Box
                    component="img"
                    src={
                        item.image
                    }
                    alt={t(
                        `${basePath}.imageAlt`
                    )}
                    sx={{
                        position:
                            'absolute',

                        inset:
                            0,

                        width:
                            '100%',

                        height:
                            '100%',

                        objectFit:
                            'cover',

                        transition:
                            'transform 900ms cubic-bezier(0.2, 0.7, 0.2, 1)',
                    }}
                />

                {/* =================================================
                    IMAGE LABEL
                ================================================= */}

                <Box
                    sx={{
                        position:
                            'absolute',

                        zIndex:
                            2,

                        left: {
                            xs:
                                20,

                            sm:
                                26,

                            md:
                                32,
                        },

                        right: {
                            xs:
                                20,

                            sm:
                                26,

                            md:
                                32,
                        },

                        bottom: {
                            xs:
                                20,

                            sm:
                                26,

                            md:
                                32,
                        },

                        display:
                            'flex',

                        alignItems:
                            'flex-end',

                        justifyContent:
                            'space-between',

                        gap:
                            2,
                    }}
                >
                    <Typography
                        sx={{
                            minWidth:
                                0,

                            maxWidth:
                                'calc(100% - 58px)',

                            color:
                                'rgba(255,255,255,0.84)',

                            fontSize: {
                                xs:
                                    '0.58rem',

                                sm:
                                    '0.62rem',

                                md:
                                    '0.64rem',
                            },

                            lineHeight:
                                1.6,

                            fontWeight:
                                800,

                            letterSpacing:
                                '0.14em',

                            textTransform:
                                'uppercase',

                            overflowWrap:
                                'break-word',
                        }}
                    >
                        {t(
                            `${basePath}.imageLabel`
                        )}
                    </Typography>

                    <Box
                        aria-hidden="true"
                        sx={{
                            width: {
                                xs:
                                    38,

                                md:
                                    42,
                            },

                            height: {
                                xs:
                                    38,

                                md:
                                    42,
                            },

                            flexShrink:
                                0,

                            display:
                                'grid',

                            placeItems:
                                'center',

                            color:
                                '#ffffff',

                            border:
                                '1px solid rgba(255,255,255,0.3)',

                            bgcolor:
                                'rgba(5,18,12,0.2)',

                            backdropFilter:
                                'blur(12px)',
                        }}
                    >
                        <ArrowUpRight
                            size={
                                17
                            }

                            strokeWidth={
                                1.5
                            }
                        />
                    </Box>
                </Box>
            </Box>

            {/* =================================================
                CONTENT
            ================================================= */}

            <Box
                sx={{
                    position:
                        'relative',

                    minWidth:
                        0,

                    order: {
                        xs:
                            2,

                        lg:
                            reverse
                                ? 1
                                : 2,
                    },

                    p: {
                        xs:
                            3,

                        sm:
                            4,

                        md:
                            5,

                        lg:
                            6,
                    },

                    display:
                        'flex',

                    flexDirection:
                        'column',

                    justifyContent:
                        'space-between',

                    bgcolor:
                        '#ffffff',
                }}
            >
                {/* =================================================
                    MAIN CONTENT
                ================================================= */}

                <Box
                    sx={{
                        minWidth:
                            0,
                    }}
                >
                    {/* =================================================
                        TITLE
                    ================================================= */}

                    <Typography
                        component="h3"
                        sx={{
                            maxWidth:
                                650,

                            color:
                                '#0b1711',

                            fontSize: {
                                xs:
                                    '1.9rem',

                                sm:
                                    '2.25rem',

                                md:
                                    '2.6rem',

                                lg:
                                    '3rem',
                            },

                            lineHeight:
                                1.05,

                            fontWeight:
                                500,

                            letterSpacing:
                                '-0.045em',

                            overflowWrap:
                                'break-word',
                        }}
                    >
                        {t(
                            `${basePath}.title`
                        )}
                    </Typography>

                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}

                    <Typography
                        sx={{
                            maxWidth:
                                640,

                            mt: {
                                xs:
                                    2.5,

                                md:
                                    3,
                            },

                            color:
                                'rgba(11,23,17,0.6)',

                            fontSize: {
                                xs:
                                    '0.9rem',

                                md:
                                    '0.95rem',
                            },

                            lineHeight:
                                1.75,

                            overflowWrap:
                                'break-word',
                        }}
                    >
                        {t(
                            `${basePath}.description`
                        )}
                    </Typography>
                </Box>

                {/* =================================================
                    APPLICATIONS
                ================================================= */}

                <Box
                    sx={{
                        mt: {
                            xs:
                                5,

                            sm:
                                6,

                            lg:
                                7,
                        },
                    }}
                >
                    <Typography
                        sx={{
                            pb:
                                2,

                            color:
                                'rgba(11,23,17,0.38)',

                            fontSize:
                                '0.61rem',

                            fontWeight:
                                800,

                            letterSpacing:
                                '0.15em',

                            textTransform:
                                'uppercase',

                            borderBottom:
                                '1px solid rgba(11,23,17,0.12)',
                        }}
                    >
                        {t(
                            'marketPage.segments.applicationLabel'
                        )}
                    </Typography>

                    <Box>
                        {item
                            .applications
                            .map(
                                (
                                    application
                                ) => (
                                    <ApplicationRow
                                        key={
                                            application
                                        }

                                        label={t(
                                            `${basePath}.applications.${application}`
                                        )}
                                    />
                                )
                            )}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

/* =========================================================
   APPLICATION ROW
========================================================= */

interface ApplicationRowProps {
    label: string;
}

function ApplicationRow({
    label,
}: ApplicationRowProps) {
    return (
        <Box
            sx={{
                position:
                    'relative',

                minWidth:
                    0,

                py: {
                    xs:
                        1.5,

                    md:
                        1.65,
                },

                pr:
                    2,

                borderBottom:
                    '1px solid rgba(11,23,17,0.085)',

                transition:
                    'padding-left 200ms ease, background-color 200ms ease',

                '&::before': {
                    content:
                        '""',

                    position:
                        'absolute',

                    left:
                        0,

                    top:
                        '50%',

                    width:
                        0,

                    height:
                        1,

                    bgcolor:
                        '#31835d',

                    transform:
                        'translateY(-50%)',

                    transition:
                        'width 200ms ease',
                },

                '@media (hover: hover)': {
                    '&:hover': {
                        pl:
                            2.5,

                        bgcolor:
                            'rgba(45,126,87,0.035)',
                    },

                    '&:hover::before': {
                        width:
                            12,
                    },
                },
            }}
        >
            <Typography
                sx={{
                    color:
                        '#17231d',

                    fontSize: {
                        xs:
                            '0.82rem',

                        sm:
                            '0.85rem',

                        md:
                            '0.9rem',
                    },

                    lineHeight:
                        1.55,

                    fontWeight:
                        600,

                    overflowWrap:
                        'break-word',
                }}
            >
                {label}
            </Typography>
        </Box>
    );
}

export default MarketSegmentsSection;