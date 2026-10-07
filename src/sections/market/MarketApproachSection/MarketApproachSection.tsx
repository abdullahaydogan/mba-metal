import {
    ArrowDown,
    ArrowRight,
    ClipboardCheck,
    Factory,
    Gauge,
    Settings2,
    Wrench,
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
} from '../../../data/market/market.data';

/* =========================================================
   TYPES
========================================================= */

type ApproachItemId =
    typeof marketPageData
        .approach
        .items[number];

interface ApproachVisual {
    icon: typeof Settings2;
}

/* =========================================================
   VISUAL CONFIG
========================================================= */

const approachVisuals:
    Record<
        ApproachItemId,
        ApproachVisual
    > = {
        technicalRequirement: {
            icon:
                ClipboardCheck,
        },

        manufacturability: {
            icon:
                Gauge,
        },

        processPlanning: {
            icon:
                Settings2,
        },

        production: {
            icon:
                Factory,
        },

        qualityControl: {
            icon:
                Wrench,
        },
    };

/* =========================================================
   MARKET APPROACH SECTION
========================================================= */

export function MarketApproachSection() {
    const {
        t,
    } = useTranslation();

    return (
        <Box
            component="section"
            id={
                marketPageData
                    .approach
                    .id
            }
            sx={{
                position:
                    'relative',

                overflow:
                    'hidden',

                bgcolor:
                    '#0b1711',

                py: {
                    xs:
                        9,

                    sm:
                        10,

                    md:
                        12,

                    lg:
                        17,
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
                        0.32,

                    backgroundImage: `
                        linear-gradient(
                            rgba(255,255,255,0.035) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(255,255,255,0.035) 1px,
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
                TOP GLOW
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
                            760,
                    },

                    height: {
                        xs:
                            420,

                        md:
                            600,

                        lg:
                            760,
                    },

                    top: {
                        xs:
                            -250,

                        md:
                            -380,

                        lg:
                            -500,
                    },

                    right: {
                        xs:
                            -250,

                        md:
                            -280,

                        lg:
                            -300,
                    },

                    borderRadius:
                        '50%',

                    background:
                        'radial-gradient(circle, rgba(57,150,103,0.16), transparent 68%)',

                    pointerEvents:
                        'none',
                }}
            />

            {/* =================================================
                BOTTOM GLOW
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position:
                        'absolute',

                    width:
                        600,

                    height:
                        600,

                    bottom:
                        -420,

                    left:
                        -280,

                    borderRadius:
                        '50%',

                    background:
                        'radial-gradient(circle, rgba(57,150,103,0.08), transparent 70%)',

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
                        EYEBROW
                    ================================================= */}

                    <Box
                        sx={{
                            display:
                                'flex',

                            alignItems:
                                'center',

                            gap:
                                1.5,

                            mb: {
                                xs:
                                    2.5,

                                md:
                                    3,
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width:
                                    34,

                                height:
                                    1,

                                bgcolor:
                                    '#55b884',
                            }}
                        />

                        <Typography
                            sx={{
                                color:
                                    '#72c99b',

                                fontSize:
                                    '0.68rem',

                                fontWeight:
                                    800,

                                letterSpacing:
                                    '0.17em',

                                textTransform:
                                    'uppercase',
                            }}
                        >
                            {t(
                                'marketPage.approach.eyebrow'
                            )}
                        </Typography>
                    </Box>

                    {/* =================================================
                        HEADER
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
                                    'minmax(0, 1fr) minmax(300px, 440px)',
                            },

                            gap: {
                                xs:
                                    3,

                                md:
                                    6,

                                lg:
                                    12,
                            },

                            alignItems:
                                'end',
                        }}
                    >
                        <Typography
                            component="h2"
                            sx={{
                                maxWidth:
                                    850,

                                color:
                                    '#f5f8f6',

                                fontSize: {
                                    xs:
                                        '2.35rem',

                                    sm:
                                        '3rem',

                                    md:
                                        '3.45rem',

                                    lg:
                                        '4.5rem',
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
                                'marketPage.approach.title'
                            )}
                        </Typography>

                        <Typography
                            sx={{
                                maxWidth:
                                    440,

                                color:
                                    'rgba(235,244,239,0.6)',

                                fontSize: {
                                    xs:
                                        '0.9rem',

                                    md:
                                        '0.95rem',

                                    lg:
                                        '1rem',
                                },

                                lineHeight:
                                    1.8,
                            }}
                        >
                            {t(
                                'marketPage.approach.description'
                            )}
                        </Typography>
                    </Box>

                    {/* =================================================
                        DIVIDER
                    ================================================= */}

                    <Box
                        sx={{
                            mt: {
                                xs:
                                    6,

                                md:
                                    7,

                                lg:
                                    9,
                            },

                            mb: {
                                xs:
                                    5,

                                md:
                                    6,

                                lg:
                                    8,
                            },

                            height:
                                '1px',

                            background:
                                'linear-gradient(90deg, rgba(255,255,255,0.18), rgba(255,255,255,0.03))',
                        }}
                    />

                    {/* =================================================
                        DESKTOP PROCESS FLOW
                    ================================================= */}

                    <Box
                        sx={{
                            display: {
                                xs:
                                    'none',

                                lg:
                                    'grid',
                            },

                            gridTemplateColumns:
                                'repeat(5, minmax(0, 1fr))',

                            borderTop:
                                '1px solid rgba(255,255,255,0.1)',

                            borderBottom:
                                '1px solid rgba(255,255,255,0.1)',
                        }}
                    >
                        {marketPageData
                            .approach
                            .items
                            .map(
                                (
                                    item,
                                    index
                                ) => (
                                    <DesktopApproachItem
                                        key={
                                            item
                                        }

                                        item={
                                            item
                                        }

                                        isLast={
                                            index ===
                                            marketPageData
                                                .approach
                                                .items
                                                .length -
                                                1
                                        }
                                    />
                                )
                            )}
                    </Box>

                    {/* =================================================
                        TABLET PROCESS GRID
                    ================================================= */}

                    <Box
                        sx={{
                            display: {
                                xs:
                                    'none',

                                sm:
                                    'grid',

                                lg:
                                    'none',
                            },

                            gridTemplateColumns:
                                'repeat(2, minmax(0, 1fr))',

                            borderTop:
                                '1px solid rgba(255,255,255,0.1)',

                            borderLeft:
                                '1px solid rgba(255,255,255,0.1)',
                        }}
                    >
                        {marketPageData
                            .approach
                            .items
                            .map(
                                (
                                    item
                                ) => (
                                    <TabletApproachItem
                                        key={
                                            item
                                        }

                                        item={
                                            item
                                        }
                                    />
                                )
                            )}
                    </Box>

                    {/* =================================================
                        MOBILE PROCESS FLOW
                    ================================================= */}

                    <Box
                        sx={{
                            display: {
                                xs:
                                    'block',

                                sm:
                                    'none',
                            },

                            borderTop:
                                '1px solid rgba(255,255,255,0.1)',
                        }}
                    >
                        {marketPageData
                            .approach
                            .items
                            .map(
                                (
                                    item,
                                    index
                                ) => (
                                    <MobileApproachItem
                                        key={
                                            item
                                        }

                                        item={
                                            item
                                        }

                                        isLast={
                                            index ===
                                            marketPageData
                                                .approach
                                                .items
                                                .length -
                                                1
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
   SHARED PROPS
========================================================= */

interface ApproachItemProps {
    item: ApproachItemId;
    isLast?: boolean;
}

/* =========================================================
   DESKTOP APPROACH ITEM
========================================================= */

function DesktopApproachItem({
    item,
    isLast = false,
}: ApproachItemProps) {
    const {
        t,
    } = useTranslation();

    const Icon =
        approachVisuals[
            item
        ].icon;

    const basePath =
        `marketPage.approach.items.${item}`;

    return (
        <Box
            sx={{
                position:
                    'relative',

                minWidth:
                    0,

                minHeight:
                    360,

                px:
                    3,

                py:
                    4,

                borderRight:
                    isLast
                        ? 'none'
                        : '1px solid rgba(255,255,255,0.1)',

                transition:
                    'background-color 250ms ease',

                '&:hover': {
                    bgcolor:
                        'rgba(255,255,255,0.025)',
                },

                '&:hover .approach-icon': {
                    color:
                        '#8bd6ad',

                    borderColor:
                        'rgba(114,201,155,0.55)',

                    bgcolor:
                        'rgba(67,155,108,0.1)',
                },
            }}
        >
            <Box
                className="approach-icon"
                sx={{
                    width:
                        52,

                    height:
                        52,

                    display:
                        'grid',

                    placeItems:
                        'center',

                    color:
                        'rgba(139,214,173,0.75)',

                    border:
                        '1px solid rgba(114,201,155,0.25)',

                    transition:
                        'all 250ms ease',
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

            {!isLast && (
                <Box
                    aria-hidden="true"
                    sx={{
                        position:
                            'absolute',

                        top:
                            61,

                        left:
                            86,

                        right:
                            -14,

                        display:
                            'flex',

                        alignItems:
                            'center',

                        pointerEvents:
                            'none',
                    }}
                >
                    <Box
                        sx={{
                            flex:
                                1,

                            height:
                                '1px',

                            bgcolor:
                                'rgba(114,201,155,0.2)',
                        }}
                    />

                    <Box
                        sx={{
                            width:
                                28,

                            height:
                                28,

                            display:
                                'grid',

                            placeItems:
                                'center',

                            color:
                                'rgba(114,201,155,0.55)',

                            bgcolor:
                                '#0b1711',
                        }}
                    >
                        <ArrowRight
                            size={
                                15
                            }

                            strokeWidth={
                                1.4
                            }
                        />
                    </Box>
                </Box>
            )}

            <Box
                sx={{
                    mt:
                        7,

                    minWidth:
                        0,
                }}
            >
                <Typography
                    component="h3"
                    sx={{
                        color:
                            '#f0f6f2',

                        fontSize:
                            '1.15rem',

                        lineHeight:
                            1.25,

                        fontWeight:
                            600,

                        letterSpacing:
                            '-0.025em',

                        overflowWrap:
                            'break-word',
                    }}
                >
                    {t(
                        `${basePath}.title`
                    )}
                </Typography>

                <Typography
                    sx={{
                        mt:
                            2,

                        color:
                            'rgba(230,240,234,0.52)',

                        fontSize:
                            '0.82rem',

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
        </Box>
    );
}

/* =========================================================
   TABLET APPROACH ITEM
========================================================= */

function TabletApproachItem({
    item,
}: ApproachItemProps) {
    const {
        t,
    } = useTranslation();

    const Icon =
        approachVisuals[
            item
        ].icon;

    const basePath =
        `marketPage.approach.items.${item}`;

    return (
        <Box
            sx={{
                minWidth:
                    0,

                minHeight:
                    280,

                p: {
                    sm:
                        3,

                    md:
                        4,
                },

                borderRight:
                    '1px solid rgba(255,255,255,0.1)',

                borderBottom:
                    '1px solid rgba(255,255,255,0.1)',

                transition:
                    'background-color 250ms ease',

                '&:hover': {
                    bgcolor:
                        'rgba(255,255,255,0.025)',
                },
            }}
        >
            <Box
                sx={{
                    width:
                        48,

                    height:
                        48,

                    display:
                        'grid',

                    placeItems:
                        'center',

                    color:
                        '#8bd6ad',

                    border:
                        '1px solid rgba(114,201,155,0.28)',
                }}
            >
                <Icon
                    size={
                        19
                    }

                    strokeWidth={
                        1.4
                    }
                />
            </Box>

            <Typography
                component="h3"
                sx={{
                    mt:
                        4,

                    color:
                        '#f0f6f2',

                    fontSize: {
                        sm:
                            '1.05rem',

                        md:
                            '1.15rem',
                    },

                    lineHeight:
                        1.3,

                    fontWeight:
                        600,

                    letterSpacing:
                        '-0.025em',

                    overflowWrap:
                        'break-word',
                }}
            >
                {t(
                    `${basePath}.title`
                )}
            </Typography>

            <Typography
                sx={{
                    mt:
                        1.5,

                    maxWidth:
                        420,

                    color:
                        'rgba(230,240,234,0.54)',

                    fontSize:
                        '0.83rem',

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
    );
}

/* =========================================================
   MOBILE APPROACH ITEM
========================================================= */

function MobileApproachItem({
    item,
    isLast = false,
}: ApproachItemProps) {
    const {
        t,
    } = useTranslation();

    const Icon =
        approachVisuals[
            item
        ].icon;

    const basePath =
        `marketPage.approach.items.${item}`;

    return (
        <Box
            sx={{
                display:
                    'grid',

                gridTemplateColumns:
                    '48px minmax(0, 1fr)',

                columnGap:
                    2.25,

                py:
                    3.5,

                borderBottom:
                    '1px solid rgba(255,255,255,0.1)',
            }}
        >
            {/* ICON / FLOW */}

            <Box
                sx={{
                    position:
                        'relative',
                }}
            >
                <Box
                    sx={{
                        position:
                            'relative',

                        zIndex:
                            2,

                        width:
                            48,

                        height:
                            48,

                        display:
                            'grid',

                        placeItems:
                            'center',

                        color:
                            '#8bd6ad',

                        bgcolor:
                            '#0b1711',

                        border:
                            '1px solid rgba(114,201,155,0.28)',
                    }}
                >
                    <Icon
                        size={
                            19
                        }

                        strokeWidth={
                            1.4
                        }
                    />
                </Box>

                {!isLast && (
                    <>
                        <Box
                            aria-hidden="true"
                            sx={{
                                position:
                                    'absolute',

                                zIndex:
                                    0,

                                top:
                                    48,

                                left:
                                    '50%',

                                bottom:
                                    -28,

                                width:
                                    '1px',

                                bgcolor:
                                    'rgba(114,201,155,0.2)',

                                transform:
                                    'translateX(-50%)',
                            }}
                        />

                        <Box
                            aria-hidden="true"
                            sx={{
                                position:
                                    'absolute',

                                zIndex:
                                    1,

                                left:
                                    '50%',

                                bottom:
                                    -22,

                                width:
                                    20,

                                height:
                                    20,

                                display:
                                    'grid',

                                placeItems:
                                    'center',

                                color:
                                    'rgba(114,201,155,0.55)',

                                bgcolor:
                                    '#0b1711',

                                transform:
                                    'translateX(-50%)',
                            }}
                        >
                            <ArrowDown
                                size={
                                    14
                                }

                                strokeWidth={
                                    1.4
                                }
                            />
                        </Box>
                    </>
                )}
            </Box>

            {/* CONTENT */}

            <Box
                sx={{
                    minWidth:
                        0,

                    pt:
                        0.4,
                }}
            >
                <Typography
                    component="h3"
                    sx={{
                        color:
                            '#f0f6f2',

                        fontSize:
                            '1.05rem',

                        lineHeight:
                            1.3,

                        fontWeight:
                            600,

                        letterSpacing:
                            '-0.02em',

                        overflowWrap:
                            'break-word',
                    }}
                >
                    {t(
                        `${basePath}.title`
                    )}
                </Typography>

                <Typography
                    sx={{
                        mt:
                            1.25,

                        color:
                            'rgba(230,240,234,0.55)',

                        fontSize:
                            '0.82rem',

                        lineHeight:
                            1.7,

                        overflowWrap:
                            'break-word',
                    }}
                >
                    {t(
                        `${basePath}.description`
                    )}
                </Typography>
            </Box>
        </Box>
    );
}

export default MarketApproachSection;