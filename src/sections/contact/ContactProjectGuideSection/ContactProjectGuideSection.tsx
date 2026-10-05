import {
    Box,
    Typography,
} from '@mui/material';

import {
    ArrowDownRight,
    Box as PackageIcon,
    FileImage,
    Ruler,
    Target,
    type LucideIcon,
} from 'lucide-react';

import { useTranslation } from 'react-i18next';

import { Container } from '../../../components/common/Container';

/* =========================================================
   TYPES
========================================================= */

type GuideKey =
    | 'drawing'
    | 'dimensions'
    | 'quantity'
    | 'purpose';

interface GuideItem {
    key: GuideKey;
    icon: LucideIcon;
}

/* =========================================================
   DATA
========================================================= */

const guideItems: GuideItem[] = [
    {
        key: 'drawing',
        icon: FileImage,
    },
    {
        key: 'dimensions',
        icon: Ruler,
    },
    {
        key: 'quantity',
        icon: PackageIcon,
    },
    {
        key: 'purpose',
        icon: Target,
    },
];

/* =========================================================
   COMPONENT
========================================================= */

export function ContactProjectGuideSection() {
    const { t } = useTranslation();

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                overflow: 'hidden',

                py: {
                    xs: 9,
                    md: 12,
                    lg: 15,
                },

                bgcolor: '#f7f9f8',

                '&::before': {
                    content: '""',

                    position: 'absolute',

                    width: {
                        xs: 360,
                        md: 620,
                    },

                    height: {
                        xs: 360,
                        md: 620,
                    },

                    top: {
                        xs: -220,
                        md: -360,
                    },

                    right: {
                        xs: -220,
                        md: -280,
                    },

                    borderRadius: '50%',

                    background:
                        'radial-gradient(circle, rgba(27, 100, 72, 0.10) 0%, rgba(27, 100, 72, 0) 70%)',

                    pointerEvents: 'none',
                },
            }}
        >
            <Container>
                {/* =====================================================
                    HEADER
                ===================================================== */}

                <Box
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',
                            lg: '1.15fr 0.85fr',
                        },

                        gap: {
                            xs: 4,
                            lg: 10,
                        },

                        alignItems: 'end',

                        mb: {
                            xs: 6,
                            md: 8,
                        },
                    }}
                >
                    {/* LEFT */}

                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.4,

                                mb: 2.5,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 7,
                                    height: 7,

                                    borderRadius: '50%',

                                    bgcolor:
                                        'primary.main',
                                }}
                            />

                            <Typography
                                sx={{
                                    color:
                                        'primary.main',

                                    fontSize:
                                        '0.68rem',

                                    fontWeight: 700,

                                    letterSpacing:
                                        '0.17em',

                                    textTransform:
                                        'uppercase',
                                }}
                            >
                                {t(
                                    'contactPage.projectGuide.eyebrow'
                                )}
                            </Typography>
                        </Box>

                        <Typography
                            component="h2"
                            sx={{
                                maxWidth: 720,

                                fontSize: {
                                    xs: '2.65rem',
                                    sm: '3.4rem',
                                    md: '4.1rem',
                                    lg: '4.5rem',
                                },

                                lineHeight: 0.98,

                                fontWeight: 700,

                                letterSpacing:
                                    '-0.055em',

                                color:
                                    'text.primary',
                            }}
                        >
                            {t(
                                'contactPage.projectGuide.title'
                            )}
                        </Typography>
                    </Box>

                    {/* RIGHT */}

                    <Box
                        sx={{
                            maxWidth: 520,

                            pb: {
                                lg: 0.8,
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                color:
                                    'text.secondary',

                                fontSize: {
                                    xs: '0.95rem',
                                    md: '1rem',
                                },

                                lineHeight: 1.85,
                            }}
                        >
                            {t(
                                'contactPage.projectGuide.description'
                            )}
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',

                                gap: 1.5,

                                mt: 3,
                            }}
                        >
                            <ArrowDownRight
                                size={18}
                                strokeWidth={1.6}
                            />

                            <Typography
                                sx={{
                                    fontSize:
                                        '0.67rem',

                                    fontWeight: 700,

                                    letterSpacing:
                                        '0.13em',

                                    textTransform:
                                        'uppercase',

                                    color:
                                        'text.primary',
                                }}
                            >
                                {t(
                                    'contactPage.projectGuide.helper'
                                )}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* =====================================================
                    CONTENT PANEL
                ===================================================== */}

                <Box
                    sx={{
                        position: 'relative',

                        bgcolor:
                            'background.paper',

                        border: '1px solid',

                        borderColor:
                            'divider',

                        boxShadow:
                            '0 30px 80px rgba(20, 40, 30, 0.07)',

                        overflow: 'hidden',
                    }}
                >
                    <Box
                        sx={{
                            display: 'grid',

                            gridTemplateColumns: {
                                xs: '1fr',

                                md:
                                    'repeat(2, minmax(0, 1fr))',
                            },
                        }}
                    >
                        {guideItems.map(
                            (item, index) => {
                                const Icon =
                                    item.icon;

                                const isRight =
                                    index % 2 ===
                                    1;

                                const isBottom =
                                    index >= 2;

                                return (
                                    <Box
                                        key={
                                            item.key
                                        }
                                        sx={{
                                            position:
                                                'relative',

                                            minHeight: {
                                                xs: 240,
                                                md: 285,
                                            },

                                            p: {
                                                xs: 3.5,
                                                sm: 4.5,
                                                md: 5,
                                                lg: 6,
                                            },

                                            display:
                                                'flex',

                                            flexDirection:
                                                'column',

                                            justifyContent:
                                                'space-between',

                                            borderRight: {
                                                xs:
                                                    'none',

                                                md:
                                                    isRight
                                                        ? 'none'
                                                        : '1px solid',
                                            },

                                            borderBottom:
                                                {
                                                    xs:
                                                        index <
                                                        guideItems.length -
                                                            1
                                                            ? '1px solid'
                                                            : 'none',

                                                    md:
                                                        isBottom
                                                            ? 'none'
                                                            : '1px solid',
                                                },

                                            borderColor:
                                                'divider',

                                            transition:
                                                'background-color 260ms ease',

                                            overflow:
                                                'hidden',

                                            '&::before':
                                                {
                                                    content:
                                                        '""',

                                                    position:
                                                        'absolute',

                                                    left: 0,
                                                    top: 0,

                                                    width:
                                                        '100%',

                                                    height:
                                                        3,

                                                    bgcolor:
                                                        'primary.main',

                                                    transform:
                                                        'scaleX(0)',

                                                    transformOrigin:
                                                        'left',

                                                    transition:
                                                        'transform 300ms ease',
                                                },

                                            '&::after':
                                                {
                                                    content:
                                                        '""',

                                                    position:
                                                        'absolute',

                                                    width:
                                                        220,

                                                    height:
                                                        220,

                                                    right:
                                                        -110,

                                                    bottom:
                                                        -140,

                                                    borderRadius:
                                                        '50%',

                                                    bgcolor:
                                                        'primary.main',

                                                    opacity:
                                                        0,

                                                    transition:
                                                        'opacity 300ms ease, transform 300ms ease',

                                                    transform:
                                                        'scale(0.8)',

                                                    pointerEvents:
                                                        'none',
                                                },

                                            '&:hover':
                                                {
                                                    bgcolor:
                                                        'rgba(27, 100, 72, 0.025)',
                                                },

                                            '&:hover::before':
                                                {
                                                    transform:
                                                        'scaleX(1)',
                                                },

                                            '&:hover::after':
                                                {
                                                    opacity:
                                                        0.045,

                                                    transform:
                                                        'scale(1)',
                                                },

                                            '&:hover .guide-icon':
                                                {
                                                    bgcolor:
                                                        'primary.main',

                                                    borderColor:
                                                        'primary.main',

                                                    color:
                                                        'primary.contrastText',

                                                    transform:
                                                        'translateY(-3px)',
                                                },

                                            '&:hover .guide-title':
                                                {
                                                    transform:
                                                        'translateX(4px)',
                                                },
                                        }}
                                    >
                                        {/* ICON */}

                                        <Box
                                            className="guide-icon"
                                            sx={{
                                                width: 54,
                                                height: 54,

                                                display:
                                                    'grid',

                                                placeItems:
                                                    'center',

                                                border:
                                                    '1px solid',

                                                borderColor:
                                                    'divider',

                                                bgcolor:
                                                    '#f7f9f8',

                                                color:
                                                    'primary.main',

                                                transition:
                                                    'all 260ms ease',
                                            }}
                                        >
                                            <Icon
                                                size={
                                                    21
                                                }
                                                strokeWidth={
                                                    1.6
                                                }
                                            />
                                        </Box>

                                        {/* TEXT */}

                                        <Box
                                            sx={{
                                                position:
                                                    'relative',

                                                zIndex: 1,

                                                mt: 6,
                                            }}
                                        >
                                            <Typography
                                                className="guide-title"
                                                component="h3"
                                                sx={{
                                                    mb: 1.4,

                                                    fontSize: {
                                                        xs:
                                                            '1.4rem',

                                                        md:
                                                            '1.6rem',
                                                    },

                                                    fontWeight: 650,

                                                    lineHeight: 1.15,

                                                    letterSpacing:
                                                        '-0.035em',

                                                    color:
                                                        'text.primary',

                                                    transition:
                                                        'transform 250ms ease',
                                                }}
                                            >
                                                {t(
                                                    `contactPage.projectGuide.items.${item.key}.title`
                                                )}
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    maxWidth:
                                                        430,

                                                    color:
                                                        'text.secondary',

                                                    fontSize:
                                                        '0.9rem',

                                                    lineHeight: 1.75,
                                                }}
                                            >
                                                {t(
                                                    `contactPage.projectGuide.items.${item.key}.description`
                                                )}
                                            </Typography>
                                        </Box>
                                    </Box>
                                );
                            }
                        )}
                    </Box>

                    {/* =================================================
                        BOTTOM NOTE
                    ================================================= */}

                    <Box
                        sx={{
                            position: 'relative',

                            display: 'grid',

                            gridTemplateColumns: {
                                xs: '1fr',

                                md:
                                    'auto minmax(0, 1fr) auto',
                            },

                            gap: {
                                xs: 2,
                                md: 3,
                            },

                            alignItems: 'center',

                            px: {
                                xs: 3.5,
                                md: 5,
                                lg: 6,
                            },

                            py: {
                                xs: 3.5,
                                md: 4,
                            },

                            bgcolor: '#10271f',

                            color: '#ffffff',
                        }}
                    >
                        {/* ICON */}

                        <Box
                            sx={{
                                width: 46,
                                height: 46,

                                display: 'grid',

                                placeItems:
                                    'center',

                                flexShrink: 0,

                                border:
                                    '1px solid rgba(255,255,255,0.18)',

                                color: '#ffffff',
                            }}
                        >
                            <FileImage
                                size={19}
                                strokeWidth={1.6}
                            />
                        </Box>

                        {/* TEXT */}

                        <Box>
                            <Typography
                                sx={{
                                    mb: 0.7,

                                    color:
                                        'primary.light',

                                    fontSize:
                                        '0.64rem',

                                    fontWeight: 700,

                                    letterSpacing:
                                        '0.15em',

                                    textTransform:
                                        'uppercase',
                                }}
                            >
                                TEKNİK ÇİZİM
                                ZORUNLU DEĞİL
                            </Typography>

                            <Typography
                                sx={{
                                    maxWidth: 720,

                                    color:
                                        'rgba(255,255,255,0.72)',

                                    fontSize:
                                        '0.84rem',

                                    lineHeight: 1.7,
                                }}
                            >
                                {t(
                                    'contactPage.projectGuide.note'
                                )}
                            </Typography>
                        </Box>

                        {/* DECORATION */}

                        <Typography
                            sx={{
                                display: {
                                    xs: 'none',
                                    md: 'block',
                                },

                                justifySelf:
                                    'end',

                                color:
                                    'rgba(255,255,255,0.38)',

                                fontSize:
                                    '0.62rem',

                                fontWeight: 700,

                                letterSpacing:
                                    '0.16em',

                                textTransform:
                                    'uppercase',
                            }}
                        >
                            MBA METAL
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default ContactProjectGuideSection;