import {
    ArrowUpRight,
    Check,
} from 'lucide-react';

import {
    Box,
    Typography,
} from '@mui/material';

import {
    Link as RouterLink,
} from 'react-router-dom';

import {
    useTranslation,
} from 'react-i18next';

import {
    Container,
} from '../../../components/common/Container';

import {
    industriesPageData,
    type IndustryItem,
} from '../../../data/industries/industries.data';

/* =========================================================
   TYPES
========================================================= */

interface IndustryCardProps {
    item: IndustryItem;

    variant?:
    | 'large'
    | 'standard';
}

interface CompactIndustryCardProps {
    item: IndustryItem;
}

/* =========================================================
   LINK WRAPPER
========================================================= */

interface IndustryLinkWrapperProps {
    item: IndustryItem;

    children:
    React.ReactNode;
}

function IndustryLinkWrapper({
    item,
    children,
}: IndustryLinkWrapperProps) {
    /*
     * Henüz detay sayfası olmayan sektörlerde
     * normal içerik render edilir.
     */

    if (!item.href) {
        return <>{children}</>;
    }

    /*
     * Detay sayfası bulunan sektörlerde
     * kartın tamamı tıklanabilir olur.
     */

    return (
        <RouterLink
            to={item.href}
            style={{
                display: 'block',

                height: '100%',

                color: 'inherit',

                textDecoration:
                    'none',
            }}
        >
            {children}
        </RouterLink>
    );
}

/* =========================================================
   INDUSTRY IMAGE CARD
========================================================= */

function IndustryCard({
    item,

    variant = 'standard',
}: IndustryCardProps) {
    const { t } =
        useTranslation();

    const basePath =
        `industriesPage.showcase.items.${item.id}`;

    const applications = t(
        `${basePath}.applications`,
        {
            returnObjects: true,
        }
    ) as string[];

    const isLarge =
        variant === 'large';

    const card = (
        <Box
            component="article"
            sx={{
                position:
                    'relative',

                minHeight: {
                    xs: 500,

                    sm: 540,

                    md: isLarge
                        ? 660
                        : 540,
                },

                height: '100%',

                overflow:
                    'hidden',

                bgcolor:
                    '#101713',

                color: '#fff',

                isolation:
                    'isolate',

                border:
                    '1px solid',

                borderColor:
                    'rgba(255,255,255,0.08)',

                cursor:
                    item.href
                        ? 'pointer'
                        : 'default',

                transition:
                    'box-shadow 400ms ease, transform 400ms cubic-bezier(0.2, 0.75, 0.2, 1)',

                '&:hover': item.href
                    ? {
                          boxShadow:
                              '0 30px 70px rgba(9, 24, 16, 0.16)',
                      }
                    : undefined,

                '&:hover .industry-image':
                    item.href
                        ? {
                              transform:
                                  'scale(1.045)',
                          }
                        : undefined,

                '&:hover .industry-arrow':
                    item.href
                        ? {
                              transform:
                                  'translate(3px, -3px)',
                          }
                        : undefined,

                '&:hover .industry-image-overlay':
                    item.href
                        ? {
                              opacity:
                                  0.92,
                          }
                        : undefined,

                '&:hover .industry-arrow-container':
                    item.href
                        ? {
                              bgcolor:
                                  'rgba(43, 126, 89, 0.9)',

                              borderColor:
                                  'rgba(94,181,141,0.7)',
                          }
                        : undefined,
            }}
        >
            {/* =================================================
                IMAGE
            ================================================= */}

            {item.image && (
                <Box
                    component="img"
                    className="industry-image"
                    src={
                        item.image
                    }
                    alt={t(
                        `${basePath}.title`
                    )}
                    sx={{
                        position:
                            'absolute',

                        inset: 0,

                        width:
                            '100%',

                        height:
                            '100%',

                        objectFit:
                            'cover',

                        zIndex: -4,

                        transition:
                            'transform 900ms cubic-bezier(0.2, 0.75, 0.2, 1)',
                    }}
                />
            )}

            {/* =================================================
                IMAGE OVERLAYS
            ================================================= */}

            <Box
                className="industry-image-overlay"
                sx={{
                    position:
                        'absolute',

                    inset: 0,

                    zIndex: -3,

                    opacity: 1,

                    background: `
                        linear-gradient(
                            180deg,
                            rgba(5, 12, 9, 0.05) 0%,
                            rgba(5, 12, 9, 0.12) 28%,
                            rgba(5, 12, 9, 0.56) 67%,
                            rgba(5, 12, 9, 0.96) 100%
                        )
                    `,

                    transition:
                        'opacity 400ms ease',
                }}
            />

            <Box
                sx={{
                    position:
                        'absolute',

                    inset: 0,

                    zIndex: -2,

                    background: `
                        linear-gradient(
                            90deg,
                            rgba(4, 11, 8, 0.52) 0%,
                            rgba(4, 11, 8, 0.08) 65%,
                            transparent 100%
                        )
                    `,
                }}
            />

            {/* =================================================
                GREEN AMBIENT LIGHT
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position:
                        'absolute',

                    left: -120,

                    bottom: -150,

                    width: 430,

                    height: 430,

                    borderRadius:
                        '50%',

                    zIndex: -1,

                    background:
                        'radial-gradient(circle, rgba(31,105,76,0.26), transparent 68%)',

                    pointerEvents:
                        'none',
                }}
            />

            {/* =================================================
                TOP
            ================================================= */}

            <Box
                sx={{
                    position:
                        'absolute',

                    top: {
                        xs: 24,

                        md: 30,
                    },

                    left: {
                        xs: 24,

                        md: 30,
                    },

                    right: {
                        xs: 24,

                        md: 30,
                    },

                    display:
                        'flex',

                    alignItems:
                        'center',

                    justifyContent:
                        'space-between',

                    gap: 2,
                }}
            >
                <Box
                    sx={{
                        display:
                            'inline-flex',

                        alignItems:
                            'center',

                        gap: 1.2,

                        px: 1.4,

                        py: 0.9,

                        bgcolor:
                            'rgba(9, 19, 14, 0.52)',

                        border:
                            '1px solid rgba(255,255,255,0.16)',

                        backdropFilter:
                            'blur(12px)',
                    }}
                >
                    <Box
                        sx={{
                            width: 6,

                            height: 6,

                            borderRadius:
                                '50%',

                            bgcolor:
                                '#5eb58d',
                        }}
                    />

                    <Typography
                        sx={{
                            color:
                                'rgba(255,255,255,0.82)',

                            fontSize:
                                '0.65rem',

                            lineHeight: 1,

                            fontWeight: 700,

                            letterSpacing:
                                '0.14em',

                            textTransform:
                                'uppercase',
                        }}
                    >
                        {t(
                            'industriesPage.showcase.cardEyebrow'
                        )}
                    </Typography>
                </Box>

                <Box
                    className="industry-arrow-container"
                    sx={{
                        width: 46,

                        height: 46,

                        display:
                            'grid',

                        placeItems:
                            'center',

                        flexShrink: 0,

                        border:
                            '1px solid rgba(255,255,255,0.22)',

                        bgcolor:
                            'rgba(255,255,255,0.08)',

                        backdropFilter:
                            'blur(10px)',

                        transition:
                            'background-color 250ms ease, border-color 250ms ease',
                    }}
                >
                    <ArrowUpRight
                        className="industry-arrow"
                        size={18}
                        strokeWidth={
                            1.6
                        }
                        style={{
                            transition:
                                'transform 200ms ease',
                        }}
                    />
                </Box>
            </Box>

            {/* =================================================
                CONTENT
            ================================================= */}

            <Box
                sx={{
                    position:
                        'absolute',

                    left: 0,

                    right: 0,

                    bottom: 0,

                    p: {
                        xs: 3,

                        md: isLarge
                            ? 4.5
                            : 3.5,
                    },
                }}
            >
                <Typography
                    component="h3"
                    sx={{
                        maxWidth:
                            isLarge
                                ? 620
                                : 430,

                        fontSize: {
                            xs: '2rem',

                            sm: '2.3rem',

                            md: isLarge
                                ? '3.35rem'
                                : '2.45rem',
                        },

                        lineHeight: 1,

                        fontWeight: 500,

                        letterSpacing:
                            '-0.045em',
                    }}
                >
                    {t(
                        `${basePath}.title`
                    )}
                </Typography>

                <Typography
                    sx={{
                        maxWidth:
                            isLarge
                                ? 620
                                : 470,

                        mt: 2,

                        color:
                            'rgba(255,255,255,0.68)',

                        fontSize: {
                            xs: '0.9rem',

                            md: '0.95rem',
                        },

                        lineHeight: 1.7,
                    }}
                >
                    {t(
                        `${basePath}.description`
                    )}
                </Typography>

                {/* APPLICATIONS */}

                <Box
                    sx={{
                        mt: 3,

                        pt: 2.5,

                        borderTop:
                            '1px solid rgba(255,255,255,0.16)',

                        display:
                            'flex',

                        flexWrap:
                            'wrap',

                        gap: 1,
                    }}
                >
                    {applications
                        .slice(
                            0,

                            isLarge
                                ? 5
                                : 4
                        )
                        .map(
                            (
                                application
                            ) => (
                                <Box
                                    key={
                                        application
                                    }
                                    sx={{
                                        display:
                                            'inline-flex',

                                        alignItems:
                                            'center',

                                        gap: 0.8,

                                        px: 1.1,

                                        py: 0.8,

                                        border:
                                            '1px solid rgba(255,255,255,0.14)',

                                        bgcolor:
                                            'rgba(255,255,255,0.055)',

                                        backdropFilter:
                                            'blur(8px)',
                                    }}
                                >
                                    <Check
                                        size={
                                            12
                                        }
                                        strokeWidth={
                                            2
                                        }
                                    />

                                    <Typography
                                        sx={{
                                            fontSize:
                                                '0.68rem',

                                            lineHeight:
                                                1,

                                            fontWeight:
                                                600,

                                            color:
                                                'rgba(255,255,255,0.78)',
                                        }}
                                    >
                                        {
                                            application
                                        }
                                    </Typography>
                                </Box>
                            )
                        )}
                </Box>
            </Box>
        </Box>
    );

    return (
        <IndustryLinkWrapper
            item={item}
        >
            {card}
        </IndustryLinkWrapper>
    );
}

/* =========================================================
   COMPACT INDUSTRY CARD
========================================================= */

function CompactIndustryCard({
    item,
}: CompactIndustryCardProps) {
    const { t } =
        useTranslation();

    const basePath =
        `industriesPage.showcase.items.${item.id}`;

    const applications = t(
        `${basePath}.applications`,
        {
            returnObjects: true,
        }
    ) as string[];

    const card = (
        <Box
            component="article"
            sx={{
                position:
                    'relative',

                overflow:
                    'hidden',

                minHeight: 350,

                height: '100%',

                p: {
                    xs: 3,

                    md: 3.5,
                },

                display:
                    'flex',

                flexDirection:
                    'column',

                bgcolor:
                    'background.paper',

                border:
                    '1px solid',

                borderColor:
                    'divider',

                cursor:
                    item.href
                        ? 'pointer'
                        : 'default',

                transition:
                    'border-color 220ms ease, transform 220ms ease, box-shadow 220ms ease',

                '&:hover': {
                    borderColor:
                        item.href
                            ? 'primary.main'
                            : 'divider',

                    transform:
                        item.href
                            ? 'translateY(-3px)'
                            : 'none',

                    boxShadow:
                        item.href
                            ? '0 22px 55px rgba(20, 38, 29, 0.07)'
                            : 'none',
                },

                '&:hover .compact-arrow':
                    item.href
                        ? {
                              color:
                                  'primary.main',

                              transform:
                                  'translate(3px, -3px)',
                          }
                        : undefined,
            }}
        >
            {/* DECORATION */}

            <Box
                aria-hidden="true"
                sx={{
                    position:
                        'absolute',

                    top: -100,

                    right: -100,

                    width: 260,

                    height: 260,

                    borderRadius:
                        '50%',

                    background: (
                        theme
                    ) =>
                        `radial-gradient(
                            circle,
                            ${theme.palette.primary.main}15 0%,
                            transparent 68%
                        )`,

                    pointerEvents:
                        'none',
                }}
            />

            {/* TOP */}

            <Box
                sx={{
                    display:
                        'flex',

                    justifyContent:
                        'space-between',

                    alignItems:
                        'flex-start',

                    gap: 2,

                    mb: 7,
                }}
            >
                <Box
                    sx={{
                        width: 44,

                        height: 44,

                        display:
                            'grid',

                        placeItems:
                            'center',

                        border:
                            '1px solid',

                        borderColor:
                            'divider',

                        bgcolor:
                            'background.default',
                    }}
                >
                    <Box
                        sx={{
                            width: 8,

                            height: 8,

                            bgcolor:
                                'primary.main',
                        }}
                    />
                </Box>

                <ArrowUpRight
                    className="compact-arrow"
                    size={19}
                    strokeWidth={
                        1.5
                    }
                    style={{
                        transition:
                            'transform 200ms ease, color 200ms ease',
                    }}
                />
            </Box>

            {/* CONTENT */}

            <Box
                sx={{
                    mt: 'auto',
                }}
            >
                <Typography
                    component="h3"
                    sx={{
                        fontSize: {
                            xs: '1.6rem',

                            md: '1.85rem',
                        },

                        lineHeight:
                            1.08,

                        fontWeight:
                            500,

                        letterSpacing:
                            '-0.035em',

                        color:
                            'text.primary',
                    }}
                >
                    {t(
                        `${basePath}.title`
                    )}
                </Typography>

                <Typography
                    sx={{
                        mt: 1.5,

                        color:
                            'text.secondary',

                        fontSize:
                            '0.9rem',

                        lineHeight:
                            1.7,
                    }}
                >
                    {t(
                        `${basePath}.description`
                    )}
                </Typography>

                <Box
                    sx={{
                        mt: 2.5,

                        display:
                            'flex',

                        flexDirection:
                            'column',

                        gap: 1,
                    }}
                >
                    {applications
                        .slice(
                            0,
                            3
                        )
                        .map(
                            (
                                application
                            ) => (
                                <Box
                                    key={
                                        application
                                    }
                                    sx={{
                                        display:
                                            'flex',

                                        alignItems:
                                            'center',

                                        gap: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 5,

                                            height: 5,

                                            flexShrink:
                                                0,

                                            borderRadius:
                                                '50%',

                                            bgcolor:
                                                'primary.main',
                                        }}
                                    />

                                    <Typography
                                        sx={{
                                            color:
                                                'text.secondary',

                                            fontSize:
                                                '0.76rem',

                                            lineHeight:
                                                1.4,
                                        }}
                                    >
                                        {
                                            application
                                        }
                                    </Typography>
                                </Box>
                            )
                        )}
                </Box>
            </Box>
        </Box>
    );

    return (
        <IndustryLinkWrapper
            item={item}
        >
            {card}
        </IndustryLinkWrapper>
    );
}

/* =========================================================
   SECTION
========================================================= */

export function IndustriesShowcaseSection() {
    const { t } =
        useTranslation();

    const {
        industries,
    } = industriesPageData;

    const imageIndustries =
        industries.items.filter(
            (item) =>
                Boolean(
                    item.image
                )
        );

    const otherIndustries =
        industries.items.filter(
            (item) =>
                !item.image
        );

    return (
        <Box
            component="section"
            id={industries.id}
            sx={{
                position:
                    'relative',

                overflow:
                    'hidden',

                bgcolor:
                    'background.default',

                py: {
                    xs: 10,

                    md: 14,

                    lg: 17,
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

                    inset: 0,

                    opacity: 0.3,

                    backgroundImage: (
                        theme
                    ) => `
                        linear-gradient(
                            ${theme.palette.divider} 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            ${theme.palette.divider} 1px,
                            transparent 1px
                        )
                    `,

                    backgroundSize:
                        '72px 72px',

                    maskImage:
                        'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)',

                    pointerEvents:
                        'none',
                }}
            />

            <Container>
                <Box
                    sx={{
                        position:
                            'relative',

                        zIndex: 1,
                    }}
                >
                    {/* =================================================
                        HEADER
                    ================================================= */}

                    <Box
                        sx={{
                            display:
                                'grid',

                            gridTemplateColumns:
                                {
                                    xs: '1fr',

                                    lg:
                                        'minmax(0, 1fr) minmax(340px, 0.48fr)',
                                },

                            gap: {
                                xs: 3,

                                lg: 10,
                            },

                            alignItems:
                                'end',

                            mb: {
                                xs: 6,

                                md: 9,
                            },
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

                                    mb: 2.5,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 38,

                                        height:
                                            '1px',

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

                                        fontWeight:
                                            800,

                                        letterSpacing:
                                            '0.16em',

                                        textTransform:
                                            'uppercase',
                                    }}
                                >
                                    {t(
                                        'industriesPage.showcase.eyebrow'
                                    )}
                                </Typography>
                            </Box>

                            <Typography
                                component="h2"
                                sx={{
                                    maxWidth:
                                        780,

                                    color:
                                        'text.primary',

                                    fontSize:
                                        {
                                            xs:
                                                '2.5rem',

                                            sm:
                                                '3.2rem',

                                            md:
                                                '4.4rem',
                                        },

                                    lineHeight:
                                        0.98,

                                    fontWeight:
                                        500,

                                    letterSpacing:
                                        '-0.055em',
                                }}
                            >
                                {t(
                                    'industriesPage.showcase.title'
                                )}
                            </Typography>
                        </Box>

                        <Typography
                            sx={{
                                maxWidth:
                                    500,

                                color:
                                    'text.secondary',

                                fontSize:
                                    {
                                        xs:
                                            '0.98rem',

                                        md:
                                            '1.05rem',
                                    },

                                lineHeight:
                                    1.8,
                            }}
                        >
                            {t(
                                'industriesPage.showcase.description'
                            )}
                        </Typography>
                    </Box>

                    {/* =================================================
                        FEATURED INDUSTRIES
                    ================================================= */}

                    <Box
                        sx={{
                            display:
                                'grid',

                            gridTemplateColumns:
                                {
                                    xs: '1fr',

                                    md:
                                        'repeat(2, minmax(0, 1fr))',

                                    lg:
                                        'repeat(12, minmax(0, 1fr))',
                                },

                            gap: 2,
                        }}
                    >
                        {imageIndustries.map(
                            (
                                item,
                                index
                            ) => {
                                const large =
                                    index ===
                                        0 ||
                                    index ===
                                        3;

                                const isLast =
                                    index ===
                                    imageIndustries.length -
                                        1;

                                const oddLast =
                                    imageIndustries.length %
                                        2 !==
                                        0 &&
                                    isLast;

                                return (
                                    <Box
                                        key={
                                            item.id
                                        }
                                        sx={{
                                            gridColumn:
                                                {
                                                    xs:
                                                        'auto',

                                                    md:
                                                        oddLast
                                                            ? '1 / -1'
                                                            : 'auto',

                                                    lg:
                                                        oddLast
                                                            ? '1 / -1'
                                                            : large
                                                              ? 'span 7'
                                                              : 'span 5',
                                                },

                                            height:
                                                '100%',
                                        }}
                                    >
                                        <IndustryCard
                                            item={
                                                item
                                            }
                                            variant={
                                                large ||
                                                oddLast
                                                    ? 'large'
                                                    : 'standard'
                                            }
                                        />
                                    </Box>
                                );
                            }
                        )}
                    </Box>

                    {/* =================================================
                        OTHER INDUSTRIES
                    ================================================= */}

                    {otherIndustries.length >
                        0 && (
                        <Box
                            sx={{
                                mt: {
                                    xs: 8,

                                    md: 11,
                                },
                            }}
                        >
                            {/* SMALL HEADER */}

                            <Box
                                sx={{
                                    display:
                                        'flex',

                                    alignItems:
                                        'center',

                                    gap: 2,

                                    mb: 4,
                                }}
                            >
                                <Typography
                                    sx={{
                                        flexShrink:
                                            0,

                                        color:
                                            'text.primary',

                                        fontSize:
                                            '0.72rem',

                                        fontWeight:
                                            800,

                                        letterSpacing:
                                            '0.14em',

                                        textTransform:
                                            'uppercase',
                                    }}
                                >
                                    {t(
                                        'industriesPage.showcase.otherIndustries'
                                    )}
                                </Typography>

                                <Box
                                    sx={{
                                        width:
                                            '100%',

                                        height:
                                            '1px',

                                        bgcolor:
                                            'divider',
                                    }}
                                />
                            </Box>

                            <Box
                                sx={{
                                    display:
                                        'grid',

                                    gridTemplateColumns:
                                        {
                                            xs:
                                                '1fr',

                                            sm:
                                                'repeat(2, minmax(0, 1fr))',

                                            lg:
                                                'repeat(4, minmax(0, 1fr))',
                                        },

                                    gap: 2,
                                }}
                            >
                                {otherIndustries.map(
                                    (
                                        item
                                    ) => (
                                        <CompactIndustryCard
                                            key={
                                                item.id
                                            }
                                            item={
                                                item
                                            }
                                        />
                                    )
                                )}
                            </Box>
                        </Box>
                    )}
                </Box>
            </Container>
        </Box>
    );
}

export default IndustriesShowcaseSection;