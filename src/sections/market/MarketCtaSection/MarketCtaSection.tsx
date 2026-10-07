import {
    ArrowUpRight,
    Circle,
} from 'lucide-react';

import {
    Box,
    Typography,
} from '@mui/material';

import {
    Link,
} from 'react-router-dom';

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
   MARKET CTA SECTION
========================================================= */

export function MarketCtaSection() {
    const {
        t,
    } = useTranslation();

    return (
        <Box
            component="section"
            id={
                marketPageData
                    .cta
                    .id
            }
            sx={{
                position:
                    'relative',

                overflow:
                    'hidden',

                bgcolor:
                    '#f3f5f2',

                py: {
                    xs:
                        10,

                    md:
                        14,

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
                        0.45,

                    backgroundImage: `
                        linear-gradient(
                            rgba(12,32,23,0.035) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(12,32,23,0.035) 1px,
                            transparent 1px
                        )
                    `,

                    backgroundSize:
                        '80px 80px',

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

                    width:
                        760,

                    height:
                        760,

                    right:
                        -360,

                    top:
                        -420,

                    borderRadius:
                        '50%',

                    background:
                        'radial-gradient(circle, rgba(54,145,98,0.12), transparent 68%)',

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
                                1.2,

                            mb:
                                4,
                        }}
                    >
                        <Circle
                            size={
                                7
                            }

                            fill="#31835d"

                            color="#31835d"
                        />

                        <Typography
                            sx={{
                                color:
                                    '#287451',

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
                                'marketPage.cta.eyebrow'
                            )}
                        </Typography>
                    </Box>

                    {/* =================================================
                        MAIN GRID
                    ================================================= */}

                    <Box
                        sx={{
                            display:
                                'grid',

                            gridTemplateColumns: {
                                xs:
                                    '1fr',

                                lg:
                                    'minmax(0, 1fr) minmax(350px, 430px)',
                            },

                            gap: {
                                xs:
                                    7,

                                md:
                                    9,

                                lg:
                                    14,
                            },

                            alignItems:
                                'end',
                        }}
                    >
                        {/* =================================================
                            LEFT CONTENT
                        ================================================= */}

                        <Box>
                            <Typography
                                component="h2"
                                sx={{
                                    maxWidth:
                                        900,

                                    color:
                                        '#0b1711',

                                    fontSize: {
                                        xs:
                                            '2.6rem',

                                        sm:
                                            '3.5rem',

                                        md:
                                            '4.4rem',

                                        lg:
                                            '4.9rem',
                                    },

                                    lineHeight:
                                        0.99,

                                    fontWeight:
                                        500,

                                    letterSpacing:
                                        '-0.06em',
                                }}
                            >
                                {t(
                                    'marketPage.cta.title'
                                )}
                            </Typography>

                            <Typography
                                sx={{
                                    maxWidth:
                                        680,

                                    mt:
                                        4,

                                    color:
                                        'rgba(11,23,17,0.58)',

                                    fontSize: {
                                        xs:
                                            '0.95rem',

                                        md:
                                            '1rem',
                                    },

                                    lineHeight:
                                        1.8,
                                }}
                            >
                                {t(
                                    'marketPage.cta.description'
                                )}
                            </Typography>
                        </Box>

                        {/* =================================================
                            ACTION PANEL
                        ================================================= */}

                        <Box
                            sx={{
                                borderTop:
                                    '1px solid rgba(11,23,17,0.13)',
                            }}
                        >
                            {/* =================================================
                                PRIMARY ACTION
                            ================================================= */}

                            <CtaAction href={marketPageData.cta.contactHref}
                                eyebrow={t('marketPage.cta.primaryEyebrow')}
                                label={t('marketPage.cta.primaryAction')}
                                primary
                            />

                            {/* =================================================
                                SECONDARY ACTION
                            ================================================= */}

                            <CtaAction href={marketPageData.cta.contactHref}

                                eyebrow={t('marketPage.cta.secondaryEyebrow')}
                                label={t('marketPage.cta.secondaryAction')}
                            />
                        </Box>
                    </Box>

                    {/* =================================================
                        BOTTOM
                    ================================================= */}

                    <Box
                        sx={{
                            mt: {
                                xs: 8,
                                md: 11,
                            },

                            pt: 3,
                            display: 'flex',
                            flexDirection: {
                                xs:
                                    'column',
                                sm:
                                    'row',
                            },

                            justifyContent:
                                'space-between',

                            gap:
                                2,

                            borderTop:
                                '1px solid rgba(11,23,17,0.1)',
                        }}
                    >
                        <Typography
                            sx={{
                                color:
                                    'rgba(11,23,17,0.4)',

                                fontSize:
                                    '0.64rem',

                                fontWeight:
                                    700,

                                letterSpacing:
                                    '0.13em',

                                textTransform:
                                    'uppercase',
                            }}
                        >
                            {t(
                                'marketPage.cta.bottomPrimary'
                            )}
                        </Typography>

                        <Typography
                            sx={{
                                color:
                                    'rgba(11,23,17,0.4)',

                                fontSize:
                                    '0.64rem',

                                fontWeight:
                                    700,

                                letterSpacing:
                                    '0.13em',

                                textTransform:
                                    'uppercase',
                            }}
                        >
                            {t(
                                'marketPage.cta.bottomSecondary'
                            )}
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

/* =========================================================
   CTA ACTION
========================================================= */

interface CtaActionProps {
    href: string;
    eyebrow: string;
    label: string;
    primary?: boolean;
}

function CtaAction({
    href,
    eyebrow,
    label,
    primary = false,
}: CtaActionProps) {
    return (
        <Box
            component={
                Link
            }

            to={
                href
            }

            sx={{
                position:
                    'relative',

                minHeight:
                    104,

                px: {
                    xs:
                        2,

                    md:
                        2.5,
                },

                display:
                    'flex',

                alignItems:
                    'center',

                justifyContent:
                    'space-between',

                gap:
                    3,

                color:
                    primary
                        ? '#ffffff'
                        : '#122019',

                bgcolor:
                    primary
                        ? '#1e6e49'
                        : 'transparent',

                borderBottom:
                    '1px solid rgba(11,23,17,0.13)',

                textDecoration:
                    'none',

                overflow:
                    'hidden',

                transition:
                    'background-color 250ms ease, color 250ms ease',

                '&::before': {
                    content:
                        '""',

                    position:
                        'absolute',

                    inset:
                        0,

                    bgcolor:
                        primary
                            ? 'rgba(255,255,255,0.055)'
                            : 'rgba(36,119,79,0.055)',

                    transform:
                        'translateX(-101%)',

                    transition:
                        'transform 350ms cubic-bezier(0.2, 0.7, 0.2, 1)',
                },

                '&:hover::before': {
                    transform:
                        'translateX(0)',
                },

                '&:hover .cta-arrow': {
                    transform:
                        'translate(3px, -3px)',
                },
            }}
        >
            <Box
                sx={{
                    position:
                        'relative',

                    zIndex:
                        1,
                }}
            >
                <Typography
                    sx={{
                        color:
                            primary
                                ? 'rgba(255,255,255,0.58)'
                                : 'rgba(11,23,17,0.4)',

                        fontSize:
                            '0.61rem',

                        fontWeight:
                            800,

                        letterSpacing:
                            '0.14em',

                        textTransform:
                            'uppercase',
                    }}
                >
                    {eyebrow}
                </Typography>

                <Typography
                    sx={{
                        mt:
                            0.65,

                        fontSize: {
                            xs:
                                '0.95rem',

                            md:
                                '1.02rem',
                        },

                        lineHeight:
                            1.3,

                        fontWeight:
                            600,
                    }}
                >
                    {label}
                </Typography>
            </Box>

            <Box
                className="cta-arrow"
                sx={{
                    position:
                        'relative',

                    zIndex:
                        1,

                    width:
                        44,

                    height:
                        44,

                    flexShrink:
                        0,

                    display:
                        'grid',

                    placeItems:
                        'center',

                    color:
                        'inherit',

                    border:
                        primary
                            ? '1px solid rgba(255,255,255,0.25)'
                            : '1px solid rgba(11,23,17,0.14)',

                    transition:
                        'transform 250ms ease',
                }}
            >
                <ArrowUpRight
                    size={
                        18
                    }

                    strokeWidth={
                        1.5
                    }
                />
            </Box>
        </Box>
    );
}

export default MarketCtaSection;