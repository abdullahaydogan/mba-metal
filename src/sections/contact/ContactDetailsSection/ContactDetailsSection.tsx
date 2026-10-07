import {
    Box,
    Container,
    Typography,
} from '@mui/material';

import {
    Activity,
    ArrowUpRight,
    Clock3,
    Mail,
    MessageCircle,
    Phone,
    type LucideIcon,
} from 'lucide-react';

import {
    useTranslation,
} from 'react-i18next';

/* =========================================================
   TYPES
========================================================= */

interface ContactItem {
    id: string;
    labelKey: string;
    valueKey: string;
    href: string;
    icon: LucideIcon;
    external?: boolean;
}

interface WorkingHourItem {
    id: string;
    labelKey: string;
    value?: string;
    valueKey?: string;
    highlight?: boolean;
}

/* =========================================================
   DATA
========================================================= */

const contactItems: ContactItem[] = [
    {
        id: 'phone',
        labelKey: 'contactPage.details.phone.label',
        valueKey: 'contactPage.details.phone.value',
        href: 'tel:+905300508658',
        icon: Phone,
    },
    {
        id: 'whatsapp',
        labelKey: 'contactPage.details.whatsapp.label',
        valueKey: 'contactPage.details.whatsapp.value',
        href: 'https://wa.me/905300508658',
        icon: MessageCircle,
        external: true,
    },
    {
        id: 'email',
        labelKey: 'contactPage.details.email.label',
        valueKey: 'contactPage.details.email.value',
        href: 'mailto:mbametalekipman@gmail.com',
        icon: Mail,
    },
];

const workingHours: WorkingHourItem[] = [
    {
        id: 'weekdays',
        labelKey: 'contactPage.details.workingHours.weekdays',
        value: '08:00 - 18:00',
    },
    {
        id: 'saturday',
        labelKey: 'contactPage.details.workingHours.saturday',
        value: '08:00 - 13:00',
    },
    {
        id: 'sunday',
        labelKey: 'contactPage.details.workingHours.sunday',
        valueKey: 'contactPage.details.workingHours.closed',
        highlight: true,
    },
];

/* =========================================================
   COMPONENT
========================================================= */

export function ContactDetailsSection() {
    const {
        t,
    } = useTranslation();

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                overflow: 'hidden',
                isolation: 'isolate',

                py: {
                    xs: 9,
                    sm: 11,
                    md: 14,
                    lg: 16,
                },

                /*
                 * MBA Metal dark-green environment.
                 *
                 * No grid.
                 * No square pattern.
                 * Only depth, light and industrial geometry.
                 */
                bgcolor: '#07150f',

                background: `
                    radial-gradient(
                        ellipse 70% 55% at 88% 8%,
                        rgba(32, 107, 75, 0.30) 0%,
                        rgba(19, 72, 50, 0.16) 35%,
                        transparent 72%
                    ),
                    radial-gradient(
                        ellipse 52% 46% at 4% 94%,
                        rgba(26, 91, 63, 0.18) 0%,
                        transparent 68%
                    ),
                    linear-gradient(
                        135deg,
                        #07150f 0%,
                        #0a1d15 42%,
                        #0b2118 72%,
                        #07150f 100%
                    )
                `,

                /*
                 * Very subtle noise-like visual depth
                 * created without an image asset.
                 */
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: 'none',

                    background: `
                        radial-gradient(
                            circle at 20% 25%,
                            rgba(255,255,255,0.025) 0,
                            transparent 22%
                        ),
                        radial-gradient(
                            circle at 75% 72%,
                            rgba(255,255,255,0.018) 0,
                            transparent 28%
                        )
                    `,
                },

                /*
                 * Bottom atmospheric fade.
                 */
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: '10%',
                    right: '10%',
                    bottom: -180,
                    height: 320,
                    borderRadius: '50%',
                    bgcolor: 'rgba(46, 135, 94, 0.10)',
                    filter: 'blur(100px)',
                    pointerEvents: 'none',
                    zIndex: 0,
                },
            }}
        >
            {/* =========================================================
                BACKGROUND DECORATION
            ========================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    overflow: 'hidden',
                    pointerEvents: 'none',
                }}
            >
                {/* LARGE RIGHT RING */}

                <Box
                    sx={{
                        position: 'absolute',

                        top: {
                            xs: -170,
                            md: -310,
                        },

                        right: {
                            xs: -250,
                            md: -180,
                        },

                        width: {
                            xs: 440,
                            md: 720,
                        },

                        height: {
                            xs: 440,
                            md: 720,
                        },

                        borderRadius: '50%',

                        border:
                            '1px solid rgba(123, 188, 155, 0.13)',

                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            inset: 72,
                            borderRadius: '50%',
                            border:
                                '1px solid rgba(123, 188, 155, 0.07)',
                        },

                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            inset: 150,
                            borderRadius: '50%',
                            border:
                                '1px solid rgba(123, 188, 155, 0.045)',
                        },
                    }}
                />

                {/* LARGE LEFT BOTTOM ARC */}

                <Box
                    sx={{
                        position: 'absolute',

                        left: {
                            xs: -310,
                            md: -360,
                        },

                        bottom: {
                            xs: -220,
                            md: -310,
                        },

                        width: {
                            xs: 500,
                            md: 720,
                        },

                        height: {
                            xs: 500,
                            md: 720,
                        },

                        borderRadius: '50%',

                        border:
                            '1px solid rgba(111, 174, 142, 0.09)',

                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            inset: 88,
                            borderRadius: '50%',
                            border:
                                '1px dashed rgba(111, 174, 142, 0.055)',
                        },
                    }}
                />

                {/* TOP LIGHT BEAM */}

                <Box
                    sx={{
                        position: 'absolute',

                        top: {
                            xs: 100,
                            md: 130,
                        },

                        right: {
                            xs: '8%',
                            md: '13%',
                        },

                        width: {
                            xs: 120,
                            md: 300,
                        },

                        height: '1px',

                        background: `
                            linear-gradient(
                                90deg,
                                transparent,
                                rgba(128, 201, 164, 0.55),
                                transparent
                            )
                        `,
                    }}
                />

                {/* LEFT VERTICAL ACCENT */}

                <Box
                    sx={{
                        position: 'absolute',

                        top: {
                            xs: '16%',
                            md: '18%',
                        },

                        left: {
                            xs: 22,
                            md: '6%',
                        },

                        width: '1px',

                        height: {
                            xs: 110,
                            md: 190,
                        },

                        background: `
                            linear-gradient(
                                180deg,
                                transparent,
                                rgba(118, 194, 155, 0.38),
                                transparent
                            )
                        `,
                    }}
                />

                {/* RIGHT VERTICAL GUIDE */}

                <Box
                    sx={{
                        position: 'absolute',

                        top: '42%',

                        right: {
                            xs: 22,
                            md: '5%',
                        },

                        width: '1px',

                        height: {
                            xs: 140,
                            md: 250,
                        },

                        background: `
                            linear-gradient(
                                180deg,
                                transparent,
                                rgba(255,255,255,0.10),
                                transparent
                            )
                        `,
                    }}
                />

                {/* SMALL CROSS */}

                <Box
                    sx={{
                        position: 'absolute',

                        top: {
                            xs: 65,
                            md: 100,
                        },

                        right: {
                            xs: 26,
                            md: '15%',
                        },

                        width: 15,
                        height: 15,
                        opacity: 0.42,

                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: '50%',
                            left: 0,
                            width: '100%',
                            height: '1px',
                            bgcolor:
                                'rgba(130, 204, 166, 0.75)',
                            transform:
                                'translateY(-50%)',
                        },

                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: '50%',
                            width: '1px',
                            height: '100%',
                            bgcolor:
                                'rgba(130, 204, 166, 0.75)',
                            transform:
                                'translateX(-50%)',
                        },
                    }}
                />

                {/* AMBIENT LIGHT */}

                <Box
                    sx={{
                        position: 'absolute',

                        top: {
                            xs: 240,
                            md: 170,
                        },

                        right: {
                            xs: -180,
                            md: '5%',
                        },

                        width: {
                            xs: 380,
                            md: 600,
                        },

                        height: {
                            xs: 380,
                            md: 600,
                        },

                        borderRadius: '50%',

                        background:
                            'rgba(37, 120, 82, 0.12)',

                        filter: {
                            xs: 'blur(90px)',
                            md: 'blur(140px)',
                        },
                    }}
                />

                {/* MICRO DOT */}

                <Box
                    sx={{
                        position: 'absolute',
                        top: '55%',
                        left: '50%',
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        bgcolor:
                            'rgba(133, 210, 170, 0.42)',
                        boxShadow:
                            '0 0 24px rgba(78, 167, 119, 0.65)',
                    }}
                />
            </Box>

            {/* =========================================================
                CONTENT
            ========================================================= */}

            <Container
                maxWidth="xl"
                sx={{
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* =====================================================
                    HEADER
                ===================================================== */}

                <Box
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',
                            md:
                                'minmax(0, 1.1fr) minmax(320px, 0.65fr)',
                        },

                        columnGap: {
                            md: 10,
                            lg: 14,
                        },

                        rowGap: 4,

                        alignItems: 'end',

                        mb: {
                            xs: 7,
                            md: 10,
                        },
                    }}
                >
                    {/* LEFT */}

                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                mb: 2.5,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 7,
                                    height: 7,
                                    flexShrink: 0,
                                    borderRadius: '50%',
                                    bgcolor: '#68b58c',

                                    boxShadow:
                                        '0 0 0 5px rgba(104,181,140,0.10)',
                                }}
                            />

                            <Typography
                                sx={{
                                    fontSize: 12,
                                    fontWeight: 700,
                                    lineHeight: 1,
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    color: '#79bd98',
                                }}
                            >
                                {t(
                                    'contactPage.details.eyebrow'
                                )}
                            </Typography>
                        </Box>

                        <Typography
                            component="h2"
                            sx={{
                                maxWidth: 800,
                                m: 0,

                                fontSize: {
                                    xs: '2.65rem',
                                    sm: '3.5rem',
                                    md: '4.4rem',
                                    lg: '5rem',
                                },

                                lineHeight: {
                                    xs: 1,
                                    md: 0.96,
                                },

                                letterSpacing:
                                    '-0.055em',

                                fontWeight: 700,

                                color:
                                    'rgba(255,255,255,0.96)',
                            }}
                        >
                            {t(
                                'contactPage.details.title'
                            )}
                        </Typography>
                    </Box>

                    {/* RIGHT */}

                    <Box
                        sx={{
                            maxWidth: 520,

                            justifySelf: {
                                md: 'end',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.25,
                                mb: 2.5,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 46,
                                    height: '1px',
                                    bgcolor: '#68b58c',
                                }}
                            />

                            <Box
                                sx={{
                                    width: 5,
                                    height: 5,
                                    borderRadius: '50%',
                                    bgcolor: '#68b58c',
                                    opacity: 0.7,
                                }}
                            />
                        </Box>

                        <Typography
                            sx={{
                                fontSize: {
                                    xs: 16,
                                    md: 18,
                                },

                                lineHeight: 1.8,

                                color:
                                    'rgba(226,238,231,0.68)',
                            }}
                        >
                            {t(
                                'contactPage.details.description'
                            )}
                        </Typography>
                    </Box>
                </Box>

                {/* =====================================================
                    CONTACT DIRECTORY
                ===================================================== */}

                <Box
                    sx={{
                        position: 'relative',

                        borderTop:
                            '1px solid rgba(255,255,255,0.13)',

                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: -1,
                            left: 0,

                            width: {
                                xs: 52,
                                md: 90,
                            },

                            height: '1px',
                            bgcolor: '#68b58c',
                            zIndex: 2,
                        },
                    }}
                >
                    {contactItems.map(
                        (item) => {
                            const Icon =
                                item.icon;

                            return (
                                <Box
                                    key={
                                        item.id
                                    }
                                    component="a"
                                    href={
                                        item.href
                                    }
                                    target={
                                        item.external
                                            ? '_blank'
                                            : undefined
                                    }
                                    rel={
                                        item.external
                                            ? 'noopener noreferrer'
                                            : undefined
                                    }
                                    sx={{
                                        position:
                                            'relative',

                                        isolation:
                                            'isolate',

                                        display:
                                            'grid',

                                        gridTemplateColumns:
                                            {
                                                xs:
                                                    'minmax(0, 1fr) 38px',

                                                sm:
                                                    '220px minmax(0, 1fr) 44px',

                                                md:
                                                    '300px minmax(0, 1fr) 48px',
                                            },

                                        columnGap:
                                            {
                                                xs: 1.5,
                                                sm: 2.5,
                                                md: 4,
                                            },

                                        alignItems:
                                            'center',

                                        minHeight:
                                            {
                                                xs: 110,
                                                sm: 124,
                                                md: 138,
                                            },

                                        px: {
                                            xs: 1,
                                            sm: 1.5,
                                            md: 2,
                                        },

                                        borderBottom:
                                            '1px solid rgba(255,255,255,0.11)',

                                        textDecoration:
                                            'none',

                                        color:
                                            'inherit',

                                        overflow:
                                            'hidden',

                                        transition:
                                            'padding 300ms cubic-bezier(0.22, 1, 0.36, 1)',

                                        /*
                                         * Soft green hover layer.
                                         */
                                        '&::before':
                                            {
                                                content:
                                                    '""',

                                                position:
                                                    'absolute',

                                                inset: 0,

                                                zIndex:
                                                    -2,

                                                background:
                                                    'linear-gradient(90deg, rgba(47,123,83,0.28), rgba(34,102,69,0.18))',

                                                transform:
                                                    'scaleY(0)',

                                                transformOrigin:
                                                    'bottom',

                                                transition:
                                                    'transform 320ms cubic-bezier(0.22, 1, 0.36, 1)',
                                            },

                                        '&::after':
                                            {
                                                content:
                                                    '""',

                                                position:
                                                    'absolute',

                                                top: 0,
                                                left: 0,
                                                bottom: 0,

                                                width: 3,

                                                zIndex:
                                                    -1,

                                                bgcolor:
                                                    '#68b58c',

                                                transform:
                                                    'scaleY(0)',

                                                transformOrigin:
                                                    'center',

                                                transition:
                                                    'transform 300ms cubic-bezier(0.22, 1, 0.36, 1)',
                                            },

                                        '&:hover::before':
                                            {
                                                transform:
                                                    'scaleY(1)',
                                            },

                                        '&:hover::after':
                                            {
                                                transform:
                                                    'scaleY(1)',
                                            },

                                        '&:hover':
                                            {
                                                px: {
                                                    md: 3,
                                                },

                                                '& .contact-label':
                                                    {
                                                        color:
                                                            '#9ed5b7',
                                                    },

                                                '& .contact-mobile-label':
                                                    {
                                                        color:
                                                            '#9ed5b7',
                                                    },

                                                '& .contact-value':
                                                    {
                                                        color:
                                                            '#ffffff',

                                                        transform:
                                                            'translateX(10px)',
                                                    },

                                                '& .contact-icon':
                                                    {
                                                        color:
                                                            '#ffffff',

                                                        borderColor:
                                                            'rgba(128,204,165,0.5)',

                                                        bgcolor:
                                                            'rgba(104,181,140,0.14)',
                                                    },

                                                '& .contact-arrow':
                                                    {
                                                        color:
                                                            '#9ed5b7',

                                                        transform:
                                                            'translate(4px, -4px)',
                                                    },
                                            },

                                        '&:focus-visible':
                                            {
                                                outline:
                                                    '2px solid #68b58c',

                                                outlineOffset:
                                                    -2,
                                            },

                                        '@media (prefers-reduced-motion: reduce)':
                                            {
                                                transition:
                                                    'none',

                                                '&::before, &::after':
                                                    {
                                                        transition:
                                                            'none',
                                                    },

                                                '& .contact-value, & .contact-arrow':
                                                    {
                                                        transition:
                                                            'none',
                                                    },
                                            },
                                    }}
                                >
                                    {/* TYPE */}

                                    <Box
                                        sx={{
                                            display:
                                                {
                                                    xs:
                                                        'none',

                                                    sm:
                                                        'flex',
                                                },

                                            alignItems:
                                                'center',

                                            gap: 1.5,
                                        }}
                                    >
                                        <Box
                                            className="contact-icon"
                                            sx={{
                                                display:
                                                    'grid',

                                                placeItems:
                                                    'center',

                                                width: 40,
                                                height: 40,

                                                flexShrink: 0,

                                                border:
                                                    '1px solid rgba(255,255,255,0.15)',

                                                color:
                                                    'rgba(216,234,224,0.70)',

                                                bgcolor:
                                                    'rgba(255,255,255,0.035)',

                                                backdropFilter:
                                                    'blur(8px)',

                                                WebkitBackdropFilter:
                                                    'blur(8px)',

                                                transition:
                                                    'color 220ms ease, border-color 220ms ease, background-color 220ms ease',
                                            }}
                                        >
                                            <Icon
                                                size={
                                                    17
                                                }
                                                strokeWidth={
                                                    1.6
                                                }
                                            />
                                        </Box>

                                        <Typography
                                            className="contact-label"
                                            sx={{
                                                fontSize:
                                                    11,

                                                fontWeight:
                                                    700,

                                                letterSpacing:
                                                    '0.15em',

                                                textTransform:
                                                    'uppercase',

                                                color:
                                                    'rgba(211,229,219,0.54)',

                                                transition:
                                                    'color 220ms ease',
                                            }}
                                        >
                                            {t(
                                                item.labelKey
                                            )}
                                        </Typography>
                                    </Box>

                                    {/* VALUE */}

                                    <Box
                                        sx={{
                                            minWidth:
                                                0,
                                        }}
                                    >
                                        <Typography
                                            className="contact-mobile-label"
                                            sx={{
                                                display:
                                                    {
                                                        xs:
                                                            'block',

                                                        sm:
                                                            'none',
                                                    },

                                                mb: 0.75,

                                                fontSize:
                                                    10,

                                                fontWeight:
                                                    700,

                                                letterSpacing:
                                                    '0.14em',

                                                textTransform:
                                                    'uppercase',

                                                color:
                                                    'rgba(211,229,219,0.54)',

                                                transition:
                                                    'color 220ms ease',
                                            }}
                                        >
                                            {t(
                                                item.labelKey
                                            )}
                                        </Typography>

                                        <Typography
                                            className="contact-value"
                                            sx={{
                                                fontSize:
                                                    {
                                                        xs:
                                                            18,

                                                        sm:
                                                            24,

                                                        md:
                                                            30,
                                                    },

                                                lineHeight:
                                                    1.1,

                                                fontWeight:
                                                    600,

                                                letterSpacing:
                                                    '-0.035em',

                                                color:
                                                    'rgba(255,255,255,0.94)',

                                                overflowWrap:
                                                    'anywhere',

                                                transition:
                                                    'color 220ms ease, transform 300ms cubic-bezier(0.22, 1, 0.36, 1)',
                                            }}
                                        >
                                            {t(
                                                item.valueKey
                                            )}
                                        </Typography>
                                    </Box>

                                    {/* ARROW */}

                                    <Box
                                        className="contact-arrow"
                                        sx={{
                                            display:
                                                'grid',

                                            placeItems:
                                                'center',

                                            justifySelf:
                                                'end',

                                            width: {
                                                xs: 32,
                                                sm: 38,
                                            },

                                            height: {
                                                xs: 32,
                                                sm: 38,
                                            },

                                            color:
                                                'rgba(229,240,234,0.76)',

                                            transition:
                                                'color 220ms ease, transform 300ms cubic-bezier(0.22, 1, 0.36, 1)',
                                        }}
                                    >
                                        <ArrowUpRight
                                            size={
                                                22
                                            }
                                            strokeWidth={
                                                1.5
                                            }
                                        />
                                    </Box>
                                </Box>
                            );
                        }
                    )}
                </Box>

                {/* =====================================================
                    WORKING HOURS
                ===================================================== */}

                <Box
                    sx={{
                        position: 'relative',

                        mt: {
                            xs: 7,
                            md: 10,
                        },

                        display: 'grid',

                        gridTemplateColumns:
                            {
                                xs: '1fr',

                                md:
                                    'minmax(0, 0.75fr) minmax(0, 1.25fr)',
                            },

                        border:
                            '1px solid rgba(255,255,255,0.11)',

                        bgcolor:
                            'rgba(255,255,255,0.025)',

                        backdropFilter:
                            'blur(14px)',

                        WebkitBackdropFilter:
                            'blur(14px)',

                        overflow: 'hidden',

                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: -1,
                            left: 0,
                            width: 70,
                            height: 2,
                            bgcolor: '#68b58c',
                            zIndex: 2,
                        },

                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            right: -100,
                            top: -100,
                            width: 260,
                            height: 260,
                            borderRadius: '50%',
                            bgcolor:
                                'rgba(53,132,91,0.08)',
                            filter:
                                'blur(50px)',
                            pointerEvents:
                                'none',
                        },
                    }}
                >
                    {/* WORKING HOURS LEFT */}

                    <Box
                        sx={{
                            position:
                                'relative',

                            zIndex: 1,

                            py: {
                                xs: 4,
                                md: 5,
                            },

                            px: {
                                xs: 3,
                                md: 4,
                            },

                            pr: {
                                md: 7,
                            },

                            borderRight:
                                {
                                    xs:
                                        'none',

                                    md:
                                        '1px solid rgba(255,255,255,0.11)',
                                },

                            borderBottom:
                                {
                                    xs:
                                        '1px solid rgba(255,255,255,0.11)',

                                    md:
                                        'none',
                                },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems:
                                    'center',
                                gap: 2,
                                mb: 2.5,
                            }}
                        >
                            <Box
                                sx={{
                                    display:
                                        'grid',

                                    placeItems:
                                        'center',

                                    width: 44,
                                    height: 44,

                                    flexShrink: 0,

                                    border:
                                        '1px solid rgba(255,255,255,0.14)',

                                    color:
                                        '#79bd98',

                                    bgcolor:
                                        'rgba(255,255,255,0.035)',
                                }}
                            >
                                <Clock3
                                    size={
                                        19
                                    }
                                    strokeWidth={
                                        1.6
                                    }
                                />
                            </Box>

                            <Typography
                                sx={{
                                    fontSize:
                                        11,

                                    fontWeight:
                                        700,

                                    letterSpacing:
                                        '0.16em',

                                    textTransform:
                                        'uppercase',

                                    color:
                                        'rgba(211,229,219,0.55)',
                                }}
                            >
                                {t(
                                    'contactPage.details.workingHours.eyebrow'
                                )}
                            </Typography>
                        </Box>

                        <Typography
                            sx={{
                                maxWidth:
                                    390,

                                fontSize: {
                                    xs: 24,
                                    md: 30,
                                },

                                lineHeight:
                                    1.2,

                                letterSpacing:
                                    '-0.035em',

                                fontWeight:
                                    600,

                                color:
                                    'rgba(255,255,255,0.94)',
                            }}
                        >
                            {t(
                                'contactPage.details.workingHours.title'
                            )}
                        </Typography>
                    </Box>

                    {/* WORKING HOURS RIGHT */}

                    <Box
                        sx={{
                            position:
                                'relative',

                            zIndex: 1,

                            py: {
                                xs: 1.5,
                                md: 2.5,
                            },

                            px: {
                                xs: 3,
                                md: 4,
                            },

                            pl: {
                                md: 7,
                            },
                        }}
                    >
                        {workingHours.map(
                            (
                                item,
                                index
                            ) => (
                                <Box
                                    key={
                                        item.id
                                    }
                                    sx={{
                                        display:
                                            'flex',

                                        alignItems:
                                            'center',

                                        justifyContent:
                                            'space-between',

                                        gap: 3,

                                        minHeight:
                                            68,

                                        borderBottom:
                                            index <
                                            workingHours.length -
                                                1
                                                ? '1px solid rgba(255,255,255,0.09)'
                                                : 'none',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize:
                                                {
                                                    xs:
                                                        13,

                                                    md:
                                                        14,
                                                },

                                            color:
                                                'rgba(211,229,219,0.60)',
                                        }}
                                    >
                                        {t(
                                            item.labelKey
                                        )}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize:
                                                {
                                                    xs:
                                                        13,

                                                    md:
                                                        14,
                                                },

                                            fontWeight:
                                                600,

                                            color:
                                                item.highlight
                                                    ? '#79bd98'
                                                    : 'rgba(255,255,255,0.90)',
                                        }}
                                    >
                                        {item.valueKey
                                            ? t(
                                                  item.valueKey
                                              )
                                            : item.value}
                                    </Typography>
                                </Box>
                            )
                        )}
                    </Box>
                </Box>

                {/* =====================================================
                    BOTTOM MICRO COPY
                ===================================================== */}

                <Box
                    sx={{
                        display: 'flex',
                        alignItems:
                            'center',
                        gap: 1.5,
                        mt: 3,
                    }}
                >
                    <Box
                        sx={{
                            display: 'grid',
                            placeItems:
                                'center',

                            width: 26,
                            height: 26,

                            border:
                                '1px solid rgba(255,255,255,0.12)',

                            color:
                                '#79bd98',
                        }}
                    >
                        <Activity
                            size={13}
                            strokeWidth={
                                1.6
                            }
                        />
                    </Box>

                    <Typography
                        sx={{
                            fontSize: 11,
                            fontWeight: 600,

                            letterSpacing:
                                '0.1em',

                            textTransform:
                                'uppercase',

                            color:
                                'rgba(211,229,219,0.48)',
                        }}
                    >
                        MBA Metal
                    </Typography>

                    <Box
                        sx={{
                            width: {
                                xs: 30,
                                sm: 64,
                            },

                            height: '1px',

                            bgcolor:
                                'rgba(121,189,152,0.30)',
                        }}
                    />
                </Box>
            </Container>
        </Box>
    );
}

export default ContactDetailsSection;